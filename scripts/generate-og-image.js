/**
 * Generate the social-share (Open Graph) image at /public/og-image.png
 *
 * Output: 1200×630, brand gradient background, logo on left, wordmark on right.
 * Run with:  node scripts/generate-og-image.js
 *
 * Why a script (vs. a designed PNG)? We can re-run this whenever the tagline,
 * colours or logo change, and we never have to hand-touch a 1200×630 file in
 * an external tool to keep it on-brand.
 */
const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage, registerFont } = require("canvas");

const W = 1200;
const H = 630;
const OUT = path.join(__dirname, "..", "public", "og-image.png");
const LOGO = path.join(__dirname, "..", "public", "logo_digitech.png");

async function main() {
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");

  // Brand diagonal gradient (matches tailwind .brand-gradient)
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0,    "#06184a"); // brand-950
  grad.addColorStop(0.55, "#1442c4"); // brand-700
  grad.addColorStop(1,    "#06b6d4"); // cyan-500
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Subtle dotted pattern (low-alpha)
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  for (let y = 0; y < H; y += 28) {
    for (let x = 0; x < W; x += 28) {
      ctx.beginPath();
      ctx.arc(x, y, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Cyan accent bar on the left edge
  ctx.fillStyle = "#22d3ee";
  ctx.fillRect(0, 0, 14, H);

  // Logo (left side, vertically centered)
  const logo = await loadImage(LOGO);
  const LOGO_SIZE = 300;
  const logoX = 80;
  const logoY = (H - LOGO_SIZE) / 2;
  ctx.drawImage(logo, logoX, logoY, LOGO_SIZE, LOGO_SIZE);

  // Text block — right of logo
  const textX = logoX + LOGO_SIZE + 60;

  // Wordmark
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 78px Arial, Helvetica, sans-serif";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Infra DigiTech", textX, 240);

  // Private Limited eyebrow
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "600 22px Arial, sans-serif";
  ctx.fillText("PRIVATE LIMITED", textX, 280);

  // Tagline divider
  ctx.fillStyle = "#22d3ee";
  ctx.fillRect(textX, 320, 70, 4);

  // Tagline
  ctx.fillStyle = "#ffffff";
  ctx.font = "italic 36px Georgia, 'Times New Roman', serif";
  ctx.fillText("Your Vision, Digitally Engineered", textX, 380);

  // Sub-tagline / what we do
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "500 24px Arial, sans-serif";
  ctx.fillText("Digital Displays · IoT · Embedded · Healthcare Comms", textX, 440);

  // Bottom bar with credentials
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, H - 70, W, 70);
  ctx.fillStyle = "#ffffff";
  ctx.font = "600 20px Arial, sans-serif";
  ctx.fillText(
    "ISO 9001:2015  ·  CE Certified  ·  GeM Registered  ·  Made in India  ·  Bengaluru",
    80,
    H - 26
  );

  // Save
  fs.writeFileSync(OUT, canvas.toBuffer("image/png"));
  console.log(`Wrote ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
