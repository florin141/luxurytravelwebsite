"use client";

import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Camera,
  XIcon,
  User,
  Video,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";

const socials = [
  { name: "Instagram", icon: Camera },
  { name: "X", icon: XIcon },
  { name: "LinkedIn", icon: User },
  { name: "YouTube", icon: Video },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-glass">
      {/* Top glow */}
      <div
        className="pointer-events-none absolute -top-px left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), rgba(167,139,250,0.3), rgba(232,121,249,0.3), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-text-primary">
                AURORA LUXE
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Ultra-premium concierge travel for the world's most discerning
              explorers. Beyond First Class, always.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="rounded-lg border border-border-glass bg-bg-glass p-2.5 text-text-secondary transition-all hover:border-border-glass-hover hover:text-text-primary focus-ring"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              {[
                "Maldives",
                "Tokyo",
                "Swiss Alps",
                "Dubai",
                "Serengeti",
                "Mediterranean",
              ].map((d) => (
                <li key={d}>
                  <a
                    href="#destinations"
                    className="text-sm text-text-secondary transition-colors hover:text-accent-cyan focus-ring"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About Us", "Careers", "Press", "Privacy Policy", "Terms of Service"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary transition-colors hover:text-accent-cyan focus-ring"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="h-4 w-4 text-accent-cyan/70" />
                Monaco, Principality of Monaco
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail className="h-4 w-4 text-accent-cyan/70" />
                concierge@auroraluxe.travel
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Globe className="h-4 w-4 text-accent-cyan/70" />
                +377 999 000 00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-glass pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Aurora Luxe Travel. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Images via{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-primary"
            >
              Unsplash
            </a>{" "}
            &{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-primary"
            >
              Pexels
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
