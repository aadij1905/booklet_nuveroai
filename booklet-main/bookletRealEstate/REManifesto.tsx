"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const quadrants = [
  {
    no: "01",
    label: "Inquiry Response",
    body: "Instant WhatsApp and web responses to every property inquiry — within seconds, not hours. AI handles the first touch; your dealer handles the relationship.",
  },
  {
    no: "02",
    label: "Tenant Operations",
    body: "Rent reminders, payment verification, lease renewal nudges, and maintenance request logging — all automated, all auditable, all off your ops team's plate.",
  },
  {
    no: "03",
    label: "Lead Intelligence",
    body: "Lead scoring based on inquiry behavior, response patterns, and property match strength. Your team spends time on buyers who are actually ready to move.",
  },
  {
    no: "04",
    label: "Document & Compliance",
    body: "Lease template generation, document collection workflows, and compliance checklists that surface what's missing before it becomes a problem.",
  },
];

const stats = [
  {
    value: "78%",
    label: "of buyers work with the first agent who responds to their inquiry",
    source: "AgentZap / SpurNow, 2024",
  },
  {
    value: "83%",
    label: "of buyers and sellers prefer a human agent for key transaction stages",
    source: "PropertyWire / MoneyPenny, 2024",
  },
  {
    value: "80%",
    label: "drop in lead conversion likelihood after just 10 minutes of response delay",
    source: "LeadOwl / iHomeFinder, 2024",
  },
];

export function REManifesto() {
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
        className="poster-title mt-6 text-[44px] leading-[1.0]"
      >
        <span className="text-[var(--color-fg-muted)]">Speed from AI.</span>
        <br />
        <span className="text-gradient">Judgment from a person.</span>
        <br />
        Every deal.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-[155mm] text-[13.5px] leading-[1.65] text-[var(--color-fg-muted)]"
      >
        Most property dealers either ignore AI entirely or try to use it to
        replace the agent relationship — both are mistakes. The real leverage is
        using AI for everything that happens{" "}
        <span className="text-[var(--color-fg)]">before and after the decision
        moment</span>: instant inquiry response, rent tracking, maintenance
        logging, lease renewal reminders — while keeping a human dealer fully
        present for{" "}
        <span className="text-[var(--color-fg)]">site visits, negotiation,
        and closing</span>. Real estate is the largest financial decision most
        people make. Buyers want to see that a human is checking AI&rsquo;s work.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-3 max-w-[155mm] text-[12.5px] leading-[1.6] text-[var(--color-fg-muted)] italic"
      >
        The four categories below are where most real estate engagements start,
        but they&rsquo;re not where they end. If your bottleneck doesn&rsquo;t
        fit one of these, that&rsquo;s normal. We scope around the actual problem.
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
