"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ToastProps {
  icon: React.ReactNode;
  message: string;
  type?: "success" | "info";
}

export default function Toast({ icon, message }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.95 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-8 md:left-8"
    >
      <div className="glass-strong flex items-center gap-4 rounded-2xl border border-green-500/20 px-6 py-4 shadow-2xl">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10">
          {icon}
        </div>
        <p className="text-sm text-text-primary">{message}</p>
      </div>
    </motion.div>
  );
}
