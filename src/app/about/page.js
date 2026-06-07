import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import ClientCarousel from "@/components/ClientCarousel";
import AnimatedYear from "@/components/AnimatedYear";
import { siteConfig, buildMailLink, buildSalesWhatsAppLink } from "@/config/site";
import {
  ArrowRight, Phone, MessageCircle, Mail, Download, Sparkles, ShieldCheck, Globe2,
  Target, Eye, HeartHandshake, Layers, Compass, Award,
  Leaf, Sun, Trees, Car, Recycle,
} from "lucide-react";

export const metadata = {
  title: "About Infra DigiTech | Founded January 2001 in Bengaluru, Incorporated 2026",
  description:
    "The story of Infra DigiTech Pvt Ltd - founded in January 2001 by A.N. Venkatesh in Bengaluru as a proprietorship, restructured as Digi-Tech Solutions in 2017, incorporated as Infra DigiTech Pvt Ltd in January 2026. 25+ years of embedded systems, IoT and software engineering.",
  alternates: { canonical: "/about" },
};

const aboutBreadcrumbs = [
  { name: "Home",  url: "/" },
  { name: "About", url: "/about" },
];

const aboutFaq = [
  {
    q: "When was Infra DigiTech founded?",
    a: "Infra DigiTech began as Digitech in January 2001, founded by A.N. Venkatesh in Bengaluru as a proprietorship. It evolved into a partnership trading as Digi-Tech Solutions in 2017 and was formally incorporated as Infra DigiTech Pvt Ltd in January 2026 with A.N. Venkatesh, Shalini H.S. and Aniruddh Attignal as directors.",
  },
  {
    q: "Who founded Infra DigiTech?",
    a: "Infra DigiTech was founded by Mr. A.N. Venkatesh on 26 January 2001 in Bengaluru, originally as Digitech proprietorship. Mr. Venkatesh is an Electronics & Communication engineer from Adichunchanagiri Institute of Technology (AIT), Chikkamagaluru, and served 5 years as Chief Engineer at MEI (Mysore Electronic Industry) before starting his own company. He brings over four decades of experience in embedded systems, digital electronics and IoT engineering.",
  },
  {
    q: "What does Infra DigiTech specialise in?",
    a: "Intelligent communication, digital display systems, queue management, healthcare communication and enterprise automation - both hardware and software, designed and manufactured in Bengaluru.",
  },
];

const WHY_US = [
  { n: "01", title: "25+ years of engineering experience",   text: "From the early LED-display era to today's IoT and cloud platforms - depth and continuity." },
  { n: "02", title: "Hardware and software under one roof",  text: "PCB design, firmware, fabrication and full-stack software - engineered as one product." },
  { n: "03", title: "PAN-India installation and support",    text: "Direct presence in major metros plus an authorised channel network across the country." },
  { n: "04", title: "Customization capability",              text: "OEM, private-label and bespoke variants tuned to your workflow, infrastructure and scale." },
  { n: "05", title: "Embedded systems expertise",            text: "Microcontroller, RF, LoRa, Wi-Fi, Modbus, MQTT and cloud-connected platforms - in-house." },
  { n: "06", title: "Made in India manufacturing",           text: "Designed and built in Bengaluru with full traceability and ISO 9001 quality controls." },
  { n: "07", title: "Export ready",                          text: "CE-certified, voltage and language variants for GCC, Southeast Asia and Africa." },
  { n: "08", title: "Fast after-sales support",              text: "4-hour acknowledgement SLA; remote or on-site resolution typically within 24-72 hours." },
];

