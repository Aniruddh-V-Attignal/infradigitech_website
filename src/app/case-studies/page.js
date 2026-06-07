import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Clock,
  Hospital,
  MonitorPlay,
  Sparkles,
  MessageSquare,
  Phone,
  Plus,
  HelpCircle,
} from "lucide-react";
import { siteConfig, buildSalesWhatsAppLink, buildTelLink } from "@/config/site";

export const metadata = {
  title: "Case Studies | Infra DigiTech",
  description:
    "How Infra DigiTech engineers solve real problems for India's most demanding deployments — token forwarding at Ramiah & Sakra Hospitals, RF nurse call at Manipal / Narayana / Fortis / Apollo / Syngene, GPS+NTP clocks at Infosys / Wipro / Toyota, and centralized rate displays for BFSI & retail networks.",
  alternates: { canonical: "/case-studies" },
};

/* ----------------------------------------------------------------------------
 * IMAGE SLOTS - drop your 4 photos here:
 *   1. /public/images/case-studies/queue-management.jpg
 *   2. /public/images/case-studies/nurse-call.jpg
 *   3. /public/images/case-studies/gps-clocks.jpg
 *   4. /public/images/case-studies/display-boards.jpg
 * Until a file exists at the path, the styled placeholder behind it shows
 * through (no broken-image icon).
 * --------------------------------------------------------------------------*/

