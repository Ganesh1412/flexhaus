#!/usr/bin/env python3
"""
run_pipeline.py
================
Runs the three-agent business diagnostic pipeline end-to-end:

    Researcher Agent  -->  Designer Agent  -->  Manager Agent

Each agent is defined by its own system-prompt markdown file
(ResearcherAgent.md, DesignerAgent.md, ManagerAgent.md). This script:

  1. Loads a business input (YAML).
  2. Calls Claude as the Researcher Agent -> gets a full diagnostic.
  3. Extracts the Researcher's "E. For Designer Agent" handoff section,
     wraps it the way the Designer Agent expects, and calls Claude as
     the Designer Agent -> gets a full service design.
  4. Extracts the Designer's "E. For Manager Agent" handoff section,
     wraps it the way the Manager Agent expects, and calls Claude as
     the Manager Agent -> gets the final 90-day business plan.
  5. Saves every stage's full output to disk, plus a combined report.

Setup
-----
    pip install anthropic pyyaml --break-system-packages
    export ANTHROPIC_API_KEY="sk-ant-..."

Usage
-----
    python run_pipeline.py business_input.yaml
    python run_pipeline.py business_input.yaml --outdir ./results
    python run_pipeline.py business_input.yaml --model claude-sonnet-4-6

If no input file is given, a built-in KindredFarms example is used.
"""

import argparse
import datetime as dt
import os
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.exit(
        "Missing dependency 'pyyaml'.\n"
        "Install it with: pip install pyyaml --break-system-packages"
    )

try:
    import anthropic
except ImportError:
    sys.exit(
        "Missing dependency 'anthropic'.\n"
        "Install it with: pip install anthropic --break-system-packages"
    )


DEFAULT_MODEL = "claude-sonnet-4-6"
MAX_TOKENS = 4000

# Agent system-prompt files are expected to sit next to this script,
# unless overridden via --agents-dir.
AGENT_FILES = {
    "researcher": "ResearcherAgent.md",
    "designer": "DesignerAgent.md",
    "manager": "ManagerAgent.md",
}

# Fallback example input, used if the user runs the script with no
# arguments. Mirrors Researchinput.yaml from the pipeline design.
EXAMPLE_INPUT = """\
Business: KindredFarms
Sector: AgriTech / Direct-to-Consumer
Model: Farm-to-fork subscription
Current state:
- 8,500 subscribers
- 60% churn every winter
- 3,000 summer waitlist
- no conversion strategy
Lens:
Experience and Retention
Goal:
Reducing friction, increasing satisfaction, and building lasting relationships
"""


def load_agent_prompt(agents_dir: Path, agent_key: str) -> str:
    """Read an agent's system-prompt markdown file from disk."""
    path = agents_dir / AGENT_FILES[agent_key]
    if not path.exists():
        sys.exit(
            f"Could not find {path}.\n"
            f"Make sure {AGENT_FILES[agent_key]} is in the same folder as "
            f"this script, or pass --agents-dir pointing to where it lives."
        )
    return path.read_text(encoding="utf-8")


def call_agent(client: anthropic.Anthropic, model: str, system_prompt: str,
                user_message: str, max_tokens: int = MAX_TOKENS) -> str:
    """Make a single Claude API call for one agent stage and return its text."""
    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        system=system_prompt,
        messages=[{"role": "user", "content": user_message}],
    )
    # Concatenate all text blocks in the response (normally just one).
    return "".join(block.text for block in response.content if block.type == "text")


