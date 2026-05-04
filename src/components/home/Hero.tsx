"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1613690399151-65ea69478674?auto=format&fit=crop&w=2400&q=85",
    label: "Ocean Freight",
    caption: "Container shipping across global trade lanes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=85",
    label: "Port Operations",
    caption: "Seamless cargo handling at major Indian ports",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=85",
    label: "Container Terminals",
    caption: "Strong coverage across Far East and Middle East",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=2400&q=85",
    label: "Multimodal Logistics",
    caption: "End-to-end visibility from origin to destination",
  },
];

const SLIDE_DURATION = 5500;

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Headline reveal
  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      const lines = titleRef.current!.querySelectorAll(".split-line span");
      gsap.from(lines, {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.15,
      });
    }, titleRef);
    return () => ctx.revert();
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [paused]);

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-navy-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slider images with Ken Burns */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {slides.map(
            (s, i) =>
              i === active && (
                <motion.div
                  key={s.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.12 }}
                  exit={{ opacity: 0, scale: 1.18 }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 7.5, ease: "linear" },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/55 to-navy-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-navy-900/60" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute inset-0 noise" />

      {/* Content */}
      <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-32 md:pt-36 pb-24 min-h-[100svh]">
        <div className="lg:col-span-8 xl:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal-400 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-teal-400" />
            </span>
            NVOCC · Freight Forwarding · Established 2020
          </motion.div>

          <h1
            ref={titleRef}
            className="heading-display mt-6 text-[clamp(2.6rem,6.4vw,5.6rem)] text-white"
          >
            <span className="split-line block overflow-hidden">
              <span className="block">Driving Efficiency</span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="block">in Global</span>
            </span>
            <span className="split-line block overflow-hidden">
              <span className="block">
                <span className="bg-gradient-to-r from-teal-400 via-cyan to-teal-400 bg-clip-text text-transparent">
                  Supply Chains.
                </span>
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl text-base md:text-lg text-navy-100/85 leading-relaxed"
          >
            Advent Maritime is a fast-growing NVOCC and freight forwarding
            partner — delivering reliable, cost-effective and customized
            logistics across India, the Far East, the Middle East, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-teal-500 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-400"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <Play className="h-3 w-3 fill-white" />
              </span>
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-navy-100/70"
          >
            <div>
              <p className="text-2xl font-display font-semibold text-white">5+</p>
              <p>Indian Offices</p>
            </div>
            <div>
              <p className="text-2xl font-display font-semibold text-white">3</p>
              <p>International Hubs</p>
            </div>
            <div>
              <p className="text-2xl font-display font-semibold text-white">6</p>
              <p>Industries Served</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicator + caption (bottom-right) */}
      <div className="pointer-events-none absolute bottom-8 right-4 md:right-8 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block max-w-xs text-right"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-teal-300">
              {slides[active].label}
            </p>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              {slides[active].caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider controls */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-32 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur text-white transition hover:bg-white/15"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 px-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-1 overflow-hidden rounded-full bg-white/15 transition-all"
              style={{ width: i === active ? 56 : 18 }}
            >
              {i === active && !paused && (
                <motion.span
                  key={`progress-${i}-${active}`}
                  className="absolute inset-y-0 left-0 bg-teal-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                />
              )}
              {i === active && paused && (
                <span className="absolute inset-0 bg-teal-400" />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur text-white transition hover:bg-white/15"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Side counter */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3 text-white/70">
        <span className="text-xs uppercase tracking-[0.3em]">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="block h-16 w-px bg-white/20" />
        <span className="text-xs uppercase tracking-[0.3em]">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
