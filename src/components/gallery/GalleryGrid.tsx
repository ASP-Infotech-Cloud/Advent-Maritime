"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/data";

type Filter = GalleryCategory | "All";

const filters: Filter[] = ["All", ...galleryCategories];

const aspectClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter]
  );

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "text-white"
                  : "text-navy-700/80 hover:text-navy-900"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-navy-700"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {f}
            </button>
          );
        })}
      </div>

      {/* Masonry-ish grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              layout
              type="button"
              key={item.src}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className={`group relative overflow-hidden rounded-2xl bg-navy-100 ${aspectClass[item.aspect] ?? ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-[0.2em] text-teal-300 font-semibold">
                  {item.category}
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {item.alt}
                </p>
              </div>
              <span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-navy-800" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/95 backdrop-blur p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy-900/90 to-transparent">
                <p className="text-xs uppercase tracking-[0.2em] text-teal-300 font-semibold">
                  {items[lightbox].category}
                </p>
                <p className="mt-1 text-base font-medium text-white">
                  {items[lightbox].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
