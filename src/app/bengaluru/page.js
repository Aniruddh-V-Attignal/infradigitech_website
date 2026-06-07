import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Clock,
  Cpu,
  Factory,
  Hospital,
  Landmark,
  MapPin,
  MessageSquare,
  MonitorPlay,
  Network,
  Phone,
  Pill,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { siteConfig, buildSalesWhatsAppLink, buildTelLink } from "@/config/site";

export const metadata = {
  title:
    "Nurse Calling System, Queue Management & Display Boards in Bengaluru | Infra DigiTech",
  description:
    "Bengaluru's specialist for Nurse Calling Systems, Queue Management Systems, Interest Rate Display Boards, GPS Clocks and Hospital Communication Systems. 25+ years, 5,500+ deployments. ISO 9001:2015 / CE / GeM certified manufacturer based in Banashankari, serving Whitefield, Electronic City, Hebbal, Peenya, Koramangala and all Bengaluru zones.",
  keywords: [
    "Nurse Calling System Bangalore",
    "Nurse Calling System Bengaluru",
    "Queue Management System Bangalore",
    "Queue Management System Bengaluru",
    "Interest Rate Display Board Bangalore",
    "Hospital Communication Systems Bangalore",
    "Token Display System Bangalore",
    "Wireless Nurse Call System Bangalore",
    "Queue Token System Bangalore",
    "Bank Display Systems Bangalore",
    "Digital Display Boards Bangalore",
    "GPS Clock Systems Bangalore",
    "Infra DigiTech Bengaluru",
  ],
  alternates: { canonical: "/bengaluru" },
  openGraph: {
    title:
      "Nurse Calling System, Queue Management & Display Boards in Bengaluru | Infra DigiTech",
    description:
      "Bengaluru's engineering partner for hospital communication, queue management and digital display systems. 25+ years, 5,500+ deployments across Manipal, Sakra, Fortis, Narayana, Canara Bank, Wipro, Toyota Kirloskar and more.",
    type: "website",
    url: `${siteConfig.url}/bengaluru`,
  },
};

/* ----------------------------------------------------------------------------
 * Data
 * --------------------------------------------------------------------------*/

const trustMetrics = [
  { n: "25+", l: "Years of engineering" },
  { n: "5,500+", l: "Deployments" },
  { n: "5,000+", l: "Active clients" },
  { n: "PAN-India", l: "Service network" },
];

