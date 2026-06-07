/**
 * Blog post data — single source of truth for the /blog index and /blog/[slug]
 * dynamic post pages.
 *
 * Each post object:
 *   slug, title, excerpt, category, tags, publishedAt, updatedAt,
 *   readingMinutes, author, heroImage, ogImage, relatedProducts, content[]
 *
 * Content uses structured blocks rather than markdown — keeps the data file
 * portable, avoids an MDX/markdown dependency, and lets each block be styled
 * consistently with the rest of the site theme.
 *
 * Block types:
 *   { type: "lead",    text }
 *   { type: "h2",      text, id? }
 *   { type: "h3",      text, id? }
 *   { type: "p",       text }
 *   { type: "ul",      items }
 *   { type: "ol",      items }
 *   { type: "callout", title, text, tone? }   // tone: "info" (default) | "warn" | "success"
 *   { type: "quote",   text, source? }
 *   { type: "stats",   items: [{ value, label }] }
 *   { type: "cta",     text, href, label? }
 *
 * To add a new post:
 *   1) Append a new object to POSTS below
 *   2) Drop a hero image at the heroImage path
 *   3) Rebuild — /blog and /blog/<slug> appear automatically
 */

export const CATEGORIES = [
  { id: "healthcare",     name: "Healthcare",     description: "Nurse call, NABH, hospital communication systems" },
  { id: "bfsi",           name: "BFSI / Banking", description: "Display boards, queue management, RBI compliance" },
  { id: "industrial",     name: "Industrial",     description: "Andon, GPS clocks, production-floor displays" },
  { id: "sustainability", name: "Sustainability", description: "ESG, green manufacturing, renewable infrastructure" },
  { id: "guides",         name: "Buyer's Guides", description: "Decision frameworks and procurement playbooks" },
];

