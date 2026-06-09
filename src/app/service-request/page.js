import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import {
  Headphones, Wrench, ShieldCheck, MessageCircle, Phone, ExternalLink,
  HelpCircle, Clock, Sparkles, Mail, AlertCircle, ArrowRight,
  Globe2, Zap, Handshake,
} from "lucide-react";
import {
  siteConfig, buildServiceWhatsAppLink, buildTelLink, buildMailLink,
} from "@/config/site";

export const metadata = {
  title: "Service Request | Infra DigiTech Support",
  description:
    "Raise a service request for any installed Infra DigiTech product. AMC, troubleshooting, on-site and remote support across India. Embedded service form, 4-hour acknowledgement SLA.",
  alternates: { canonical: "/service-request" },
};

const steps = [
  {
    icon: Headphones,
    title: "Open a ticket",
    text: "Submit the embedded service form with product, site and a brief issue description.",
  },
  {
    icon: Wrench,
    title: "Diagnose remotely",
    text: "Our team validates the issue over a call or remote session within 4 business hours.",
  },
  {
    icon: ShieldCheck,
    title: "On-site if needed",
    text: "If on-site service is required, our partner network reaches you within 24-72 hours.",
  },
];

const howToData = {
  name: "How to raise a service request with Infra DigiTech",
  description:
    "Three-step service request flow for any installed Infra DigiTech product - open a ticket, remote diagnosis within 4 business hours, on-site visit within 24-72 hours if needed.",
  totalTime: "PT72H",
  steps: steps.map((s) => ({ name: s.title, text: s.text, url: "/service-request" })),
};

const serviceFaq = [
  {
    q: "How quickly does Infra DigiTech acknowledge a service ticket?",
    a: "We acknowledge every service ticket within 4 business hours. Most issues are diagnosed and resolved remotely; on-site visits are arranged within 24-72 hours through our PAN-India service network.",
  },
  {
    q: "How do I contact Infra DigiTech service?",
    a: `Call or WhatsApp our service line ${siteConfig.contact.serviceMobile}, open the embedded service form, or email ${siteConfig.contact.email}.`,
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC)?",
    a: "Yes - comprehensive and non-comprehensive AMCs are available across all installed product lines.",
  },
];

const SLA_TRUST = [
  { label: "Acknowledged within 4 business hours",     icon: Clock },
  { label: "Remote or on-site within 24-72 hours",     icon: Wrench },
  { label: "AMC and warranty coverage available",      icon: ShieldCheck },
  { label: "PAN-India service network",                icon: Globe2 },
];

