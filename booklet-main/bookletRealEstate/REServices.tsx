"use client";

import { motion } from "motion/react";
import { MessageCircle, Search, Home, CalendarCheck, BarChart3, Wrench } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const services = [
  {
    no: "01",
    icon: MessageCircle,
    title: "Tenant Rent Reminder & Payment Bot",
    tagline: "Automated WhatsApp reminders before due dates, payment confirmation tracking, and overdue escalation — without a single manual follow-up.",
    accent: "brand" as const,
  },
  {
    no: "02",
    icon: Search,
    title: "Property Inquiry & Lead Response Bot",
    tagline: "Every WhatsApp and web inquiry answered instantly with property details, photos, and availability. The lead stays warm; your team follows up informed.",
    accent: "accent" as const,
  },
  {
    no: "03",
    icon: Home,
    title: "AI Property Matching Engine",
    tagline: "Buyer requirements matched against your listings automatically. AI surfaces the top 3–5 matches; a human dealer verifies before sending.",
    accent: "brand" as const,
  },
  {
    no: "04",
    icon: CalendarCheck,
    title: "Site Visit Scheduling Agent",
    tagline: "Interested buyers book site visits directly via WhatsApp. Calendar sync, confirmation, and reminders handled by AI. Your agent shows up prepared.",
    accent: "accent" as const,
  },
  {
    no: "05",
    icon: BarChart3,
    title: "Lead Scoring for Inquiries",
    tagline: "Not all leads are equal. AI scores based on response speed, property match, and engagement pattern — so your team focuses on real buyers.",
    accent: "brand" as const,
  },
  {
    no: "06",
    icon: Wrench,
    title: "Tenant Maintenance Request Bot",
    tagline: "Tenants report issues via WhatsApp. AI categorizes, prioritizes, and routes to the right vendor. Your property manager reviews, not triages.",
    accent: "accent" as const,
  },
];

export function REServices() {
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
        AI handles the response speed and the busywork. A human dealer verifies
        every match and is the one who shows up for the decision that matters.
        This isn&rsquo;t an afterthought — it&rsquo;s the core design principle.
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
          Don&rsquo;t see your bottleneck here? That&rsquo;s fine. Describe the
          specific problem that&rsquo;s eating your team&rsquo;s time or losing you
          deals, and we&rsquo;ll scope it for free before you commit to anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-4"
      >
        <p className="font-display text-[14px] tracking-tight text-[var(--color-fg)]">
          The next two pages go deep on the four builds that convert leads fastest for property dealers.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          → pages 04–05
        </span>
      </motion.div>
    </Poster>
  );
}
