"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80"
                alt="Container ship at port"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 rounded-2xl bg-teal-500 p-6 shadow-xl"
            >
              <p className="text-5xl md:text-6xl font-display font-bold text-white leading-none">
                2020
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Established
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-6 -left-6 hidden md:block rounded-2xl border border-navy-100 bg-white/90 backdrop-blur px-5 py-4 shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-teal-600 font-semibold">
                NVOCC + Freight
              </p>
              <p className="mt-1 text-sm font-medium text-navy-700">
                Registered in Kolkata
              </p>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">About Advent Maritime</span>
          <h2 className="heading-display mt-4 text-[clamp(2rem,4.4vw,3.6rem)] text-navy-900 text-balance">
            A trusted partner for{" "}
            <span className="text-teal-600">global trade movement.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-navy-700/85 max-w-xl">
            Advent Maritime (I) Private Limited is a fast-growing logistics
            company specializing in NVOCC and Freight Forwarding services. With
            a strong presence across major Indian ports and international
            logistics hubs, we ensure seamless cargo movement supported by
            experienced professionals and a robust global partner network.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-navy-100 p-6 hover:border-teal-500/50 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/85">
                To be a preferred global logistics partner by providing
                dependable, efficient, and innovative supply chain solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 p-6 hover:border-teal-500/50 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/85">
                Timely, safe and cost-effective cargo transportation built on
                transparency, compliance and operational excellence.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-navy-700"
          >
            <span className="link-underline">Learn more about us</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-700 text-white transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
