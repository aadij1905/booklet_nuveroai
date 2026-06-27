"use client";

import { motion } from "motion/react";
import { Star, Gift } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function RSTSpotlight2() {
  return (
    <Poster page="05 / 08" section="Spotlight · Reputation & Retention">
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
        Spotlight · 02 of 02 · Reputation &amp; Retention
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Guard the reviews. Remember the birthday.
        <br />
        <span className="text-gradient">Make every visit count.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds that protect your reputation and drive repeat visits: AI-powered
        review management that keeps your online presence sharp, and occasion-
        triggered offers that make guests feel genuinely remembered. Note: for
        anything emotionally significant — a guest asking for an anniversary dinner
        recommendation, a complaint about a special-occasion experience — a human
        review step is built in. AI handles logistics confidently; premium moments
        stay human.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Star,
            tone: "brand",
            title: "Review & Reputation Management",
            tagline: "Every review across every platform — monitored, responded to, and analyzed.",
            problem:
              "A 1-star review sits unanswered for 3 days. A pattern of \"cold food\" complaints goes unnoticed for weeks. Your Google rating drops and you don't realize until bookings slow down.",
            solution: [
              "Real-time monitoring across Google, Zomato, TripAdvisor, Instagram",
              "AI-drafted responses for routine reviews — human approval for sensitive ones",
              "Sentiment analysis dashboard: spot recurring issues before they trend",
              "Post-visit feedback request via WhatsApp — catch issues before they become reviews",
            ],
            tech: ["Claude", "Google Business API", "Supabase", "N8N"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Gift,
            tone: "accent",
            title: "Birthday & Occasion-Triggered Offers",
            tagline: "The guest feels remembered. Because they are.",
            problem:
              "Your regular's birthday was last week. They came in, nobody knew, they got a generic menu. Meanwhile, the restaurant down the street sent a personalized WhatsApp message with a free dessert offer 3 days before.",
            solution: [
              "Automated birthday/anniversary detection from guest profile data",
              "Personalized WhatsApp message with occasion-specific offer",
              "Milestone visits tracked: 10th visit, 50th visit — each one acknowledged",
              "Human manager flagged for premium/VIP occasions that deserve a personal touch",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "Supabase", "POS API"],
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
          { v: "5–20%", l: "reservation no-show rate across the industry (EatApp, 2024)" },
          { v: "25–30%", l: "no-show rate for fine dining without deposit policies (EatApp, 2024)" },
          { v: "85%", l: "of missed callers never call back — they book elsewhere (RingFoods, 2024)" },
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