def extract_section(full_text: str, section_label: str, strip_heading: bool = True) -> str:
    """
    Pull a lettered section (e.g. "E. For Designer Agent") out of an
    agent's full output, up to the next lettered section or end of text.
    Falls back to the full text if the section heading can't be found,
    so the pipeline degrades gracefully instead of crashing on a
    formatting drift.

    If strip_heading is True, the section's own heading line (e.g.
    "E. For Designer Agent") is dropped from the returned text, since
    the pipeline re-adds its own framing line ("Received from ... Agent:")
    when building the next stage's input.
    """
    pattern = rf"^{re.escape(section_label)}.*?(?=^[A-F]\.\s|\Z)"
    match = re.search(pattern, full_text, flags=re.MULTILINE | re.DOTALL)
    if not match:
        print(
            f"  [warning] Could not isolate section '{section_label}' — "
            f"passing the full output forward instead.",
            file=sys.stderr,
        )
        return full_text.strip()

    section_text = match.group(0).strip()
    if strip_heading:
        lines = section_text.splitlines()
        letter = section_label.split(".", 1)[0]
        if lines and lines[0].strip().startswith(letter + "."):
            section_text = "\n".join(lines[1:]).strip()
    return section_text


def extract_priorities(researcher_output: str) -> list:
    """Pull the ranked priority names out of the Researcher Agent's Section D."""
    return re.findall(r"^Priority \d+:\s*(.+)$", researcher_output, flags=re.MULTILINE)


def extract_root_causes(researcher_output: str) -> list:
    """Pull the root cause cluster names out of the Researcher Agent's Section C."""
    return re.findall(
        r"^Root cause cluster \d+:\s*(.+)$", researcher_output, flags=re.MULTILINE
    )


def extract_design_principles(designer_output: str) -> list:
    """Pull the numbered design principles out of the Designer Agent's Section A."""
    section_a = extract_section(designer_output, "A. Design Principles")
    return re.findall(r"^\d+\.\s*(.+)$", section_a, flags=re.MULTILINE)


def build_designer_input(researcher_output: str) -> str:
    """
    Wrap the Researcher's handoff section in the exact shape the
    Designer Agent's input contract expects (see DesingerInput.md).
    """
    handoff = extract_section(researcher_output, "E. For Designer Agent")
    priorities = extract_priorities(researcher_output)
    root_causes = extract_root_causes(researcher_output)

    priority_lines = "\n".join(
        f"- Priority {i + 1}: {p.strip()}" for i, p in enumerate(priorities)
    )
    root_cause_line = ", ".join(rc.strip() for rc in root_causes)

    return (
        "Received from Researcher Agent:\n\n"
        f"{handoff}\n\n"
        "Additional diagnostic context:\n"
        f"{priority_lines}\n"
        f"- Root causes: {root_cause_line}\n"
    )


def build_manager_input(designer_output: str, researcher_output: str) -> str:
    """
    Wrap the Designer's handoff section in the exact shape the
    Manager Agent's input contract expects (see Maninput.md).

    Priorities are carried forward from the Researcher's output, since
    the Designer Agent doesn't restate "Priority N: ..." lines verbatim
    in its own body. Design principles come from the Designer's own
    Section A. This mirrors how context actually accumulates across the
    real three-agent pipeline.
    """
    handoff = extract_section(designer_output, "E. For Manager Agent")
    priorities = extract_priorities(researcher_output)
    principles = extract_design_principles(designer_output)

    priority_lines = "\n".join(
        f"- Priority {i + 1}: {p.strip()}" for i, p in enumerate(priorities)
    )
    principles_line = ", ".join(p.strip() for p in principles) if principles else ""

    return (
        "Received from Designer Agent:\n\n"
        f"{handoff}\n\n"
        "Context inherited from Researcher and Designer:\n"
        f"{priority_lines}\n"
        "- Design principles:\n"
        f"  {principles_line}\n"
    )


