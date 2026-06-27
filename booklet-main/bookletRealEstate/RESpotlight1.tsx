"use client";

import { motion } from "motion/react";
import { MessageCircle, Search } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function RESpotlight1() {
  return (
    <Poster page="04 / 08" section="Spotlight · Response & Collections">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "accent", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 01 of 02 · Response &amp; Collections
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[38px] leading-[1.05]"
      >
        AI handles the response speed.
        <br />
        <span className="text-gradient">The dealer handles the deal.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds for the two biggest time drains in property dealing: responding
        to every inquiry instantly, and collecting rent without chasing. Research
        consistently shows that 83% of buyers and sellers prefer a human estate
        agent for key transaction stages (PropertyWire, 2024), and trust in fully
        autonomous AI for real estate transactions has been declining, not growing.
        Every build below is explicitly designed as{" "}
        <span className="text-[var(--color-fg)]">&ldquo;AI handles the busywork,
        a human dealer verifies every match and shows up for the decision that
        matters.&rdquo;</span>
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: MessageCircle,
            tone: "brand",
            title: "Tenant Rent Reminder & Payment Bot",
            tagline: "Rent collected on time, every time — without a single awkward phone call.",
            problem:
              "Your team spends the first week of every month chasing 30–50 tenants for rent payments. Half the calls go unanswered. Overdue amounts accumulate. Relationships strain over money conversations that should be routine.",
            solution: [
              "Automated WhatsApp reminders at 5 days, 2 days, and due date",
              "Payment confirmation tracking with receipt acknowledgment",
              "Graduated escalation for overdue: gentle nudge → formal notice → manager flag",
              "Monthly dashboard: who paid, who's late, total collected vs. outstanding",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "Supabase", "Payment Gateway API"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Search,
            tone: "accent",
            title: "Property Inquiry & Lead Response Bot",
            tagline: "Every inquiry answered in seconds. Not hours. Not tomorrow.",
            problem:
              "A buyer sends a WhatsApp message at 10 PM asking about a 3BHK listing. You see it at 9 AM. By then, they've contacted 3 other dealers. 78% of buyers work with the first agent who responds (AgentZap, 2024). You weren't first.",
            solution: [
              "Instant WhatsApp response with property details, photos, and pricing",
              "AI qualifies the lead: budget, timeline, location preferences",
              "Hot leads flagged for immediate human follow-up by your team",
              "Full conversation history logged — nothing lost between AI and human handoff",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "Supabase", "CRM API"],
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 grid grid-cols-3 gap-2"
      >
        {[
          { v: "78%", l: "of buyers work with the first agent to respond (AgentZap, 2024)" },
          { v: "5 min", l: "golden window for lead conversion — response after 10 min drops 80% (LeadOwl, 2024)" },
          { v: "83%", l: "of buyers prefer human agents for key transaction stages (PropertyWire, 2024)" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-3"
          >
            <div className="text-gradient-brand font-display text-[22px] font-semibold leading-none tracking-tight">
              {m.v}
            </div>
            <div className="mt-1.5 text-[9.5px] leading-tight text-[var(--color-fg-muted)]">
              {m.l}
            </div>
          </div>
        ))}
      </motion.div>
    </Poster>
  );
}
