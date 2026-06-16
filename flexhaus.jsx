import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock3, HeartHandshake, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const comebackOffers = [
  {
    id: "reset-week",
    title: "7-Day Reset Pass",
    price: "€0",
    badge: "Most popular",
    description:
      "Return this week, try any 2 classes, and get a coach check-in so your comeback feels doable—not overwhelming.",
    bullets: ["2 classes in 7 days", "15-minute coach plan", "No commitment today"],
  },
  {
    id: "buddy-pass",
    title: "Bring-a-Friend Comeback",
    price: "€9",
    badge: "Fastest confidence boost",
    description:
      "Book one class and bring a friend. Social accountability is the easiest way to restart momentum.",
    bullets: ["1 class for you + 1 friend", "Front-row spot reserved", "Post-class coach intro"],
  },
  {
    id: "foundations",
    title: "Foundations Return Session",
    price: "€15",
    badge: "Best for nervous returners",
    description:
      "A low-pressure starter session designed for members who don’t want to jump straight back into max intensity.",
    bullets: ["Beginner-friendly format", "Technique refresh", "Recovery-friendly pacing"],
  },
];

const classes = [
  {
    id: "strength-essentials",
    name: "Strength Essentials",
    level: "Beginner friendly",
    coach: "Aoife",
    time: "Tue 18:00",
    description: "Lower-pressure strength class focused on good form and confidence.",
  },
  {
    id: "sweat-restart",
    name: "Sweat Restart",
    level: "All levels",
    coach: "Liam",
    time: "Wed 07:15",
    description: "A 45-minute comeback session with scalable stations and clear pacing.",
  },
  {
    id: "mobility-restore",
    name: "Mobility + Restore",
    level: "Recovery",
    coach: "Niamh",
    time: "Thu 19:15",
    description: "Ideal if life got busy and your body wants a gentler re-entry.",
  },
  {
    id: "saturday-community",
    name: "Saturday Community Lift",
    level: "All levels",
    coach: "Sean",
    time: "Sat 10:00",
    description: "Friendly groups, partner accountability, and a coach-led intro for returning members.",
  },
];

const goals = [
  "Get back into a routine",
  "Rebuild energy and confidence",
  "Lose body fat",
  "Reduce stress",
  "Get stronger without overdoing it",
];

const urgencyPill = {
  seats: 24,
  deadline: "Offer ends Sunday at 23:59",
};

function StepPill({ number, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm ${
        active ? "bg-zinc-900 text-white" : "bg-white/70 text-zinc-600"
      }`}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-full text-xs font-semibold ${
          active ? "bg-white text-zinc-900" : "bg-zinc-200 text-zinc-700"
        }`}
      >
        {number}
      </span>
      <span>{label}</span>
    </div>
  );
}

