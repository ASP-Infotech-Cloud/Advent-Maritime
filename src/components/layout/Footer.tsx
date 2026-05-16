import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { company, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100/80">
      {/* Wave divider */}
      <svg
        className="absolute inset-x-0 -top-1 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 40 C 240 90, 480 0, 720 40 S 1200 90, 1440 40 L1440 0 L0 0 Z"
          fill="#FFFFFF"
        />
      </svg>

      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />

      <div className="container-x relative pt-28 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label="Advent Maritime"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/brand/logo-mark-white.png"
                alt=""
                width={120}
                height={96}
                priority
                className="h-14 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-3xl font-bold tracking-tight text-white">
                  Advent
                </span>
                <span className="mt-1.5 text-[11px] font-semibold tracking-[0.4em] text-teal-400">
                  MARITIME
                </span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-navy-100/70 max-w-sm">
              Established in {company.established}, Advent Maritime is a
              fast-growing NVOCC and freight forwarding company committed to
              reliable, cost-effective and customized logistics solutions for
              global trade.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={`tel:${company.contact.phoneAlt.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 link-underline w-fit"
              >
                <Phone className="h-4 w-4 text-teal-400" />
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="inline-flex items-center gap-3 link-underline w-fit"
              >
                <Mail className="h-4 w-4 text-teal-400" />
                {company.contact.email}
              </a>
              <span className="inline-flex items-start gap-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
                <span>{company.contact.address}</span>
              </span>
              <a
                href="https://www.adventmaritime.com"
                className="inline-flex items-center gap-3 link-underline w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="h-4 w-4 text-teal-400" />
                {company.contact.website}
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Company
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li><Link href="/about" className="link-underline">About</Link></li>
              <li><Link href="/services" className="link-underline">Services</Link></li>
              <li><Link href="/network" className="link-underline">Network</Link></li>
              <li><Link href="/gallery" className="link-underline">Gallery</Link></li>
              <li><Link href="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="link-underline">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="link-underline">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Network
            </h4>
            <p className="mt-5 text-sm leading-relaxed">
              <span className="text-white/90">India:</span> Kolkata · Vizag ·
              Mundra · Mumbai · Chennai · Delhi
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              <span className="text-white/90">International:</span> Dubai · Port
              Klang · Singapore
            </p>
            <Link href="/contact" className="btn-teal mt-6 !py-2.5 !px-5 text-xs">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-navy-100/60">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Driving Efficiency in Global Supply Chains
          </p>
        </div>
      </div>
    </footer>
  );
}
