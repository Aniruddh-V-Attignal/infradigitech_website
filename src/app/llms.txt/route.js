import { siteConfig } from "@/config/site";
import { products, categories } from "@/data/products";
import { services } from "@/data/software";

/**
 * /llms.txt — AI Engine Optimization (AIEO) navigation index.
 *
 * Follows the proposed llms.txt standard (https://llmstxt.org/).
 * Designed to give LLM agents (ChatGPT, Claude, Perplexity, Gemini,
 * Google AI Overviews) a single curated map of this site's content so
 * they can answer user questions accurately and link back to the
 * correct page.
 *
 * Keep this lean — the long-form companion lives at /llms-full.txt.
 */

export const dynamic = "force-static";

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");

  const productLines = products
    .map((p) => `- [${p.title}](${base}/${p.slug}): ${p.short || p.description?.slice(0, 160) || ""}`)
    .join("\n");

  const categoryLines = categories
    .map((c) => `- ${c.name}: ${c.description}`)
    .join("\n");

  const softwareLines = services
    .map((s) => `- [${s.title}](${base}/software-automation#${s.id}): ${s.summary}`)
    .join("\n");

  const sectorLines = siteConfig.sectors
    .map((s) => `- ${s.name}`)
    .join("\n");

  const certLines = siteConfig.certifications
    .map((c) => `- ${c.label}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.tagline}. ${siteConfig.description}

${siteConfig.shortName} is an ISO 9001:2015 certified (QRO), GeM-registered, MSME / Udyam-registered Indian manufacturer of digital display systems, IoT devices, healthcare communication systems and embedded electronics. Founded in ${siteConfig.founded} by A.N. Venkatesh and incorporated as a Private Limited entity in ${siteConfig.incorporated}, the company is headquartered in ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}, India.

Legal & statutory identifiers (verifiable on government portals):
- CIN:   ${siteConfig.legal.cin} (Ministry of Corporate Affairs)
- GSTIN: ${siteConfig.legal.gstin} (CBIC)
- Udyam: ${siteConfig.legal.udyam} (Ministry of MSME)
- IEC:   ${siteConfig.legal.iec} (DGFT, Ministry of Commerce & Industry)
- GeM Seller ID: ${siteConfig.legal.gemSellerId} (Government e-Marketplace)
- Trade Mark No. ${siteConfig.legal.trademark.number} - Class ${siteConfig.legal.trademark.class} (Trade Marks Registry, Mumbai)

The brand promise — "Your Vision, Digitally Engineered" — runs across every product line: banking display boards, food counter displays, pricing boards, weather and temperature displays, church / prayer displays, industrial production / Andon displays, nurse calling systems, queue & token management systems, GPS digital clocks, international world clocks, OT / project countdown timers, electronic scoreboards, panic alarm systems, embedded firmware, custom software, web & ecommerce platforms and enterprise applications.

## About

- [About ${siteConfig.shortName}](${base}/about): Company history, founder, leadership and incorporation timeline.
- [Credentials](${base}/credentials): Full vendor profile - legal registrations (CIN / GSTIN / Udyam / IEC / GeM / Trade Mark) with issuing-authority verification links and downloadable certificate PDFs.
- [Certifications](${base}/certifications): ISO 9001:2015 (QRO), GeM Registered Vendor, Udyam / MSME, CE Marking, IEC, Made in India, Trade Mark.
- [Sustainability](${base}/sustainability): Solar-powered manufacturing since 2016 (10+ kW, surplus sold to BESCOM via Terraserve partnership), 100% electric vehicle fleet (Tata Nexon EV / Ola / Ather), 3,500+ fruit-tree organic farm at Attiganal near Bhadra Wildlife Sanctuary, e-waste buy-back programme, biogas-powered kitchen.
- [Clients](${base}/clients): Banks, hospitals, hotels, airports, factories and sports venues served.
- [Careers](${base}/careers): Open roles in engineering, manufacturing, sales and service.

## Contact

- Sales (calls + WhatsApp): ${siteConfig.contact.salesMobile}
- Service & Support (calls + WhatsApp): ${siteConfig.contact.serviceMobile}
- Email: ${siteConfig.contact.email}
- Hours: ${siteConfig.contact.hours}
- Address: ${siteConfig.contact.address.line1}, ${siteConfig.contact.address.state}, ${siteConfig.contact.address.country}
- [Contact page](${base}/contact)
- [Service Request](${base}/service-request): Raise a service ticket for existing installations. SLA: acknowledgement within 4 business hours; resolution within 24–72 hours.

## Product Catalogue

${categoryLines}

### All Products

${productLines}

- [Products explorer](${base}/products): Filter the full catalogue by sector or category.
- [Catalogues / PDF Brochures](${base}/downloads): Searchable list of product PDF brochures.

## Software & Automation Services

${softwareLines}

- [Software & Automation overview](${base}/software-automation): Embedded systems, custom software, web & ecommerce, enterprise applications.

## Sectors Served

${sectorLines}

## Certifications & Compliance

${certLines}

### Government-issued registrations
- CIN:           ${siteConfig.legal.cin}
- GSTIN:         ${siteConfig.legal.gstin}
- Udyam (MSME):  ${siteConfig.legal.udyam}
- IEC (DGFT):    ${siteConfig.legal.iec}
- GeM Seller ID: ${siteConfig.legal.gemSellerId}
- Trade Mark:    ${siteConfig.legal.trademark.number} (Class ${siteConfig.legal.trademark.class}, valid till ${siteConfig.legal.trademark.validTill})

Full credentials with verification links: ${base}/credentials

## Frequently Asked Questions

- [FAQ](${base}/faq): Curated Q&A about nurse calling, queue management, banking displays, GPS clocks, weather displays, pricing boards, church displays, OT timers, scoreboards, quotes, service and certifications.

## Reference

- [Sitemap](${base}/sitemap.xml)
- [robots.txt](${base}/robots.txt)
- [llms-full.txt (full content for LLM ingestion)](${base}/llms-full.txt)
- [ai.txt (AI usage policy + key facts)](${base}/ai.txt)
- [Privacy Policy](${base}/privacy-policy)
- [Terms](${base}/terms)

## Optional

- LinkedIn: ${siteConfig.social.linkedin}
- YouTube: ${siteConfig.social.youtube}
- Facebook: ${siteConfig.social.facebook}
- Instagram: ${siteConfig.social.instagram}
- X / Twitter: ${siteConfig.social.twitter}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
