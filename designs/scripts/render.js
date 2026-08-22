const puppeteer = require('puppeteer-core');
const path = require('path');

// Renders one of the design HTML files to a full-page JPEG and/or PDF.
// Usage: node render.js <input.html> <output.jpg> [output.pdf] [width]
// Requires a local Chrome/Chromium binary; override the default path via
// the CHROME_PATH environment variable if it's not at the standard location.
// Viewport width defaults to 1440 (desktop). Override it either via the
// optional 4th CLI argument (e.g. `node render.js in.html out.jpg out.pdf 390`)
// or the RENDER_WIDTH environment variable (CLI arg takes precedence).
// Useful widths: 1440 = desktop, 834 = tablet (iPad portrait), 390 = mobile.
// Device scale factor stays fixed at 2 for crisp, high-resolution output.
async function main() {
  const [,, inputHtml, outJpeg, outPdf, widthArg] = process.argv;
  if (!inputHtml) {
    console.error('Usage: node render.js <input.html> <output.jpg> [output.pdf] [width]');
    process.exit(1);
  }
  const width = parseInt(widthArg || process.env.RENDER_WIDTH || '1440', 10);
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || '/usr/local/bin/google-chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--force-device-scale-factor=2'],
    defaultViewport: { width, height: 1000, deviceScaleFactor: 2 },
  });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(inputHtml), { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 500));

  const bodyHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewport({ width, height: bodyHeight, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 300));

  if (outJpeg) {
    await page.screenshot({ path: outJpeg, type: 'jpeg', quality: 92, fullPage: true });
    console.log('JPEG written:', outJpeg, 'width:', width, 'height:', bodyHeight);
  }
  if (outPdf) {
    await page.pdf({
      path: outPdf,
      width: width + 'px',
      height: (bodyHeight) + 'px',
      printBackground: true,
      pageRanges: '1',
    });
    console.log('PDF written:', outPdf);
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
