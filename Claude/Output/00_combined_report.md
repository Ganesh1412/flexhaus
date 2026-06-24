# Business Diagnostic & Action Pipeline
Generated: 2026-06-25 00:25  |  Model: claude-sonnet-4-6

---

## Business Input

```yaml
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
```

---

## Stage 1 — Researcher Agent

A. Problem Framing
KindredFarms has demonstrated strong market demand — 8,500 active subscribers and a 3,000-person summer waitlist signal clear product-market fit. The critical tension, viewed through an experience and retention lens, is that the business is winning customers without building relationships: 60% winter churn reveals that the experience is not durable enough to sustain perceived value across seasons, and the untouched waitlist indicates that even the top of the funnel lacks the structured engagement needed to convert high-intent prospects into loyal, long-term subscribers.

---

B. Three Critical Challenges

**1. Catastrophic Seasonal Churn**
- A 60% winter churn rate is not marginal seasonal softness — it is a near-majority collapse of the subscriber base, indicating that the experience fails to maintain relevance when product variety, growing conditions, or consumer habits shift in the off-season.
- The churn pattern suggests customers experience a sharp drop in perceived value rather than a gradual decline, pointing to a cliff-edge in the experience design rather than a slow erosion of satisfaction. (Inference: no winter-specific re-framing or value-bridging mechanism appears to exist.)

Business impact:
- Revenue volatility at scale: losing ~5,100 subscribers each winter creates a recurring rebuild cycle that inflates reacquisition cost and suppresses LTV.
- The need to re-fill from a waitlist each summer masks the true cost of churn, creating a false signal of health that defers structural fixes.

Customer impact:
- Customers perceive the subscription as a summer utility rather than a year-round relationship, making cancellation feel like a natural and low-friction choice rather than a loss.
- There is no apparent experience-layer that creates a cost — emotional, social, or habitual — to leaving.

---

**2. Absence of a Lifecycle Engagement Architecture**
- The current experience appears transactional: customers receive product but likely encounter no structured onboarding journey, no proactive mid-cycle engagement, and no save or re-engagement mechanism before the winter cancellation window opens. (Inference based on absence of any lifecycle or engagement metrics in the input.)
- Without a defined lifecycle — onboarding, habit formation, loyalty reinforcement, pre-churn intervention — each subscriber's relationship with KindredFarms is determined by the product alone, with no experience scaffolding to deepen attachment or signal value during low-produce periods.

Business impact:
- Every subscriber who churns exits without having been exposed to a retention mechanism, meaning the business is absorbing preventable revenue loss.
- Low engagement depth also suppresses the likelihood of advocacy, referral, or community-driven retention — compounding the reacquisition cost problem.

Customer impact:
- Subscribers receive no recognition of their loyalty, no personalised touchpoints, and no sense of belonging to something larger than a delivery arrangement, making the relationship easy to deprioritise or end.
- Customers who might have stayed with a modest nudge — a flexible plan option, a seasonal re-framing, a community connection — are not being reached.

---

**3. Unstructured Waitlist with No Nurture Pathway**
- A 3,000-person waitlist represents substantial declared demand, but without a conversion strategy, these prospects are sitting in a holding state with no experience touchpoints, no narrative reinforcement, and no mechanism to sustain or deepen their intent over time.
- High-intent prospects in an unstructured waitlist face a predictable decay curve: motivation weakens, alternatives are explored, and by the time capacity opens, a meaningful portion will no longer convert at the rate they would have at the moment of sign-up. (Inference: no staged or conditional access, early engagement content, or onboarding preview appears to exist.)

Business impact:
- The 3,000-person waitlist is a latent revenue asset that is not being protected or cultivated, creating a structural leak in the acquisition funnel at the highest-intent stage.
- If winter churners are being replaced by waitlist conversions each summer, the business is running a replacement cycle rather than a growth curve — the waitlist is plugging a retention hole, not generating incremental subscribers.

Customer impact:
- Waitlisted prospects have already expressed strong interest but receive no acknowledgement of their commitment, no community access, and no experience of the KindredFarms relationship before they subscribe — meaning first impressions are delayed and cold.

---

C. Root Causes

**Root cause cluster 1: Seasonal value architecture does not exist**
- The product offer changes with the seasons, but the experience layer does not adapt to match. Winter produce is positioned as a like-for-like continuation of summer volume rather than a distinct, re-framed seasonal value. This means customers evaluate winter on summer's terms and find it lacking, triggering cancellation rather than adjustment of expectations.
- This cluster is the primary driver of Challenge 1 (seasonal churn).

**Root cause cluster 2: No lifecycle design — the experience is product-led, not relationship-led**
- KindredFarms appears to have designed the product but not the customer journey. There is no evidence of structured onboarding to build early habit and emotional investment, no mid-lifecycle engagement cadence to maintain relevance, and no pre-churn intervention layer to catch at-risk subscribers before they act.
- This cluster drives both Challenge 1 (churn goes unintercepted) and Challenge 2 (engagement remains shallow throughout the relationship).

