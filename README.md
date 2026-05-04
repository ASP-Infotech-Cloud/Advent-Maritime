# Advent Maritime — Website

Marketing website for **Advent Maritime (I) Pvt. Ltd.** — an NVOCC and freight forwarding company headquartered in Kolkata.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom navy + teal brand tokens
- **GSAP + ScrollTrigger** for scroll-triggered animations & text reveals
- **Framer Motion** for micro-interactions, page transitions, in-view reveals
- **react-three-fiber + drei** for the 3D dotted globe in the hero
- **Lenis** for smooth momentum scrolling
- **Web3Forms** for the contact-form backend (no server required)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, marquee, about, services, stats, network map, why-us, industries, CTA |
| `/about` | Company story, vision, mission, values, leadership |
| `/services` | All three service pillars + value-added services grid |
| `/services/[slug]` | NVOCC / Freight Forwarding / Value-Added detail pages |
| `/network` | Office network with interactive world map + India + International lists |
| `/industries` | Six industries served |
| `/contact` | Contact form (Web3Forms) + Google Maps embed |

## Getting started

```bash
# Install dependencies
npm install

# Configure Web3Forms (https://web3forms.com)
# Create .env.local and add your access key:
#   NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here

# Start dev server
npm run dev
# → http://localhost:3000
```

## Project structure

```
src/
├── app/                  # Next.js App Router
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── industries/page.tsx
│   ├── network/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── globals.css
│   ├── icon.tsx          # Generated favicon
│   ├── layout.tsx        # Root shell + fonts + smooth scroll
│   ├── not-found.tsx
│   ├── page.tsx          # Home
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── animations/       # SmoothScroll (Lenis), PageTransition
│   ├── contact/          # ContactForm (Web3Forms)
│   ├── home/             # Home page sections
│   ├── layout/           # Header, Footer
│   ├── three/            # HeroScene (3D globe)
│   └── ui/               # Logo, Marquee, PageHero
└── lib/
    └── data.ts           # Single source of truth for all content
```

## Web3Forms setup

1. Sign up free at [web3forms.com](https://web3forms.com)
2. Create an access key (it'll be sent to your email)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
   ```
4. Enquiries will arrive at the email registered with your access key.

## Brand tokens

Defined in `tailwind.config.ts` and `src/app/globals.css`:

- **Primary navy**: `#1E3A5F` (from logo wordmark)
- **Brand teal**: `#1FB6B6` (from logo mark)
- **Accent cyan**: `#22D3EE`
- **Display font**: Bricolage Grotesque (Google)
- **Body font**: Inter (Google)

## Content

All site copy lives in [src/lib/data.ts](src/lib/data.ts) — services, industries, offices, stats, marquee, navigation. Edit there to change content site-wide.

## Build & deploy

```bash
npm run build
npm run start
```

Recommended host: **Vercel** (zero-config). Add `NEXT_PUBLIC_WEB3FORMS_KEY` as an environment variable.

## Visual verification

A Playwright screenshot script is included for QA:

```bash
node scripts/screenshot.mjs   # captures hero + full page for every route → ./screenshots
```
