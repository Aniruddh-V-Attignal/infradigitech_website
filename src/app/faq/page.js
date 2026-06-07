import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import {
  Building2, Boxes, Cpu, FileText, Wrench, Phone, MessageCircle,
  ChevronRight, ShieldCheck, Globe2, Plug, MapPin, Settings2, ScrollText, Cable,
  HelpCircle, Sparkles, Headphones,
} from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Infra DigiTech",
  description:
    "Answers to common questions about Infra DigiTech's nurse calling, queue management, banking display boards, GPS clocks, food counter displays, electronic scoreboards, certifications, service, quotes, exports, integrations, customization and government procurement.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Infra DigiTech",
    description:
      "Curated Q&A about products, software, service, certifications and how to order - for customers and AI answer engines.",
  },
};

const groups = [
  {
    id: "about",
    iconUrl: "https://api.iconify.design/ph/buildings-bold.svg?color=%231d4ed8",
    title: "About",
    description: "Company, history, certifications, sectors served.",
    icon: Building2,
    color: "from-brand-500 to-brand-700",
    items: [
      {
        q: "What is Infra DigiTech Pvt Ltd?",
        a: "Infra DigiTech Pvt Ltd is an ISO 9001:2015 and CE certified, GeM-registered Indian manufacturer of digital display systems, IoT devices, healthcare communication systems and embedded electronics. The company was founded in January 2001 by A.N. Venkatesh and was incorporated as a Private Limited entity in 2026. It is headquartered in Bengaluru, Karnataka.",
      },
      {
        q: "When was Infra DigiTech founded and how has the company evolved?",
        a: "Digitech was founded in January 2001 by Mr. A.N. Venkatesh as a proprietorship firm in Bengaluru. In 2017, the business was restructured as a partnership and traded as Digi-Tech Solutions. In January 2026, the company was formally incorporated as Infra DigiTech Pvt Ltd - a private limited company - carrying forward more than 25 years of engineering experience in digital displays, healthcare communication, queue management, IoT and embedded systems.",
        link: { label: "Read our story", href: "/about" },
      },
      {
        q: "Where is Infra DigiTech based?",
        a: "We are based in Bengaluru, Karnataka, India. We design, manufacture and ship across India and export-ready products to GCC, Southeast Asia and Africa.",
      },
      {
        q: "What certifications and registrations does Infra DigiTech hold?",
        a: "We are ISO 9001:2015 and CE certified, GeM-registered, MSME-registered, Made in India and Export Ready. We also hold an IEC code and are DGFT registered for export. GSTIN: 29AAICI6485L1ZQ. CIN: U27900KA2026PTC214614.",
      },
      {
        q: "Which sectors does Infra DigiTech serve?",
        a: "We serve healthcare, BFSI / banking & finance, hospitality, airports & transport, corporate & public sector, factories & industrial, sports & entertainment, and retail / food courts.",
      },
    ],
  },

  {
    id: "products",
    iconUrl: "https://api.iconify.design/ph/cube-bold.svg?color=%231d4ed8",
    title: "Products",
    description: "Catalogue, variants, tiers and use-cases.",
    icon: Boxes,
    color: "from-cyanx-500 to-brand-600",
    items: [
      {
        q: "What products does Infra DigiTech manufacture?",
        a: "We manufacture banking display systems (forex, interest rate, gold/silver, locker), queue & token management systems, nurse calling systems, GPS digital clocks, world clocks, OT timers, panic alarms, food counter displays, pricing display boards, weather displays, church prayer displays, industrial production / Andon displays and electronic scoreboards.",
        link: { label: "View the full catalogue", href: "/products" },
      },
      {
        q: "What is the difference between a wired and a wireless Nurse Calling System?",
        a: "A wired nurse calling system uses physical cabling (RS-485 or 4-core) between bedside units, pull-cords and the nurse station - rock-solid reliability, ideal for new construction or ICU/critical wards where cabling can be planned. A wireless variant uses RF / Wi-Fi between calling units and the nurse station - faster to deploy, retrofit-friendly for existing buildings, and a better fit for clinics, small wards and tenanted hospital floors. Infra DigiTech offers both: the Advanced tier uses an IP / self-generated Wi-Fi backbone with dashboards and mobile alerts, the Standard tier is a wired dot-matrix system, and the Basic tier is available as either Wireless RF or Wired LED depending on what you prefer.",
        link: { label: "Open Nurse Calling page", href: "/nurse-calling-system" },
      },
      {
        q: "What are the variants of the Nurse Calling System?",
        a: "Our Nurse Calling System comes in three engineered tiers - Advanced (LCD with dashboards, IP/Wi-Fi, mobile nurse access, SMS alerts, up to 30 beds), Standard (Dot Matrix Wired, up to 26 beds) and Basic (Wireless RF or Wired LED, up to 25 beds). All three tiers support bedside calling. Toilet pull-cord switches, door indicators (lit during a call, blinking on Code Blue) and Code Blue emergency alerts are available on the Advanced and Standard tiers - they are not part of the Basic tier, which is positioned as a low-cost wired-LED or wireless-RF panel for small wards, polyclinics and budget-constrained sites.",
        link: { label: "Open Nurse Calling page", href: "/nurse-calling-system" },
      },
      {
        q: "Which features are available on each Nurse Calling tier - Advanced, Standard and Basic?",
        a: "Advanced tier includes bedside calling units, toilet pull-cord switches, door indicators with Code Blue blink mode, LCD nurse-station console, dashboards, mobile nurse access, SMS alerts, call forwarding and HIS / EMR integration readiness. Standard tier includes bedside calling units, toilet pull-cord switches, door indicators with Code Blue blink mode and a dot-matrix nurse-station panel with audible alert. Basic tier is a low-cost bedside-only system - wireless RF or wired LED nurse-station panel - and does NOT include toilet pull-cord switches, door indicators or Code Blue alerts. Choose Advanced or Standard if your ward requires NABH-grade patient-call coverage; choose Basic only for cost-sensitive deployments where bedside calling alone is sufficient.",
        link: { label: "Open Nurse Calling page", href: "/nurse-calling-system" },
      },
      {
        q: "What are the variants of the Queue Management System?",
        a: "Three tiers - Advanced (Wireless LCD with TAB kiosk, up to 15 queues, multi-language voice), Standard (Wireless LED, up to 2 queues, auto-cutter ticket printer) and Basic (Wireless LED single-queue). We also offer a standalone Token Display in 3-digit and 4-digit variants.",
        link: { label: "Open Queue Management page", href: "/queue-management-system" },
      },
      {
        q: "Do you make Forex Display Boards, Interest Rate boards and Gold/Silver boards for banks and jewellers?",
        a: "Yes. Forex Display Boards show live multi-currency buy/sell rates (LAN / Wi-Fi / 4G, up to 16 currencies, audit-logged). Bank Interest Rate Display Boards render FD/RD/savings/loan/NRI rates with centralised remote updates. Gold & Silver Rate Display Boards show live 24K/22K/18K and silver rates with auto-feed integration, available as indoor or sun-readable outdoor IP55 variants.",
      },
      {
        q: "Do you make Operation Theatre (OT) Timers, GPS clocks and Scoreboards?",
        a: "Yes. Our OT Timer also doubles as a Project Countdown Timer (Total / Anesthesia / Surgery / Tourniquet modes). GPS Digital Clocks ship with GPS / NTP / RTC sync, indoor and outdoor (IP65) variants, single/double/three-sided mounts. Electronic Scoreboards cover cricket, football, basketball and kabaddi (outdoor IP65, sun-readable, custom up to 6 m x 3 m).",
      },
      {
        q: "Is a nurse call system required for NABH accreditation?",
        a: "Yes. NABH (National Accreditation Board for Hospitals and Healthcare Providers) audits require hospitals to demonstrate a functional patient-to-nurse call infrastructure across patient wards, ICUs and critical care areas. Infra DigiTech's Advanced and Standard nurse calling tiers - wired, wireless and hybrid - are engineered to satisfy that requirement, including bedside calling, toilet pull-cord switches, door indicators, Code Blue alerts, nurse-station logging and centralised monitoring. The Basic tier provides bedside calling only and is not positioned for NABH-accredited wards - it is a cost-effective option for small wards, polyclinics or non-accredited facilities. We can also produce documentation and SLA reports auditors typically ask for during NABH accreditation and re-accreditation cycles.",
        link: { label: "Open Nurse Calling page", href: "/nurse-calling-system" },
      },
      {
        q: "What is a Crowd Management System and how is it different from a Queue Management System?",
        a: "They are the same product platform. 'Crowd Management System' is the term used in airports, government counters, large hospitals and public events — anywhere the focus is on orderly movement of large numbers of people. 'Queue Management System' is the more common term in banks, clinics and retail. Both run on our same token, kiosk, multi-counter calling and supervisor-dashboard stack. The architecture scales from a 4-counter clinic to airport-scale federated deployments.",
        link: { label: "Open Queue Management page", href: "/queue-management-system" },
      },
      {
        q: "Can a wired nurse calling system coexist with a wireless one in the same hospital?",
        a: "Yes — this is one of our core engineering strengths. A hospital can run wired (RS-485 / 4-core) nurse call on one floor or wing and wireless (RF) nurse call on another, with both feeding a single centralised monitoring station at the nurse desk. This lets hospitals upgrade ward-by-ward without ripping out existing infrastructure or replacing their entire system at once.",
        link: { label: "Open Nurse Calling page", href: "/nurse-calling-system" },
      },
      {
        q: "Can existing wiring infrastructure be reused when upgrading to a new system?",
        a: "In most cases, yes. Our systems are designed to work with existing 4-core, RS-485, ethernet and display wiring. During our on-site survey our technicians audit the existing cabling, and we typically reuse it rather than rip it out. This significantly lowers installation cost and reduces operational downtime during the upgrade.",
      },
      {
        q: "What is the typical scale of a queue token system you deploy?",
        a: "Our token dispenser platform can technically drive dozens of downstream queues from a single touchpoint. In practice, for the cleanest patient or customer experience, we recommend a 30-queue ceiling per dispenser. Larger sites use multiple dispensers federated under a single supervisor dashboard — this is how deployments at Kempegowda International Airport and Passport Seva Kendras are architected.",
        link: { label: "Open Queue Management page", href: "/queue-management-system" },
      },
    ],
  },

  {
    id: "software",
    iconUrl: "https://api.iconify.design/ph/code-bold.svg?color=%231d4ed8",
    title: "Software & Automation",
    description: "Embedded systems, custom software, integrations.",
    icon: Cpu,
    color: "from-brand-600 to-cyanx-500",
    items: [
      {
        q: "Does Infra DigiTech provide software development services?",
        a: "Yes - Infra DigiTech is also a software & automation company. We deliver Embedded Systems (firmware, PCB design, IoT, microcontroller-based controllers), Custom Software (queue, nurse-call, banking, production monitoring), Web & Ecommerce (React, Next.js, WordPress, Shopify, WooCommerce) and Enterprise Applications (dashboards, multi-branch portals, workflow automation).",
        link: { label: "Open Software & Automation", href: "/software-automation" },
      },
      {
        q: "Can Infra DigiTech systems integrate with existing software, HMS or ERP platforms?",
        a: "Yes. Our products are built to integrate with the systems you already run. We deliver standard REST API integrations with Hospital Information Systems (HMS) / EMR for nurse calling, queue and OT applications; PLC / SCADA / MES integration for industrial production and Andon displays; and ERP / banking back-office integration for forex, interest rate and locker displays. We also support Modbus, MQTT and OPC-UA at the device layer, and can build custom connectors for centralised management across multi-branch or multi-site deployments.",
        link: { label: "Talk to our integration team", href: "/contact" },
      },
      {
        q: "Can Infra DigiTech customize products based on client requirements?",
        a: "Yes - customisation is one of the things we do best. As an in-house OEM with PCB design, firmware, sheet-metal fabrication and software all under one roof in Bengaluru, we can tailor display sizes, digit heights, colours, mounts, enclosures, languages, voice prompts, branding, communication protocols and integrations to your spec. Whether you need a custom LED display, a queue management system tuned to your workflow, an Andon dashboard, or a private-label OEM product line, we deliver tailored solutions for B2B, government and export customers.",
        link: { label: "Discuss your requirement", href: "/contact" },
      },
      {
        q: "Can you build embedded firmware or IoT devices for our project?",
        a: "Yes. Every Infra DigiTech display, calling unit and controller runs on firmware we wrote in-house. We offer that same capability - microcontroller-based system development, PCB design, IoT, wireless communication (RF / LoRa / Wi-Fi / Ethernet) and cloud-connected embedded platforms - as a service.",
        link: { label: "Embedded systems", href: "/software-automation#embedded" },
      },
    ],
  },

  {
    id: "buying",
    iconUrl: "https://api.iconify.design/ph/file-text-bold.svg?color=%231d4ed8",
    title: "Quotes & Orders",
    description: "Pricing, lead times, exports, government procurement.",
    icon: FileText,
    color: "from-cyanx-400 to-brand-700",
    items: [
      {
        q: "How do I request a quote?",
        a: `The fastest path is our online enquiry form - our sales team replies within one business day with a tailored quotation. You can also call ${siteConfig.contact.salesMobile} or WhatsApp the same number, or email ${siteConfig.contact.email}.`,
        link: { label: "Request a Quote", href: siteConfig.forms.enquiry, external: true },
      },
      {
        q: "Do you support government projects and GeM procurement?",
        a: "Yes. Infra DigiTech is MSME and GeM-registered and we undertake government and PSU projects all across India - banks, hospitals, defence, railways, airports, municipal corporations and state government departments. We are tender-eligible, can submit BoQ-based bids, and supply against GeM orders, rate contracts and direct purchase orders. We also hold an IEC code and are DGFT registered for export to GCC, Southeast Asia and Africa.",
        link: { label: "Talk to our government sales team", href: "/contact" },
      },
      {
        q: "What payment terms do you offer?",
        a: "Standard commercial terms apply - typically 50% advance against PO, balance on dispatch or installation milestone, depending on project size and sector. GST as applicable. For GeM and government orders we follow the contract payment terms.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes - we are export-ready with CE-certified products for GCC, Southeast Asia and Africa. Voltage, language and compliance variants are available. We hold an IEC code and are DGFT registered for export.",
      },
      {
        q: "Where can I download product brochures and datasheets?",
        a: "All product PDF brochures are available on our Catalogues page with a searchable index.",
        link: { label: "Open Catalogues", href: "/downloads" },
      },
    ],
  },

  {
    id: "service",
    iconUrl: "https://api.iconify.design/ph/wrench-bold.svg?color=%231d4ed8",
    title: "Service & Support",
    description: "Installation, AMC, on-site, warranty, India coverage.",
    icon: Wrench,
    color: "from-graphite-700 to-brand-600",
    items: [
      {
        q: "Do you provide installation and support services across India?",
        a: "Yes - we deliver installation, commissioning and after-sales service across India through our own engineering teams in the major metros and an authorised channel-partner network covering the rest of the country. Most installations are scheduled within 1-2 weeks of dispatch; emergency on-site service is typically arranged within 24-72 hours. Please call our sales line for the nearest Infra DigiTech presence or authorised partner who can support your location.",
        link: { label: "Talk to sales for your location", href: "/contact" },
      },
      {
        q: "How do I raise a service request for an existing installation?",
        a: `Use our dedicated Service Request page. Our service desk acknowledges every ticket within 4 business hours and typically resolves remotely or on-site within 24-72 hours. The service line is ${siteConfig.contact.serviceMobile} (call or WhatsApp).`,
        link: { label: "Open Service Request", href: "/service-request" },
      },
      {
        q: "Do you offer Annual Maintenance Contracts (AMC)?",
        a: "Yes - comprehensive and non-comprehensive AMCs are available for all installed product lines. Request via the service form or call our service line.",
        link: { label: "Service line", href: "/service-request" },
      },
      {
        q: "Do you buy back old or end-of-life systems when we upgrade?",
        a: "Yes - we run a buy-back programme for old Infra DigiTech installations. Whether the existing system is still working or not, we will buy it back at a nominal value or give you a meaningful discount on the new replacement. That way you can upgrade hospitals, bank branches, factories and counter halls to current-generation hardware without worrying about what to do with the old equipment. Every unit we take back is routed to certified e-waste recyclers, so the legacy kit is responsibly disposed of rather than dumped.",
        link: { label: "Talk to us about a buy-back or upgrade", href: "/service-request" },
      },
      {
        q: "What is the warranty on your products?",
        a: "Standard warranty is 12 months from date of installation on most product lines. Extended warranty options are available on request. Important: warranty applies only when the system is operated with Infra DigiTech-supplied consumables (see the next question on paper rolls for token printers).",
      },
      {
        q: "Do you supply paper rolls for the Queue Management System and token dispenser printers? Is using third-party paper covered under warranty?",
        a: "Yes. We supply genuine paper rolls specifically engineered for our Queue Management Systems and token dispenser printers. Our rolls are manufactured to the correct grammage, surface coating and core size for our printer mechanism — this is what gives reliable feeding, clean thermal print quality and noticeably longer print-head and cutter life. Using third-party paper rolls of incorrect specification is the single most common cause of paper jams, sensor mis-reads and printer-mechanism wear. For that reason, the printer mechanism warranty on our token dispensers is valid only when Infra DigiTech-supplied paper rolls are used. Any printer fault traced to third-party paper (jam damage, cutter blade wear, head abrasion or sensor contamination) will not be covered under warranty. We recommend that customers order their paper-roll requirement from us at the time of AMC renewal or any reorder cycle.",
        link: { label: "Order paper rolls via service line", href: "/service-request" },
      },
      {
        q: "How long does a typical queue management or nurse call deployment take?",
        a: "Timelines depend on site scale and complexity, but typical deployments run as follows: site survey and architecture proposal within 5-7 working days, installation and commissioning within 2-4 weeks for a single ward or branch, and 4-8 weeks for a full multi-floor hospital or multi-branch bank rollout. Wireless retrofits are usually faster than wired new-builds.",
        link: { label: "Talk to our engineering team", href: "/contact" },
      },
    ],
  },

  {
    id: "contact",
    iconUrl: "https://api.iconify.design/ph/phone-call-bold.svg?color=%231d4ed8",
    title: "Contact",
    description: "Phone, WhatsApp, email, office address & hours.",
    icon: Phone,
    color: "from-brand-700 to-graphite-800",
    items: [
      {
        q: "How can I contact Infra DigiTech?",
        a: `Sales (calls + WhatsApp): ${siteConfig.contact.salesMobile}. Service & Support (calls + WhatsApp): ${siteConfig.contact.serviceMobile}. Email: ${siteConfig.contact.email}. Hours: ${siteConfig.contact.hours}.`,
        link: { label: "Open Contact page", href: "/contact" },
      },
      {
        q: "Which number should I call for pricing vs for service?",
        a: `Sales line (${siteConfig.contact.salesMobile}) for pricing, quotations, new orders and partnerships. Service line (${siteConfig.contact.serviceMobile}) for support on existing installations, AMC and repair tickets.`,
      },
      {
        q: "How do I become a dealer, distributor or channel partner?",
        a: "We are actively expanding our partner network across India and key export markets. If you represent a system integrator, distributor or dealer business serving banking, healthcare, hospitality, government, industrial or sports clients, we'd love to talk. Fill our dedicated Channel Partner evaluation form or call sales directly.",
        link: { label: "Open Channel Partner form", href: siteConfig.forms.channelPartner, external: true },
      },
    ],
  },
];

