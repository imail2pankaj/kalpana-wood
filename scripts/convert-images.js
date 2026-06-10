const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(process.cwd(), 'public');
const pngs = fs.readdirSync(publicDir).filter((f) => f.endsWith('.png'));

Promise.all(
  pngs.map(async (png) => {
    const input = path.join(publicDir, png);
    const base = path.basename(png, '.png');

    // WebP
    const webpOut = path.join(publicDir, `${base}.webp`);
    await sharp(input).webp({ quality: 85, effort: 4 }).toFile(webpOut);

    // AVIF
    const avifOut = path.join(publicDir, `${base}.avif`);
    await sharp(input).avif({ quality: 60, effort: 4 }).toFile(avifOut);

    console.log(`✓ ${png} → ${base}.webp + ${base}.avif`);
  })
)
  .then(() => console.log('\nAll images converted!'))
  .catch(console.error);