const products = [
  {
    id: "nurse-calling-system",
    icon: BellRing,
    eyebrow: "Hospital communication",
    title: "Nurse Calling System in Bengaluru",
    href: "/nurse-calling-system",
    lead:
      "Deployed across some of the largest hospital chains in Bengaluru and Karnataka. A functioning nurse call system is a mandatory requirement for NABH (National Accreditation Board for Hospitals) certification — our systems are engineered to meet that standard out of the box. Wired and wireless variants share the same back-end, so a hospital can upgrade ward-by-ward without ripping out infrastructure.",
    bullets: [
      "NABH-ready — built to satisfy patient-call infrastructure requirements during NABH accreditation and re-accreditation audits.",
      "Wired (RS-485 / 4-core) and wireless (long-range RF with signal hopping) — both supported.",
      "Wired ward and wireless ward in the same building feed a single centralized monitoring station.",
      "Existing 4-core or dot-matrix wiring can be reused — full rewiring is rarely required.",
      "Long-range RF with hopping for basement ICUs, MRI suites and lead-shielded rooms where standard radios drop.",
      "Battery-operated handheld switches for sites without UPS backup and senior-living facilities.",
      "Code Blue, toilet pull-cords, bedside, nurse-station displays and mobile alerts.",
    ],
    industries: ["Multi-specialty hospitals", "ICUs and Critical Care", "Senior-living facilities", "Pharmaceutical units"],
    flagshipClients: [
      { name: "Sakra World Hospital",                                area: "Devarabeesanahalli" },
      { name: "Manipal Hospital",                                    area: "Old Airport Road" },
      { name: "Fortis Healthcare",                                   area: "Bannerghatta Road" },
      { name: "Narayana Hrudayalaya",                                area: "Bommasandra" },
      { name: "Sparsh Hospital",                                     area: "Yeshwanthpur" },
      { name: "Sri Shankara Cancer Hospital",                        area: "Basavanagudi" },
      { name: "Aster CMI Hospital",                                  area: "Hebbal (Bellary Road)" },
      { name: "Syngene International",                               area: "Bommasandra (Biocon Park)" },
      { name: "St John's Medical College",                           area: "Koramangala" },
      { name: "St Philomena's Hospital",                             area: "Neelasandra" },
      { name: "St Martha's Hospital",                                area: "Nrupathunga Road" },
      { name: "St Mark's Hospital",                                  area: "St Mark's Road" },
      { name: "NIMHANS",                                             area: "Hosur Road" },
      { name: "Sri Jayadeva Institute of Cardiovascular Sciences",   area: "Jayanagar (Bannerghatta Road)" },
      { name: "Victoria Hospital (BMCRI)",                           area: "K.R. Market (Fort Road)" },
      { name: "ESIC Medical College & Hospital",                     area: "Rajajinagar" },
      { name: "Command Hospital (Air Force)",                        area: "Agram, Old Airport Road" },
      { name: "PES Hospital",                                        area: "Electronic City" },
      { name: "Jindal Nature Cure Institute",                        area: "Tumkur Road (Jindal Nagar)" },
      { name: "Columbia Pacific Communities",                        area: "Sarjapur Road" },
      { name: "JSS Hospital",                                        area: "Mysore" },
      { name: "Cauvery Hospital",                                    area: "Mysore" },
      { name: "Max Hospital",                                        area: "Shivamogga" },
      { name: "Subbiah Hospital",                                    area: "Shivamogga" },
      { name: "Sarji Hospital",                                      area: "Shivamogga" },
      { name: "Bangalore Baptist Hospital",                          area: "Hebbal (Bellary Road)" },
      { name: "Sanjay Gandhi Institute of Trauma & Orthopaedics",    area: "Byrasandra" },
      { name: "Sathya Sai Super Speciality Hospital",                area: "Chickballapur" },
      { name: "Sathya Sai Hospital",                                 area: "Whitefield" },
      { name: "BGS Gleneagles Global Hospital",                      area: "Nelamangala (Kengeri)" },
      { name: "Hosmat Hospital",                                     area: "Victoria Road" },
      { name: "Bangalore Hospital",                                  area: "R.V. Road" },
      { name: "Apollo Hospital",                                     area: "Jayanagar" },
      { name: "Smiles Hospital",                                     area: "Mathikere" },
      { name: "Milana Hospital",                                     area: "Kumara Park" },
      { name: "Milana Hospital",                                     area: "JP Nagar" },
      { name: "Metro Hospital",                                      area: "Shivamogga" },
      { name: "Malnad Cancer Hospital",                              area: "Shivamogga" },
      { name: "Asian Diagnostics",                                   area: "Diagnostic Centre, Bengaluru" },
    ],
  },
  {
    id: "queue-management-system",
    icon: Users,
    eyebrow: "Queue, token & crowd management",
    title: "Queue Management System (Crowd Management System) in Bengaluru",
    href: "/queue-management-system",
    lead:
      "Also known as a Crowd Management System, our queue platform combines token forwarding, self-service tab kiosks, multi-counter calling and SMS-based tokens — engineered to handle the throughput of Bengaluru's busiest hospitals, diagnostic centres, banks, airports and government counters. Diagnostic centres are one of the largest segments we serve — multi-touchpoint patient journeys (registration → phlebotomy → radiology → reporting) are exactly where our token-forwarding architecture eliminates re-queuing.",
    bullets: [
      "Token forwarding — one token issued at billing follows the patient across lab, X-ray and pharmacy. No re-queuing.",
      "Tab-based self-service kiosks with SMS token delivery — the dispenser line itself disappears.",
      "Multi-counter calling — the same token can be called from any free counter for instant load balancing.",
      "Centralized supervisor dashboards with live wait-time, abandonment and per-counter SLA metrics.",
      "Existing display and counter wiring can be reused. Scales from 4 to 30+ downstream queues per dispenser.",
      "Real-time reporting dashboards and AMC support included.",
    ],
    industries: ["Hospitals", "Diagnostic Centres", "Public-sector banks", "Airports", "Government service counters", "Pharmacies and retail"],
    flagshipClients: [
      { name: "Ramiah Hospital",                  area: "Mathikere (MSR Nagar)" },
      { name: "Sakra World Hospital",             area: "Devarabeesanahalli" },
      { name: "Kempegowda International Airport", area: "Devanahalli" },
      { name: "Passport Seva Kendras",            area: "Lalbagh Road & Koramangala" },
      { name: "India Post",                       area: "Almost all post offices — Bengaluru" },
      { name: "Infosys",                          area: "Electronic City" },
      { name: "Canara Bank",                      area: "HQ — J.C. Road, Bengaluru" },
      { name: "Manipal Hospital",                 area: "Old Airport Road" },
      { name: "Fortis Healthcare",                area: "Bannerghatta Road" },
      { name: "Narayana Hrudayalaya",             area: "Bommasandra" },
      { name: "Sparsh Hospital",                  area: "Yeshwanthpur" },
      { name: "Apollo Pharmacies",                area: "Branch network — Bengaluru" },
      { name: "Christ University",                area: "Hosur Road" },
      { name: "St John's Medical College",        area: "Koramangala" },
      { name: "Bangalore Baptist Hospital",       area: "Hebbal (Bellary Road)" },
      { name: "Asian Diagnostics",                area: "Diagnostic Centre, Bengaluru" },
      { name: "Padmashri Diagnostic Centre",      area: "Vijayanagar" },
      { name: "Lotus Diagnostic Centre",          area: "Indiranagar" },
      { name: "Indian Institute of Science Medical Centre", area: "Malleshwaram (IISc Campus)" },
      { name: "SPAR Hypermarket",                 area: "Multiple stores — Bengaluru" },
      { name: "Airtel Customer Service Centres",  area: "Pan-India network" },
      { name: "BSNL Customer Service Centres",    area: "Pan-India network" },
      { name: "Vodafone Customer Service Centres", area: "Pan-India network" },
    ],
  },
  {
    id: "interest-rate-display",
    icon: TrendingUp,
    eyebrow: "BFSI display systems",
    title: "Interest Rate & Bank Display Boards in Bengaluru",
    href: "/bank-interest-rate-display-board",
    lead:
      "RBI mandates that banks display current interest rates for customers at every branch — making an electronic interest rate board not a nice-to-have but a regulatory requirement. We build centralized rate display networks for public-sector banks operating across Bengaluru and Karnataka. One head-office change updates every connected branch in seconds — no more printed PDFs or manual retyping at the counter.",
    bullets: [
      "RBI-mandate ready — designed for the regulatory requirement that interest rates be displayed visibly to customers at every branch.",
      "Forex, interest rate, gold and silver, bullion, locker availability and pricing boards — one platform, every format.",
      "Centralized head-office controller pushes rate changes to every connected branch within seconds.",
      "Internet-fed mode pulls live forex and bullion rates directly from market data feeds — zero manual entry.",
      "LED for outdoor and large halls. LCD for indoor counter areas where colour and layout matter.",
      "Compatible with existing branch wiring and signage layouts.",
      "BFSI-grade uptime, AMC contracts and same-day fault response inside Bengaluru.",
    ],
    industries: ["Public-sector banks", "Co-operative banks", "Jewellery chains", "Hospitality"],
    flagshipClients: [
      { name: "Canara Bank",          area: "Pan-Karnataka — Bengaluru, Mangalore, Karwar, Shivamogga, Udupi" },
      { name: "Bank of Baroda",       area: "Branch network — Bengaluru" },
      { name: "Union Bank of India",  area: "Branch network — Bengaluru" },
      { name: "Indian Bank",          area: "Branch network — Bengaluru" },
      { name: "Bank of Maharashtra",  area: "Branch network — Bengaluru" },
    ],
  },
  {
    id: "gps-digital-clock",
    icon: Clock,
    eyebrow: "Synchronized time",
    title: "GPS Clock Systems in Bengaluru",
    href: "/gps-digital-clock",
    lead:
      "GPS, NTP (ethernet), RTC and master-slave variants — engineered for Bengaluru's maternity hospital labour rooms, pharma cleanrooms, deep IT-campus interiors and outdoor industrial yards. Birth certificates legally require second-precision time of birth, and our HH:MM:SS GPS clocks settle that across delivery rooms, OTs and NICUs.",
    bullets: [
      "Labour Room / Time-of-Birth clocks — HH:MM:SS GPS precision for birth-certificate documentation. Used across Bengaluru maternity hospitals, OTs and NICUs.",
      "Pharma cleanroom variants — Stainless Steel 304, flush mount, IP65, FDA / GMP compliant.",
      "GPS-synchronized for buildings with clean sky view; Ethernet / NTP for shielded interiors and multi-time-zone walls.",
      "Master-Slave architecture for railway stations, airports and large hospital campuses — one GPS master driving dozens of synchronised slaves over RS-485.",
      "Outdoor variants — IP54 / IP65 / IP66 dust- and water-proof, plus high-brightness P10 LED for direct-sunlight readability.",
      "Standalone RTC for sites with neither GPS nor LAN.",
      "Custom three-sided and four-sided suspended hanging clocks built for shop-floors (Toyota Kirloskar).",
    ],
    industries: ["Maternity hospitals & Labour Rooms", "Pharmaceutical facilities", "IT campuses", "Manufacturing units", "Railway stations & Airports", "Sports venues"],
    flagshipClients: [
      { name: "Wipro",                                  area: "Sarjapur Road" },
      { name: "Yokogawa Bluestar",                      area: "Electronic City" },
      { name: "Toyota Kirloskar",                       area: "Bidadi" },
      { name: "Ashok Leyland",                          area: "Hosur (Bengaluru-Chennai industrial corridor)" },
      { name: "TVS Industries",                         area: "Hosur (Karnataka-Tamil Nadu border)" },
      { name: "Lakshmi Vacuum Technologies",            area: "Peenya Industrial Area" },
      { name: "Maternity hospitals across Bengaluru",   area: "" },
    ],
  },
  {
    id: "industrial-production-display",
    icon: Factory,
    eyebrow: "Andon & shop-floor displays",
    title: "Industrial Production Displays in Bengaluru",
    href: "/industrial-production-display",
    lead:
      "Real-time production-floor visibility — target vs actual count, line status, downtime causes, OEE metrics and Andon escalation. Our industrial production displays go back to our first product line in 2001, when General Electric (opening its Bangalore office) and BEL became our two founding customers. Today the same engineering powers Andon and production-monitoring deployments across the Bengaluru-Hosur industrial corridor, the city's garment manufacturing belt, and pharmaceutical and process-industry facilities.",
    bullets: [
      "Target / actual / variance displays — large-format LED visible from the entire shop floor.",
      "Andon escalation — green (normal), yellow (issue detected), red (line stopped) with audible alarm to the supervisor station.",
      "Downtime cause categorisation — display + log every stop for end-of-shift root-cause analysis.",
      "Quality flag indicators — first-pass yield, defect counts, rework counts per workstation.",
      "Shift KPIs auto-roll over at shift change; daily / weekly / monthly trend reports exportable.",
      "PLC integration over Modbus RTU / TCP, Ethernet/IP and OPC UA for direct MES / SCADA hand-off.",
      "Outdoor IP65 variants for fabrication yards and uncovered production areas.",
    ],
    industries: ["Automotive manufacturing", "Garment & textile industries", "Heavy electrical & power equipment", "Pharmaceutical production", "Food & FMCG production"],
    flagshipClients: [
      { name: "General Electric (GE)",          area: "John F. Welch Technology Centre, Whitefield" },
      { name: "ABB",                            area: "Nelamangala / Peenya, Bengaluru" },
      { name: "Bharat Electronics Limited (BEL)", area: "Jalahalli, Bengaluru" },
      { name: "Everblue Apparels",              area: "Bommanahalli (Garment industry)" },
      { name: "Silver Spark Apparel",           area: "Doddaballapur (Garment industry)" },
      { name: "Europa Garments",                area: "Peenya (Garment industry)" },
      { name: "Toyota Kirloskar Motor",         area: "Bidadi" },
      { name: "Ashok Leyland",                  area: "Hosur" },
      { name: "TVS Industries",                 area: "Hosur" },
    ],
  },
  {
    id: "gold-silver-rate-display",
    icon: TrendingUp,
    eyebrow: "Jewellery & bullion",
    title: "Gold & Silver Rate Display Systems in Bengaluru",
    href: "/gold-silver-rate-display-system",
    lead:
      "Live 24K, 22K, 18K gold and silver rates with auto-feed integration from market data sources — engineered for jewellery showrooms across Bengaluru, Mysore and Karnataka. Indoor LED and outdoor IP55 sun-readable variants. One head-office change updates every connected showroom in seconds; no manual retyping at the counter.",
    bullets: [
      "Live 24K / 22K / 18K gold and silver rates — multi-purity display in a single board.",
      "Auto-feed from market data sources (MCX / authorised aggregator) — manual entry as fallback only.",
      "Centralised head-office controller pushes rate changes to every connected showroom branch within seconds.",
      "Outdoor IP55 sun-readable LED for shopfront installations — high-brightness, daylight-visible.",
      "Indoor LCD for showroom counters where layout and product cross-sell matter.",
      "Audit log of every rate change with timestamp and user — useful for end-of-day reconciliation.",
    ],
    industries: ["Jewellery showrooms", "Gold-loan branches", "Bullion traders", "Pawnbrokers"],
    flagshipClients: [
      { name: "Aabharam Jewellers",       area: "Bengaluru" },
      { name: "Bheema Brothers Jewellers", area: "Mysore" },
      { name: "Sudarshan Jewellers",      area: "Bengaluru" },
      { name: "Krishna Jewellers",        area: "Bengaluru" },
    ],
  },
  {
    id: "forex-display-board",
    icon: Landmark,
    eyebrow: "Money changers & private banks",
    title: "Forex Currency Display Boards in Bengaluru",
    href: "/forex-display-board",
    lead:
      "Live multi-currency forex display for private-sector banks, foreign exchange branches and money changers across Bengaluru. Internet-fed buy/sell rates for up to 16 currencies, centrally managed and audit-logged. RBI's Master Direction on Foreign Exchange requires visible disclosure of applicable rates at every forex-handling branch — our centralised platform satisfies that requirement out of the box.",
    bullets: [
      "Live multi-currency buy / sell rates — up to 16 currencies on a single board.",
      "Internet-fed mode pulls directly from market data feeds — manual entry only as fallback.",
      "Centralised controller — one head-office change reflects across every connected branch in seconds.",
      "Outdoor sun-readable LED for branch shopfronts; indoor LCD for counter areas.",
      "Audit log of every rate change with timestamp and user — RBI-compliance ready.",
      "BFSI-grade uptime SLA with same-day fault response inside Bengaluru.",
    ],
    industries: ["Private-sector banks", "Money changer outlets", "Airport forex counters", "Travel agencies"],
    flagshipClients: [
      { name: "HDFC Bank",          area: "Branch network — Bengaluru" },
      { name: "ICICI Bank",         area: "Branch network — Bengaluru" },
      { name: "Oriental Exchange",  area: "All branches — Bengaluru" },
    ],
  },
  {
    id: "weather-temperature-display",
    icon: Sparkles,
    eyebrow: "Outdoor environmental displays",
    title: "Weather & Temperature Information Displays in Bengaluru",
    href: "/weather-temperature-display",
    lead:
      "Outdoor weather and temperature information displays for university campuses, agricultural research stations and government environmental monitoring sites. Real-time temperature, humidity, rainfall, wind speed and air quality readings on a sun-readable IP65 LED board — engineered for institutional and agricultural deployments across Karnataka.",
    bullets: [
      "Real-time temperature (°C), humidity (RH%), rainfall, wind speed and direction.",
      "Optional AQI (Air Quality Index) and UV index display for environmental monitoring stations.",
      "Sensor inputs over RS-485, Modbus or 4-20 mA — integrates with most weather-station hardware.",
      "Outdoor IP65 sun-readable LED — daylight-visible from a distance.",
      "Solar-powered variant for remote agricultural and research sites without continuous grid power.",
      "Data-logging mode for end-of-day records and research audit trails.",
    ],
    industries: ["Agricultural universities & research stations", "Airport perimeter & runway displays", "Environmental monitoring stations", "Smart-city installations"],
    flagshipClients: [
      { name: "GKVK (University of Agricultural Sciences)", area: "Hebbal, Airport Road, Bengaluru" },
      { name: "Agricultural University",                    area: "Kodagu (Madikeri)" },
      { name: "Agricultural University",                    area: "Bagalkot" },
    ],
  },
  {
    id: "food-counter-display",
    icon: MonitorPlay,
    eyebrow: "QSR, food courts & hotel counters",
    title: "Food Counter & Order Displays in Bengaluru",
    href: "/food-counter-display",
    lead:
      "Order-ready and token displays for quick-service restaurants, food courts, hotel banquet counters and cafeterias. Wi-Fi LCD with multi-language voice announcement (English, Hindi, Kannada, Telugu, Tamil) for premium QSRs; wireless LED token panels for budget cafeterias and small counters. Deployed across QSR chains, hotel kitchens and cafe networks in Bengaluru and beyond.",
    bullets: [
      "Wi-Fi LCD variant — full-colour menu and order token display with multi-language voice announcement.",
      "Wireless LED variant — up to 3 simultaneous tokens, 2.3-inch high-brightness digits.",
      "Centralised back-office controller — kitchen-staff workflow integration over POS-API or order printer interface.",
      "Multi-language voice (Eng / Hin / Kan / Tel / Tam) — switchable per-outlet for QSR chains operating multi-state.",
      "Compact form factor — fits over a counter without obstructing customer sight lines.",
      "Stainless-steel housing variant for hotel kitchens, banquet kitchens and food-court installations.",
    ],
    industries: ["Quick-service restaurants (QSR)", "Food courts", "Hotel banquet & in-room dining", "Corporate cafeterias", "Cafe chains"],
    flagshipClients: [
      { name: "GoPizza",        area: "Multiple outlets — Bengaluru" },
      { name: "Domino's Pizza", area: "Multiple outlets — Bengaluru" },
      { name: "IDC Hotels",     area: "Hotel chain — Bengaluru & beyond" },
      { name: "Cafe Mysore",    area: "Mumbai" },
    ],
  },
];

