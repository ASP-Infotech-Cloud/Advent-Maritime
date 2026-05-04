import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industries served by Advent Maritime — FMCG, Agriculture, Steel & Metal, Chemicals, Textiles, Engineering & Machinery.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Logistics expertise across"
        highlight="every sector."
        description="From perishable FMCG to heavy steel and DG chemicals — we have moved cargo for every kind of industry, with care, compliance and consistency."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const isFeatured = i === 0;
              return (
                <div
                  key={ind.name}
                  className={`group relative overflow-hidden rounded-3xl ${
                    isFeatured ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, 100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 via-navy-900/40 to-transparent" />

                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-teal-300 mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">
                      {ind.name}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75 max-w-md">
                      {ind.description}
                    </p>
                  </div>
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
