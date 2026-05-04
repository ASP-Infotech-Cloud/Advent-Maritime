import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import { services } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.short}
        title={service.title.replace(/services$/i, "").trim()}
        highlight={service.title.match(/services$/i) ? "Services" : ""}
        description={service.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="heading-display text-3xl md:text-4xl text-navy-900">
                What we offer
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-700/85">
                {service.description}
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-500 mt-0.5" />
                  <span className="text-sm text-navy-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  Why choose Advent Maritime?
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-navy-100/85">
                  <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" /> Strong global agency & partner network</li>
                  <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" /> Reliable transit times, competitive pricing</li>
                  <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" /> End-to-end shipment visibility</li>
                  <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" /> Customer-focused, flexible service approach</li>
                </ul>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center justify-between gap-4 w-full rounded-full bg-teal-500 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-400"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <h3 className="heading-display text-3xl md:text-4xl text-navy-900 mb-10">
            Other services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-6 rounded-2xl border border-navy-100 bg-white p-6 hover:border-teal-500/50 hover:shadow-md transition-all"
                >
                  <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-teal-600">
                      <SIcon className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {s.short}
                      </span>
                    </div>
                    <h4 className="mt-1 font-display text-xl font-semibold text-navy-900">
                      {s.title}
                    </h4>
                  </div>
                  <ArrowRight className="h-5 w-5 text-navy-500 transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
