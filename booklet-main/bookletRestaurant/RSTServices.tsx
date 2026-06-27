"use client";

import { motion } from "motion/react";
import { Phone, Gift, Star, MessageCircle, Users, Heart } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const services = [
  {
    no: "01",
    icon: Phone,
    title: "AI Voice Booking Agent",
    tagline: "Every call answered, every table booked — even when your staff is mid-service and can't pick up the phone.",
    accent: "brand" as const,
  },
  {
    no: "02",
    icon: Heart,
    title: "Loyalty & Dynamic Pricing Engine",
    tagline: "Personalized offers based on visit history and spending patterns. Smart discounts that protect margin instead of blanket coupons.",
    accent: "accent" as const,
  },
  {
    no: "03",
    icon: Star,
    title: "Review & Reputation Management",
    tagline: "Monitor Google, Zomato, TripAdvisor, and Instagram. AI drafts responses, flags issues, and surfaces sentiment trends.",
    accent: "brand" as const,
  },
  {
    no: "04",
    icon: MessageCircle,
    title: "WhatsApp Ordering for Cafés",
    tagline: "Customers order via WhatsApp — menu browsing, customization, and payment. No app download, no third-party commission.",
    accent: "accent" as const,
  },
  {
    no: "05",
    icon: Users,
    title: "Digital Waitlist Management",
    tagline: "Guests join remotely, get live wait-time updates, and receive a WhatsApp ping when their table is ready. No crowded lobby.",
    accent: "brand" as const,
  },
  {
    no: "06",
    icon: Gift,
    title: "Birthday & Occasion-Triggered Offers",
    tagline: "Automated messages for birthdays, anniversaries, and milestone visits — with offers that feel personal, not mass-produced.",
    accent: "accent" as const,
  },
];

export function RSTServices() {
  return (
    <Poster page="03 / 08" section="Services">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 340, className: "-top-24 -right-20", animated: true },
          { tone: "accent", size: 280, className: "bottom-20 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Services
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[42px] leading-[1.05]"
      >
        Six builds we ship often.{" "}
        <span className="text-gradient">Not the only six</span>
        <br />
        we build.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        AI handles the logistics confidently — booking, ordering, waitlists — but
        the guest experience (the welcome, the table-side recommendation, anything
        emotionally meaningful) stays human-led. Always.
      </motion.p>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isBrand = s.accent === "brand";
          const accentColor = isBrand
            ? "text-[var(--color-brand-strong)]"
            : "text-[var(--color-accent-strong)]";
          const accentBg = isBrand
            ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]";
          return (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.45 }}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-3.5"
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-9 place-items-center rounded-lg border border-[var(--color-border-strong)] ${accentBg}`}>
                  <Icon className={`size-4 ${accentColor}`} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                  {s.no}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[12.5px] font-semibold leading-tight tracking-tight text-[var(--color-fg)]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[10px] leading-[1.45] text-[var(--color-fg-muted)]">
                {s.tagline}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 rounded-xl border border-dashed border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))] px-5 py-4"
      >
        <p className="text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)] italic">
          Don&rsquo;t see your problem here? Good. Tell us what&rsquo;s actually
          costing you covers, time, or margin — and we&rsquo;ll scope it for free
          before you commit to anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-4"
      >
        <p className="font-display text-[14px] tracking-tight text-[var(--color-fg)]">
          The next two pages go deep on the four builds that move revenue fastest for restaurants.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          → pages 04–05
        </span>
      </motion.div>
    </Poster>
  );
}