const differentiators = [
  {
    icon: Settings2,
    title: "Engineered to the site, not the catalogue",
    d: "We customize virtually every deployment to the site's wiring infrastructure, operational workflow, scalability roadmap and RF environment. Off-the-shelf is an option, not a default.",
  },
  {
    icon: Network,
    title: "Integration flexibility — wired + wireless coexist",
    d: "A hospital can start with a wired nurse call on one floor and add wireless on another. Both feed a single centralized monitoring system. Wired and wireless are not mutually exclusive in our architecture.",
  },
  {
    icon: Wrench,
    title: "Existing wiring re-used — not ripped out",
    d: "Most upgrades reuse the building's existing 4-core, RS-485, ethernet or display wiring. We spec around what is already in the walls, which lowers cost and shrinks installation downtime.",
  },
  {
    icon: MapPin,
    title: "On-site survey before quotation",
    d: "Our engineers visit the site — measure RF conditions, audit existing wiring, map the operational workflow, talk to clinical or branch staff — before recommending a system architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Local Bengaluru support, PAN-India reach",
    d: "Banashankari HQ + regional offices + channel partners across India. AMC, on-site service, training, remote support and software integration handled in-house.",
  },
  {
    icon: Sparkles,
    title: "25+ years of fieldwork",
    d: "Since 2001, our RF, embedded firmware, dashboard and integration stack has been refined across thousands of deployments. The reliability is empirical, not theoretical.",
  },
];

