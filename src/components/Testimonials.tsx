"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

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

const sectionTitle = "What Our Members Say";
const sectionSub =
  "Trusted by discerning travelers across every continent.";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-accent-magenta/80 uppercase">
              Testimonials
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">{sectionSub}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-border-glass bg-bg-card p-8 transition-all duration-500 hover:border-border-glass-hover"
    >
      <div className="absolute right-6 top-6 text-7xl font-display leading-none text-white/[0.04]">
        &ldquo;
      </div>

      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
        ))}
      </div>

      <p className="relative z-10 text-base leading-relaxed text-text-secondary">
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-border-glass pt-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-display text-sm font-semibold text-text-primary">
            {testimonial.name}
          </p>
          <p className="text-xs text-text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