const faqJsonLd = groups.flatMap((g) => g.items.map(({ q, a }) => ({ q, a })));
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "FAQ",  url: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <StructuredData type="FAQPage" data={faqJsonLd} />
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", ".lead", "h3"] }} />

      {/* Hero */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <span className="eyebrow eyebrow-dark">Knowledge base</span>
          <h1 className="h1 mt-2 text-white">Frequently Asked Questions</h1>
          <p className="lead mt-4 text-lg text-graphite-200 max-w-3xl">
            Answers about our products, software, certifications, integrations, quotes, government procurement and service. If your question isn't covered here, our team replies within one business day.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-brand-700 px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-brand-50 transition"
            >
              <Phone size={16} /> Talk to our team
            </Link>
            <a
              href={siteConfig.forms.enquiry}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-cyanx-400 text-graphite-950 px-5 py-2.5 text-sm font-bold shadow-sm hover:bg-cyanx-300 transition"
            >
              Request a quote
            </a>
          </div>
        </div>
      </section>

      {/* Quick index - clean professional grid with Phosphor icons */}
      <Section variant="soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="group flex items-center gap-4 rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-graphite-200 hover:ring-brand-300 hover:shadow-[0_10px_40px_-15px_rgba(29,78,216,0.22)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-100 transition">
                <g.icon size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-base font-bold text-graphite-900 truncate">{g.title}</h3>
                  <span className="text-[11px] font-semibold text-graphite-400 tabular-nums">
                    {g.items.length}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-graphite-500 leading-relaxed line-clamp-1">
                  {g.description}
                </p>
              </div>
              <ChevronRight
                size={16}
                className="shrink-0 text-graphite-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition"
              />
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ groups */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {groups.map((g) => (
            <div key={g.id} id={g.id} className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className={`rounded-xl bg-gradient-to-br ${g.color} p-2.5 text-white`}>
                  <g.icon size={20} />
                </div>
                <h2 className="h3 text-graphite-900">{g.title}</h2>
              </div>

              <div className="space-y-4">
                {g.items.map((item, i) => (
                  <details
                    key={`${g.id}-${i}`}
                    className="group card p-0 overflow-hidden"
                    {...(i === 0 ? { open: true } : {})}
                  >
                    <summary className="cursor-pointer list-none flex items-start gap-4 p-5 sm:p-6 hover:bg-graphite-50/60 transition">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 group-open:bg-brand-600 group-open:text-white transition">
                        <Sparkles size={14} className="group-open:hidden" />
                        <HelpCircle size={14} className="hidden group-open:inline" />
                      </span>
                      <span className="flex-1 text-base sm:text-lg font-semibold text-graphite-900 leading-snug">
                        {item.q}
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[60px] sm:pl-[72px] -mt-2">
                      <p className="text-graphite-600 leading-relaxed whitespace-pre-line">
                        {item.a}
                      </p>
                      {item.link && (
                        <a
                          href={item.link.href}
                          target={item.link.external ? "_blank" : undefined}
                          rel={item.link.external ? "noopener" : undefined}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                        >
                          {item.link.label} <ChevronRight size={14} />
                        </a>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA — brand-blue gradient to match the hero theme */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <Headphones size={32} className="text-cyanx-400 mx-auto" />
            <h2 className="h2 mt-3 text-white">Didn't find what you needed?</h2>
            <p className="mt-3 text-graphite-200">
              Our sales and engineering teams reply within one business day. Or open the chatbot at the bottom-right.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-cyanx-50 transition"
              >
                Contact us <ChevronRight size={14} />
              </Link>
              <a
                href={siteConfig.forms.enquiry}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