const studies = [
  {
    id: "queue-forwarding",
    eyebrow: "Healthcare - Aviation - Public Sector",
    productLabel: "Queue Management System",
    productHref: "/queue-management-system",
    headline: "One token, every counter.",
    lead:
      "We rebuilt the patient queue at Ramiah and Sakra so that a token issued at billing automatically follows the patient across lab, X-ray, pharmacy and every downstream counter - no second token, no re-queuing.",
    challenge:
      "Hospitals were running stand-alone token systems. A patient took a fresh token at every department - billing, lab, X-ray, pharmacy - and joined the queue from scratch each time. The token expired the moment it was called. The result was long cumulative waits, repeated paperwork at every counter, and a fragmented patient journey.",
    solution: [
      {
        h: "Token forwarding",
        d: "One token issued at the first touchpoint automatically follows the patient across every downstream counter.",
      },
      {
        h: "Self-service tab kiosks",
        d: "At Sakra, patients pick a department on an entry tablet and receive their token via SMS - the dispenser line itself disappears.",
      },
      {
        h: "Multi-counter calling",
        d: "The same token can be called from any free counter, enabling instant load-balancing and clean lane-opening during peaks.",
      },
      {
        h: "Centralized supervisor dashboard",
        d: "Live wait-times, average service time per counter and abandonment alerts surface to a single screen.",
      },
    ],
    innovation:
      "A single dispenser scales to dozens of downstream queues. We recommend a 30-queue ceiling not because the platform can't take more, but because that's where the patient experience stays effortless.",
    deployments: [
      "Ramiah Hospital, Bengaluru",
      "Sakra World Hospital, Bengaluru",
      "Kempegowda International Airport",
      "Passport Seva Kendras",
      "Infosys",
    ],
    image: "/images/case-studies/Queue-Management-system-casestudies.jpg",
    productImage: "/images/case-studies/queue-management-product.jpg",
    icon: Hospital,
  },
  {
    id: "nurse-call-rf",
    eyebrow: "Healthcare - Pharma - Senior Living",
    productLabel: "Nurse Calling System",
    productHref: "/nurse-calling-system",
    headline: "Critical calls that never miss - even through reinforced walls.",
    lead:
      "Hospitals with deep wards, basement ICUs and reinforced shielding kept losing nurse call signals. We engineered a long-range RF stack with signal hopping that has become our reference design across the country's largest hospital chains.",
    challenge:
      "Modern hospital architectures - thick masonry, basement floors, isolated ICUs, lead-lined imaging suites - aggressively attenuate RF. Standard nurse call radios drop packets, and the call simply does not reach the nurse station. In a critical-care setting, that is not acceptable.",
    solution: [
      {
        h: "Long-range RF + signal hopping",
        d: "Mesh-style hopping radios keep the call alive across any number of intermediate nodes - signal cannot get trapped on one path.",
      },
      {
        h: "RF boosters for shielded zones",
        d: "Dedicated boosters cover MRI suites, basement ICUs and other RF-hostile environments.",
      },
      {
        h: "Nurse-station displays for clinical workflows",
        d: "Beyond patient calls, the same display surfaces medicine alerts, dietary schedules and shift handover notes.",
      },
      {
        h: "Custom dashboards & analytics",
        d: "Per-ward response times, average time-to-acknowledge, missed-call audit - built to match each hospital's QA process.",
      },
      {
        h: "Battery-operated handheld switches",
        d: "Built for sites without UPS backup - patients hold the wireless switch and call from anywhere. Originally engineered for Siddaganga Hospital (Tumkur), now also at Kshemavana and widely used in old-age homes and senior-living facilities.",
      },
    ],
    innovation:
      "25+ years of fieldwork went into our current RF hopping firmware. Signal does not get lost - even in the toughest hospital architectures we've encountered.",
    deployments: [
      "Manipal Hospitals",
      "Narayana Hrudayalaya",
      "Fortis Healthcare",
      "Apollo Hospitals",
      "Syngene International",
      "Siddaganga Hospital, Tumkur",
      "Kshemavana Naturopathy & Wellness",
      "Old-age homes & senior-living facilities",
    ],
    image: "/images/case-studies/nursecallsystem-casestudies.jpg",
    productImage: "/images/case-studies/nurse-call-product.jpg",
    icon: BellRing,
  },
  {
    id: "gps-ntp-clocks",
    eyebrow: "IT Campuses - Manufacturing - Industrial",
    productLabel: "GPS Digital Clock",
    productHref: "/gps-digital-clock",
    headline: "Synchronized time - GPS, ethernet, RTC, indoor or outdoor.",
    lead:
      "Deep industrial facilities have no clean GPS sky view. Outdoor production yards demand water- and dust-proof hardware. Toyota wanted custom three- and four-sided hanging clocks. So we engineered a clock family for every environment.",
    challenge:
      "Large pharmaceutical and manufacturing campuses sit deep inside reinforced buildings where GPS signal does not penetrate. Outdoor displays need IP-rated enclosures. And global IT campuses want time-zone walls and unconventional form factors - none of which a single off-the-shelf clock can deliver.",
    solution: [
      {
        h: "Labour-room / Time-of-Birth clocks",
        d: "HH:MM:SS GPS-synchronised clocks installed in delivery rooms, OTs and NICUs across Bengaluru maternity hospitals. Birth certificates legally require second-precision time of birth — these clocks eliminate any dispute over timing.",
      },
      {
        h: "Pharma cleanroom clocks (SS 304)",
        d: "Stainless-steel 304-grade, flush-mount, IP65 washable front-plate clocks for sterile manufacturing — FDA / GMP / ISO cleanroom compliant.",
      },
      {
        h: "Ethernet (NTP) clocks",
        d: "Plug an ethernet cable in and the clock syncs from the network - perfect for GPS-shielded interiors and multi-time-zone walls.",
      },
      {
        h: "RTC standalone clocks",
        d: "Built-in real-time-clock with crystal-backed accuracy for sites with neither GPS nor LAN.",
      },
      {
        h: "IP-rated outdoor variants + P10 LED",
        d: "Dust-resistant, splash-resistant and fully waterproof builds (IP54 / IP65 / IP66) for outdoor production yards and gatehouses, plus high-brightness P10 LED for direct-sunlight readability.",
      },
      {
        h: "Master-Slave synchronised systems",
        d: "Central GPS Master Clock distributing time over RS-485 to dozens of slaves — for railway stations, airports, hospital campuses and large multi-building sites.",
      },
      {
        h: "Custom form factors",
        d: "Three-sided and four-sided suspended hanging clocks engineered specifically for Toyota's shop-floor.",
      },
    ],
    innovation:
      "One clock platform, every environment — GPS, NTP, RTC, master-slave, indoor, outdoor, cleanroom-grade, single-face, three-sided, four-sided. We build to the site, not the catalogue. The most demanding use case is the labour room: birth certificates legally require second-precision time, and these clocks settle that question.",
    deployments: [
      "Infosys",
      "Wipro",
      "Toyota (3-sided & 4-sided suspended)",
      "Lakshmi Vacuum Technologies",
      "Maternity hospitals across Bengaluru (Labour Room / Time-of-Birth)",
    ],
    image: "/images/case-studies/timezone-digital-clock.jpg",
    productImage: "/images/case-studies/gps-clocks-product.jpg",
    icon: Clock,
  },
  {
    id: "centralized-rate-displays",
    eyebrow: "BFSI - Retail - Hospitality",
    productLabel: "Forex / Gold / Pricing Displays",
    productHref: "/forex-display-board",
    headline: "Change a rate once. Every branch updates instantly.",
    lead:
      "Forex desks, jewellers and food courts were updating prices branch-by-branch - manually, with predictable lag and errors. We built a centralized display network where one head-office change pushes to every connected screen in seconds, plus an internet-fed mode that pulls live forex and bullion rates directly from market feeds.",
    challenge:
      "A multi-branch operator - a bank with forex counters, a jewellery chain or a quick-service food court - has to keep prices identical across locations. Sending PDFs and asking branch staff to retype rates is slow, error-prone and looks unprofessional on the floor.",
    solution: [
      {
        h: "Head-office controller",
        d: "One operator updates rates centrally. All linked branches reflect the change in seconds.",
      },
      {
        h: "Internet-fed live mode",
        d: "Boards pull forex, gold and silver rates directly from market data feeds - zero manual entry.",
      },
      {
        h: "LED and LCD form factors",
        d: "High-contrast LED for outdoor and large halls; LCD for indoor counters where colour and layout matter.",
      },
      {
        h: "Multi-product layouts",
        d: "Same controller drives interest-rate boards, bullion rates, locker info, restaurant pricing and food-counter menus.",
      },
    ],
    innovation:
      "A single source of truth for branch pricing. Every screen across the network stays in lock-step with the head office or the market feed.",
    deployments: [
      "BFSI branch networks - forex & interest rate boards",
      "Jewellery chains - gold & silver bullion boards",
      "Restaurants & food courts - pricing & menu boards",
    ],
    image: "/images/case-studies/interest-rate-display-casestudies.jpg",
    productImage: "/images/case-studies/display-boards-product.jpg",
    icon: MonitorPlay,
  },
];

