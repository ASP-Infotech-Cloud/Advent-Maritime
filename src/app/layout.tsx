import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adventmaritime.com"),
  title: {
    default: "Advent Maritime — Driving Efficiency in Global Supply Chains",
    template: "%s · Advent Maritime",
  },
  description:
    "Advent Maritime (I) Pvt. Ltd. is a fast-growing NVOCC and freight forwarding company headquartered in Kolkata, delivering reliable, cost-effective, and customized global logistics solutions.",
  keywords: [
    "NVOCC",
    "Freight Forwarding",
    "Ocean Freight",
    "Air Freight",
    "Logistics India",
    "Kolkata Logistics",
    "Customs Clearance",
    "FCL LCL",
    "Advent Maritime",
  ],
  authors: [{ name: "Advent Maritime (I) Pvt. Ltd." }],
  openGraph: {
    title: "Advent Maritime — Global Logistics & NVOCC",
    description:
      "Reliable, cost-effective NVOCC and freight forwarding services across Far East, Middle East and global trade lanes.",
    url: "https://www.adventmaritime.com",
    siteName: "Advent Maritime",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advent Maritime — Global Logistics & NVOCC",
    description:
      "Reliable, cost-effective NVOCC and freight forwarding services for global trade.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Header />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
