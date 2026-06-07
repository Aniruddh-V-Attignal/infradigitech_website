import Link from "next/link";
import Section from "@/components/Section";
import StructuredData from "@/components/StructuredData";
import {
  Mail, Phone, MapPin, Clock, MessageCircle, Headphones, ShoppingBag,
  ExternalLink, HelpCircle, Handshake, ShieldCheck, Globe2, ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  siteConfig, buildTelLink, buildMailLink,
  buildSalesWhatsAppLink, buildServiceWhatsAppLink,
} from "@/config/site";

export const metadata = {
  title: "Contact Us | Infra DigiTech",
  description:
    "Get in touch with Infra DigiTech Pvt Ltd. Sales and service phone numbers, WhatsApp, email, embedded enquiry form and Bengaluru office. Quotes, partnerships and integrations - replies within a business day.",
  alternates: { canonical: "/contact" },
};

const contactFaq = [
  {
    q: "What are Infra DigiTech's contact numbers?",
    a: `Sales: ${siteConfig.contact.salesMobile} (call + WhatsApp). Service & Support: ${siteConfig.contact.serviceMobile} (call + WhatsApp). Email: ${siteConfig.contact.email}.`,
  },
  {
    q: "Where is Infra DigiTech's office?",
    a: "Our head office is at #971, Venkatesh Murthy Road, 1st Phase Girinagar, Banashankari, Bengaluru, Karnataka 560085, India.",
  },
  {
    q: "What are Infra DigiTech's working hours?",
    a: "Monday to Saturday, 09:30 to 18:30 IST.",
  },
];

const TRUST = [
  { label: "ISO 9001:2015 / CE certified",   icon: ShieldCheck },
  { label: "GeM, MSME, IEC, DGFT registered", icon: Sparkles },
  { label: "PAN-India service network",       icon: Globe2 },
];

const PARTNER_BENEFITS = [
  "Authorised dealer / SI tie-ups",
  "Regional distributor opportunities",
  "OEM / private-label options",
  "On-site training programmes",
  "Attractive incentives & margins",
  "Dedicated partner support",
];

