import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, MessageCircle, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import CategoryCard from "@/components/CategoryCard";
import ClientCarousel from "@/components/ClientCarousel";
import WhyHomeCarousel from "@/components/WhyHomeCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ProductCard from "@/components/ProductCard";
import StructuredData from "@/components/StructuredData";
import { siteConfig, buildSalesWhatsAppLink } from "@/config/site";
import { categories, getProductsByCategory, getProductBySlug } from "@/data/products";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const HOME_FAQ = [
  {
    q: "What does Infra DigiTech manufacture?",
    a: "Infra DigiTech Pvt Ltd manufactures digital display systems (banking, food counter, pricing, weather, church, industrial Andon), nurse calling systems, queue & token management systems, GPS digital clocks, OT timers, electronic scoreboards, panic alarms, IoT devices and embedded systems. We also deliver custom software, web & ecommerce and enterprise applications.",
  },
  {
    q: "Where is Infra DigiTech based?",
    a: "We are headquartered in Bengaluru, Karnataka, India. We deliver across India and are export-ready for GCC, Southeast Asia and Africa.",
  },
  {
    q: "What certifications does Infra DigiTech hold?",
    a: "ISO 9001:2015, CE, MSME, GeM Registered, Made in India, Export Ready. GSTIN 29AAICI6485L1ZQ, CIN U27900KA2026PTC214614.",
  },
  {
    q: "How do I request a quote from Infra DigiTech?",
    a: `Open our online enquiry form, call our sales line ${siteConfig.contact.salesMobile} or WhatsApp the same number. Email ${siteConfig.contact.email}. We respond within one business day.`,
  },
  {
    q: "How do I raise a service request for an existing installation?",
    a: `Visit our Service Request page, call the service line ${siteConfig.contact.serviceMobile} or WhatsApp the same number. We acknowledge every ticket within 4 business hours.`,
  },
];

const FEATURED_SLUGS = [
  "nurse-calling-system",
  "queue-management-system",
  "bank-interest-rate-display-board",
  "token-display-system",
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map(getProductBySlug).filter(Boolean);

  return (
    <>
      <StructuredData type="FAQPage" data={HOME_FAQ} />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", "h2", ".lead"] }} />
      <Hero />

      <section className="section relative overflow-hidden bg-slate-50">
        <Image
          src="/images/portfolioimage.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-45"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/94 via-white/80 to-white/95" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.88),rgba(255,255,255,0.63),rgba(255,255,255,0.32))]" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/35" aria-hidden />

        <div className="container-default relative z-10">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-white/90 px-5 py-2 text-sm sm:text-base font-black tracking-[0.24em] uppercase text-brand-700 shadow-sm backdrop-blur">
              What we make
            </span>
          </div>

          <SectionHeader
            title="Complete Communication and Digital Display Systems"
            subtitle={
              <>
                Used by banks, hospitals, hotels, airports,
                <br />
                factories and corporates worldwide.
              </>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <CategoryCard
                key={c.id}
                category={c}
                count={getProductsByCategory(c.id).length}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow">Best-sellers</span>
            <h2 className="h2 mt-2 text-graphite-900">Featured products</h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-brand-700 hover:underline inline-flex items-center gap-1"
          >
            View all products <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-cyanx-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-brand-500/20 rounded-full blur-3xl" />

        <div className="container-default relative py-12 sm:py-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-cyanx-400">
              Beyond hardware
            </span>
            <h2 className="h2 mt-3 text-white">
              {" "}
              <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">
                Software & Embedded systems
              </span>{" "}
              that power our hardware and yours.
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Embedded Systems", "Custom Software", "Web & Ecommerce", "Enterprise Apps"].map((t) => (
                <span key={t} className="text-xs font-semibold text-white/90 bg-white/5 border border-white/15 rounded-full px-3 py-1 backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <Link href="/software-automation" className="btn-primary">
              Explore Software & Automation <ArrowRight size={16} />
            </Link>
            <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-secondary">
              Start a project
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-slate-100 overflow-hidden">
        <div className="container-default">
          <div className="mb-10">
            <span className="eyebrow">Why Infra DigiTech</span>
            <h2 className="h2 mt-2 text-graphite-900">
              Built for B2B grade reliability and scale
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-graphite-700">
              From PCB design to PAN-India service, we own every step that matters to your project.
            </p>
          </div>

          <WhyHomeCarousel />
        </div>
      </section>

      <Section variant="soft">
        <SectionHeader
          eyebrow="Trusted by"
          title="3000+ banks, hospitals, hotels, factories & corporates"
          subtitle="A growing network of marquee customers across India and overseas."
        />
        <ClientCarousel />
      </Section>

      {/* Featured testimonials — manual carousel with left/right arrows + dot
          indicators. Renders ALL testimonials (not just featured) so visitors
          can browse the full set without leaving the home page. */}
      <Section>
        <SectionHeader
          eyebrow="Customer testimonials"
          title="In their own words"
          subtitle="What hospital, bank, diagnostic and industrial customers say about working with us. Use the arrows or swipe to browse all customer stories."
        />
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
        <div className="mt-10 flex justify-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-1.5 rounded-xl border-2 border-brand-600 px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-brand-600 hover:text-white transition"
          >
            See all customer stories <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-cyanx-400">
              <ShieldCheck size={14} /> Made in India / Export Ready
            </span>
            <h2 className="h2 mt-3 text-white">Take our complete catalogue with you</h2>
            <p className="mt-3 text-graphite-200 max-w-xl">
              Download the master brochure with full product specifications, applications and use-cases - or talk to our specialists.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/downloads" className="btn-secondary">
              <Download size={16} /> Download Brochures
            </Link>
            <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-primary">
              Request a Quote
            </a>
            <a href={buildSalesWhatsAppLink()} target="_blank" rel="noopener" className="btn-whatsapp">
              <MessageCircle size={16} /> WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// The "Why Infra DigiTech" carousel and the Testimonials carousel are both
// rendered by client components (WhyHomeCarousel and TestimonialsCarousel)
// that own arrow navigation, dot indicators and scroll-snap behaviour.
