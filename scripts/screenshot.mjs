import { chromium } from "playwright";
import { mkdirSync } from "fs";

const pages = [
  { path: "/", file: "home" },
  { path: "/about", file: "about" },
  { path: "/services", file: "services" },
  { path: "/services/nvocc-services", file: "service-detail" },
  { path: "/network", file: "network" },
  { path: "/industries", file: "industries" },
  { path: "/contact", file: "contact" },
];

const outDir = "./screenshots";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const p of pages) {
  console.log(`Capturing ${p.path}...`);
  await page.goto(`http://localhost:3000${p.path}`, { waitUntil: "networkidle", timeout: 60000 });
  // Allow animations & 3D to settle
  await page.waitForTimeout(2500);
  // Hero shot
  await page.screenshot({
    path: `${outDir}/${p.file}-hero.png`,
    fullPage: false,
  });
  // Full page (but capped at reasonable height by scroll)
  await page.screenshot({
    path: `${outDir}/${p.file}-full.png`,
    fullPage: true,
  });
}

await browser.close();
console.log("Done.");
