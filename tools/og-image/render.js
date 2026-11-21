// og:image（SNS で共有したときに出る画像、1200×630）を Playwright で撮って書き出す
// 使い方: node tools/og-image/render.js         → 下の JOBS を全部作る
//         node tools/og-image/render.js top     → name が top のものだけ作る（いくつでも並べられる）
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..", "..");
// name: 名前、page: このフォルダの中の HTML（? のあとはそのページに渡す値）、out: 書き出す場所（リポジトリの一番上から）
const JOBS = [
  { name: "top", page: "og.html", out: "assets/og.jpg" },
  { name: "irodori-notes-privacy", page: "policy.html?app=irodori-notes", out: "assets/og/irodori-notes-privacy.jpg" },
  { name: "kataomoi-bluesky-privacy", page: "policy.html?app=kataomoi-bluesky", out: "assets/og/kataomoi-bluesky-privacy.jpg" },
];

(async () => {
  const only = process.argv.slice(2);
  const jobs = only.length ? JOBS.filter((j) => only.includes(j.name)) : JOBS;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const job of jobs) {
    await page.goto("file://" + path.join(__dirname, job.page), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    if (job.page.startsWith("policy.html")) await page.waitForSelector("body[data-ready]");
    const out = path.join(ROOT, job.out);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await page.screenshot({ path: out, type: "jpeg", quality: 90 });
    console.log("wrote " + job.out);
  }
  await browser.close();
})();
