const shots = [
  ['/garments', 320, 'g320'], ['/garments', 375, 'g375'], ['/garments', 480, 'g480'],
  ['/fabrics', 375, 'f375'], ['/garment-accessories', 375, 'a375'],
  ['/about', 375, 'ab375'], ['/', 320, 'h320'], ['/', 1440, 'h1440'],
];
export default async function run(page) {
  for (const [p, w, name] of shots) {
    await page.setViewportSize({ width: w, height: 850 });
    await page.goto(`http://localhost:3000${p}`, { waitUntil: 'load' });
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `qa-shots/${name}.png` });
  }
  return 'done';
}
