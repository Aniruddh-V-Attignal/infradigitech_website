/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for Cloudflare Pages hosting.
  // `next build` emits a fully static site into the `out/` directory.
  // Cloudflare Pages build settings:
  //   Framework preset: Next.js (Static HTML Export)
  //   Build command:    npx next build
  //   Build output dir: out
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    // Cloudflare Pages cannot run Next.js' on-demand image optimizer,
    // so images are served as-is. Required for `output: "export"`.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },

  // NOTE: next.config redirects() are NOT applied in static export.
  // The legacy /products/:slug -> /:slug 301 redirect is handled by
  // Cloudflare Pages via public/_redirects instead.
};

export default nextConfig;
