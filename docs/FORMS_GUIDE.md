# Microsoft Forms Integration Guide

The website opens **Microsoft Forms** for both:

- "Request a Quote" / Sales Enquiry
- "Speak with an Agent" / Service Request

This keeps the website static (zero backend) and routes leads straight to your team's Microsoft 365 inbox.

---

## 1 · Build the enquiry form

1. Sign in to <https://forms.office.com> with your Microsoft 365 work account.
2. Click **New Form**.
3. Title: **Sales Enquiry — Infra DigiTech**.
4. Add fields (recommended):
   - Full name (required)
   - Company name (required)
   - Designation
   - Country (drop-down)
   - Industry / sector (drop-down — match the sectors in `siteConfig.sectors`)
   - Mobile / WhatsApp (required)
   - Email (required)
   - Product(s) of interest (drop-down or multi-select)
   - Quantity / scope
   - Notes / specifications (long text)
   - File upload (optional — for floor plans, RFQ docs)
5. Click **Settings** (… top-right) → **Anyone can respond** (so visitors can submit without an MS account).
6. Click **Send** → **Copy link**.
7. Paste the link as `NEXT_PUBLIC_ENQUIRY_FORM_URL` in your env, e.g.:

```
NEXT_PUBLIC_ENQUIRY_FORM_URL=https://forms.office.com/r/abc123XYZ
```

Or set it directly in `src/config/site.js` → `forms.enquiry`.

---

## 2 · Build the service-request form

Same steps as above, but with these fields:

- Customer / Site name
- Site address & PIN
- Contact person + mobile
- Product (drop-down — match the product list)
- Serial number / Installation ID
- Issue description
- Severity (Low / Medium / High / Critical)
- Preferred service window
- Photos (file upload)

Set the link as `NEXT_PUBLIC_SERVICE_REQUEST_FORM_URL`.

---

## 3 · Get notified on every submission

In Microsoft Forms → **…** menu → **Email notification of each response** → toggle **on**.

For Power Automate routing (e.g., create a ticket in Asana / Outlook / Teams):

1. Go to <https://flow.microsoft.com>.
2. **Create → Automated cloud flow → Microsoft Forms**.
3. Trigger: **When a new response is submitted**.
4. Choose your form.
5. Add actions: e.g., **Send an email**, **Post to Teams**, **Create Outlook calendar event**.

---

## 4 · Privacy

- Microsoft Forms responses are stored in your tenant — Anthropic / Vercel / your hosting can never see them.
- Add a privacy notice link inside the form description (link to `/privacy-policy`).

---

## 5 · Alternative form providers

If you'd prefer Google Forms, Typeform, JotForm, etc., simply paste their **shareable link** in place of the Microsoft Forms URL — every "Request a Quote" / "Service Request" button on the site will then open that provider instead.

The site doesn't care which provider is used; it just links out.

---

## 6 · Embedding instead of opening in a new tab

If you prefer in-page embeds, replace the `<a href={...}>` in `src/components/CTAButtons.jsx` with an `<iframe src={...}>` inside a modal. Microsoft Forms supports iframe embedding via **Send → Embed**.
