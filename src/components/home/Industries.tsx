"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section className="relative bg-navy-900 py-24 md:py-32 overflow-hidden text-white">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow !text-teal-400 before:!bg-teal-400">
              Industries we serve
            </span>
            <h2 className="heading-display mt-4 text-[clamp(2rem,4.4vw,3.6rem)] text-white text-balance">
              Tailored logistics for <span className="text-teal-400">every sector.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-navy-100/70">
            From perishable FMCG to heavy steel and DG chemicals — our team has
            handled every kind of cargo with care, compliance and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

                <div className="absolute top-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-teal-300">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
