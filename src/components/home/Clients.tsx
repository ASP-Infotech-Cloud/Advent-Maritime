"use client";

import Image from "next/image";
import { clients } from "@/lib/data";

// The strip scrolls by 50%, so the list is laid out four times over: two sets
// scroll past before the loop resets, which keeps wide screens covered.
const track = [...clients, ...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Customers</span>
            <h2 className="heading-display mt-4 text-[clamp(2rem,4.4vw,3.6rem)] text-navy-900 text-balance">
              Trusted by businesses that{" "}
              <span className="text-teal-600">move cargo worldwide.</span>
            </h2>
          </div>
          <p className="text-navy-700/80 max-w-md">
            A few of the companies whose shipments we handle across our ocean,
            air and multimodal trade lanes.
          </p>
        </div>
      </div>

      <div className="group relative mt-14">
        {/* Fade the strip out at both edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div className="flex w-max animate-marquee will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((client, i) => (
            <div
              key={`${client.src}-${i}`}
              className="mx-3 flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-navy-100 p-6 transition-colors hover:border-teal-500/40 md:mx-4 md:h-32 md:w-56"
              style={client.dark ? { backgroundColor: "#0B1320" } : undefined}
            >
              <div className="relative h-full w-full">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  sizes="224px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
