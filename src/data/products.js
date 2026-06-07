/**
 * Master products data file for Infra DigiTech.
 *
 * Some products are "tiered" — they expose a `tiers` array with Advanced /
 * Standard / Basic variants which render together on a single product page.
 * Advanced tier always comes first; Basic comes last.
 *
 * Specs were derived from the official Digi-Tech product flyers.
 */

export const categories = [
  {
    id: "healthcare",
    name: "Healthcare Communication Systems",
    slug: "healthcare-communication",
    description:
      "Advanced, Standard and Basic nurse calling systems plus OT timers, panic alarms and senior-living calling — designed for hospital reliability.",
    icon: "Stethoscope",
  },
  {
    id: "queue",
    name: "Queue & Token Management Systems",
    slug: "queue-token-management",
    description:
      "End-to-end queue and token solutions — Advanced wireless LCD systems through Basic single-queue LED setups — with calling units, ticket dispensers and counter calling.",
    icon: "Tickets",
  },
  {
    id: "banking",
    name: "Banking Display Systems",
    slug: "banking-display-systems",
    description:
      "Forex, bank interest rate, locker information and gold/silver rate displays for banks and NBFCs — robust, high-visibility, audit-ready.",
    icon: "Banknote",
  },
  {
    id: "time-sync",
    name: "Time Synchronization Systems",
    slug: "time-synchronization",
    description:
      "GPS synchronised digital clocks (indoor & outdoor), multi-zone international world clocks and OT operation-theatre timers.",
    icon: "Clock",
  },
  {
    id: "food-counter",
    name: "Food Counter & Service Displays",
    slug: "food-counter-displays",
    description:
      "Wireless LED and Wi-Fi LCD food-counter / order-ready displays for restaurants, food courts, hotels and corporate cafeterias.",
    icon: "UtensilsCrossed",
  },
  {
    id: "sports",
    name: "Information, Sports & Industrial Displays",
    slug: "information-sports-industrial",
    description:
      "Custom information boards — weather & temperature, pricing, church prayer / hymn boards — plus cricket / football scoreboards and factory Andon production displays.",
    icon: "Trophy",
  },
];

