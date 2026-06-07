/**
 * Testimonials — single source of truth.
 *
 * Used by:
 *   - /testimonials dedicated page (full grid + sector filter)
 *   - Home page featured-testimonials strip (3 entries flagged `featured: true`)
 *   - Schema.org Review JSON-LD on /testimonials and any future per-product
 *     aggregate-rating displays
 *   - Marketing-tool exports (HubSpot, LinkedIn, email) — every entry is a
 *     flat JSON-friendly object so it can be CSV-exported or piped via API
 *     without transformation
 *
 * To add a real testimonial:
 *   1) Append a new object to TESTIMONIALS below (or replace one of the
 *      placeholder entries marked `placeholder: true`)
 *   2) Set `featured: true` if you want it visible on the home page strip
 *      (the home page shows the first 3 featured entries)
 *   3) Drop an optional author photo at /public/images/testimonials/<slug>.jpg
 *      and set `authorPhoto: "/images/testimonials/<slug>.jpg"`
 *   4) Drop an optional company logo at /public/images/clients/<file>
 *
 * Sector taxonomy (matches blog + bengaluru page categorisation):
 *   healthcare | bfsi | industrial | retail | government | hospitality
 */

export const SECTORS = [
  { id: "healthcare", name: "Healthcare",     description: "Hospitals, diagnostic centres, senior-care" },
  { id: "bfsi",       name: "BFSI / Banking", description: "Public and private banks, money changers" },
  { id: "industrial", name: "Industrial",     description: "Manufacturing, IT campuses, pharma" },
  { id: "retail",     name: "Retail / QSR",   description: "Hypermarkets, food courts, jewellery showrooms" },
  { id: "government", name: "Government",     description: "PSUs, Passport Seva, public counters" },
  { id: "hospitality",name: "Hospitality",    description: "Hotels, hospitality groups" },
];

