import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Network from "@/components/home/Network";
import CTA from "@/components/home/CTA";
import { offices } from "@/lib/data";
import { MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Advent Maritime's office network — Kolkata HQ, Indian associates and international hubs across Dubai, Port Klang and Singapore.",
};

export default function NetworkPage() {
  const india = offices.filter((o) => o.type === "india" || o.type === "head");
  const intl = offices.filter((o) => o.type === "international");

  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="A connected network across"
        highlight="global trade lanes."
        description="Headquartered in Kolkata with associate offices across India and international hubs in Dubai, Port Klang and Singapore."
        crumbs={[{ label: "Home", href: "/" }, { label: "Network" }]}
      />

      <Network />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">India Offices</span>
            <h2 className="heading-display mt-4 text-3xl md:text-4xl text-navy-900">
              Across major Indian ports & cities.
            </h2>
            <ul className="mt-8 space-y-3">
              {india.map((o) => (
                <li
                  key={o.city}
                  className="flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-5 hover:border-teal-500/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                      {o.type === "head" ? (
                        <Building2 className="h-5 w-5" />
                      ) : (
                        <MapPin className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-navy-900">
                        {o.city}
                      </p>
                      <p className="text-xs text-navy-500">{o.country}</p>
                    </div>
                  </div>
                  {o.type === "head" && (
                    <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white">
                      Head Office
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">International Hubs</span>
            <h2 className="heading-display mt-4 text-3xl md:text-4xl text-navy-900">
              Strategic global presence.
            </h2>
            <ul className="mt-8 space-y-3">
              {intl.map((o) => (
                <li
                  key={o.city}
                  className="flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-5 hover:border-teal-500/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-navy-900">
                        {o.city}
                      </p>
                      <p className="text-xs text-navy-500">{o.country}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl bg-navy-900 text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold">
                  Target Markets
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-100/85">
                  <li>
                    <span className="text-teal-400 font-semibold">NVOCC:</span>{" "}
                    Far East & Middle East
                  </li>
                  <li>
                    <span className="text-teal-400 font-semibold">
                      Freight Forwarding:
                    </span>{" "}
                    Global coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
