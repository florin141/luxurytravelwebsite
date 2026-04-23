"use client";

import { motion } from "framer-motion";

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

const sectionTitle = "Signature Experiences";
const sectionSub =
  "Journeys crafted by our expert curators -- each one a masterpiece of luxury and discovery.";

export default function ExperienceList() {
  return (
    <section
      id="experiences"
      className="relative py-24 sm:py-32"
      aria-label="Signature Experiences"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-accent-purple/80 uppercase">
              Curated Journeys
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">{sectionSub}</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { experiences } from "@/data/experiences";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border-glass bg-bg-card md:flex-row md:items-stretch"
    >
      <div
        className={`relative ${isEven ? "md:w-1/2" : "md:order-2 md:w-1/2"} md:h-72 lg:h-auto`}
      >
        <img
          src={exp.image}
          alt={exp.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/60 md:via-bg-card/30" />
      </div>

      <div className="relative flex flex-col justify-center p-8 md:w-1/2 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl font-extrabold text-text-primary sm:text-3xl">
            {exp.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            {exp.description}
          </p>
        </motion.div>

        <div className="mt-8 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-gradient-gold">
            {exp.price}
          </span>
          <a
            href="#concierge"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("concierge")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-border-glass bg-bg-glass px-5 py-2.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all hover:border-border-glass-hover hover:bg-bg-glass-hover focus-ring"
          >
            Inquire
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
