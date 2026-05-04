import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import Stats from "@/components/home/Stats";
import { company } from "@/lib/data";
import { Anchor, ShieldCheck, Globe2, PackageCheck, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established in 2020, Advent Maritime is a fast-growing NVOCC and freight forwarding company headquartered in Kolkata.",
};

const values = [
  {
    title: "Reliability",
    icon: Anchor,
    description:
      "Predictable transit times and proactive coordination on every shipment.",
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    description:
      "Full trade compliance, DG handling certifications and documentation expertise.",
  },
  {
    title: "Global Reach",
    icon: Globe2,
    description:
      "Strong agency network covering Far East, Middle East and global trade lanes.",
  },
  {
    title: "Customer Focus",
    icon: PackageCheck,
    description:
      "Flexible, customized solutions that adapt to each customer's unique needs.",
  },
  {
    title: "Innovation",
    icon: Compass,
    description:
      "Continuous improvement of service quality through technology and expertise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A logistics partner you can"
        highlight="rely on."
        description="Advent Maritime (I) Private Limited, established in 2020, is a fast-growing logistics company specializing in NVOCC and Freight Forwarding services."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
                alt="Container ship at port"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-display mt-4 text-[clamp(2rem,3.6vw,3rem)] text-navy-900 text-balance">
              Built to serve the evolving needs of <span className="text-teal-600">global trade.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-700/85">
              Registered in Kolkata, we are committed to delivering reliable,
              cost-effective, and customized logistics solutions to meet the
              evolving needs of global trade. With a strong presence across
              major Indian ports and international logistics hubs, we ensure
              seamless cargo movement supported by experienced professionals
              and a robust global partner network.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-700/85">
              At Advent Maritime, we believe logistics is not just about moving
              cargo — it is about building trust, ensuring reliability, and
              enabling our customers&apos; business growth through seamless
              supply chain solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-5xl font-display font-bold text-teal-600">2020</p>
                <p className="mt-2 text-sm text-navy-700/70">Established</p>
              </div>
              <div>
                <p className="text-5xl font-display font-bold text-teal-600">9</p>
                <p className="mt-2 text-sm text-navy-700/70">Office locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div>
              <span className="eyebrow">Our Vision</span>
              <h3 className="heading-display mt-4 text-3xl md:text-4xl text-navy-900">
                A preferred global logistics partner.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-navy-700/85">
                To be a preferred global logistics partner by providing
                dependable, efficient, and innovative supply chain solutions.
              </p>
            </div>
            <div>
              <span className="eyebrow">Our Mission</span>
              <h3 className="heading-display mt-4 text-3xl md:text-4xl text-navy-900">
                Timely, safe, cost-effective.
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-700/85">
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" /> Deliver timely, safe, and cost-effective cargo transportation.</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" /> Maintain transparency, compliance, and operational excellence.</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" /> Build long-term partnerships with customers and global agents.</li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" /> Continuously enhance service quality through innovation and expertise.</li>
              </ul>
            </div>
          </div>

          <div>
            <span className="eyebrow">Our Values</span>
            <h3 className="heading-display mt-4 text-3xl md:text-4xl text-navy-900 mb-10">
              What we stand for.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-navy-100 bg-white p-6 hover:border-teal-500/50 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 font-display text-lg font-semibold text-navy-900">
                      {v.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-navy-900">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                  alt="Director Rajan Mishra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-2xl text-white">
                    {company.director.name}
                  </p>
                  <p className="text-sm text-teal-300">
                    {company.director.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow">Leadership</span>
              <h2 className="heading-display mt-4 text-[clamp(2rem,3.6vw,3rem)] text-navy-900 text-balance">
                Led by experienced logistics professionals.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-700/85 max-w-xl">
                Our leadership brings decades of combined experience across
                shipping lines, freight forwarding and trade compliance — the
                same depth of expertise that powers every shipment we handle.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