const BOARD = [
  {
    name: "Attignal Nagaraj Venkatesh",
    role: "Founder & CEO",
    image: "/images/about/Attignal-Nagaraj-Venkatesh.jpeg",
    bio: "Electronics & Communication Engineer from Adichunchanagiri Institute of Technology, Chikkamagaluru. Former Chief Engineer at MEI (Mysore Electronic Industry) for 5 years before founding Digitech as a proprietorship on 26 January 2001 in Bengaluru. Over four decades of engineering experience in digital electronics, embedded systems and IoT — driving the company's growth from a Bengaluru workshop to a PAN-India and export-focused manufacturer.",
  },
  {
    name: "Shalini Hornebail Shamabhat",
    role: "Co-Founder & Executive Director",
    image: "/images/about/Shalini-Hornebail-Shamabhat.jpeg",
    bio: "Bachelor's graduate from Sri Mahaveera College, Moodabidri. Director responsible for strategy, operations and partnerships across the Infra DigiTech businesses — joined the organization in 2017 and led the company's transition from proprietorship to partnership and into multi-sector growth.",
  },
  {
    name: "Aniruddh Venkatesh Attignal",
    role: "Director of Technology",
    image: "/images/about/Aniruddh-Venkatesh-Attignal.jpeg",
    bio: "Bachelor's in Electronics & Communication Engineering from Visvesvaraya Technological University (VTU), and Master's in Computer Science from the University of Wisconsin, USA. Built his career at global MNCs — Software Developer at Rockwell Automation (Milwaukee, USA) and Empower (Bengaluru) — bringing deep, hands-on expertise across industrial automation, enterprise software and embedded systems. Now leads Infra DigiTech's software, cloud and automation initiatives, channelling international engineering rigour into Made-in-India products.",
  },
];


