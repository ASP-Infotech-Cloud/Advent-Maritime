import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
const page = await ctx.newPage();

await page.goto("http://localhost:3000/network", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);

// Find the dark map container and screenshot just it
const map = await page.locator(".bg-navy-900.rounded-3xl").first();
await map.scrollIntoViewIfNeeded();
await page.waitForTimeout(2500);
await map.screenshot({ path: "./screenshots/network-detail.png" });

// Also a hero shot
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(3500);
await page.screenshot({ path: "./screenshots/home-hero-detail.png", clip: { x: 0, y: 0, width: 1600, height: 1000 } });

// Slide 2
await page.waitForTimeout(5500);
await page.screenshot({ path: "./screenshots/home-hero-slide2.png", clip: { x: 0, y: 0, width: 1600, height: 1000 } });

await browser.close();
console.log("Done.");