export default function ContactPage() {
  const c = siteConfig.contact;

  return (
    <>
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={contactFaq} />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", "h2", ".lead"] }} />

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HERO — dark blue brand gradient. Form on the right.             */}
      {/* Partner CTA tucked under quick contacts on the left.            */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" />
        <div className="absolute -top-40 -left-20 h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-cyanx-500/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container-default relative py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[6fr_7fr] gap-10 lg:gap-14">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyanx-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyanx-400" />
                Contact
              </div>

              <h1 className="mt-4 font-display font-extrabold tracking-tight text-white text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05]">
                Let's engineer
                <br />
                <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">
                  what's next, together.
                </span>
              </h1>

              <p className="lead mt-3 max-w-xl text-base sm:text-lg text-graphite-300 leading-relaxed">
                We design and manufacture digital display, healthcare communication, queue and
                IoT systems - and we build the software that runs them. Talk to our team about
                a project, an integration or a partnership.
              </p>

              {/* Trust strip */}
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {TRUST.map((t) => (
                  <li key={t.label} className="inline-flex items-center gap-2 text-xs sm:text-sm text-graphite-200">
                    <t.icon size={14} className="text-cyanx-400" />
                    {t.label}
                  </li>
                ))}
              </ul>

              {/* Quick contact tiles */}
              <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
                <QuickTile
                  badge="Sales"
                  number={c.salesMobile}
                  telHref={buildTelLink(c.salesMobile)}
                  waHref={buildSalesWhatsAppLink()}
                />
                <QuickTile
                  badge="Service"
                  number={c.serviceMobile}
                  telHref={buildTelLink(c.serviceMobile)}
                  waHref={buildServiceWhatsAppLink()}
                />
              </div>

              {/* Email + FAQ */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-graphite-300">
                <a href={buildMailLink()} className="inline-flex items-center gap-2 hover:text-white transition">
                  <Mail size={14} className="text-cyanx-400" />
                  {c.email}
                </a>
                <span className="hidden sm:inline-block h-3 w-px bg-white/15" />
                <Link href="/faq" className="inline-flex items-center gap-1.5 hover:text-white transition">
                  <HelpCircle size={14} className="text-cyanx-400" />
                  Check the FAQ first
                  <ArrowRight size={12} />
                </Link>
              </div>

              {/* Partner CTA — fills the empty space, premium dark card */}
              <div className="mt-10 max-w-xl relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur p-7">
                <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-cyanx-500/15 blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyanx-300">
                    <Handshake size={12} /> Partner with us
                  </div>
                  <h2 className="mt-3 font-display font-extrabold tracking-tight text-white text-2xl sm:text-[1.75rem] leading-tight">
                    Channel Partner or Distributor.
                  </h2>
                  <p className="mt-3 text-sm text-graphite-300 max-w-md">
                    We are expanding our authorised network across India and key export markets -
                    GCC, Southeast Asia, Africa. On-site training, attractive incentives and
                    dedicated partner support included.
                  </p>

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-graphite-200">
                    {PARTNER_BENEFITS.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <ArrowRight size={12} className="text-cyanx-400" /> {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={siteConfig.forms.channelPartner}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-graphite-900 px-4 py-2.5 text-xs font-bold hover:bg-cyanx-50 transition"
                    >
                      Apply via the form <ArrowRight size={12} />
                    </a>
                    <a
                      href={buildTelLink(c.salesMobile)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyanx-400 text-graphite-950 px-4 py-2.5 text-xs font-bold hover:bg-cyanx-300 transition"
                    >
                      <Phone size={12} /> Call sales {c.salesMobile}
                    </a>
                    <a
                      href={buildMailLink(
                        "Channel Partner Application",
                        "Hello Infra DigiTech, I would like to apply for a channel partner / dealer / distributor opportunity. My company details:\n\nCompany:\nLocation:\nProducts of interest:\nWebsite / GST:"
                      )}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                    >
                      <Mail size={12} /> Email partner desk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — floating form card */}
            <div>
              <div id="enquiry" className="lg:sticky lg:top-24 scroll-mt-24">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyanx-400/30 via-brand-500/20 to-transparent blur-2xl" />
                  <div className="relative rounded-[1.75rem] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-cyanx-400 via-brand-500 to-brand-700" />
                    <div className="px-6 sm:px-7 pt-7 pb-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700">
                            Enquiry
                          </div>
                          <h2 className="mt-1 text-xl sm:text-2xl font-display font-extrabold text-graphite-900">
                            Send us a message
                          </h2>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Reply &lt; 1 day
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-graphite-500">
                        Sales, integrations, channel-partner applications and general enquiries.
                      </p>
                    </div>

                    <div className="bg-white">
                      <iframe
                        title="Infra DigiTech Enquiry Form"
                        src={siteConfig.forms.enquiryEmbed}
                        loading="lazy"
                        className="block w-full h-[620px] sm:h-[640px] border-0"
                        allow="clipboard-write"
                      />
                      <noscript>
                        <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="m-6 inline-flex btn-primary">
                          Open the form in a new tab
                        </a>
                      </noscript>
                    </div>

                    <div className="px-6 sm:px-7 py-3.5 border-t border-graphite-100 flex items-center justify-between gap-3 text-[11px] text-graphite-500">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck size={12} className="text-brand-600" />
                        Powered by Microsoft Forms
                      </span>
                      <a
                        href={<iframe width="640px" height="480px" src="https://forms.cloud.microsoft/r/AGDSmgAR0p?embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline"
                      >
                        Open in new tab <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center text-xs text-graphite-400">
                  Looking for a formal pricing quotation?{" "}
                  <a
                    href={siteConfig.forms.enquiry}
                    target="_blank"
                    rel="noopener"
                    className="font-semibold text-cyanx-300 hover:text-cyanx-200 inline-flex items-center gap-1"
                  >
                    Open the quote form
                    <ExternalLink size={10} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* WHERE WE ARE — clean white section                              */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
                <MapPin size={12} /> Where we are
              </div>
              <h2 className="mt-4 font-display font-extrabold text-graphite-900 text-3xl sm:text-4xl tracking-tight">
                Visit our Bengaluru HQ.
              </h2>
              <p className="mt-3 text-graphite-600 max-w-md">
                Our PCB, firmware, hardware and software teams are all under one roof in
                Banashankari, Karnataka.
              </p>

              <dl className="mt-8 space-y-5">
                <Row icon={MapPin} label="Address">
                  {siteConfig.legalName}<br />
                  {c.address.line1}<br />
                  {c.address.line2}<br />
                  {c.address.line3}<br />
                  {c.address.city}, {c.address.state} {c.address.postalCode}
                </Row>
                <Row icon={Clock} label="Hours">{c.hours}</Row>
                <Row icon={Phone} label="Sales">
                  <a href={buildTelLink(c.salesMobile)} className="hover:text-brand-700 transition">{c.salesMobile}</a>
                </Row>
                <Row icon={Headphones} label="Service">
                  <a href={buildTelLink(c.serviceMobile)} className="hover:text-brand-700 transition">{c.serviceMobile}</a>
                </Row>
                <Row icon={Mail} label="Email">
                  <a href={buildMailLink()} className="hover:text-brand-700 transition">{c.email}</a>
                </Row>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition"
                >
                  <MapPin size={14} /> Open in Google Maps
                </a>
                <Link
                  href="/service-request"
                  className="inline-flex items-center gap-2 rounded-xl border border-graphite-200 bg-white px-5 py-2.5 text-sm font-semibold text-graphite-800 hover:border-brand-400 hover:text-brand-700 transition"
                >
                  <Headphones size={14} /> Raise a service ticket
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[440px] rounded-3xl overflow-hidden ring-1 ring-graphite-200 bg-graphite-50 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                <iframe
                  title="Infra DigiTech - Bengaluru office"
                  src={c.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-brand-700 transition"
                >
                  <MapPin size={12} />
                  Get directions
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* FAQ shortcut — clean white card                                 */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-14 sm:py-16">
          <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-3xl bg-white ring-1 ring-graphite-200 hover:ring-brand-400 hover:shadow-[0_20px_60px_-30px_rgba(29,78,216,0.25)] transition p-7 sm:p-9">
            <div className="flex items-start sm:items-center gap-4">
              <div className="rounded-2xl bg-brand-50 text-brand-700 p-3.5">
                <HelpCircle size={22} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-graphite-400">
                  Knowledge base
                </div>
                <div className="mt-0.5 text-xl font-display font-extrabold text-graphite-900">
                  Most questions are answered in our FAQ.
                </div>
                <div className="mt-1 text-sm text-graphite-600">
                  Integrations, customization, lead times, GeM procurement, service SLA, exports.
                </div>
              </div>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white px-5 py-2.5 text-sm font-bold hover:bg-brand-700 transition sm:shrink-0"
            >
              Open FAQ
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/* Pieces                                                          */
/* ─────────────────────────────────────────────────────────────── */

function QuickTile({ badge, number, telHref, waHref }) {
  return (
    <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 hover:ring-white/25 transition p-4">
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyanx-300">
        {badge}
      </div>
      <a href={telHref} className="mt-1 block text-base sm:text-lg font-bold text-white hover:text-cyanx-200 transition">
        {number}
      </a>
      <div className="mt-3 flex items-center gap-2">
        <a
          href={telHref}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-semibold text-white hover:bg-white/15 transition"
        >
          <Phone size={11} /> Call
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 px-2.5 py-1.5 text-[11px] font-semibold hover:bg-emerald-500/25 transition"
        >
          <MessageCircle size={11} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 rounded-xl bg-brand-50 text-brand-700 p-2.5 shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-graphite-400">
          {label}
        </dt>
        <dd className="mt-1 text-sm sm:text-base text-graphite-800 leading-relaxed">
          {children}
        </dd>
      </div>
    </div>
  );
}
