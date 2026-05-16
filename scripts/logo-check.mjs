import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("./screenshots", { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

// Dark hero header (inverse logo, white)
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({
  path: "./screenshots/logo-header-dark.png",
  clip: { x: 60, y: 18, width: 360, height: 70 },
});

// Scrolled header (light bg, navy logo)
await page.evaluate(() => window.scrollTo({ top: 600, behavior: "instant" }));
await page.waitForTimeout(1500);
await page.screenshot({
  path: "./screenshots/logo-header-light.png",
  clip: { x: 60, y: 18, width: 360, height: 70 },
});

// Footer (white inverse logo)
await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
await page.waitForTimeout(2000);
await page.screenshot({
  path: "./screenshots/logo-footer.png",
  clip: { x: 60, y: 720, width: 400, height: 130 },
});

// Mark-only render - check on the 404 page if it uses it, otherwise just look at favicon
const iconRes = await page.goto("http://localhost:3000/icon", { waitUntil: "networkidle" });
if (iconRes && iconRes.ok()) {
  const buf = await iconRes.body();
  const fs = await import("fs/promises");
  await fs.writeFile("./screenshots/favicon.png", buf);
}

await browser.close();
console.log("Done.");