const caseStudyFaq = [
  {
    q: "What type of case studies does Infra DigiTech handle?",
    a: "Infra DigiTech handles real-world deployment case studies across healthcare, banking, manufacturing, hospitality, retail, airports and industrial automation sectors. Our case studies cover queue management systems, nurse calling systems, GPS synchronized clocks, industrial Andon displays, centralized display networks, embedded IoT systems and custom software-integrated electronic solutions.",
  },
  {
    q: "Can Infra DigiTech customize products for complex sites?",
    a: "Yes. Infra DigiTech specializes in customizing both hardware and software for complex installations and enterprise environments. Our engineering team can tailor embedded systems, display layouts, firmware, communication protocols, dashboards, workflows and integrations based on site-specific operational requirements. Our technicians and engineers also conduct site surveys to understand infrastructure constraints, workflow requirements and operational challenges before recommending the most suitable solution for the facility. From multi-building hospitals and manufacturing facilities to airports and enterprise campuses, we design systems to match each deployment environment.",
  },
  {
    q: "Does Infra DigiTech provide deployment support across India?",
    a: "Yes. Infra DigiTech provides deployment, installation, commissioning and after-sales support across India through direct teams and authorized partners. Our technicians conduct site inspections and deployment planning before installation to ensure the recommended system is optimized for the customer's infrastructure and operational workflow. We support hospitals, banks, factories, IT campuses, airports, retail chains and government projects with PAN-India service capabilities.",
  },
  {
    q: "Which industries use Infra DigiTech systems?",
    a: "Infra DigiTech systems are used across healthcare, banking and BFSI, hospitality, airports, manufacturing, industrial automation, retail, food service, IT campuses, public sector organizations, educational institutions and enterprise environments. Our products are designed for industries that require reliable communication, display, automation and monitoring systems.",
  },
  {
    q: "Can these systems integrate with existing software or dashboards?",
    a: "Yes. Infra DigiTech develops software-integrated systems and supports API-based integration with existing enterprise platforms, dashboards, ERP systems, HMS software, production systems and cloud applications. Our in-house software and embedded engineering team can build custom integrations, centralized dashboards and workflow automation solutions based on customer requirements.",
  },
];

