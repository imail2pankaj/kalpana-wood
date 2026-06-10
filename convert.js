const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');

const files = [
  'wood_hero', 'about_workshop', 'product_bedroom',
  'product_dining', 'product_wardrobe', 'product_sofa',
  'product_door', 'furniture_collection'
];

async function convertAll() {
  for (const name of files) {
    const pngPath = path.join(dir, `${name}.png`);
    const webpPath = path.join(dir, `${name}.webp`);
    const avifPath = path.join(dir, `${name}.avif`);
    
    if (fs.existsSync(pngPath)) {
      console.log(`Converting ${name}.png...`);
      await sharp(pngPath).webp({ quality: 80 }).toFile(webpPath);
      await sharp(pngPath).avif({ quality: 80 }).toFile(avifPath);
    }
  }
  console.log("Done.");
}

convertAll();
