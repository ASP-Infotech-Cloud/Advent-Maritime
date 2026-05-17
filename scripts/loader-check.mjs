import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

// Throttle network so the loader is visible
const client = await ctx.newCDPSession(page);
await client.send("Network.emulateNetworkConditions", {
  offline: false,
  downloadThroughput: (1.5 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
  latency: 40,
});

const nav = page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
// Capture during loading
await page.waitForTimeout(500);
await page.screenshot({ path: "./screenshots/loader-1.png" });
await page.waitForTimeout(600);
await page.screenshot({ path: "./screenshots/loader-2.png" });
await nav;
await page.waitForLoadState("load");
await page.waitForTimeout(1800);
await page.screenshot({ path: "./screenshots/loader-after.png" });

await browser.close();
console.log("Done.");
