"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, MessageCircle } from "lucide-react";
import { company } from "@/lib/data";

type Status = "idle" | "success" | "error";

const services = [
  "NVOCC Services",
  "Freight Forwarding",
  "Customs Clearance",
  "Warehousing",
  "DG Cargo",
  "Project & Breakbulk",
  "Other",
];

const WHATSAPP_URL = `https://wa.me/${company.contact.whatsappDigits}`;

/** Turns the filled-in fields into a readable WhatsApp message. */
function buildMessage(data: FormData) {
  const get = (key: string) => (data.get(key) as string | null)?.trim() || "";

  const lines = [
    "New enquiry from adventmaritime.com",
    "",
    `Name: ${get("name")}`,
  ];

  const optional: Array<[string, string]> = [
    ["Company", get("company")],
    ["Email", get("email")],
    ["Phone", get("phone")],
    ["Service required", get("service")],
    ["Origin", get("origin")],
    ["Destination", get("destination")],
  ];
  for (const [label, value] of optional) {
    if (value) lines.push(`${label}: ${value}`);
  }

  lines.push("", "Message:", get("message"));
  return lines.join("\n");
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — ignore silently if a bot ticked the hidden box.
    if (formData.get("botcheck")) return;

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(buildMessage(formData))}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");

    if (opened) {
      setStatus("success");
      form.reset();
    } else {
      // Pop-up blocked — offer the link instead of losing the enquiry.
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required placeholder="Jane Doe" />
        <Field
          label="Company"
          name="company"
          placeholder="Your company"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 99999 99999"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-navy-700 mb-2">
          Service required
        </label>
        <select
          name="service"
          defaultValue=""
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-sm text-navy-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label="Origin"
          name="origin"
          placeholder="Port / city of origin"
        />
        <Field
          label="Destination"
          name="destination"
          placeholder="Port / city of destination"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-navy-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your shipment — cargo type, volume, timeline…"
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-navy-700 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:gap-4"
        >
          <MessageCircle className="h-4 w-4" />
          Send on WhatsApp
        </button>
        <p className="mt-3 text-xs text-navy-700/60">
          Your enquiry opens in WhatsApp, ready to send to our team.
        </p>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 rounded-2xl bg-teal-500/10 border border-teal-500/30 p-4 text-sm text-teal-700"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">WhatsApp is open with your enquiry.</p>
              <p className="mt-1">
                Press send in WhatsApp and our team will get back to you within
                24 hours.
              </p>
            </div>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-700"
          >
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Your browser blocked the WhatsApp window.</p>
              <p className="mt-1">
                Allow pop-ups for this site, or message us directly at{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  {company.contact.whatsapp}
                </a>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-navy-700 mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
      />
    </div>
  );
}
