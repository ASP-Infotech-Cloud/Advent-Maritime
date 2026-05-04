import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

// Scroll to the Stats section and wait for counter to animate
await page.evaluate(() => {
  const stats = document.querySelectorAll("section");
  // Stats is a section with bg-navy-900 and divides; scroll roughly 2400px
  window.scrollTo({ top: 2400, behavior: "instant" });
});
await page.waitForTimeout(3500);
await page.screenshot({ path: "./screenshots/scroll-stats.png", fullPage: false });

// Scroll to the Network section
await page.evaluate(() => window.scrollTo({ top: 3300, behavior: "instant" }));
await page.waitForTimeout(2500);
await page.screenshot({ path: "./screenshots/scroll-network.png", fullPage: false });

// Scroll to industries
await page.evaluate(() => window.scrollTo({ top: 5400, behavior: "instant" }));
await page.waitForTimeout(2500);
await page.screenshot({ path: "./screenshots/scroll-industries.png", fullPage: false });

await browser.close();
console.log("Scroll captures done.");
