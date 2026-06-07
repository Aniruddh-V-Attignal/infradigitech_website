# Content Editing Guide

Everything on the site that you'll typically edit lives in two places:

- `src/config/site.js` — global site config (contacts, sectors, certifications, social, analytics).
- `src/data/*.js` — content files (`products.js`, `clients.js`, `team.js`, `timeline.js`, `faq.js`).

You don't need to know React to update content — these are plain JavaScript files with simple objects.

---

## 1 · Update contact details, WhatsApp, mobile, email

Open `src/config/site.js`. Change the values inside `contact`, `forms`, `social`.

```js
contact: {
  whatsapp: "+919812345678",
  mobile:   "+919812345678",
  email:    "enquiries@digitech8.com",
  address: { line1: "…", line2: "…", city: "Bengaluru", … },
}
```

**Or use environment variables** (recommended for production) — set them in `.env.local` or in your host (Vercel etc.):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=+919812345678
NEXT_PUBLIC_MOBILE_NUMBER=+919812345678
NEXT_PUBLIC_EMAIL=enquiries@digitech8.com
```

---

## 2 · Update Microsoft Forms links

Open `src/config/site.js` (or set env vars):

```js
forms: {
  enquiry:        "https://forms.office.com/r/<YOUR_ENQUIRY_ID>",
  serviceRequest: "https://forms.office.com/r/<YOUR_SERVICE_ID>",
}
```

See [`FORMS_GUIDE.md`](FORMS_GUIDE.md) for how to build the forms in Microsoft 365.

---

## 3 · Add a new product

1. Open **`src/data/products.js`**.
2. Append a new object to the `products` array. Required fields:

```js
{
  slug: "smart-token-display",         // URL — appears in /products/smart-token-display
  title: "Smart Token Display",
  category: "queue",                   // must match an id in `categories`
  sectors: ["bfsi", "healthcare"],     // sector ids from /src/config/site.js
  short: "One-line tagline shown on cards",
  description: "Long-form description for the product page.",
  features: ["…", "…"],
  specs: [{ label: "Display", value: "LED 7-segment" }],
  applications: ["Bank counters", "Hospital OPD"],
  images: [
    "/images/products/smart-token-display/1.jpg",
    "/images/products/smart-token-display/2.jpg",
  ],
  brochure:  "/brochures/smart-token-display.pdf",
  youtubeId: "",                       // optional
  seo: {
    title: "Smart Token Display Manufacturer | Infra DigiTech",
    description: "…",
    keywords: ["smart token display", "queue token"],
  },
}
```

3. Save. The product is automatically:
   - listed on `/products` (with category & sector filters),
   - given a page at `/products/smart-token-display`,
   - included in the sitemap,
   - shown in related-products on similar pages.

### Adding a dedicated SEO route

For top products you want as `/<slug>` (not `/products/<slug>`):

1. Create a folder `src/app/<slug>/`.
2. Add `page.js` — copy any of the existing files, e.g. `src/app/forex-display-board/page.js`, change `SLUG` to your slug.
3. Add the slug to the `seoSlugs` array in `src/app/sitemap.js`.

---

## 4 · Add product images

1. Create the folder `public/images/products/<slug>/` (matching the product's `slug`).
2. Drop image files: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` (any names work, just match the paths in `images:`).
3. Recommended size: **1200×900 px** (4:3), under 300 KB. JPEG or PNG.
4. Update the `images` array in `products.js` if you used different filenames.

The gallery automatically falls back to a friendly placeholder for any missing image — so you can deploy first, fill images later.

---

## 5 · Add a brochure PDF

1. Drop the PDF into `public/brochures/`. Recommend filename: `<slug>.pdf` (lowercase, dashes).
2. Set `brochure: "/brochures/<slug>.pdf"` on the product.
3. The brochure appears on:
   - the product page (Download brochure button)
   - `/downloads`

---

## 6 · Add a YouTube demo video

1. On YouTube, get the video's ID — it's the part after `v=` in the URL: `https://www.youtube.com/watch?v=`**`abc123XYZ`**.
2. Set `youtubeId: "abc123XYZ"` on the product.
3. Done — the privacy-enhanced player appears on the product page.

Leave `youtubeId: ""` to show a "video coming soon" placeholder.

---

## 7 · Add a client logo

1. Drop the logo into `public/clients/` (PNG / SVG, transparent background, ~200×80 px).
2. Open `src/data/clients.js` and add an entry:

```js
{ name: "Acme Bank", logo: "/clients/acme-bank.png", url: "https://acmebank.com", sector: "bfsi" }
```

3. Done — the logo appears in the home-page carousel and the clients page.

If a logo file is missing, the carousel falls back to typographic initials. Safe to ship.

---

## 8 · Update the board of directors

1. Drop portrait photos (square, ~600×600) into `public/images/team/`.
2. Open `src/data/team.js` and update the `name`, `title`, `bio`, `photo`, `linkedin` fields.

---

## 9 · Update the company timeline

Open `src/data/timeline.js` — each entry is a year + title + description. Reorder freely.

---

## 10 · Update the chatbot's knowledge

Open `src/data/faq.js`. Each entry has a list of trigger keywords and an answer:

```js
{ keywords: ["service", "amc", "support"], answer: "Open /service-request to raise a ticket…" }
```

The chatbot uses simple keyword scoring (no API key). To upgrade later, replace `match()` inside `src/components/Chatbot.jsx` with an OpenAI/Azure call.

---

## 11 · Update certifications

Open `src/config/site.js` → `certifications` array.

To upload certificate PDFs:
1. Drop into `public/certificates/`.
2. They're already linked from `/certifications` (`iso-9001.pdf`, `ce.pdf`, `gem.pdf`, `msme.pdf`).

---

## 12 · Update navigation menu

Open `src/config/site.js` → `nav` array. Each entry is `{ label, href }`. Order matters.

---

## 13 · Update colours and fonts

- Colours: `tailwind.config.js` → `theme.extend.colors.brand` etc.
- Fonts: `src/app/layout.js` (currently Inter + Plus Jakarta Sans, loaded via `next/font/google`).

---

## 14 · Logo

Replace these files in `/public`:

- `logo.svg` — full logo (used in legacy locations / SEO)
- `logo-mark.svg` — square mark (used in navbar / footer / favicon)
- `favicon.svg` — small icon

Use SVG where possible for crisp rendering on all displays.
