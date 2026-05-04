"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "NVOCC Services",
  "Freight Forwarding",
  "Customs Clearance",
  "Warehousing",
  "DG Cargo",
  "Project & Breakbulk",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    formData.append("subject", "New enquiry from adventmaritime.com");
    formData.append("from_name", "Advent Maritime Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
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
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 rounded-full bg-navy-700 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:gap-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
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
              <p className="font-semibold">Thank you — we&apos;ve received your enquiry.</p>
              <p className="mt-1">Our team will get back to you within 24 hours.</p>
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
              <p className="font-semibold">Couldn&apos;t send your message.</p>
              <p className="mt-1">{errorMsg}</p>
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
