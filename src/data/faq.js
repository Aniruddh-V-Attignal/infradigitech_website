/**
 * FAQ knowledge base used by the on-site chatbot.
 *
 * Each entry has:
 *   - keywords: string[]
 *   - answer:   string
 *   - link?:    { label, href, external? } - optional CTA shown below the answer.
 *                Special hrefs FORMS_ENQUIRY / FORMS_SERVICE / WHATSAPP_LINK
 *                are resolved at render time inside Chatbot.jsx.
 *   - related?: string[] - slugs of relevant product pages
 */

export const faq = [
  {
    keywords: ["product", "products", "what do you make", "catalog", "catalogue", "range", "portfolio"],
    answer:
      "We manufacture banking display systems (forex, interest rate, gold/silver, locker), queue & token management systems, nurse calling systems, GPS digital clocks, world clocks, OT timers, panic alarms, food counter displays, pricing display boards, weather displays, church prayer displays and electronic scoreboards.",
    link: { label: "View all products", href: "/products" },
  },

  {
    keywords: [
      "software", "software development", "embedded", "embedded system", "firmware",
      "iot", "pcb design", "custom software", "enterprise application",
      "web development", "website development", "ecommerce", "e-commerce",
      "shopify", "wordpress", "react", "next.js", "angular",
      "dashboard development", "automation software", "api integration"
    ],
    answer:
      "Yes - Infra DigiTech is also a software & automation company. We deliver Embedded Systems (firmware, PCB design, IoT, microcontroller-based controllers), Custom Software (queue / nurse-call / banking / production monitoring), Web & Ecommerce (React, Next.js, WordPress, Shopify, WooCommerce) and Enterprise Applications (dashboards, multi-branch portals, workflow automation).",
    link: { label: "Open Software & Automation page", href: "/software-automation" },
  },

  {
    keywords: [
      "nurse", "nurse calling", "nurse call", "patient call bell", "hospital call bell",
      "patient calling", "attendant calling", "code blue",
      "bedside call", "toilet pull cord", "icu call", "nurse station",
      "advanced nurse", "standard nurse", "basic nurse", "ip nurse calling",
      "nabh", "nabh certification", "nabh accreditation", "hospital accreditation"
    ],
    answer:
      "Our Nurse Calling System comes in three tiers - Advanced (LCD with dashboards, IP/Wi-Fi, mobile nurse access, SMS alerts, up to 30 beds), Standard (Dot Matrix Wired, 26 beds), and Basic (Wireless RF / Wired LED, up to 25 beds). All three tiers support bedside calling. Toilet pull-cord switches, door indicators (with Code Blue blink mode) and Code Blue alerts are available on the Advanced and Standard tiers only - they are NOT part of the Basic tier, which is a low-cost bedside-only panel for small wards or budget sites. The Advanced and Standard tiers are engineered to meet NABH patient-call accreditation requirements; Basic is positioned for non-accredited facilities.",
    link: { label: "Open Nurse Calling product page", href: "/nurse-calling-system" },
    related: ["nurse-calling-system", "old-age-calling-system", "ot-timer-for-hospital"],
  },

  {
    keywords: [
      "queue", "queue management", "qms", "token", "ticket dispenser",
      "dynamic queue", "electronic queue", "pharmacy queue", "opd queue",
      "bank queue", "counter calling", "advanced queue", "basic queue",
      "token display", "crowd management", "crowd management system",
      "people flow", "footfall management", "token forwarding"
    ],
    answer:
      "Our Queue Management System (also known as a Crowd Management System) is offered in three tiers - Advanced (Wireless LCD with TAB kiosk, up to 15 queues, multi-language voice, token forwarding), Standard (Wireless LED, up to 2 queues, auto-cutter ticket printer), and Basic (Wireless LED single-queue). We also make a Standalone Token Display in 3-digit and 4-digit variants. Deployed at Ramiah, Sakra, Kempegowda International Airport, Passport Seva Kendras and across public-sector bank branch networks.",
    link: { label: "Open Queue Management product page", href: "/queue-management-system" },
    related: ["queue-management-system", "token-display-system"],
  },

  {
    keywords: ["forex", "currency", "exchange rate", "money changer"],
    answer:
      "Our Forex Display Boards show live multi-currency buy/sell rates over LAN, Wi-Fi or 4G - up to 16 currencies, audit-logged. Ideal for bank branches, money changers and airport exchanges.",
    link: { label: "Open Forex Display Board page", href: "/forex-display-board" },
    related: ["forex-display-board", "bank-interest-rate-display-board", "gold-silver-rate-display-system"],
  },
  {
    keywords: ["interest rate", "fd rate", "rd rate", "deposit rate", "loan rate", "rbi", "rbi mandate", "branch rate display"],
    answer:
      "Our Bank Interest Rate Display Board renders FD, RD, savings, loan and NRI rates with centralised remote updates. Available in LED 7-segment or full-colour matrix. RBI mandates that banks display current applicable interest rates visibly to customers at every branch - our centralized network lets head office update rates once and reflect that change across every connected branch within seconds.",
    link: { label: "Open Interest Rate Display page", href: "/bank-interest-rate-display-board" },
    related: ["bank-interest-rate-display-board", "forex-display-board"],
  },
  {
    keywords: ["gold", "silver", "bullion", "jewellery", "gold rate", "silver rate"],
    answer:
      "Our Gold & Silver Rate Display Board shows live 24K/22K/18K and silver rates with auto-feed integration. Indoor and outdoor (IP55, sun-readable) variants for jewellers, gold-loan branches and bullion traders.",
    link: { label: "Open Gold & Silver Rate Display", href: "/gold-silver-rate-display-system" },
    related: ["gold-silver-rate-display-system"],
  },
  {
    keywords: ["locker", "bank locker", "locker rent"],
    answer:
      "Our Bank Locker Information Display shows rent, availability and dynamic notices for branch locker halls.",
    link: { label: "Open Locker Display page", href: "/bank-locker-information-display" },
    related: ["bank-locker-information-display"],
  },

  {
    keywords: ["clock", "gps clock", "digital clock", "ntp", "rtc", "stand-alone clock", "network clock", "double-sided clock", "three-sided clock"],
    answer:
      "Our GPS Synchronised Digital Clocks come with three sync modes - GPS, Network/NTP, or Stand-alone RTC. Indoor and outdoor (IP65) variants, 3 inch to 12 inch digits, single-sided, double-sided or three-sided mounts.",
    link: { label: "Open GPS Digital Clock page", href: "/gps-digital-clock" },
    related: ["gps-digital-clock", "international-world-clock", "ot-timer-for-hospital"],
  },
  {
    keywords: ["world clock", "international clock", "multi zone clock", "time zone"],
    answer:
      "Our International World Clock shows multiple city times (e.g. New York, London, Bengaluru, Singapore) on one panel - GPS or network-synchronised, configurable 4 to 12 zones.",
    link: { label: "Open International Clock page", href: "/international-world-clock" },
    related: ["international-world-clock", "gps-digital-clock"],
  },
  {
    keywords: ["ot timer", "operation theatre", "surgery timer", "anesthesia timer", "tourniquet", "project countdown", "production countdown", "event countdown", "milestone timer"],
    answer:
      "The same engineered hardware doubles as a surgical OT Timer (Total / Anesthesia / Surgery / Tourniquet modes) AND a Project Countdown Clock for factories, boardrooms and event venues.",
    link: { label: "Open OT Timer / Countdown page", href: "/ot-timer-for-hospital" },
    related: ["ot-timer-for-hospital"],
  },

  {
    keywords: ["scoreboard", "cricket", "football", "stadium", "sports"],
    answer:
      "Our Electronic Scoreboards cover cricket, football, basketball and kabaddi - outdoor IP65, sun-readable, wirelessly operated from a tablet. Custom sizes up to 6 m by 3 m.",
    link: { label: "Open Electronic Scoreboard page", href: "/electronic-scoreboard" },
    related: ["electronic-scoreboard"],
  },
  {
    keywords: ["food counter", "order ready", "qsr", "food court", "kitchen display", "restaurant display"],
    answer:
      "Our Food Counter Displays come in two tiers - Wi-Fi LCD with multi-language voice (Eng / Hin / Kan / Tel / Tam) and Wireless LED (up to 3 tokens, 2.3 inch digits). Perfect for QSRs, food courts and cafeterias.",
    link: { label: "Open Food Counter Display page", href: "/food-counter-display" },
    related: ["food-counter-display", "pricing-display-board"],
  },
  {
    keywords: ["weather", "temperature display", "humidity", "aqi", "air quality"],
    answer:
      "Our Weather & Temperature Information Display shows time, date, temperature, humidity, AQI and forecast on an indoor single-colour LED panel. Centrally controlled via remote or mobile app.",
    link: { label: "Open Weather Display page", href: "/weather-temperature-display" },
    related: ["weather-temperature-display"],
  },
  {
    keywords: ["pricing", "price display", "price board", "menu price", "fuel pump", "petrol price", "vendor price"],
    answer:
      "Our Pricing Display Board is built for restaurants, food courts, fuel stations and retail vendors. MS powder-coated cabinet, indoor LED, hanging or wall-mount, centrally updated via remote or mobile app.",
    link: { label: "Open Pricing Display Board page", href: "/pricing-display-board" },
    related: ["pricing-display-board", "food-counter-display"],
  },
  {
    keywords: ["church", "prayer", "hymn", "scripture", "worship"],
    answer:
      "Our Church Prayer LED Information Display Boards show announcements, service timings, hymns and scripture references. IP65 indoor cabinet, 4 inch digits, single-colour LED (DTSCD01).",
    link: { label: "Open Church Display page", href: "/church-prayer-display-board" },
    related: ["church-prayer-display-board"],
  },
  {
    keywords: ["andon", "production display", "factory display", "oee", "shop floor"],
    answer:
      "Our Industrial Production / Andon Display shows Target vs Actual, OEE, downtime and shift info on the shop floor. Integrates with PLC, SCADA and MES.",
    link: { label: "Open Andon Display page", href: "/industrial-production-display" },
    related: ["industrial-production-display"],
  },
  {
    keywords: ["panic", "panic alarm", "panic button", "emergency button", "call bell", "duress alarm"],
    answer:
      "Our Panic Alarm System uses LoRa long-range wireless (up to 1 km) - pendant, fixed and Bluetooth variants. Triggers strobe, hooter, SMS and app alerts.",
    link: { label: "Open Panic Alarm page", href: "/panic-alarm-system" },
    related: ["panic-alarm-system"],
  },

  {
    keywords: ["certification", "certifications", "iso", "ce", "gem", "msme"],
    answer:
      "We are ISO 9001:2015 certified (QRO, EGAC accredited, IAF member), CE-marked, GeM-registered, MSME / Udyam registered (UDYAM-KR-03-0683142) and export-ready (IEC code holder, DGFT registered). The DIGI-TECH logomark is a registered trade mark (TM No. 5297280, Class 9, Trade Marks Registry Mumbai, valid till 2032).",
    link: { label: "View certifications", href: "/certifications" },
  },
  {
    keywords: [
      "credentials", "legal", "registration", "registrations", "cin", "pan", "tan",
      "udyam", "iec", "gstin", "gst", "msme number", "udyam number",
      "company registration", "incorporation", "trademark", "trade mark",
      "vendor profile", "vendor onboarding", "empanelment", "tender eligibility",
      "due diligence", "verification", "verify", "gem seller", "gem seller id"
    ],
    answer:
      "All our public government-issued registrations are independently verifiable - CIN U27900KA2026PTC214614 (MCA), GSTIN 29AAICI6485L1ZQ, Udyam UDYAM-KR-03-0683142 (MSME), IEC AAICI6485L (DGFT), GeM Seller ID 2CCF190000765571, and Trade Mark No. 5297280 (Class 9, Trade Marks Registry Mumbai). The Credentials page lists every identifier with the issuing authority and a direct verification link. PAN and TAN are confidential and are shared only with verified vendor-onboarding partners on request.",
    link: { label: "Open Credentials page", href: "/credentials" },
  },
  {
    keywords: [
      "about", "company", "history", "founded", "bengaluru",
      "where", "where based", "where are you", "where is infra digitech",
      "located", "location", "headquartered", "headquarters", "hq",
      "address", "office", "infra digitech", "digitech"
    ],
    answer:
      "Infra DigiTech is headquartered in Banashankari, Bengaluru. The company was founded in January 2001 by A.N. Venkatesh and incorporated as Infra DigiTech Pvt Ltd in 2026 — carrying forward more than 25 years of engineering experience in digital displays, healthcare communication, queue management, IoT and embedded systems. We design and manufacture in Bengaluru and serve customers across 15 cities through direct teams and authorized channel partners.",
    link: { label: "Read our story", href: "/about" },
  },

  {
    keywords: [
      "case study", "case studies", "success story", "success stories",
      "portfolio", "deployments", "projects", "results",
      "ramiah", "sakra", "manipal", "narayana", "fortis", "apollo",
      "syngene", "nimhans", "toyota", "wipro", "canara bank",
      "token forwarding", "signal hopping", "battery operated", "kshemavana", "siddaganga"
    ],
    answer:
      "Browse our case studies — token forwarding at Ramiah and Sakra Hospitals, long-range RF nurse call at Manipal / Narayana / Fortis / Apollo / Syngene, battery-operated handheld switches at Siddaganga and Kshemavana, GPS+NTP clocks at Infosys / Wipro / Toyota, and centralized rate displays for BFSI networks.",
    link: { label: "View Case Studies", href: "/case-studies" },
  },

  {
    keywords: [
      "bengaluru", "bangalore", "local", "karnataka", "banashankari",
      "jayanagar", "koramangala", "whitefield", "electronic city",
      "peenya", "attibele", "hebbal", "rajajinagar", "yelahanka",
      "near me", "nearby"
    ],
    answer:
      "Yes - we are based in Banashankari, Bengaluru, with service teams covering the full metro and industrial belt including Whitefield, Electronic City, Hebbal, Peenya, Koramangala, Jayanagar, Attibele, Rajajinagar and Yelahanka. AMC service calls, surveys and installations across these areas are typically scheduled within working hours.",
    link: { label: "Open Bengaluru page", href: "/bengaluru" },
  },

  {
    keywords: [
      "mumbai", "chennai", "hyderabad", "delhi", "kolkata", "kochi",
      "guwahati", "coimbatore", "madurai", "mysore", "mangalore",
      "hubli", "dharwad", "vishakapatnam", "visakhapatnam", "kozhikode",
      "channel partner", "channel partners", "distributor", "dealer",
      "regional office", "regional offices", "do you serve", "do you operate",
      "pan india", "across india", "presence", "presence across india",
      "cities", "where do you operate"
    ],
    answer:
      "Yes - beyond our Bengaluru HQ, we operate through direct teams and authorized channel partners across 15 cities: Bengaluru, Mysore, Mangalore, Hubli-Dharwad, Mumbai, Chennai, Coimbatore, Madurai, Hyderabad, Vishakapatnam, Kolkata, Guwahati, Kochi, Kozhikode and Delhi. Through this partner network we also cover neighbouring states and tier-2 / tier-3 cities.",
    link: { label: "Open Bengaluru / regional coverage", href: "/bengaluru#coverage" },
  },

  {
    keywords: ["quote", "request quote", "request a quote", "pricing enquiry", "price enquiry", "cost", "estimate", "proposal"],
    answer:
      "I'll point you to our enquiry form - our sales team replies within one business day with a tailored quotation.",
    link: { label: "Request a Quote", href: "FORMS_ENQUIRY", external: true },
  },
  {
    keywords: [
      "service", "service request", "support", "amc", "repair",
      "troubleshoot", "not working", "down", "issue", "complaint",
      "service agent", "speak with service"
    ],
    answer:
      "For existing installations, our service desk acknowledges every ticket within 4 business hours and typically resolves remotely or on-site within 24 to 72 hours.",
    link: { label: "Open Service Request", href: "/service-request" },
  },
  {
    keywords: [
      "paper roll", "paper rolls", "thermal paper", "token paper", "printer paper",
      "consumable", "consumables", "refill", "queue paper", "token roll",
      "printer jam", "paper jam", "third party paper", "warranty paper", "warranty void",
    ],
    answer:
      "Yes — we supply genuine paper rolls specifically engineered for our Queue Management Systems and token dispenser printers. Our rolls are manufactured to the correct grammage, surface coating and core size for our printer mechanism, which gives reliable feeding, clean thermal print quality and noticeably longer print-head and cutter life. Using third-party paper rolls of incorrect specification is the single most common cause of paper jams and printer-mechanism wear. The printer mechanism warranty on our token dispensers is valid only when Infra DigiTech-supplied paper rolls are used — any printer fault traced to third-party paper (jam damage, cutter wear, head abrasion or sensor contamination) is not covered under warranty.",
    link: { label: "Order paper rolls via service line", href: "/service-request" },
    related: ["queue-management-system", "token-display-system"],
  },
  {
    keywords: ["contact", "phone", "mobile", "email", "address", "location", "call you", "talk to someone", "human", "agent", "speak with agent", "speak to agent"],
    answer: "I can connect you with our team - pick the channel that suits you best.",
    link: { label: "Open Contact page", href: "/contact" },
  },
  {
    keywords: ["brochure", "download", "pdf", "datasheet", "catalogue download"],
    answer: "All product brochures (PDF) are downloadable from our Catalogues page - search by keyword or filter by category.",
    link: { label: "Open Catalogues", href: "/downloads" },
  },
  {
    keywords: ["whatsapp", "wa.me", "chat on whatsapp"],
    answer: "Tap the floating WhatsApp button (bottom-right) or use the WhatsApp CTA below to chat with our team.",
    link: { label: "Chat on WhatsApp", href: "WHATSAPP_LINK", external: true },
  },
  {
    keywords: ["careers", "jobs", "hiring", "open roles", "vacancy"],
    link: { label: "Open Careers", href: "/careers" },
  },
  {
    keywords: [
      "buy back", "buyback", "trade in", "trade-in", "exchange",
      "old system", "old installation", "legacy system", "legacy installation",
      "outdated", "obsolete", "end of life", "eol",
      "upgrade", "upgrading", "replace", "replacement", "refresh",
      "scrap", "dispose", "disposal", "recycle old", "recycle existing",
      "not working", "non functional", "non-working", "broken old",
      "what to do with old"
    ],
    answer:
      "Yes — we run a buy-back programme for old Infra DigiTech installations. Whether the existing system is still working or not, we'll buy it back at a nominal value or give you a meaningful discount on a new replacement. That way you can upgrade hospitals, bank branches, factories and counters to current-generation hardware without worrying about what to do with the old kit. Everything we take back is routed to certified recyclers, so the legacy equipment is responsibly disposed of rather than scrapped.",
    link: { label: "Talk to us about a buy-back", href: "/service-request" },
  },
  {
    keywords: [
      "sustainability", "esg", "green", "eco friendly", "environmental",
      "solar", "solar panels", "solar power", "renewable energy", "bescom",
      "electric vehicle", "ev", "ev fleet", "tata nexon", "ola", "ather",
      "organic farm", "attiganal", "tarikere", "bhadra", "fruit trees",
      "e-waste", "ewaste", "recycling", "buy back", "buyback",
      "biogas", "carbon footprint", "net zero", "csr"
    ],
    answer:
      "Sustainability is built into how we operate, not a slide in our deck. Since 2016 our Banashankari office and manufacturing facility run on a 10+ kW rooftop solar array installed in partnership with Terraserve Engineers - we generate more clean energy than we consume and sell the surplus back to BESCOM. Our company vehicles are all electric (Tata Nexon EV for cars, Ola and Ather for technician two-wheelers). We own a 3,500+ fruit-tree organic farm at Attiganal village near the Bhadra Wildlife Sanctuary in Karnataka, on the New BH Road (Tarikere bypass road) - clients and partners are welcome to drop by, no appointment needed (Google Maps: https://www.google.com/maps?q=13.69704,75.80606). We run an e-waste buy-back programme for old installations and route all manufacturing scrap to certified recyclers. Even the office kitchen runs on biogas and solar-powered induction stoves.",
    link: { label: "Read our sustainability story", href: "/sustainability" },
  },
  {
    keywords: ["export", "international", "global", "overseas", "gcc", "africa", "southeast asia"],
    answer:
      "Yes — we are an IEC code holder and DGFT registered for export. We supply nurse calling, queue management, GPS clocks and display systems to GCC, Southeast Asia and Africa, with voltage / language compliance variants.",
    link: { label: "View certifications", href: "/certifications" },
  },
];

export const chatbotMessages = {
  greeting:
    "Hi! I am Digi - Infra DigiTech's assistant. Ask me about nurse calling, queue management, banking displays, GPS clocks, case studies or where we operate.",
  prompts: [
    "What is the Advanced Nurse Calling System?",
    "What is a Queue Management System?",
    "Show me your case studies",
    "Do you serve Mumbai / Chennai / Delhi?",
    "Where is Infra DigiTech based?",
  ],
  fallback:
    "I didn't quite catch that - try keywords like nurse call, queue, token, GPS clock, interest rate, case studies, Bengaluru, AMC or contact.",
};
