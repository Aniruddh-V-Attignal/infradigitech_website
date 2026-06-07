# Deployment Guide

This site is configured as a **static export** (`output: "export"` in `next.config.mjs`) and deploys to **Cloudflare Pages**. `next build` emits a fully static site into the `out/` directory. It can also be deployed to any static host or a Node.js server.

---

## 1. Cloudflare Pages (production host)

The project is set up for Cloudflare Pages static hosting.

1. Push the project to a GitHub / GitLab repository.
2. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
3. Select the repo → **Begin setup**.
4. Build settings:

   | Setting           | Value                          |
   | ----------------- | ------------------------------ |
   | Framework preset  | Next.js (Static HTML Export)   |
   | Build command     | `npx next build`               |
   | Build output dir  | `out`                          |
   | Production branch | `main`                         |

5. Add environment variables (see the table below) — at minimum `NEXT_PUBLIC_SITE_URL=https://www.infradigitech.in`, plus any analytics IDs.
6. **Save and Deploy.**

Every push to `main` auto-rebuilds and deploys; pull requests get preview URLs.

### Redirects

Legacy `/products/<slug>` URLs 301-redirect to the canonical flat `/<slug>` route via `public/_redirects` (Next.js `redirects()` do not run in static export).

### Custom domain

Cloudflare Pages → your project → **Custom domains** → add `infradigitech.in` and `www.infradigitech.in`. If the domain's DNS is already on Cloudflare, records are created automatically; otherwise point DNS to the Pages project. Set the apex→www (or www→apex) redirect under the domain's bulk redirects / Pages settings as preferred.

### Notes

- Image optimization is disabled (`images.unoptimized: true`) because Cloudflare Pages cannot run Next's on-demand optimizer. Images are served as-is from `public/`.
- `sitemap.xml`, `robots.txt`, `ai.txt`, `llms.txt`, `llms-full.txt` and `company.json` are generated as static files at build time.

---

## 2. Vercel (alternative)

Vercel is the simplest hosting option for Next.js.

1. Push the project to a GitHub / GitLab / Bitbucket repository.
2. Go to <https://vercel.com> → **Add New Project** → import the repo.
3. Vercel detects Next.js automatically — keep the default settings.
4. Add environment variables under **Settings → Environment Variables**. See the table below.
5. Click **Deploy**.

Subsequent pushes to the main branch auto-deploy. Pull requests get preview URLs.

### Custom domain

In Vercel → **Settings → Domains**, add `infradigitech.in` and `www.infradigitech.in`. Update DNS at your registrar to point to Vercel.

---

## 3. Self-hosted Node server (VPS / cloud)

```bash
# On the server (Ubuntu example)
sudo apt update
sudo apt install -y nodejs npm
git clone <your-repo>
cd <repo>
npm install
npm run build

# Run with PM2
sudo npm install -g pm2
pm2 start npm --name "infra-digitech" -- start
pm2 startup
pm2 save
```

Reverse-proxy via Nginx:

```nginx
server {
  listen 80;
  server_name www.infradigitech.in infradigitech.in;
  location / {
    proxy_pass         http://127.0.0.1:3000;
    proxy_set_header   Host $host;
    proxy_set_header   X-Real-IP $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Proto $scheme;
  }
}
```

Add HTTPS with `certbot --nginx`.

---

## 3. Static export (cPanel / shared hosting)

```bash
# next.config.mjs — set output:
# const nextConfig = { output: "export", images: { unoptimized: true } };

npm run build
# → /out folder contains the static site
```

Upload the contents of `out/` to your hosting via FTP / cPanel **File Manager**.

> Note: dynamic features (like the products explorer URL sync) still work since they're client-side. Sitemap and structured data are pre-rendered.

---

## Environment variables

| Variable                                  | Where to set | Notes                                       |
| ----------------------------------------- | ------------ | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                    | Vercel + .env | Your canonical URL — used in sitemap/JSON-LD |
| `NEXT_PUBLIC_GA_ID`                       | Vercel       | Google Analytics 4 measurement ID           |
| `NEXT_PUBLIC_GTM_ID`                      | Vercel       | Google Tag Manager container ID             |
| `NEXT_PUBLIC_META_PIXEL_ID`               | Vercel       | Meta Pixel ID                               |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`         | Vercel       | LinkedIn Insight partner ID                 |
| `NEXT_PUBLIC_ENQUIRY_FORM_URL`            | Vercel       | Microsoft Forms link for enquiries          |
| `NEXT_PUBLIC_SERVICE_REQUEST_FORM_URL`    | Vercel       | Microsoft Forms link for service requests   |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`             | Vercel       | E.g. `+919876543210`                        |
| `NEXT_PUBLIC_MOBILE_NUMBER`               | Vercel       | E.g. `+919876543210`                        |
| `NEXT_PUBLIC_EMAIL`                       | Vercel       | Public contact email                        |

A copy of `.env.local.example` can be `cp`'d to `.env.local` for local dev.

---

## Cache invalidation

After uploading new images / brochures, force re-deploy. On Vercel, click **Redeploy** in the dashboard or push a new commit.

---

## Troubleshooting

- **404 on sitemap** — ensure `src/app/sitemap.js` is committed and deployment finished.
- **Tracking pixels not firing** — verify env vars on the host (not just locally).
- **Image not showing** — check the path in `/public` and that the file actually exists. Filenames are case-sensitive on Linux servers.