const industries = [
  { icon: Hospital,  name: "Hospitals & Healthcare",  d: "Multi-specialty, ICU/CCU, diagnostic centres, senior-living, pharma." },
  { icon: Landmark,  name: "Public-Sector Banks",      d: "Branch automation, interest/forex displays, queue + token systems." },
  { icon: Cpu,       name: "IT & Corporate Campuses",  d: "GPS / NTP clocks, queue management, visitor displays." },
  { icon: Pill,      name: "Pharmaceutical Industries",d: "GMP-compliant clocks, production displays, communication systems." },
  { icon: Factory,   name: "Manufacturing Units",      d: "Andon, shop-floor displays, synchronized clocks, alarms." },
  { icon: ShieldCheck,name: "Government Offices",      d: "Passport Seva, public-sector banks, citizen service centres." },
];

const services = [
  "Installation", "Customization", "Annual Maintenance", "Training",
  "Integration", "Remote Support", "Software Development", "On-site Service",
];

const bengaluruAreas = [
  "Banashankari", "Jayanagar", "Koramangala", "Electronic City", "Peenya",
  "Attibele", "Whitefield", "Hebbal", "Rajajinagar", "Yelahanka",
];

// Bengaluru-specific FAQs only. Generic product/service questions
// (NABH, wired vs wireless, customization, AMC framework, deployment
// timelines, integration, etc.) live on the main /faq page so we don't
// split SEO authority between this page and the global FAQ.
const faqs = [
  {
    q: "Is Infra DigiTech a Bengaluru-only company or do you also operate pan-India and export internationally?",
    a: "Bengaluru is our engineering, manufacturing and primary service HQ — but our operations are pan-India and we are an active exporter. Domestically, our installed footprint covers Karnataka end-to-end and extends across India through a 14-city channel partner network, with project execution and AMC support handled from regional bases. Internationally, we are IEC-licensed (Import-Export Code holder) and export to the GCC, Southeast Asia and Africa. We are also GeM-registered (Government e-Marketplace) for pan-India public-sector procurement and MSME-registered as an Indian manufacturer. Bengaluru's depth on this page reflects our home market — it is the proof, not the boundary, of what we deliver across India and overseas.",
  },
  {
    q: "Where is Infra DigiTech based and which areas of Bengaluru do you serve?",
    a: "Infra DigiTech is headquartered at #971, Venkatesh Murthy Road, 1st Phase Girinagar, Banashankari, Bengaluru 560085. Our service teams cover all major Bengaluru zones including Banashankari, Jayanagar, Koramangala, Electronic City, Whitefield, Peenya, Attibele, Hebbal, Rajajinagar and Yelahanka. For sites in any of these areas, technicians can typically be on-site within working hours for site surveys, installations and AMC service calls.",
  },
  {
    q: "Which hospitals in Bengaluru use Infra DigiTech nurse calling systems?",
    a: "Our nurse calling systems are deployed across major Bengaluru hospitals including Sakra World Hospital (Devarabeesanahalli), Manipal Hospital (Old Airport Road), Fortis Healthcare (Bannerghatta Road), Narayana Hrudayalaya (Bommasandra), Sparsh Hospital (Yeshwanthpur), Sri Shankara Cancer Hospital (Basavanagudi), Aster CMI Hospital (Hebbal, Bellary Road), NIMHANS (Hosur Road), Sri Jayadeva Institute of Cardiovascular Sciences (Jayanagar, Bannerghatta Road), Victoria Hospital / BMCRI (K.R. Market, Fort Road), ESIC Medical College & Hospital (Rajajinagar), Command Hospital Air Force (Agram, Old Airport Road), PES Hospital (Electronic City), St John's Medical College (Koramangala), St Philomena's Hospital (Neelasandra), St Martha's Hospital (Nrupathunga Road) and St Mark's Hospital (St Mark's Road). We have also supplied systems to Syngene International at Biocon Park, Bommasandra (pharmaceutical), Jindal Nature Cure Institute (Tumkur Road, Jindal Nagar) and senior-living facilities including Columbia Pacific Communities (Sarjapur Road) and Kshemavana on the outskirts of Bengaluru.",
  },
  {
    q: "What is token forwarding and where has Infra DigiTech deployed it in Bengaluru?",
    a: "Token forwarding lets one token issued at a single touchpoint — typically billing or registration — automatically follow the patient or customer across every downstream counter. The token does not expire when it is called; it simply moves to the next queue. We deployed this architecture at Ramiah Hospital (Mathikere, MSR Nagar) and Sakra World Hospital (Devarabeesanahalli) in Bengaluru, where it has measurably reduced patient cumulative wait times. Other deployments include queue and crowd management at Kempegowda International Airport (Devanahalli), Infosys (Electronic City), Christ University (Hosur Road), Passport Seva Kendras across Bengaluru and India Post offices across almost every Bengaluru zone.",
  },
  {
    q: "Which banks in Bengaluru and Karnataka use Infra DigiTech interest rate display boards?",
    a: "Our interest rate, forex and locker information display boards are deployed across the Bengaluru branch networks of Canara Bank (headquartered on J.C. Road, Bengaluru), Bank of Baroda, Union Bank of India, Indian Bank and Bank of Maharashtra. For Canara Bank specifically, the deployment extends beyond Bengaluru to a pan-Karnataka rollout — including Mangalore, Karwar, Shivamogga (Shimoga) and Udupi regions — making us one of Canara Bank's largest interest-rate-display infrastructure suppliers in the state. The centralized controller architecture means head-office rate updates reflect across every connected branch in seconds, supporting the RBI requirement to display current applicable interest rates at every branch.",
  },
  {
    q: "Do you also deploy your systems beyond Bengaluru in Karnataka?",
    a: "Yes. While Bengaluru is our primary engineering and service base, our installed footprint covers the wider Karnataka region and spills into the immediate industrial belt around it. Our nurse calling systems are deployed at JSS Hospital (Mysore), Cauvery Hospital (Mysore), Max Hospital (Shivamogga), Subbiah Hospital (Shivamogga) and Sarji Hospital (Shivamogga). Our interest-rate display infrastructure for Canara Bank spans Bengaluru, Mangalore, Karwar, Shivamogga (Shimoga) and Udupi regions. Our GPS clock and synchronized-time installations extend to the Bengaluru-Chennai industrial corridor at Ashok Leyland (Hosur) and TVS Industries (Hosur, on the Karnataka-Tamil Nadu border). Field service for these deployments is dispatched from our Banashankari HQ and supported by our channel partner network — please call the service number on the contact page for an AMC or installation quote anywhere in Karnataka or the Hosur corridor.",
  },
  {
    q: "Do you provide Annual Maintenance Contracts (AMC) in Bengaluru?",
    a: "Yes. Within Bengaluru, our service teams provide same-day or next-working-day response depending on the SLA tier of the contract. AMCs cover preventive maintenance, on-site service calls, spare-part replacement, firmware updates and remote support. We also offer training for in-house facility teams as part of the AMC.",
  },
  {
    q: "Are your GPS clocks suitable for Bengaluru IT campuses and manufacturing facilities?",
    a: "Yes. For IT campuses with deep interior buildings where GPS signal does not penetrate, we deploy ethernet / NTP synchronized clocks that simply plug into the network — Wipro's Sarjapur Road campus and Yokogawa Bluestar's Electronic City facility are two such Bengaluru deployments. For outdoor production yards, our IP-rated dust-resistant and waterproof variants are used. We have also built custom three-sided and four-sided suspended hanging clocks for shop-floor environments — Toyota Kirloskar in Bidadi and Lakshmi Vacuum Technologies in Peenya Industrial Area are deployments in the Bengaluru area.",
  },
  {
    q: "Do you serve government offices and public-sector banks in Bengaluru?",
    a: "Yes. We are a GeM-registered (Government e-Marketplace) vendor and MSME-registered manufacturer. Our systems are deployed at Passport Seva Kendras, multiple public-sector bank branch networks and government service counters across Bengaluru and Karnataka. GeM, GFR and BFSI compliance documentation can be shared on request.",
  },
  {
    q: "Where can I read more general questions about your products and services?",
    a: "For questions that apply nationally — NABH compliance, the difference between wired and wireless nurse calling, deployment timelines, customisation, integration with HMS / ERP, warranty, channel partner programme — see the main FAQ page.",
    link: { label: "Open the main FAQ", href: "/faq" },
  },
];

