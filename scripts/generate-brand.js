/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brandDir = path.join(__dirname, '../public/assets/brand');
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// 1. Standalone Geometric Emblem SVG (Clean, mathematical, scalable from 16px to 2000px)
// Distinctive T-Monolith identity inspired by architectural geometry & deep-purple/blue neon accents
const symbolSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="t-neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4878E8" />
      <stop offset="50%" stop-color="#7864C9" />
      <stop offset="100%" stop-color="#D64B89" />
    </linearGradient>
    <linearGradient id="t-accent" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7864C9" />
      <stop offset="100%" stop-color="#4878E8" />
    </linearGradient>
    <linearGradient id="t-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4878E8" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#D64B89" stop-opacity="0.1" />
    </linearGradient>
  </defs>

  <!-- Ambient Backing Glow Ring -->
  <rect x="6" y="6" width="88" height="88" rx="20" fill="url(#t-glow)" />
  <rect x="6" y="6" width="88" height="88" rx="20" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" />

  <!-- Distinctive Geometric Monolith "T" -->
  <!-- Top Horizontal Bar with Chamfered Tech Finishes -->
  <polygon points="20,24 80,24 74,38 26,38" fill="url(#t-neon)" />

  <!-- Central Vertical Shaft Stem with Faceted Angled Base -->
  <polygon points="43,36 57,36 57,74 50,81 43,74" fill="url(#t-neon)" />

  <!-- Structural Tech Accents - Left & Right Floating Prism Nodes -->
  <polygon points="22,44 32,44 27,52 17,52" fill="#4878E8" fill-opacity="0.85" />
  <polygon points="68,44 78,44 83,52 73,52" fill="#D64B89" fill-opacity="0.85" />

  <!-- Center Pivot Core Core Light -->
  <circle cx="50" cy="37" r="2.5" fill="#FFFFFF" />
</svg>`;

// Dark background version of symbol (with dark-neutral styling for light/white backgrounds)
const symbolDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="t-dark-neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2A4A" />
      <stop offset="50%" stop-color="#3D2975" />
      <stop offset="100%" stop-color="#5B1640" />
    </linearGradient>
  </defs>
  <!-- Frame -->
  <rect x="6" y="6" width="88" height="88" rx="20" fill="#F4F4F6" stroke="rgba(0,0,0,0.12)" stroke-width="1.5" />

  <!-- Monolith T in dark ink -->
  <polygon points="20,24 80,24 74,38 26,38" fill="url(#t-dark-neon)" />
  <polygon points="43,36 57,36 57,74 50,81 43,74" fill="url(#t-dark-neon)" />
  <polygon points="22,44 32,44 27,52 17,52" fill="#1E2A4A" />
  <polygon points="68,44 78,44 83,52 73,52" fill="#5B1640" />
  <circle cx="50" cy="37" r="2.5" fill="#FFFFFF" />
</svg>`;

// Standalone 512x512 High-Res SVG for Organization / Google Brand Schema
const symbol512Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E0D14" />
      <stop offset="100%" stop-color="#060608" />
    </linearGradient>
    <linearGradient id="t-512-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4878E8" />
      <stop offset="50%" stop-color="#7864C9" />
      <stop offset="100%" stop-color="#D64B89" />
    </linearGradient>
    <radialGradient id="t-512-glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#7864C9" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="512" height="512" rx="112" fill="url(#bg)" />
  <circle cx="256" cy="240" r="180" fill="url(#t-512-glow)" />
  <rect x="24" y="24" width="464" height="464" rx="96" stroke="rgba(255, 255, 255, 0.08)" stroke-width="3" />

  <!-- Scaled Monolith T (factor 4.2, offset to center) -->
  <g transform="translate(46, 46)">
    <!-- Top Horizontal Bar -->
    <polygon points="84,100 336,100 310,160 110,160" fill="url(#t-512-grad)" />

    <!-- Central Vertical Stem -->
    <polygon points="180,150 240,150 240,310 210,342 180,310" fill="url(#t-512-grad)" />

    <!-- Left & Right Floating Geometric Nodes -->
    <polygon points="92,185 134,185 113,220 71,220" fill="#4878E8" fill-opacity="0.9" />
    <polygon points="286,185 328,185 349,220 307,220" fill="#D64B89" fill-opacity="0.9" />

    <!-- Core Center Prism -->
    <circle cx="210" cy="155" r="10" fill="#FFFFFF" />
  </g>
