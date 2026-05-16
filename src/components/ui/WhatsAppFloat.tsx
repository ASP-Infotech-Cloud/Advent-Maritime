"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { company } from "@/lib/data";

const MESSAGE = encodeURIComponent(
  `Hi Advent Maritime, I'd like to enquire about your logistics services.`
);

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay first paint slightly so the button doesn't crash into hero animations
    const t = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const href = `https://wa.me/${company.contact.whatsappDigits}?text=${MESSAGE}`;

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
            className="relative w-72 rounded-2xl bg-white shadow-2xl border border-navy-100 overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 bg-[#075E54] px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">
                    Advent Maritime
                  </p>
                  <p className="mt-1 text-[11px] text-white/80">
                    Typically replies within minutes
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 bg-[#ECE5DD]">
              <div className="rounded-lg rounded-tl-none bg-white px-3 py-2.5 text-sm text-navy-800 shadow">
                Hi 👋 How can we help you today? Ask us about NVOCC rates, freight forwarding or any of our services.
              </div>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="block bg-white px-4 py-3 text-center text-sm font-semibold text-[#075E54] hover:bg-navy-50 transition-colors"
            >
              Start Chat on WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label="Chat on WhatsApp"
        onClick={() => setOpen((s) => !s)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1FBA57] transition-colors"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-50" />
        <span className="absolute -inset-2 -z-10 rounded-full bg-[#25D366]/20 blur-md" />
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <WhatsAppIcon className="h-7 w-7" />
        )}
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M16.001 4.5C9.652 4.5 4.5 9.652 4.5 16c0 2.06.539 4.071 1.566 5.844L4.5 27.5l5.811-1.524A11.452 11.452 0 0 0 16 27.5C22.349 27.5 27.5 22.349 27.5 16S22.349 4.5 16.001 4.5Zm6.715 16.292c-.286.799-1.667 1.527-2.318 1.595-.593.062-1.34.087-2.158-.135-.498-.135-1.135-.343-1.952-.694-3.434-1.484-5.677-4.945-5.85-5.175-.171-.229-1.4-1.864-1.4-3.558 0-1.695.886-2.527 1.2-2.872.314-.343.686-.43.914-.43.229 0 .457.002.657.012.21.011.49-.08.768.586.286.685.972 2.38 1.057 2.553.086.171.143.371.029.6-.114.229-.171.371-.343.571-.171.2-.36.447-.514.6-.171.171-.348.357-.149.7.2.343.886 1.461 1.901 2.367 1.304 1.163 2.403 1.523 2.745 1.694.343.171.543.143.743-.086.2-.229.857-1 1.086-1.343.229-.343.457-.286.771-.171.314.114 1.99.94 2.331 1.111.343.171.572.257.658.4.085.143.085.828-.201 1.627Z" />
    </svg>
  );
}
