"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 1100;

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      // Safety fallback in case "load" never fires (slow images etc.)
      const fallback = setTimeout(finish, 4000);
      return () => {
        window.removeEventListener("load", finish);
        clearTimeout(fallback);
      };
    }
  }, []);

  // Lock body scroll while visible
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-900 overflow-hidden"
          aria-hidden
        >
          {/* Ambient background */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 bg-wave opacity-50" />
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan/15 blur-3xl" />

          {/* Center stack */}
          <div className="relative flex flex-col items-center">
            {/* Concentric pulsing rings around the mark */}
            <div className="relative flex items-center justify-center">
              <motion.span
                className="absolute h-32 w-32 rounded-full border border-teal-400/30"
                animate={{ scale: [0.85, 1.4], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute h-32 w-32 rounded-full border border-teal-400/30"
                animate={{ scale: [0.85, 1.4], opacity: [0.6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />

              <div className="relative flex h-24 w-24 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo-mark-white.png"
                  alt="Advent Maritime"
                  width={120}
                  height={96}
                  className="h-full w-auto"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Wordmark */}
            <div className="mt-7 flex flex-col items-center">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Advent
              </span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.45em] text-teal-400">
                MARITIME
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-10 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 via-cyan to-teal-400"
                initial={{ x: "-100%", width: "60%" }}
                animate={{ x: "180%" }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-white/50">
              Driving Efficiency in Global Supply Chains
            </p>
          </div>

          {/* Bottom wave SVG */}
          <svg
            className="absolute inset-x-0 bottom-0 w-full opacity-40"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M0 60 C 240 110, 480 10, 720 60 S 1200 110, 1440 60 L1440 120 L0 120 Z"
              fill="#1FB6B6"
              fillOpacity="0.2"
              animate={{
                d: [
                  "M0 60 C 240 110, 480 10, 720 60 S 1200 110, 1440 60 L1440 120 L0 120 Z",
                  "M0 70 C 240 30, 480 110, 720 70 S 1200 30, 1440 70 L1440 120 L0 120 Z",
                  "M0 60 C 240 110, 480 10, 720 60 S 1200 110, 1440 60 L1440 120 L0 120 Z",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
