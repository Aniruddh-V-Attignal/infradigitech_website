"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu, Code2, Globe, LayoutDashboard, CheckCircle2, ArrowRight,
  Sparkles, MessageCircle, Layers3, ImageIcon
} from "lucide-react";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { services, productsBuilt, techStack } from "@/data/software";
import { siteConfig, buildSalesWhatsAppLink } from "@/config/site";

const iconMap = { Cpu, Code2, Globe, LayoutDashboard };

const INDUSTRIES = [
  "Banking", "Healthcare", "Hospitality", "Government",
  "Industrial", "Transportation", "Enterprise"
];

export default function SoftwareAutomationView() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-cyanx-500/25 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-brand-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />

        <div className="container-default relative py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-cyanx-400 backdrop-blur">
                <Sparkles size={14} /> Software · Embedded · Web · Enterprise
              </span>
              <h1 className="h1 mt-5 text-white">
                Beyond hardware.{" "}
                <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">
                  Software engineered
                </span>{" "}
                for your industry.
              </h1>
              <p className="mt-5 text-lg text-graphite-200 max-w-2xl">
                {siteConfig.shortName} doesn&apos;t just manufacture displays — we design, build and deploy the
                software platforms, embedded firmware and digital experiences that run alongside them. Every
                project we ship is rooted in the same sectors we serve every day — banking, healthcare,
                hospitality, government, industrial, transportation and enterprise.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-primary">
                  Start a project <ArrowRight size={16} />
                </a>
                <a
                  href={buildSalesWhatsAppLink("Hello, I would like to discuss a software / automation project.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <Link href="#services" className="btn-secondary">
                  Explore our work
                </Link>
              </div>

              <div className="mt-10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-graphite-300 mb-3">
                  Built for the industries we already serve
                </div>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center text-xs font-semibold text-white/90 bg-white/5 border border-white/15 rounded-full px-3 py-1 backdrop-blur"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>

      </section>

      {/* ─── SERVICES ─── */}
      <Section id="services">
        <SectionHeader
          eyebrow="What we build"
          title="Four engineering capabilities, one delivery team"
          subtitle="Embedded first — because every Infra DigiTech device runs firmware we wrote in-house. That same engineering team builds the software, web platforms and enterprise applications that surround it."
        />
        <div className="space-y-10 lg:space-y-14">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </Section>

      {/* ─── PRODUCTS BUILT (real linked products) ─── */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Our flagship products"
          title="Built using these very capabilities"
          subtitle="Every product below was engineered end-to-end at Infra DigiTech — the embedded firmware, the device, the software platform and the dashboards. Click any to view the product page."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productsBuilt.map((p, i) => (
            <ProductBuiltCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* ─── TECHNOLOGIES ─── */}
      <Section>
        <SectionHeader
          eyebrow="Our toolbox"
          title="Technologies, frameworks & platforms"
          subtitle="We pick the right tool per project — from real-time embedded firmware to cloud-deployed React apps. Here is our day-to-day stack."
        />
        <TechLogoGrid />
      </Section>

      {/* ─── CTA STRIP ─── */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-cyanx-400">
              <Layers3 size={14} /> Hardware + Software, one team
            </span>
            <h2 className="h2 mt-3 text-white">Have a project in mind?</h2>
            <p className="mt-3 text-graphite-200 max-w-xl">
              Tell us what you are trying to build — a hospital queue platform, a factory dashboard,
              a branch portal, a custom embedded controller or a B2B ecommerce site. We will scope it,
              prototype it and ship it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-primary">
              Start a project <ArrowRight size={16} />
            </a>
            <a
              href={buildSalesWhatsAppLink("Hello, I would like to discuss a software / automation project.")}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SEO: structured data (Service + Organization) ─── */}
      <SeoStructuredData />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* Service card — alternating layout with IMAGE slot, ribbon, sectors  */
/* ─────────────────────────────────────────────────────────────────── */

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Cpu;
  const isFlagship = index === 0;
  const reverse = index % 2 === 1;
  const sectorNames = (service.sectors || [])
    .map((id) => siteConfig.sectors.find((s) => s.id === id)?.name)
    .filter(Boolean);

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="relative"
    >
      <div className={`relative rounded-3xl overflow-hidden border ${isFlagship ? "border-brand-300/80" : "border-graphite-200"} bg-white shadow-card`}>
        {/* Ribbon */}
        <div className={`relative px-6 sm:px-8 py-3 flex items-center gap-2 ${isFlagship ? "bg-gradient-to-r " + service.accent + " text-white" : "bg-graphite-50 border-b border-graphite-100"}`}>
          <div className={`rounded-xl p-2 inline-flex ${isFlagship ? "bg-white/15" : "bg-brand-50 text-brand-700"}`}>
            <Icon size={20} />
          </div>
          <div className="leading-tight">
            <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isFlagship ? "text-white/85" : "text-brand-700"}`}>
              {service.eyebrow}
            </div>
            <div className={`text-base sm:text-lg font-bold ${isFlagship ? "text-white" : "text-graphite-900"}`}>
              {service.title}
            </div>
          </div>
          {isFlagship && (
            <span className="ml-auto hidden sm:inline-flex text-[10px] font-bold uppercase tracking-[0.18em] bg-white/15 text-white rounded-full px-3 py-1">
              Flagship capability
            </span>
          )}
        </div>

        {/* Body — full-width headline, then image|offer columns, then bottom strip */}
        <div className="p-6 sm:p-8">
          {/* Headline + summary — full width */}
          <div className="max-w-4xl">
            <h3 className="h3 text-graphite-900 leading-tight">{service.headline}</h3>
            <p className="mt-3 text-graphite-700 leading-relaxed">{service.summary}</p>
          </div>

          {/* Image + Offer list — equal columns that flex to fill height */}
          <div className={`mt-6 grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-5 flex">
              <div className="w-full">
                <ImageSlotTall src={service.image} title={service.title} serviceId={service.id} />
              </div>
            </div>
            <div className="lg:col-span-7 flex">
              <div className="w-full rounded-2xl bg-graphite-50 border border-graphite-100 p-5 sm:p-6 flex flex-col">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 mb-3">
                  What we offer
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 flex-1">
                  {service.offer.map((o) => (
                    <li key={o} className="flex gap-2 items-start text-sm text-graphite-700">
                      <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${isFlagship ? "text-brand-600" : "text-brand-500"}`} />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom strip — Stats · Sectors · CTA (3 cols, full width) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-graphite-200 bg-gradient-to-br from-brand-50/60 to-white p-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 mb-2">
                At a glance
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <CapStat label="Capabilities" value={service.offer.length + "+"} />
                <CapStat label="Sectors" value={(service.sectors || []).length} />
                <CapStat label="In-house" value="100%" />
              </div>
            </div>

            {sectorNames.length > 0 && (
              <div className="rounded-2xl border border-graphite-200 bg-white p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 mb-2">
                  Delivered into
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sectorNames.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center text-xs font-medium text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-3 py-1"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={siteConfig.forms.enquiry}
              target="_blank"
              rel="noopener"
              className={`group flex items-center justify-between gap-2 rounded-2xl border ${isFlagship ? "border-brand-200 bg-gradient-to-r from-brand-50 to-cyanx-50/30" : "border-graphite-200 bg-white"} p-4 hover:border-brand-300 hover:shadow-card transition`}
            >
              <div className="leading-tight">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">Get started</div>
                <div className="text-sm font-semibold text-graphite-900">Talk to a specialist</div>
              </div>
              <ArrowRight size={18} className="text-brand-700 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* Small stat tile used below the image to fill the gap */
function CapStat({ label, value }) {
  return (
    <div className="rounded-xl border border-graphite-100 bg-white px-2 py-2">
      <div className="text-xl font-extrabold font-display tabular-nums bg-gradient-to-r from-brand-700 to-cyanx-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-[9px] uppercase tracking-[0.18em] font-bold text-graphite-500 mt-0.5">
        {label}
      </div>
    </div>
  );
}

/* Tall image slot — renders an inline SVG illustration per service id.
   If the user drops a real image at /public/images/software-automation/<id>.jpg
   that image takes precedence (and never breaks — inline SVG remains as the
   guaranteed fallback). */
function ImageSlotTall({ src, title, serviceId }) {
  return (
    <div className="relative w-full min-h-[280px] sm:min-h-[340px] lg:min-h-full rounded-2xl overflow-hidden border border-graphite-200 bg-gradient-to-br from-brand-50 to-cyanx-400/10 group shadow-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 z-10"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
      {/* Inline SVG — always present underneath, shows through when img fails or is missing */}
      <div className="absolute inset-0 z-0">
        <ServiceArt id={serviceId} />
      </div>
    </div>
  );
}

/* One distinct SVG illustration per service — never breaks (no external CDN) */
function ServiceArt({ id }) {
  switch (id) {
    case "embedded":         return <EmbeddedArt />;
    case "custom-software":  return <CustomSoftwareArt />;
    case "web-ecommerce":    return <WebEcommerceArt />;
    case "enterprise-apps":  return <EnterpriseAppsArt />;
    default:                 return <GenericArt />;
  }
}

function EmbeddedArt() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="pcbBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#0a3b2c" />
          <stop offset="100%" stopColor="#05231a" />
        </linearGradient>
        <linearGradient id="chipG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#1c2233" />
          <stop offset="100%" stopColor="#0f1422" />
        </linearGradient>
      </defs>
      {/* PCB substrate (classic green) */}
      <rect width="480" height="360" fill="url(#pcbBg)" />

      {/* Silkscreen border + corner mounting holes */}
      <rect x="10" y="10" width="460" height="340" rx="6" fill="none" stroke="rgba(255,255,255,0.10)" strokeDasharray="3,3" />
      {[[24,24],[456,24],[24,336],[456,336]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#0f1422" stroke="#bcae8a" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="2" fill="#05231a" />
        </g>
      ))}

      {/* Copper traces */}
      <path d="M40,90 L130,90 L130,160" stroke="#caa56b" strokeWidth="2" fill="none" />
      <path d="M350,90 L420,90 L420,170" stroke="#caa56b" strokeWidth="2" fill="none" />
      <path d="M60,290 L160,290 L160,230" stroke="#caa56b" strokeWidth="2" fill="none" />
      <path d="M310,225 L370,225 L370,295 L440,295" stroke="#caa56b" strokeWidth="2" fill="none" />
      <path d="M240,90 L240,140" stroke="#caa56b" strokeWidth="2" fill="none" />
      <path d="M240,240 L240,310" stroke="#caa56b" strokeWidth="2" fill="none" />

      {/* Via dots (gold pads) */}
      {[[40,90],[130,90],[130,160],[350,90],[420,90],[420,170],[60,290],[160,290],[160,230],[310,225],[370,225],[440,295],[240,90],[240,310]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#e6c477" />
      ))}

      {/* ── Central MCU (QFP chip with all pins) ── */}
      <rect x="180" y="140" width="120" height="100" rx="6" fill="url(#chipG)" stroke="#22d3ee" strokeOpacity="0.4" />
      <circle cx="190" cy="150" r="2" fill="#22d3ee" />
      <text x="240" y="180" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="800" fill="#22d3ee" letterSpacing="2">MCU</text>
      <text x="240" y="198" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#cbd5e1" letterSpacing="1.5">ESP32-WROOM</text>
      <text x="240" y="216" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#94a3b8" letterSpacing="1.2">Wi-Fi · BT · Dual-Core</text>
      {/* Pins all 4 sides */}
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i}>
          <rect x={185 + i * 11} y="132" width="6" height="10" fill="#caa56b" />
          <rect x={185 + i * 11} y="238" width="6" height="10" fill="#caa56b" />
        </g>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect x="172" y={150 + i * 11} width="10" height="6" fill="#caa56b" />
          <rect x="298" y={150 + i * 11} width="10" height="6" fill="#caa56b" />
        </g>
      ))}

      {/* ── Resistors (axial striped) ── */}
      {[
        { x: 50,  y: 122, c: ["#fb7185","#34d399","#22d3ee"] },
        { x: 50,  y: 158, c: ["#fbbf24","#c084fc","#34d399"] },
        { x: 50,  y: 194, c: ["#22d3ee","#fb7185","#fbbf24"] },
      ].map((r, i) => (
        <g key={i} transform={`translate(${r.x},${r.y})`}>
          <rect x="-6" y="3" width="60" height="2" fill="#caa56b" />
          <rect width="48" height="8" rx="2" fill="#e7d5b4" stroke="#a98860" />
          {r.c.map((col, ci) => <rect key={ci} x={10 + ci * 9} width="3" height="8" fill={col} />)}
        </g>
      ))}

      {/* ── Capacitors (cylindrical electrolytic) ── */}
      {[
        { x: 380, y: 130 },
        { x: 410, y: 130 },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x},${c.y})`}>
          <circle r="11" fill="#1c2233" stroke="#5a96ff" strokeWidth="1.5" />
          <circle r="9" fill="#0f1422" />
          <rect x="-9" y="-1" width="18" height="2" fill="#5a96ff" />
          <text x="0" y="3" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="#67e8f9">100uF</text>
        </g>
      ))}

      {/* ── Crystal oscillator (16 MHz) ── */}
      <g transform="translate(330,150)">
        <rect width="30" height="14" rx="2" fill="#1c2233" stroke="#aab2c0" />
        <rect x="2" y="2" width="26" height="10" rx="1" fill="#e7d5b4" />
        <text x="15" y="10" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#0f1422" fontWeight="bold">16MHz</text>
      </g>

      {/* ── Antenna (Wi-Fi / RF) ── */}
      <g transform="translate(80,260)">
        <rect width="42" height="22" rx="2" fill="#1c2233" stroke="#22d3ee" />
        <path d="M2,2 L40,2 M2,8 L40,8 M2,14 L40,14 M2,20 L40,20" stroke="#22d3ee" strokeWidth="0.6" />
        <text x="21" y="34" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9" letterSpacing="1">2.4 GHz</text>
        {/* Radio waves */}
        <g transform="translate(50,11)">
          <path d="M0,0 Q4,-4 8,0 Q4,4 0,0" stroke="#22d3ee" fill="none" strokeOpacity="0.8">
            <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="1.6s" repeatCount="indefinite" />
          </path>
          <path d="M2,0 Q9,-9 16,0 Q9,9 2,0" stroke="#22d3ee" fill="none" strokeOpacity="0.5">
            <animate attributeName="stroke-opacity" values="0.1;0.6;0.1" dur="1.6s" begin="0.3s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      {/* ── USB-C connector ── */}
      <g transform="translate(20,140)">
        <rect width="20" height="38" rx="3" fill="#0f1422" stroke="#aab2c0" />
        <rect x="3" y="3" width="14" height="32" rx="2" fill="#1c2233" />
        <rect x="6" y="8" width="8" height="2" fill="#aab2c0" />
        <rect x="6" y="14" width="8" height="2" fill="#aab2c0" />
        <text x="10" y="50" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9" letterSpacing="0.8">USB-C</text>
      </g>

      {/* ── OLED Display module ── */}
      <g transform="translate(360,200)">
        <rect width="100" height="56" rx="3" fill="#0f1422" stroke="#22d3ee" />
        <rect x="4" y="4" width="92" height="40" rx="2" fill="#04060d" />
        <text x="50" y="20" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono, monospace" fill="#22d3ee">TEMP: 24.6 C</text>
        <text x="50" y="32" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono, monospace" fill="#22d3ee">RH:   62 %</text>
        <text x="50" y="44" textAnchor="middle" fontSize="6" fontFamily="JetBrains Mono, monospace" fill="#34d399">SYNC OK</text>
        <text x="50" y="68" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9" letterSpacing="0.8">OLED 0.96&quot;</text>
      </g>

      {/* ── Sensor (BME280 style) ── */}
      <g transform="translate(110,80)">
        <rect width="22" height="22" rx="2" fill="#1c2233" stroke="#5a96ff" />
        <circle cx="11" cy="11" r="3" fill="#5a96ff" />
        <text x="11" y="34" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9">BME280</text>
      </g>

      {/* ── LoRa module ── */}
      <g transform="translate(200,80)">
        <rect width="40" height="22" rx="2" fill="#1c2233" stroke="#c084fc" />
        <rect x="3" y="3" width="34" height="16" rx="1" fill="#0f1422" />
        <text x="20" y="14" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#c084fc">LoRa</text>
        <text x="20" y="34" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9">SX1276</text>
      </g>

      {/* ── Coin-cell battery holder ── */}
      <g transform="translate(280,80)">
        <rect width="50" height="22" rx="11" fill="#1c2233" stroke="#aab2c0" />
        <circle cx="25" cy="11" r="8" fill="#aab2c0" />
        <text x="25" y="14" textAnchor="middle" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="#0f1422">CR2032</text>
        <text x="25" y="34" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9">3V</text>
      </g>

      {/* ── Tactile push button ── */}
      <g transform="translate(280,300)">
        <rect width="18" height="18" rx="2" fill="#1c2233" stroke="#fbbf24" />
        <circle cx="9" cy="9" r="4" fill="#fbbf24" />
        <text x="9" y="32" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#67e8f9">RESET</text>
      </g>

      {/* ── LED indicators (animated, status row) ── */}
      <g transform="translate(40,310)">
        <text x="0" y="-2" fontSize="6" fontFamily="monospace" fill="#94a3b8" letterSpacing="1">STATUS</text>
        <circle cx="6"  cy="8" r="3" fill="#34d399">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="8" r="3" fill="#fbbf24">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="34" cy="8" r="3" fill="#fb7185">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="48" cy="8" r="3" fill="#22d3ee">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Data pulses moving along traces */}
      <circle r="2.5" fill="#22d3ee">
        <animateMotion dur="3s" repeatCount="indefinite" path="M40,90 L130,90 L130,160" />
      </circle>
      <circle r="2.5" fill="#fbbf24">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M350,90 L420,90 L420,170" />
      </circle>
    </svg>
  );
}

