import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import { services, valueAdded } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Advent Maritime's NVOCC, freight forwarding and value-added logistics services — built for global trade.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive logistics,"
        highlight="end-to-end."
        description="Three core service pillars covering ocean and air freight, customs, warehousing, and every step in between."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="space-y-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.slug}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-navy-100 hover:border-teal-500/40 p-6 md:p-10 transition-colors"
                >
                  <div
                    className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-navy-500">
                        0{i + 1} / Pillar
                      </span>
                    </div>
                    <h3 className="heading-display mt-6 text-3xl md:text-4xl text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-teal-600 font-semibold">
                      {service.short}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-navy-700/80">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-navy-700/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/link mt-8 inline-flex items-center gap-3 text-sm font-semibold text-navy-700"
                    >
                      <span className="link-underline">Learn more</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-700 text-white transition-transform group-hover/link:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow !before:hidden">Allied & Value-Added</span>
            <h2 className="heading-display mt-4 text-3xl md:text-5xl text-navy-900 text-balance">
              Everything else your shipment might need.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {valueAdded.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group flex flex-col items-center text-center rounded-2xl border border-navy-100 bg-white p-6 hover:border-teal-500/50 hover:-translate-y-1 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-navy-900">
                    {v.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
