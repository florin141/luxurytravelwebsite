"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { Menu, X, Compass } from "lucide-react";

const ACTIVE_COLORS: Record<string, string> = {
  Destinations: "text-accent-cyan",
  Experiences: "text-accent-purple",
  Membership: "text-accent-magenta",
  Testimonials: "text-accent-gold",
  Concierge: "text-accent-cyan",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showFAB, setShowFAB] = useState(false);
  const sectionRefs = useRef<Map<string, IntersectionObserver>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFAB(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );

      observer.observe(el);
      sectionRefs.current.set(id, observer);
    });

    return () => {
      sectionRefs.current.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12",
          scrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl px-6 py-3 transition-all duration-500",
            scrolled
              ? "glass border-border-glass"
              : "bg-transparent"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-2 focus-ring"
              aria-label="Aurora Luxe Travel - Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <span className="hidden text-lg font-display font-bold tracking-wider text-text-primary sm:block">
                {BRAND.name}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 md:flex">
              {BRAND.navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 focus-ring",
                      isActive
                        ? cn(ACTIVE_COLORS[item.label] || "text-text-primary")
                        : "text-text-secondary hover:text-text-primary"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={cn(
                          "absolute inset-x-1 bottom-0.5 h-0.5 rounded-full",
                          item.label === "Destinations"
                            ? "bg-accent-cyan"
                            : item.label === "Experiences"
                            ? "bg-accent-purple"
                            : item.label === "Membership"
                            ? "bg-accent-magenta"
                            : item.label === "Testimonials"
                            ? "bg-accent-gold"
                            : "bg-accent-cyan"
                        )}
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#concierge"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#concierge");
                }}
                className={cn(
                  "group relative flex items-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus-ring",
                  "before:absolute before:inset-[-1px] before:rounded-xl before:z-[-1] before:bg-gradient-to-r before:from-gradient-start before:via-gradient-mid before:to-gradient-end before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                )}
              >
                <span className="relative z-10">Request Itinerary</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 focus-ring"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] z-40 md:hidden"
          >
            <div className="glass h-full overflow-y-auto px-6 py-8">
              <div className="flex flex-col gap-2">
                {BRAND.navItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        "rounded-xl px-4 py-3 text-lg font-medium transition-colors focus-ring",
                        isActive
                          ? "bg-white/5 text-text-primary"
                          : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#concierge"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: BRAND.navItems.length * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#concierge");
                  }}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-4 py-3 text-lg font-semibold text-white focus-ring"
                >
                  <Compass className="h-5 w-5" />
                  Request Itinerary
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA - Mobile */}
      <AnimatePresence>
        {showFAB && (
          <motion.a
            href="#concierge"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#concierge");
            }}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white shadow-2xl md:hidden focus-ring"
            aria-label="Request Itinerary"
          >
            <Compass className="h-6 w-6" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
