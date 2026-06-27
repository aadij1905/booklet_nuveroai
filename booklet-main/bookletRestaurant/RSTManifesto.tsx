"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const quadrants = [
  {
    no: "01",
    label: "Booking & Access",
    body: "Voice booking agents that answer every call — even during the dinner rush. AI handles the reservation; your staff handles the welcome.",
  },
  {
    no: "02",
    label: "Guest Recognition",
    body: "Regulars identified automatically. Preferences, allergies, and past orders surfaced before they sit down — without your staff memorizing anything.",
  },
  {
    no: "03",
    label: "Reputation & Feedback",
    body: "Review monitoring across Google, Zomato, and Instagram. AI drafts responses, flags negative sentiment, and surfaces trends your manager would miss.",
  },
  {
    no: "04",
    label: "Operations",
    body: "WhatsApp ordering for cafés, digital waitlist management, and dynamic pricing that adjusts offers based on demand — not guesswork.",
  },
];

const stats = [
  {
    value: "25–43%",
    label: "of restaurant calls go unanswered during service hours",
    source: "Loman.ai / GoSnappy, 2024",
  },
  {
    value: "85%",
    label: "of callers who miss a restaurant never call back",
    source: "Davinci Virtual / RingFoods, 2024",
  },
  {
    value: "5–20%",
    label: "average reservation no-show rate across the industry",
    source: "EatApp / Reelo, 2024",
  },
];

export function RSTManifesto() {
  return (
    <Poster page="02 / 08" section="Manifesto">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 380, className: "-top-32 -left-20", animated: true },
          { tone: "accent", size: 320, className: "-bottom-24 -right-16", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        <Quote className="size-3 text-[var(--color-accent)]" />
        Manifesto · 01
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="poster-title mt-6 text-[46px] leading-[1.0]"
      >
        <span className="text-[var(--color-fg-muted)]">The rush shouldn&rsquo;t cost you</span>
        <br />
        <span className="text-gradient">the next reservation.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-[155mm] text-[13.5px] leading-[1.65] text-[var(--color-fg-muted)]"
      >
        Most restaurants treat AI as a basic chatbot. The real leverage is when AI
        handles the{" "}
        <span className="text-[var(--color-fg)]">booking calls, recognizes regulars
        automatically, and adjusts pricing dynamically</span> — while keeping the
        actual guest experience (the welcome, the table-side moment, anything
        emotionally significant like a special occasion){" "}
        <span className="text-[var(--color-fg)]">human-led</span>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-3 max-w-[155mm] text-[12.5px] leading-[1.6] text-[var(--color-fg-muted)] italic"
      >
        The four categories below are where most hospitality engagements start, but
        they&rsquo;re not where they end. If your restaurant&rsquo;s bottleneck
        doesn&rsquo;t fit neatly into one of these, that&rsquo;s the point. We
        scope around the actual problem, not a service menu.
      </motion.p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {quadrants.map((q, i) => (
          <motion.div
            key={q.no}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                {q.no}
              </span>
              <span className="size-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
            </div>
            <h3 className="mt-3 font-display text-[16px] font-semibold tracking-tight text-[var(--color-fg)]">
              {q.label}
            </h3>
            <p className="mt-2 text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)]">
              {q.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.7 }}
        className="mt-6 grid grid-cols-3 gap-3"
      >
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4"
          >
            <div className="text-gradient-brand font-display text-[28px] font-semibold leading-none tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 text-[10px] leading-tight text-[var(--color-fg-muted)]">
              {s.label}
            </div>
            <div className="mt-1.5 text-[8px] leading-tight text-[var(--color-fg-subtle)] italic">
              Source: {s.source}
            </div>
          </div>
        ))}
      </motion.div>
    </Poster>
  );
}
