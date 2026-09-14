"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks, company } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-500 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(11,19,32,0.06),0_8px_24px_-16px_rgba(11,19,32,0.25)]"
          : "shadow-[0_1px_0_rgba(11,19,32,0.06)]"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="relative flex items-center" aria-label="Advent Maritime home">
          <Logo className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-navy-700"
                    : "text-navy-600/80 hover:text-navy-700"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-teal-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.contact.phoneAlt.replace(/\s/g, "")}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-teal-600"
          >
            <Phone className="h-4 w-4" />
            {company.contact.phone}
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-navy-800"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-navy-600/20 p-2.5 text-navy-700"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-navy-100"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 hover:bg-teal-500/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3 justify-center">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
