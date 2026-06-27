"use client";

import { motion } from "motion/react";
import { Phone, Heart } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function RSTSpotlight1() {
  return (
    <Poster page="04 / 08" section="Spotlight · Booking & Loyalty">
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
        Spotlight · 01 of 02 · Booking &amp; Loyalty
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Never miss a reservation call.
        <br />
        <span className="text-gradient">Never lose a regular.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds for any restaurant where phone lines go dead during the rush
        and loyal guests don&rsquo;t feel recognized: a voice booking agent that
        never misses a call, and a loyalty engine that makes every regular feel
        known. Research shows guests are comfortable with AI for routine
        transactional requests (booking, ordering) but consistently prefer a
        human for emotionally meaningful moments — like asking for an anniversary
        dinner recommendation. We build with that line in mind.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Phone,
            tone: "brand",
            title: "AI Voice Booking Agent",
            tagline: "Every call answered, even during the Friday rush. Tables booked, not lost.",
            problem:
              "During peak hours, 30–50% of calls go unanswered. 85% of those callers never call back — they just book somewhere else. That's revenue you never see and never measure.",
            solution: [
              "Answers calls 24/7, books tables directly into your reservation system",
              "Handles party size, dietary requirements, and special requests",
              "Routes urgent or complex calls (complaints, large events) to a human",
              "Full call log with transcript — nothing lost, everything auditable",
            ],
            tech: ["VAPI", "Twilio", "POS Integration", "Supabase"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Heart,
            tone: "accent",
            title: "Loyalty & Dynamic Pricing Engine",
            tagline: "Personalized offers that protect margin. Not blanket coupons that train guests to wait for discounts.",
            problem:
              "Most loyalty programs are glorified stamp cards. Generic 10% coupons go to everyone — the first-timer and the twice-a-week regular get the same offer. That's margin destruction, not loyalty.",
            solution: [
              "Visit-frequency and spend-pattern based tier system",
              "Dynamic offers: slow nights get targeted incentives, busy nights don't",
              "Regulars get recognized — preferences, allergies, favorite table tracked",
              "ROI dashboard per offer campaign — see what's actually driving repeat visits",
            ],
            tech: ["Claude", "Supabase", "WhatsApp Cloud API", "POS API"],
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
          { v: "30–50%", l: "of restaurant calls missed during peak service hours (Loman.ai, 2024)" },
          { v: "60%", l: "of missed calls are actionable (reservations or orders) (GoSnappy, 2024)" },
          { v: "30–40%", l: "no-show reduction from automated SMS reminders (SimpleHost, 2024)" },
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