export const TESTIMONIALS = [
  /* -------------------------------------------------------------------
   * 1. HEALTHCARE — Max Hospital, Shimoga (large Advanced NCS rollout)
   * -----------------------------------------------------------------*/
  {
    id: "max-hospital-shimoga-nurse-call",
    authorName: "Mrs. Ramya",
    authorTitle: "Central Stores In-charge",
    authorPhoto: "",
    company: "Max Hospital",
    companyLogo: "",
    companySector: "healthcare",
    city: "Shimoga",
    quote:
      "We chose Infra DigiTech's Advanced Nurse Calling System for our hospital — 70 calling units across 5 nurse stations. The installation was clean, the staff training was thorough, and the system has been dependable from day one. Response times at the nurse stations have noticeably improved and the support team has been quick whenever we've reached out.",
    rating: 5,
    product: "Advanced Nurse Calling System",
    productSlug: "nurse-calling-system",
    publishedAt: "2026-04-18",
    featured: true,
  },

  /* -------------------------------------------------------------------
   * 2. BFSI — Canara Bank (multi-region interest rate display rollout)
   * -----------------------------------------------------------------*/
  {
    id: "canara-bank-interest-rate-displays",
    authorName: "Mr. Poornanand",
    authorTitle: "Regional Manager",
    authorPhoto: "",
    company: "Canara Bank",
    companyLogo: "",
    companySector: "bfsi",
    city: "Karnataka",
    quote:
      "Infra DigiTech rolled out interest-rate display boards across our branches — 42 in the Karwar region, 53 in Udupi and 63 in Shimoga. Co-ordinating an install at that scale could have been a headache, but their team handled it branch by branch without disrupting our counters. The displays are clear, reliable, and easy for our staff to update.",
    rating: 5,
    product: "Bank Interest Rate Display Board",
    productSlug: "bank-interest-rate-display-board",
    publishedAt: "2026-03-25",
    featured: true,
  },

  /* -------------------------------------------------------------------
   * 3. RETAIL — matrimony service, 20-year customer (corporate gifting)
   * -----------------------------------------------------------------*/
  {
    id: "anuraga-matrimony-digital-clocks",
    authorName: "Ravi",
    authorTitle: "Co-Founder",
    authorPhoto: "",
    company: "Anuraga Matrimony",
    companyUrl: "https://anuragamatrimony.com/",
    companyLogo: "",
    companySector: "retail",
    city: "Bengaluru",
    quote:
      "I have been buying digital clocks from Infra DigiTech for the past 20 years, which I gift to my clients. Their quality is so good that clocks I gave away years ago are still working perfectly today. In two decades I have never had to look for another supplier — the product and the people behind it have always been reliable.",
    rating: 5,
    product: "GPS Digital Clock",
    productSlug: "gps-digital-clock",
    publishedAt: "2026-05-28",
    featured: true,
  },

  /* -------------------------------------------------------------------
   * 4. HEALTHCARE — Janani Hospital, Shimoga (Advanced NCS)
   * -----------------------------------------------------------------*/
  {
    id: "janani-hospital-shimoga-nurse-call",
    authorName: "Dr. Raghavendra Vailaya",
    authorTitle: "Founder & Managing Director",
    authorPhoto: "",
    company: "Janani Hospital",
    companySector: "healthcare",
    city: "Shimoga",
    quote:
      "We installed Infra DigiTech's Advanced Nurse Calling System at Janani Hospital — 11 calling units on a single nurse station. As a clinician I wanted something that simply works at the bedside without my nurses fighting the technology, and that is exactly what we got. Clean interface, prompt alerts, and good after-sales support.",
    rating: 5,
    product: "Advanced Nurse Calling System",
    productSlug: "nurse-calling-system",
    publishedAt: "2026-04-02",
    featured: false,
  },

  /* -------------------------------------------------------------------
   * 5. BFSI — Canara Bank, Davangere region (Queue Management Systems)
   * -----------------------------------------------------------------*/
  {
    id: "canara-bank-davangere-qms",
    authorName: "Mrs. Anita",
    authorTitle: "Divisional Manager (Regional Office)",
    authorPhoto: "",
    company: "Canara Bank",
    companyLogo: "",
    companySector: "bfsi",
    city: "Davangere",
    quote:
      "We ordered 10 Queue Management Systems from Infra DigiTech for branches across our Davangere division. The token flow has brought real order to our customer counters and reduced crowding during peak hours. Delivery and installation were on schedule, and the systems have been running smoothly since.",
    rating: 5,
    product: "Advanced Queue Management System",
    productSlug: "queue-management-system",
    publishedAt: "2026-05-12",
    featured: false,
  },

  /* -------------------------------------------------------------------
   * 6. INDUSTRIAL — pan-India contractor (commercial GPS clock installs)
   * -----------------------------------------------------------------*/
  {
    id: "terraserve-contractors-gps-clocks",
    authorName: "Raghavendra HK",
    authorTitle: "CEO",
    authorPhoto: "",
    company: "Terraserve Contractors Pvt Ltd",
    companyUrl: "https://www.terraserveasia.com/",
    companyLogo: "",
    companySector: "industrial",
    city: "Bengaluru",
    quote:
      "We have collaborated with Infra DigiTech for all our commercial GPS digital clock installations across India. Across every site the clocks have held accurate time and stood up to demanding conditions, and the coordination from their side has made multi-city rollouts straightforward. Definitely recommend their products to others.",
    rating: 5,
    product: "GPS Digital Clock",
    productSlug: "gps-digital-clock",
    publishedAt: "2026-05-28",
    featured: true,
  },
];

/* ----------------------------------------------------------------------
 * Helpers
 * --------------------------------------------------------------------*/
export function getFeaturedTestimonials(limit = 3) {
  return TESTIMONIALS.filter((t) => t.featured).slice(0, limit);
}

export function getTestimonialsBySector(sectorId) {
  return TESTIMONIALS.filter((t) => t.companySector === sectorId);
}

export function getTestimonialsByProduct(productSlug) {
  return TESTIMONIALS.filter((t) => t.productSlug === productSlug);
}

export function getSectorById(id) {
  return SECTORS.find((s) => s.id === id);
}
