/**
 * Product model numbers — single source of truth.
 *
 * Maps each product slug (matching src/data/products.js) to an array of
 * model objects { number, description, tier? }. Tier is optional and
 * only used for tiered products (nurse-calling, queue-management,
 * food-counter) to indicate which tier each model belongs to.
 *
 * Used by:
 *   - ProductDetail.jsx — renders the "Available Models" table on each
 *     product detail page
 *   - Future quote / AMC / parts-catalogue lookups
 *
 * To update model numbers, edit this file. Each entry is keyed by the
 * product slug, so the change automatically reflects on the matching
 * /<slug> page.
 */

export const PRODUCT_MODELS = {
  /* -----------------------------------------------------------------
   * Healthcare communication
   * --------------------------------------------------------------- */
  "nurse-calling-system": [
    { number: "DT/NCS-01LED",   description: "Basic LED Nurse Call System (Wired)",            tier: "basic" },
    { number: "DT/WNCS-02RF",   description: "Basic RF Nurse Call System (Wireless)",          tier: "basic" },
    { number: "DT/NCS-03 STD",  description: "Standard Nurse Call System (Wired)",             tier: "standard" },
    { number: "DT/NCS-06 STDV", description: "Standard Nurse Call System with Voice",          tier: "standard" },
    { number: "DT/WNCS-04 ADV", description: "Advanced Nurse Call System (Wireless)",          tier: "advanced" },
    { number: "DT/NCS-07 ADV",  description: "Advanced Nurse Call System (Wired)",             tier: "advanced" },
    { number: "DT/NCS-05 HYB",  description: "Nurse Call System (Hybrid)",                     tier: "advanced" },
    { number: "DT/NCS-08 ADVLR",description: "Advanced Nurse Call System with RF Technology",  tier: "advanced" },
  ],

  "ot-timer-for-hospital": [
    { number: "DT/CLKT-10", description: "Operation Theatre Timer / Project Countdown Clock" },
  ],

  /* -----------------------------------------------------------------
   * Queue & token management
   * --------------------------------------------------------------- */
  "queue-management-system": [
    { number: "DT/QMS-07LED ADV",  description: "Queue Management System — Wireless LED",                tier: "standard" },
    { number: "DT/QMS-08LCD ADV",  description: "Queue Management System — Wireless LCD",                tier: "advanced" },
    { number: "DT/QMS TAB-09 ADV", description: "Queue Management System with TAB Kiosk",                tier: "advanced" },
  ],

  "token-display-system": [
    { number: "DT/3DGT-01",  description: "Wired 3-Digit Token Display System" },
    { number: "DT/4DGT-02",  description: "Wired 4-Digit Token Display System" },
    { number: "DT/W3DGT-03", description: "Wireless 3-Digit Token Display System" },
    { number: "DT/W4DGT-04", description: "Wireless 4-Digit Token Display System" },
  ],

  /* -----------------------------------------------------------------
   * BFSI display boards
   * --------------------------------------------------------------- */
  "bank-interest-rate-display-board": [
    { number: "DT/IDB01-1C", description: "Interest Rate Display Board — Single Column" },
    { number: "DT/IDB02-2C", description: "Interest Rate Display Board — Two Column" },
    { number: "DT/IDB03-3C", description: "Interest Rate Display Board — Three Column" },
  ],

  "forex-display-board": [
    { number: "DT/FDB-04", description: "Forex Display Board" },
  ],

  "gold-silver-rate-display-system": [
    { number: "DT/GSDB-05", description: "Gold & Silver Rate Display Board" },
  ],

  "bank-locker-information-display": [
    { number: "DT/LDB-07", description: "Locker Display Board" },
  ],

  /* -----------------------------------------------------------------
   * Time synchronization — clocks
   * --------------------------------------------------------------- */
  "gps-digital-clock": [
    { number: "DT/4CLK-01",    description: '4" GPS Clock' },
    { number: "DT/6CLK-02",    description: '6" GPS Clock' },
    { number: "DT/8CLK-03",    description: '8" GPS Clock' },
    { number: "DT/10CLK-04",   description: '10" GPS Clock' },
    { number: "DT/12CLK-05",   description: '12" GPS Clock' },
    { number: "DT/DTCLK-08",   description: 'Date & Time Clock — 2.2"' },
    { number: "DT/P10CLK-09",  description: "P10 Clock (Outdoor)" },
    { number: "DT/4CLK-11IP",  description: 'IP-Based Clock — 4"' },
    { number: "DT/2CLK-12IP",  description: 'IP-Based Clock — 2.2"' },
  ],

  "international-world-clock": [
    { number: "DT/22ICLK-06", description: 'International Clock — 2.2"' },
    { number: "DT/4ICLK-07",  description: 'International Clock — 4"' },
  ],

  /* -----------------------------------------------------------------
   * Food counter & restaurant displays
   * --------------------------------------------------------------- */
  "food-counter-display": [
    { number: "DT/RD-05",     description: "Restaurant Display (Wired)" },
    { number: "DT/WRD06 LED", description: "Restaurant Display (Wireless LED)" },
    { number: "DT/WRD-10LCD", description: "Restaurant LCD Display (Wireless)" },
  ],

  /* -----------------------------------------------------------------
   * Pricing / Production / Performance
   * (Single multi-purpose hardware platform shared across these
   * application categories — model number DT/PDB-06.)
   * --------------------------------------------------------------- */
  "pricing-display-board": [
    { number: "DT/PDB-06", description: "Price / Production / Performance Display Board" },
  ],

  "industrial-production-display": [
    { number: "DT/PDB-06", description: "Production / Performance / Price Display Board" },
  ],
};

/**
 * Helper — fetch model array for a given product slug.
 * Returns an empty array if the slug isn't mapped (so the renderer can
 * safely render-nothing rather than crash).
 */
export function getProductModels(slug) {
  return PRODUCT_MODELS[slug] || [];
}

/**
 * Tier label lookup for the "Tier" column on tiered products.
 */
export const TIER_LABELS = {
  basic:    "Basic",
  standard: "Standard",
  advanced: "Advanced",
};