def main():
    parser = argparse.ArgumentParser(
        description="Run the Researcher -> Designer -> Manager business pipeline."
    )
    parser.add_argument(
        "input_file", nargs="?", default=None,
        help="Path to a business input YAML file (see Researchinput.yaml for the shape). "
             "If omitted, a built-in KindredFarms example is used."
    )
    parser.add_argument(
        "--agents-dir", default=str(Path(__file__).resolve().parent),
        help="Directory containing ResearcherAgent.md, DesignerAgent.md, ManagerAgent.md "
             "(default: same folder as this script)."
    )
    parser.add_argument(
        "--outdir", default="./pipeline_output",
        help="Directory to save stage outputs and the combined report (default: ./pipeline_output)."
    )
    parser.add_argument(
        "--model", default=DEFAULT_MODEL,
        help=f"Claude model string to use for all three stages (default: {DEFAULT_MODEL})."
    )
    parser.add_argument(
        "--max-tokens", type=int, default=MAX_TOKENS,
        help=f"Max output tokens per stage (default: {MAX_TOKENS})."
    )
    args = parser.parse_args()

    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit(
            "ANTHROPIC_API_KEY environment variable is not set.\n"
            "Set it with: export ANTHROPIC_API_KEY='sk-ant-...'"
        )

    agents_dir = Path(args.agents_dir)
    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    # --- Load business input ---
    if args.input_file:
        input_path = Path(args.input_file)
        if not input_path.exists():
            sys.exit(f"Input file not found: {input_path}")
        raw_input_text = input_path.read_text(encoding="utf-8")
        print(f"Loaded business input from {input_path}")
    else:
        raw_input_text = EXAMPLE_INPUT
        print("No input file given — using the built-in KindredFarms example.")

    # Best-effort YAML sanity check. The agents consume this as raw text
    # either way, and real-world input files (like the original
    # Researchinput.yaml) sometimes use loose/bare formatting that isn't
    # strictly valid YAML — so a parse issue is a warning, not a blocker.
    try:
        yaml.safe_load(raw_input_text)
    except yaml.YAMLError as e:
        print(
            f"  [warning] Input file did not parse as strict YAML "
            f"(continuing anyway, since it's sent as raw text):\n  {e}",
            file=sys.stderr,
        )

    client = anthropic.Anthropic()

    # --- Stage 1: Researcher Agent ---
    print("\n[1/3] Running Researcher Agent...")
    researcher_prompt = load_agent_prompt(agents_dir, "researcher")
    researcher_output = call_agent(
        client, args.model, researcher_prompt, raw_input_text, args.max_tokens
    )
    (outdir / "01_researcher_output.md").write_text(researcher_output, encoding="utf-8")
    print("  Done. Saved to 01_researcher_output.md")

    # --- Stage 2: Designer Agent ---
    print("\n[2/3] Running Designer Agent...")
    designer_input = build_designer_input(researcher_output)
    (outdir / "02_designer_input.md").write_text(designer_input, encoding="utf-8")
    designer_prompt = load_agent_prompt(agents_dir, "designer")
    designer_output = call_agent(
        client, args.model, designer_prompt, designer_input, args.max_tokens
    )
    (outdir / "02_designer_output.md").write_text(designer_output, encoding="utf-8")
    print("  Done. Saved to 02_designer_output.md")

    # --- Stage 3: Manager Agent ---
    print("\n[3/3] Running Manager Agent...")
    manager_input = build_manager_input(designer_output, researcher_output)
    (outdir / "03_manager_input.md").write_text(manager_input, encoding="utf-8")
    manager_prompt = load_agent_prompt(agents_dir, "manager")
    manager_output = call_agent(
        client, args.model, manager_prompt, manager_input, args.max_tokens
    )
    (outdir / "03_manager_output.md").write_text(manager_output, encoding="utf-8")
    print("  Done. Saved to 03_manager_output.md")

    # --- Combined report ---
    timestamp = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
    combined = (
        f"# Business Diagnostic & Action Pipeline\n"
        f"Generated: {timestamp}  |  Model: {args.model}\n\n"
        f"---\n\n## Business Input\n\n```yaml\n{raw_input_text.strip()}\n```\n\n"
        f"---\n\n## Stage 1 — Researcher Agent\n\n{researcher_output.strip()}\n\n"
        f"---\n\n## Stage 2 — Designer Agent\n\n{designer_output.strip()}\n\n"
        f"---\n\n## Stage 3 — Manager Agent (Final Deliverable)\n\n{manager_output.strip()}\n"
    )
    combined_path = outdir / "00_combined_report.md"
    combined_path.write_text(combined, encoding="utf-8")

    print(f"\nPipeline complete. All outputs saved in: {outdir.resolve()}")
    print(f"Combined report: {combined_path.resolve()}")


if __name__ == "__main__":
    main()
