"use client";

import { motion } from "motion/react";
import { Home, Wrench } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function RESpotlight2() {
  return (
    <Poster page="05 / 08" section="Spotlight · Matching & Maintenance">
      <PosterDecor
        grid
        orbs={[
          { tone: "fuchsia", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "brand", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 02 of 02 · Matching &amp; Maintenance
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[38px] leading-[1.05]"
      >
        AI finds the match. The dealer verifies it.
        <br />
        <span className="text-gradient">The human shows up.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds for the operational backbone of property management: an AI
        matching engine that surfaces the right properties for each buyer, and a
        maintenance bot that routes tenant requests without your team becoming a
        call center. <span className="font-semibold text-[var(--color-fg)]">Critical
        distinction:</span> the AI matching engine recommends — the dealer reviews
        every match before it reaches the buyer. AI never replaces the dealer for
        site visits, negotiation, pricing advice, or closing. This is a stated
        differentiator, not an afterthought.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Home,
            tone: "brand",
            title: "AI Property Matching Engine",
            tagline: "Buyer requirements → top 3–5 matches → human dealer reviews → buyer receives a curated shortlist.",
            problem:
              "A buyer says \"3BHK, south-facing, under 80L, near metro.\" Your team manually scans 200 listings, sends 10 options, and 7 are wrong. The buyer loses confidence. The deal slows down.",
            solution: [
              "Natural language requirement parsing from WhatsApp conversations",
              "AI matches against your full listing database — ranked by fit score",
              "Human dealer reviews and verifies top matches before buyer sees them",
              "Buyer receives a curated shortlist — not a data dump",
            ],
            tech: ["Claude", "Pinecone", "Supabase", "WhatsApp Cloud API"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Wrench,
            tone: "accent",
            title: "Tenant Maintenance Request Bot",
            tagline: "Tenant reports → AI categorizes and routes → vendor assigned → property manager reviews.",
            problem:
              "A tenant sends \"AC not working\" to your property manager at 11 PM. It gets buried in 40 other WhatsApp messages. Three days later, the tenant is furious. You're now managing a relationship crisis, not a repair request.",
            solution: [
              "Tenants report issues via WhatsApp — photos, voice notes, text all accepted",
              "AI categorizes (plumbing, electrical, structural), assigns urgency level",
              "Routes to the right vendor from your pre-approved vendor list",
              "Property manager gets a clean dashboard — review, approve, done",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "Supabase", "N8N"],
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.08),rgba(34,211,238,0.05))] px-5 py-3"
      >
        <p className="text-[11px] leading-[1.6] text-[var(--color-fg)]">
          <span className="font-semibold">Why we build it this way:</span> Research
          shows buyers and tenants in real estate specifically want a human verifying
          AI output for anything resembling a high-stakes decision. Trust in fully
          autonomous AI for real estate transactions has been declining, not growing
          (HousingWire / Forbes, 2024). Every build above is positioned as: AI
          handles the response speed and the busywork — a human dealer verifies
          every match and is the one who shows up for the decision that matters.
        </p>
      </motion.div>
    </Poster>
  );
}