function CustomSoftwareArt() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="codeBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1124" />
          <stop offset="100%" stopColor="#06184a" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#codeBg)" />

      {/* IDE window */}
      <rect x="20" y="20" width="440" height="320" rx="10" fill="#0c1124" stroke="rgba(34,211,238,0.35)" />

      {/* Title bar with tabs */}
      <rect x="20" y="20" width="440" height="26" rx="10" fill="#04060d" />
      <rect x="20" y="34" width="440" height="12" fill="#04060d" />
      <circle cx="34" cy="33" r="3" fill="#fb7185" />
      <circle cx="46" cy="33" r="3" fill="#fbbf24" />
      <circle cx="58" cy="33" r="3" fill="#34d399" />
      {/* Tabs */}
      <rect x="78"  y="24" width="100" height="22" rx="4" fill="#0c1124" stroke="rgba(34,211,238,0.3)" />
      <text x="86" y="38" fontSize="8" fontFamily="monospace" fill="#22d3ee">📄 queue.service.ts</text>
      <rect x="184" y="24" width="86"  height="22" rx="4" fill="#1c2233" />
      <text x="192" y="38" fontSize="8" fontFamily="monospace" fill="#cbd5e1">nurse-call.js</text>
      <rect x="276" y="24" width="80"  height="22" rx="4" fill="#1c2233" />
      <text x="284" y="38" fontSize="8" fontFamily="monospace" fill="#cbd5e1">api.config</text>

      {/* ── Left sidebar — file explorer ── */}
      <rect x="20" y="46" width="100" height="234" fill="#04060d" />
      <text x="30" y="62" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">EXPLORER</text>
      {/* File tree */}
      {[
        { y: 76,  d: 0, t: "📁 src",          c: "#67e8f9", open: true },
        { y: 90,  d: 1, t: "📁 services",     c: "#fbbf24", open: true },
        { y: 104, d: 2, t: "queue.ts",        c: "#22d3ee", active: true },
        { y: 118, d: 2, t: "nurse-call.js",   c: "#cbd5e1" },
        { y: 132, d: 2, t: "forex.ts",        c: "#cbd5e1" },
        { y: 146, d: 1, t: "📁 components",   c: "#fbbf24" },
        { y: 160, d: 1, t: "📁 hooks",        c: "#fbbf24" },
        { y: 174, d: 1, t: "index.ts",        c: "#cbd5e1" },
        { y: 188, d: 0, t: "📁 api",          c: "#67e8f9" },
        { y: 202, d: 0, t: "📁 db",           c: "#67e8f9" },
        { y: 216, d: 0, t: "📁 tests",        c: "#67e8f9" },
        { y: 230, d: 0, t: "package.json",    c: "#fbbf24" },
        { y: 244, d: 0, t: ".env",            c: "#fb7185" },
        { y: 258, d: 0, t: "README.md",       c: "#cbd5e1" },
      ].map((f, i) => (
        <g key={i}>
          {f.active && <rect x="20" y={f.y - 9} width="100" height="13" fill="rgba(34,211,238,0.12)" />}
          <text x={28 + f.d * 6} y={f.y} fontSize="7.5" fontFamily="monospace" fill={f.c}>{f.t}</text>
        </g>
      ))}

      {/* Code editor area */}
      <rect x="120" y="46" width="240" height="234" fill="#0c1124" />
      {Array.from({ length: 12 }).map((_, i) => (
        <text key={i} x="138" y={66 + i * 16} fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.25)" textAnchor="end">{i + 1}</text>
      ))}
      {/* Code lines — staggered "typing" reveal on a 10s loop */}
      <g>
        <text x="144" y="66" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#c084fc">import</tspan><tspan fill="#cbd5e1"> {'{'} </tspan>
          <tspan fill="#22d3ee">Queue</tspan><tspan fill="#cbd5e1"> {'}'} </tspan>
          <tspan fill="#c084fc">from</tspan><tspan fill="#fbbf24"> &apos;./queue&apos;</tspan>
          <tspan fill="#cbd5e1">;</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.05;0.10;0.20;0.30;0.40;0.50;0.60;0.70;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="82" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#c084fc">import</tspan><tspan fill="#22d3ee"> db </tspan>
          <tspan fill="#c084fc">from</tspan><tspan fill="#fbbf24"> &apos;./db&apos;</tspan>
          <tspan fill="#cbd5e1">;</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.12;0.17;0.30;0.40;0.50;0.60;0.70;0.80;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="114" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#c084fc">export async function</tspan>
          <tspan fill="#34d399"> nextToken</tspan><tspan fill="#cbd5e1">(</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.19;0.24;0.30;0.40;0.50;0.60;0.70;0.80;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="130" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#cbd5e1">  counterId: </tspan><tspan fill="#22d3ee">string</tspan>
          <tspan fill="#cbd5e1">, branchId: </tspan><tspan fill="#22d3ee">string</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.26;0.31;0.40;0.50;0.60;0.70;0.80;0.90;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="146" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#cbd5e1">): </tspan><tspan fill="#22d3ee">Promise</tspan>
          <tspan fill="#cbd5e1">&lt;</tspan><tspan fill="#22d3ee">Token</tspan>
          <tspan fill="#cbd5e1">&gt; {'{'}</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.33;0.38;0.45;0.55;0.65;0.75;0.85;0.92;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="162" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#c084fc">  const</tspan><tspan fill="#cbd5e1"> queue </tspan>
          <tspan fill="#fb7185">=</tspan><tspan fill="#c084fc"> await </tspan>
          <tspan fill="#22d3ee">Queue</tspan><tspan fill="#cbd5e1">.</tspan>
          <tspan fill="#34d399">find</tspan><tspan fill="#cbd5e1">({'{'} counter: counterId {'}'});</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.40;0.45;0.50;0.60;0.70;0.80;0.88;0.92;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="178" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#c084fc">  const</tspan><tspan fill="#cbd5e1"> token </tspan>
          <tspan fill="#fb7185">=</tspan><tspan fill="#c084fc"> await</tspan>
          <tspan fill="#cbd5e1"> db.tokens.</tspan>
          <tspan fill="#34d399">create</tspan><tspan fill="#cbd5e1">({'{'}</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.47;0.52;0.58;0.66;0.74;0.82;0.88;0.92;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="194" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#cbd5e1">    queueId: queue.id, status: </tspan>
          <tspan fill="#fbbf24">&apos;WAITING&apos;</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.54;0.59;0.66;0.72;0.78;0.84;0.90;0.92;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="210" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#cbd5e1">  {'}'});</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.61;0.66;0.72;0.78;0.84;0.88;0.90;0.92;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="226" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#c084fc">  return</tspan><tspan fill="#cbd5e1"> token;</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.68;0.73;0.78;0.82;0.86;0.88;0.90;0.92;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
        <text x="144" y="242" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0">
          <tspan fill="#cbd5e1">{'}'}</tspan>
          <animate attributeName="opacity" values="0;0;1;1;1;1;1;1;1;1;0" keyTimes="0;0.75;0.80;0.84;0.86;0.88;0.90;0.92;0.93;0.95;1" dur="10s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Cursor — hops down each line as the code "types in" */}
      <rect width="2" height="11" fill="#22d3ee">
        <animate attributeName="x"
                 values="144;226;226;230;272;272;164;310;254;240;200;160"
                 keyTimes="0;0.10;0.17;0.24;0.31;0.38;0.45;0.52;0.59;0.66;0.73;1"
                 dur="10s" repeatCount="indefinite" />
        <animate attributeName="y"
                 values="56;72;104;120;136;152;168;184;200;216;232;240"
                 keyTimes="0;0.10;0.17;0.24;0.31;0.38;0.45;0.52;0.59;0.66;0.73;1"
                 dur="10s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="0.7s" repeatCount="indefinite" />
      </rect>

      {/* Right panel — Services status */}
      <rect x="360" y="46" width="100" height="234" fill="#04060d" />
      <text x="370" y="62" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">SERVICES</text>
      {[
        { y: 80,  l: "API",     v: "200 OK",  c: "#34d399" },
        { y: 100, l: "DB",      v: "OK",      c: "#34d399" },
        { y: 120, l: "MQTT",    v: "Active",  c: "#34d399" },
        { y: 140, l: "Workers", v: "12/12",   c: "#22d3ee" },
        { y: 160, l: "Cache",   v: "94%",     c: "#22d3ee" },
        { y: 180, l: "Build",   v: "Passing", c: "#34d399" }
      ].map((s, i) => (
        <g key={i}>
          <circle cx="370" cy={s.y - 3} r="2.5" fill={s.c}>
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
          <text x="378" y={s.y} fontSize="7.5" fontFamily="monospace" fill="#cbd5e1">{s.l}</text>
          <text x="450" y={s.y} fontSize="7.5" fontFamily="monospace" fill={s.c} textAnchor="end">{s.v}</text>
        </g>
      ))}
      <rect x="370" y="200" width="80" height="40" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
      <text x="376" y="212" fontSize="6" fontFamily="monospace" fill="#94a3b8">REQ / min</text>
      <polyline points="376,236 386,230 396,232 406,224 416,228 426,218 436,220 446,212" stroke="#22d3ee" strokeWidth="1" fill="none" />
      <g transform="translate(370,250)">
        <text x="0" y="0" fontSize="6" fontFamily="monospace" fill="#94a3b8">DATABASE</text>
        <ellipse cx="14" cy="14" rx="14" ry="3" fill="#5a96ff" />
        <rect x="0" y="14" width="28" height="12" fill="#5a96ff" />
        <ellipse cx="14" cy="26" rx="14" ry="3" fill="#5a96ff" />
        <text x="38" y="22" fontSize="7" fontFamily="monospace" fill="#67e8f9">PostgreSQL</text>
      </g>

      {/* Bottom terminal — cycles through real build / test / deploy commands */}
      <rect x="20" y="286" width="440" height="54" rx="4" fill="#04060d" stroke="rgba(255,255,255,0.10)" />
      <text x="32" y="300" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">TERMINAL</text>

      {/* Phase 1 — build */}
      <g>
        <text x="32" y="316" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#34d399" opacity="0">
          $ npm run build
          <animate attributeName="opacity" values="0;1;1;1;1;0;0;0;0;0;0" keyTimes="0;0.02;0.10;0.18;0.22;0.25;0.5;0.75;0.85;0.95;1" dur="12s" repeatCount="indefinite" />
        </text>
        <text x="32" y="328" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#67e8f9" opacity="0">
          ✓ Compiled successfully · 0 errors · 0 warnings
          <animate attributeName="opacity" values="0;0;1;1;1;0;0;0;0;0;0" keyTimes="0;0.10;0.14;0.18;0.22;0.25;0.5;0.75;0.85;0.95;1" dur="12s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Phase 2 — test */}
      <g>
        <text x="32" y="316" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#34d399" opacity="0">
          $ npm test
          <animate attributeName="opacity" values="0;0;0;1;1;1;0;0;0;0;0" keyTimes="0;0.25;0.27;0.30;0.40;0.45;0.50;0.75;0.85;0.95;1" dur="12s" repeatCount="indefinite" />
        </text>
        <text x="32" y="328" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#fbbf24" opacity="0">
          ✓ 142 tests passing · queue, nurse-call, forex, billing
          <animate attributeName="opacity" values="0;0;0;0;1;1;0;0;0;0;0" keyTimes="0;0.30;0.34;0.38;0.42;0.50;0.55;0.75;0.85;0.95;1" dur="12s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Phase 3 — deploy */}
      <g>
        <text x="32" y="316" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#34d399" opacity="0">
          $ deploy production
          <animate attributeName="opacity" values="0;0;0;0;0;0;1;1;1;0;0" keyTimes="0;0.10;0.20;0.30;0.40;0.50;0.55;0.65;0.75;0.80;1" dur="12s" repeatCount="indefinite" />
        </text>
        <text x="32" y="328" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#22d3ee" opacity="0">
          → Pushed v2.4.1 · Cloud OK · MQTT OK · DB migrated
          <animate attributeName="opacity" values="0;0;0;0;0;0;0;1;1;0;0" keyTimes="0;0.10;0.20;0.30;0.40;0.50;0.60;0.65;0.78;0.80;1" dur="12s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Phase 4 — live monitor */}
      <g>
        <text x="32" y="316" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#34d399" opacity="0">
          $ tail -f /var/log/infra-platform.log
          <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;1;1;0" keyTimes="0;0.10;0.20;0.30;0.40;0.50;0.60;0.78;0.82;0.97;1" dur="12s" repeatCount="indefinite" />
        </text>
        <text x="32" y="328" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#34d399" opacity="0">
          [OK] 2,431 tokens served · 128 active · uptime 99.98%
          <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;1;0" keyTimes="0;0.10;0.20;0.30;0.40;0.50;0.60;0.78;0.85;0.90;1" dur="12s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Blinking prompt at end of last line */}
      <rect x="32" y="328" width="2" height="9" fill="#34d399">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function WebEcommerceArt() {
  const products = [
    { name: "Nurse Call",  price: 18900, old: 24900, rating: 4.8, badge: "BEST" },
    { name: "Token Disp.", price: 12500, old: 14900, rating: 4.7, badge: ""     },
    { name: "GPS Clock",   price:  8900, old: 10500, rating: 4.9, badge: "NEW"  },
    { name: "Andon Board", price: 24500, old: 28000, rating: 4.6, badge: ""     }
  ];
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="webBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1124" /><stop offset="100%" stopColor="#06184a" />
        </linearGradient>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1442c4" /><stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2233" /><stop offset="100%" stopColor="#0c1124" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#webBg)" />
      <rect x="14" y="14" width="452" height="332" rx="10" fill="#04060d" stroke="rgba(34,211,238,0.4)" />
      <circle cx="30" cy="30" r="3" fill="#fb7185" />
      <circle cx="42" cy="30" r="3" fill="#fbbf24" />
      <circle cx="54" cy="30" r="3" fill="#34d399" />
      <rect x="80" y="22" width="280" height="16" rx="8" fill="#0c1124" stroke="rgba(34,211,238,0.2)" />
      <text x="92" y="33" fontSize="7.5" fontFamily="monospace" fill="#67e8f9">https://shop.infradigitech.in</text>

      {/* Site nav */}
      <rect x="14" y="48" width="452" height="28" fill="#0c1124" />
      <rect x="28" y="58" width="60" height="10" rx="3" fill="url(#heroBg)" />
      <text x="58" y="66" textAnchor="middle" fontSize="7" fontFamily="monospace" fontWeight="bold" fill="#fff" letterSpacing="0.5">BRAND</text>
      <text x="110" y="66" fontSize="7.5" fontFamily="monospace" fill="#22d3ee">Shop</text>
      <text x="154" y="66" fontSize="7.5" fontFamily="monospace" fill="#cbd5e1">New</text>
      <text x="188" y="66" fontSize="7.5" fontFamily="monospace" fill="#cbd5e1">Sale</text>
      <text x="222" y="66" fontSize="7.5" fontFamily="monospace" fill="#cbd5e1">About</text>
      <text x="264" y="66" fontSize="7.5" fontFamily="monospace" fill="#cbd5e1">Contact</text>
      <rect x="318" y="56" width="80" height="14" rx="7" fill="#1c2233" stroke="rgba(255,255,255,0.10)" />
      <text x="324" y="66" fontSize="7" fill="#94a3b8">Search</text>
      <circle cx="412" cy="63" r="6" fill="#1c2233" stroke="rgba(255,255,255,0.15)" />
      <circle cx="436" cy="63" r="6" fill="#22d3ee" />
      <circle cx="442" cy="58" r="4" fill="#fb7185">
        <animate attributeName="r" values="4;5;4" dur="1.8s" repeatCount="indefinite" />
      </circle>
      {/* Cycling cart count */}
      {["3","4","5","6","7","8"].map((n, i) => (
        <text key={i} x="442" y="61" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#fff" opacity={i === 0 ? 1 : 0}>
          {n}
          <animate
            attributeName="opacity"
            values={Array.from({ length: 7 }, (_, idx) => (idx === i || (idx === 6 && i === 0) ? "1" : "0")).join(";")}
            keyTimes="0;0.167;0.333;0.500;0.667;0.833;1"
            dur="9s"
            repeatCount="indefinite"
          />
        </text>
      ))}

      {/* Hero */}
      <rect x="14" y="76" width="452" height="48" fill="url(#heroBg)" />
      <text x="32" y="96" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="800" fill="#fff" letterSpacing="0.5">Festive Season Sale</text>
      <text x="32" y="112" fontSize="8" fontFamily="Inter, sans-serif" fill="#bcd8ff">Up to 40% off · Free shipping · COD available</text>
      <rect x="370" y="92" width="74" height="22" rx="11" fill="#fff" />
      <text x="407" y="106" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="800" fill="#1442c4">SHOP NOW</text>
      <polygon points="310,88 358,88 366,98 358,108 310,108" fill="#fb7185" />
      <text x="334" y="102" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" letterSpacing="0.5">-40%</text>

      {/* Product cards */}
      {products.map((p, i) => (
        <g key={i} transform={`translate(${22 + i * 112}, 134)`}>
          <rect width="100" height="160" rx="6" fill="url(#cardBg)" stroke="rgba(255,255,255,0.10)" />
          <rect x="6" y="6" width="88" height="64" rx="4" fill="#1442c4" opacity="0.5" />
          <rect x="22" y="20" width="56" height="36" rx="3" fill="#04060d" stroke="#22d3ee" strokeOpacity="0.5" />
          <rect x="26" y="26" width="48" height="22" rx="1" fill="#1442c4" opacity="0.5" />
          <text x="50" y="42" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="800" fill="#22d3ee">A042</text>
          {p.badge && (
            <g transform="translate(6,6)">
              <rect width="32" height="14" rx="3" fill={p.badge === "NEW" ? "#34d399" : "#fbbf24"} />
              <text x="16" y="10" textAnchor="middle" fontSize="7" fontWeight="800" fill="#04060d">{p.badge}</text>
            </g>
          )}
          <text x="8" y="84" fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight="700" fill="#fff">{p.name}</text>
          {[0,1,2,3,4].map((s) => (
            <text key={s} x={8 + s * 7} y="98" fontSize="7" fill={s < Math.floor(p.rating) ? "#fbbf24" : "rgba(255,255,255,0.20)"}>★</text>
          ))}
          <text x="46" y="98" fontSize="6.5" fontFamily="monospace" fill="#94a3b8">({p.rating})</text>
          <text x="8" y="116" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="800" fill="#22d3ee">₹{p.price.toLocaleString()}</text>
          <text x="60" y="116" fontSize="7" fontFamily="monospace" fill="#94a3b8">₹{p.old.toLocaleString()}</text>
          <rect x="8" y="124" width="84" height="22" rx="4" fill="#22d3ee" />
          <text x="50" y="138" textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="800" fill="#04060d">ADD TO CART</text>
          <circle cx="92" cy="84" r="3" fill="#34d399">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Bottom band */}
      <rect x="14" y="306" width="452" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
      <g transform="translate(24,312)">
        <rect width="40" height="28" rx="3" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeOpacity="0.5" />
        <rect x="48" y="6" width="24" height="22" rx="3" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeOpacity="0.5" />
        <rect x="78" y="9" width="14" height="20" rx="2" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeOpacity="0.5" />
      </g>
      <text x="120" y="332" fontSize="8" fontFamily="monospace" fill="#67e8f9" letterSpacing="1">RESPONSIVE</text>
      <g transform="translate(196,316)">
        <rect width="40" height="16" rx="3" fill="#1c2233" />
        <text x="20" y="12" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fbbf24">UPI</text>
        <rect x="44" width="40" height="16" rx="3" fill="#1c2233" />
        <text x="64" y="12" textAnchor="middle" fontSize="7" fontWeight="800" fill="#67e8f9">VISA</text>
        <rect x="88" width="40" height="16" rx="3" fill="#1c2233" />
        <text x="108" y="12" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fb7185">MC</text>
        <rect x="132" width="40" height="16" rx="3" fill="#1c2233" />
        <text x="152" y="12" textAnchor="middle" fontSize="7" fontWeight="800" fill="#34d399">PayU</text>
      </g>
      <g transform="translate(376,314)">
        <text x="0" y="6" fontSize="6" fontFamily="monospace" fill="#94a3b8">SALES TODAY</text>
        {/* Cycling sales counter (rotating values over 6s) */}
        {["₹2.4L","₹2.5L","₹2.6L","₹2.7L","₹2.8L","₹3.0L"].map((v, i) => (
          <text key={i} x="0" y="22" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="800" fill="#22d3ee" opacity={i === 0 ? 1 : 0}>
            {v}
            <animate
              attributeName="opacity"
              values={Array.from({ length: 7 }, (_, idx) => (idx === i || (idx === 6 && i === 0) ? "1" : "0")).join(";")}
              keyTimes="0;0.167;0.333;0.500;0.667;0.833;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </text>
        ))}
        <polyline points="46,22 52,18 58,20 64,12 70,16 76,8" stroke="#34d399" strokeWidth="1.2" fill="none" />
        {/* Animated tracer dot following the sparkline */}
        <circle r="2" fill="#34d399">
          <animateMotion dur="3s" repeatCount="indefinite" path="M46,22 L52,18 L58,20 L64,12 L70,16 L76,8" />
        </circle>
      </g>
    </svg>
  );
}

function EnterpriseAppsArt() {
  const sidebar = [
    { i: "📊", t: "Dashboard",  active: true },
    { i: "📈", t: "Analytics" },
    { i: "👥", t: "Users" },
    { i: "🛒", t: "Orders" },
    { i: "🗒", t: "Reports" },
    { i: "🏷", t: "Inventory" }
  ];
  const systemNav = [{ i: "🛠", t: "Settings" }, { i: "❔", t: "Help" }];
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="entBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1124" /><stop offset="100%" stopColor="#06184a" />
        </linearGradient>
        <linearGradient id="entChip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1442c4" /><stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="bar1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1442c4" /><stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#entBg)" />
      <rect x="30" y="30" width="420" height="300" rx="10" fill="#04060d" stroke="rgba(34,211,238,0.4)" />

      {/* Sidebar (96px wide) */}
      <rect x="30" y="30" width="96" height="300" rx="10" fill="#0c1124" />
      <g transform="translate(42,46)">
        <rect width="14" height="14" rx="3" fill="url(#entChip)" />
        <text x="7" y="11" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">iD</text>
        <text x="20" y="11" fontSize="8" fontFamily="monospace" fontWeight="800" fill="#22d3ee" letterSpacing="0.6">Infra</text>
      </g>
      <text x="42" y="76" fontSize="6" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.5">MAIN MENU</text>
      {sidebar.map((m, idx) => (
        <g key={idx} transform={`translate(38, ${84 + idx * 26})`}>
          {m.active && <rect width="84" height="22" rx="6" fill="rgba(34,211,238,0.18)" />}
          {m.active && <rect width="3" height="22" rx="2" fill="#22d3ee" />}
          <text x="12" y="15" fontSize="10">{m.i}</text>
          <text x="28" y="15" fontSize="8" fontFamily="Inter, sans-serif" fontWeight={m.active ? 700 : 500} fill={m.active ? "#22d3ee" : "#cbd5e1"}>{m.t}</text>
        </g>
      ))}
      <text x="42" y="252" fontSize="6" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.5">SYSTEM</text>
      {systemNav.map((m, idx) => (
        <g key={idx} transform={`translate(38, ${260 + idx * 24})`}>
          <text x="12" y="15" fontSize="10">{m.i}</text>
          <text x="28" y="15" fontSize="8" fontFamily="Inter, sans-serif" fill="#cbd5e1">{m.t}</text>
        </g>
      ))}
      <g transform="translate(38,304)">
        <circle cx="10" cy="10" r="10" fill="url(#bar1)" />
        <text x="10" y="14" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">A</text>
        <text x="26" y="9" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="700" fill="#fff">Admin</text>
        <text x="26" y="18" fontSize="6" fontFamily="monospace" fill="#94a3b8">admin@idg.com</text>
      </g>

      {/* Top bar (shifted right to accommodate wider sidebar) */}
      <text x="138" y="60" fontSize="10" fontFamily="monospace" fill="#67e8f9" letterSpacing="1.2">ENTERPRISE DASHBOARD</text>
      <rect x="370" y="46" width="60" height="20" rx="10" fill="rgba(255,255,255,0.08)" />
      <circle cx="382" cy="56" r="3" fill="#34d399">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <text x="392" y="60" fontSize="8" fontFamily="monospace" fill="#67e8f9">LIVE</text>

      {/* KPI cards */}
      {[
        { x: 138, label: "USERS",   vals: ["2,431","2,432","2,434","2,437","2,440","2,443","2,447","2,452","2,458","2,463"] },
        { x: 240, label: "REVENUE", vals: ["₹18.0L","₹18.2L","₹18.4L","₹18.7L","₹19.1L","₹19.4L","₹19.8L","₹20.1L","₹20.4L","₹20.7L"] },
        { x: 342, label: "ORDERS",  vals: ["164","165","167","170","172","175","178","181","184","187"] }
      ].map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="78" width="92" height="42" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
          <text x={k.x + 10} y="92" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">{k.label}</text>
          {/* Stacked value labels — each one fades in for its slice of the 6 s loop */}
          {k.vals.map((v, j) => (
            <text
              key={j}
              x={k.x + 10}
              y="113"
              fontSize="14"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="800"
              fill="#22d3ee"
              opacity={j === 0 ? 1 : 0}
            >
              {v}
              <animate
                attributeName="opacity"
                values={
                  j === 0
                    ? "1;0;0;0;0;0;0;0;0;0;1"
                    : Array.from({ length: 11 }, (_, idx) => (idx === j ? "1" : "0")).join(";")
                }
                keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
                dur="6s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </text>
          ))}
        </g>
      ))}

      {/* Bar chart */}
      <rect x="138" y="140" width="200" height="138" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" />
      <text x="148" y="156" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">MONTHLY GROWTH</text>
      {[
        { x: 152, h: 40 }, { x: 174, h: 60 }, { x: 196, h: 50 }, { x: 218, h: 80 },
        { x: 240, h: 70 }, { x: 262, h: 96 }, { x: 284, h: 86 }, { x: 306, h: 110 }
      ].map((b, i) => (
        <rect key={i} x={b.x} y={270 - b.h} width="14" height={b.h} rx="2" fill="url(#bar1)">
          <animate attributeName="height" values={`0;${b.h};${b.h}`} dur="1.5s" begin={`${i * 0.1}s`} fill="freeze" />
          <animate attributeName="y" values={`270;${270 - b.h};${270 - b.h}`} dur="1.5s" begin={`${i * 0.1}s`} fill="freeze" />
        </rect>
      ))}

      {/* Donut */}
      <g transform="translate(394,210)">
        <circle r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" />
        <circle r="50" fill="none" stroke="#22d3ee" strokeWidth="14" strokeDasharray="314" strokeDashoffset="100" transform="rotate(-90)" />
        <text x="0" y="4" textAnchor="middle" fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="800" fill="#22d3ee">68%</text>
      </g>

      {/* Activity row */}
      <rect x="138" y="290" width="306" height="32" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
      <text x="148" y="304" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">RECENT ACTIVITY</text>
      {/* Pulsing live dot */}
      <circle cx="152" cy="316" r="3" fill="#34d399">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
      </circle>
      {/* Cycling activity lines — each slice of the 8 s loop shows one event */}
      {[
        "New order #2431 · Branch 042 — completed",
        "User #1842 logged in · Bengaluru HQ",
        "Token A067 served · Counter 4 · 38 s",
        "OT timer started · Theatre 2 · Surgeon Dr. R",
        "Forex rate updated · 8 currencies refreshed",
        "Service ticket #SR-091 closed · ICU panel"
      ].map((t, i) => (
        <text key={i} x="162" y="319" fontSize="8" fontFamily="monospace" fill="#cbd5e1" opacity={i === 0 ? 1 : 0}>
          {t}
          <animate
            attributeName="opacity"
            values={Array.from({ length: 7 }, (_, idx) => (idx === i || (idx === 6 && i === 0) ? "1" : "0")).join(";")}
            keyTimes="0;0.167;0.333;0.500;0.667;0.833;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </text>
      ))}
    </svg>
  );
}