export default function ServiceRequestPage() {
  const c = siteConfig.contact;

  return (
    <>
      <StructuredData type="HowTo"     data={howToData} />
      <StructuredData type="FAQPage"   data={serviceFaq} />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", "h2", ".lead"] }} />

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HERO — dark blue brand gradient. Form on the right.             */}
      {/* Emergency / SLA card tucked under quick contact on the left.    */}
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
                Service & Support
              </div>

              <h1 className="mt-4 font-display font-extrabold tracking-tight text-white text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05]">
                Up and running,
                <br />
                <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">
                  always.
                </span>
              </h1>

              <p className="lead mt-3 max-w-xl text-base sm:text-lg text-graphite-300 leading-relaxed">
                Existing installation? Raise a ticket and our service desk will respond
                the same business day. Most issues are diagnosed remotely; on-site visits
                are arranged within 24-72 hours.
              </p>

              {/* SLA trust strip */}
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
                {SLA_TRUST.map((t) => (
                  <li key={t.label} className="inline-flex items-center gap-2 text-xs sm:text-sm text-graphite-200">
                    <t.icon size={14} className="text-cyanx-400" />
                    {t.label}
                  </li>
                ))}
              </ul>

              {/* Quick contact - just service since this page is service-focused */}
              <div className="mt-10 max-w-xl">
                <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 hover:ring-white/25 transition p-5">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyanx-300">
                        Service line
                      </div>
                      <a href={buildTelLink(c.serviceMobile)} className="mt-1 block text-xl sm:text-2xl font-display font-extrabold text-white hover:text-cyanx-200 transition tracking-tight">
                        {c.serviceMobile}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={buildTelLink(c.serviceMobile)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[11px] font-semibold text-white hover:bg-white/15 transition"
                      >
                        <Phone size={12} /> Call
                      </a>
                      <a
                        href={buildServiceWhatsAppLink("Hello, I would like to raise a service request.")}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 px-3 py-2 text-[11px] font-semibold hover:bg-emerald-500/25 transition"
                      >
                        <MessageCircle size={12} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email + FAQ */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-graphite-300">
                <a href={buildMailLink("Service Request")} className="inline-flex items-center gap-2 hover:text-white transition">
                  <Mail size={14} className="text-cyanx-400" />
                  {c.email}
                </a>
                <span className="hidden sm:inline-block h-3 w-px bg-white/15" />
                <Link href="/faq#service" className="inline-flex items-center gap-1.5 hover:text-white transition">
                  <HelpCircle size={14} className="text-cyanx-400" />
                  Check the service FAQ
                  <ArrowRight size={12} />
                </Link>
              </div>

              {/* Channel Partner CTA */}
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
                    {["Authorised dealer / SI tie-ups","Regional distributor opportunities","OEM / private-label options","On-site training programmes","Attractive incentives & margins","Dedicated partner support"].map((b) => (
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
                      href={buildTelLink(siteConfig.contact.salesMobile)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyanx-400 text-graphite-950 px-4 py-2.5 text-xs font-bold hover:bg-cyanx-300 transition"
                    >
                      <Phone size={12} /> Call sales {siteConfig.contact.salesMobile}
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

            {/* RIGHT — floating service form card */}
            <div>
              <div id="service-form" className="lg:sticky lg:top-24 scroll-mt-24">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyanx-400/30 via-brand-500/20 to-transparent blur-2xl" />
                  <div className="relative rounded-[1.75rem] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-cyanx-400 via-brand-500 to-brand-700" />
                    <div className="px-6 sm:px-7 pt-7 pb-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700">
                            Service ticket
                          </div>
                          <h2 className="mt-1 text-xl sm:text-2xl font-display font-extrabold text-graphite-900">
                            Open a service request
                          </h2>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Ack &lt; 4 hrs
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-graphite-500">
                        Tell us which product, which site and the issue you are seeing.
                      </p>
                    </div>

                    <div className="bg-white">
                      <iframe
                        title="Infra DigiTech Service Request Form"
                        src={siteConfig.forms.serviceRequestEmbed}
                        loading="lazy"
                        className="block w-full h-[620px] sm:h-[640px] border-0"
                        allow="clipboard-write"
                      />
                      <noscript>
                        <a href={siteConfig.forms.serviceRequest} target="_blank" rel="noopener" className="m-6 inline-flex btn-primary">
                          Open the form in a new tab
                        </a>
                      </noscript>
                    </div>

                    <div className="px-6 sm:px-7 py-3.5 border-t border-graphite-100 flex items-center justify-between gap-3 text-[11px] text-graphite-500">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck size={12} className="text-brand-600" />
                        Routed to our Bengaluru service desk
                      </span>
                      <a
                        href={siteConfig.forms.serviceRequest}
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
                  Not an existing customer?{" "}
                  <Link href="/contact" className="font-semibold text-cyanx-300 hover:text-cyanx-200 inline-flex items-center gap-1">
                    Use the Contact form instead
                    <ArrowRight size={10} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* SLA recap — clean white section                                 */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="container-default py-20 sm:py-24">
          <div className="rounded-3xl bg-graphite-50 ring-1 ring-graphite-200 p-7 sm:p-9 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700">
                <Sparkles size={12} /> Other enquiries
              </div>
              <h3 className="mt-2 text-2xl font-display font-extrabold text-graphite-900 tracking-tight">
                Upgrades, integrations &amp; new projects.
              </h3>
              <p className="mt-3 text-sm text-graphite-600 max-w-xl">
                Not every enquiry is a repair. Tell us what you are planning and our team
                will scope it with you — from a single upgrade to a multi-site rollout.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-graphite-700">
                <li className="flex items-start gap-2"><Zap size={14} className="mt-1 text-brand-600 shrink-0" /> Upgrade an old or legacy system to the latest hardware.</li>
                <li className="flex items-start gap-2"><Zap size={14} className="mt-1 text-brand-600 shrink-0" /> Add an API or third-party software integration.</li>
                <li className="flex items-start gap-2"><Zap size={14} className="mt-1 text-brand-600 shrink-0" /> Source a product you don&apos;t see in our catalogue.</li>
                <li className="flex items-start gap-2"><Zap size={14} className="mt-1 text-brand-600 shrink-0" /> Plan a custom or bulk requirement for a new site.</li>
              </ul>
              <p className="mt-4 inline-flex items-start gap-2 text-sm text-graphite-700">
                <Wrench size={15} className="mt-0.5 text-brand-600 shrink-0" />
                Our technician can visit your site, run a survey and give you a detailed
                requirements report.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition"
              >
                Contact us <ArrowRight size={14} />
              </Link>
              <a
                href={buildTelLink(c.salesMobile)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-graphite-200 bg-white px-5 py-2.5 text-sm font-semibold text-graphite-800 hover:border-brand-400 hover:text-brand-700 transition"
              >
                <Phone size={14} /> Call sales {c.salesMobile}
              </a>
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
                  AMC, warranty, SLA and coverage answers.
                </div>
                <div className="mt-1 text-sm text-graphite-600">
                  See the Service & Support group of our FAQ for response times, AMC, warranty and PAN-India coverage.
                </div>
              </div>
            </div>
            <Link
              href="/faq#service"
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
