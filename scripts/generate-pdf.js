const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

(async () => {
  const [,,name] = process.argv;

  if (!name) {
    console.warn('No name supplied!');
    process.exit(-1);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3005/');
  await page.emulateMediaType('screen');
  const puppeteerPdf = await page.pdf({
    path: './react.pdf', // path (relative to CWD) to save the PDF to.
    printBackground: true,// print background colors
    format: 'a4',
  });
  await browser.close();

  // Give the buffer to pdf-lib
  const pdfDoc = await PDFDocument.load(puppeteerPdf)
  pdfDoc.setTitle(name, { showInWindowTitleBar: true })
  const pdfBytes = await pdfDoc.save()

  // write to disk
  await fs.writeFileSync(`${name}.pdf`, pdfBytes)
})();