function FaqItem({ q, a }) {
  return (
    <details className="group rounded-xl border border-graphite-200 bg-white open:border-brand-200 open:shadow-card transition">
      <summary className="cursor-pointer list-none flex items-start gap-4 p-5 sm:p-6">
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 group-open:bg-brand-600 group-open:text-white transition">
          <Plus
            size={16}
            className="transition-transform duration-200 group-open:rotate-45"
          />
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

function ImageSlot({ study }) {
  const Icon = study.icon;
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-graphite-200 shadow-card">
      {/* Decorative placeholder - shows through until a real image is uploaded */}
      <div className="absolute inset-0 bg-gradient-to-br from-graphite-50 via-white to-brand-50/40" />
      <div className="absolute inset-0 hero-pattern opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-graphite-400">
        <div className="rounded-full bg-white/80 p-4 shadow-sm ring-1 ring-graphite-200">
          <Icon size={36} strokeWidth={1.5} className="text-brand-500" />
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
          {study.productLabel}
        </p>
      </div>
      {/* Real image overlay - background-image avoids any broken-icon if the file does not exist yet */}
      <div
        aria-label={study.productLabel}
        role="img"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${study.image})` }}
      />
    </div>
  );
}

function ProductMiniCard({ study }) {
  const Icon = study.icon;
  return (
    <Link
      href={study.productHref}
      className="group block overflow-hidden rounded-xl border border-graphite-200 bg-white hover:border-brand-300 hover:shadow-card transition"
    >
      <div className="flex items-stretch">
        {/* Product image slot - drop file at study.productImage to populate */}
        <div className="relative w-24 sm:w-28 shrink-0 overflow-hidden bg-gradient-to-br from-graphite-50 to-brand-50/40">
          <div className="absolute inset-0 flex items-center justify-center text-brand-400">
            <Icon size={26} strokeWidth={1.6} />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${study.productImage})` }}
          />
        </div>
        {/* Card body */}
        <div className="flex-1 px-4 py-3 sm:py-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-700">
              Explore product
            </p>
            <p className="mt-0.5 text-sm font-semibold text-graphite-900 truncate group-hover:text-brand-700 transition">
              {study.productLabel}
            </p>
          </div>
          <ArrowRight
            size={18}
            className="shrink-0 text-graphite-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition"
          />
        </div>
      </div>
    </Link>
  );
}

function HeroStat({ n, l }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{n}</div>
      <div className="mt-1 text-xs text-graphite-300 uppercase tracking-wider">{l}</div>
    </div>
  );
}

