"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, CheckCircle } from "lucide-react";
import Toast from "./Toast";

const INTERESTS = [
  "Beach & Islands",
  "Mountain & Alpine",
  "City & Culture",
  "Wildlife & Safari",
  "Gastronomy",
  "Wellness & Spa",
  "Adventure",
  "Photography",
  "Wine & Vineyards",
  "History & Heritage",
  "Art & Museums",
  "Golf",
];

interface FormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  travelers: string;
  interests: string[];
  budget: string;
  notes: string;
}

const validate = (data: FormData) => {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email";
  if (!data.budget) errors.budget = "Select a budget range";
  if (data.interests.length === 0) errors.interests = "Select at least one interest";
  return errors;
};

export default function ConciergeForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    travelers: "1-2",
    interests: [],
    budget: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleInterest = (interest: string) => {
    const next = form.interests.includes(interest)
      ? form.interests.filter((i) => i !== interest)
      : [...form.interests, interest];
    update("interests", next);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      checkIn: "",
      checkOut: "",
      travelers: "1-2",
      interests: [],
      budget: "",
      notes: "",
    });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const sectionTitle = "Concierge Request";
  const sectionSub =
    "Tell us your vision. Our team will craft a bespoke itinerary within 24 hours.";

  const inputClass = (field: keyof FormData) =>
    cn(
      "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-text-primary placeholder-text-muted outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-accent-cyan/20",
      errors[field] && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
    );

  return (
    <section
      id="concierge"
      className="relative py-24 sm:py-32"
      aria-label="Concierge Form"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.05), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-accent-cyan/80 uppercase">
            Personal Service
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">{sectionSub}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={submit}
          className="rounded-3xl border border-border-glass bg-bg-glass/50 p-8 sm:p-10 backdrop-blur-md"
          noValidate
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className={inputClass("name")}
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={inputClass("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="checkIn" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Check-in
              </label>
              <input
                id="checkIn"
                type="date"
                value={form.checkIn}
                onChange={(e) => update("checkIn", e.target.value)}
                className={inputClass("checkIn")}
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Check-out
              </label>
              <input
                id="checkOut"
                type="date"
                value={form.checkOut}
                onChange={(e) => update("checkOut", e.target.value)}
                className={inputClass("checkOut")}
              />
            </div>
            <div>
              <label htmlFor="travelers" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Travelers
              </label>
              <select
                id="travelers"
                value={form.travelers}
                onChange={(e) => update("travelers", e.target.value)}
                className={inputClass("travelers")}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={`${n}-${n + 1}`}>
                    {n === 1 ? "Solo" : `${n} - ${n + 1} guests`}
                  </option>
                ))}
                <option value="9+">9+ guests</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-text-secondary">
              Budget Range <span className="text-red-400">*</span>
            </label>
            <select
              id="budget"
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputClass("budget")}
            >
              <option value="">Select budget range</option>
              <option value="3-5k">&#8364;3,000 - &#8364;5,000</option>
              <option value="5-10k">&#8364;5,000 - &#8364;10,000</option>
              <option value="10-25k">&#8364;10,000 - &#8364;25,000</option>
              <option value="25-50k">&#8364;25,000 - &#8364;50,000</option>
              <option value="50k+">&#8364;50,000+</option>
            </select>
            {errors.budget && <p className="mt-1 text-xs text-red-400">{errors.budget}</p>}
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-text-secondary">
              Interests <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => {
                const active = form.interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm transition-all focus-ring",
                      active
                        ? "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan"
                        : "border-border-glass bg-transparent text-text-secondary hover:border-border-glass-hover"
                    )}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
            {errors.interests && (
              <p className="mt-1 text-xs text-red-400">{errors.interests}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-text-secondary">
              Special Requests
            </label>
            <textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Any preferences, celebrations, or must-haves?"
              className={inputClass("notes")}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative inline-flex items-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-10 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl focus-ring"
            >
              <Sparkles className="h-5 w-5" />
              <span>Request Itinerary</span>
            </motion.button>
          </div>
        </motion.form>
      </div>

      <AnimatePresence>
        {submitted && (
          <Toast
            icon={<CheckCircle className="h-5 w-5 text-green-400" />}
            message="Request received -- our concierge will contact you within 24 hours."
            type="success"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
