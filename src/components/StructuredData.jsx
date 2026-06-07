import { siteConfig } from "@/config/site";

/**
 * Re-usable JSON-LD blocks for SEO + AIEO (AI Engine Optimization).
 */
export default function StructuredData({ type, data }) {
  const json =
    type === "Organization"   ? buildOrg() :
    type === "Product"        ? buildProduct(data) :
    type === "BreadcrumbList" ? buildBreadcrumb(data) :
    type === "WebSite"        ? buildWebsite() :
    type === "FAQPage"        ? buildFAQ(data) :
    type === "HowTo"          ? buildHowTo(data) :
    type === "Service"        ? buildService(data) :
    type === "Speakable"      ? buildSpeakable(data) :
    type === "LocalBusiness"  ? buildLocalBusiness() :
    type === "ItemList"       ? buildItemList(data) :
    null;
  if (!json) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function buildOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    slogan: "Your Vision, Digitally Engineered",
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    founder: { "@type": "Person", name: "A.N. Venkatesh" },
    taxID: siteConfig.legal.gstin,
    // Government-issued identifiers — each becomes a verifiable fact for
    // Google Knowledge Graph, AI engines (ChatGPT / Perplexity / Gemini)
    // and procurement teams running vendor due-diligence checks.
    // PAN and TAN are deliberately omitted — they are confidential and
    // not publicly disclosed.
    identifier: [
      { "@type": "PropertyValue", propertyID: "GSTIN",          value: siteConfig.legal.gstin },
      { "@type": "PropertyValue", propertyID: "CIN",            value: siteConfig.legal.cin },
      { "@type": "PropertyValue", propertyID: "Udyam",          value: siteConfig.legal.udyam },
      { "@type": "PropertyValue", propertyID: "IEC",            value: siteConfig.legal.iec },
      { "@type": "PropertyValue", propertyID: "GeM Seller ID",  value: siteConfig.legal.gemSellerId },
      { "@type": "PropertyValue", propertyID: "Trade Mark No.", value: siteConfig.legal.trademark.number },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressRegion:   siteConfig.contact.address.state,
      addressCountry:  siteConfig.contact.address.country,
      postalCode:      siteConfig.contact.address.postalCode,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      ...(siteConfig.channelPartnerCities || []).map((c) => ({
        "@type": "City",
        name: c.name,
        containedInPlace: { "@type": "AdministrativeArea", name: c.state },
      })),
      { "@type": "Place", name: "GCC" },
      { "@type": "Place", name: "Southeast Asia" },
      { "@type": "Place", name: "Africa" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.salesMobile,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "kn"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.serviceMobile,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "kn"],
      },
    ],
    sameAs: [...Object.values(siteConfig.social), ...Object.values(siteConfig.directories || {})].filter(Boolean),
    knowsAbout: [
      "digital display systems", "LED display boards",
      "nurse calling systems", "queue management systems",
      "token display systems", "forex display boards",
      "bank interest rate displays", "gold and silver rate displays",
      "GPS synchronised digital clocks", "international world clocks",
      "operation theatre timers", "project countdown timers",
      "electronic scoreboards", "panic alarm systems",
      "food counter displays", "pricing display boards",
      "weather and temperature displays", "church prayer displays",
      "industrial Andon production displays", "IoT devices",
      "embedded firmware development", "PCB design",
      "industrial automation", "enterprise software",
      "web and ecommerce platforms",
    ],
    hasCredential: siteConfig.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: c.label,
    })),
  };
}

function buildWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/products?q={query}`,
      "query-input": "required name=query",
    },
  };
}

function buildProduct(p) {
  if (!p) return null;
  /**
   * Pricing — Infra DigiTech products are configured per project (display
   * size, port count, mounting, integrations). We deliberately do NOT emit
   * a fake `price: "0"` (Google flags it as invalid) or a placeholder min
   * (misleading to AI engines that quote a number we can't honour). The
   * `Offer` block signals availability + currency + quote-based business
   * function via GoodRelations, which Google and AI engines both
   * understand correctly without inventing a number.
   */
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.short || (p.description ? p.description.slice(0, 200) : ""),
    brand: { "@type": "Brand", name: siteConfig.shortName },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    image: (p.images || [])
      .filter(Boolean)
      .map((src) => (src.startsWith("http") ? src : `${siteConfig.url}${src}`)),
    category: p.category,
    url: p.slug ? `${siteConfig.url}/${p.slug}` : undefined,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      businessFunction:
        "https://purl.org/goodrelations/v1#ConstructionInstallation",
      seller: { "@id": `${siteConfig.url}/#organization` },
      url: p.slug ? `${siteConfig.url}/${p.slug}` : siteConfig.url,
      description:
        "Project-specific pricing — request a quote for your configuration.",
    },
  };
}

function buildBreadcrumb(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url ? `${siteConfig.url}${it.url}` : undefined,
    })),
  };
}

function buildFAQ(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  // Google's FAQ rich-result guidance: answer text must be plain prose, no
  // HTML, no markdown, single-line. We strip stray markup defensively in case
  // the source string ever picks up backticks, asterisks, or template tags.
  const sanitize = (raw = "") =>
    String(raw)
      .replace(/<[^>]*>/g, "")           // strip any inline HTML
      .replace(/[`*_]/g, "")              // strip markdown emphasis chars
      .replace(/\s+/g, " ")               // collapse whitespace / newlines
      .trim();

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/faq#faqpage`,
    url: `${siteConfig.url}/faq`,
    name: `Frequently Asked Questions | ${siteConfig.shortName}`,
    description:
      "Curated Q&A about products, software, certifications, integrations, quotes, government procurement and service for Infra DigiTech.",
    inLanguage: "en-IN",
    isPartOf:  { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about:     { "@id": `${siteConfig.url}/#organization` },
    mainEntity: items
      .filter((it) => (it.q || it.question) && (it.a || it.answer))
      .map((it) => ({
        "@type": "Question",
        name: sanitize(it.q || it.question),
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitize(it.a || it.answer),
          inLanguage: "en-IN",
          author: { "@id": `${siteConfig.url}/#organization` },
        },
      })),
  };
}

function buildHowTo({ name, description, totalTime, steps = [] } = {}) {
  if (!name || steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text || s.description,
      url: s.url ? (s.url.startsWith("http") ? s.url : `${siteConfig.url}${s.url}`) : undefined,
    })),
  };
}

function buildService(s) {
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.serviceType || s.name,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: s.areaServed || [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "GCC" },
      { "@type": "Place", name: "Southeast Asia" },
      { "@type": "Place", name: "Africa" },
    ],
    url: s.url ? (s.url.startsWith("http") ? s.url : `${siteConfig.url}${s.url}`) : undefined,
    hasOfferCatalog: s.offers
      ? {
          "@type": "OfferCatalog",
          name: `${s.name} offerings`,
          itemListElement: s.offers.map((o) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: o },
          })),
        }
      : undefined,
  };
}

function buildSpeakable({ cssSelectors = ["h1", "h2", ".lead", ".speakable"] } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

function buildLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#local`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.logo}`,
    url: siteConfig.url,
    telephone: siteConfig.contact.salesMobile,
    email: siteConfig.contact.email,
    priceRange: "INR",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressRegion:   siteConfig.contact.address.state,
      addressCountry:  siteConfig.contact.address.country,
      postalCode:      siteConfig.contact.address.postalCode,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    // Coordinates for #971 Venkatesh Murthy Road, 1st Phase Girinagar,
    // Banashankari, Bengaluru 560085 (the actual head-office address —
    // not the generic central-Bengaluru placeholder we had before).
    geo: { "@type": "GeoCoordinates", latitude: 12.9417, longitude: 77.5481 },
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
  };
}

function buildItemList(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url ? (it.url.startsWith("http") ? it.url : `${siteConfig.url}${it.url}`) : undefined,
    })),
  };
}
