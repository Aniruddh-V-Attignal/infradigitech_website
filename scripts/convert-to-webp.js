/**
 * Convert every PNG / JPG / JPEG under /public to a sibling .webp.
 *
 * Originals are NOT deleted — Next.js's <Image> uses the public file as
 * source and serves AVIF / WebP on the fly. This script is for the cases
 * where we serve images directly (raw <img>, og-image fallbacks, MS Forms
 * embeds) and want a hand-shipped .webp alongside.
 *
 * Run with:  node scripts/convert-to-webp.js
 * Requires:  npm i -D sharp
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "public");
const EXT  = new Set([".jpg", ".jpeg", ".png"]);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });

async function convert(file) {
  const ext = path.extname(file).toLowerCase();
  if (!EXT.has(ext)) return null;
  const out = file.slice(0, -ext.length) + ".webp";
  if (fs.existsSync(out)) {
    const src = fs.statSync(file).mtimeMs;
    const dst = fs.statSync(out).mtimeMs;
    if (dst >= src) return { file, skipped: true };
  }
  const input = sharp(file);
  // Quality 82 hits the sweet spot — visually identical to JPG 90 but ~30-40% smaller.
  await input.webp({ quality: 82, effort: 5 }).toFile(out);
  const before = fs.statSync(file).size;
  const after  = fs.statSync(out).size;
  return { file, before, after };
}

(async () => {
  const files = walk(ROOT).filter((f) => EXT.has(path.extname(f).toLowerCase()));
  console.log(`Found ${files.length} images. Converting…`);
  let totalBefore = 0, totalAfter = 0, converted = 0, skipped = 0;
  for (const f of files) {
    try {
      const r = await convert(f);
      if (!r) continue;
      if (r.skipped) { skipped++; continue; }
      totalBefore += r.before;
      totalAfter  += r.after;
      converted++;
      const pct = ((1 - r.after / r.before) * 100).toFixed(0);
      console.log(`  ${path.relative(ROOT, r.file)} → .webp  (-${pct}%)`);
    } catch (e) {
      console.error(`  Failed: ${f}`, e.message);
    }
  }
  const mb = (n) => (n / (1024 * 1024)).toFixed(2);
  console.log(`\nConverted ${converted}, skipped ${skipped}.`);
  if (converted) {
    console.log(`Before: ${mb(totalBefore)} MB  →  After: ${mb(totalAfter)} MB`);
    console.log(`Total saved: ${mb(totalBefore - totalAfter)} MB`);
  }
})();
