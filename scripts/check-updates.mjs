import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

// Gallery
await page.goto("http://localhost:3000/gallery", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(3500);
await page.screenshot({ path: "./screenshots/gallery-hero.png", fullPage: false });
await page.screenshot({ path: "./screenshots/gallery-full.png", fullPage: true });

// Filter test - click Vessels filter chip (first match, the tab)
await page.getByRole("button", { name: "Vessels", exact: true }).click();
await page.waitForTimeout(1500);
await page.screenshot({ path: "./screenshots/gallery-filtered.png", fullPage: false });

// Home with WhatsApp button visible — scroll a bit so button appears past delay
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(3000);
await page.evaluate(() => window.scrollTo({ top: 800, behavior: "instant" }));
await page.waitForTimeout(2000);
await page.screenshot({ path: "./screenshots/home-with-whatsapp.png", fullPage: false });

// Click WhatsApp button to open
await page.locator("button[aria-label='Chat on WhatsApp']").click();
await page.waitForTimeout(1000);
await page.screenshot({ path: "./screenshots/whatsapp-open.png", fullPage: false });

// Header check on dark hero (top of home)
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(800);
await page.screenshot({ path: "./screenshots/home-header.png", clip: { x: 0, y: 0, width: 1440, height: 120 } });

// Contact page to verify new phone
await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: "./screenshots/contact-updated.png", fullPage: false });

await browser.close();
console.log("Done.");
