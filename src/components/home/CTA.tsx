"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/data";

export default function CTA() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] bg-ocean p-10 md:p-16 lg:p-20"
        >
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-500/30 blur-3xl" />
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />

          {/* Wave SVG */}
          <svg
            className="absolute inset-x-0 bottom-0 w-full opacity-40"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100 C 240 180, 480 20, 720 100 S 1200 180, 1440 100 L1440 200 L0 200 Z"
              fill="#1FB6B6"
              fillOpacity="0.2"
            />
            <path
              d="M0 130 C 240 200, 480 60, 720 130 S 1200 200, 1440 130 L1440 200 L0 200 Z"
              fill="#22D3EE"
              fillOpacity="0.15"
            />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow !text-teal-400 before:!bg-teal-400">
                Ready to ship?
              </span>
              <h2 className="heading-display mt-4 text-[clamp(2.2rem,5vw,4.4rem)] text-white text-balance">
                Let&apos;s move your cargo, <br className="hidden md:block" />
                <span className="text-teal-400">across the world.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-navy-100/80 max-w-xl leading-relaxed">
                Get a tailored quote within 24 hours. Our team is ready to
                support your import, export and project cargo needs.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-teal-500 px-7 py-5 text-base font-semibold text-white transition-all hover:bg-teal-400"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${company.contact.phoneAlt.replace(/\s/g, "")}`}
                className="group inline-flex items-center justify-between gap-4 rounded-full border border-white/25 px-7 py-5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/60"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  {company.contact.phone}
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
