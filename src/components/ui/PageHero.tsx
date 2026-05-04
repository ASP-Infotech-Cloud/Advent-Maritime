"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  crumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-wave opacity-50" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />

      <div className="container-x relative">
        {crumbs && crumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-white/60 mb-8"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow !text-teal-400 before:!bg-teal-400"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-display mt-5 text-[clamp(2.4rem,5.6vw,5rem)] text-white text-balance max-w-4xl"
        >
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-teal-400 to-cyan bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-navy-100/80 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
