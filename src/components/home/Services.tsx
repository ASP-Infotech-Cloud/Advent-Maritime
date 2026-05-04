"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-sand py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="heading-display mt-4 text-[clamp(2rem,4.4vw,3.6rem)] text-navy-900 text-balance">
              End-to-end logistics, <span className="text-teal-600">built for global trade.</span>
            </h2>
          </div>
          <p className="text-navy-700/80 max-w-md">
            Three core service pillars that move your cargo efficiently — from
            container booking and customs clearance to last-mile delivery.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-navy-100 hover:border-teal-500/40 transition-colors"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white/80">
                    0{i + 1} / 0{services.length}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-teal-600 font-semibold">
                    {service.short}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.features.slice(0, 3).map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-navy-700/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group/link mt-7 inline-flex items-center gap-3 text-sm font-semibold text-navy-700"
                  >
                    <span className="link-underline">Read more</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-200 transition-all group-hover/link:bg-navy-700 group-hover/link:border-navy-700 group-hover/link:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
