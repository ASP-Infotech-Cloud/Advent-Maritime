import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

// Load home and wait for the splash to clear
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2200);

// Capture stable home (no loader)
await page.screenshot({ path: "./screenshots/before-nav.png" });

// Click "About" link in nav and immediately capture transition
const clickAndCapture = async (label, file) => {
  const link = await page.getByRole("link", { name: label, exact: true }).first();
  await link.click({ noWaitAfter: true });
  // Small delay to catch loader mid-transition
  await page.waitForTimeout(150);
  await page.screenshot({ path: `./screenshots/${file}-150ms.png` });
  await page.waitForTimeout(450);
  await page.screenshot({ path: `./screenshots/${file}-600ms.png` });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `./screenshots/${file}-after.png` });
};

await clickAndCapture("About", "transition-about");
await clickAndCapture("Services", "transition-services");
await clickAndCapture("Contact", "transition-contact");

await browser.close();
console.log("Done.");
