// og.html を 1200×630 の画像にして ../../assets/og.jpg に書き出す（Playwright を使う）
// 使い方: このフォルダで node render.js
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto("file://" + path.join(__dirname, "og.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(__dirname, "..", "..", "assets", "og.jpg");
  await page.screenshot({ path: out, type: "jpeg", quality: 90 });
  await browser.close();
  console.log("wrote " + out);
})();
