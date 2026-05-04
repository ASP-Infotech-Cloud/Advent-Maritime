import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Network from "@/components/home/Network";
import WhyUs from "@/components/home/WhyUs";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <Network />
      <WhyUs />
      <Industries />
      <CTA />
    </>
  );
}