export default function FlexHausWinBackPage() {
  const [step, setStep] = useState(1);
  const [selectedOffer, setSelectedOffer] = useState("reset-week");
  const [selectedClass, setSelectedClass] = useState("strength-essentials");
  const [goal, setGoal] = useState(goals[0]);
  const [form, setForm] = useState({ firstName: "", email: "", phone: "", memberId: "", consent: true });
  const [submitted, setSubmitted] = useState(false);

  const chosenOffer = useMemo(
    () => comebackOffers.find((offer) => offer.id === selectedOffer),
    [selectedOffer]
  );
  const chosenClass = useMemo(() => classes.find((item) => item.id === selectedClass), [selectedClass]);

  const canContinueFromStep1 = !!selectedOffer;
  const canContinueFromStep2 = !!selectedClass;
  const canSubmit = form.firstName.trim() && form.email.trim() && form.consent;

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900">
                <Sparkles className="h-4 w-4" /> Win-back offer for returning FlexHaus members
              </div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                Your comeback starts with <span className="text-orange-600">one class that feels doable</span>.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
                No guilt. No pressure. Just a smart way back into your routine with a coach who knows how to restart momentum.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="rounded-2xl border-zinc-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-zinc-500">Book in under</p>
                      <p className="text-lg font-semibold">90 seconds</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <HeartHandshake className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-zinc-500">Designed for</p>
                      <p className="text-lg font-semibold">Busy, inconsistent schedules</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-zinc-500">Risk-free</p>
                      <p className="text-lg font-semibold">Pause anytime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="overflow-hidden rounded-[28px] border-none bg-zinc-900 text-white shadow-xl">
              <CardContent className="p-0">
                <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-5 p-7 sm:p-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-orange-200">
                      <Users className="h-4 w-4" /> Returning member offer
                    </div>
                    <h2 className="text-2xl font-bold sm:text-3xl">You don’t need motivation. You need a plan that fits real life.</h2>
                    <p className="max-w-xl text-zinc-300">
                      If you fell off after one class—or never found your rhythm—this page gives you a softer restart: a coach-supported session, a clear next step, and a time slot reserved before life gets in the way again.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Beginner-friendly entry options",
                        "Coach intro built into the booking",
                        "Comeback classes at low-pressure times",
                        "A follow-up plan after your first return visit",
                      ].map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2 rounded-2xl bg-white/5 p-3 text-sm text-zinc-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-300" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-amber-300 p-7 text-zinc-950 sm:p-8">
                    <div className="rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">Limited return spots</p>
                      <div className="mt-3 flex items-end gap-3">
                        <span className="text-5xl font-black">{urgencyPill.seats}</span>
                        <span className="pb-2 text-sm text-zinc-700">seats left this week</span>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-700">
                        <Clock3 className="h-4 w-4" /> {urgencyPill.deadline}
                      </div>
                      <div className="mt-5 rounded-2xl bg-zinc-950 p-4 text-white">
                        <p className="text-sm text-zinc-300">Best first step for most members</p>
                        <p className="mt-1 text-xl font-bold">7-Day Reset Pass</p>
                        <p className="mt-2 text-sm text-zinc-300">Two classes. One coach check-in. No long-term pressure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              {comebackOffers.map((offer) => {
                const active = offer.id === selectedOffer;
                return (
                  <motion.button
                    key={offer.id}
                    whileHover={{ y: -2 }}
                    onClick={() => {
                      setSelectedOffer(offer.id);
                      setStep(Math.max(step, 1));
                    }}
                    className={`rounded-[28px] border p-5 text-left shadow-sm transition ${
                      active
                        ? "border-orange-500 bg-orange-50 ring-2 ring-orange-200"
                        : "border-zinc-200 bg-white hover:border-orange-200"
                    }`}
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xl font-bold">{offer.title}</p>
                        <p className="mt-1 text-sm text-zinc-500">{offer.badge}</p>
                      </div>
                      <div className="rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-white">{offer.price}</div>
                    </div>
                    <p className="mb-4 text-sm leading-6 text-zinc-600">{offer.description}</p>
                    <div className="space-y-2">
                      {offer.bullets.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                          <CheckCircle2 className="h-4 w-4 text-orange-600" /> {item}
                        </div>
                      ))}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div>
            <Card className="sticky top-6 rounded-[28px] border-zinc-200 bg-white shadow-xl">
              <CardContent className="p-6 sm:p-7">
                <div className="mb-5 flex flex-wrap gap-2">
                  <StepPill number={1} label="Choose offer" active={step === 1} />
                  <StepPill number={2} label="Pick class" active={step === 2} />
                  <StepPill number={3} label="Finish booking" active={step === 3} />
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key={`step-${step}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step === 1 && (
                        <div className="space-y-5">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Step 1</p>
                            <h3 className="mt-1 text-2xl font-bold">Choose your comeback path</h3>
                            <p className="mt-2 text-zinc-600">We pre-selected the best low-friction offer for returning members, but you can switch if another option feels right.</p>
                          </div>

                          <div className="rounded-3xl bg-zinc-50 p-4">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-lg font-bold">{chosenOffer?.title}</p>
                                <p className="text-sm text-zinc-600">{chosenOffer?.description}</p>
                              </div>
                              <div className="text-2xl font-black text-orange-600">{chosenOffer?.price}</div>
                            </div>
                          </div>

                          <Button className="w-full rounded-2xl bg-zinc-900 py-6 text-base hover:bg-zinc-800" disabled={!canContinueFromStep1} onClick={() => setStep(2)}>
                            Continue to class selection
                          </Button>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-5">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Step 2</p>
                            <h3 className="mt-1 text-2xl font-bold">Pick a class that matches your energy</h3>
                            <p className="mt-2 text-zinc-600">The fastest way to lose momentum is booking the wrong session. Choose the class that feels realistic this week.</p>
                          </div>

                          <div className="space-y-3">
                            {classes.map((item) => {
                              const active = item.id === selectedClass;
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => setSelectedClass(item.id)}
                                  className={`w-full rounded-3xl border p-4 text-left transition ${
                                    active ? "border-orange-500 bg-orange-50 ring-2 ring-orange-200" : "border-zinc-200 hover:border-orange-200"
                                  }`}
                                >
                                  <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                      <p className="text-lg font-bold">{item.name}</p>
                                      <p className="mt-1 text-sm text-zinc-500">{item.level} · Coach {item.coach}</p>
                                    </div>
                                    <div className="rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white">{item.time}</div>
                                  </div>
                                  <p className="mt-3 text-sm text-zinc-600">{item.description}</p>
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex gap-3">
                            <Button variant="outline" className="w-full rounded-2xl py-6" onClick={() => setStep(1)}>
                              Back
                            </Button>
                            <Button className="w-full rounded-2xl bg-zinc-900 py-6 text-base hover:bg-zinc-800" disabled={!canContinueFromStep2} onClick={() => setStep(3)}>
                              Continue to details
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <form className="space-y-5" onSubmit={handleSubmit}>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Step 3</p>
                            <h3 className="mt-1 text-2xl font-bold">Finish your booking</h3>
                            <p className="mt-2 text-zinc-600">We’ll hold your spot and send a simple plan so showing up feels easy.</p>
                          </div>

                          <div className="rounded-3xl bg-zinc-50 p-4 text-sm text-zinc-700">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-bold text-zinc-900">Your selected comeback plan</p>
                                <p>{chosenOffer?.title} · {chosenOffer?.price}</p>
                                <p className="mt-1">Class: {chosenClass?.name} ({chosenClass?.time})</p>
                              </div>
                              <Zap className="h-5 w-5 text-orange-600" />
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium">
                              <span>First name</span>
                              <input
                                className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-orange-500"
                                value={form.firstName}
                                onChange={(e) => updateField("firstName", e.target.value)}
                                placeholder="e.g. Sarah"
                              />
                            </label>
                            <label className="space-y-2 text-sm font-medium">
                              <span>Email</span>
                              <input
                                type="email"
                                className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-orange-500"
                                value={form.email}
                                onChange={(e) => updateField("email", e.target.value)}
                                placeholder="you@example.com"
                              />
                            </label>
                            <label className="space-y-2 text-sm font-medium">
                              <span>Phone (optional)</span>
                              <input
                                className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-orange-500"
                                value={form.phone}
                                onChange={(e) => updateField("phone", e.target.value)}
                                placeholder="For a reminder text"
                              />
                            </label>
                            <label className="space-y-2 text-sm font-medium">
                              <span>Member ID (optional)</span>
                              <input
                                className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-orange-500"
                                value={form.memberId}
                                onChange={(e) => updateField("memberId", e.target.value)}
                                placeholder="If you know it"
                              />
                            </label>
                          </div>

                          <label className="space-y-2 text-sm font-medium block">
                            <span>Main goal right now</span>
                            <select
                              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500"
                              value={goal}
                              onChange={(e) => setGoal(e.target.value)}
                            >
                              {goals.map((item) => (
                                <option key={item}>{item}</option>
                              ))}
                            </select>
                          </label>

                          <label className="flex items-start gap-3 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                            <input
                              type="checkbox"
                              checked={form.consent}
                              onChange={(e) => updateField("consent", e.target.checked)}
                              className="mt-1 h-4 w-4 rounded border-zinc-300"
                            />
                            <span>
                              Yes, send me my booking confirmation, a 24-hour reminder, and one short follow-up plan after class.
                            </span>
                          </label>

                          <div className="flex gap-3">
                            <Button type="button" variant="outline" className="w-full rounded-2xl py-6" onClick={() => setStep(2)}>
                              Back
                            </Button>
                            <Button type="submit" className="w-full rounded-2xl bg-orange-600 py-6 text-base font-semibold hover:bg-orange-500" disabled={!canSubmit}>
                              Reserve my comeback spot
                            </Button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-5"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" /> Spot reserved
                      </div>
                      <h3 className="text-3xl font-black">You’re back on the calendar.</h3>
                      <p className="text-zinc-600">
                        Nice work, {form.firstName || "member"}. Your <strong>{chosenOffer?.title}</strong> is booked for <strong>{chosenClass?.name}</strong> on <strong>{chosenClass?.time}</strong>.
                      </p>

                      <div className="rounded-3xl bg-zinc-50 p-5">
                        <p className="font-bold text-zinc-900">What happens next</p>
                        <div className="mt-3 space-y-3 text-sm text-zinc-700">
                          <div className="flex gap-3">
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-zinc-900 text-xs font-bold text-white">1</span>
                            <p>Confirmation email sent to <strong>{form.email}</strong>.</p>
                          </div>
                          <div className="flex gap-3">
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-zinc-900 text-xs font-bold text-white">2</span>
                            <p>A coach will tailor your first return session around your goal: <strong>{goal}</strong>.</p>
                          </div>
                          <div className="flex gap-3">
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-zinc-900 text-xs font-bold text-white">3</span>
                            <p>You’ll also get one recommended next class so momentum doesn’t stop after your first visit back.</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full rounded-2xl bg-zinc-900 py-6 text-base hover:bg-zinc-800" onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}>
                        Book another member
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
