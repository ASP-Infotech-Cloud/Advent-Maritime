"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28 text-white">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-wave opacity-60" />

      <div className="container-x relative">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="px-4 py-8 md:py-4 md:px-10 first:pl-0 last:pr-0"
            >
              <p className="font-display text-5xl md:text-7xl font-semibold tracking-tightest text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm md:text-base text-navy-100/70">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