**Root cause cluster 3: Flexibility deficit — the subscription is binary**
- The input contains no indication of pause, downgrade, or seasonal modification options. If the only exit available to a dissatisfied or circumstance-changed subscriber is cancellation, the churn rate will structurally reflect all forms of dissatisfaction and life disruption — not just irrecoverable customers. A binary model converts every wobble into a full exit.
- This is a compounding driver of Challenge 1: some portion of the 60% winter churn likely represents customers who would have paused rather than cancelled if the option existed.

**Root cause cluster 4: Weak emotional and relational differentiation**
- A farm-to-fork model has inherent narrative richness — provenance, seasonality, sustainability, farmer relationships — that can create strong emotional differentiation from a supermarket or meal-kit alternative. The experience, as described, does not appear to leverage this. Without community, storytelling, or identity-level connection, the subscription competes on product quality alone, which is insufficient to retain customers through seasonal dips.
- This cluster underlies Challenge 2: the experience is not generating the loyalty depth needed to make churn feel costly.

**Root cause cluster 5: Funnel design stops at sign-up**
- The business has a functional acquisition mechanism (waitlist) but no experience architecture that begins at the point of sign-up. The waitlist is treated as an administrative queue rather than the opening chapter of a customer relationship. This means first-time subscribers arrive without prior engagement, narrative investment, or community belonging — making their first-cycle experience the sole determinant of early retention.
- This cluster is the primary driver of Challenge 3 and also weakens early-stage retention under Challenge 2, since subscribers with no pre-onboarding engagement are more likely to churn within the first season.

---

D. Prioritisation

**Priority 1: Catastrophic Seasonal Churn**
Reason: Losing 60% of 8,500 subscribers each winter is the single largest revenue and LTV threat, and it is recurring — every year this goes unaddressed, the compounding cost grows.

**Priority 2: Absence of a Lifecycle Engagement Architecture**
Reason: This is the upstream structural cause of both the churn rate and the shallow customer relationships; fixing churn without fixing lifecycle design produces only incremental gains.

**Priority 3: Unstructured Waitlist with No Nurture Pathway**
Reason: The waitlist is a high-value, time-sensitive asset at risk of decay, but its urgency is slightly lower than the retention failures that are actively destroying existing subscriber value.

---

E. For Designer Agent

Design a service model / solution that:

1. **Re-architects the winter experience as a distinct seasonal value proposition** — not a reduced version of summer, but a re-framed offer that meets winter-specific customer needs, behaviours, and expectations, so that the perceived value cliff between seasons is eliminated and winter cancellation no longer feels like the rational choice.

2. **Builds a full subscriber lifecycle with defined stages and engagement mechanisms at each** — specifically: an onboarding phase that creates early habit and emotional investment within the first subscription cycle; a mid-cycle engagement cadence that maintains relevance and surfaces value between deliveries; and a pre-churn intervention layer that identifies and reaches at-risk subscribers before the cancellation window opens each autumn.

3. **Introduces flexibility into the subscription structure** to ensure that dissatisfaction, life disruption, or seasonal ambivalence results in a modified relationship rather than an automatic exit — the design must create off-ramps that retain the subscriber in some form, rather than forcing a binary stay-or-cancel decision.

4. **Transforms the waitlist into the opening chapter of the subscriber relationship** — the nurture pathway must begin at the moment of waitlist registration, sustaining intent, building narrative and community connection, and ensuring that the first delivery arrives as a continuation of an established relationship rather than a cold first contact.

5. **Embeds KindredFarms' provenance, seasonality, and farmer relationships into the ongoing experience** as emotional and identity-level differentiation — the design must create reasons to stay that go beyond product quality alone, making the subscriber's relationship with KindredFarms feel costly to abandon.

6. **Connects every design choice to the specific KPIs implied by the current state**: winter churn rate (target: materially below 60%), active subscriber count at winter trough, waitlist-to-subscriber conversion rate, subscriber retention past first winter cycle, and second-order/reactivation rate for previously churned customers.

---

## Stage 2 — Designer Agent

# KindredFarms — Designer Agent Output

---

**Note on missing context:** The Researcher Agent's handoff did not supply named Priority 1/2/3 labels or a populated root cause list. The six design objectives have been treated as the full diagnostic brief. All design elements below trace explicitly to a numbered objective rather than a named priority or root cause cluster. No root causes have been invented.

---

## A. Design Principles

Using the Researcher Agent's objectives, the target-state design must address:

- The perceived value cliff between summer and winter seasons (Objective 1)
- The absence of a structured subscriber lifecycle with stage-specific engagement (Objective 2)
- Binary stay-or-cancel subscription logic with no middle ground (Objective 3)
- A cold, transactional waitlist-to-first-delivery handoff (Objective 4)
- Weak emotional and identity-level differentiation beyond product quality (Objective 5)
- Disconnection between experience design choices and measurable retention KPIs (Objective 6)

