import { Anchor } from "lucide-react";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-navy-100 bg-white py-6">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {items.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-6 px-8 text-3xl md:text-5xl font-display font-semibold tracking-tightest text-navy-900"
          >
            <span>{item}</span>
            <Anchor className="h-6 w-6 md:h-8 md:w-8 text-teal-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
