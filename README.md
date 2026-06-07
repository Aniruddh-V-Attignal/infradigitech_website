# Infra DigiTech Pvt Ltd — Corporate Website

A modern, responsive, SEO-friendly Next.js website for Infra DigiTech Pvt Ltd — manufacturer of digital display systems, IoT and electronics products.

> **Tech stack:** Next.js 14 (App Router) · React 18 · Tailwind CSS · Framer Motion · Lucide icons

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy and edit env vars (optional but recommended)
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Production build
npm run build
npm run start
```

---

## What's inside

```
.
├── public/
│   ├── logo.svg                ← full logo
│   ├── logo-mark.svg           ← square mark
│   ├── favicon.svg
│   ├── images/
│   │   ├── products/<slug>/    ← product images
│   │   └── team/               ← board portraits
│   ├── brochures/              ← product PDFs
│   ├── certificates/           ← ISO/CE/GeM PDFs
│   └── clients/                ← client logos
├── src/
│   ├── app/
│   │   ├── layout.js           ← root layout (Navbar, Footer, Chatbot, WhatsApp, Analytics)
│   │   ├── page.js             ← home
│   │   ├── about/              ← /about
│   │   ├── products/           ← /products + /products/[slug]
│   │   ├── industries/         ← /industries
│   │   ├── downloads/          ← /downloads
│   │   ├── clients/            ← /clients
│   │   ├── certifications/     ← /certifications
│   │   ├── service-request/    ← /service-request
│   │   ├── contact/            ← /contact
│   │   ├── privacy-policy/     ← /privacy-policy
│   │   ├── terms/              ← /terms
│   │   ├── forex-display-board/, /nurse-calling-system/, …  ← SEO product routes
│   │   ├── sitemap.js
│   │   ├── robots.js
│   │   └── manifest.js
│   ├── components/             ← reusable UI
│   ├── config/site.js          ← contact, forms, analytics IDs, sectors
│   └── data/
│       ├── products.js         ← master product list
│       ├── clients.js          ← client logos for carousel
│       ├── team.js             ← board of directors
│       ├── timeline.js         ← about-page timeline
│       └── faq.js              ← chatbot FAQ
├── docs/                        ← deployment, content, SEO, analytics, forms guides
└── tailwind.config.js
```

---

## Pages

| Path                                | Purpose                                           |
| ----------------------------------- | ------------------------------------------------- |
| `/`                                 | Home with hero, categories, industries, clients   |
| `/about`                            | Company story, timeline, mission, board, certs    |
| `/products`                         | Product explorer with category & sector filters   |
| `/products/[slug]`                  | Generic product detail page (every product)       |
| `/industries`                       | Sector-wise navigation                            |
| `/downloads`                        | Brochures & PDF catalogue                         |
| `/clients`                          | Client logos by sector                            |
| `/certifications`                   | ISO · CE · GeM · MSME details                     |
| `/contact`                          | Phone, WhatsApp, email, address, map              |
| `/service-request`                  | Service ticket flow                               |
| `/<seo-slug>` (e.g. `/forex-display-board`) | Standalone SEO landing page for top products |

---

## Customising the site

The website is data-driven — most updates happen in three places:

1. **`src/config/site.js`** — contact numbers, WhatsApp, form URLs, analytics IDs, sectors.
2. **`src/data/products.js`** — every product (title, specs, images, brochure, YouTube ID, SEO).
3. **`src/data/clients.js`**, **`team.js`**, **`timeline.js`**, **`faq.js`** — supporting content.

See **[`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md)** for step-by-step recipes:
- How to add a new product
- How to add product images
- How to add a brochure PDF
- How to embed a YouTube demo
- How to add a client logo
- How to update the board of directors

---

## CTAs and external integrations

The website has **no built-in form submission**. All quote and service requests open Microsoft Forms in a new tab — making the site fully static, easy to host, and giving your team a familiar inbox in Microsoft 365.

- `Request a Quote` → `siteConfig.forms.enquiry` (Microsoft Forms)
- `Speak with an Agent` / `Service Request` → `siteConfig.forms.serviceRequest`
- WhatsApp buttons → `wa.me/<NUMBER>?text=…` deep link
- Phone CTAs → `tel:<NUMBER>`

See **[`docs/FORMS_GUIDE.md`](docs/FORMS_GUIDE.md)** to wire up Microsoft Forms.

---

## SEO

- Per-page metadata via Next.js `metadata` API
- Auto-generated `sitemap.xml` and `robots.txt`
- JSON-LD structured data (Organization, WebSite, Product, BreadcrumbList)
- Clean URLs for top products (`/forex-display-board`, `/nurse-calling-system`, …)
- Fully responsive, fast and accessible

See **[`docs/SEO_GUIDE.md`](docs/SEO_GUIDE.md)**.

---

## Analytics

Analytics scripts (GA4, GTM, Meta Pixel, LinkedIn Insight) are gated by env vars and only render when configured.

See **[`docs/ANALYTICS_GUIDE.md`](docs/ANALYTICS_GUIDE.md)**.

---

## Deployment

Vercel is the recommended host. Static export and any Node host also work.

See **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)**.

---

## Chatbot

A lightweight, keyword-scored chatbot (`src/components/Chatbot.jsx`) using FAQ from `src/data/faq.js`. No paid API needed — works fully offline.

To upgrade later to OpenAI / Azure AI, replace the `match()` function inside `Chatbot.jsx` with a real API call.

---

## License

© Infra DigiTech Pvt Ltd. All rights reserved.
