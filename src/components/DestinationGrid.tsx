"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Destination, destinations } from "@/data/destinations";
import { DollarSign } from "lucide-react";
import DestinationModal from "./DestinationModal";

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

const sectionTitle = "Destinations";
const sectionSub =
  "Hand-picked sanctuaries across the globe, each chosen for its exclusivity and magic.";

export default function DestinationGrid() {
  const [selected, setSelected] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="relative py-24 sm:py-32" aria-label="Destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-accent-cyan/80 uppercase">
              Curated Collections
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">{sectionSub}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              index={i}
              onClick={() => setSelected(dest)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <DestinationModal destination={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function DestinationCard({
  dest,
  index,
  onClick,
}: {
  dest: Destination;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border-glass bg-bg-card transition-all duration-500 focus-ring"
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${dest.name} details`}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={dest.image}
          alt={dest.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div className="relative p-6">
        <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-accent-cyan/70 uppercase">
          {dest.region}
        </p>
        <h3 className="font-display text-xl font-bold text-text-primary">{dest.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">{dest.vibe}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-accent-gold">
            <DollarSign className="h-4 w-4" />
            <span className="text-sm font-semibold">from {dest.fromPrice.toLocaleString()}</span>
            <span className="text-xs text-text-muted">/night</span>
          </div>
          <span className="text-xs text-text-muted group-hover:text-accent-cyan/70 transition-colors">
            Explore &rarr;
          </span>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: "auto", opacity: 1 }}
          className="mt-0 overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 pt-3 border-t border-border-glass">
            {dest.facts.map((fact) => (
              <span
                key={fact}
                className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-text-secondary"
              >
                {fact}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
