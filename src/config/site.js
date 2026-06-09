/**
 * Single source of truth for site-wide configuration.
 */

const env = (key, fallback) =>
  (typeof process !== "undefined" && process.env && process.env[key]) || fallback;

export const siteConfig = {
  name: "Infra DigiTech Pvt Ltd",
  shortName: "Infra DigiTech",
  legalName: "Infra DigiTech Pvt Ltd",
  tagline: "Digital Display Systems - IoT - Electronics Manufacturing",
  description:
    "Infra DigiTech Pvt Ltd is an ISO & CE certified, GEM-registered manufacturer of digital display systems, IoT devices, nurse calling systems, queue management systems, banking display boards, GPS clocks, and electronic scoreboards. Serving banks, hospitals, hotels, airports, factories and sports venues across India and worldwide.",
  url: env("NEXT_PUBLIC_SITE_URL", "https://www.infradigitech.in"),
  logo: "/logo_digitech.png",
  logoMark: "/logo_digitech.png",
  ogImage: "/og-image.png",
  founded: 2001,
  incorporated: 2026,

  contact: {
    salesMobile:   env("NEXT_PUBLIC_SALES_MOBILE",   "+91 7975843985"),
    salesWhatsapp: env("NEXT_PUBLIC_SALES_WHATSAPP", "+91 7975843985"),
    serviceMobile:   env("NEXT_PUBLIC_SERVICE_MOBILE",   "+91 9844120216"),
    serviceWhatsapp: env("NEXT_PUBLIC_SERVICE_WHATSAPP", "+91 9844120216"),
    whatsapp: env("NEXT_PUBLIC_WHATSAPP_NUMBER", "+91 7975843985"),
    mobile:   env("NEXT_PUBLIC_MOBILE_NUMBER",   "+91 7975843985"),
    email:    env("NEXT_PUBLIC_EMAIL",           "enquiries@digitech8.com"),
    address: {
      // Address matches MCA / Udyam / IEC government records exactly so that
      // Google Business Profile, IndiaMart, JustDial and tender portals
      // cross-validate cleanly (NAP consistency).
      line1: "#971, Venkatesh Murthy Road",
      line2: "1st Phase, Girinagar",
      line3: "Banashankari",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalCode: "560085",
    },
    hours: "Mon - Sat, 09:30 - 18:30 IST",
    mapsUrl:   env("NEXT_PUBLIC_MAPS_URL",   "https://maps.app.goo.gl/icFqATArr1hv2Hrm7"),
    mapsEmbed: env(
      "NEXT_PUBLIC_MAPS_EMBED",
      "https://www.google.com/maps?q=971+Venkatesh+Murthy+Road+1st+Phase+Girinagar+Banashankari+Bengaluru+560085&output=embed"
    ),
  },

  legal: {
    // Tax & corporate registrations
    // PAN and TAN are deliberately NOT exposed in the public config.
    // They are confidential identifiers used only on tax filings and
    // bank/vendor onboarding forms - never publicly displayed.
    gstin: "29AAICI6485L1ZQ",
    cin:   "U27900KA2026PTC214614",

    // Incorporation details
    incorporationDate: "2026-01-21",       // ISO date - Certificate of Incorporation, MCA
    incorporatedAt:    "Manesar",          // Issuing office - Central Registration Centre, MCA

    // MSME / Udyam
    udyam: "UDYAM-KR-03-0683142",
    udyamClassification: "Micro",          // Per Udyam certificate 2026-27
    udyamRegisteredOn: "2026-04-08",

    // Foreign trade (DGFT)
    iec:              "AAICI6485L",
    iecIssuedOn:      "2026-04-24",
    iecIssuedAt:      "DGFT Bengaluru",

    // GeM (Government e-Marketplace) seller
    gemSellerId: "2CCF190000765571",

    // Trade Mark (currently registered to predecessor partnership firm
    // "M/S DigiTech Solutions" - assignment to Infra DigiTech Pvt Ltd in
    // progress with the Trade Marks Registry, Mumbai).
    trademark: {
      number:        "5297280",
      class:         "9",
      filingDate:    "2022-01-24",
      sealedOn:      "2024-05-05",
      validTill:     "2032-01-23",
      registry:      "Trade Marks Registry, Mumbai",
      mark:          "DIGI-TECH (device / logomark)",
      currentOwner:  "M/S DigiTech Solutions (partnership predecessor)",
      assignmentNote:"Assignment to Infra DigiTech Pvt Ltd in progress",
    },

    // NIC (National Industry Classification) codes per Udyam certificate
    nicCodes: [
      { level: "2-digit", code: "26",    label: "Manufacture of computer, electronic and optical products" },
      { level: "4-digit", code: "2680",  label: "Manufacture of magnetic and optical media" },
      { level: "5-digit", code: "26800", label: "Manufacture of magnetic and optical media" },
    ],
  },

  forms: {
    // Clean URLs - open in a new tab with proper Microsoft Forms chrome.
    // Used by every "Request a Quote / Open form" CTA across the site.
    enquiry:        env("NEXT_PUBLIC_ENQUIRY_FORM_URL",         "https://forms.cloud.microsoft/r/nGniyBLRv1"),
    serviceRequest: env("NEXT_PUBLIC_SERVICE_REQUEST_FORM_URL", "https://forms.cloud.microsoft/r/VhvdmbqxLJ"),

    // Embed-mode URLs - strip the Microsoft Forms chrome for clean iframe display.
    // ONLY used by the <iframe> on Contact and Service Request pages.
    enquiryEmbed:        env("NEXT_PUBLIC_ENQUIRY_FORM_EMBED_URL",         "https://forms.cloud.microsoft/r/nGniyBLRv1"),
    serviceRequestEmbed: env("NEXT_PUBLIC_SERVICE_REQUEST_FORM_EMBED_URL", "https://forms.cloud.microsoft/r/VhvdmbqxLJ"),

    // Channel Partner / Distributor / Dealer evaluation form.
    // Used by the "Become a Channel Partner" CTAs on Contact, Service Request and FAQ pages.
    channelPartner:      env("NEXT_PUBLIC_CHANNEL_PARTNER_FORM_URL",       "https://forms.cloud.microsoft/r/zzQNCr8Lym"),
    channelPartnerEmbed: env("NEXT_PUBLIC_CHANNEL_PARTNER_FORM_EMBED_URL", "https://forms.cloud.microsoft/r/zzQNCr8Lym?embed=true"),
  },

  social: {
    linkedin: "https://www.linkedin.com/company/infra-digitech",
    youtube:  "https://www.youtube.com/@infradigitech",
    facebook: "https://www.facebook.com/infradigitech",
    instagram:"https://www.instagram.com/infradigitech",
    twitter:  "https://x.com/infradigitech",
  },

  // Third-party business directory profiles + legacy domains.
  // These flow into the Organization JSON-LD `sameAs` array so that
  // Google Knowledge Graph and AI engines (ChatGPT, Perplexity, Gemini)
  // can reconcile "Infra DigiTech" across the web as one entity.
  directories: {
    indiamart: "https://www.indiamart.com/infra-digitech/",
    justdial:  "https://www.justdial.com/Bangalore/Infra-DigiTech-PvtLtd-Near-Nandagokula-Kalyana-Mantapa-Girinagar/080P5154577_BZDET",
    // Legacy digi-techdisplay.com is intentionally NOT listed here.
    // The hosting expired (returns 403 Forbidden) so including the URL in
    // the Organization JSON-LD sameAs array would harm SEO. Once the
    // domain is set to 301-redirect to infradigitech.in, re-add it as:
    //   legacy: "https://www.digi-techdisplay.com/",
    // GeM seller profile - public-facing verifiable government listing
    gem:       "https://gem.gov.in/",  // Add direct seller profile URL when available
  },

  certifications: [
    { id: "iso", label: "ISO 9001:2015 Certified", short: "ISO Certified" },
    { id: "ce",  label: "CE Certified",            short: "CE Certified" },
    { id: "gem", label: "GeM Registered Vendor",   short: "GeM Registered" },
    { id: "mii", label: "Made in India",           short: "Made in India" },
    { id: "exp", label: "Export Ready",            short: "Export Ready" },
    { id: "msme",label: "MSME Registered",         short: "MSME" },
  ],

  analytics: {
    ga4:        env("NEXT_PUBLIC_GA_ID",              ""),
    gtm:        env("NEXT_PUBLIC_GTM_ID",             ""),
    metaPixel:  env("NEXT_PUBLIC_META_PIXEL_ID",      ""),
    linkedIn:   env("NEXT_PUBLIC_LINKEDIN_PARTNER_ID",""),
  },

  nav: [
    { label: "Home",                 href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About Company",   href: "/about" },
        { label: "Certifications",  href: "/certifications" },
        // `icon` key lets Navbar render a small leaf glyph next to this item.
        // Looked up via the ICON_MAP inside Navbar.jsx.
        { label: "Sustainability",  href: "/sustainability" },
      ],
    },
    { label: "Products",             href: "/products" },
    { label: "Software",             href: "/software-automation" },
    {
      label: "Resources",
      href: "/blog",
      children: [
        { label: "Blog & Insights", href: "/blog" },
        { label: "Success Stories", href: "/case-studies" },
        { label: "Testimonials",    href: "/testimonials" },
        { label: "Catalogues",      href: "/downloads" },
      ],
    },
    { label: "Careers",              href: "/careers" },
    {
      label: "Support",
      href: "/service-request",
      children: [
        { label: "FAQs",            href: "/faq" },
        { label: "Service Request", href: "/service-request" },
        { label: "Credentials",     href: "/credentials" },
      ],
    },
    { label: "Contact Us",           href: "/contact" },
  ],

  // Cities where Infra DigiTech has direct presence or authorized channel
  // partners. We also cover neighbouring states and tier-2 / tier-3 cities
  // via the same partner network. Used by JSON-LD areaServed, the /bengaluru
  // service-coverage section and the chatbot's geo-presence answer.
  channelPartnerCities: [
    { name: "Bengaluru",      state: "Karnataka",      hq: true,  label: "Bengaluru (HQ)" },
    { name: "Mysore",         state: "Karnataka",      hq: false, label: "Mysore" },
    { name: "Mangalore",      state: "Karnataka",      hq: false, label: "Mangalore" },
    { name: "Hubli-Dharwad",  state: "Karnataka",      hq: false, label: "Hubli-Dharwad" },
    { name: "Mumbai",         state: "Maharashtra",    hq: false, label: "Mumbai" },
    { name: "Chennai",        state: "Tamil Nadu",     hq: false, label: "Chennai" },
    { name: "Coimbatore",     state: "Tamil Nadu",     hq: false, label: "Coimbatore" },
    { name: "Madurai",        state: "Tamil Nadu",     hq: false, label: "Madurai" },
    { name: "Hyderabad",      state: "Telangana",      hq: false, label: "Hyderabad" },
    { name: "Vishakapatnam",  state: "Andhra Pradesh", hq: false, label: "Vishakapatnam" },
    { name: "Kolkata",        state: "West Bengal",    hq: false, label: "Kolkata" },
    { name: "Guwahati",       state: "Assam",          hq: false, label: "Guwahati" },
    { name: "Kochi",          state: "Kerala",         hq: false, label: "Kochi" },
    { name: "Kozhikode",      state: "Kerala",         hq: false, label: "Kozhikode" },
    { name: "Delhi",          state: "Delhi",          hq: false, label: "Delhi" },
  ],

  sectors: [
    { id: "healthcare",  name: "Healthcare",                       slug: "healthcare" },
    { id: "bfsi",        name: "BFSI / Banking & Finance",         slug: "bfsi" },
    { id: "hospitality", name: "Hospitality",                      slug: "hospitality" },
    { id: "airports",    name: "Airports & Transport",             slug: "airports" },
    { id: "corporate",   name: "Corporate & Public Sector",        slug: "corporate" },
    { id: "factories",   name: "Factories & Industrial",           slug: "factories" },
    { id: "sports",      name: "Sports & Entertainment",           slug: "sports" },
    { id: "retail",      name: "Retail / Food Courts",             slug: "retail" }
  ]
};

export function buildWhatsAppLink(message = "", number) {
  const raw = (number || siteConfig.contact.whatsapp || "").replace(/[^0-9]/g, "");
  const text = encodeURIComponent(
    message || `Hello ${siteConfig.shortName}, I would like to know more about your products. Please contact me.`
  );
  return `https://wa.me/${raw}?text=${text}`;
}

export function buildSalesWhatsAppLink(message = "") {
  return buildWhatsAppLink(
    message || `Hello ${siteConfig.shortName} Sales, I would like to enquire about your products or pricing. Please contact me.`,
    siteConfig.contact.salesWhatsapp
  );
}

export function buildServiceWhatsAppLink(message = "") {
  return buildWhatsAppLink(
    message || `Hello ${siteConfig.shortName} Service, I need support on an existing installation. Please contact me.`,
    siteConfig.contact.serviceWhatsapp
  );
}

export function buildTelLink(num) {
  const n = (num || siteConfig.contact.mobile || "").replace(/\s+/g, "");
  return `tel:${n}`;
}

export function buildMailLink(subject = "Enquiry", body = "") {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default siteConfig;