function GenericArt() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="480" height="360" fill="#06184a" />
      <text x="240" y="190" textAnchor="middle" fontSize="14" fontFamily="monospace" fill="#67e8f9">Infra DigiTech</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* Hero illustration — floating IoT operations dashboard               */
/* ─────────────────────────────────────────────────────────────────── */
function HeroIllustration() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyanx-500/30 to-brand-500/30 blur-2xl animate-float" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-3 shadow-glow"
      >
        <svg viewBox="0 0 480 360" className="w-full h-auto">
          <defs>
            <linearGradient id="heroSg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0c1124" />
              <stop offset="100%" stopColor="#06184a" />
            </linearGradient>
            <linearGradient id="heroLg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5a96ff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="heroAg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="360" stroke="rgba(255,255,255,0.04)" />
          ))}
          <rect x="20" y="20" width="440" height="240" rx="14" fill="url(#heroSg)" stroke="rgba(34,211,238,0.4)" />
          <circle cx="40" cy="40" r="3.5" fill="#fb7185" />
          <circle cx="52" cy="40" r="3.5" fill="#fbbf24" />
          <circle cx="64" cy="40" r="3.5" fill="#34d399" />
          <text x="80" y="44" fontSize="9" fontFamily="monospace" fill="#67e8f9" letterSpacing="1.5">
            INFRA . OPERATIONS DASHBOARD
          </text>
          {[
            { x: 40,  label: "TOKENS", val: "2,431" },
            { x: 158, label: "BEDS",   val: "128"   },
            { x: 276, label: "SITES",  val: "42"    }
          ].map((k, i) => (
            <g key={i}>
              <rect x={k.x} y="60" width="100" height="46" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
              <text x={k.x + 10} y="76" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">{k.label}</text>
              <text x={k.x + 10} y="99" fontSize="20" fontFamily="JetBrains Mono, monospace" fontWeight="800" fill="#22d3ee">
                {k.val}
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </text>
            </g>
          ))}
          <rect x="40" y="116" width="218" height="124" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" />
          <text x="50" y="132" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">THROUGHPUT . 24h</text>
          <polygon fill="url(#heroAg)" points="50,210 70,200 90,205 110,180 130,170 150,185 170,160 190,140 210,150 230,128 250,135 250,232 50,232" />
          <polyline fill="none" stroke="url(#heroLg)" strokeWidth="2" points="50,210 70,200 90,205 110,180 130,170 150,185 170,160 190,140 210,150 230,128 250,135" />
          <circle r="3" fill="#22d3ee">
            <animateMotion dur="6s" repeatCount="indefinite" path="M50,210 L70,200 L90,205 L110,180 L130,170 L150,185 L170,160 L190,140 L210,150 L230,128 L250,135" />
          </circle>
          <rect x="276" y="116" width="164" height="124" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" />
          <text x="286" y="132" fontSize="8" fontFamily="monospace" fill="#94a3b8" letterSpacing="1.2">LIVE ALERTS</text>
          {[
            { y: 148, c: "#fb7185", t: "Panic alarm . Branch 042" },
            { y: 168, c: "#fbbf24", t: "OT timer . Theatre 2" },
            { y: 188, c: "#22d3ee", t: "Queue overflow . Counter 7" },
            { y: 208, c: "#34d399", t: "GPS sync . 12 sites OK" }
          ].map((a, i) => (
            <g key={i}>
              <circle cx="290" cy={a.y} r="3" fill={a.c}>
                {i < 3 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
              </circle>
              <text x="304" y={a.y + 3} fontSize="8" fontFamily="monospace" fill="#cbd5e1">{a.t}</text>
            </g>
          ))}
          <rect x="20" y="280" width="440" height="60" rx="10" fill="#0c1124" stroke="rgba(255,255,255,0.10)" />
          <text x="34" y="298" fontSize="8" fontFamily="monospace" fill="#67e8f9" letterSpacing="1.5">EMBEDDED . IoT . FIRMWARE</text>
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={i} cx={40 + i * 36} cy="330" r="1.5" fill="#22d3ee">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <line x1="40" y1="324" x2="440" y2="324" stroke="rgba(34,211,238,0.25)" />
          <circle r="2" fill="#22d3ee">
            <animateMotion dur="3s" repeatCount="indefinite" path="M40,324 L440,324" />
            <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>
    </div>
  );
}

function ProductBuiltCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link href={`/${product.slug}`} className="card group block p-5 h-full">
        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-700 inline-flex items-center gap-1 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-1">
          {product.capability}
        </div>
        <h3 className="mt-3 text-base font-bold text-graphite-900 group-hover:text-brand-700 transition leading-snug">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-graphite-600 leading-relaxed line-clamp-3">{product.blurb}</p>
        <div className="mt-4 text-sm font-semibold text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          View product <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}

function TechLogoGrid() {
  const groups = techStack.reduce((acc, t) => {
    (acc[t.group] = acc[t.group] || []).push(t);
    return acc;
  }, {});
  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([group, items], gi) => (
        <motion.div
          key={group}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: gi * 0.05 }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-graphite-500 mb-3">{group}</div>
          <div className="flex flex-wrap gap-3">
            {items.map((t, i) => (<TechLogo key={t.name} tool={t} delay={i * 0.04} />))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TechLogo({ tool, delay = 0 }) {
  const url = tool.logoUrl || (tool.slug ? `https://cdn.simpleicons.org/${tool.slug}` : null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ y: -5, scale: 1.07, transition: { duration: 0.2 } }}
      className="group relative inline-flex items-center gap-2 rounded-xl border border-graphite-200 bg-white px-3.5 py-2 shadow-card hover:border-brand-300 hover:shadow-glow transition cursor-default overflow-hidden"
      title={tool.name}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-brand-50 to-transparent" />
      <span className="relative inline-flex w-5 h-5 items-center justify-center">
        {url ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt={`${tool.name} logo`} className="w-5 h-5 object-contain motion-safe:group-hover:rotate-[8deg] transition-transform duration-300" loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fb = e.currentTarget.nextSibling;
                if (fb) fb.style.display = "grid";
              }}
            />
            <span className="hidden w-5 h-5 place-items-center rounded-md bg-gradient-to-br from-brand-600 to-cyanx-500 text-white text-[9px] font-mono font-bold">{tool.name.slice(0, 2).toUpperCase()}</span>
          </>
        ) : (
          <span className="w-5 h-5 grid place-items-center rounded-md bg-gradient-to-br from-brand-600 to-cyanx-500 text-white text-[9px] font-mono font-bold">{tool.name.slice(0, 2).toUpperCase()}</span>
        )}
      </span>
      <span className="relative text-sm font-semibold text-graphite-800 group-hover:text-brand-700 transition">{tool.label || tool.name}</span>
    </motion.div>
  );
}

function SeoStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Software & Automation Development",
        "provider": { "@type": "Organization", "name": siteConfig.name, "url": siteConfig.url },
        "areaServed": ["IN", "AE", "SG", "KE", "GCC", "SE-Asia"],
        "serviceType": [
          "Embedded System Development",
          "IoT Device Development",
          "Custom Software Development",
          "Web Development",
          "Ecommerce Development",
          "Enterprise Application Development"
        ],
        "audience": INDUSTRIES,
        "description": "Embedded systems, custom software, web & ecommerce platforms and enterprise applications for banking, healthcare, hospitality, government, industrial, transportation and enterprise customers."
      },
      {
        "@type": "ItemList",
        "itemListElement": services.map((s, i) => ({ "@type": "ListItem", "position": i + 1, "name": s.title, "description": s.summary }))
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
