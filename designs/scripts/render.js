const puppeteer = require('puppeteer-core');
const path = require('path');

// Renders one of the design HTML files to a full-page JPEG and/or PDF.
// Usage: node render.js <input.html> <output.jpg> [output.pdf]
// Requires a local Chrome/Chromium binary; override the default path via
// the CHROME_PATH environment variable if it's not at the standard location.
async function main() {
  const [,, inputHtml, outJpeg, outPdf] = process.argv;
  if (!inputHtml) {
    console.error('Usage: node render.js <input.html> <output.jpg> [output.pdf]');
    process.exit(1);
  }
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || '/usr/local/bin/google-chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--force-device-scale-factor=2'],
    defaultViewport: { width: 1440, height: 1000, deviceScaleFactor: 2 },
  });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(inputHtml), { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 500));

  const bodyHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewport({ width: 1440, height: bodyHeight, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 300));

  if (outJpeg) {
    await page.screenshot({ path: outJpeg, type: 'jpeg', quality: 92, fullPage: true });
    console.log('JPEG written:', outJpeg, 'height:', bodyHeight);
  }
  if (outPdf) {
    await page.pdf({
      path: outPdf,
      width: '1440px',
      height: (bodyHeight) + 'px',
      printBackground: true,
      pageRanges: '1',
    });
    console.log('PDF written:', outPdf);
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