**Six design principles:**

1. **Winter as a distinct season, not a diminished one** — the winter offer is re-framed, not apologised for
2. **Relationship before first delivery** — the subscriber journey begins at waitlist registration, not at the box arriving on the doorstep
3. **Flexibility before exit** — every cancellation signal should encounter a meaningful off-ramp before the door closes
4. **Lifecycle orchestration over broadcast communication** — every message and touchpoint earns its place by serving a defined stage-specific purpose
5. **Provenance as emotional infrastructure** — farmer relationships, land stories, and seasonal narrative are woven into the product experience, not bolted on as marketing content
6. **Design choices are measurable** — every major component maps to a specific KPI; if it can't be measured, it doesn't belong in the model

---

## B. Target-State Experience Model

### 1. Winter Distinct Value Proposition

**Concept:** Winter is positioned as "The Root Season" — a premium, slow-food, larder-building experience with its own identity, aesthetic, and content universe. It is not a smaller summer box. It is a different product with a different emotional register: warmth, depth, provenance, craft.

**Components:**
- A renamed, rebranded winter subscription tier: *The Root Season Box* — distinct packaging cues (e.g. kraft label, winter palette) that signal intentional seasonal design, not a default continuation
- Winter-specific box contents built around storage crops, brassicas, alliums, and root vegetables — curated as larder staples rather than salad-and-tomato freshness
- Three recipe formats per delivery: one "weeknight root" (fast), one "Sunday slow cook" (batch cooking), one "preserve or ferment" (extending shelf life and teaching larder craft)
- A seasonal "Grower's Letter" — a short, handwritten-style note from the farmer supplying the hero crop in that week's box, describing growing conditions, harvest timing, and one eating suggestion
- A winter landing page and onboarding communication that explicitly re-frames the season: "Winter at KindredFarms looks different — here's why that's the point"

