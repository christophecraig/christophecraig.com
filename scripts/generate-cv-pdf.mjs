import puppeteer from 'puppeteer';
import { readdir } from 'fs/promises';
import { spawn } from 'child_process';

// Start a preview server
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], {
  stdio: 'pipe',
});

// Wait for server to be ready
await new Promise((resolve) => {
  server.stdout.on('data', (data) => {
    if (data.toString().includes('4321')) resolve();
  });
  setTimeout(resolve, 5000);
});

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox'],
});

for (const lang of ['fr', 'en']) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:4321/${lang}/cv/`, {
    waitUntil: 'networkidle0',
  });
  await page.pdf({
    path: `cv-${lang}.pdf`,
    format: 'A4',
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
    printBackground: true,
  });
  await page.close();
}

await browser.close();
server.kill();
process.exit(0);
