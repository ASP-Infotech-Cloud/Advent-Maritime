import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look at Advent Maritime — ships, ports, cargo handling, equipment and global operations across India and beyond.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual journey through"
        highlight="global logistics."
        description="Ships, ports, containers and crews — moments from across our network captured along the world's busiest trade lanes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
