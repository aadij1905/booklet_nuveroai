"use client";

import { motion } from "motion/react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const approach = [
  "Instant WhatsApp inquiry response bot — every lead answered in under 60 seconds",
  "AI property matching against full listing database, with human dealer review before buyer sees results",
  "Rent reminder workflow: automated WhatsApp nudges, payment tracking, escalation for overdue",
  "Tenant maintenance request bot: categorize, prioritize, route to vendor, manager approves",
  "Lead scoring dashboard: hot leads flagged for immediate human follow-up",
];

const tech = ["WhatsApp Cloud API", "Claude", "Pinecone", "Supabase", "CRM Integration", "N8N"];

export function RECaseStudy() {
  return (
    <Poster page="06 / 08" section="What This Looks Like">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 360, className: "-top-28 -right-24", animated: true },
          { tone: "accent", size: 280, className: "-bottom-24 -left-20", animated: true },
        ]}
      />

      <div className="flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="poster-eyebrow"
        >
          What This Looks Like in Practice
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]"
        >
          <span>Concept</span>
          <span className="text-[var(--color-fg-subtle)]">·</span>
          <span>Pilot Walkthrough</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
          Property Dealer · 500+ Listings · 200+ Tenants
        </div>
        <h2 className="poster-title mt-2 text-[34px] leading-[1.08] tracking-tight">
          <span className="text-gradient">Full-Stack Property Operations AI</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.65 }}
        className="mt-3 max-w-[170mm] font-display text-[17px] leading-[1.3] tracking-tight text-[var(--color-fg)]"
      >
        Inquiry response + property matching + rent tracking + maintenance for a mid-size dealer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3 max-w-[170mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        This is a detailed walkthrough of what a full implementation looks like for
        a property dealer managing 500+ active listings and 200+ tenants. This is
        presented as a concept build — clearly labeled because we believe in showing
        realistic scope, not inventing results.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-4 rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.08),rgba(34,211,238,0.05))] px-5 py-3"
      >
        <p className="text-[11px] leading-[1.6] text-[var(--color-fg)]">
          <span className="font-semibold">Note:</span> This is a concept/pilot
          walkthrough, not a completed case study. We don&rsquo;t fabricate client
          names, statistics, or testimonials. When we have a real real-estate
          deployment with verified results, it will replace this page.
        </p>
      </motion.div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            What we&rsquo;d build
          </div>
          <ul className="mt-2 flex flex-col gap-1.5">
            {approach.map((a) => (
              <li
                key={a}
                className="flex items-start gap-1.5 text-[10.5px] leading-[1.45] text-[var(--color-fg-muted)]"
              >
                <span className="mt-1 size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="flex flex-col gap-4"
        >
          <div className="flex-1 rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.12),rgba(34,211,238,0.08))] p-4">
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
              Expected impact
            </div>
            <ul className="mt-2 flex flex-col gap-1.5">
              <li className="text-[11px] leading-[1.5] text-[var(--color-fg)]">
                • Every inquiry responded to in under 60 seconds, 24/7
              </li>
              <li className="text-[11px] leading-[1.5] text-[var(--color-fg)]">
                • Rent collection follow-up fully automated — zero manual calls
              </li>
              <li className="text-[11px] leading-[1.5] text-[var(--color-fg)]">
                • Dealer focuses on site visits and closings, not lead triage
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3">
            <p className="text-[10px] leading-[1.55] text-[var(--color-fg-muted)]">
              This is the same playbook we&rsquo;d run for your business: your
              listings in, your CRM in, your WhatsApp wired in, and a clean
              handoff to your team for every moment that requires a human —
              which is always the site visit, the negotiation, and the closing.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="mt-4 flex items-center justify-between"
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          nexora-ai · real estate concept
        </span>
      </motion.div>
    </Poster>
  );
}
