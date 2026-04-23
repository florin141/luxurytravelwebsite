"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Destination } from "@/data/destinations";
import { X, MapPin, DollarSign, Star } from "lucide-react";

export default function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border-glass bg-bg-card shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label={destination.name}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/70 focus-ring"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image */}
          <div className="relative h-72 sm:h-80">
            <img
              src={destination.image}
              alt={destination.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-cyan" />
              <span className="text-sm font-semibold tracking-[0.15em] text-accent-cyan/80 uppercase">
                {destination.region}
              </span>
            </div>

            <h3 className="font-display text-3xl font-extrabold text-text-primary">
              {destination.name}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {destination.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {destination.facts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-border-glass bg-white/[0.03] px-4 py-1.5 text-sm text-text-secondary"
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border-glass pt-6">
              <div className="flex items-center gap-1.5">
                <DollarSign className="h-5 w-5 text-accent-gold" />
                <span className="font-display text-2xl font-bold text-accent-gold-light">
                  €{destination.fromPrice.toLocaleString()}
                </span>
                <span className="text-sm text-text-muted">/night</span>
              </div>

              <a
                href="#concierge"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.getElementById("concierge")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-xl border border-transparent bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 focus-ring"
              >
                Book This Experience
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