export default function AboutPage() {
  return (
    <>
      <StructuredData type="BreadcrumbList" data={aboutBreadcrumbs} />
      <StructuredData type="FAQPage"   data={aboutFaq} />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", "h2", ".lead"] }} />

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HERO                                                            */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" />
        <div className="absolute -top-32 -left-16 h-[24rem] w-[24rem] rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[20rem] w-[20rem] rounded-full bg-cyanx-500/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container-default relative py-14 sm:py-16 lg:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyanx-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanx-400" />
            Our story
          </div>
          <h1 className="mt-5 font-display font-extrabold tracking-tight text-white text-[2.5rem] sm:text-5xl lg:text-[3.25rem] leading-[1.05]">
            From a Bengaluru workbench
            <br />
            <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">
              to a global engineering company.
            </span>
          </h1>
          <p className="lead mt-6 max-w-3xl text-base sm:text-lg text-graphite-200 leading-relaxed">
            For more than 25 years we have designed, built and shipped engineered electronics
            from Bengaluru - LED displays, healthcare communication, queue management, IoT
            devices and the software that runs them. One team, one roof, end to end.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HOW WE STARTED — narrative + image slot                         */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-24 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] text-brand-700">
                Bengaluru, January 2001
              </div>
              <h2 className="mt-5 font-display font-extrabold text-graphite-900 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
                How it started.
              </h2>

              <div className="mt-10 space-y-6 text-graphite-700 text-lg leading-relaxed max-w-2xl">
                <p>
                  In early 2001, Bengaluru was just beginning to earn its title as the
                  <span className="text-graphite-900 font-semibold"> Silicon Valley of India</span>.
                  The first wave of software services companies was scaling, foreign offices
                  were opening, and a generation of Indian engineers was beginning to build
                  things the world wanted to buy.
                </p>
                <p>
                  Among them was <span className="text-graphite-900 font-semibold">A.N. Venkatesh</span>,
                  an Electronics & Communication engineer from
                  <span className="text-graphite-900 font-semibold"> Adichunchanagiri Institute of Technology, Chikkamagaluru</span>,
                  who had spent five years as Chief Engineer at
                  <span className="text-graphite-900 font-semibold"> MEI (Mysore Electronic Industry)</span>.
                  At a time when most companies specialized either in hardware manufacturing or software development, very few could integrate both into a single working system.
                  Venkatesh saw the opportunity early: to build electronic products where embedded hardware, displays, communication systems and software worked together as one engineered solution.
                  On <span className="text-graphite-900 font-semibold">26 January 2001</span> he started a proprietorship of his own in Bengaluru and called it
                  <span className="text-graphite-900 font-semibold"> Digitech</span>.
                </p>
                <p>
                  The first products were digital clocks built around
                  <span className="text-graphite-900 font-semibold"> SCL (Semi-Conductor Laboratory) ship-based timing</span>,
                  which turned out to never quite hold accurate time. The breakthrough came
                  when the team moved to <span className="text-graphite-900 font-semibold">RTC (Real-Time Clock)</span> architecture.
                  That single engineering pivot is still the foundation of every GPS, NTP and
                  RTC-based clock we ship today, a quarter-century later. From clocks, the
                  portfolio quickly expanded into <span className="text-graphite-900 font-semibold">industrial production displays</span>
                  {" "}and standalone <span className="text-graphite-900 font-semibold">token displays</span>.
                </p>
                <p>
                  In 2001 itself, Digitech delivered its very first industrial production
                  display to <span className="text-graphite-900 font-semibold">General Electric</span>,
                  which was just opening its Bangalore office, and shortly afterward to
                  <span className="text-graphite-900 font-semibold"> Bharat Electronics Limited (BEL)</span>.
                  Those two became our founding customers, and the production-display product
                  line they bought into is one we still ship across the Bengaluru-Hosur
                  industrial corridor today.
                </p>
                <p>
                  As Bengaluru and India's banking and healthcare sectors expanded rapidly in the early 2000s, institutions began facing a new operational challenge: crowd management. Banks, hospitals and public-service counters struggled with long queues, manual token handling and unstructured customer flow. What began as standalone electronic token displays soon evolved into fully integrated <span className="text-graphite-900 font-semibold">Queue Management Systems</span> combining token generation, counter displays, workflow routing and customer management.
                </p>
                <p>
                  The defining inflection came in <span className="text-graphite-900 font-semibold">2004</span>,
                  when State Bank of India introduced the single-window banking concept.
                  Digitech was the first company in India to design, develop and implement
                  an electronic Queue Management System for SBI. The very first deployment was at <span className="text-graphite-900 font-semibold">SBI Kumaraswamy Layout</span>,
                  followed by <span className="text-graphite-900 font-semibold">SBI Church Street</span>
                  {" "}and <span className="text-graphite-900 font-semibold">SBI Jayanagar</span>,
                  the first three QMS installations in Indian retail banking. Tokens at the time were
                  still printed on paper; the in-house token-printer mechanisms that today power
                  thousands of branch deployments came soon after, engineered from scratch in
                  our own workshop.
                </p>
                <p>
                  From SBI, the same architecture extended to <span className="text-graphite-900 font-semibold">SBM</span>,
                  <span className="text-graphite-900 font-semibold"> SBT</span> and
                  <span className="text-graphite-900 font-semibold"> SBH</span> (all before their
                  eventual merger with SBI), and then to <span className="text-graphite-900 font-semibold">Corporation Bank,
                  Vijaya Bank, ING Vaishya</span> and <span className="text-graphite-900 font-semibold">Syndicate Bank</span>.
                  In parallel, our electronic scoreboard line entered sports venues. The
                  earliest installations were at <span className="text-graphite-900 font-semibold">City Institute</span>
                  {" "}for billiards and at the <span className="text-graphite-900 font-semibold">M. Chinnaswamy Indoor Stadium</span>.
                  That combination of in-house mechanical, electronics and embedded-firmware work, established in those first few years, has remained the defining edge of every product we ship today.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-graphite-100 to-graphite-200 overflow-hidden ring-1 ring-graphite-200">
                <Image
                  src="/images/about/founder.jpg"
                  alt="A.N. Venkatesh, founder of Infra DigiTech"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-graphite-600 leading-relaxed italic text-center">
                <span className="block font-semibold not-italic text-graphite-900">
                  A.N. Venkatesh
                </span>
                Founder &amp; CEO · 25+ years of building digital electronics, embedded systems and IoT in Bengaluru.
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* FIRST PRODUCTS — GE & BEL photo showcase                        */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white border-t border-graphite-100">
        <div className="container-default py-20 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-block text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-brand-700">
                Our first products
              </div>
              <h2 className="mt-4 font-display font-extrabold text-graphite-900 text-3xl sm:text-4xl tracking-tight leading-[1.15]">
                The first industrial production display, delivered to General Electric and BEL.
              </h2>
              <p className="mt-5 text-graphite-600 text-base sm:text-lg leading-relaxed">
                Designed and built in our Bengaluru workshop, our first industrial production
                display went to General Electric (then opening its Bangalore office) and Bharat
                Electronics Limited (BEL), the two customers that anchored Digitech's first product
                line and started a 25-year relationship with the Bengaluru-Hosur industrial
                belt.
              </p>
            </div>

            {/* GE & BEL first-product photo */}
            <div className="mt-10 max-w-4xl mx-auto rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50/60 via-white to-cyanx-50/40 p-6 sm:p-8">
              <div className="relative aspect-[16/9] rounded-2xl border border-graphite-200 bg-white shadow-sm overflow-hidden">
                <Image
                  src="/images/about/first-product-ge-bel.jpg"
                  alt="Digitech's first industrial production display delivered to General Electric and BEL in 2001"
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs text-graphite-500 italic">
                First Industrial Production Display · Delivered to General Electric and BEL · Bengaluru · 2001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* EVOLUTION — milestone narrative, no boxes                       */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-graphite-50">
        <div className="container-default py-24 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] text-brand-700">
              25+ years
            </div>
            <h2 className="mt-3 font-display font-extrabold text-graphite-900 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              From LED panels to cloud dashboards.
            </h2>
            <p className="mt-6 text-graphite-700 text-lg leading-relaxed">
              The product line grew the way the company did - one careful step at a time.
              Electronics taught us reliability. IoT taught us scale. Software taught us speed.
              Each phase changed what we could build next, without ever changing the principle:
              hardware and software designed as one product.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-12 max-w-5xl">
            <Milestone
              year={2001}
              title="Digitech, proprietorship"
              text="A.N. Venkatesh starts the business in Bengaluru on 26 January 2001. The first industrial production displays go to General Electric and BEL, and the queue management line follows in 2004 with the first SBI single-window deployment."
            />
            <Milestone
              year={2017}
              title="Digi-Tech Solutions, partnership"
              text="The business is restructured as a partnership. We expand into queue management, GPS clocks, OT timers, andon displays and the first IoT-enabled product lines."
            />
            <Milestone
              year={2026}
              title="Infra DigiTech Pvt Ltd"
              text="Formally incorporated as a private limited company in January 2026 with directors A.N. Venkatesh, Shalini H.S. and Aniruddh Attignal - scaling embedded systems, custom software, web platforms and exports."
            />
          </div>

          <p className="mt-16 max-w-3xl text-graphite-700 text-lg leading-relaxed">
            From a local Bengaluru workshop to a Made-in-India exporter, the trajectory has
            been deliberate. We did not chase trends; we mastered each layer of the stack
            and brought it back to our customers as reliable, finished product. Today the
            same in-house team designs PCBs, writes firmware, fabricates enclosures, and
            ships cloud dashboards that monitor those same products from anywhere in the world.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* MISSION, VISION & VALUES — combined 3-column section            */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-24 sm:py-28">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 max-w-6xl mx-auto">

            {/* Mission */}
            <div>
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-brand-600 to-cyanx-500 text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.45)] mb-5">
                <Target size={26} strokeWidth={2} />
              </div>
              <div className="block text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] text-brand-700">
                Our Mission
              </div>
              <h3 className="mt-3 font-display font-extrabold text-graphite-900 text-2xl sm:text-[1.65rem] tracking-tight leading-[1.2]">
                Engineering that quietly runs the business.
              </h3>
              <ul className="mt-6 space-y-3 text-graphite-700 leading-relaxed">
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Build dependable, future-ready systems for B2B operations.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Work every minute, every shift, for years - no excuses.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Scale from a single bank branch to a state-wide hospital chain.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Reliability is the product, not a feature.</li>
              </ul>
            </div>

            {/* Vision */}
            <div>
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-cyanx-500 to-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.45)] mb-5">
                <Eye size={26} strokeWidth={2} />
              </div>
              <div className="block text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] text-brand-700">
                Our Vision
              </div>
              <h3 className="mt-3 font-display font-extrabold text-graphite-900 text-2xl sm:text-[1.65rem] tracking-tight leading-[1.2]">
                India&apos;s B2B engineering partner, globally.
              </h3>
              <ul className="mt-6 space-y-3 text-graphite-700 leading-relaxed">
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Preferred Indian manufacturer of B2B display, communication and IoT systems.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Indian engineering depth, shipped to the world.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> In-house R&D, quality and customer-first service at the core.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> A partner network that stays close to every site.</li>
              </ul>
            </div>

            {/* Values */}
            <div>
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.45)] mb-5">
                <HeartHandshake size={26} strokeWidth={2} />
              </div>
              <div className="block text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] text-brand-700">
                Our Values
              </div>
              <h3 className="mt-3 font-display font-extrabold text-graphite-900 text-2xl sm:text-[1.65rem] tracking-tight leading-[1.2]">
                What we will not compromise on.
              </h3>
              <ul className="mt-6 space-y-3 text-graphite-700 leading-relaxed">
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Reliability above everything.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Hardware and software, designed as one.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Customer-first, always - customisation, training, AMC.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Made in India, built to global standards.</li>
                <li className="flex items-start gap-3"><ArrowRight size={14} className="mt-1.5 text-brand-600 shrink-0" /> Long-term partnership - decades, not transactions.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* MANUFACTURING CAPABILITY                                        */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-graphite-50">
        <div className="container-default py-24 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              {/* Image slot — drop a factory / SMT line photo at /public/images/about/manufacturing.jpg */}
              <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-graphite-100 to-graphite-200 overflow-hidden ring-1 ring-graphite-200">
                <Image
                  src="/images/about/manufacturing.jpg"
                  alt="Infra DigiTech in-house manufacturing line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xs text-graphite-500 italic">
                Manufacturing facility in Girinagar, Banashankari 3rd stage, Bengaluru.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] text-brand-700">
                Manufacturing capability
              </div>
              <h2 className="mt-3 font-display font-extrabold text-graphite-900 text-3xl sm:text-4xl tracking-tight leading-[1.1]">
                Everything we sell, we build.
              </h2>
              <div className="mt-6 space-y-5 text-graphite-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Our facility in Bengaluru runs the entire product lifecycle in-house:
                  PCB design, SMT assembly, embedded firmware, sheet-metal fabrication,
                  powder-coating, final assembly and quality test.
                </p>
                <p>
                  ESD-safe production lines, environmental QA chambers and full
                  serial-traceability under ISO 9001 keep every shipment reliable - from
                  a single counter board to a multi-thousand-bed hospital deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* WHY COMPANIES CHOOSE US — numbered list, no boxes               */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-24 sm:py-28">
          <div className="max-w-2xl">
            <div className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] text-brand-700">
              Why companies choose us
            </div>
            <h2 className="mt-3 font-display font-extrabold text-graphite-900 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              Eight reasons our customers keep coming back.
            </h2>
          </div>

          <ul className="mt-14 max-w-5xl mx-auto divide-y divide-graphite-200">
            {WHY_US.map((w) => (
              <li key={w.n} className="grid grid-cols-12 gap-6 py-7">
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl bg-gradient-to-br from-brand-700 to-cyanx-500 bg-clip-text text-transparent tabular-nums">
                    {w.n}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-11 grid sm:grid-cols-12 gap-3 sm:gap-8 items-baseline">
                  <h3 className="sm:col-span-5 text-lg sm:text-xl font-bold text-graphite-900 tracking-tight">
                    {w.title}
                  </h3>
                  <p className="sm:col-span-7 text-graphite-700 leading-relaxed">
                    {w.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* SUSTAINABILITY — teaser linking to the full /sustainability page.*/}
      {/* Replaces the previous certifications logo strip, which was      */}
      {/* duplicative of /certifications and /credentials.                */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-graphite-50">
        <div className="container-default py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-base sm:text-lg font-extrabold uppercase tracking-[0.2em]">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-100 text-emerald-700">
                  <Leaf size={14} />
                </span>
                <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                  Sustainability
                </span>
              </div>
              <h2 className="mt-3 font-display font-extrabold text-graphite-900 text-3xl sm:text-4xl tracking-tight leading-[1.1]">
                A lighter footprint, by design.
              </h2>
              <p className="mt-5 text-graphite-700 text-base sm:text-lg leading-relaxed">
                Sustainability at Infra DigiTech is operational, not aspirational.
                Our Banashankari facility has been solar-powered since 2016 - we generate
                more clean energy than we consume and sell the surplus back to BESCOM.
                Our entire vehicle fleet is electric. We own a 3,500-tree organic farm
                near the Bhadra Wildlife Sanctuary. And every old system we ship out
                is one we will buy back when it's time to upgrade.
              </p>

              <div className="mt-7">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition"
                >
                  Read our sustainability story <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Sun,     value: "10+ kW",  label: "Rooftop solar",       sub: "Since 2016" },
                  { Icon: Trees,   value: "3,500+",  label: "Trees planted",       sub: "Attiganal farm" },
                  { Icon: Car,     value: "100%",    label: "EV fleet",            sub: "Cars + scooters" },
                  { Icon: Recycle, value: "0 waste", label: "Buy-back & recycle",  sub: "Working or not" },
                ].map(({ Icon, value, label, sub }) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white ring-1 ring-emerald-100 p-5 shadow-sm"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon size={18} />
                    </div>
                    <div className="mt-3 font-display font-extrabold text-2xl text-emerald-700">
                      {value}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-graphite-900">
                      {label}
                    </div>
                    <div className="text-[11px] text-graphite-500">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* OUR CLIENTS                                                     */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-20 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] text-brand-700">
              Our clients
            </div>
            <h2 className="mt-3 font-display font-extrabold text-graphite-900 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              Hospitals, banks, airports and factories who trust us.
            </h2>
            <p className="mt-6 text-graphite-700 text-lg leading-relaxed">
              Over 5,000 active clients across India and abroad. Healthcare, BFSI, manufacturing,
              government, hospitality and retail, all delivered by the same in-house engineering team.
            </p>
          </div>

          <div className="mt-10">
            <ClientCarousel />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* LEADERSHIP / BOARD                                              */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-graphite-50">
        <div className="container-default py-24 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] text-brand-700">
              Leadership
            </div>
            <h2 className="mt-3 font-display font-extrabold text-graphite-900 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
              Board of Directors.
            </h2>
            <p className="mt-6 text-graphite-700 text-lg leading-relaxed">
              The directors who lead Infra DigiTech Pvt Ltd. Decades of engineering depth,
              international experience and operational discipline brought together under one roof.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {BOARD.map((m) => (
              <article key={m.name}>
                <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-graphite-100 to-graphite-200 overflow-hidden ring-1 ring-graphite-200">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-display font-extrabold text-graphite-900 text-2xl tracking-tight">
                    {m.name}
                  </h3>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {m.role}
                  </div>
                  <p className="mt-4 text-graphite-700 leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* FINAL CTA                                                       */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-graphite-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyanx-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyanx-400" />
                Talk to us
              </div>
              <h2 className="mt-4 font-display font-extrabold tracking-tight text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
                Engineering you can rely on, built in Bengaluru.
              </h2>
              <p className="mt-4 max-w-2xl text-graphite-200 leading-relaxed">
                Talk to our team about products, integrations, customisations, partnerships
                or exports. We usually respond within a business day.
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-graphite-200">
                <li className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-cyanx-400" /> ISO 9001:2015 / CE certified</li>
                <li className="inline-flex items-center gap-2"><Sparkles size={14} className="text-cyanx-400" /> GeM, MSME, IEC, DGFT registered</li>
                <li className="inline-flex items-center gap-2"><Globe2 size={14} className="text-cyanx-400" /> PAN-India service network</li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-graphite-900 px-5 py-3 text-sm font-bold hover:bg-cyanx-50 transition">
                <Phone size={14} /> Talk to our team
              </Link>
              <a
                href={buildSalesWhatsAppLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <MessageCircle size={14} /> WhatsApp sales
              </a>
              <Link
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Download size={14} /> Download catalogues
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Milestone({ year, title, text }) {
  return (
    <div>
      <div className="font-display font-extrabold text-5xl sm:text-6xl bg-gradient-to-br from-brand-700 to-cyanx-500 bg-clip-text text-transparent leading-none">
        <AnimatedYear year={year} />
      </div>
      <h3 className="mt-4 text-xl font-bold text-graphite-900 tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-graphite-700 leading-relaxed">{text}</p>
    </div>
  );
}
 