</svg>`;

// Primary Horizontal Logo (Symbol + TEKMAAN Typography)
const logoLightHorizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 72" fill="none">
  <defs>
    <linearGradient id="t-horiz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4878E8" />
      <stop offset="50%" stop-color="#7864C9" />
      <stop offset="100%" stop-color="#D64B89" />
    </linearGradient>
  </defs>

  <!-- Left Symbol (Scaled 60x60 in 0..72) -->
  <g transform="translate(6, 6) scale(0.6)">
    <rect x="6" y="6" width="88" height="88" rx="20" fill="#141419" stroke="rgba(255, 255, 255, 0.15)" stroke-width="2" />
    <polygon points="20,24 80,24 74,38 26,38" fill="url(#t-horiz-grad)" />
    <polygon points="43,36 57,36 57,74 50,81 43,74" fill="url(#t-horiz-grad)" />
    <polygon points="22,44 32,44 27,52 17,52" fill="#4878E8" />
    <polygon points="68,44 78,44 83,52 73,52" fill="#D64B89" />
    <circle cx="50" cy="37" r="2.5" fill="#FFFFFF" />
  </g>

  <!-- Wordmark TEKMAAN in crisp geometric editorial styling -->
  <text x="76" y="47" font-family="'DotGothic16', 'Inter', -apple-system, sans-serif" font-size="34" font-weight="900" letter-spacing="3" fill="#FFFFFF">TEKMAAN</text>
  
  <!-- Dot Accent -->
  <circle cx="258" cy="42" r="3.5" fill="#7864C9" />

  <!-- Studio Subtext -->
  <text x="272" y="45" font-family="'Alata', 'Inter', -apple-system, sans-serif" font-size="9" font-weight="400" letter-spacing="3" fill="#858585">STUDIO</text>
</svg>`;

// Dark version of horizontal logo for light surfaces
const logoDarkHorizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 72" fill="none">
  <defs>
    <linearGradient id="t-horiz-dark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2A4A" />
      <stop offset="50%" stop-color="#3D2975" />
      <stop offset="100%" stop-color="#5B1640" />
    </linearGradient>
  </defs>

  <!-- Left Symbol -->
  <g transform="translate(6, 6) scale(0.6)">
    <rect x="6" y="6" width="88" height="88" rx="20" fill="#EAEAEA" stroke="rgba(0, 0, 0, 0.15)" stroke-width="2" />
    <polygon points="20,24 80,24 74,38 26,38" fill="url(#t-horiz-dark-grad)" />
    <polygon points="43,36 57,36 57,74 50,81 43,74" fill="url(#t-horiz-dark-grad)" />
    <polygon points="22,44 32,44 27,52 17,52" fill="#1E2A4A" />
    <polygon points="68,44 78,44 83,52 73,52" fill="#5B1640" />
    <circle cx="50" cy="37" r="2.5" fill="#FFFFFF" />
  </g>

  <!-- Wordmark TEKMAAN in dark typography -->
  <text x="76" y="47" font-family="'DotGothic16', 'Inter', -apple-system, sans-serif" font-size="34" font-weight="900" letter-spacing="3" fill="#0A0A0C">TEKMAAN</text>
  <circle cx="258" cy="42" r="3.5" fill="#7864C9" />
  <text x="272" y="45" font-family="'Alata', 'Inter', -apple-system, sans-serif" font-size="9" font-weight="500" letter-spacing="3" fill="#555555">STUDIO</text>