function CaseStudyRow({ study, index }) {
  const reverse = index % 2 === 1;
  const bgClass = index % 2 === 1 ? "bg-graphite-50/70" : "bg-white";
  return (
    <section id={study.id} className={`${bgClass} border-t border-graphite-100`}>
      <div className="container-default py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left column: image + product mini-card + deployed-at */}
          <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
            <div className="flex flex-col gap-5">
              <ImageSlot study={study} />

              <div className="text-xs text-graphite-500">
                <span className="font-semibold text-graphite-700">Case {index + 1} / {studies.length}</span>
                <span className="mx-2 text-graphite-300">|</span>
                <Link href={study.productHref} className="text-brand-700 hover:underline">
                  {study.productLabel}
                </Link>
              </div>

              <ProductMiniCard study={study} />

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
                  Deployed at
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {study.deployments.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center rounded-full border border-graphite-200 bg-white px-3 py-1 text-xs font-medium text-graphite-700"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
              {study.eyebrow}
            </span>
            <h2 className="h2 mt-3">{study.headline}</h2>
            <p className="mt-4 text-lg text-graphite-600 leading-relaxed">{study.lead}</p>

            <div className="mt-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
                The Challenge
              </h3>
              <p className="mt-2 text-graphite-700 leading-relaxed">{study.challenge}</p>
            </div>

            <div className="mt-7">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
                What we engineered
              </h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {study.solution.map((f) => (
                  <li key={f.h} className="flex gap-2.5">
                    <CheckCircle2 size={18} className="text-cyanx-500 mt-0.5 shrink-0" />
                    <div className="text-sm leading-relaxed">
                      <span className="font-semibold text-graphite-900">{f.h}.</span>{" "}
                      <span className="text-graphite-600">{f.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 rounded-xl border border-brand-100 bg-gradient-to-r from-brand-50/80 via-cyanx-50/40 to-brand-50/80 p-4 flex gap-3">
              <Sparkles size={20} className="text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
                  Key innovation
                </p>
                <p className="mt-1 text-sm text-graphite-700 leading-relaxed">{study.innovation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  // JSON-LD ItemList for SEO/AIEO
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Infra DigiTech Case Studies",
    itemListElement: studies.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: s.headline,
        about: s.productLabel,
        description: s.lead,
        url: `${siteConfig.url}/case-studies#${s.id}`,
      },
    })),
  };

  // JSON-LD FAQPage for the in-page FAQ - helps Google rich results and AI engines
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: caseStudyFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-dark">Case Studies</span>
            <h1 className="h1 mt-3 text-white">
              Real problems.{" "}
              <span className="bg-gradient-to-r from-cyanx-400 via-cyanx-300 to-brand-200 bg-clip-text text-transparent">
                Engineered solutions.
              </span>
            </h1>
            <p className="mt-4 text-lg text-graphite-200 max-w-2xl">
              Four representative deployments showing how we customize our standard products for
              India's most demanding environments - large hospital chains, international airports,
              IT campuses and multi-branch BFSI networks.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-6 max-w-xl">
              <HeroStat n="25+" l="Years of fieldwork" />
              <HeroStat n="1,000+" l="Installations" />
              <HeroStat n="4" l="Product lines featured" />
            </div>
          </div>

          {/* Quick-jump chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {studies.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition"
              >
                <span className="text-cyanx-300">0{i + 1}</span>
                {s.productLabel}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {studies.map((s, i) => (
        <CaseStudyRow key={s.id} study={s} index={i} />
      ))}

      {/* FAQ */}
      <section className="bg-white border-t border-graphite-100">
        <div className="container-default py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Heading column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  <HelpCircle size={12} /> Frequently Asked
                </span>
                <h2 className="h2 mt-3">Questions about our deployments</h2>
                <p className="mt-4 text-graphite-600 leading-relaxed">
                  Common questions about how we engineer, deploy and support real-world
                  installations across hospitals, BFSI, airports, manufacturing and enterprise
                  campuses.
                </p>
                <div className="mt-6 rounded-xl border border-graphite-200 bg-graphite-50/60 p-5">
                  <p className="text-sm font-semibold text-graphite-900">
                    Have a more specific question?
                  </p>
                  <p className="mt-1 text-sm text-graphite-600">
                    Our engineering team is happy to scope your site directly.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-brand-700 transition"
                    >
                      Contact us <ArrowRight size={12} />
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

            {/* FAQ accordion column */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {caseStudyFaq.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-graphite-950 text-white border-t border-graphite-100">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20 text-center">
          <h2 className="h2 text-white">Have a tougher problem?</h2>
          <p className="mt-3 text-lg text-graphite-200 max-w-2xl mx-auto">
            Our engineering team has probably solved something like it. Tell us the site
            constraints and we will come back with a fit.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-cyanx-50 transition"
            >
              Talk to our engineers <ArrowRight size={16} />
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
        </div>
      </section>
    </>
  );
}
