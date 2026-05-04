"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";

const WorldMap = dynamic(() => import("@/components/ui/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[520px] flex items-center justify-center">
      <div className="h-32 w-32 rounded-full bg-teal-500/10 animate-pulse" />
    </div>
  ),
});

export default function Network() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our Network</span>
            <h2 className="heading-display mt-4 text-[clamp(2rem,4.4vw,3.6rem)] text-navy-900 text-balance">
              Connecting <span className="text-teal-600">India</span> to global trade lanes.
            </h2>
          </div>
          <p className="lg:col-span-5 text-navy-700/80">
            Headquartered in Kolkata with associate offices across India and
            international hubs in Dubai, Port Klang and Singapore — we ensure
            efficient local handling combined with strong international
            connectivity.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-navy-900 p-4 md:p-8 lg:p-10">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

          <div className="relative">
            <WorldMap focus="world" height={520} />
          </div>

          <div className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-teal-400 font-semibold">
                <Building2 className="h-3.5 w-3.5" /> Head Office
              </p>
              <p className="mt-2 text-white">Kolkata</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-teal-400 font-semibold">
                <MapPin className="h-3.5 w-3.5" /> India
              </p>
              <p className="mt-2 text-white/80 leading-relaxed">
                Vizag · Mundra · Mumbai · Chennai · Delhi
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-teal-400 font-semibold">
                <MapPin className="h-3.5 w-3.5" /> International
              </p>
              <p className="mt-2 text-white/80 leading-relaxed">
                Dubai · Port Klang · Singapore
              </p>
            </div>
            <div className="flex items-end">
              <Link
                href="/network"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                <span className="link-underline">View full network</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
