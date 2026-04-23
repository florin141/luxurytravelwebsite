"use client";

import { motion } from "framer-motion";
import { tiers } from "@/data/tiers";
import { Check } from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const sectionTitle = "Membership Tiers";
const sectionSub =
  "Join an exclusive circle of travelers who expect nothing less than extraordinary.";

export default function Tiers() {
  return (
    <section
      id="membership"
      className="relative py-24 sm:py-32"
      aria-label="Membership Tiers"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-accent-gold/80 uppercase">
              Exclusive Access
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">{sectionSub}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
          {tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({
  tier,
  index,
}: {
  tier: (typeof tiers)[number];
  index: number;
}) {
  const isHighlighted = tier.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
        isHighlighted
          ? "border-accent-gold/30 bg-gradient-to-b from-white/[0.06] to-white/[0.02] md:scale-105"
          : "border-border-glass bg-bg-card"
      }`}
    >
      {isHighlighted && (
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-[60px]"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)" }}
        />
      )}

      {isHighlighted && (
        <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-accent-gold/10 px-3 py-1">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="font-display text-2xl font-extrabold text-text-primary">{tier.name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-gradient-gold">{tier.price}</span>
        <span className="text-sm text-text-muted">/year</span>
      </div>
      <p className="mt-3 text-sm text-text-secondary">{tier.description}</p>

      <ul className="mt-8 space-y-3">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-3 text-sm text-text-secondary">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${isHighlighted ? "text-accent-gold" : "text-accent-cyan/70"}`}
            />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <a
        href="#concierge"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("concierge")?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition-all focus-ring ${
          isHighlighted
            ? "border-transparent bg-gradient-to-r from-accent-gold to-accent-gold-light text-bg-deep hover:scale-105 hover:shadow-lg"
            : "border-border-glass bg-bg-glass text-text-primary hover:border-border-glass-hover hover:bg-bg-glass-hover"
        }`}
      >
        Choose {tier.name}
      </a>
    </motion.div>
  );
}
