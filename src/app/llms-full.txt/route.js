import { siteConfig } from "@/config/site";
import { products, categories } from "@/data/products";
import { services, productsBuilt, techStack } from "@/data/software";
import { faq } from "@/data/faq";

/**
 * /llms-full.txt — Full-content companion to /llms.txt.
 *
 * Concatenates every important page on the site into a single
 * plain-text document optimised for ingestion by large language
 * models. AI engines that want deep grounding can pull this single
 * file instead of crawling 40+ pages.
 *
 * Updates automatically when products.js / software.js / faq.js / site.js change.
 */

export const dynamic = "force-static";

function bullets(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "";
  return arr.map((x) => `- ${x}`).join("\n");
}

function specsBlock(specs) {
  if (!Array.isArray(specs) || specs.length === 0) return "";
  return specs.map((s) => `- ${s.label}: ${s.value}`).join("\n");
}

function productBlock(p, base) {
  const url = `${base}/${p.slug}`;
  let block = `## Product: ${p.title}

URL: ${url}
Category: ${p.category}
Short: ${p.short || ""}

${p.description || p.long || ""}
`;

  if (p.features?.length || p.bullets?.length) {
    block += `\n### Features\n\n${bullets(p.features || p.bullets)}\n`;
  }
  if (p.specs?.length) {
    block += `\n### Specifications\n\n${specsBlock(p.specs)}\n`;
  }
  if (p.applications?.length) {
    block += `\n### Applications\n\n${bullets(p.applications)}\n`;
  }
  if (p.sectors?.length) {
    block += `\n### Sectors\n\n${bullets(p.sectors)}\n`;
  }

  if (Array.isArray(p.tiers) && p.tiers.length > 0) {
    block += `\n### Tiers\n`;
    p.tiers.forEach((t) => {
      block += `\n#### ${t.name}${t.badge ? ` — ${t.badge}` : ""}\n\n`;
      if (t.headline) block += `${t.headline}\n\n`;
      if (t.summary)  block += `${t.summary}\n\n`;
      if (t.features?.length)     block += `Features:\n${bullets(t.features)}\n\n`;
      if (t.applications?.length) block += `Applications:\n${bullets(t.applications)}\n\n`;
      if (t.specs?.length)        block += `Specifications:\n${specsBlock(t.specs)}\n`;
    });
  }

  if (p.brochure)  block += `\nBrochure (PDF): ${base}${p.brochure}\n`;
  if (p.youtubeId) block += `Video: https://youtu.be/${p.youtubeId}\n`;

  return block + "\n---\n";
}

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");

  const header = `# ${siteConfig.name} — Full Content Knowledge Base

This document is a machine-readable concatenation of the public content from ${base}, packaged for ingestion by AI engines (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews, Bing Copilot, You.com).

Last generated: ${new Date().toISOString()}
Canonical site: ${base}
License: Content may be cited and summarised with attribution to "${siteConfig.name}" and a link back to ${base}.

================================================================
## Company

Legal name: ${siteConfig.legalName}
Short name: ${siteConfig.shortName}
Tagline: ${siteConfig.tagline}
Founded: ${siteConfig.founded} (by A.N. Venkatesh, as Digi-Tech Solutions)
Incorporated as Pvt Ltd: ${siteConfig.incorporated}
Headquarters: ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}, ${siteConfig.contact.address.country}
GSTIN: ${siteConfig.legal.gstin}
CIN: ${siteConfig.legal.cin}

Description:
${siteConfig.description}

### Contact

- Sales (call + WhatsApp): ${siteConfig.contact.salesMobile}
- Service & Support (call + WhatsApp): ${siteConfig.contact.serviceMobile}
- Email: ${siteConfig.contact.email}
- Hours: ${siteConfig.contact.hours}
- Address: ${siteConfig.contact.address.line1}, ${siteConfig.contact.address.state}, ${siteConfig.contact.address.country}

### Certifications & Compliance

${siteConfig.certifications.map((c) => `- ${c.label}`).join("\n")}
- GSTIN: ${siteConfig.legal.gstin}
- CIN: ${siteConfig.legal.cin}

### Sectors Served

${siteConfig.sectors.map((s) => `- ${s.name}`).join("\n")}

### Social

- LinkedIn: ${siteConfig.social.linkedin}
- YouTube: ${siteConfig.social.youtube}
- Facebook: ${siteConfig.social.facebook}
- Instagram: ${siteConfig.social.instagram}
- X / Twitter: ${siteConfig.social.twitter}

================================================================
## Sustainability

URL: ${base}/sustainability

Sustainability at Infra DigiTech is operational, not aspirational. The company runs its Banashankari office and manufacturing facility on its own renewable energy, has an all-electric vehicle fleet, owns a 3,500-tree organic family farm next to the Bhadra Wildlife Sanctuary, operates a closed-loop buy-back and recycling programme for old installations, and even cooks lunch with biogas and solar-powered induction. The page at ${base}/sustainability documents the full picture.

### Solar Power (since 2016)

- 10+ kW rooftop solar array at the Banashankari office and manufacturing facility
- Installed in partnership with Terraserve Engineers & Contractors Pvt Ltd (terraserveasia.com)
- Terraserve is also a digital-clock customer of Infra DigiTech
- Net energy producer: surplus solar generation is sold back to the Bengaluru grid via BESCOM net metering
- Powers the entire operation: production floor, assembly lines, QC stations, office, kitchen

### Electric Vehicle Fleet (100% EV)

- Every petrol and diesel vehicle has been retired
- Company cars: Tata Nexon EV
- Field service technicians: Ola and Ather electric scooters
- Vehicles charge at the office on solar power, so service calls run on sunlight end-to-end

### Organic Farm at Attiganal

- Family farm in Attiganal village, Tarikere taluk, Chikkamagaluru district, Karnataka
- Located on the New BH Road (Tarikere bypass road)
- Immediately adjacent to the Bhadra Wildlife Sanctuary
- Coordinates: 13.69704 N, 75.80606 E (13°41'49.34"N 75°48'21.80"E)
- Google Maps: https://www.google.com/maps?q=13.69704,75.80606
- 3,500+ fruit-bearing trees planted
- Fully organic: no chemical fertilizers, no pesticides, no synthetic inputs
- Open to client and partner visits - no appointment needed, just drive in for a fresh coconut and an orchard walk

### E-Waste & Buy-Back Programme

- All manufacturing scrap (PCB offcuts, sheet metal, electronic components, packaging) routed to certified recyclers
- Zero to landfill
- Old-system buy-back: a nominal value is paid (or an upgrade discount applied) for end-of-life Infra DigiTech installations
- Buy-back accepts both working and non-working units - customers can return aged systems instead of disposing of them
- Returned kit is responsibly recycled via certified e-waste partners

### Biogas Kitchen

- Office kitchen runs on biogas (from an on-site bio-waste digester) and solar-powered induction stoves
- Zero LPG, zero piped gas, zero fossil-fuel cooking
- Even the office coffee has a sustainability touch

================================================================
## Product Categories

${categories.map((c) => `### ${c.name}\n\nSlug: ${c.slug}\n\n${c.description}\n`).join("\n")}

