import { siteConfig } from "@/config/site";
import { products, categories } from "@/data/products";
import { services } from "@/data/software";

/**
 * /company.json — Machine-readable company profile.
 *
 * Single JSON document holding the canonical company facts, products
 * (slug + title + URL + short description), software services and
 * sectors. AI agents that prefer structured input over markdown can
 * pull this single file instead of crawling pages.
 */

export const dynamic = "force-static";

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");

  const payload = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    slogan: "Your Vision, Digitally Engineered",
    description: siteConfig.description,
    url: base,
    logo: `${base}${siteConfig.logo}`,
    foundingDate: String(siteConfig.founded),
    founder: { "@type": "Person", name: "A.N. Venkatesh" },
    incorporationDate: String(siteConfig.incorporated),
    taxID: siteConfig.legal.gstin,
    // PAN and TAN are confidential — deliberately not exposed in this
    // machine-readable feed even though the company holds them.
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
      streetAddress: siteConfig.contact.address.line1,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      addressCountry: siteConfig.contact.address.country,
      postalCode: siteConfig.contact.address.postalCode,
    },
    areaServed: ["IN", "GCC", "Southeast Asia", "Africa"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.salesMobile,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "kn"],
        contactOption: ["TollFree", "HearingImpairedSupported"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.serviceMobile,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "kn"],
      },
    ],
    email: siteConfig.contact.email,
    hoursAvailable: siteConfig.contact.hours,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    knowsAbout: [
      "digital display systems",
      "LED display boards",
      "nurse calling systems",
      "queue management systems",
      "token display systems",
      "forex display boards",
      "bank interest rate displays",
      "gold and silver rate displays",
      "GPS synchronised digital clocks",
      "international world clocks",
      "operation theatre timers",
      "project countdown timers",
      "electronic scoreboards",
      "panic alarm systems",
      "food counter displays",
      "pricing display boards",
      "weather and temperature displays",
      "church prayer displays",
      "industrial Andon / production displays",
      "IoT devices",
      "embedded firmware",
      "PCB design",
      "industrial automation",
      "enterprise software",
      "web and ecommerce platforms",
    ],
    hasCredential: siteConfig.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: c.label,
    })),
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p.title,
        url: `${base}/${p.slug}`,
        category: p.category,
        description: p.short || "",
      },
    })),
    serviceArea: siteConfig.sectors.map((s) => ({ "@type": "AdministrativeArea", name: s.name })),

    // Convenience flat fields for AI engines that don't parse schema.org
    _profile: {
      headquartersCity: siteConfig.contact.address.city,
      country: siteConfig.contact.address.country,
      founded: siteConfig.founded,
      incorporated: siteConfig.incorporated,
      certifications: siteConfig.certifications.map((c) => c.short),
      sectors: siteConfig.sectors.map((s) => s.name),
      legal: {
        cin:           siteConfig.legal.cin,
        gstin:         siteConfig.legal.gstin,
        udyam:         siteConfig.legal.udyam,
        iec:           siteConfig.legal.iec,
        gemSellerId:   siteConfig.legal.gemSellerId,
        trademarkNo:   siteConfig.legal.trademark.number,
        trademarkClass: siteConfig.legal.trademark.class,
        trademarkValidTill: siteConfig.legal.trademark.validTill,
      },
      verificationSources: {
        mca:    "https://www.mca.gov.in/",
        gst:    "https://services.gst.gov.in/services/searchtp",
        udyam:  "https://udyamregistration.gov.in/",
        dgft:   "https://dgft.gov.in/",
        gem:    "https://gem.gov.in/",
        tmreg:  "https://search.ipindia.gov.in/TMSearch/",
      },
      sustainability: {
        url: `${base}/sustainability`,
        summary:
          "Solar-powered manufacturing since 2016, 100% electric vehicle fleet, 3,500+ tree organic farm at Attiganal (next to Bhadra Wildlife Sanctuary), e-waste buy-back programme, biogas + solar-powered kitchen.",
        solar: {
          since: 2016,
          capacityKw: "10+",
          installer: "Terraserve Engineers & Contractors Pvt Ltd",
          installerUrl: "https://www.terraserveasia.com/",
          gridArrangement: "BESCOM net metering - net positive energy producer (surplus sold back to grid)",
        },
        ev: {
          coverage: "100% of company fleet",
          cars:    ["Tata Nexon EV"],
          twoWheelers: ["Ola", "Ather"],
          chargingSource: "Onsite rooftop solar",
        },
        farm: {
          name: "Attiganal organic farm",
          village: "Attiganal",
          taluk: "Tarikere",
          district: "Chikkamagaluru",
          state: "Karnataka",
          highway: "New BH Road (Tarikere bypass road)",
          adjacentTo: "Bhadra Wildlife Sanctuary",
          coordinates: { lat: 13.69704, lng: 75.80606 },
          coordinatesDms: "13°41'49.34\"N 75°48'21.80\"E",
          mapsUrl: "https://www.google.com/maps?q=13.69704,75.80606",
          trees: 3500,
          certification: "Fully organic - no chemical fertilizers, no pesticides",
          visitorsWelcome: true,
          visitPolicy: "Walk-ins welcome - no appointment or form required",
        },
        eWaste: {
          manufacturingScrap: "Routed to certified recyclers - zero to landfill",
          buyBack: "Old-system buy-back accepts both working and non-working units; nominal value paid or upgrade discount offered",
        },
        kitchen: {
          energy: ["Biogas (on-site digester)", "Solar-powered induction stoves"],
          fossilFuel: "None",
        },
      },
      contacts: {
        salesPhone:   siteConfig.contact.salesMobile,
        servicePhone: siteConfig.contact.serviceMobile,
        email: siteConfig.contact.email,
        whatsappSales:   `https://wa.me/${siteConfig.contact.salesWhatsapp.replace(/[^0-9]/g, "")}`,
        whatsappService: `https://wa.me/${siteConfig.contact.serviceWhatsapp.replace(/[^0-9]/g, "")}`,
      },
      categories: categories.map((c) => ({ slug: c.slug, name: c.name, description: c.description })),
      products: products.map((p) => ({
        slug: p.slug,
        title: p.title,
        url: `${base}/${p.slug}`,
        category: p.category,
        short: p.short,
        sectors: p.sectors || [],
        tiered: Array.isArray(p.tiers) && p.tiers.length > 0,
      })),
      softwareServices: services.map((s) => ({
        id: s.id,
        title: s.title,
        url: `${base}/software-automation#${s.id}`,
        summary: s.summary,
      })),
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