export const POSTS = [
  /* ====================================================================
   * Post 1 — NABH-compliant nurse call buyer's guide
   * ==================================================================*/
  {
    slug: "nabh-compliant-nurse-calling-system-buyers-guide-2026",
    title:
      "How to Choose a Nurse Calling System: NABH-Compliant Buyer's Guide 2026",
    excerpt:
      "A procurement framework for Indian hospitals chasing or renewing NABH accreditation — what the standard actually requires, how to size the system for your ward layout, and the questions to ask every vendor before signing.",
    category: "healthcare",
    tags: ["nurse-call", "NABH", "hospital-procurement", "patient-safety"],
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-26",
    readingMinutes: 9,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/nabh-nurse-call-og.png",
    ogImage: "/images/blog/nabh-nurse-call-og.png",
    relatedProducts: ["nurse-calling-system", "panic-alarm-system", "ot-timer-for-hospital"],
    content: [
      { type: "lead", text:
        "If you are accountable for nurse call infrastructure in a hospital chasing fresh NABH accreditation or a 3-year renewal, this guide will walk you through what the standard actually demands, how to translate that into a specification your vendors can quote against, and where most procurement teams over-spend or under-spec." },

      { type: "h2", id: "what-nabh-requires", text: "What NABH actually requires" },
      { type: "p", text:
        "The National Accreditation Board for Hospitals & Healthcare Providers (NABH), the QCI-backed accreditation body for Indian hospitals, frames patient-call infrastructure under the Care of Patients (COP) chapter of its Hospital Standards. The headline requirement is straightforward: every patient bed must have an accessible call mechanism that produces an audible and visible response at the nurse station, and the response time must be tracked." },
      { type: "p", text:
        "In practice this means three obligations: every bed (and every patient-accessible washroom) needs a call point, the nurse station needs both an audible alarm and a visual indication of which bed is calling, and the call must remain active until it is reset at the bedside or by a nurse — not auto-cleared after a timeout. Code Blue (cardiac arrest) escalation is treated as a separate emergency protocol but is typically integrated into the same nurse call backbone." },
      { type: "p", text:
        "What NABH does not specify is the technology you use to meet it. Wired, wireless, hybrid, IP-based, LCD console, dot-matrix panel, LED panel — all are acceptable so long as the operational outcome (audible, visible, traceable, latched-until-reset) is satisfied." },

      { type: "h2", id: "sizing", text: "Sizing the system for your ward" },
      { type: "p", text:
        "Start with bed count per nurse station, not total bed count. NABH does not mandate a nurse-to-bed ratio but most multi-specialty wards in India operate at 1:6 to 1:10 day shift, 1:12 to 1:15 night shift. Your call panel needs to display every bed assigned to that station simultaneously — not page through them. A typical floor with 25-30 beds needs a single Advanced-tier console; a 50-bed ward usually splits into two stations or one station with a head-nurse mobile mirror." },
      { type: "p", text:
        "ICUs and Critical Care follow different logic: each bed needs both a call point and a Code Blue trigger, and the response indicator should be visible from both inside and outside the ward (typically a corridor door indicator that turns on for a normal call and blinks for Code Blue). Surgical wards and post-op recovery rooms have similar needs; Labour Rooms additionally need a synchronized GPS clock for legally-required birth-time documentation." },

      { type: "h2", id: "wired-wireless", text: "Wired vs wireless — when each wins" },
      { type: "p", text:
        "Greenfield construction or a hospital being gutted-and-renovated should default to wired. The cable is run during the electrical phase, the bedside panel sits flush in the wall, and the failure mode is essentially zero except for cable damage during further construction. Cost per bed is lower at install but only marginally; the real advantage is reliability." },
      { type: "p", text:
        "Existing operational wards being upgraded should default to wireless. Pulling new cable in an occupied ward means shifting patients, breaking and repairing walls, and 3-5 days of downtime per wing. Wireless installs same-day per ward with no civil work. The trade-off is battery management: each handheld unit needs its battery level monitored at the nurse station, and you need a clear AMC plan for battery replacement every 18-24 months." },
      { type: "p", text:
        "Hybrid is the most common real-world pattern. New wings get wired; renovated wings get wireless; both feed the same centralized nurse station console. Make sure your vendor's architecture supports this on day one — retrofitting cross-protocol integration later is painful." },

      { type: "h2", id: "questions-to-ask", text: "Questions to ask every vendor" },
      { type: "ol", items: [
        "Is the call latched until manually reset, or does it auto-clear after a timeout? (Latched is NABH-compliant; auto-clear is not.)",
        "Does the toilet pull-cord trigger a visibly differentiated call at the nurse station? (Standard practice: room number with a 'T' suffix or separate indicator.)",
        "How is Code Blue differentiated visually and audibly from a normal call?",
        "What happens during a power failure? UPS-backed, battery-backed, or non-functional?",
        "How do you handle a 30-bed station — is everything visible simultaneously or paginated?",
        "Battery-operated handheld units: is battery level monitored centrally? At what battery percentage does the station flag a replacement need?",
        "Is the system HIS / EMR integration ready? Can it write response-time records to a hospital information system for clinical audit?",
        "What is the AMC structure — preventive maintenance frequency, on-site SLA, spare-parts availability commitment?",
        "Can the architecture support adding wireless beds to an existing wired backbone without forklift replacement?",
      ]},

      { type: "callout", tone: "info", title: "Common procurement mistake", text:
        "Specifying the most expensive Advanced tier across every ward — including ones where Standard or Basic would suit operations perfectly well. The Advanced platform earns its premium in multi-specialty wards, ICUs and senior-care facilities where mobile nurse access, call forwarding and centralized reporting drive measurable response-time improvements. A 12-bed maternity ward or polyclinic recovery room rarely needs dashboards." },

      { type: "h2", id: "nabh-shco", text: "NABH SHCO — the accreditation track for smaller hospitals" },
      { type: "p", text:
        "Not every healthcare facility chasing accreditation needs the full NABH Hospital standard. NABH operates a separate, simpler track called NABH SHCO (Small Healthcare Organisations) specifically designed for nursing homes, single-specialty clinics, day-care surgical centres and smaller hospitals (typically up to around 50 beds). The same accreditation logic applies, but with fewer clauses, lighter documentation requirements and a more practical assessment cycle aligned to the operational scale of these facilities." },
      { type: "p", text:
        "For nurse call infrastructure specifically, NABH SHCO still expects a working patient-to-staff communication system at every bed, with audible and visible response at a staffed point. What it does not demand is the centralised dashboard, mobile-nurse-access and EMR-integration layer that the full NABH Hospital standard tends to drive larger facilities towards. This is exactly where the Standard or Basic tier of our nurse calling range fits operationally:" },
      { type: "ul", items: [
        "Standard tier (dot-matrix wired panel with toilet pull-cord, door indicator and Code Blue) is purpose-built for SHCO-grade nursing homes, 20-30 bed hospitals, day-care surgical centres and small polyclinics where the clinical workflow is straightforward and a single nurse station is sufficient.",
        "Basic tier (wireless RF or wired LED panel) is positioned for the very smallest SHCO-track facilities — a 5-bed observation ward, a small dental or eye clinic, a single-counter polyclinic — where bedside calling alone meets the clinical need.",
        "Hybrid is common: SHCO facilities often start with Basic on the general ward and add Standard on a recovery or critical bed cluster as they grow towards the larger NABH Hospital standard later.",
      ]},
      { type: "p", text:
        "If the facility plans to upgrade from NABH SHCO to NABH Hospital in the next 2-3 years (which many do as they expand), the nurse call architecture should be chosen with that growth path in mind. The same wired or wireless backbone our Standard and Basic tiers run on accepts a forklift-free upgrade to the Advanced LCD console + dashboard layer — no need to rewire or replace the bedside units when the facility transitions to the bigger standard." },

      { type: "h2", id: "what-good-looks-like", text: "What a good deployment looks like" },
      { type: "p", text:
        "On a successful install, three things are true within the first 30 days: nursing teams stop bypassing the system (no makeshift bells, no patient mobile-phone calls to the nurse station, no 'just shout from the bed' workaround); response times trend downward measurably; and the engineering team can pull a clean weekly report of call counts, longest waits and per-bed activity for clinical audit." },
      { type: "p", text:
        "If any of those three are not happening, the system is either under-spec'd for the ward or the staff training was incomplete. Both are recoverable. Insist on a 30-day post-install review with your vendor — written into the PO, not optional." },

      { type: "cta", text: "Looking at nurse call procurement for an NABH-accredited or candidate hospital? Speak with our healthcare engineering team for a site assessment.", href: "/nurse-calling-system", label: "Read about our nurse calling system" },
    ],
  },

  /* ====================================================================
   * Post 2 — RBI display board mandate + queue management for banks
   * Carefully separates the two: RBI mandates DISPLAYS (interest rate,
   * forex, service charges). Queue management is a customer-experience
   * choice, NOT an RBI requirement. The post used to conflate the two.
   * ==================================================================*/
  {
    slug: "rbi-display-boards-and-queue-management-for-indian-banks",
    title:
      "RBI Display Board Compliance and Queue Management for Indian Bank Branches: A Procurement Guide",
    excerpt:
      "RBI mandates interest-rate, forex and service-charge display at every branch. Queue management is a separate customer-experience choice, not a regulatory requirement. This guide separates the two clearly and gives a procurement checklist for each.",
    category: "bfsi",
    tags: ["bank-displays", "RBI", "interest-rate-display", "queue-management", "BFSI", "procurement"],
    publishedAt: "2026-05-18",
    updatedAt: "2026-05-26",
    readingMinutes: 8,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/rbi-displays-qms-og.jpg",
    ogImage: "/images/blog/rbi-displays-qms-og.jpg",
    relatedProducts: ["bank-interest-rate-display-board", "forex-display-board", "queue-management-system", "token-display-system"],
    content: [
      { type: "lead", text:
        "Two procurement questions get tangled up in Indian retail banking and they should not be: which display infrastructure is mandated by RBI, and what customer-experience systems should a branch invest in. They are different questions with different answers. RBI mandates interest-rate, forex and service-charge display boards. Queue management is a separate customer-experience product — high-impact, BCSBI-aligned, but not RBI-required. This guide separates them cleanly and gives a procurement checklist for each." },

      { type: "h2", id: "rbi-mandate", text: "Part 1 — What RBI actually mandates: display boards" },
      { type: "p", text:
        "RBI's Master Direction on Interest Rate on Deposits requires banks to disclose current applicable rates of interest prominently at every branch, on every notice board, and on the bank's website. The same is true for the Master Direction on Interest Rate on Advances and the Master Direction on Foreign Exchange where the branch handles forex. Service-charge transparency and grievance-redressal contact details follow similar disclosure rules under RBI's Charter of Customer Rights." },
      { type: "p", text:
        "The disclosure must be current — not yesterday's printed PDF that was retyped from a head-office email. The regulatory question is not 'do we display the rate?' but 'when was this rate last updated, by whom, and what change-trail exists?' This is what an inspector asks during a branch visit." },
      { type: "p", text:
        "Translation: at every active branch you need an interest-rate board, a service-charge board, and a forex board (where the branch handles forex) — all current, all visible, all centrally updatable. Queue management is a separate question covered in Part 2 below." },

      { type: "h3", text: "Display infrastructure spec checklist (the regulatory part)" },
      { type: "ul", items: [
        "Centralized head-office controller — one rate change reflects across every connected branch within seconds, no manual retyping at the branch counter.",
        "Live forex feed (where applicable) — internet-fed mode pulling directly from market data feeds. Manual entry creates regulatory exposure and audit risk.",
        "Server-side change log — every rate update timestamped with user identity. This log is what passes a regulatory inspection.",
        "Outdoor LED for forex / interest boards visible from the street (a footfall driver, and many co-operative banks position these prominently).",
        "Indoor LCD for counter-area boards where color, layout and product cross-sell matter.",
        "BFSI-grade uptime SLA — 99.5%+ is industry standard, with same-day or next-business-day fault response inside metro areas.",
      ]},

      { type: "callout", tone: "warn", title: "Audit-readiness tip — display boards", text:
        "When a regulatory inspector visits a branch, the question is not 'can your system display the rate?' but 'when was this rate last updated, by whom, and what change-trail exists?' Make sure your rate display platform writes a server-side log of every rate change with timestamp and user — even if you never display this to the public, the log is what passes an audit." },

      { type: "h2", id: "queue-value-add", text: "Part 2 — Queue management: customer experience, not regulation" },
      { type: "p", text:
        "Queue management for banks is a customer-experience product, not a regulatory requirement. RBI does not mandate it. BCSBI (Banking Codes and Standards Board of India) emphasizes reasonable waiting times and transparent service flow under its Code of Bank's Commitment to Customers, but BCSBI does not specify a technology — banks may meet those outcomes any way they choose." },
      { type: "p", text:
        "That said, queue management is one of the highest-impact branch investments a bank can make. It reduces visible queue length at the counter, frees relationship managers from manual token-calling, lets walk-in customers know their position without standing in line, and produces objective service-level metrics that strengthen BCSBI customer-service reporting and internal audit responses. Treat it as a value-add, not a compliance line item." },

      { type: "h3", text: "Queue / token system spec checklist (best-practice, not regulatory)" },
      { type: "ul", items: [
        "Token-forwarding architecture so a customer who has tokened in at the entrance does not re-queue at every counter (registration → cashier → relationship officer is one journey, not three).",
        "Multi-counter calling — any free counter can call any waiting token. Strict counter-to-token binding kills throughput on a busy Monday morning.",
        "SMS-based virtual token for customers who arrive in advance — eliminates branch crowding during peak hours.",
        "Supervisor dashboard with live wait-time, abandonment rate, per-counter SLA metrics — useful for internal review and BCSBI customer-service reporting.",
        "Real-time reporting exportable for monthly internal audit and quarterly customer-service review.",
      ]},

      { type: "h2", id: "deployment-patterns", text: "Branch deployment patterns" },
      { type: "p", text:
        "A typical metropolitan bank branch with 4-6 counters that has chosen to deploy both layers runs: an interest-rate / forex / service-charge board on the customer-facing wall (regulatory), a token dispenser at the entrance (customer experience), individual counter displays calling tokens, and a centralized waiting display so customers can see their position in queue without standing at the counter. Sub-urban branches with 2-3 counters compress this — and many co-operative banks deploy only the regulatory display infrastructure without queue management at all." },
      { type: "p", text:
        "Public-sector banks (PSBs) like Canara Bank, Bank of Baroda, Union Bank of India and Indian Bank typically procure under standardized BFSI specifications — your spec should match these standards out of the box. Co-operative banks and small finance banks have more flexibility but also less in-house IT support; the centralized-controller architecture matters even more for them because a single head-office user manages rate updates across every branch." },

      { type: "h2", id: "footprint", text: "Pan-Karnataka and pan-India deployment" },
      { type: "p", text:
        "Our installed display-board footprint for Canara Bank spans Bengaluru, Mangalore, Karwar, Shivamogga and Udupi regions — a typical PSB rollout sequences branches in waves and you should be sure your vendor can deploy at the cadence the bank's IT team wants. Bank of Baroda, Union Bank of India, Indian Bank and Bank of Maharashtra deployments across Bengaluru follow similar patterns. Queue management deployments at the same banks tend to follow separate decision cycles and separate procurement teams." },

      { type: "cta", text: "Speccing display boards (RBI-mandated) or queue management (customer experience) for a bank branch network? See our centralized BFSI architecture and book a no-obligation site survey.", href: "/bank-interest-rate-display-board", label: "Read about our bank display boards" },
    ],
  },

  /* ====================================================================
   * Post 3 — GPS Clock vs NTP Clock procurement guide
   * ==================================================================*/
  {
    slug: "gps-clock-vs-ntp-clock-procurement-guide",
    title:
      "GPS Clock vs NTP Clock: A Procurement Guide for IT and Operations Teams",
    excerpt:
      "Why your IT campus needs ethernet-fed clocks, why your hospital Labour Room needs GPS-disciplined clocks, why your shop floor might need both — and how to spec each without over-engineering.",
    category: "industrial",
    tags: ["GPS-clock", "NTP", "synchronized-time", "IT-infrastructure", "procurement"],
    publishedAt: "2026-05-15",
    updatedAt: "2026-05-26",
    readingMinutes: 7,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/gps-vs-ntp-hero.jpg",
    ogImage: "/images/blog/gps-vs-ntp-hero.jpg",
    relatedProducts: ["gps-digital-clock", "international-world-clock", "ot-timer-for-hospital"],
    content: [
      { type: "lead", text:
        "Synchronized time looks like a commodity until you actually need it. Then the architecture choice — GPS-disciplined, NTP over ethernet, PTP over a dedicated network, or autonomous RTC — turns out to drive both cost and reliability by a large margin. Here is how procurement teams should actually decide." },

      { type: "h2", id: "what-each-is", text: "What each architecture actually is" },
      { type: "p", text:
        "A GPS-disciplined clock contains a GPS receiver, picks up satellite timing signals from the constellation (UTC traceable, stratum 0 reference quality), and serves that time to a local display or to a downstream network of slave clocks. Accuracy: typically under 100 nanoseconds against UTC. Requires sky view — works perfectly on a rooftop, fails inside deep building interiors." },
      { type: "p", text:
        "An NTP clock pulls time over ethernet (or Wi-Fi) from an NTP server, typically running RFC 5905. Accuracy in a local network: usually under 10 milliseconds, often under 1ms. No sky view needed — works anywhere there's a network. Quality depends on the upstream NTP source (internal stratum-1 server, public ntp.org pool, or a vendor's appliance)." },
      { type: "p", text:
        "A PTP (IEEE 1588) clock is NTP's industrial cousin — sub-microsecond accuracy on a dedicated network with hardware time-stamping. Overkill for almost every commercial use case; reserved for telecom, broadcast and financial trading floors." },
      { type: "p", text:
        "An autonomous RTC (real-time clock) is a battery-backed crystal oscillator with no external reference. It drifts a few seconds per month. Useful for sites with neither GPS reception nor network connectivity — typically remote outdoor industrial yards." },

      { type: "h2", id: "decision-framework", text: "The decision framework" },
      { type: "h3", text: "Choose GPS when..." },
      { type: "ul", items: [
        "The clock will be installed outdoors or in a rooftop-line-of-sight indoor location.",
        "Time accuracy matters for legal or clinical documentation (Labour Room / Time-of-Birth clocks where birth certificates require second-precision time of birth).",
        "The site has no reliable network — outdoor production yards, remote facilities, large warehouses.",
        "You need a master clock to drive a downstream network of synchronized slave clocks over RS-485.",
      ]},
      { type: "h3", text: "Choose NTP / ethernet when..." },
      { type: "ul", items: [
        "The clock will be installed in deep interior buildings where GPS signal will not penetrate — large IT campuses, glass-and-steel office buildings, basement levels.",
        "The hospital has a functioning hospital-wide network already running stratum-1 time.",
        "You need many clocks across multiple buildings synchronized — NTP scales horizontally trivially, GPS would require many independent receivers.",
        "Multi-time-zone clock walls (trading rooms, international offices) where you display Mumbai / London / New York / Tokyo simultaneously.",
      ]},
      { type: "h3", text: "Choose autonomous RTC when..." },
      { type: "ul", items: [
        "The site has neither GPS sky view nor LAN connectivity.",
        "Sub-second precision is not required (a few seconds of drift per month is acceptable).",
        "Cost is the dominant constraint and the application tolerates manual periodic re-synchronization.",
      ]},

      { type: "h2", id: "form-factors", text: "Indian site realities" },
      { type: "p", text:
        "Maternity hospitals and Labour Rooms typically need HH:MM:SS GPS precision because birth-certificate documentation in many Indian states (notably Karnataka and Tamil Nadu) requires second-precision time of birth. The clinical workflow also depends on it — APGAR scoring is timed at 1 and 5 minutes post-delivery, and small variations matter in court cases involving birth trauma." },
      { type: "p", text:
        "Pharmaceutical cleanrooms need stainless-steel-304 housing, IP65 sealing, flush-mount, and FDA / GMP-compliant materials. The time architecture is usually NTP because cleanroom interiors have no GPS reception, but the form factor is the bigger spec driver." },
      { type: "p", text:
        "IT campuses — Wipro's Sarjapur Road campus and Yokogawa Bluestar's Electronic City facility are representative examples — universally choose NTP / ethernet. The deep interiors of large IT buildings simply do not pass GPS signal, and the hospital-grade alternative (rooftop GPS master + RS-485 slaves to every floor) is operationally heavier than just running NTP over the existing ethernet backbone." },
      { type: "p", text:
        "Manufacturing shop floors are the most varied. Toyota Kirloskar's Bidadi plant operates custom three-sided and four-sided suspended hanging clocks above production lines — the form factor is shop-floor-specific, the time source is typically NTP-fed via a rooftop GPS master. Lakshmi Vacuum Technologies at Peenya Industrial Area runs a similar architecture. Hosur's industrial belt (Ashok Leyland, TVS Industries) follows the same pattern at scale." },

      { type: "callout", tone: "info", title: "Spec'ing the wrong architecture", text:
        "The most common procurement mistake is specifying GPS for a deep-interior site that cannot receive the signal — and then discovering it during install. By then the cable run is committed and the cost of switching to NTP is double what it would have been if it had been specified correctly from day one. Always confirm signal availability at the planned mount point during site survey." },

      { type: "cta", text: "Speccing synchronized time for a hospital, IT campus or manufacturing site? Talk to our engineering team — we'll do a site survey before quoting.", href: "/gps-digital-clock", label: "Read about our GPS clock systems" },
    ],
  },

  /* ====================================================================
   * Post 4 — Wired vs wireless nurse call
   * ==================================================================*/
  {
    slug: "wired-vs-wireless-nurse-call-decision-framework",
    title:
      "Wired vs Wireless Nurse Call: A Decision Framework for Indian Hospitals",
    excerpt:
      "When to default to wired, when to default to wireless, when hybrid makes sense, and the construction-phase trade-offs that drive total cost of ownership.",
    category: "healthcare",
    tags: ["nurse-call", "wired-vs-wireless", "hospital-infrastructure", "procurement"],
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-26",
    readingMinutes: 6,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/wired-wireless-hero.png",
    ogImage: "/images/blog/wired-wireless-hero.png",
    relatedProducts: ["nurse-calling-system", "old-age-calling-system", "panic-alarm-system"],
    content: [
      { type: "lead", text:
        "The wired-vs-wireless question for nurse call infrastructure looks like a technology choice but is really a construction-phase choice. The deciding factor is rarely the system itself — it is the state of the wing the system is going into." },

      { type: "h2", id: "wired-when", text: "Default to wired" },
      { type: "p", text:
        "Greenfield construction, hospital wings being gutted and rebuilt, and any new tower under construction should default to wired. The reasoning is simple: the cable can be pulled during the electrical phase alongside the building's network and power infrastructure. Bedside panels sit flush in the wall behind a faceplate, looking factory-installed. No batteries to manage, no RF interference to engineer around, no per-bed range tests to perform during commissioning." },
      { type: "p", text:
        "Cost per bed at install is roughly comparable to wireless if you compare apples-to-apples (wired panel + cable vs wireless panel + handheld batteries + RF hub). The real wired advantage is in years 3 through 10: lower failure rate, no battery replacement AMC cost, no firmware updates required for the bedside units, and zero RF coexistence issues if the hospital adds new wireless infrastructure later (Wi-Fi 6E, private 5G, medical telemetry)." },

      { type: "h2", id: "wireless-when", text: "Default to wireless" },
      { type: "p", text:
        "Existing operational wards being upgraded should default to wireless. Pulling new cable through a wing with patients in beds means shifting patients to other wings, breaking walls to run conduit, plastering and painting afterwards, and 3-5 days of operational downtime per wing. Wireless installs same-day per ward with no civil work — the bedside panel mounts to the wall with two screws, pairs with the nurse station console over the system's self-generated Wi-Fi or hub network, and goes live before the next shift." },
      { type: "p", text:
        "The trade-off is battery management. Each handheld unit needs its battery monitored — modern systems do this centrally at the nurse station, flagging low-battery units for replacement at planned intervals. AMC structure should explicitly cover battery replacement at 18-24 month cycles. If the hospital lets battery management slip, units start failing intermittently and nurses lose trust in the system. Trust, once lost, is hard to rebuild." },

      { type: "h2", id: "hybrid", text: "The hybrid pattern" },
      { type: "p", text:
        "In practice, the most common deployment pattern across the 22+ Bengaluru hospitals we work with is hybrid: new wings get wired, renovated wings get wireless, both feed the same centralized nurse station console. This is the right answer for most growing hospitals. The architecture needs to support it on day one — make sure your vendor's nurse station accepts both wired and wireless inputs at the same time, with no protocol bridge needed." },
      { type: "p", text:
        "Battery-operated handheld units also play a role in mature hybrid wards: certain beds in a wired ward might need a portable call button (a patient in a wheelchair, a patient who moves between bed and bathroom frequently). The same handheld unit, on the same wireless backbone, integrates with the wired bedside switches." },

      { type: "callout", tone: "success", title: "The Siddaganga Hospital approach", text:
        "At Siddaganga Hospital in Tumkur, where the calling line had no UPS, the wireless variant was the right answer — battery-operated handhelds with central battery monitoring at the nurse station eliminate the UPS dependency entirely. This is a pattern worth borrowing for hospitals where the existing UPS load is already maxed out." },

      { type: "h2", id: "questions", text: "Two questions that decide it" },
      { type: "p", text:
        "Before the technology comparison, answer these two: (1) Is the ward already occupied and operational? (2) Does the existing nurse station have UPS backup, or will the new system need to be battery-operable? If yes-and-no, wireless wins. If no-and-yes, wired wins. Everything else is detail." },

      { type: "cta", text: "Sizing nurse call for a renovation, a new wing or both at once? Get a site assessment from our engineering team.", href: "/nurse-calling-system", label: "See our nurse calling system tiers" },
    ],
  },

  /* ====================================================================
   * Post 5 — Andon display ROI
   * ==================================================================*/
  {
    slug: "andon-display-implementation-roi-shop-floor",
    title:
      "Andon Display Implementation: ROI and Lessons from the Shop Floor",
    excerpt:
      "What a properly engineered Andon system actually does to production throughput, where most factories under-invest, and how to size the system without buying more lights than your line needs.",
    category: "industrial",
    tags: ["andon", "production-monitoring", "lean-manufacturing", "industrial-IoT"],
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-26",
    readingMinutes: 7,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/andon-roi-hero.jpg",
    ogImage: "/images/blog/andon-roi-hero.jpg",
    relatedProducts: ["industrial-production-display", "electronic-scoreboard", "weather-temperature-display"],
    content: [
      { type: "lead", text:
        "Andon — the production-floor signal system that originated at Toyota — is one of the highest-ROI lean manufacturing investments most Indian factories never make. Properly engineered, it shrinks the gap between a problem appearing on the line and being escalated to someone who can fix it from minutes to seconds. Here is what the architecture should look like and what payback to expect." },

      { type: "h2", id: "what-andon-does", text: "What Andon actually does" },
      { type: "p", text:
        "An Andon system is a visual signaling architecture: each workstation can declare its state — running, calling for materials, calling for maintenance, line stopped — by pressing a station button. That state is immediately visible on a central production display board, on supervisor mobile dashboards, and (in modern systems) logged to a production monitoring backend for analysis." },
      { type: "p", text:
        "The colour code is universal: green for normal running, yellow for an issue detected (typically a material shortage or quality flag), red for line stopped. Three colours, instant comprehension, no language barrier. This is why Andon survived the export of the Toyota Production System and is now a global lean-manufacturing standard — the visual signal works on any shop floor regardless of operator language or geography." },

      { type: "h2", id: "real-roi", text: "Where the ROI actually comes from" },
      { type: "p", text:
        "The ROI is not from the Andon hardware itself — it is from the behaviour change the system enforces. Without an Andon, the time from 'problem detected' to 'supervisor responding' is governed by whoever happens to walk by, plus telephone tag, plus the supervisor's current workload. With an Andon, that time collapses to under 30 seconds for any active yellow or red state because the issue is visible from anywhere on the floor." },
      { type: "stats", items: [
        { value: "5-15%", label: "Typical throughput uplift from Andon-driven response-time reduction" },
        { value: "3-9 months", label: "Common payback period (depending on line value)" },
        { value: "30 sec", label: "Target time from 'station signals' to 'supervisor on the line'" },
      ]},
      { type: "p", text:
        "The 5-15% throughput range is wide because it depends entirely on baseline. A factory already running lean with strong supervisory discipline will see the lower end. A factory where issues frequently go unreported until end-of-shift will see the upper end — and the upper end is where the payback period collapses to under 90 days." },

      { type: "h2", id: "architecture", text: "Architecture choices" },
      { type: "h3", text: "Per-station signaling unit" },
      { type: "p", text:
        "At each workstation: a wired or wireless push-button with three (or four) coloured indicators, mounted at operator-reach height. The unit needs to be visible from the supervisor walkway and accessible to the operator without leaving the workstation." },
      { type: "h3", text: "Central production display" },
      { type: "p", text:
        "Above the line, visible from the entire shop floor: a large-format LED or LCD display showing the current state of every station, current shift production count vs target, and current quality flag (red / yellow / green based on first-pass yield). This is the always-on visual reference that drives the cultural change." },
      { type: "h3", text: "Supervisor mobile" },
      { type: "p", text:
        "A live dashboard on every supervisor's mobile or tablet — same data as the central display but personalized to their zone. Industrial IoT in the modern sense: the data the floor display shows visibly is also written to a backend for end-of-shift, end-of-day and trend analysis." },

      { type: "h2", id: "sizing", text: "Sizing without over-spending" },
      { type: "p", text:
        "Three sizing rules: signal at every station that runs independently (not at every operator if 5 operators share one station), display once per direct line of sight (not once per line — if one display is visible from the whole floor, that is enough), and dashboard for every supervisor zone (not every supervisor if two supervisors share a zone)." },
      { type: "p", text:
        "A small Indian factory with one production line, 12 workstations and two supervisors typically needs 12 signal units, one central display and two mobile dashboards. That is the right baseline. A factory specifying 12 displays for 12 stations has been oversold — the value is in the consolidated visual, not in per-station redundancy." },

      { type: "callout", tone: "info", title: "Industrial belt deployments", text:
        "Our installations across the Bengaluru-Chennai industrial corridor — Toyota Kirloskar (Bidadi), Yokogawa Bluestar (Electronic City, Bengaluru), Lakshmi Vacuum Technologies (Peenya), Ashok Leyland (Hosur) and TVS Industries (Hosur) — follow this sizing philosophy. The signaling architecture stays simple; the value comes from the supervisor response-time discipline the system enforces." },

      { type: "cta", text: "Considering Andon or production monitoring for a factory line? See our industrial display range and ROI breakdown.", href: "/industrial-production-display", label: "Read about our industrial production displays" },
    ],
  },

  /* ====================================================================
   * Post 6 — NABL / ISO 15189 compliance via QMS for diagnostic labs
   * ==================================================================*/
  {
    slug: "queue-management-nabl-iso-15189-compliance-diagnostic-labs",
    title:
      "Queue Management for NABL-Accredited Diagnostic Labs: How a QMS Maps to ISO 15189:2022 Compliance",
    excerpt:
      "NABL accreditation and ISO 15189:2022 set explicit requirements on patient identification, confidentiality and TAT communication for diagnostic labs. A queue management system is not just a convenience — it produces auditable evidence on every one of these clauses. Here is the map from QMS features to the standard.",
    category: "healthcare",
    tags: ["NABL", "ISO-15189", "diagnostic-lab", "queue-management", "lab-accreditation", "patient-safety", "compliance"],
    publishedAt: "2026-05-27",
    updatedAt: "2026-05-27",
    readingMinutes: 10,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/nabl-iso15189-og.jpg",
    ogImage: "/images/blog/nabl-iso15189-og.jpg",
    relatedProducts: ["queue-management-system", "token-display-system", "nurse-calling-system"],
    content: [
      { type: "lead", text:
        "Diagnostic laboratories in India operate under two parallel layers of quality requirements: ISO 15189:2022, the international standard for medical laboratory competence and quality, and NABL 112, the India-specific assessment criteria document that incorporates it for the National Accreditation Board for Testing and Calibration Laboratories. Both share three operational pillars that every NABL-accredited lab must demonstrate during audit — positive patient identification, confidentiality of patient information, and documented turn-around time (TAT) communication. A queue management system, deployed correctly, produces auditable evidence on all three pillars. This post maps QMS features to the standard." },

      { type: "h2", id: "why-this-matters", text: "Why this matters now" },
      { type: "p", text:
        "ISO 15189:2022, published in December 2022, raised the bar significantly on pre-examination process controls compared with the 2012 edition. NABL has aligned its 112 assessment document accordingly, and Indian diagnostic labs going through first-time accreditation or renewal are now facing far more scrutiny on workflow controls — specifically how patients are identified at every touchpoint, how their data is protected during the visit, and how TAT is measured and communicated to the requesting clinician. Manual paper-based queue systems create documented gaps that NABL assessors find quickly. An electronic queue management system, configured to ISO 15189 expectations, closes those gaps." },
      { type: "p", text:
        "The audit reality is simple. When the NABL assessor walks in, they do not ask 'do you have a queue system?' They ask 'show me your patient-identification verification log for the past 30 days,' 'show me your TAT log per test type,' and 'show me the access-control list for patient data.' A properly configured QMS produces all three as exportable reports. Without it, the same evidence must be manually reconstructed from paper logs — a process that historically fails a meaningful share of first-time NABL audits." },

      { type: "h2", id: "patient-identification", text: "Patient identification — ISO 15189:2022 Clause 7.2 (Pre-examination processes)" },
      { type: "p", text:
        "ISO 15189:2022 Clause 7.2 (pre-examination processes), and specifically the sub-clauses covering primary sample collection and patient identification, require positive identification using at least two independent identifiers at every patient interaction point. The standard examples are full name plus date of birth, or full name plus a unique patient or national identifier. NABL 112 reinforces this with explicit India-context expectations. The compliance failure pattern is well-known: a paper token that is just a number, called out at random, with no verifiable link back to the patient's identity at the registration desk." },
      { type: "p", text:
        "How a queue management system addresses this clause:" },
      { type: "ul", items: [
        "At registration, the system binds the issued token to the verified patient profile (name + date of birth + Aadhaar / UID / hospital MRN, depending on lab policy).",
        "Token-forwarding architecture means the same patient profile follows the same token across every downstream counter — registration → phlebotomy → radiology → reporting — with no re-keying of identifiers and therefore no transcription error opportunities.",
        "At each counter, when the token is called, the counter-facing screen displays the patient's full identification details for the technician's verification step; the public-facing display shows only the token number.",
        "Every touchpoint produces an audit log entry with timestamp, verified identifier set, counter ID and operator ID — exactly the trail an assessor wants to see.",
      ]},

      { type: "h2", id: "confidentiality", text: "Confidentiality — ISO 15189:2022 Clause 4.2 (Confidentiality)" },
      { type: "p", text:
        "ISO 15189:2022 Clause 4.2 covers confidentiality of patient information end-to-end, including both digital and physical protection. The standard expects the lab to prevent unauthorised disclosure of patient information through any channel — spoken disclosure in a public waiting area, visual disclosure on a screen, casual disclosure during counter interactions, or paper disclosure on a token slip. A queue system that calls out patient names over a public address in a crowded waiting room is, in audit terms, a documented confidentiality breach." },
      { type: "p", text:
        "How a queue management system addresses this clause:" },
      { type: "ul", items: [
        "Public-facing displays show anonymous token identifiers only (T-101, T-102), never patient names. This is the single most important confidentiality control in the standard.",
        "Voice announcement (where used) calls out the token and counter, never the patient name.",
        "Counter-facing screens that display patient identifiers are positioned at angles that block over-the-shoulder visibility from the waiting area.",
        "SMS-based virtual token mode lets the patient wait outside the lab building until their position is near the top of the queue — this removes the waiting-area exposure entirely.",
        "Supervisor dashboard access is role-restricted; only authorised staff see patient-level information, with a server-side access log that is itself part of the NABL submission.",
      ]},

      { type: "h2", id: "tat-communication", text: "TAT communication — ISO 15189:2022 Clauses 7.2, 7.4 and 7.5" },
      { type: "p", text:
        "ISO 15189:2022 explicitly requires the laboratory to define expected turn-around time (TAT) for each examination, to monitor actual TAT against the defined target, and to communicate TAT to the requesting clinician or, where appropriate, the patient. The relevant clauses span pre-examination (7.2 — including the time from sample collection to receipt in the lab), examination (7.4 — the testing TAT itself), and reporting (7.5 — communicating the result and the TAT to the requester). NABL 112 layers documentation expectations on top — a laboratory cannot demonstrate compliance with this clause without a system actively measuring TAT." },
      { type: "p", text:
        "How a queue management system addresses these clauses:" },
      { type: "ul", items: [
        "Every token logs its actual timestamps at each touchpoint — entered the queue, called to counter, sample collected, sample dispatched to the lab, result reported. End-to-end TAT is computed automatically per visit.",
        "Supervisor dashboards display live wait-time per queue and per counter; exceptions to the target TAT get flagged in real time so corrective action can happen before the audit, not after.",
        "End-of-day and end-of-shift reports export TAT data per service type in the format NABL assessors expect to see during the submission review.",
        "SMS notifications to the patient at sample collection, sample received and report ready serve as documented TAT communication — auditable proof that the lab is meeting its 7.5 reporting obligation.",
        "Historical TAT data demonstrates the trend-monitoring requirement that ISO 15189:2022 expects to see across audit cycles, not just a single snapshot.",
      ]},

      { type: "callout", tone: "info", title: "What audit-ready documentation looks like", text:
        "The NABL assessor's three core questions can all be answered from a single QMS export. (1) Patient identification: per-token verification log with timestamped two-identifier confirmation. (2) Confidentiality: server-side access log showing who viewed which patient record at what time, plus the deployment proof that public displays show only anonymous tokens. (3) TAT: per-test-type TAT log for the audit period with target vs actual columns. Three reports, one platform — vs three weeks of manual paper-log reconstruction without it." },

      { type: "h2", id: "implementation", text: "Implementation pattern at Indian diagnostic centres" },
      { type: "p", text:
        "Diagnostic centres are one of the largest segments we serve at Infra DigiTech, because the multi-touchpoint patient journey — registration, phlebotomy, radiology, reporting — is exactly where a NABL-aligned QMS architecture has the most measurable impact. Recent deployments across Bengaluru include Asian Diagnostics, Padmashri Diagnostic Centre (Vijayanagar), Lotus Diagnostic Centre (Indiranagar) and Indian Institute of Science Medical Centre (Malleshwaram). Each runs token-forwarding architecture with verified patient-profile binding, anonymous public displays, role-based supervisor access, and TAT logging pre-configured for NABL audit export." },
      { type: "p", text:
        "A typical NABL-aligned QMS deployment for a single diagnostic centre takes 2-4 weeks end to end — site survey, centralised controller installation, counter unit pairing, SMS-gateway configuration, role-based access setup, and a 30-day post-install validation period before the first audit. Existing display and counter wiring can typically be reused; the architecture is designed to retrofit into an operational lab without downtime." },
      { type: "p", text:
        "The payback moment is the first NABL audit after deployment. The three pillars of ISO 15189:2022 compliance — patient identification, confidentiality, TAT — are now demonstrable from exportable platform reports, in the format the assessor expects. The same documentation also strengthens BCSBI-style customer-service reporting if the lab also serves corporate or insurance customers requiring service-level evidence." },

      { type: "callout", tone: "warn", title: "Note on clause numbering", text:
        "ISO 15189:2022 reorganised the clause structure significantly compared with the 2012 edition — patient identification moved from old Clause 5.4 into new Clause 7.2, and confidentiality moved from old Clause 4.1.1.3 into new Clause 4.2. Cross-check the exact sub-clause numbers with your NABL consultant and the official 2022 standard before referencing them in your accreditation submission. The compliance logic and QMS feature map described above are stable across both editions; only the numbering changed." },

      { type: "cta", text: "Designing the queue and patient-flow architecture for a NABL-accredited or candidate diagnostic lab? Speak with our healthcare engineering team for a site survey aligned to ISO 15189:2022 and NABL 112.", href: "/queue-management-system", label: "Read about our queue management system" },
    ],
  },

  /* ====================================================================
   * Post 7 — JCI (Joint Commission International) nurse call compliance
   * ==================================================================*/
  {
    slug: "joint-commission-international-jci-nurse-call-compliance",
    title:
      "How a Nurse Calling System Supports Joint Commission International (JCI) Accreditation for Indian Hospitals",
    excerpt:
      "Joint Commission International (JCI) is the most rigorous hospital accreditation standard internationally — required for medical tourism, international insurance acceptance and premium hospital positioning. Here is how a well-engineered nurse calling system maps to JCI's International Patient Safety Goals, Patient and Family Rights, Care of Patients and Quality Improvement standards.",
    category: "healthcare",
    tags: ["JCI", "Joint-Commission-International", "IPSG", "nurse-call", "hospital-accreditation", "patient-safety", "medical-tourism"],
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
    readingMinutes: 10,
    author: "Infra DigiTech Engineering",
    heroImage: "/images/blog/Joint-Commission-International-nursecall-og.png",
    ogImage: "/images/blog/Joint-Commission-International-nursecall-og.png",
    relatedProducts: ["nurse-calling-system", "panic-alarm-system", "ot-timer-for-hospital", "queue-management-system"],
    content: [
      { type: "lead", text:
        "Joint Commission International (JCI) is the most rigorous hospital accreditation programme available globally and the gold standard for hospitals competing in international markets, medical tourism, and international insurance acceptance. In India, JCI accreditation typically sits alongside NABH for premium tertiary-care hospitals — Manipal, Fortis, Sakra, Narayana, Aster CMI and Apollo all run JCI-accredited facilities. This post maps how a properly specified nurse calling system supports JCI's most relevant standards, particularly the International Patient Safety Goals (IPSG), Care of Patients (COP), Patient and Family Rights (PFR) and Quality Improvement and Patient Safety (QPS) chapters." },

      { type: "h2", id: "why-jci", text: "Why JCI matters in India" },
      { type: "p", text:
        "JCI accreditation positions a hospital for three things that NABH alone cannot fully unlock. First, international medical tourism patients (and the insurance companies underwriting them) frequently require JCI accreditation as a precondition for treatment authorisation. Second, large multinational corporate health-benefit programmes and embassy referrals route to JCI-accredited facilities. Third, premium-positioning in the Indian domestic market — patients willing to pay private-pay rates — increasingly correlates with JCI in their decision-making." },
      { type: "p", text:
        "Operationally, JCI is more rigorous than NABH on patient safety and communication. The International Patient Safety Goals (IPSG) chapter, in particular, has six explicit goals that are not optional — every JCI-accredited hospital must demonstrate compliance with each one. Two of those six map directly to nurse call infrastructure, and several others are influenced by it." },

      { type: "h2", id: "ipsg-1", text: "IPSG.1 — Identify Patients Correctly" },
      { type: "p", text:
        "JCI's first International Patient Safety Goal requires positive patient identification using at least two patient-specific identifiers at every clinical interaction. This is the same fundamental rule as NABH and ISO 15189, but JCI assessors look for it to be demonstrated end-to-end across the care episode — from admission to discharge, on every nurse-patient interaction in between." },
      { type: "p", text:
        "How a nurse calling system supports IPSG.1:" },
      { type: "ul", items: [
        "Each bedside calling unit is bound to a verified patient profile at admission — name plus date of birth or name plus a unique patient identifier — and the binding persists through the care episode.",
        "When a call is initiated, the nurse station console displays the verified patient identifiers for the responding nurse before they reach the bedside, supporting the IPSG.1 verification step at every interaction.",
        "Code Blue, fall, or other emergency calls carry the same patient identifier set, so the responding clinical team has unambiguous identification before treatment begins.",
        "The audit log of every call records the verified identifier set, timestamped — exactly the evidence JCI assessors look for during a tracer assessment.",
      ]},

      { type: "h2", id: "ipsg-2", text: "IPSG.2 — Improve Effective Communication" },
      { type: "p", text:
        "JCI's second International Patient Safety Goal is communication. The standard requires hospitals to establish reliable, repeatable communication processes for critical situations — including patient calls for assistance, Code Blue activation, handoff communication between shifts, and reporting of critical values. A nurse calling system is one of the core engineering controls that supports this goal." },
      { type: "p", text:
        "How a nurse calling system supports IPSG.2:" },
      { type: "ul", items: [
        "Audible plus visible call signalling at the nurse station ensures no patient call is missed — a basic but explicitly assessed requirement.",
        "Differentiated Code Blue mode (door indicator blinks, audio alarm signature changes) communicates emergency activation unambiguously to every clinical team member within sight or sound — supporting the rapid-response component of IPSG.2.",
        "Mobile nurse access on the Advanced tier allows shift-handoff communication to follow the responsible clinician, not the workstation — closing a known IPSG.2 gap during shift transitions.",
        "Call forwarding and SMS alerts to backup stations ensure that even during a multi-call surge, no patient call goes unanswered — auditable communication reliability.",
      ]},

      { type: "h2", id: "ipsg-6", text: "IPSG.6 — Reduce the Risk of Patient Harm Resulting from Falls" },
      { type: "p", text:
        "Falls are one of the most-monitored patient-safety incidents in JCI assessments, especially in geriatric, post-surgical and neurological wards. The nurse call system contributes to fall-prevention compliance in two specific ways — accessible bedside call and toilet pull-cord coverage." },
      { type: "p", text:
        "How a nurse calling system supports IPSG.6:" },
      { type: "ul", items: [
        "Bedside calling unit positioned within easy reach of the patient (per the IEC 60601 ergonomic guideline JCI assessors reference) so the patient does not attempt to get out of bed unassisted to seek help.",
        "Toilet pull-cord switch in every patient bathroom — a patient who falls or is at risk in the toilet can pull the cord without standing, and the call routes to the nurse station with a clearly differentiated location indicator.",
        "Long-range RF / wireless variants for senior-living and rehab facilities — every patient gets a handheld call button they can carry, ensuring help is one button-press away wherever they are in the facility.",
      ]},

      { type: "h2", id: "pfr-confidentiality", text: "PFR.1.5 — Patient privacy and confidentiality" },
      { type: "p", text:
        "JCI's Patient and Family Rights (PFR) chapter is more explicit than most other accreditation standards on patient privacy — both physical privacy during care and information privacy during clinical communication. The nurse call system can become a documented PFR violation if it broadcasts patient names publicly or displays clinical information on public-facing screens." },
      { type: "p", text:
        "How a nurse calling system supports PFR.1.5:" },
      { type: "ul", items: [
        "Public-facing displays show only the bed or room number (e.g. 304) — never patient names.",
        "Audio announcements at the nurse station reference room/bed identifiers, never patient names.",
        "Counter-side screens displaying patient identifiers for nurse verification are positioned at angles that prevent over-the-shoulder visibility from patient corridors and waiting areas.",
        "Role-based access control on the supervisor dashboard ensures only authorised clinical staff see patient-level call data.",
      ]},

      { type: "h2", id: "cop-code-blue", text: "COP.3.2 — Resuscitative services (Code Blue)" },
      { type: "p", text:
        "JCI's Care of Patients (COP) chapter requires hospitals to provide resuscitative services that are available throughout the facility, with documented activation procedures and response-time targets. Code Blue activation, where it integrates with the nurse call backbone, is part of this clause." },
      { type: "p", text:
        "How a nurse calling system supports COP.3.2:" },
      { type: "ul", items: [
        "Dedicated Code Blue trigger at every bedside unit (and accessible from the nurse station) that escalates to a visually and audibly differentiated mode — door indicator blinking, distinctive audio pattern at the nurse station and corridor.",
        "Optional broadcast to the in-hospital paging system, hospital intercom, or mobile alert system for the Code Blue response team.",
        "Audit log of every Code Blue activation with timestamp, location, responder identity and response duration — directly feeds the JCI COP.3.2 documentation requirement.",
      ]},

      { type: "h2", id: "qps-metrics", text: "QPS — Quality Improvement and Patient Safety metrics" },
      { type: "p", text:
        "JCI's Quality Improvement and Patient Safety chapter requires the hospital to define, collect and analyse data on clinical performance metrics, including response time to patient calls. Without an electronic nurse call system that logs these timestamps automatically, this requirement is effectively impossible to satisfy beyond a self-reported approximation." },
      { type: "p", text:
        "How a nurse calling system supports QPS:" },
      { type: "ul", items: [
        "Every call logs four timestamps: initiated, acknowledged at nurse station, attended at bedside, reset. Response time is computed automatically.",
        "Per-ward, per-shift and per-nurse aggregate response-time reports are exportable in formats JCI assessors expect during tracer assessments.",
        "Outlier flagging — calls that exceed the hospital's defined response-time target are surfaced in real time on the supervisor dashboard, supporting the continuous-improvement component of QPS.",
        "Historical trend data demonstrates ongoing performance improvement across JCI accreditation cycles, a critical assessment criterion JCI surveyors look for at re-accreditation.",
      ]},

      { type: "h2", id: "indian-jci-hospitals", text: "JCI-accredited hospitals in India — pattern of deployment" },
      { type: "p", text:
        "Across our Bengaluru hospital deployments, several customers operate JCI-accredited facilities alongside their NABH accreditation. Sakra World Hospital (Devarabeesanahalli), Manipal Hospital (Old Airport Road), Fortis Healthcare (Bannerghatta Road), Narayana Hrudayalaya (Bommasandra) and Aster CMI Hospital (Hebbal) are all examples. The pattern in these facilities is consistent: the Advanced tier of our nurse calling platform (LCD console with dashboards, IP / self-generated Wi-Fi, mobile nurse access, SMS alerts, EMR integration ready) is the default specification, because JCI's IPSG.2 effective-communication and QPS metric-collection requirements push beyond what the Standard tier delivers." },
      { type: "p", text:
        "For JCI-accredited facilities, the Standard tier still has a role — typically in non-critical wards, outpatient observation rooms or recovery areas where the simpler dot-matrix architecture is sufficient and the cost-per-bed is more important than mobile access and dashboards. The Basic tier is generally not specified in JCI-accredited facilities, because the absence of toilet pull-cord, door indicator and Code Blue features makes IPSG.6 and COP.3.2 compliance difficult to demonstrate." },

      { type: "callout", tone: "info", title: "JCI alongside NABH — the dual-accreditation pattern", text:
        "Most Indian premium hospitals run JCI and NABH in parallel rather than choosing between them. The two standards overlap significantly on patient identification, communication and confidentiality, so a single well-specified nurse call architecture supports both accreditations simultaneously. The Advanced tier of our nurse calling range is engineered with both standards in mind — the audit logs, response-time exports and Code Blue documentation it produces are accepted by NABH assessors and JCI surveyors alike." },

      { type: "callout", tone: "warn", title: "Note on clause numbering", text:
        "JCI's Hospital Accreditation Standards are revised on a multi-year cycle and clause numbering shifts between editions (the 7th edition was current at the time of writing, but check whether your hospital's accreditation cycle aligns with the 7th or a newer edition before quoting specific sub-clauses in submission documents). The strategic mapping described above (IPSG.1 patient ID, IPSG.2 communication, IPSG.6 falls, PFR.1.5 confidentiality, COP.3.2 resuscitation, QPS metrics) is stable across recent editions; only the precise sub-clause numbering varies. Verify with your JCI consultant before referencing in a submission." },

      { type: "cta", text: "Designing nurse call infrastructure for a JCI-accredited (or candidate) Indian hospital? Speak with our healthcare engineering team for a site survey aligned to JCI's IPSG, COP and QPS chapters.", href: "/nurse-calling-system", label: "Read about our nurse calling system" },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * Helpers
 * --------------------------------------------------------------------------*/
export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug);
}

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getRelatedPosts(slug, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return POSTS
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sameCategory  = p.category === current.category ? 10 : 0;
      const sharedTags    = (p.tags || []).filter((t) => (current.tags || []).includes(t)).length * 2;
      return { ...p, _score: sameCategory + sharedTags };
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function getPostsByCategory(categoryId) {
  return POSTS.filter((p) => p.category === categoryId);
}

export function getAllPostSlugs() {
  return POSTS.map((p) => p.slug);
}
