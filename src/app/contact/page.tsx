import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { company } from "@/lib/data";
import { Phone, Mail, MapPin, Globe, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Advent Maritime — request a quote, talk to our logistics team, or visit our office in Kolkata.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's move your cargo,"
        highlight="anywhere."
        description="Send us your requirements and our team will respond within 24 hours with a tailored quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Reach out</span>
            <h2 className="heading-display mt-4 text-3xl md:text-4xl text-navy-900 text-balance">
              We&apos;re ready when you are.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700/85">
              Talk to our team directly or fill out the enquiry form — we
              typically respond the same business day.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow
                icon={MapPin}
                label="Head Office"
                value={company.contact.address}
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={company.contact.phone}
                href={`tel:${company.contact.phoneAlt.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={Mail}
                label="General Email"
                value={company.contact.email}
                href={`mailto:${company.contact.email}`}
              />
              <ContactRow
                icon={Mail}
                label="Director"
                value={`${company.director.name} — ${company.contact.directorEmail}`}
                href={`mailto:${company.contact.directorEmail}`}
              />
              <ContactRow
                icon={Globe}
                label="Website"
                value={company.contact.website}
                href="https://www.adventmaritime.com"
              />
              <ContactRow
                icon={Clock}
                label="Working Hours"
                value="Mon — Sat · 9:30 AM to 6:30 PM IST"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-navy-100 bg-sand p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden border border-navy-100 aspect-[16/7] relative">
            <iframe
              title="Advent Maritime Office"
              src="https://www.google.com/maps?q=Siddha+Esplanade,+6+Jawaharlal+Nehru+Road,+Kolkata+700013&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 group">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
          {label}
        </p>
        <p className="mt-1 text-base text-navy-900 leading-relaxed">{value}</p>
      </div>
    </div>
  );
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  return inner;
}