export const products = [
  // ─────────────────────────────────────────────────────────────────────
  // HEALTHCARE COMMUNICATION (Advanced → Standard → Basic)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "nurse-calling-system",
    title: "Nurse Calling System",
    category: "healthcare",
    sectors: ["healthcare"],
    short:
      "Patient-to-nurse communication system available in Advanced (LCD + Wi-Fi + Hybrid), Standard (Dot Matrix Wired) and Basic (Wireless RF / Wired LED) tiers.",
    description:
      "Infra DigiTech's nurse calling solutions span three engineered tiers — from a flagship Advanced LCD platform with mobile nurse access, SMS alerts, call forwarding and centralised dashboards, down to a low-cost Basic wired LED panel for small wards. Every variant supports bedside calling units, toilet pull-cords, Code Blue alerts and audible nurse-station indication. Built for hospital reliability, designed and manufactured in Bengaluru.",
    features: [
      "Bedside calling units + toilet pull-cord switches",
      "Code Blue, washroom and patient-call differentiation",
      "Nurse station panel — LCD, dot-matrix or 7-segment LED variants",
      "Voice announcement + audible beep alerts",
      "Door indicator turns ON during a call, blinks under Code Blue",
      "Active until reset — no missed calls",
      "Wall-mount, 220 V AC, UPS-ready (Advanced tier on 5A UPS)",
      "HIS / EMR integration ready (Advanced tier)",
      "Mobile nurse access, SMS alerts, dashboards (Advanced tier)",
      "Self-generated Wi-Fi / Hub network on Advanced tier — no hospital LAN dependency",
      "Battery-operated handheld calling units — for wards or sites without UPS backup",
      "Real-time battery-level monitoring at the nurse station for every handheld unit",
      "NABH-ready — designed to satisfy NABH accreditation requirements for patient-call infrastructure",
      "Field-proven across Manipal, Sakra, Fortis, Narayana, Sparsh, Aster, NIMHANS, St John's, Syngene, Siddaganga and Kshemavana",
    ],
    specs: [
      { label: "Tiers available",       value: "Advanced (LCD Hybrid) · Standard (Dot Matrix) · Basic (RF / LED)" },
      { label: "Max beds / station",    value: "Up to 30 (Advanced) / 26 (Standard) / 25 (Basic RF) / 19 (Basic LED)" },
      { label: "Network",               value: "Self-generated Wi-Fi (Advanced) · RS-485 wired · RF wireless" },
      { label: "Handheld units",        value: "Battery-operated · battery-level monitored at nurse station" },
      { label: "Compliance",            value: "NABH-ready — designed to satisfy patient-call audit requirements" },
      { label: "Power",                 value: "100–240 V AC · 5A UPS on Advanced · battery-only on handheld variants" },
      { label: "Mount",                 value: "Wall-mounted nurse station + bedside / pull-cord / handheld units" },
    ],
    applications: [
      "Multi-speciality hospitals (Manipal, Sakra, Fortis, Narayana, Sparsh, Aster, NIMHANS, St John's)",
      "ICUs & critical-care wards",
      "NABH-accredited and re-accreditation candidate hospitals",
      "Pharmaceutical units (Syngene)",
      "Hospitals without UPS on the calling line (Siddaganga Hospital, Tumkur)",
      "Old-age, assisted-living and senior-care facilities (Kshemavana)",
      "Nursing homes & day-care centres",
      "Diagnostic centres & polyclinics",
    ],
    images: [
      "/images/products/nurse-calling-system/1.jpg",
      "/images/products/nurse-calling-system/2.jpg",
      "/images/products/nurse-calling-system/3.jpg",
      "/images/products/nurse-calling-system/4.jpg",
    ],
    brochure: "/brochures/Nurse_Call_System.pdf",
    youtubeId: "",
    seo: {
      title: "Nurse Calling System (Advanced · Standard · Basic) | Infra DigiTech India",
      description:
        "Advanced LCD, Standard dot-matrix and Basic LED nurse calling systems — wired, wireless and hybrid. ISO & CE certified manufacturer in Bengaluru. Code Blue, toilet pull cord, HIS-ready.",
      keywords: [
        "nurse calling system", "nurse call system", "advanced nurse calling system",
        "wireless nurse call", "IP nurse calling", "IP-based nurse calling system",
        "hybrid nurse call", "patient calling system", "attendant calling system",
        "nurse call bell system", "hospital call bell", "patient call bell",
        "nurse station panel", "dot matrix nurse call", "LED nurse call panel",
        "toilet pull cord switch", "code blue alert system", "bedside calling unit",
        "call bell system", "nurse calling system manufacturer India",
        "nurse call system Bengaluru",
      ],
    },
    tiers: [
      {
        id: "advanced",
        name: "Advanced Nurse Calling System",
        badge: "Wired · Wireless · Hybrid · IP-based",
        headline: "Flagship LCD / IP platform with dashboards, SMS alerts & mobile nurse access",
        summary:
          "Our advanced nurse calling system pairs a real-time LCD nurse-station console with bedside / toilet pull-cord units over a self-generated Wi-Fi or IP hub network. An IP-based variant runs over the hospital LAN with VoIP intercom and EMR integration. Adds mobile nurse access, smart call forwarding, SMS alerts and centralised reporting for faster response and complete visibility across hospital wards. Powered by a centralised MCU running as a minicomputer on a 5 A UPS.",
        features: [
          "LCD nurse-station console with dynamic dashboards",
          "IP-based variant — runs over hospital LAN with VoIP intercom",
          "5-character alphanumeric room/bed token + voice announcement per call",
          "Up to 30 beds per station · simultaneous status of 15 beds",
          "Bedside calling units, toilet pull-cord switches, door indicators",
          "Code Blue mode — door indicator blinks when initiated by nurse",
          "Self-generated Wi-Fi / Hub network — no hospital LAN dependency",
          "Mini Nurse Kiosk (alternate display at the nurse station)",
          "Head Nurse Mobile Display — consolidated multi-ward monitoring",
          "Mobile Calling Unit — handheld Call/Reset + Pantry/Housekeeping service calls",
          "Advanced reporting — per-station + consolidated multi-panel reports",
          "Centralised Report Dashboard with call logs, timelines & performance data",
          "Call Forwarding & SMS Alerts to other stations",
          "EMR / HIS integration ready (IP variant)",
          "Centralised MCU (minicomputer) on 5 A UPS",
        ],
        applications: ["Multi-speciality hospitals", "ICUs", "Premium private wards", "Corporate hospital chains"],
        specs: [
          { label: "Display",          value: "LCD console + dashboards" },
          { label: "Token",            value: "5-character alphanumeric + voice" },
          { label: "Beds / station",   value: "Up to 30 · 15 simultaneous status" },
          { label: "Network",          value: "Self-generated Wi-Fi / Hub" },
          { label: "Mobile / reporting", value: "Mobile access · SMS alerts · centralised dashboard" },
          { label: "Power",            value: "220 V AC · 5 A UPS-backed" },
        ],
      },
      {
        id: "standard",
        name: "Standard Nurse Calling System",
        badge: "Wired · Dot Matrix",
        headline: "Cost-effective dot-matrix wired panel for structured ward deployments",
        summary:
          "A scalable, high-dependability wired platform built around a dot-matrix nurse-station panel. Each call shows the room or bed number on a 3-digit alphanumeric panel with an audible beep alert; the call remains active until reset. Designed for hospitals seeking precise room/bed identification with a structured layout.",
        features: [
          "Dot-matrix nurse station panel — clear visual + audible beep",
          "Calls initiated by bedside calling unit or toilet pull-cord",
          "3-digit alphanumeric panel — room / bed number on each call",
          "Toilet-originated call shown with “T” suffix (e.g. 101T)",
          "Door Indicator turns ON during a normal call · blinks on Code Blue",
          "Optional door indicator + toilet pull-cord — 4-core data cabling",
          "Supports up to 26 bed extensions per panel",
          "Wall-mounted, 220 V AC supply",
        ],
        applications: ["Mid-size hospitals", "Specialty wards", "Polyclinics", "Government / PSU hospitals"],
        specs: [
          { label: "Display",        value: "Dot matrix · 3-digit alphanumeric" },
          { label: "Network",        value: "Wired (RS-485 / 4-core cabling)" },
          { label: "Beds / panel",   value: "Up to 26" },
          { label: "Mount",          value: "Wall-mount" },
          { label: "Power",          value: "220 V AC" },
        ],
      },
      {
        id: "basic",
        name: "Basic Nurse Calling System",
        badge: "Wireless RF · Wired LED variants",
        headline: "Affordable, retrofit-friendly nurse calling for small wards & clinics",
        summary:
          "Two simple, low-cost variants of nurse calling — perfect for clinics, small hospitals and retrofits. The Wireless RF variant uses hand-held / wall-mount calling units that signal a 7-segment 3-line LED nurse-station panel. The Wired LED variant uses bedside push-bell switches and a microcontroller-based LED nurse panel with customisable display backgrounds.",
        features: [
          "Wireless RF variant — hand-held + wall-mount calling units, 4-digit 7-segment 3-line LED nurse-station panel, up to 25 beds, audible alert",
          "Wired LED variant — push-bell switch + LED panel + audible buzzer, up to 19 beds, customised display backgrounds",
          "Calls remain active until reset; reset switch on the calling unit / panel",
          "Wall-mounted nurse station panel, plug-and-play",
          "Low power consumption microcontroller architecture",
          "Compact form factor, ideal for retrofits",
        ],
        applications: ["Clinics & polyclinics", "Small / cottage hospitals", "Maternity homes", "Old-age homes", "Day-care surgery centres"],
        specs: [
          { label: "Variants",        value: "Wireless RF · Wired LED" },
          { label: "Display",         value: "4-digit 7-segment, 3-line LED (RF) · LED indicator panel (Wired)" },
          { label: "Beds / panel",    value: "Up to 25 (RF) · Up to 19 (Wired LED)" },
          { label: "Mount",           value: "Wall-mount" },
          { label: "Power",           value: "220 V AC" },
        ],
      },
    ],
  },

  {
    slug: "old-age-calling-system",
    title: "Old-Age / Senior Living Calling System",
    category: "healthcare",
    sectors: ["healthcare", "hospitality"],
    short:
      "The same engineered nurse-call platform — packaged for old-age homes, assisted living and senior apartments. Adds a battery-operated handheld calling unit with real-time battery-level monitoring at the warden / nurse station. Deployed at Kshemavana Naturopathy & Wellness Center and Siddaganga Hospital, Tumkur.",
    description:
      "Our Old-Age / Senior Living Calling System runs on the exact same engineered platform as our flagship Nurse Calling System — same long-range RF with signal hopping, same nurse-station displays, same centralised dashboards. We package it specifically for old-age homes, assisted-living facilities and senior apartments where residents need fast, anywhere-in-the-building access to caretakers. The key addition for senior-living is a battery-operated handheld calling unit that the resident carries (pocket, lanyard or around the neck) and can press from anywhere — no wiring, no UPS dependency. Each handheld unit's battery level is monitored in real time at the warden / nurse station, so a low-battery handset gets flagged and recharged before it goes dark. This handheld switch was originally engineered for Siddaganga Hospital, Tumkur (a site without UPS infrastructure on the calling line), and is now installed at Kshemavana Naturopathy & Wellness Center and across senior-living facilities.",
    features: [
      "Same engineered platform as the flagship Nurse Calling System — RF, hopping, station displays, dashboards, mobile alerts",
      "Battery-operated handheld calling unit — pocket, lanyard or pendant carry",
      "Real-time battery-level monitoring at the warden / nurse station for every handheld unit",
      "Low-battery alerts so units get recharged before they go dark",
      "Wearable pendant call button option",
      "Washroom waterproof pull cord",
      "Door-side reset and bedside call point",
      "Warden / caretaker console with audible + visual alerts + mobile push",
      "Console UPS / battery backup",
      "Long-range RF — covers multi-floor and multi-building residences",
      "Field-proven at sites with no UPS on the calling line (Siddaganga Hospital, Tumkur)",
    ],
    specs: [
      { label: "Platform",         value: "Shared with Nurse Calling System — same RF, hopping, station displays" },
      { label: "Handheld unit",    value: "Battery-operated · pendant / pocket / lanyard carry" },
      { label: "Battery monitoring", value: "Real-time level visible at warden station; low-battery alerts" },
      { label: "Range",            value: "Up to 200 m (LoRa / long-range RF variant)" },
      { label: "Handheld battery", value: "Typical 6+ months — continuously monitored at station" },
      { label: "Backup",           value: "Console UPS / battery backup" },
      { label: "Console",          value: "10.1″ touch + mobile app alerts" },
      { label: "Mount",            value: "Wall-mount station + handheld pendants + optional pull cords" },
    ],
    applications: [
      "Old-age homes and senior-living facilities",
      "Assisted-living and memory-care residences",
      "Service apartments for seniors",
      "Naturopathy and wellness centers (Kshemavana)",
      "Hospitals without UPS backup on the calling line (Siddaganga Hospital, Tumkur)",
      "Multi-floor senior residences",
    ],
    images: ["/images/products/old-age-calling-system/1.jpg", "/images/products/old-age-calling-system/2.jpg"],
    brochure: "/brochures/Nurse_Call_System.pdf",
    youtubeId: "",
    seo: {
      title: "Old-Age / Senior Living Calling System — Battery-Level Monitored Handheld | Infra DigiTech",
      description:
        "Wireless senior-living calling system on the same platform as our flagship Nurse Call — battery-operated handheld units with real-time battery-level monitoring at the warden station. Deployed at Kshemavana Naturopathy & Wellness Center and Siddaganga Hospital, Tumkur. ISO & CE certified Bengaluru manufacturer.",
      keywords: [
        "old age home calling system", "senior calling system", "senior living calling system",
        "elderly emergency call", "assisted living call system",
        "battery operated nurse call", "handheld nurse call switch",
        "battery level monitoring nurse call", "wireless senior call pendant",
        "Kshemavana wellness center calling system", "Siddaganga hospital calling system",
        "no UPS nurse call system", "memory care calling system",
        "naturopathy center call system", "Bengaluru senior calling system",
      ],
    },
  },

  {
    slug: "ot-timer-for-hospital",
    title: "OT Timer & Project Countdown Timer",
    category: "healthcare",
    sectors: ["healthcare", "factories", "corporate"],
    short:
      "Multi-mode digital countdown / count-up timer — used as a surgical OT timer in hospitals and as a project / production countdown clock in factories, control rooms and event venues.",
    description:
      "The same engineered timer hardware doubles as a surgical Operating-Theatre timer for hospitals and a project / production countdown clock for factories and offices. In an OT it tracks Total, Anesthesia, Surgery and Tourniquet times independently with large LED digits visible across the room. In a factory or boardroom it acts as a milestone countdown — visualising how much time is left until a deadline, batch cycle end, event launch or shift change. Surgeon-friendly clean-room enclosure, single-channel or multi-channel variants, with wired keypad, wireless remote or foot-switch control.",
    features: [
      "Total / Anesthesia / Surgery / Tourniquet timer modes (OT use)",
      "Project / production countdown modes with start, pause, reset",
      "Single or multi-channel — up to 4 independent timers",
      "Large 4″ ultra-bright LED digits — visible across rooms / shop floors",
      "Wired keypad, wireless remote or foot-switch start/stop",
      "Wall, ceiling, panel or hanging mount",
      "Stainless / powder-coated enclosure — clean-room ready",
      "Buzzer alarm at deadline / event end",
      "Industrial LED variant for shop floors and construction sites",
      "Drives accountability — abstract deadlines become tangible",
    ],
    specs: [
      { label: "Display type",  value: "Digital LED — 4″ red / amber 7-segment" },
      { label: "Digits",        value: "4 digit (HH:MM or MM:SS)" },
      { label: "Channels",      value: "Single channel OR up to 4 independent timers" },
      { label: "Alarm type",    value: "Buzzer" },
      { label: "Control",       value: "Wired keypad · Wireless remote · Foot switch" },
      { label: "Mount",         value: "Wall · Ceiling · Panel · Hanging" },
      { label: "Power",         value: "100–240 V AC" },
    ],
    applications: [
      "Operation theatres, cath labs, endoscopy suites",
      "Manufacturing — production batch cycle timing",
      "Construction sites — milestone & completion countdown",
      "Event management — conference / product launch countdowns",
      "Boardrooms — meeting / presentation countdowns",
      "Control rooms — process step timers",
    ],
    images: ["/images/products/ot-timer-for-hospital/1.jpg", "/images/products/ot-timer-for-hospital/2.jpg"],
    youtubeId: "",
    seo: {
      title: "OT Timer & Project Countdown Timer | Infra DigiTech",
      description:
        "Surgical OT timer for hospitals + project / production countdown clock for factories, boardrooms and events. Multi-channel, wireless foot switch, large LED. Manufacturer in India.",
      keywords: [
        "OT timer", "operation theatre timer", "OT clock and timers",
        "clock and timers for operation theatre", "surgery timer", "anesthesia timer",
        "tourniquet timer", "project countdown timer", "project countdown clock",
        "production countdown timer", "construction countdown clock",
        "event countdown timer", "milestone countdown clock",
        "industrial countdown timer", "shop floor countdown display",
      ],
    },
  },

  {
    slug: "panic-alarm-system",
    title: "Panic Alarm System",
    category: "healthcare",
    sectors: ["healthcare", "bfsi", "hospitality", "corporate", "factories", "retail"],
    short:
      "Wireless emergency panic alert and monitoring system for multi-floor buildings, hospitals, residential facilities, factories and commercial establishments — with centralised Main Control Unit, queue-based alert display, floor-wise fault detection, high-decibel siren and LED visual alarm.",
    description:
      "Wireless emergency alert and monitoring system for multi-floor buildings, hospitals, residential complexes, factories and commercial establishments. Press any remote calling unit and the Main Control Unit displays the alert location, fires a high-decibel siren and lights a bright LED indicator. Multiple panic calls are auto-queued in the order received, and the system continuously monitors every connected floor — any lost-comms or failed floor unit is flagged in the same queue. Active alerts are acknowledged and reset only from the Main Control Unit, ensuring controlled handling. Designed and manufactured in Bengaluru.",
    features: [
      "Instant wireless panic alert transmission from any calling unit",
      "Multi-floor connectivity with centralised real-time monitoring",
      "Queue-based display of multiple simultaneous panic calls — logged in order received",
      "Floor-wise system failure detection — instantly flags lost-comms or failed floor units",
      "Queue-based fault display for easy tracking alongside panic events",
      "Large LCD display on the Main Control Unit showing alert location and fault information",
      "High-intensity LED visual alarm indicator for noisy or large-area environments",
      "High-decibel siren for immediate, unmissable attention",
      "Manual alarm acknowledgement and reset from the Main Control Unit only — controlled handling",
      "Reliable long-range wireless communication between calling units and Main Control Unit",
      "Easy installation and operation — no structured cabling required between floors",
      "Tamper-resistant calling units suitable for public, residential and high-traffic areas",
      "Made-in-India, ISO 9001:2015 & CE certified — designed and manufactured in Bengaluru",
    ],
    specs: [
      { label: "System type",          value: "Wireless multi-zone panic alert + status-monitoring system" },
      { label: "Architecture",         value: "Calling Unit → Main Control Unit (MCU) → Siren Unit" },
      { label: "Display",              value: "Large LCD on MCU — shows active panic calls and floor faults" },
      { label: "Alert queue",          value: "Simultaneous panic calls auto-queued in order received" },
      { label: "Fault detection",      value: "Continuous floor-wise health monitoring with fault queue" },
      { label: "Audible alarm",        value: "High-decibel siren unit" },
      { label: "Visual alarm",         value: "High-intensity LED indicator on MCU" },
      { label: "Reset",                value: "Manual reset button on Main Control Unit only" },
      { label: "Communication",        value: "Reliable long-range wireless (RF) — multi-floor capable" },
      { label: "Power",                value: "100–240 V AC · UPS-backed deployment recommended for MCU" },
      { label: "Mount",                value: "Wall-mount calling units, MCU and siren unit" },
    ],
    applications: [
      "Multi-floor hospitals and nursing homes — emergency panic & code-call infrastructure",
      "Old-age homes, assisted-living and senior-care residences",
      "Banks, NBFCs and money-changer branches — silent duress / hold-up alarm",
      "Hotels, resorts and serviced apartments — staff and guest emergency alerts",
      "Industrial plants and factories — safety panic alarm on shop floor and warehouses",
      "Educational campuses — schools, colleges and hostels",
      "Corporate offices and multi-tenant commercial buildings",
      "Retail showrooms, jewellery shops and gold loan branches",
      "Residential apartment complexes and gated communities",
      "Government offices and public-counter facilities",
    ],
    images: ["/images/products/panic-alarm-system/1.jpg", "/images/products/panic-alarm-system/2.jpg", "/images/products/panic-alarm-system/3.jpg"],
    youtubeId: "",
    /**
     * SYSTEM COMPONENTS — used by the long-form description above and indexed
     * by both Google and AI engines (ChatGPT, Perplexity, Gemini) for the
     * "what's inside the box" question. Kept as a structured key/value list
     * so future renderers can pick it up automatically.
     */
    components: [
      {
        name: "Calling Unit",
        details: [
          "Wireless emergency panic button",
          "Instant alert transmission to the Main Control Unit",
        ],
      },
      {
        name: "Main Control Unit (MCU)",
        details: [
          "Displays active panic calls and floor-wise system faults on a large LCD",
          "Provides high-intensity LED visual alarm indication",
          "Built-in alarm acknowledgement and manual reset functionality",
        ],
      },
      {
        name: "Siren Unit",
        details: [
          "High-decibel audible alarm",
          "Immediate notification of emergency events across the facility",
        ],
      },
    ],
    seo: {
      title:
        "Panic Alarm System | Wireless Multi-Floor Emergency Alert & Monitoring | Infra DigiTech India",
      description:
        "Wireless Panic Alarm System with multi-floor connectivity, centralised Main Control Unit, queue-based panic-call display, floor-wise fault detection, high-decibel siren and LED visual alarm. For hospitals, banks, hotels, factories and residential facilities. ISO 9001:2015 & CE certified — designed and manufactured in Bengaluru, India.",
      keywords: [
        // Core product terms
        "panic alarm system", "wireless panic alarm system", "emergency panic alarm system",
        "panic alert system", "panic button system", "panic alarm system India",
        "panic alarm system manufacturer", "panic alarm system Bengaluru",
        // Use-case / sector
        "hospital panic alarm system", "bank panic alarm", "silent panic alarm for bank",
        "duress alarm system", "hold-up alarm system", "industrial panic alarm",
        "factory emergency alarm", "school panic alarm system",
        "hotel panic alarm", "residential panic alarm system",
        "old age home panic alarm", "elderly emergency alarm system",
        "apartment panic alarm", "office panic alarm system",
        // Functional terms
        "multi-floor panic alarm", "centralised panic monitoring system",
        "queue based panic alarm display", "floor wise fault detection alarm",
        "LCD panic alarm control unit", "main control unit panic alarm",
        "panic button with siren and LED", "high decibel siren alarm system",
        "wireless emergency alert system", "long range wireless panic button",
        "panic alarm with fault monitoring",
        // AIEO long-tail / question-style
        "best wireless panic alarm system for hospitals India",
        "panic alarm system for multi-floor buildings",
        "panic alarm with main control unit and siren",
        "Made in India panic alarm system",
        "ISO certified panic alarm manufacturer India",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // QUEUE & TOKEN MANAGEMENT (Advanced → Standard → Basic)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "queue-management-system",
    title: "Queue Management System",
    category: "queue",
    sectors: ["bfsi", "healthcare", "corporate", "retail", "airports"],
    short:
      "Advanced wireless LCD queue management — calling unit, ticket dispenser, voice announcement and counter mapping — also available in Standard LED and Basic single-queue variants.",
    description:
      "End-to-end queue and token management — from a flagship Advanced wireless LCD platform supporting up to 15 queues, multi-language voice and TAB kiosk, through a Standard LED system with calling unit + auto-cutter printer, to a Basic single-queue LED setup. Every tier ships completely wireless with Wi-Fi connectivity between display, calling unit, ticket dispenser and MCU hub. Designed for banks, hospitals, telecom shops, government offices and retail showrooms.",
    features: [
      "Completely wireless — Wi-Fi router connects every hardware unit",
      "Calling unit with numerical keypad, NEXT + RECALL buttons",
      "Small LCD on calling unit shows called token, pending tokens and link status",
      "Ticket dispenser with print of name, token number, date & time + auto-cutter",
      "Wall-mount / table-top / floor-mount kiosk options",
      "Voice + non-voice announcement modes",
      "Multi-language voice (English, Hindi, Kannada, Telugu, Tamil) on advanced tier",
      "MCU acts as system hub",
      "5 V power point at every installation point",
      "Plug-and-play — no inter-unit wiring",
    ],
    specs: [
      { label: "Tiers available",  value: "Advanced LCD (TAB kiosk variant) · Standard LED · Basic LED" },
      { label: "Queues supported", value: "Up to 15 (Advanced) · 2 (Standard) · 1 (Basic)" },
      { label: "Counters",         value: "Multi-counter mapping with flexible assignment" },
      { label: "Communication",    value: "Wi-Fi (router-based) · MCU hub" },
      { label: "Voice languages",  value: "English + 4 regional (advanced)" },
      { label: "Power",            value: "5 V DC at each unit · 100–240 V AC adapters" },
    ],
    applications: [
      "Bank branches & treasury halls",
      "Hospitals (OPD, billing, pharmacy)",
      "Telecom showrooms",
      "Government / PSU offices",
      "Diagnostic centres & polyclinics",
      "Retail showrooms",
    ],
    images: [
      "/images/products/queue-management-system/1.jpg",
      "/images/products/queue-management-system/2.jpg",
      "/images/products/queue-management-system/3.jpg",
      "/images/products/queue-management-system/4.jpg",

    ],
    brochure: "/brochures/Queue_management_System.pdf",
    youtubeId: "",
    seo: {
      title: "Queue Management System (Advanced · Standard · Basic) | Infra DigiTech India",
      description:
        "Advanced wireless LCD queue management with up to 15 queues, multi-language voice and TAB kiosk — plus Standard LED and Basic single-queue tiers. Manufacturer in Bengaluru — ISO & CE certified.",
      keywords: [
        "queue management system", "QMS", "dynamic queue management",
        "electronic queue management", "wireless queue management",
        "patient queue management system", "pharmacy queue management system",
        "OPD queue management", "bank queue management", "Bank OPD queue management",
        "token management system", "advanced queue management system",
        "ticket dispenser system", "standalone token printer",
        "auto cutter token printer", "counter calling system",
        "branch queue system", "multi queue management",
      ],
    },
    tiers: [
      {
        id: "advanced",
        name: "Advanced Queue Management System",
        badge: "Wireless · LCD · TAB Kiosk Variant",
        headline: "Multi-queue LCD platform — up to 15 queues, multi-language voice, TAB ticket kiosk",
        summary:
          "Our flagship completely-wireless queue management solution for multi-counter, high-traffic environments. Supports up to 15 simultaneous queues with flexible counter mapping, multi-language voice announcement, and a TAB kiosk variant for ticket dispensing. Calling unit with NEXT / RECALL buttons, ticket printer with auto-cutter, and MCU system hub.",
        features: [
          "Wireless dynamic queue management for multi-counter and high-traffic environments",
          "Supports up to 15 queues with flexible counter mapping",
          "LCD display shows token number + counter / OPD room number or name",
          "TAB ticket kiosk variant (or wall-mount / table-top / floor-mount kiosk)",
          "Voice announcement in English and any regional language",
          "Calling unit with numerical keypad, NEXT + RECALL buttons",
          "Small LCD on calling unit shows called token, pending tokens and connectivity",
          "Ticket dispenser with print of name, token number, date & time · auto-cutter",
          "Wi-Fi router connects all hardware",
          "Speakers connected to system for announcement",
          "MCU acts as system hub",
        ],
        applications: ["Hospitals (OPD / billing / pharmacy)", "Banks", "Diagnostic centres", "Government offices", "Large retail showrooms"],
        specs: [
          { label: "Queues",        value: "Up to 15 with counter mapping" },
          { label: "Display",       value: "LCD" },
          { label: "Kiosk",         value: "TAB Kiosk · Wall-mount · Table-top · Floor-mount" },
          { label: "Voice",         value: "English + Regional language" },
          { label: "Connectivity",  value: "Wi-Fi (router-based)" },
          { label: "Power",         value: "5 V DC at each installation point" },
        ],
      },
      {
        id: "standard",
        name: "Standard Token Management System",
        badge: "Wireless · LED",
        headline: "Wireless LED-based customer-flow management for 2-queue setups",
        summary:
          "Cost-effective wireless LED-based customer-flow management. LED display unit shows token number along with counter number (configurable up to 3 lines), with a calling unit keypad (NEXT / RECALL) and a token dispenser with auto-cutter for smooth issuance. Supports up to 2 queues and voice or non-voice announcement options.",
        features: [
          "Completely wireless LED-based customer flow management",
          "Calling unit with numerical keypad — NEXT + RECALL buttons",
          "Small LCD on calling unit shows called token, pending tokens and link status",
          "LED display shows token number along with counter number — up to 3 lines",
          "Token dispenser with auto-cutter for smooth, efficient issuance",
          "Tokens print name, token number, date & time",
          "Supports up to 2 queues",
          "Voice + non-voice announcement options",
        ],
        applications: ["Bank branches", "Mid-size clinics & polyclinics", "Service counters", "Government service windows"],
        specs: [
          { label: "Display",   value: "LED · up to 3 lines (token + counter)" },
          { label: "Queues",    value: "Up to 2" },
          { label: "Calling unit", value: "Keypad + NEXT + RECALL · LCD status" },
          { label: "Dispenser", value: "Token printer with auto-cutter" },
          { label: "Power",     value: "100–240 V AC adapter" },
        ],
      },
      {
        id: "basic",
        name: "Basic Token Management System",
        badge: "Wireless · LED · Single Queue",
        headline: "Entry-level wireless LED token system for single-queue setups",
        summary:
          "An affordable wireless LED-based token system to manage a single queue efficiently — perfect for small clinics, single-counter banks and modest retail outlets. Bright LED display for clear viewing in waiting areas, plug-and-play wireless setup with calling unit, printer and router. No wiring between units.",
        features: [
          "Completely wireless LED-based token management for organised patient / customer flow",
          "Bright LED display panel for clear viewing in waiting areas",
          "Calling unit with numerical keypad — NEXT + RECALL buttons",
          "Small LCD on calling unit shows called token + pending tokens",
          "Token dispenser with print of name, token number, date & time + auto-cutter",
          "Designed to manage a single queue efficiently",
          "Voice announcement in English with any one regional language",
          "Wi-Fi router generates a self-contained network",
          "No wiring required between hardware parts — plug-and-play",
          "5 V power point at every installation point",
        ],
        applications: ["Small clinics", "Single-counter bank branches", "Dental & ENT clinics", "Diagnostic labs", "Boutique service counters"],
        specs: [
          { label: "Display",   value: "Bright LED panel" },
          { label: "Queues",    value: "1 (single-queue)" },
          { label: "Dispenser", value: "Token printer with auto-cutter" },
          { label: "Voice",     value: "English + 1 regional language" },
          { label: "Connectivity", value: "Wi-Fi (router-based)" },
        ],
      },
    ],
  },

  {
    slug: "token-display-system",
    title: "Token Display System (Standalone)",
    category: "queue",
    sectors: ["bfsi", "healthcare", "corporate", "retail", "hospitality"],
    short:
      "Standalone wireless token displays — 4-digit single-counter variants for banks, hospitals and government offices, and 3-digit sequential 3-window variants for restaurant parcel counters, pharmacy windows and retail pickup. Plug-and-play with handheld keypad. No cabling, no IT involvement.",
    description:
      "Our Token Display System is a standalone wireless calling platform for sites that need clean, fast queue management at a single counter — no PC, no IT integration, no cabling. The handheld keypad pairs with the LED display wirelessly, so installation is literally a matter of placing the keypad on the counter, hanging the display, and powering both. The platform ships in two distinct variants: a 4-digit high-visibility version with voice announcements (English plus optional regional language) for banks, hospitals, government offices and service counters; and a 3-digit sequential 3-window version that shows the current token plus the next two in line — ideal for restaurant parcel counters, pharmacy collection windows, retail order pickup and other contexts where customers need a heads-up of what's coming. Both run on standard 230V AC and ship in durable MS powder-coated cabinets.",
    features: [
      "Plug-and-play wireless — only requires power points at the keypad and display",
      "Handheld numeric keypad — sequential token call with a single keypress",
      "High-visibility red 7-segment LED digits",
      "Two display formats — 4-digit single-window or 3-digit 3-window sequential",
      "Voice announcements — English with optional regional language support (Hindi, Kannada, Tamil, Telugu, Malayalam)",
      "Buzzer alert on each call with optional mute for quiet environments",
      "Wireless range 10–15 meters with clear line of sight",
      "Viewing distance 15–20 meters in typical counter halls",
      "Durable MS powder-coated cabinet — long service life",
      "Wall or hanging mount — fits any counter layout",
      "230V AC operation, low power draw",
      "No PC, no LAN, no IT involvement required",
    ],
    specs: [
      { label: "Variants",       value: "4-digit single-counter · 3-digit 3-window sequential" },
      { label: "Digits",         value: "4″ (single-window variant) · 2.3″ (sequential variant)" },
      { label: "Display Style",  value: "Red 7-segment LED — single window or 3-window sequential" },
      { label: "Visibility",     value: "15–20 meters in typical counter halls" },
      { label: "Connectivity",   value: "Wireless (10–15 m range, clear line of sight)" },
      { label: "Input",          value: "Handheld numeric keypad" },
      { label: "Audio",          value: "Buzzer + optional voice (English + Hindi / Kannada / Tamil / Telugu / Malayalam)" },
      { label: "Cabinet",        value: "MS powder-coated, durable" },
      { label: "Mount",          value: "Wall or hanging" },
      { label: "Power",          value: "230 V AC" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    applications: [
      "Bank single-counter operations (FD desks, customer service)",
      "Hospital registration and pharmacy collection",
      "Government service centers and citizen counters",
      "Restaurant parcel and takeaway counters",
      "Pharmacy collection windows",
      "Retail order pickup and service desks",
      "Polyclinic OPDs and small clinics",
      "Food courts and corporate cafeterias",
      "Canteens and small service centers",
    ],
    images: [
      "/images/products/token-display-system/1.jpg",
      "/images/products/token-display-system/2.jpg",
      "/images/products/token-display-system/3.jpg",
    ],
    brochure: "/brochures/Token_Display_System.pdf",
    youtubeId: "",
    variants: [
      {
        id: "token-4digit",
        name: "4-Digit Wireless Token Display",
        icon: "Hash",
        badge: "4″ LED · Single counter · Plug-and-play · Voice in English + regional",
        summary:
          "Single-counter wireless token display engineered for fast, cable-free installation in banks, hospitals, government offices and service centers. Compact handheld keypad enters tokens; clear voice announcements in English with optional regional language support. Two power points are the only site requirement — no cabling, no PC, no IT involvement.",
        features: [
          "4″ high-visibility 7-segment red LED digits",
          "4-digit token range — supports up to 9999 tokens per session",
          "Single-counter operation with handheld numeric keypad",
          "Fully wireless between keypad and display",
          "Voice announcements in English (optional Hindi, Kannada, Tamil, Telugu, Malayalam)",
          "Plug-and-play installation — power points are the only site requirement",
          "Durable MS powder-coated cabinet",
          "Wall or hanging mount options",
          "Buzzer alert on token call with optional mute",
        ],
        applications: [
          "Bank branch counters (single-counter operations)",
          "Hospital reception and registration",
          "Government service centers and Passport Seva subcounters",
          "Small clinic OPDs",
          "Retail service desks",
          "Restaurant order counters",
        ],
      },
      {
        id: "token-3digit-sequential",
        name: "3-Digit Sequential 3-Window Token Display",
        icon: "ListOrdered",
        badge: "2.3″ LED · 3-window sequential · 15–20m view · Parcel counters",
        summary:
          "Compact 3-window sequential display ideal for parcel pickup counters, restaurant takeaway, pharmacy collection windows and small queues where customers need to see not just the current token, but the next two as well. 2.3-inch 7-segment red LED digits readable from 15–20 meters in typical counter halls.",
        features: [
          "3-window display — shows current token plus the next two in sequence",
          "2.3″ red 7-segment LED digits — readable from 15–20 meters",
          "Wireless control box with numeric keypad",
          "10–15 meters wireless range (clear line of sight)",
          "Buzzer alert on each token call with optional mute",
          "Durable MS powder-coated cabinet",
          "Wall-mount design",
          "Low maintenance, no IT integration required",
          "230 V AC power supply",
        ],
        applications: [
          "Restaurant parcel and takeaway counters",
          "Pharmacy collection windows",
          "Small bank counters",
          "Retail order pickup",
          "Outpatient prescription counters",
          "Service-center queue heads",
        ],
      },
    ],
    seo: {
      title: "Token Display System — Wireless 4-Digit Single & 3-Digit Sequential | Infra DigiTech",
      description:
        "Standalone wireless token display systems — 4-digit single-counter for banks, hospitals and government offices; 3-digit 3-window sequential for restaurant parcel counters, pharmacy windows and retail pickup. Plug-and-play, no cabling, voice in English + regional languages. Made in India.",
      keywords: [
        "token display system", "token announcing system",
        "3 digit token display", "4 digit token display",
        "wireless token display", "wireless token display Bangalore", "wireless token display Bengaluru",
        "restaurant parcel token display", "parcel counter token display",
        "pharmacy token display", "pharmacy parcel display",
        "sequential token display", "3 window token display", "3-window token board",
        "wall mounted token display", "LED token board", "counter token calling system",
        "small bank token display", "clinic token display", "service center token display",
        "voice announcement token display", "Hindi Kannada Tamil voice token display",
        "queue calling system", "made in India token display",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // BANKING DISPLAY SYSTEMS
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "bank-interest-rate-display-board",
    title: "Bank Interest Rate Display Board",
    category: "banking",
    sectors: ["bfsi"],
    short:
      "Branch lobby interest-rate boards for FDs, savings, loans and NRI products — centrally updatable, audit-ready.",
    description:
      "Display latest deposit and lending interest rates in a clear, readable format. Ideal for bank branch lobbies and customer counters. Rates update centrally from your CMS or admin software, with optional auto-pull from CBS files. Available in LED 7-segment or full-colour matrix.",
    features: [
      "FD / RD / Savings / Loan / NRI sections",
      "Centralised update from HO",
      "Date-time stamped, auto-archive logs",
      "Customisable layout per bank",
      "Optional vernacular display (Kannada / Hindi / English)",
    ],
    specs: [
      { label: "Display type",      value: "LED 7-segment / Full-colour matrix" },
      { label: "Lines",             value: "8 / 12 / 16 / 24 configurable" },
      { label: "Communication",     value: "Ethernet · Wi-Fi · USB" },
      { label: "Update interface",  value: "Web app · Windows utility" },
      { label: "Power",             value: "100–240 V AC" },
    ],
    applications: ["Bank branches", "NBFCs", "Co-operative banks", "Microfinance offices"],
    images: ["/images/products/bank-interest-rate-display-board/1.jpg", "/images/products/bank-interest-rate-display-board/2.jpg","/images/products/bank-interest-rate-display-board/3.jpg"],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Bank Interest Rate Display Board | Infra DigiTech India",
      description:
        "LED interest rate display boards for bank branches — FD, RD, savings and loan rates with centralised remote update. ISO & CE certified.",
      keywords: [
        "bank interest rate display board", "FD rate board", "RD rate board", "loan rate display",
        "branch interest rate display", "savings rate display", "NRI rate board",
        "bank interest and forex rate display system",
      ],
    },
  },
  {
    slug: "forex-display-board",
    title: "Forex Display Board",
    category: "banking",
    sectors: ["bfsi", "airports", "hospitality"],
    short:
      "Real-time multi-currency forex rate displays for banks, money changers and airport exchanges.",
    description:
      "Forex Display Boards present live buy/sell rates for multiple currencies in crisp 7-segment LED or full-colour pixel formats. Designed for branch banking halls, airport exchange counters and money-changer desks, the system updates rates over LAN, Wi-Fi or 4G with full audit logging for RBI compliance.",
    features: [
      "Up to 16 currencies on a single board",
      "Buy / Sell / Mid columns",
      "Centralised rate update from a single PC or web app",
      "High-brightness LED visible up to 25 m",
      "Optional dual-side display",
      "Tamper-evident logging for RBI/audit compliance",
      "Custom branding header in the bank's colours",
    ],
    specs: [
      { label: "Display type",      value: "Red / Amber / Tri-colour LED · 7-segment" },
      { label: "Currency channels", value: "Configurable 4 / 8 / 12 / 16" },
      { label: "Character height",  value: "1″ / 2.3″ / 4″ / 6″ options" },
      { label: "Communication",     value: "Ethernet · Wi-Fi · RS-485 · Optional 4G" },
      { label: "Power",             value: "100–240 V AC, 50/60 Hz" },
      { label: "Enclosure",         value: "Powder-coated MS / Aluminium / Acrylic-front" },
      { label: "Mounting",          value: "Wall · Hanging · Counter-top" },
    ],
    applications: ["Bank branches", "Airport money-exchange counters", "Authorised money changers", "Hotel forex desks", "Travel agencies"],
    images: ["/images/products/forex-display-board/1.jpg", "/images/products/forex-display-board/2.jpg"],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Forex Display Board Manufacturer in India | Infra DigiTech",
      description:
        "Buy LED forex display boards for banks, airports and money changers. Real-time multi-currency buy/sell display from ISO & CE certified manufacturer.",
      keywords: ["forex display board", "currency rate board", "money changer display", "bank forex board", "live forex rate display"],
    },
  },
  {
    slug: "gold-silver-rate-display-system",
    title: "Gold & Silver Rate Display System",
    category: "banking",
    sectors: ["bfsi", "retail"],
    short:
      "Live gold, silver and bullion rate boards for jewellers, banks and bullion traders.",
    description:
      "Display live 24K / 22K / 18K gold and silver rates with auto-feed integration from your trading system. Designed for showroom storefronts, bank gold-loan counters and bullion exchanges. Indoor and outdoor (IP55, sun-readable) variants.",
    features: [
      "24K / 22K / 18K + Silver columns",
      "Per gram / per 10g / per kg toggle",
      "Auto rate update via API / serial",
      "High-brightness storefront LEDs",
      "Optional time-of-day rate scrolling",
    ],
    specs: [
      { label: "Display type",   value: "LED 7-segment · Full-colour matrix" },
      { label: "Channels",       value: "4 / 6 / 8 metals × purities" },
      { label: "Communication",  value: "Ethernet · Wi-Fi · Serial" },
      { label: "Outdoor variant",value: "Yes (IP55, sun-readable)" },
    ],
    applications: ["Jewellery showrooms", "Gold-loan branches", "Bullion exchanges", "Co-operative banks"],
    images: ["/images/products/gold-silver-rate-display-system/1.jpg", "/images/products/gold-silver-rate-display-system/2.jpg", "/images/products/gold-silver-rate-display-system/3.jpg", "/images/products/gold-silver-rate-display-system/4.jpg"],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Gold & Silver Rate Display Boards | Infra DigiTech",
      description:
        "Live gold and silver rate display systems for jewellers and bullion traders. Auto-feed, sun-readable LED. ISO & CE certified.",
      keywords: ["gold rate display", "silver rate display", "bullion display board", "jewellery rate board", "gold loan rate display"],
    },
  },
  {
    slug: "bank-locker-information-display",
    title: "Bank Locker Information Display",
    category: "banking",
    sectors: ["bfsi"],
    short:
      "Locker rent, availability and notice information display for bank locker rooms.",
    description:
      "Compact locker information displays show available locker sizes, current rent, GST-inclusive amounts, branch contact and dynamic notices for the locker hall. Update from any networked PC.",
    features: [
      "Locker size grid (S / M / L / XL)",
      "Rent, GST and availability columns",
      "Notice ticker for branch announcements",
      "Time and date display",
      "Tamper-resistant enclosure",
    ],
    specs: [
      { label: "Display",      value: "Tri-colour LED matrix" },
      { label: "Size",         value: "32″ / 43″ / 55″" },
      { label: "Communication",value: "Ethernet · Wi-Fi" },
      { label: "Mount",        value: "Wall flush" },
    ],
    applications: ["Bank locker rooms", "Strong room halls", "Branch reception"],
    images: ["/images/products/bank-locker-information-display/1.jpg", "/images/products/bank-locker-information-display/2.jpg"],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Bank Locker Information Display | Infra DigiTech",
      description:
        "Bank locker rent and availability display systems for branch locker halls. Centrally updatable, tamper-resistant.",
      keywords: ["locker information display", "bank locker rent display", "locker rate board"],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // TIME SYNCHRONIZATION (Advanced GPS → Multi-zone World Clock)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "gps-digital-clock",
    title: "GPS Synchronised Digital Clock",
    category: "time-sync",
    sectors: ["corporate", "airports", "factories", "bfsi", "sports", "healthcare"],
    short:
      "GPS-synchronised digital clocks for labour rooms (time-of-birth recording), pharma cleanrooms (SS 304 / IP65), industrial floors and master-slave railway / airport installations. Indoor and outdoor variants, 3″ to 12″ digits, single / double / three-sided mounts.",
    description:
      "GPS Synchronised Digital Clocks lock directly to GPS satellites for globally-accurate, millisecond-precision time, with NTP (LAN) and stand-alone RTC sync fallbacks for sites where satellite reception is impractical. The same engineered core is packaged for four very different environments — labour rooms recording time-of-birth, pharmaceutical cleanrooms under FDA / GMP audit, industrial floors and IT campuses, and large facilities running master-slave architectures across railway stations, airports and multi-building campuses. Each environment-specific variant is detailed below. The platform supports 2.3″ to 12″ digit heights, single / double / three-sided mounts, MS / SS / SS 304 enclosures, and IP20 to IP66 ratings — every clock is built to its installation, not picked off a shelf.",
    features: [
      "Three sync modes — GPS · Network / NTP · Stand-alone RTC",
      "± 1 ms accuracy vs UTC with GPS lock · ± 1 second IST in master-slave deployments",
      "Internal RTC maintains time during GPS signal loss",
      "Battery backup preserves timing during power outages",
      "Digit heights from 2.3″ to 12″",
      "12 / 24-hour formats · HH:MM and HH:MM:SS display modes",
      "Single-sided, double-sided and three-sided mounting options",
      "Date · Day · Month and temperature display options on selected models",
      "MS powder-coated · Stainless Steel · SS 304 cleanroom-grade enclosures",
      "Industrial-grade IP20 to IP66 ratings — indoor and fully-waterproof outdoor variants",
      "Wall, ceiling, hanging, flush-mount and panel-mount options",
      "LED and dot-matrix display types · P10 LED outdoor option",
    ],
    specs: [
      { label: "Time source",      value: "GPS · Network / NTP · IRIG · Stand-alone RTC" },
      { label: "Accuracy",         value: "± 1 ms vs UTC (GPS lock) · ± 1 second IST (master-slave)" },
      { label: "Digit height",     value: "2.3″ / 4″ / 6″ / 8″ / 10″ / 12″" },
      { label: "Display type",     value: "LED · Dot-matrix · P10 LED modules" },
      { label: "Format",           value: "12 / 24-hour · HH:MM · HH:MM:SS · Date / Calendar" },
      { label: "Sides",            value: "Single-sided · Double-sided · Three-sided" },
      { label: "Material",         value: "MS powder coat · Stainless Steel · SS 304 cleanroom-grade" },
      { label: "Enclosure",        value: "IP20 to IP66 — indoor IP54 / outdoor IP65–IP66" },
      { label: "Backup",           value: "RTC battery + power-failure battery backup" },
      { label: "Mount",            value: "Wall · Ceiling · Hanging · Flush mount · Panel" },
      { label: "Architecture",     value: "Standalone · Master-Slave (1 master : N slaves over RS-485 / RF)" },
      { label: "Indoor / Outdoor", value: "Both — weatherproof outdoor variants available" },
    ],
    applications: [
      "Labour rooms — HH:MM:SS time-of-birth recording for birth certificates",
      "Operation Theatres — surgical timing precision",
      "ICU / NICU / Critical Care — uniform clinical time-stamping",
      "Pharmaceutical cleanrooms — GMP / FDA-compliant SS 304 clocks",
      "Railway stations & airports — master-slave synchronized displays",
      "Factories & manufacturing — shift timing, production schedules",
      "IT campuses & corporate offices — synchronised time across buildings",
      "Schools & universities — class and exam timing",
      "Server rooms & data centres — log timestamp accuracy",
      "Sports venues, gardens, outdoor public spaces — IP65 weatherproof",
    ],
    images: [
      "/images/products/gps-digital-clock/1.jpg",
      "/images/products/gps-digital-clock/2.jpg",
      "/images/products/gps-digital-clock/3.jpg",
      "/images/products/gps-digital-clock/4.jpg",
    ],
    brochure: "/brochures/GPS_Clocks.pdf",
    youtubeId: "",
    variants: [
      {
        id: "labour-room",
        name: "Labour Room / Time-of-Birth Clock",
        icon: "Baby",
        badge: "Maternity · OT · ICU · NABH-ready",
        summary:
          "Birth certificates legally require the exact second-precision time of birth. Our GPS-synchronised clocks in labour and delivery rooms display 100% accurate HH:MM:SS satellite time, eliminating any dispute over timing. Widely installed in Bengaluru maternity hospitals, OTs and NICUs.",
        features: [
          "HH:MM:SS display for second-precision time-of-birth recording",
          "100% GPS-synchronised time — zero manual adjustment",
          "Internal RTC maintains time if GPS signal is temporarily lost",
          "Battery backup keeps time during power outages",
          "Wall mount, ceiling hung, or hanging for maximum visibility in delivery suites",
          "4″ / 6″ / 8″ digit heights for clear readability across the room",
          "Single-side or double-side variants for two-way visibility",
          "Hygienic MS powder-coated or Stainless Steel enclosure — cleanable with disinfectants",
        ],
        applications: [
          "Labour rooms / Delivery rooms",
          "Operation Theatres",
          "ICU / NICU / Critical Care",
          "Maternity wards",
          "Birth certificate documentation",
        ],
        models: ["DT-4CLK-01", "DT/DTCLK-08", "DT/DSCLK"],
      },
      {
        id: "pharma-cleanroom",
        name: "Pharma & Cleanroom GPS Clock",
        icon: "FlaskConical",
        badge: "SS 304 · IP65 · GMP · FDA · ISO Cleanroom",
        summary:
          "Pharmaceutical cleanrooms and sterile manufacturing environments require both extreme time precision (for GMP / FDA compliance) and hygiene-grade enclosures. Our 304-grade Stainless Steel GPS clocks combine atomic-accurate satellite synchronisation with non-porous flush-mount housing that withstands chemical disinfectants without shedding particles.",
        features: [
          "304-grade Stainless Steel housing — non-porous, corrosion-resistant",
          "Flush mount design for modular cleanroom panels — no ledges for dust or bacteria",
          "IP65 rated front plate — washable, dust + water protected",
          "Atomic-accurate GPS time sync down to millisecond precision",
          "RTC fallback when GPS unavailable",
          "12 / 24-hour HH:MM:SS display",
          "FDA / GMP / ISO cleanroom standard compliant",
          "Standard 4″ digit height — larger sizes available on request",
        ],
        applications: [
          "Pharmaceutical cleanrooms",
          "Sterile manufacturing facilities",
          "Hospital cleanrooms / NICU",
          "Biotech and life-sciences laboratories",
          "Vaccine production lines",
        ],
        models: ["DIGITECH GPS SS (Pharma)"],
      },
      {
        id: "industrial-corporate",
        name: "Industrial & Corporate GPS Clock",
        icon: "Factory",
        badge: "Indoor + Outdoor · Single / Double-Side · 4″–12″",
        summary:
          "Our most widely-deployed family. GPS-synchronised industrial-grade clocks for factories, IT campuses, corporate offices, server rooms, schools and public spaces. Multiple digit heights (4″ to 12″), single or double-sided, indoor or outdoor (IP54 / IP65 / IP66), with P10 LED variants for high-visibility outdoor applications. Deployed across Wipro, Toyota Kirloskar and Lakshmi Vacuum Technologies.",
        features: [
          "GPS satellite sync · ± 1 ms accuracy · IRIG support on selected models",
          "4″, 6″, 8″, 10″ and 12″ digit heights — pick by viewing distance",
          "Single-sided or Double-sided variants for two-way visibility",
          "Wall mount, ceiling hang or hanging mount",
          "IP54 indoor / IP65 outdoor / IP66 fully waterproof options",
          "MS powder-coated or Stainless Steel cabinet",
          "P10 LED outdoor variant — high-brightness modules readable in direct sunlight",
          "Date · Day · Month and temperature display options on selected models",
          "12 / 24-hour formats · HH:MM or HH:MM:SS",
          "Auto-brightness via built-in light sensor on outdoor variants",
        ],
        applications: [
          "Factories and manufacturing units",
          "IT campuses and corporate offices",
          "Server rooms and data centres",
          "Schools and educational institutions",
          "Hospitals (non-clinical areas) and clinics",
          "Garment factories with multiple shop floors",
          "Outdoor public spaces, gardens, parking",
        ],
        models: ["DTS/OCLK-0602", "DT-6CLK-02", "DT/DSCLK", "DT-CLK", "P10 LED Clock"],
      },
      {
        id: "master-slave",
        name: "Master-Slave Synchronised Clock System",
        icon: "Network",
        badge: "Railway · Airport · Multi-Clock Facility · RS-485 Distribution",
        summary:
          "For large facilities — railway stations, airports, hospital campuses, pharmaceutical factories, multi-building corporate sites — where a single GPS unit needs to drive 10+ synchronised displays. A central GPS Master Clock receives satellite signals (often via external rooftop antenna) and distributes precise time over wired RS-485 or wireless links to every Slave Clock across the campus.",
        features: [
          "Central GPS Master Clock + multiple Slave display units",
          "External rooftop GPS antenna for buildings with poor signal penetration",
          "RS-485 wired distribution — typical run up to 100m+ between master and slave",
          "Wireless RF slave-clock variants also available",
          "100% time uniformity across all displays in the facility",
          "± 1 second accuracy to Indian Standard Time (IST)",
          "Slave displays available in 2.5″ to 12″+ digit heights",
          "Date / Day / Month / Temperature display on selected slaves",
          "Indoor IP54 and outdoor IP65 slaves can mix in the same system",
        ],
        applications: [
          "Railway stations and platforms",
          "Airports and transit hubs",
          "Multi-building hospital campuses",
          "Pharmaceutical factory campuses",
          "Government office complexes",
          "Large factory complexes",
        ],
        models: ["Master Clock + RS-485 / RF Slave Network"],
      },
    ],
    seo: {
      title: "GPS Digital Clock — Labour Room, Pharma, Industrial, Master-Slave | Infra DigiTech India",
      description:
        "GPS synchronised digital clocks for labour rooms (time-of-birth recording), pharmaceutical cleanrooms (SS 304, IP65, GMP/FDA), industrial and corporate environments, and master-slave railway/airport installations. Millisecond accuracy, 4″–12″ digits, single/double-sided, indoor/outdoor IP65. ISO 9001:2015 & CE certified manufacturer in Bengaluru.",
      keywords: [
        "GPS digital clock", "GPS synchronised clock", "GPS clock labour room",
        "time of birth clock", "labour room clock", "delivery room clock", "maternity hospital clock",
        "pharma GPS clock", "cleanroom GPS clock", "SS 304 GPS clock", "FDA GPS clock", "GMP cleanroom clock",
        "master slave clock system", "railway station clock", "airport GPS clock",
        "RS-485 clock distribution", "P10 LED clock", "outdoor P10 GPS clock",
        "outdoor digital clock IP65", "IP66 outdoor clock",
        "NTP clock", "network synchronised clock", "RTC clock", "stand-alone RTC clock",
        "industrial digital clock", "hospital digital clock", "factory digital clock",
        "double-sided digital clock", "three-sided digital clock", "ceiling mount GPS clock",
        "OT timer clock", "NICU clock", "ICU clock", "Bengaluru GPS clock manufacturer",
      ],
    },
  },
  {
    slug: "international-world-clock",
    title: "International World Clock (Multi-Time Zone)",
    category: "time-sync",
    sectors: ["corporate", "airports", "hospitality", "bfsi"],
    short:
      "Multi-zone international clocks — GPS, Network/NTP, RTC standalone and custom multi-zone wall installations. Any number of time zones, any character height, horizontal or vertical layout, indoor or outdoor. Installed at Wipro, Infosys, Thomson Reuters, Allianz, Huawei Technologies India and Toyoda Gosei India.",
    description:
      "Our International / Time-Zone Clocks let global organizations track local time across any number of cities simultaneously — on a single panel or across an architectural multi-clock wall. The same engineered core ships in four configurations to match how each customer prefers to keep time accurate: GPS satellite synchronization, Network/NTP sync over corporate LAN, battery-backed RTC standalone with wireless-remote setting, or a fully custom multi-zone wall installation for hotel lobbies and large dealing rooms. Available indoor or outdoor, with character heights, layout (horizontal or vertical), city labels and cabinet finish customized to the site. Trusted by Wipro, Infosys, Thomson Reuters, Rajiv Gandhi Institution of Technology, Allianz, Huawei Technologies India, Toyoda Gosei India, Silver Spark Apparels, Silver Crest Clothing and AMS India.",
    features: [
      "Four sync configurations — GPS · Network / NTP · RTC standalone · Custom Multi-Zone Wall",
      "Display any number of time zones on a single panel or wall arrangement",
      "Horizontal or vertical layout — fits the architecture and space",
      "Any character height — 2.2″, 4″ and larger high-brightness LED options",
      "Indoor and outdoor (IP65+) variants available",
      "12 / 24-hour format selectable per zone independently",
      "Time-zone offsets aligned to IST or any reference zone",
      "Industrial-grade metal cabinets — long service life",
      "Time setting via wireless remote (for RTC variants)",
      "Custom city labels (vinyl, etched metal or backlit)",
      "Custom cabinet finish — brushed, painted, anodized",
      "Internal RTC backup maintains time during GPS or power loss",
      "1-year manufacturing warranty",
    ],
    specs: [
      { label: "Zones",         value: "Configurable — 4, 6, 8, 12, 16+ on one panel; 20+ on wall installations" },
      { label: "Sync",          value: "GPS · Network / NTP · RTC standalone (wireless remote)" },
      { label: "Character height", value: "2.2″ · 4″ · larger sizes available" },
      { label: "Layout",        value: "Horizontal · Vertical · Custom wall arrangement" },
      { label: "Display",       value: "LED 7-segment · 12 / 24-hour selectable per zone" },
      { label: "Body",          value: "MS powder-coated · Stainless Steel · Custom finishes" },
      { label: "Indoor / Outdoor", value: "Both — outdoor IP65+ available" },
      { label: "Mount",         value: "Wall hanging · Hook mount · Flush · Suspended" },
      { label: "Backup",        value: "Internal RTC · Battery backup" },
      { label: "Warranty",      value: "1 year against manufacturing defects" },
    ],
    applications: [
      "Corporate offices & MNCs — IT campuses (Wipro, Infosys, Huawei)",
      "Dealing rooms and trading floors (Thomson Reuters)",
      "Insurance and BPO international desks (Allianz, AMS India)",
      "Manufacturing offices with global parent (Toyoda Gosei India)",
      "Garment factories with international clients (Silver Spark, Silver Crest)",
      "Airline / airport airline desks and FIDS-adjacent displays",
      "Hotel lobbies — multi-city display for international guests",
      "Educational institutions and engineering colleges (Rajiv Gandhi Institution of Technology)",
      "Control rooms and mission-critical operations",
      "Travel agencies and tour-operator offices",
    ],
    images: ["/images/products/international-world-clock/1.jpg", "/images/products/international-world-clock/2.jpg"],
    brochure: "/brochures/TimeZone_Clock.pdf",
    youtubeId: "",
    variants: [
      {
        id: "world-gps",
        name: "GPS Synchronized World Clock",
        icon: "Globe2",
        badge: "Atomic accuracy · Auto-sync · IST aligned · No drift",
        summary:
          "GPS satellite synchronization for the world's busiest control rooms, airport terminals, news desks and dealing rooms. Atomic-accurate time across as many zones as needed, with zero manual intervention. Used by Thomson Reuters, Allianz and Huawei Technologies India where time precision directly drives operations.",
        features: [
          "GPS satellite sync — millisecond accuracy, never drifts",
          "Any number of time zones on one panel — 4, 6, 8, 12, 16 or more",
          "Horizontal or vertical wall layout — fits your space and aesthetic",
          "2.2″, 4″ or larger high-brightness LED character heights",
          "12 / 24-hour format selectable per zone independently",
          "Indoor and outdoor (IP65+) variants",
          "Internal RTC fallback if GPS signal is temporarily lost",
          "Industrial-grade metal cabinet — long service life",
        ],
        applications: [
          "Control rooms and mission-critical operations",
          "International airports and transit hubs",
          "Dealing rooms and trading floors (Thomson Reuters)",
          "Insurance international desks (Allianz)",
          "Telecom and IT campuses (Huawei, Wipro, Infosys)",
        ],
      },
      {
        id: "world-ntp",
        name: "Network / NTP-Based World Clock",
        icon: "Network",
        badge: "LAN sync · IT-campus ready · Network-grade accuracy",
        summary:
          "Syncs over your facility's existing LAN/ethernet using NTP — ideal for IT campuses, corporate offices and dealing rooms where the network is robust and IT prefers LAN-based timing over external GPS antennas. Used at Wipro, Infosys, Huawei Technologies India and AMS India where ethernet runs everywhere.",
        features: [
          "Plug-in ethernet sync from the corporate NTP server",
          "2.3″ red LED character height, larger sizes on request",
          "MS powder-coated cabinet — durable for office and industrial use",
          "Country / city labels via clean vinyl stickers",
          "Wireless remote for fallback time setting",
          "Indoor variant — clean aesthetic for offices and lobbies",
          "Time-zone offsets aligned to IST or any reference zone",
          "Compatible with corporate IT network policies and firewalls",
        ],
        applications: [
          "Wipro / Infosys / Huawei / AMS India corporate offices",
          "IT and engineering campuses",
          "Government office complexes",
          "Educational institutions (Rajiv Gandhi Institution of Technology)",
          "BPO / KPO and shared-service centres",
        ],
      },
      {
        id: "world-rtc",
        name: "RTC Standalone World Clock",
        icon: "Clock",
        badge: "Battery RTC · Wireless remote · No infrastructure needed",
        summary:
          "For sites where neither GPS antennas nor LAN sync is practical — small offices, travel agencies, executive cabins, remote installations. Battery-backed RTC keeps time accurate for months, and time / time-zone offsets are set via a wireless remote control.",
        features: [
          "Battery-backed Real-Time-Clock — no GPS or LAN required",
          "Wireless remote control for time setting and zone offsets",
          "Long battery life — months between maintenance touchpoints",
          "2.2″ / 4″ LED character heights, single or multi-zone configurations",
          "Indoor variant — lightweight, easy to install",
          "Country labels via vinyl stickers — professional finish",
          "Drift-free for months at typical office temperatures",
          "Wall-hanging or hook mounting — no wall wiring needed",
        ],
        applications: [
          "Small offices and travel agencies",
          "Executive cabins and boardrooms",
          "Remote sites without IT infrastructure",
          "Retrofit installations in older buildings",
          "Mobile or temporary deployments",
        ],
      },
      {
        id: "world-wall",
        name: "Custom Multi-Zone Wall Installation",
        icon: "LayoutGrid",
        badge: "Custom · 10+ zones · Hotel lobby · Architectural feature",
        summary:
          "Showpiece multi-zone wall arrangements for hotel lobbies, large dealing rooms, executive boardrooms and airport main halls. Customise the number of cities (10, 15, 20+), city labels, layout (horizontal grid, vertical column or staggered), cabinet finish and character height. The architectural feature your space deserves.",
        features: [
          "Any number of time zones — 10, 15, 20 or more on a single wall",
          "Horizontal grid, vertical column, staggered or fully bespoke layouts",
          "2.2″ to 6″+ character heights — mix sizes for visual hierarchy",
          "Custom city labels — vinyl, etched metal or backlit",
          "Custom cabinet finish — brushed metal, painted, anodized",
          "GPS, NTP or RTC sync — pick the right method per installation",
          "12 / 24-hour format selectable per zone independently",
          "Architectural mounting — flush, surface, recessed or suspended",
        ],
        applications: [
          "Hotel lobbies with international guest base",
          "Large dealing rooms and trading floors",
          "Executive boardrooms and global meeting rooms",
          "Airport main halls and FIDS-adjacent walls",
          "Corporate headquarters' reception walls",
        ],
      },
    ],
    seo: {
      title: "International World Clock — Multi Time Zone GPS, NTP, RTC & Custom Wall | Infra DigiTech",
      description:
        "Multi-zone international world clocks — GPS, Network/NTP, RTC standalone with wireless remote, and custom multi-zone wall installations. Any number of time zones, horizontal or vertical layout, indoor or outdoor. Deployed at Wipro, Infosys, Thomson Reuters, Allianz, Huawei Technologies India and Toyoda Gosei India. ISO 9001:2015 & CE certified Bengaluru manufacturer.",
      keywords: [
        "international clock", "world clock", "multi time zone clock", "multi-zone clock",
        "time zone wall clock", "office world clock", "hotel lobby world clock",
        "GPS world clock", "NTP world clock", "network world clock",
        "RTC world clock", "remote control world clock",
        "Wipro world clock", "Infosys world clock", "Thomson Reuters dealing room clock",
        "Allianz international clock", "Huawei India clock",
        "control room world clock", "dealing room clock", "trading floor clock",
        "airport time zone clock", "BPO multi time zone clock",
        "custom multi-zone clock wall", "executive boardroom clock",
        "horizontal world clock", "vertical world clock",
        "outdoor international clock", "indoor world clock",
        "Bengaluru world clock manufacturer", "Bangalore international clock supplier",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // FOOD COUNTER & SERVICE DISPLAYS (LCD → LED)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "food-counter-display",
    title: "Food Counter / Order-Ready Display System",
    category: "food-counter",
    sectors: ["hospitality", "retail", "corporate"],
    short:
      "Wireless food counter / order-ready displays for restaurants, food courts and cafeterias — available in LED and LCD (multi-language) variants.",
    description:
      "Restaurant order display systems for QSRs, food courts, hotel buffets, hospital canteens and corporate cafeterias. Two variants — a bright wireless LED display (up to 3 token numbers, 7-segment 2.3″ digits) and a Wi-Fi enabled LCD system with multi-language Ding-Dong voice announcement (English, Hindi, Kannada, Telugu, Tamil). Plug-and-play wireless setup, durable powder-coated mild steel or heavy-duty ABS cabinets.",
    features: [
      "“YOUR ORDER IS READY” headline panel",
      "Up to 3 token numbers shown simultaneously (LED) or queued (LCD)",
      "Numeric keypad with ON/OFF and 3-digit mini display mirror",
      "CALL + REPEAT keys (LCD variant)",
      "Buzzer or multi-language Ding-Dong voice alert",
      "Wireless / Wi-Fi setup — only power connections needed",
      "Standalone closed local network managed by a dedicated Wi-Fi router (LCD)",
      "Plug-and-play — no data cabling",
      "Durable black powder-coated MS / heavy-duty ABS cabinet (LED)",
      "HDMI-connected high-visibility LCD monitor (LCD variant)",
    ],
    specs: [
      { label: "Variants",     value: "Wireless LED · Wi-Fi LCD" },
      { label: "LED digits",   value: "7-segment, 2.3″ height" },
      { label: "Tokens shown", value: "Up to 3 (LED) · queued (LCD)" },
      { label: "Voice",        value: "Ding-Dong + voice in English, Hindi, Kannada, Telugu, Tamil (LCD)" },
      { label: "Network",      value: "Wireless RF (LED) · Wi-Fi router (LCD)" },
      { label: "Mount",        value: "Wall-mount" },
      { label: "Cabinet",      value: "Powder-coated MS or ABS (LED) · standard LCD monitor (LCD)" },
    ],
    applications: ["QSRs / fast food", "Food courts", "Hotel buffets", "Hospital canteens", "Corporate cafeterias", "Bakeries & sweet shops"],
    images: [
      "/images/products/food-counter-display/1.jpg",
      "/images/products/food-counter-display/2.jpg",
    ],
    brochure: "/brochures/Food_Counter_Display.pdf",
    youtubeId: "",
    seo: {
      title: "Food Counter Display — Wireless LED & Wi-Fi LCD | Infra DigiTech",
      description:
        "Wireless LED and Wi-Fi LCD food counter / order-ready displays for QSRs, food courts and cafeterias. Multi-language voice. Manufacturer in India.",
      keywords: [
        "food counter display", "order ready display", "QSR display",
        "food court display", "restaurant token display", "food delivery counter display system",
        "wireless food counter display", "LCD food counter", "LED food counter display",
        "multi language order display",
      ],
    },
    tiers: [
      {
        id: "advanced",
        name: "Food Counter Display — Wi-Fi LCD",
        badge: "Wi-Fi · LCD · Multi-language Voice",
        headline: "Wi-Fi enabled LCD display with multi-language voice announcement",
        summary:
          "Wi-Fi enabled LCD display system designed for organising customer flow in restaurants and parcel counters. A central CPU acts as hub, processing inputs from the keypad and displaying numbers. Multi-language voice announcement (English, Hindi, Kannada, Telugu, Tamil) plays a Ding-Dong alert before announcing the order number.",
        features: [
          "CPU (Main Processing Unit) acts as central hub",
          "Keypad calling unit with CALL, REPEAT and 11 keys + small inbuilt display",
          "Display Unit — high-visibility LCD monitor (HDMI)",
          "Wi-Fi router creates a closed standalone network — plug-and-play",
          "Multi-Language voice — English, Hindi, Kannada, Telugu, Tamil",
          "Ding-Dong alert before each announcement",
        ],
        applications: ["Restaurants & food courts", "Parcel counters", "Cloud kitchens"],
        specs: [
          { label: "Display",   value: "High-visibility LCD monitor (HDMI)" },
          { label: "Calling unit", value: "Keypad with CALL, REPEAT + 11 keys" },
          { label: "Network",   value: "Wi-Fi router (closed local network)" },
          { label: "Voice",     value: "Ding-Dong + multi-language (Eng / Hin / Kan / Tel / Tam)" },
        ],
      },
      {
        id: "basic",
        name: "Food Counter Display — Wireless LED",
        badge: "Wireless · LED",
        headline: "Wireless LED restaurant order display — bright, durable, plug-and-play",
        summary:
          "Wireless LED restaurant order display consisting of a wall-mounted display board (7-segment 2.3″ LEDs) and a numeric control keypad. The display board can show up to 3 distinct token numbers at once. Keypad features an ON/OFF switch and 3-digit mini-display mirroring the called number. Eliminates data cabling — only power connections are needed.",
        features: [
          "Wall-mounted display board, 7-segment 2.3″ LED digits",
          "Shows up to 3 distinct token numbers at once",
          "Numeric control keypad with ON/OFF + 3-digit mini-display mirror",
          "Wireless — only power connections needed",
          "Buzzer alert to notify customers",
          "Durable cabinet — black powder-coated mild steel or heavy-duty ABS",
        ],
        applications: ["QSRs", "Bakeries", "Sweet shops", "Cafeterias", "Hospital canteens"],
        specs: [
          { label: "Display",    value: "7-segment LED, 2.3″ digits — up to 3 tokens" },
          { label: "Keypad",     value: "Numeric + ON/OFF + 3-digit mini display" },
          { label: "Audio",      value: "Buzzer / simple alert" },
          { label: "Network",    value: "Wireless RF" },
          { label: "Cabinet",    value: "Powder-coated mild steel or ABS" },
        ],
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────
  // INFORMATION, SPORTS & INDUSTRIAL DISPLAYS
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "weather-temperature-display",
    title: "Weather & Temperature Information Display",
    category: "sports",
    sectors: ["corporate", "airports", "factories", "sports", "healthcare", "hospitality"],
    short:
      "LED weather display — shows time, date, temperature, humidity, AQI and forecast on a high-clarity panel. Available in single-colour indoor LED and P10 LED variants for indoor or outdoor use. Centrally controlled via remote or dedicated mobile app.",
    description:
      "We are a leading supplier of Weather & Temperature Information Display Boards designed for clear, effective communication across corporates, airports, factories, hospitals, hotels and public buildings. Built to deliver real-time environmental information with high clarity, long-lasting performance and minimal maintenance. Available in a single-colour indoor LED panel and a P10 LED variant that is bright enough for outdoor placement, both rendering time, date, temperature, humidity, AQI and forecast data — controlled through a remote or dedicated mobile app for easy daily updates.",
    features: [
      "Available in standard single-colour indoor LED and P10 LED variants",
      "P10 LED variant — sunlight-readable, suitable for indoor or outdoor placement",
      "Time, date, temperature, humidity, AQI and forecast rotation",
      "Centrally controlled via remote or dedicated mobile app",
      "Customisable layouts and corporate branding header",
      "On-board precision sensors or BMS / weather API feed",
      "Low maintenance — long-lasting LED modules",
      "Wall, panel, hanging or double-sided mounts"
    ],
    specs: [
      { label: "Display Type",    value: "Indoor LED · P10 LED (indoor or outdoor)" },
      { label: "Display Colour",  value: "Single Colour (standard) · multi-colour on P10" },
      { label: "Pixel Pitch",     value: "LED matrix · 10 mm pitch on P10" },
      { label: "Usage",           value: "Indoor (standard) · Indoor or Outdoor (P10)" },
      { label: "Control Mode",    value: "Remote / Mobile App" },
      { label: "Sensors",         value: "Temperature, Humidity, AQI (PM2.5 / PM10 / CO2 / TVOC)" },
      { label: "Mount",           value: "Wall / Panel / Hanging / Pole (outdoor)" },
      { label: "Power",           value: "100-240 V AC" }
    ],
    applications: [
      "Corporate lobbies & receptions",
      "Airport landside / airside info zones",
      "Factory gates & canteen lobbies",
      "Stadiums & sports complexes",
      "Hospital OPD waiting halls",
      "Hotel entrances & resort properties"
    ],
    images: [
      "/images/products/weather-temperature-display/1.jpg",
      "/images/products/weather-temperature-display/2.jpg"
    ],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Weather & Temperature Display Board (LED · P10 Indoor / Outdoor) | Infra DigiTech",
      description:
        "LED weather display boards showing time, temperature, humidity, AQI and forecast — single-colour indoor LED and P10 LED variants for indoor or outdoor use. Remote and mobile-app controlled. Manufacturer in Bengaluru, India.",
      keywords: [
        "weather display board", "temperature display board", "humidity display board",
        "AQI display board", "weather information display", "indoor LED weather display",
        "outdoor LED weather display", "P10 LED weather display",
        "P10 outdoor weather display board",
        "environment information display", "weather display single colour LED",
        "remote controlled weather display", "weather display manufacturer India"
      ]
    }
  },

  {
    slug: "pricing-display-board",
    title: "Pricing Display Board / System",
    category: "food-counter",
    sectors: ["retail", "hospitality", "corporate"],
    short:
      "MS powder-coated indoor pricing display board for restaurants, food courts, sweet shops, fuel stations and retail outlets — available in LED and LCD variants, centrally updatable via remote or a dedicated mobile app.",
    description:
      "We are a leading supplier of Pricing Display Boards designed for clear and effective price communication across restaurants, food courts, retail outlets, fuel stations and vendor markets. Available in two variants — a high-brightness LED board for large halls and street-side use, and an LCD board for modern indoor counters where pricing can be updated instantly from a mobile app. Both run on durable MS powder-coated cabinets in hanging and wall-mount form. All boards (along with our interest rate, gold and silver rate boards) can be controlled remotely or via a dedicated mobile app — no PC required.",
    features: [
      "Available in LED and LCD variants — pick the right brightness, size and finish for the setting",
      "LCD variant — pricing can be updated instantly from a dedicated mobile app",
      "Multi-line item by price grid (configurable rows)",
      "Centralised price update via remote OR dedicated mobile app",
      "Rupee formatting, GST inclusive / exclusive toggle",
      "Combo / offer / strike-through-price modes",
      "Idle ad-zone for promotions and brand messaging",
      "Durable MS powder-coated cabinet",
      "Hanging and wall-mount variants",
      "Multi-language labels (English, Hindi, regional)",
      "Schedule-based price changes for happy hours and shifts",
      "No PC needed — operate end-to-end from your phone"
    ],
    specs: [
      { label: "Cabinet Material", value: "MS Powder-Coated" },
      { label: "Mounting Type",    value: "Hanging / Wall-Mount" },
      { label: "Display Type",     value: "Indoor LED (single / tri-colour) · LCD variant with mobile-app pricing" },
      { label: "Control",          value: "Remote / Dedicated Mobile App (LED + LCD)" },
      { label: "Rows / items",     value: "Configurable 4 / 8 / 12 / 24 / custom" },
      { label: "Power",            value: "100-240 V AC" }
    ],
    applications: [
      "Restaurants, QSRs and food courts",
      "Cloud kitchens & bakeries",
      "Sweet shops, vegetable & fruit vendors",
      "Fuel / petrol pump price boards",
      "Retail showrooms & service outlets",
      "Corporate cafeterias"
    ],
    images: [
      "/images/products/pricing-display-board/1.jpg",
       "/images/products/pricing-display-board/2.jpg"
    ],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Pricing Display Board / System (LED & LCD) | Mobile-App Controlled | Infra DigiTech",
      description:
        "Indoor pricing display boards for restaurants, food courts, fuel stations and retail — available in LED and LCD variants. MS powder-coated, hanging / wall-mount, remote and mobile-app controlled. No PC required.",
      keywords: [
        "pricing display board", "price display system", "LED pricing board",
        "LCD pricing board", "LCD price display board", "mobile app pricing display",
        "vendor price board", "menu price display", "fuel pump price display",
        "petrol price display board", "rate display board", "MS powder coated price board",
        "remote controlled price board", "mobile app price display",
        "restaurant menu price display", "food court price board"
      ]
    }
  },

  {
    slug: "church-prayer-display-board",
    title: "Church Prayer / LED Information Display Board",
    category: "sports",
    sectors: ["hospitality", "corporate", "retail"],
    short:
      "Indoor LED church prayer / hymn display board for churches, prayer halls and religious institutions — shows hymn numbers, page references and announcements with centralised remote control.",
    description:
      "Our Church Prayer Display Boards are designed for churches, prayer halls, gurudwaras, temples and religious institutions that need to communicate hymn numbers, page references, prayer cues and announcements clearly to the congregation. Built on high-brightness LED with a durable MS powder-coated cabinet, our boards support wired and wireless control, scheduled sequences for service flow and large character heights for last-row readability.",
    features: [
      "Large LED digits (4″ / 6″ / 8″) — readable from the back rows",
      "Multi-line layout — hymn number + page number + announcement",
      "Wireless RF remote and / or mobile-app control",
      "Pre-programmed sequences for service / Mass flow",
      "Scrolling announcement zone for daily notices",
      "MS powder-coated indoor cabinet, durable for years of daily use",
      "Wall-mount and hanging variants",
      "Multi-language label support (English, Tamil, Malayalam, Hindi, regional)",
      "Optional time / date strip alongside the prayer digits",
    ],
    specs: [
      { label: "Cabinet Material", value: "MS Powder-Coated" },
      { label: "Display Type",     value: "Indoor LED (single or tri-colour)" },
      { label: "Digit height",     value: "4″ / 6″ / 8″ — custom sizes available" },
      { label: "Control",          value: "Wireless RF remote / Mobile app" },
      { label: "Mounting",         value: "Wall-mount or hanging" },
      { label: "Power",            value: "100-240 V AC" },
    ],
    applications: [
      "Churches and prayer halls",
      "Cathedrals and chapels",
      "Gurudwaras and temples",
      "Prayer rooms in hospitals and corporates",
      "Religious institutions and seminaries",
    ],
    images: [
      "/images/products/church-prayer-display-board/1.jpg"
    ],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Church Prayer / Hymn LED Display Board | Infra DigiTech",
      description:
        "Indoor LED church prayer / hymn display boards — shows hymn numbers, page references and announcements. Wireless remote and mobile-app control, MS powder-coated cabinet. ISO & CE certified.",
      keywords: [
        "church prayer display", "hymn display board", "church hymn board",
        "prayer hall LED display", "church announcement board",
        "gurudwara display board", "temple announcement board",
        "religious institution LED display",
      ],
    },
  },

  {
    slug: "industrial-production-display",
    title: "Industrial Production / Andon Display",
    category: "sports",
    sectors: ["factories", "corporate"],
    short:
      "Shop-floor Andon and production-monitoring LED display — shows target vs actual, OEE, line status, downtime alerts and shift metrics for factories and assembly lines.",
    description:
      "Our Industrial Production Displays (Andon boards) are engineered for manufacturing shop-floors, assembly lines and production halls where operators, supervisors and plant managers need real-time visibility into Target vs Actual output, line status, downtime causes, OEE, takt time and shift-wise productivity. Built on industrial-grade LED with rugged MS / SS enclosures, our boards integrate with PLC, SCADA, MES and ERP systems via Modbus, OPC, RS-485 or ethernet — and surface the metrics that matter to the people running the line.",
    features: [
      "Target vs Actual production count with shift roll-up",
      "Line status indicators — Running / Stopped / Setup / Idle / Breakdown",
      "Downtime cause logging and on-screen alerts",
      "OEE (Overall Equipment Effectiveness) live calculation",
      "Takt time, cycle time, units-per-hour live display",
      "Multi-line / multi-zone displays on one panel",
      "Integrates with PLC / SCADA / MES / ERP via Modbus, OPC, RS-485 or Ethernet",
      "Audible / visual Andon alerts for line stops",
      "Indoor LED with industrial-grade MS or SS cabinets",
      "4″, 6″, 8″ and 12″ digit heights — readable across the shop floor",
      "Hanging, ceiling or wall-mount variants",
    ],
    specs: [
      { label: "Display Type",     value: "Industrial LED, single or tri-colour" },
      { label: "Digit height",     value: "4″ / 6″ / 8″ / 12″" },
      { label: "Integration",      value: "Modbus · OPC · RS-485 · Ethernet / TCP" },
      { label: "Connectivity",     value: "PLC · SCADA · MES · ERP" },
      { label: "Mount",            value: "Hanging · Wall · Ceiling" },
      { label: "Cabinet",          value: "MS powder-coated or Stainless Steel" },
      { label: "Power",            value: "100-240 V AC" },
    ],
    applications: [
      "Automotive assembly lines",
      "Electronics manufacturing",
      "Pharmaceutical production halls",
      "Garment and apparel shop-floors",
      "Food and beverage production",
      "General-purpose factory Andon",
    ],
    images: [
      "/images/products/industrial-production-display/1.jpg"
        ],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Industrial Production / Andon Display Board | Infra DigiTech",
      description:
        "Shop-floor Andon and production-monitoring displays — Target vs Actual, OEE, downtime alerts. PLC / SCADA / MES / ERP integration. MS / SS cabinet, indoor LED. ISO & CE certified manufacturer.",
      keywords: [
        "industrial production display", "andon display", "andon system",
        "shop floor display", "production monitoring board",
        "target vs actual display", "OEE display", "factory LED display",
        "PLC connected display", "SCADA display board",
        "MES integration display", "assembly line andon",
      ],
    },
  },
  {
    slug: "electronic-scoreboard",
    title: "Electronic Scoreboard (Cricket / Football / Multi-Sport)",
    category: "sports",
    sectors: ["sports", "corporate"],
    short:
      "Large-format LED electronic scoreboards for cricket, football, basketball, hockey and multi-sport venues — wireless / wired control, IP-rated outdoor variants, multi-line scoring layouts.",
    description:
      "Our Electronic Scoreboards are engineered for stadiums, college and corporate sports grounds, school playgrounds and indoor sports halls. Built around high-brightness outdoor LED panels with rugged IP-rated enclosures, our scoreboards support cricket (overs, balls, batsman scores, wickets, run-rate), football (team scores, time, period), basketball, hockey and generic multi-sport layouts. Wireless RF and wired control variants with optional umpire / referee handheld console.",
    features: [
      "Multi-sport configurable — cricket, football, basketball, hockey, volleyball, kabaddi",
      "Cricket layout — team A/B score, wickets, overs, balls, current batsman, run-rate",
      "Football / hockey — team scores, period, match clock with countdown / count-up",
      "Wireless RF or wired control from umpire / scorer console",
      "Optional mobile-app control over Wi-Fi",
      "High-brightness outdoor LED — readable in direct sunlight",
      "IP-rated weatherproof enclosures (IP54 / IP65)",
      "Single-sided or double-sided variants",
      "Custom dimensions and sponsor / venue branding panels",
      "Match-clock countdown and countup modes",
      "Audible buzzer / siren for innings / period transitions",
    ],
    specs: [
      { label: "Sports supported", value: "Cricket · Football · Basketball · Hockey · Multi-sport" },
      { label: "Display Type",     value: "Outdoor LED (single or multi-colour)" },
      { label: "IP Rating",        value: "IP54 / IP65 weatherproof" },
      { label: "Control",          value: "Wireless RF · Wired · Mobile app" },
      { label: "Sides",            value: "Single-sided · Double-sided" },
      { label: "Mount",            value: "Wall · Pole · Truss · Hanging" },
      { label: "Cabinet",          value: "MS powder-coated · Aluminium" },
      { label: "Power",            value: "100-240 V AC" },
    ],
    applications: [
      "School and college sports grounds",
      "Cricket stadiums and academies",
      "Football and hockey pitches",
      "Basketball courts and indoor sports halls",
      "Corporate sports complexes",
      "Athletic clubs and training centres",
    ],
    images: [
      "/images/products/electronic-scoreboard/1.jpg"
    ],
    brochure: "/brochures/LED_Display_Boards.pdf",
    youtubeId: "",
    seo: {
      title: "Electronic Scoreboard — Cricket / Football / Multi-Sport LED | Infra DigiTech",
      description:
        "Outdoor LED electronic scoreboards for cricket, football, basketball, hockey and multi-sport venues — wireless / wired control, IP65 weatherproof, custom layouts. ISO & CE certified manufacturer.",
      keywords: [
        "electronic scoreboard", "cricket scoreboard", "football scoreboard",
        "basketball scoreboard", "hockey scoreboard", "LED scoreboard",
        "outdoor scoreboard", "wireless scoreboard", "stadium scoreboard",
        "sports ground scoreboard", "IP65 scoreboard",
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getRelatedProducts(slug, count = 4) {
  const current = getProductBySlug(slug);
  if (!current) return [];

  const flagshipBoost = (p) =>
    p.slug === "nurse-calling-system" || p.slug === "queue-management-system" ? 2 : 0;

  return products
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sameCategory = p.category === current.category ? 10 : 0;
      const sectorOverlap = (p.sectors || []).some((s) =>
        (current.sectors || []).includes(s)
      )
        ? 1
        : 0;
      return { p, score: sameCategory + sectorOverlap + flagshipBoost(p) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.p);
}
