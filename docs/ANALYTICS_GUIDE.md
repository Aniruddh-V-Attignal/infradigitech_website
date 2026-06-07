# Analytics & Search Console Setup

The site supports four trackers out of the box. Each one only renders when its env var is set — leaving them empty disables the tag entirely.

| Tracker                   | Env var                          | Where to get the ID                                                          |
| ------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| Google Analytics 4        | `NEXT_PUBLIC_GA_ID`              | <https://analytics.google.com> → Admin → Property → Data Streams             |
| Google Tag Manager        | `NEXT_PUBLIC_GTM_ID`             | <https://tagmanager.google.com>                                              |
| Meta (Facebook) Pixel     | `NEXT_PUBLIC_META_PIXEL_ID`      | <https://business.facebook.com> → Events Manager                             |
| LinkedIn Insight Tag      | `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`| <https://www.linkedin.com/campaignmanager> → Account assets → Insight Tag    |

Set them in `.env.local` for dev and in your host's environment variables for production.

---

## 1 · Google Analytics 4 (GA4)

1. Create a GA4 property at <https://analytics.google.com>.
2. Create a **Web data stream** for `https://www.infradigitech.in`.
3. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`).
4. Set it in your environment:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

5. Redeploy.
6. Verify in GA4 → **Realtime** by visiting your live site.

---

## 2 · Google Search Console

1. Go to <https://search.google.com/search-console>.
2. Add a property → enter `https://www.infradigitech.in`.
3. Choose **Domain** verification (preferred) or **HTML tag**.
4. **Domain verification** — add the TXT record at your DNS provider.
5. Once verified → **Sitemaps** → submit `https://www.infradigitech.in/sitemap.xml`.

---

## 3 · Google Tag Manager (alternative)

If you'd rather centralise tags:

1. Create a container at <https://tagmanager.google.com>.
2. Copy the container ID (`GTM-XXXXXXX`).
3. Set `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`.
4. Add tags (GA4, Meta Pixel, etc.) inside GTM rather than via env vars.

---

## 4 · Meta (Facebook) Pixel

1. Go to <https://business.facebook.com> → **Events Manager**.
2. Create a Web Pixel → copy the Pixel ID.
3. Set `NEXT_PUBLIC_META_PIXEL_ID=<id>`.
4. Verify with Meta's **Pixel Helper** Chrome extension.

---

## 5 · LinkedIn Insight Tag

1. Go to <https://www.linkedin.com/campaignmanager>.
2. Create an account if needed → **Account assets → Insight Tag**.
3. Copy the **partner ID** (a number).
4. Set `NEXT_PUBLIC_LINKEDIN_PARTNER_ID=<partner_id>`.

---

## Verifying everything

After deploying with env vars set:

```bash
# View the live page source
curl https://www.infradigitech.in | grep -E "gtag|fbq|lintrk"
```

You should see the trackers' code embedded.

In each platform's dashboard:

- **GA4** → Realtime tab → see your visit
- **Search Console** → URL Inspection → live test
- **Meta** → Test Events → fire a PageView
- **LinkedIn** → Insight Tag domains → status: Active

---

## Cookie consent (optional)

If you need GDPR/EU consent before firing trackers, add a CMP like CookieYes, Cookiebot or Klaro and gate the rendering of `<Analytics />` on user consent.
