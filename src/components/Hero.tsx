"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc08?w=2400&h=1400&fit=crop&q=80";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [loaded, setLoaded] = useState(false);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setLoaded(true);
  }, []);

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={HERO_IMAGE}
          alt="Luxury travel destination with golden light"
          style={{ y: y1 }}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-bg-deep/40 to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/50 via-transparent to-bg-deep/50" />
      </div>

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 60, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, -20, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-20 left-1/3 h-[300px] w-[300px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(232,121,249,0.2), transparent 70%)" }}
        />
      </div>

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-sm font-semibold tracking-[0.3em] text-accent-cyan/80 uppercase">
            Ultra-Premium Concierge Travel
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl font-display text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Beyond{" "}
          <span className="text-gradient">First Class.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-xl text-lg text-text-secondary sm:text-xl"
        >
          Bespoke itineraries, private jets, and experiences reserved for the few.
          Your journey, reimagined.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#concierge"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("concierge")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus-ring"
          >
            <span className="relative z-10">Design My Trip</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              &rarr;
            </motion.span>
          </a>

          <a
            href="#destinations"
            onClick={(e) => {
              e.preventDefault();
              scrollToDestinations();
            }}
            className="group inline-flex items-center gap-2 rounded-2xl border border-border-glass bg-bg-glass px-8 py-4 text-base font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:border-border-glass-hover hover:bg-bg-glass-hover focus-ring"
          >
            Explore Destinations
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] text-text-muted uppercase">Scroll</span>
          <ArrowDown className="h-5 w-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