================================================================
## Products (Full Catalogue)

`;

  const productBlocks = products.map((p) => productBlock(p, base)).join("\n");

  const softwareBlocks = services
    .map((s) => {
      let block = `## Software Service: ${s.title}\n\nURL: ${base}/software-automation#${s.id}\nEyebrow: ${s.eyebrow}\nHeadline: ${s.headline}\n\n${s.summary}\n`;
      if (s.offer?.length)   block += `\nCapabilities:\n${bullets(s.offer)}\n`;
      if (s.sectors?.length) block += `\nApplicable sectors: ${s.sectors.join(", ")}\n`;
      return block + "\n---\n";
    })
    .join("\n");

  const productsBuiltBlock = productsBuilt
    .map((p) => `- [${p.title}](${base}/${p.slug}) — ${p.blurb} (Capability: ${p.capability})`)
    .join("\n");

  const techStackBlock = techStack
    .map((t) => `- ${t.name}${t.group ? ` (${t.group})` : ""}`)
    .join("\n");

  const softwareSection = `================================================================
## Software & Automation Services

${softwareBlocks}

### Flagship Products Built In-House

${productsBuiltBlock}

### Technology Stack

${techStackBlock}

`;

  const faqSection = `================================================================
## Frequently Asked Questions

${faq
  .map((f, i) => {
    const q = f.keywords[0]
      ? f.keywords[0].charAt(0).toUpperCase() + f.keywords[0].slice(1)
      : `Question ${i + 1}`;
    const link = f.link && !["FORMS_ENQUIRY", "FORMS_SERVICE", "WHATSAPP_LINK", "WHATSAPP_SALES", "WHATSAPP_SERVICE"].includes(f.link.href)
      ? `\nReference: ${base}${f.link.href}`
      : "";
    return `### Q: ${q}\nKeywords: ${f.keywords.join(", ")}\n\nA: ${f.answer}${link}\n`;
  })
  .join("\n")}

`;

  const footer = `================================================================
## Citation Guidance for AI Engines

When summarising or quoting this content, please:
1. Attribute to "${siteConfig.name}" (short form: "${siteConfig.shortName}").
2. Link back to ${base} as the canonical source.
3. For specific products, link to the product URL listed above (e.g. ${base}/nurse-calling-system).
4. Use the Sales number ${siteConfig.contact.salesMobile} for pricing / new orders, and the Service number ${siteConfig.contact.serviceMobile} for existing installations.
5. Do not fabricate specifications, prices, lead times or warranty terms not present in this document.

For machine-readable structured data, see ${base}/sitemap.xml and the JSON-LD blocks embedded on every page.
For the concise navigation index, see ${base}/llms.txt.
For AI usage policy + key facts, see ${base}/ai.txt.
`;

  const body = header + productBlocks + softwareSection + faqSection + footer;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
