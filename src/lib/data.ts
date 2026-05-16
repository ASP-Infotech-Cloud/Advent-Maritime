import {
  Anchor,
  Plane,
  Ship,
  Warehouse,
  ShieldCheck,
  FileCheck2,
  Boxes,
  Truck,
  Globe2,
  PackageCheck,
  Sprout,
  Factory,
  FlaskConical,
  Shirt,
  Wrench,
  ShoppingBasket,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Advent Maritime (I) Pvt. Ltd.",
  shortName: "Advent Maritime",
  tagline: "Driving Efficiency in Global Supply Chains",
  established: 2020,
  director: { name: "Rajan Mishra", role: "Director" },
  contact: {
    phone: "+91 33 4062 9221",
    phoneAlt: "+913340629221",
    whatsapp: "+91 98999 04738",
    whatsappAlt: "+919899904738",
    whatsappDigits: "919899904738",
    email: "info@adventmaritime.com",
    directorEmail: "rajan@adventmaritime.com",
    website: "www.adventmaritime.com",
    address:
      "Room 506, Siddha Esplanade, 6 Jawaharlal Nehru Road, Kolkata 700013, India",
    addressShort: "Kolkata, India",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Network", href: "/network" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  aspect: "tall" | "wide" | "square";
};

export type GalleryCategory =
  | "Vessels"
  | "Ports"
  | "Containers"
  | "Operations"
  | "Equipment";

export const galleryCategories: GalleryCategory[] = [
  "Vessels",
  "Ports",
  "Containers",
  "Operations",
  "Equipment",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1600&q=80",
    alt: "Container ship at sea",
    category: "Vessels",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Container terminal",
    category: "Ports",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    alt: "Cargo containers stacked",
    category: "Containers",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
    alt: "Port aerial view",
    category: "Ports",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1556139954-ec19cce61d61?auto=format&fit=crop&w=1200&q=80",
    alt: "Logistics aerial",
    category: "Operations",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1200&q=80",
    alt: "Cargo handling",
    category: "Operations",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80",
    alt: "Port crane silhouette",
    category: "Equipment",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1613690399151-65ea69478674?auto=format&fit=crop&w=1200&q=80",
    alt: "Container yard at dusk",
    category: "Containers",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    alt: "Ship at sea",
    category: "Vessels",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    alt: "Bulk cargo ship",
    category: "Vessels",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    alt: "Stacked containers close-up",
    category: "Containers",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1612277796100-86cfac0a6f01?auto=format&fit=crop&w=1200&q=80",
    alt: "Cranes lifting cargo",
    category: "Equipment",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Warehouse interior",
    category: "Operations",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1570053594891-f4716e0a4060?auto=format&fit=crop&w=1200&q=80",
    alt: "Port at dawn",
    category: "Ports",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1554178286-db408c69256a?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial port crane",
    category: "Equipment",
    aspect: "tall",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "nvocc-services",
    title: "NVOCC Services",
    short: "Non-Vessel Operating Common Carrier",
    description:
      "End-to-end ocean container solutions with strong coverage across Far East and Middle East trade lanes. We handle FCL and LCL movements, consolidation, and issue our own House Bills of Lading.",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1600&q=80",
    features: [
      "FCL (Full Container Load) movements",
      "LCL (Less than Container Load) consolidation",
      "Import & Export consolidation",
      "Issuance of House Bill of Lading (HBL)",
      "Competitive ocean freight pricing",
      "Strong Far East & Middle East coverage",
    ],
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    short: "Ocean, Air & Multimodal Solutions",
    description:
      "Comprehensive freight forwarding for both ocean and air cargo, including door-to-door logistics, multimodal transportation, and seamless cross-border shipment coordination.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Ocean Freight (Import & Export)",
      "Air Freight (Inbound & Outbound)",
      "Door-to-Door logistics solutions",
      "Multimodal transportation",
      "Cross-border shipment coordination",
      "Real-time shipment tracking",
    ],
  },
  {
    slug: "value-added-services",
    title: "Value-Added Services",
    short: "Customs, Warehousing & Compliance",
    description:
      "A complete suite of allied services that complement our core logistics — from customs clearance and DG cargo handling to warehousing, distribution, and full trade documentation support.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Customs Clearance (Import & Export)",
      "DG (Dangerous Goods) cargo handling",
      "Project & Breakbulk cargo",
      "Warehousing & Distribution",
      "Cargo insurance assistance",
      "Documentation & trade compliance",
    ],
  },
];