**Purpose:**
Directly addresses **Objective 1** — eliminates the perceived value cliff by making winter feel purposefully different rather than objectively lesser. Also addresses **Objective 5** by embedding provenance (the Grower's Letter) as a standard product component, not optional marketing content.

---

### 2. Structured Subscriber Lifecycle Model

**Concept:** The subscriber journey is divided into five defined stages — Waitlist, Onboarding, Active, At-Risk, and Dormant/Win-Back — each with its own engagement logic, content, and success condition. No subscriber falls through an unmanaged gap between stages.

**Components:**

**Onboarding (first 28 days / first two deliveries):**
- A pre-delivery "What's coming" email sent 48 hours before the first box, including the grower story for the hero crop and one recipe suggestion — so the customer is already invested before the box arrives
- A physical "Welcome to KindredFarms" card inside box one, framing the farm relationships and the seasonal growing calendar in one visual
- A post-delivery-one satisfaction nudge (SMS or email): a single question — "How was your first box?" — with a 1–5 rating and an optional free-text field
- A week-three "Have you tried this yet?" email surfacing the recipe from box one that generates the most engagement (personalised by stated dietary preference if captured at sign-up)
- A 30-day check-in: brief, human-toned, asking what they've loved, surfacing the pause or swap option proactively

**Mid-cycle engagement (delivery 3 through end of summer season):**
- A weekly "Tuesday Table" email — arrives the day before typical delivery day, contains one recipe, one farm update, and one subscriber-generated use of a previous ingredient (sourced from community submissions)
- A quarterly "Season Preview" email — signals what's coming in the next growing period, builds anticipation, re-establishes the seasonal narrative
- A bi-annual "Your KindredFarms Year" personalised summary — crops received, farms connected to, estimated food miles saved — a lightweight identity-reinforcement moment

**Pre-churn layer (August–September trigger):**
- An automated segment identifying subscribers approaching their first winter (i.e. joined in spring or summer, never experienced a KindredFarms winter)
- A dedicated "Welcome to your first Root Season" communication sent in late September — explains what winter looks like, sets expectations, introduces the winter box format
- A September opt-in prompt: "Tell us how you want to experience winter" — offering choice between full winter box, reduced-frequency plan, or a winter pause with guaranteed spring re-entry

**Purpose:**
Directly addresses **Objective 2** — builds the full lifecycle with defined stage logic. The pre-churn layer directly targets the autumn cancellation window. The onboarding sequence addresses early emotional investment within the first subscription cycle.

---

### 3. Flexible Subscription Architecture

**Concept:** The subscription structure offers four relationship modes, not one. Subscribers can shift between modes without cancelling. Every cancellation attempt surfaces the mode options before the exit is confirmed.

**Components:**
- **Full Subscription** — standard weekly or fortnightly delivery, current model
- **Seasonal Flex** — subscriber selects active seasons (e.g. spring/summer only); winter months are paused by design, not by cancellation; spring re-entry is automatic and pre-confirmed
- **Low-Frequency Winter Plan** — monthly delivery during November–February, positioned as a "larder drop" rather than a weekly fresh box; priced to reflect the lower cadence
- **Pause with Return Date** — subscriber sets a return date at the point of pause (minimum 2 weeks, maximum 12 weeks); a re-engagement email fires one week before return date with a "your first box back" preview
- **Cancellation off-ramp screen** — before cancellation is confirmed, the subscriber is shown their current mode, all alternative modes, and a single prompt: "Before you go — which of these works better for you right now?" with one-click mode switching

**Purpose:**
Directly addresses **Objective 3** — removes the binary stay-or-cancel logic. The Seasonal Flex plan specifically targets the winter churn pattern by making a winter pause a pre-designed feature, not a failure state. The pause-with-return-date mechanism keeps the subscriber in the lifecycle and on the win-back radar.

---

### 4. Waitlist Relationship Journey

**Concept:** The waitlist is treated as Stage 0 of the subscriber lifecycle, not a holding pen. From the moment of registration, the prospective subscriber receives a structured nurture experience that builds narrative, community identity, and seasonal anticipation — so that by the time a slot opens, they feel they already belong.

**Components:**
- **Registration confirmation:** Not a generic "you're on the list" email. A personal, farm-voiced message from the KindredFarms team — introduces one farmer by name, tells them what's growing right now, and sets the expectation: "We'll keep you close while you wait."
- **Monthly waitlist dispatch** ("From the fields"): a short, story-led email — one growing update, one seasonal recipe, one community moment (e.g. a subscriber's table photo or a farmer's market find). Arrives on a consistent date. Feels like a publication, not marketing.
- **Slot release communication:** A personalised, specific email — not a bulk "slots available" blast. References the season the subscriber will be joining, introduces the first box they'll receive, and links directly to a streamlined sign-up completion flow. Creates a sense of curated invitation rather than a queue finally moving.
- **Waitlist-to-onboarding handoff:** At conversion, the welcome sequence references the waitlist period explicitly — "You've been with us since [month]. Here's what's been growing since then." Continuity of relationship, not a cold start.
- **Referral mechanic within waitlist:** Waitlist subscribers who refer a friend who also joins the waitlist receive a "front of queue" signal and a small welcome credit on first delivery — incentivises community building and increases conversion intent.

**Purpose:**
Directly addresses **Objective 4** — transforms the waitlist from a passive queue into the opening chapter of the subscriber relationship. Also contributes to **Objective 5** by establishing the provenance narrative and farmer identity before the first delivery arrives.

---

### 5. Provenance and Identity Layer

**Concept:** KindredFarms builds an ambient, always-present identity experience around its farmer relationships and growing calendar — embedded into the product, the packaging, the digital touchpoints, and the subscriber's sense of self. The goal is that cancelling KindredFarms feels like severing a community relationship, not just ending a food delivery.

**Components:**
- **Farmer profiles:** A permanent, growing library — each supplying farm has a profile page (accessible via QR code in-box and linked from every weekly email) covering the family, the land, the growing approach, and current season. Updated each season. Subscribers can "follow" farms they feel connected to and receive a notification when that farm's produce appears in their box.
- **"Your farm this week" in-box card:** Every delivery includes a small card identifying which farms contributed to this specific box, with a one-line growing note per farm. Not a pamphlet — a card. Collectible by design.
- **Seasonal growing calendar as subscriber artefact:** Sent once per year (spring), a visual A3 or digital equivalent showing the full growing year across KindredFarms' farm network — what grows when, where, and from whom. Positions the subscriber as a participant in a calendar, not a consumer of a product.
- **Community moments:** A lightweight subscriber community touchpoint — not a full forum, but a monthly prompt ("What did you make with last week's celeriac?") surfaced via email with a curated selection of responses published the following month. Creates social proof and identity reinforcement without requiring platform investment.
- **Anniversary recognition:** On a subscriber's one-year mark, they receive a personalised note — how many boxes, which farms, which seasons — framed as a shared year, not a loyalty reward.

**Purpose:**
Directly addresses **Objective 5** — creates identity-level and emotional differentiation that makes the subscriber relationship feel costly to abandon. The farmer-follow mechanic and anniversary recognition are explicitly designed to increase perceived relationship investment beyond product quality alone.

---

### 6. KPI-Anchored Experience Performance Framework

**Concept:** Each design element has a defined measurement point. The experience model is not evaluated on activity (emails sent, content published) but on the stage-specific outcomes it was built to move.

**Components:**
- A subscriber stage dashboard tracking: waitlist size and conversion rate; onboarding completion rate (defined as: received delivery 1 + responded to satisfaction nudge + reached delivery 3); active subscriber count at defined winter trough date (e.g. 1 February); winter retention rate; churn recovery rate from the cancellation off-ramp screen; reactivation rate for Seasonal Flex and paused subscribers
- A qualitative signal layer: monthly NPS pulse (single question, sent mid-cycle, not post-cancellation); delivery satisfaction score per box; free-text tagging on cancellation reason (mandatory one-click reason selection before exit is confirmed)
- An annual "experience audit" cycle: review of KPI movement against design intent, with a defined trigger threshold for redesign (e.g. if winter churn remains above 45% after two winters, the winter proposition is redesigned, not just re-marketed)

**Purpose:**
Directly addresses **Objective 6** — connects every design choice to measurable KPIs and builds in a feedback loop that keeps the experience model honest over time.

---

## C. Customer Journey Interventions

### Journey Stage 1: Waitlist

**Interventions:**
- Personalised, farm-voiced registration confirmation (not a generic autoresponder)
- Monthly "From the fields" dispatch — story-led, seasonal, consistent cadence
- Referral mechanic with queue-priority reward
- Slot release as curated personal invitation, referencing the specific upcoming season and first box

---

### Journey Stage 2: Onboarding (First 28 days)

**Interventions:**
- Pre-delivery "what's in your first box" email, 48 hours before arrival — grower story, recipe suggestion, anticipation framing
- Physical welcome card in box one: farm relationships, growing calendar visual, one human note
- Post-delivery-one satisfaction nudge: single-question micro-survey (1–5 + optional text)
- Week-three recipe re-surface email, personalised to stated preference
- 30-day human-toned check-in: what's landed, proactive mention of pause and swap options
- Waitlist-to-onboarding continuity message: "You've been with us since [month] — here's what's been growing"

---

### Journey Stage 3: Active Subscription (Mid-Cycle)

**Interventions:**
- Weekly "Tuesday Table" email: one recipe, one farm update, one community moment — arrives pre-delivery
- Farmer-follow notification: alert when a followed farm's produce appears in the upcoming box
- Quarterly Season Preview: what's coming, what's ending, what to expect — builds anticipation and reinforces seasonal narrative
- Bi-annual "Your KindredFarms Year" personalised summary: crops, farms, seasons, food miles — identity reinforcement moment
- Monthly community prompt and published responses: low-effort social proof and belonging signal

---

### Journey Stage 4: Pre-Churn / At-Risk (August–September)

**Interventions:**
- Automated segment: first-winter subscribers (joined spring/summer, no prior winter experience)
- "Welcome to your first Root Season" communication in late September: explicit winter re-frame, manages expectations, introduces the winter box format
- September preference prompt: "How do you want to experience winter?" — one-click selection of full box, low-frequency winter plan, or paused-with-spring-return
- Pre-churn off-ramp screen at any cancellation attempt: current mode displayed, all four modes offered, one-click switching before exit is confirmed
- Downgrade prompt for cost-driven churn signals: "Would a smaller box or lower frequency work better right now?" surfaced before cancellation is confirmed

---

### Journey Stage 5: Paused / Seasonal Flex

**Interventions:**
- Pause confirmation with return date set at point of pause — subscriber owns the return timeline
- One "we're keeping your spot" message mid-pause: a single farm update, no ask, no pressure
- Return-date preview email, fired one week before re-entry: "your first box back" contents, grower story, recipe — re-onboarding in miniature
- Seasonal Flex subscribers receive an "it's nearly your season" communication in late February/early March, ahead of spring re-entry — re-activates anticipation

---

### Journey Stage 6: Dormant / Win-Back

**Interventions:**
- Post-cancellation: a single, low-pressure "door is open" message 8 weeks after cancellation — references what's currently growing, no incentive pressure, simple re-join link
- Seasonal win-back campaign in February, targeting subscribers who cancelled in the prior autumn/winter: "Spring is almost here — come back for the season you came for"
- Reactivation offer for subscribers who cancelled citing cost: a first-box-back discount surfaced via the win-back campaign, framed as a "welcome back" rather than a discount mechanic
- Lapsed subscriber annual touchpoint: once per year (March), a "it's been a year — here's what you've missed" summary, with a one-click re-join prompt

---

## D. KPI Linkage

| Design Element | KPI(s) |
|---|---|
| Winter Distinct Value Proposition (Root Season Box) | Winter churn rate (target: materially below 60%); active subscriber count at winter trough (1 Feb); subscriber retention past first winter cycle |
| Structured Subscriber Lifecycle — Onboarding | 30-day retention rate; second-delivery conversion rate; on

---

## Stage 3 — Manager Agent (Final Deliverable)

# KindredFarms — Manager Agent Output: 90-Day Operational Plan

---

**Note on inherited context:** The Researcher Agent's named Priority 1/2/3 labels were not supplied in the handoff. This plan works directly from the Designer Agent's six numbered objectives, which are treated as the full diagnostic and design brief. No priorities have been invented. All six design principles are carried forward and referenced at the point of operationalisation.

---

## A. Objective

This plan operationalises the Designer Agent's six-objective experience model into a 90-day deployment for KindredFarms, targeting three interlocking problems: a seasonal value cliff that drives autumn/winter churn (Objectives 1 and 3), a subscriber lifecycle with no defined stage logic and a cold waitlist-to-delivery handoff (Objectives 2 and 4), and an identity and provenance layer that is currently absent or unstructured — leaving the brand without emotional stickiness beyond product quality (Objectives 5 and 6). Every workstream below is sized to pilot or partially ship within the quarter; where a Designer Agent component requires longer build time, a phase-one version is scoped rather than deferred entirely. The plan is written for immediate execution — a COO or founder should be able to assign owners and start Phase 1 on the day this document is read.

---

## B. Workstreams

**Workstream 1: Root Season Launch**
Maps to: Designer instruction #1 / Objectives 1 and 5 / Design principles: *Winter as a distinct season, not a diminished one*; *Provenance as emotional infrastructure*
Owner: Product & Merchandising
Scope: Reframe and repackage the winter subscription offer as *The Root Season Box* — distinct visual identity, winter-specific curation logic (storage crops, brassicas, alliums, root vegetables), three recipe formats per delivery, and a Grower's Letter as a standard in-box component. Pilot on a defined cohort before full winter rollout.

---

**Workstream 2: Subscription Flexibility Architecture**
Maps to: Designer instruction #3 / Objective 3 / Design principle: *Flexibility before exit*
Owner: Product & Tech (Retention Lead)
Scope: Build and ship the four subscription modes (Full, Seasonal Flex, Low-Frequency Winter, Pause with Return Date) and the cancellation off-ramp screen. Priority is the Pause with Return Date and Seasonal Flex modes, as these directly intercept the autumn churn window. The off-ramp screen ships alongside any mode that is live — it should never be absent when a cancellation attempt is made.

---

**Workstream 3: Subscriber Lifecycle Orchestration**
Maps to: Designer instruction #2 / Objectives 2 and 4 / Design principles: *Lifecycle orchestration over broadcast communication*; *Relationship before first delivery*
Owner: CX / Lifecycle Marketing
Scope: Build and activate the full five-stage lifecycle sequence — Waitlist nurture, Onboarding (first 28 days), Mid-cycle engagement, Pre-churn intervention (August–September trigger), and Paused/Seasonal Flex re-entry. Each stage has its own defined trigger logic, message set, and success condition. This workstream also covers the waitlist-to-onboarding continuity handoff so that converted waitlist subscribers receive a relationship-continuous welcome, not a cold start.

---

**Workstream 4: Provenance and Identity Layer**
Maps to: Designer instruction #5 / Objective 5 / Design principle: *Provenance as emotional infrastructure*
Owner: CX / Content
Scope: Stand up the minimum viable provenance infrastructure: farmer profile pages (accessible via QR in-box and linked from weekly emails), the "Your farm this week" delivery card, and the farmer-follow notification mechanic. The seasonal growing calendar artefact and anniversary recognition are scoped for Phase 3 or a subsequent quarter. Community prompt publishing begins in Phase 2 once baseline engagement is established.

---

**Workstream 5: Waitlist Conversion Programme**
Maps to: Designer instruction #4 / Objective 4 / Design principles: *Relationship before first delivery*; *Lifecycle orchestration over broadcast communication*
Owner: Growth Marketing
Scope: Activate the existing waitlist as Stage 0 of the subscriber lifecycle — ship the personalised registration confirmation rewrite, stand up the monthly "From the fields" dispatch, configure the referral mechanic with queue-priority reward, and redesign the slot-release email as a curated seasonal invitation. This workstream is distinct from Workstream 3 because it operates on a prospect population, requires different tooling triggers, and has its own conversion KPI.

---

**Workstream 6: KPI Infrastructure and Governance**
Maps to: Designer instruction #6 / Objective 6 / Design principle: *Design choices are measurable*
Owner: Analytics / Ops Lead
Scope: Instrument the subscriber stage dashboard (waitlist size and conversion rate; onboarding completion rate; active subscriber count at winter trough; winter retention rate; churn off-ramp recovery rate; Seasonal Flex and pause reactivation rate), configure the qualitative signal layer (monthly NPS pulse, delivery satisfaction score, mandatory cancellation reason selection), and run the Day-30/60/90 checkpoint cadence. Baseline measurement begins in Phase 1 for every KPI that does not already have a recorded figure.

---

## C. 90-Day Plan

### Phase 1: Days 1–30 — Foundation, Baselines, and Pilot Configuration

- **Finalise Root Season Box product spec:** confirm winter SKU list, Grower's Letter format, three recipe-format template, and packaging cues for pilot cohort. *(Workstream 1 / Product & Merchandising)*
- **Select pilot cohort for Root Season Box:** minimum 400–600 subscribers, stratified by tenure, plan type, and prior winter behaviour where data allows. Document cohort selection criteria before launch so Day-60 read-out is defensible. *(Workstream 1 / Product & Merchandising + Analytics)*
- **Ship Pause with Return Date mode** to subscriber portal — this is the single highest-priority tech build because it directly intercepts autumn churn and requires lead time before the August–September pre-churn window. Cancellation off-ramp screen ships simultaneously. *(Workstream 2 / Product & Tech)*
- **Begin Seasonal Flex and Low-Frequency Winter mode build** — target Day 45 ship date; if this slips, Pause with Return Date + off-ramp screen must not slip with it. *(Workstream 2 / Product & Tech)*
- **Rewrite waitlist registration confirmation email** — farm-voiced, introduces one farmer by name, describes what is currently growing. Ship to all new waitlist registrations from Day 1 and, as a one-time re-engagement send, to the existing waitlist backlog with appropriate framing. *(Workstream 5 / Growth Marketing)*
- **Configure "From the fields" monthly dispatch** — write and schedule first two issues; establish consistent send date. *(Workstream 5 / Growth Marketing)*
- **Build onboarding sequence (Phase 1 scope):** pre-delivery "what's in your first box" email (48-hour trigger), post-delivery satisfaction nudge (single question, 1–5 + optional text), and waitlist-to-onboarding continuity message. These three touchpoints are the minimum viable onboarding layer and must be live before new subscribers convert from the waitlist. *(Workstream 3 / CX / Lifecycle Marketing)*
- **Establish all KPI baselines:** pull current winter churn rate, current subscriber count, waitlist size, and any existing NPS or satisfaction data. Where no baseline exists, instrument the tracking so Day-30 data collection begins immediately. *(Workstream 6 / Analytics / Ops Lead)*
- **Commission farmer profile page builds** for the top five to eight supplying farms — these are the farms most likely to appear in the Root Season Box pilot. Target Day-45 live date. QR code integration into in-box cards is not required at pilot launch but must be confirmed as technically feasible. *(Workstream 4 / CX / Content)*

**Checkpoint (Day 30):**
*Decision:* Is the Root Season Box pilot cohort confirmed, fully specced, and on track for a Day 45–50 launch? Is the Pause with Return Date mode live and registering adoption? Are waitlist nurture sequences running and generating open/click data?
*Course correction triggers:* If the pause/off-ramp mode is not shipped by Day 30, escalate as a critical path risk — this must be live before September. If the pilot cohort is smaller than 400 subscribers or is demographically narrow, pause and reselect before proceeding. If the waitlist registration confirmation rewrite has not been sent to the existing backlog, complete this before any other Workstream 5 activity.

---

### Phase 2: Days 31–60 — Activation and Pre-Churn Readiness

- **Launch Root Season Box pilot** to confirmed cohort — full product experience including Grower's Letter and "Your farm this week" card. Delivery data collection begins immediately. *(Workstream 1 / Product & Merchandising)*
- **Ship Seasonal Flex and Low-Frequency Winter modes** to subscriber portal (target Day 45). *(Workstream 2 / Product & Tech)*
- **Launch pre-churn intervention sequence:** configure and activate the automated "first-winter subscriber" segment (joined spring/summer, no prior winter); ship "Welcome to your first Root Season" communication in late September framing (if Day 60 falls before late September, configure and schedule now for automatic send); activate September preference prompt — "How do you want to experience winter?" — with one-click mode selection. *(Workstream 3 / CX / Lifecycle Marketing)*
- **Activate full onboarding sequence** beyond the Phase 1 minimum: add the week-three recipe re-surface email (personalised by dietary preference if captured) and 30-day human-toned check-in with proactive mention of pause and swap options. *(Workstream 3 / CX / Lifecycle Marketing)*
- **Launch "Tuesday Table" weekly email** to all active subscribers — one recipe, one farm update, one community moment. This is the always-on mid-cycle engagement touchpoint and should run continuously from activation. *(Workstream 3 / CX / Lifecycle Marketing)*
- **Stand up farmer profile pages** for the pilot cohort's supplying farms — live, linked from weekly emails, QR-accessible in-box. *(Workstream 4 / CX / Content)*
- **Launch farmer-follow mechanic** — minimum viable version: subscribers can flag farms they want to follow via a link in the farmer profile page; a notification email fires when that farm's produce appears in the upcoming box. *(Workstream 4 / CX / Content + Tech)*
- **Activate waitlist referral mechanic** — queue-priority signal and welcome credit on first delivery for referrals. Configure tracking so referral-sourced conversions are identifiable in the KPI dashboard. *(Workstream 5 / Growth Marketing)*
- **Redesign slot-release email** as curated seasonal invitation — references the upcoming season and the subscriber's first box, links to streamlined sign-up completion flow. Ship to the next batch of waitlist slot openings. *(Workstream 5 / Growth Marketing)*
- **Run Day-45 mid-phase pulse:** review Root Season Box pilot early signal (delivery satisfaction scores, Grower's Letter engagement, recipe format engagement if trackable), pause/off-ramp adoption rate, and waitlist conversion rate from redesigned slot-release email. Not a formal checkpoint — an early-warning review. *(Workstream 6 / Analytics / Ops Lead)*

**Checkpoint (Day 60):**
*Decision:* Should the Root Season Box roll out beyond the pilot cohort to all subscribers entering winter? Is the pre-churn intervention sequence generating mode-switching behaviour (Seasonal Flex, Low-Frequency Winter, Pause with Return Date) before cancellation is confirmed? Is the waitlist slot-release redesign converting at a meaningfully higher rate than the prior generic blast?
*Course correction triggers:* If Root Season Box pilot satisfaction scores are below expectations or qualitative feedback indicates the winter re-frame is not landing, do not expand to full rollout — investigate the specific components (packaging? recipe formats? Grower's Letter tone?) before scaling. If the cancellation off-ramp screen is not generating any mode-switching (i.e. all subscribers who see it are still proceeding to cancel), audit the UX of the screen itself — the design may be insufficiently prominent or the modes may not be clearly explained. If the pre-churn segment is not automating correctly (wrong subscribers targeted, wrong timing), fix the segment logic before the September send window closes.

---

### Phase 3: Days 61–90 — Consolidation, Rollout, and Review

- **Full rollout of Root Season Box** to all subscribers entering winter, informed by pilot learnings. Apply any adjustments to Grower's Letter format, recipe mix, or packaging cues identified in Phase 2. *(Workstream 1 / Product & Merchandising)*
- **Complete the winter content universe:** publish the winter landing page and "Winter at KindredFarms looks different — here's why that's the point" onboarding communication to all new and transitioning subscribers. *(Workstream 1 / Product & Merchandising + CX)*
- **Activate Seasonal Flex and paused subscriber re-entry journey:** ship the "we're keeping your spot" mid-pause message and confirm the return-date preview email (one week before re-entry) is triggering correctly. *(Workstream 2 / CX / Lifecycle Marketing)*
- **Launch win-back sequence foundations:** configure and schedule the post-cancellation "door is open" message (8-week trigger); configure the February seasonal win-back campaign targeting autumn/winter cancellations for send in the subsequent quarter (this is a Day-90 configuration milestone, not a live send). *(Workstream 3 / CX / Lifecycle Marketing)*
- **Launch first monthly community prompt** via Tuesday Table email — one question, curated responses published the following month. *(Workstream 4 / CX / Content)*
- **Quarterly Season Preview email:** send to all active subscribers signalling the winter season and what to expect — reinforces seasonal narrative and reduces anticipation-driven churn for first-winter subscribers. *(Workstream 3 / CX / Lifecycle Marketing)*
- **Complete farmer profile library** to cover all farms active in the winter supply chain. *(Workstream 4 / CX / Content)*
- **Configure mandatory cancellation reason selection** — one-click reason field before exit is confirmed; begin tagging free-text responses. This data will be essential for the experience audit and future iteration. *(Workstream 6 / Analytics / Ops Lead)*
- **Compile Day-90 performance review:** full KPI dashboard read-out against all targets; qualitative signal summary from delivery satisfaction scores, NPS pulse, and cancellation reasons; workstream-level assessment of what shipped on time, what slipped, and what delivered signal. *(Workstream 6 / Analytics / Ops Lead)*

**Checkpoint (Day 90):**
*Decision:* Go/scale/iterate/walk away across each workstream. Specifically: (1) Is the Root Season Box reducing winter churn signal versus prior-year baseline — if yes, commit to full seasonal operation and begin planning for next winter's iteration; if no, the proposition design needs redesign, not re-marketing. (2) Are the flexible subscription modes being used — if Seasonal Flex and Low-Frequency Winter adoption is near zero despite the off-ramp screen being live, the value of these modes may be in their existence (i.e. the off-ramp screen may still reduce cancellations without mode uptake), but investigate further. (3) Is the waitlist nurture programme converting at a higher rate than baseline — if yes, invest in the "From the fields" dispatch quality; if no, audit the slot-release redesign and the referral mechanic. (4) Confirm which elements move to permanent operations, which require a further iteration cycle, and which are deprioritised for the next quarter.

---

## D. KPI Dashboard

| KPI | Baseline | Day-30 Target | Day-90 Target | Owner |
|---|---|---|---|---|
| Winter churn rate | Pull from prior-year records in Phase 1 (Designer Agent reference point: 60%) | n/a — baseline confirmed and tracking begun | Materially below prior-year baseline; internal target to be set at Day-30 checkpoint once baseline is confirmed | Product & Merchandising |
| Pause / mode-switch rate at cancellation off-ramp screen | n/a — establish in Phase 1 (no prior off-ramp existed) | Off-ramp screen live; baseline established (even if near zero at Day 30, the data collection starts here) | Meaningful proportion of cancellation-intent subscribers selecting a mode over proceeding to cancel; specific % threshold set at Day-60 checkpoint | Retention Lead / Product
