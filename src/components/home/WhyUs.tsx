"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="relative bg-sand py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Why Advent Maritime</span>
            <h2 className="heading-display mt-4 text-[clamp(2rem,4.4vw,3.6rem)] text-navy-900 text-balance">
              Built on <span className="text-teal-600">trust</span>, driven by reliability.
            </h2>
            <p className="mt-6 text-base text-navy-700/80 leading-relaxed max-w-md">
              We believe logistics is not just about moving cargo — it&apos;s
              about building trust, ensuring reliability and enabling our
              customers&apos; business growth through seamless supply chain
              solutions.
            </p>

            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80"
                alt="Port operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/70 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-navy-100 bg-white p-7 hover:border-teal-500/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-wider text-navy-500">
                          0{i + 1}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-semibold text-navy-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