/* ----------------------------------------------------------------------------
 * Subcomponents
 * --------------------------------------------------------------------------*/

function MetricCard({ n, l }) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {n}
      </div>
      <div className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-cyanx-200">
        {l}
      </div>
    </div>
  );
}

function ProductBlock({ p, index }) {
  const reverse = index % 2 === 1;
  const Icon = p.icon;
  return (
    <section id={p.id} className={`${index % 2 === 1 ? "bg-graphite-50/70" : "bg-white"} border-t border-graphite-100`}>
      <div className="container-default py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Headline + lead */}
          <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-700">
              <Icon size={14} /> {p.eyebrow}
            </div>
            <h2 className="h2 mt-3">{p.title}</h2>
            <p className="mt-4 text-lg text-graphite-600 leading-relaxed">{p.lead}</p>

            <div className="mt-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
                Industries
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.industries.map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-graphite-200 bg-white px-3 py-1 text-xs font-medium text-graphite-700"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={p.href}
              className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition"
            >
              View product details <ArrowRight size={14} />
            </Link>
          </div>

          {/* Capability bullets + flagship clients */}
          <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
              Engineering capabilities
            </h3>
            <ul className="mt-3 space-y-3">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <CheckCircle2 size={18} className="text-cyanx-500 mt-0.5 shrink-0" />
                  <span className="text-graphite-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-graphite-200 bg-white p-5">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
                Bengaluru-area clients
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.flagshipClients.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex flex-col items-start rounded-lg bg-brand-50/80 px-3 py-1.5 border border-brand-100"
                  >
                    <span className="text-xs font-semibold text-brand-800 leading-tight">
                      {c.name}
                    </span>
                    {c.area && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-graphite-600 leading-tight mt-0.5">
                        <MapPin size={9} className="text-brand-500" />
                        {c.area}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }) {
  return (
    <details className="group rounded-xl border border-graphite-200 bg-white open:border-brand-200 open:shadow-card transition">
      <summary className="cursor-pointer list-none flex items-start gap-4 p-5 sm:p-6">
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 group-open:bg-brand-600 group-open:text-white transition">
          <span className="text-base font-bold leading-none group-open:rotate-45 transition-transform">+</span>
        </span>
        <span className="flex-1 text-base sm:text-lg font-semibold text-graphite-900 leading-snug">
          {q}
        </span>
      </summary>
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[60px] sm:pl-[72px] -mt-2">
        <p className="text-graphite-600 leading-relaxed">{a}</p>
      </div>
    </details>
  );
}

/* ----------------------------------------------------------------------------
 * Main page
 * --------------------------------------------------------------------------*/

export default function BengaluruPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Bengaluru", item: `${siteConfig.url}/bengaluru` },
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/bengaluru#localbusiness`,
    name: siteConfig.name,
    alternateName: ["Infra DigiTech", "DigiTech", "Digi-Tech Solutions"],
    description:
      "Bengaluru-based ISO 9001:2015, CE certified and GeM-registered manufacturer of Nurse Calling Systems, Queue Management Systems, Interest Rate Display Boards, GPS Clocks and Hospital Communication Systems. 25+ years of engineering. Serving hospitals, public-sector banks, IT campuses, pharmaceutical industries, manufacturing units and government offices across Bengaluru and India.",
    url: `${siteConfig.url}/bengaluru`,
    telephone: siteConfig.contact.salesMobile,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.logo}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    priceRange: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}, ${siteConfig.contact.address.line3}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      // Girinagar 1st Phase, Banashankari — matches the actual head-office address
      "@type": "GeoCoordinates",
      latitude: 12.9417,
      longitude: 77.5481,
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      "Banashankari", "Jayanagar", "Koramangala", "Electronic City", "Peenya",
      "Attibele", "Whitefield", "Hebbal", "Rajajinagar", "Yelahanka",
      ...(siteConfig.channelPartnerCities || []).map((c) => ({
        "@type": "City",
        name: c.name,
        containedInPlace: { "@type": "AdministrativeArea", name: c.state },
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      ...Object.values(siteConfig.social || {}),
      ...Object.values(siteConfig.directories || {}),
    ].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Infra DigiTech Bengaluru — Product Catalogue",
      itemListElement: products.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: p.title,
          url: `${siteConfig.url}${p.href}`,
        },
      })),
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* ====================  HERO  ==================== */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyanx-400/30 bg-black/30 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cyanx-300">
                <MapPin size={12} /> Banashankari, Bengaluru · ISO 9001:2015 · CE · GeM · MSME
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] text-white">
                Bengaluru's engineering partner for{" "}
                <span className="bg-gradient-to-r from-cyanx-400 via-cyanx-300 to-brand-200 bg-clip-text text-transparent">
                  nurse call, queue management & display systems.
                </span>
              </h1>
              <p className="mt-5 text-lg text-graphite-200 leading-relaxed max-w-2xl">
                25+ years and 5,500+ deployments across hospitals, public-sector banks,
                IT campuses and government institutions in Bengaluru and across India.
                Infra DigiTech designs, manufactures and integrates electronic communication
                systems — engineered to the site, not pulled off a catalogue shelf.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-cyanx-50 transition"
                >
                  Request Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href={siteConfig.forms.enquiry}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 px-5 py-2.5 text-sm font-bold text-white border border-brand-400 transition"
                >
                  Get Quote
                </a>
                <a
                  href={buildSalesWhatsAppLink()}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1ebe57] transition"
                >
                  <MessageSquare size={16} /> WhatsApp Sales
                </a>
              </div>

              {/* Trust metrics */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl">
                {trustMetrics.map((m) => (
                  <MetricCard key={m.l} n={m.n} l={m.l} />
                ))}
              </div>
            </div>

            {/* Quick-jump card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyanx-300">
                  Jump to product
                </p>
                <div className="mt-3 grid gap-2">
                  {products.map((p) => {
                    const Icon = p.icon;
                    return (
                      <a
                        key={p.id}
                        href={`#${p.id}`}
                        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-black/30 hover:border-cyanx-300/40 transition"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyanx-400/10 text-cyanx-300">
                          <Icon size={18} />
                        </span>
                        <span className="flex-1 text-sm font-semibold text-white">{p.title.replace(" in Bengaluru", "")}</span>
                        <ArrowRight size={14} className="text-white/40 group-hover:text-cyanx-300 group-hover:translate-x-0.5 transition" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 text-xs text-graphite-300 leading-relaxed">
                  Service teams cover Banashankari, Jayanagar, Koramangala, Electronic City,
                  Whitefield, Peenya, Attibele, Hebbal, Rajajinagar and Yelahanka.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================  INTRODUCTION  ==================== */}
      <section className="bg-white border-t border-graphite-100">
        <div className="container-default py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                About this page
              </span>
              <h2 className="h2 mt-3">
                A long-term technology partner for Bengaluru institutions.
              </h2>
            </div>
            <div className="lg:col-span-7 text-lg text-graphite-700 leading-relaxed space-y-5">
              <p>
                Headquartered in Banashankari, Bengaluru, Infra DigiTech has been the engineering
                partner for some of Karnataka's most demanding electronic communication
                deployments for more than two and a half decades. From the long-corridor wards of
                Manipal, Sakra, Fortis and Narayana Hrudayalaya, to the multi-counter halls of
                Canara Bank and Bank of Baroda, to the production floors of Toyota Kirloskar and
                Wipro — our systems are running in the buildings that define Bengaluru's
                healthcare, banking and industrial landscape.
              </p>
              <p>
                We design, manufacture and integrate four product families that share a common
                engineering DNA: <strong>Nurse Calling Systems</strong>,{" "}
                <strong>Queue Management & Token Systems</strong>,{" "}
                <strong>Interest Rate / Forex / Pricing Display Boards</strong>, and{" "}
                <strong>GPS-synchronized clocks</strong>. Each deployment is engineered to the
                site — its wiring infrastructure, RF environment, operational workflow and growth
                roadmap.
              </p>
              <p>
                We are not a reseller. We are a Bengaluru-based ISO 9001:2015, CE certified,
                GeM-registered manufacturer with in-house electronics, embedded firmware,
                installation and software teams. That vertical control is what lets us customize
                almost every deployment without inflating timelines or cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================  PRODUCTS  ==================== */}
      {products.map((p, i) => (
        <ProductBlock key={p.id} p={p} index={i} />
      ))}

      {/* ====================  WHY INFRA DIGITECH  ==================== */}
      <section className="bg-graphite-50/70 border-t border-graphite-100">
        <div className="container-default py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
              Why Infra DigiTech
            </span>
            <h2 className="h2 mt-3">A systems integration company — not a hardware supplier.</h2>
            <p className="mt-4 text-lg text-graphite-600 leading-relaxed">
              The six engineering principles that make our Bengaluru deployments hold up at scale,
              across decades and across building renovations.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-graphite-200 bg-white p-6 hover:border-brand-300 hover:shadow-card transition"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-cyanx-500 text-white shadow-glow">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-graphite-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-graphite-600 leading-relaxed">{d.d}</p>
                </div>
              );
            })}
          </div>

          {/* Services strip */}
          <div className="mt-12 rounded-2xl border border-graphite-200 bg-white p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Wrench size={18} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-graphite-500">
                  End-to-end services
                </p>
                <p className="text-sm text-graphite-700">
                  Everything from first site survey to long-term AMC handled in-house.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full bg-graphite-50 border border-graphite-200 px-3 py-1 text-xs font-semibold text-graphite-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================  INDUSTRIES  ==================== */}
      <section className="bg-white border-t border-graphite-100">
        <div className="container-default py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
              Industries we serve in Bengaluru
            </span>
            <h2 className="h2 mt-3">Where our systems run.</h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.name}
                  className="rounded-2xl border border-graphite-200 bg-white p-6 hover:border-brand-300 transition"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-graphite-900">{i.name}</h3>
                  <p className="mt-1.5 text-sm text-graphite-600">{i.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================  COVERAGE  ==================== */}
      <section className="bg-graphite-50/70 border-t border-graphite-100">
        <div className="container-default py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                <MapPin size={12} /> Bengaluru service coverage
              </span>
              <h2 className="h2 mt-3">On-site teams across the metro and industrial belt.</h2>
              <p className="mt-4 text-graphite-600 leading-relaxed">
                Our Banashankari headquarters and technician teams cover the full Bengaluru metro,
                from the hospital corridors of South Bengaluru to the IT and manufacturing zones
                in the east, north and outer ring. AMC service calls, surveys and installations
                across these areas are typically scheduled within working hours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-graphite-200 bg-white p-6 sm:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-graphite-500">
                  Areas covered
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {bengaluruAreas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-50/80 border border-brand-100 px-3.5 py-1.5 text-sm font-semibold text-brand-800"
                    >
                      <MapPin size={12} /> {a}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-graphite-200">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-graphite-500">
                    Regional network — beyond Bengaluru
                  </p>
                  <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
                    Sites outside Bengaluru metro are covered by our regional offices and an
                    authorized channel-partner network across 15 cities — and through them, the
                    surrounding states and tier-2 / tier-3 towns.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {siteConfig.channelPartnerCities.map((c) => (
                      <span
                        key={c.name}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                          c.hq
                            ? "bg-brand-600 text-white border border-brand-700"
                            : "bg-graphite-50 text-graphite-700 border border-graphite-200"
                        }`}
                        title={c.state}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================  FAQ  ==================== */}
      <section className="bg-white border-t border-graphite-100">
        <div className="container-default py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  Frequently asked
                </span>
                <h2 className="h2 mt-3">Bengaluru deployment FAQs.</h2>
                <p className="mt-4 text-graphite-600 leading-relaxed">
                  The questions our Bengaluru customers — hospitals, banks, IT campuses and
                  government offices — most often ask before signing off on a system.
                </p>
                <div className="mt-6 rounded-xl border border-graphite-200 bg-graphite-50/60 p-5">
                  <p className="text-sm font-semibold text-graphite-900">
                    Have a more specific question?
                  </p>
                  <p className="mt-1 text-sm text-graphite-600">
                    Our engineers can scope your site directly.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-brand-700 transition"
                    >
                      Contact Bengaluru team <ArrowRight size={12} />
                    </Link>
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-graphite-300 bg-white px-3.5 py-2 text-xs font-bold text-graphite-700 hover:border-brand-400 hover:text-brand-700 transition"
                    >
                      Full FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================  FINAL CTA  ==================== */}
      <section className="relative overflow-hidden bg-graphite-950 text-white border-t border-graphite-100">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20 text-center">
          <h2 className="h2 text-white">Talk to the Bengaluru team.</h2>
          <p className="mt-3 text-lg text-graphite-200 max-w-2xl mx-auto">
            Tell us your site constraints — building age, existing wiring, RF environment, scale
            targets. Our engineers will scope a system that fits your operations today and your
            roadmap for the next decade.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-cyanx-50 transition"
            >
              Request Consultation <ArrowRight size={16} />
            </Link>
            <a
              href={buildSalesWhatsAppLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1ebe57] transition"
            >
              <MessageSquare size={16} /> WhatsApp Sales
            </a>
            <a
              href={buildTelLink(siteConfig.contact.salesMobile)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              <Phone size={16} /> {siteConfig.contact.salesMobile}
            </a>
          </div>
          <p className="mt-6 text-xs text-graphite-300">
            ISO 9001:2015 · CE · GeM Registered · MSME · Made in India · 25+ Years of Engineering
          </p>
        </div>
      </section>
    </>
  );
}