</svg>`;

async function run() {
  console.log('Writing brand vector files...');
  fs.writeFileSync(path.join(brandDir, 'tekmaan-symbol.svg'), symbolSvg);
  fs.writeFileSync(path.join(brandDir, 'tekmaan-symbol-dark.svg'), symbolDarkSvg);
  fs.writeFileSync(path.join(brandDir, 'tekmaan-symbol-512.svg'), symbol512Svg);
  fs.writeFileSync(path.join(brandDir, 'tekmaan-logo-light.svg'), logoLightHorizontalSvg);
  fs.writeFileSync(path.join(brandDir, 'tekmaan-logo-dark.svg'), logoDarkHorizontalSvg);

  console.log('Generating PNG and raster assets with sharp...');
  // 512x512 Master Brand Icon
  await sharp(Buffer.from(symbol512Svg))
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(brandDir, 'tekmaan-symbol-512.png'));
  fs.copyFileSync(path.join(brandDir, 'tekmaan-symbol-512.png'), path.join(__dirname, '../public/tekmaan-symbol-512.png'));

  // 512x512 Transparent Brand Icon
  await sharp(Buffer.from(symbolSvg))
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(brandDir, 'tekmaan-symbol-512-transparent.png'));

  // Apple Touch Icon 180x180
  await sharp(Buffer.from(symbol512Svg))
    .resize(180, 180)
    .png()
    .toFile(path.join(brandDir, 'apple-touch-icon.png'));
  fs.copyFileSync(path.join(brandDir, 'apple-touch-icon.png'), path.join(__dirname, '../public/apple-touch-icon.png'));

  // PWA / Android 192x192
  await sharp(Buffer.from(symbol512Svg))
    .resize(192, 192)
    .png()
    .toFile(path.join(brandDir, 'icon-192x192.png'));

  // Favicons: 48x48, 32x32, 16x16
  await sharp(Buffer.from(symbolSvg))
    .resize(48, 48)
    .png()
    .toFile(path.join(brandDir, 'favicon-48x48.png'));
  fs.copyFileSync(path.join(brandDir, 'favicon-48x48.png'), path.join(__dirname, '../public/favicon-48x48.png'));

  await sharp(Buffer.from(symbolSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(brandDir, 'favicon-32x32.png'));
  fs.copyFileSync(path.join(brandDir, 'favicon-32x32.png'), path.join(__dirname, '../public/favicon-32x32.png'));

  await sharp(Buffer.from(symbolSvg))
    .resize(16, 16)
    .png()
    .toFile(path.join(brandDir, 'favicon-16x16.png'));
  fs.copyFileSync(path.join(brandDir, 'favicon-16x16.png'), path.join(__dirname, '../public/favicon-16x16.png'));

  // Generate multi-resolution ICO file using sharp
  const b16 = await sharp(Buffer.from(symbolSvg)).resize(16, 16).png().toBuffer();
  const b32 = await sharp(Buffer.from(symbolSvg)).resize(32, 32).png().toBuffer();
  const b48 = await sharp(Buffer.from(symbolSvg)).resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { size: 16, png: b16 },
    { size: 32, png: b32 },
    { size: 48, png: b48 }
  ]);

  fs.writeFileSync(path.join(brandDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icoBuffer);

  console.log('Brand generation complete.');
}

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const offsetStart = headerSize + (count * dirEntrySize);

  let currentOffset = offsetStart;
  const entries = [];
  for (const img of images) {
    entries.push({
      width: img.size >= 256 ? 0 : img.size,
      height: img.size >= 256 ? 0 : img.size,
      colors: 0,
      reserved: 0,
      planes: 1,
      bpp: 32,
      size: img.png.length,
      offset: currentOffset
    });
    currentOffset += img.png.length;
  }

  const out = Buffer.alloc(currentOffset);
  out.writeUInt16LE(0, 0); // reserved
  out.writeUInt16LE(1, 2); // type 1 = ICO
  out.writeUInt16LE(count, 4); // count

  let entryPos = 6;
  for (const e of entries) {
    out.writeUInt8(e.width, entryPos + 0);
    out.writeUInt8(e.height, entryPos + 1);
    out.writeUInt8(e.colors, entryPos + 2);
    out.writeUInt8(e.reserved, entryPos + 3);
    out.writeUInt16LE(e.planes, entryPos + 4);
    out.writeUInt16LE(e.bpp, entryPos + 6);
    out.writeUInt32LE(e.size, entryPos + 8);
    out.writeUInt32LE(e.offset, entryPos + 12);
    entryPos += 16;
  }

  for (let i = 0; i < count; i++) {
    images[i].png.copy(out, entries[i].offset);
  }

  return out;
}

run().catch(console.error);
