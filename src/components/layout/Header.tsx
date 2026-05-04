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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(11,19,32,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="relative flex items-center" aria-label="Advent Maritime home">
          <Logo className="h-9 w-auto md:h-10" inverse={!scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const baseColor = scrolled
              ? isActive
                ? "text-navy-700"
                : "text-navy-600/80 hover:text-navy-700"
              : isActive
              ? "text-white"
              : "text-white/75 hover:text-white";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${baseColor}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ${
                      scrolled ? "bg-teal-500/10" : "bg-white/15"
                    }`}
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
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled
                ? "text-navy-700 hover:text-teal-600"
                : "text-white/80 hover:text-teal-300"
            }`}
          >
            <Phone className="h-4 w-4" />
            {company.contact.phone}
          </a>
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:gap-3 ${
              scrolled
                ? "bg-navy-700 text-white hover:bg-navy-800"
                : "bg-teal-500 text-white hover:bg-teal-400"
            }`}
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className={`lg:hidden inline-flex items-center justify-center rounded-full p-2.5 ${
              scrolled
                ? "border border-navy-600/20 text-navy-700"
                : "border border-white/25 text-white"
            }`}
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