export const valueAdded = [
  { title: "Customs Clearance", icon: FileCheck2 },
  { title: "DG Cargo Handling", icon: ShieldCheck },
  { title: "Project & Breakbulk", icon: Boxes },
  { title: "Warehousing", icon: Warehouse },
  { title: "Multimodal", icon: Truck },
  { title: "Compliance", icon: PackageCheck },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
  image: string;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "FMCG",
    icon: ShoppingBasket,
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    description:
      "Fast-moving consumer goods with strict timelines and temperature considerations.",
  },
  {
    name: "Agriculture",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    description:
      "Bulk grains, produce, and agricultural commodities — domestic and export.",
  },
  {
    name: "Steel & Metal",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Heavy and oversized cargo, coils, billets and structural steel movement.",
  },
  {
    name: "Chemicals",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hazardous and non-hazardous chemicals with full DG documentation.",
  },
  {
    name: "Textiles",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Garments, fabrics and textile exports with consolidation expertise.",
  },
  {
    name: "Engineering & Machinery",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Industrial machinery, project cargo and engineering exports worldwide.",
  },
];

export type Office = {
  city: string;
  country: string;
  type: "head" | "india" | "international";
  lat: number;
  lng: number;
  // Label offset hints (in svg units), to avoid overlapping labels
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: "start" | "middle" | "end";
};

export const offices: Office[] = [
  { city: "Kolkata", country: "India", type: "head", lat: 22.5726, lng: 88.3639, labelDx: 12, labelDy: 4, labelAnchor: "start" },
  { city: "Vizag", country: "India", type: "india", lat: 17.6868, lng: 83.2185, labelDx: 12, labelDy: 4, labelAnchor: "start" },
  { city: "Mundra", country: "India", type: "india", lat: 22.8394, lng: 69.7219, labelDx: -12, labelDy: 4, labelAnchor: "end" },
  { city: "Mumbai", country: "India", type: "india", lat: 19.076, lng: 72.8777, labelDx: -12, labelDy: 4, labelAnchor: "end" },
  { city: "Chennai", country: "India", type: "india", lat: 13.0827, lng: 80.2707, labelDx: -12, labelDy: 4, labelAnchor: "end" },
  { city: "Delhi", country: "India", type: "india", lat: 28.6139, lng: 77.209, labelDx: 0, labelDy: -10, labelAnchor: "middle" },
  { city: "Dubai", country: "UAE", type: "international", lat: 25.2048, lng: 55.2708, labelDx: -12, labelDy: 4, labelAnchor: "end" },
  { city: "Port Klang", country: "Malaysia", type: "international", lat: 3.0044, lng: 101.3923, labelDx: 12, labelDy: 4, labelAnchor: "start" },
  { city: "Singapore", country: "Singapore", type: "international", lat: 1.3521, lng: 103.8198, labelDx: 12, labelDy: 18, labelAnchor: "start" },
];

export const whyUs = [
  {
    title: "Experienced Team",
    description:
      "Dedicated logistics professionals with decades of combined industry expertise.",
    icon: ShieldCheck,
  },
  {
    title: "Global Network",
    description:
      "Strong agency partnerships across major international ports and trade hubs.",
    icon: Globe2,
  },
  {
    title: "Reliable Transit",
    description:
      "Predictable transit times with competitive, transparent pricing.",
    icon: Anchor,
  },
  {
    title: "End-to-End Visibility",
    description:
      "Complete shipment tracking and proactive coordination from origin to delivery.",
    icon: PackageCheck,
  },
  {
    title: "Flexible Service",
    description:
      "Customer-focused approach with customized solutions for every shipment.",
    icon: FileCheck2,
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Indian Offices" },
  { value: 3, suffix: "", label: "International Hubs" },
  { value: 6, suffix: "", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const marqueeItems = [
  "NVOCC",
  "Ocean Freight",
  "Air Freight",
  "Customs Clearance",
  "Warehousing",
  "DG Cargo",
  "Multimodal",
  "FCL · LCL",
  "Door-to-Door",
  "Project Cargo",
];
