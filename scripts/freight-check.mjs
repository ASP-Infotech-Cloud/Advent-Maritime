import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("./screenshots", { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

// 1) Home services section
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);
const homeServices = await page.locator("section:has-text('End-to-end logistics')").first();
await homeServices.scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);
await homeServices.screenshot({ path: "./screenshots/freight-home-services.png" });

// 2) /services page – freight forwarding card
await page.goto("http://localhost:3000/services", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);
const card = await page.locator("div:has(> div > h3:text('Freight Forwarding'))").first();
await card.scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);
await page.screenshot({ path: "./screenshots/freight-services-list.png", fullPage: true });

// 3) Detail page hero
await page.goto("http://localhost:3000/services/freight-forwarding", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: "./screenshots/freight-detail.png", fullPage: false });

await browser.close();
console.log("Done.");
