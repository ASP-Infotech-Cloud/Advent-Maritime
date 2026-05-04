import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-navy-900 text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-wave opacity-50" />

      <div className="container-x relative text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-teal-500/15 text-teal-400 mb-8">
          <Compass className="h-9 w-9" />
        </div>
        <p className="font-display text-[clamp(6rem,18vw,14rem)] font-bold leading-none text-white">
          404
        </p>
        <h1 className="heading-display text-3xl md:text-5xl text-white text-balance mt-4">
          We couldn&apos;t chart this route.
        </h1>
        <p className="mt-5 text-base md:text-lg text-navy-100/80 max-w-xl mx-auto">
          The page you&apos;re looking for has drifted off course. Let&apos;s
          get you back to safe harbour.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-teal-500 px-7 py-4 text-sm font-semibold text-white hover:bg-teal-400"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
