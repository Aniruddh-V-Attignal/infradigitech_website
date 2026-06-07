import Link from "next/link";
import {
  Cpu, Wrench, HeartHandshake, Rocket, Mail, ArrowRight, Briefcase, MapPin,
} from "lucide-react";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Careers at Infra DigiTech | Join our team",
  description:
    "Build the next generation of digital display & IoT systems with Infra DigiTech. Open roles in engineering, manufacturing, sales, service and operations across Bengaluru and PAN-India.",
  alternates: { canonical: "/careers" },
};

const culture = [
  { Icon: Rocket,         title: "Build & ship",      text: "Real products that show up in branches, hospitals, factories and stadiums — every quarter." },
  { Icon: Cpu,             title: "Cross-functional",  text: "Hardware, firmware, cloud, mechanical, sales and service collaborate on every product." },
  { Icon: HeartHandshake,  title: "People-first",     text: "Mentorship, ownership, and a flat, no-politics workplace anchored in Bengaluru." },
  { Icon: Wrench,          title: "Hands-on growth",  text: "Field installs, customer visits and continuous learning budget for everyone." },
];

const HR_EMAIL = "info@digitech8.com";

const buildHrMailLink = (subject, body) =>
  `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

const openings = [
  {
    title: "Sales Executive",
    loc: "Bangalore / Chennai / Hyderabad / Mumbai / Delhi",
    dept: "Sales · 2 positions",
  },
  {
    title: "Sales Manager",
    loc: "Bangalore",
    dept: "Sales · 1 position",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-dark">Careers</span>
            <h1 className="h1 mt-3 text-white">
              Build the future of <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">smart digital infrastructure</span>.
            </h1>
            <p className="mt-5 text-lg text-graphite-200">
              Join Infra DigiTech and ship products that touch banks, hospitals, factories and stadiums every day —
              across India and 12+ countries. Engineered in Bengaluru, deployed worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#openings" className="btn-primary">
                See Open Roles <ArrowRight size={16} />
              </a>
              <a href={buildHrMailLink("Career enquiry — Infra DigiTech")} className="btn-secondary">
                <Mail size={16} /> Email HR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture pillars */}
      <Section>
        <SectionHeader
          eyebrow="Why Infra DigiTech"
          title="A workplace where engineers, makers and operators thrive"
          subtitle="Real ownership, real customers, real impact — without the bureaucracy."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {culture.map((c) => (
            <div key={c.title} className="card p-6">
              <div className="rounded-xl bg-brand-50 text-brand-700 p-3 inline-flex">
                <c.Icon size={20} />
              </div>
              <h3 className="mt-4 font-bold text-graphite-900">{c.title}</h3>
              <p className="mt-2 text-sm text-graphite-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Openings */}
      <Section variant="soft" id="openings">
        <SectionHeader
          eyebrow="Open roles"
          title="We're hiring across engineering, manufacturing, sales & service"
          subtitle="Don't see a perfect fit? Send your CV — we hire on potential too."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {openings.map((o) => (
            <a
              key={o.title}
              href={buildHrMailLink(`Application — ${o.title}`, `Hi Infra DigiTech HR,\n\nI'd like to apply for the role of ${o.title} (${o.loc}).\n\nMy CV is attached.\n\nThanks.`)}
              className="card group p-5 flex items-center gap-4"
            >
              <div className="rounded-xl bg-brand-50 text-brand-700 p-3 inline-flex">
                <Briefcase size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-graphite-900 group-hover:text-brand-700 transition">
                  {o.title}
                </h3>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-graphite-500">
                  <span className="inline-flex items-center gap-1"><MapPin size={12} /> {o.loc}</span>
                  <span className="text-brand-700 font-semibold">{o.dept}</span>
                </div>
              </div>
              <ArrowRight size={18} className="text-graphite-400 group-hover:text-brand-700 group-hover:translate-x-1 transition" />
            </a>
          ))}
        </div>

        <div className="mt-10 card p-7 sm:p-8 grid lg:grid-cols-3 gap-6 items-center bg-gradient-to-br from-brand-50 to-white">
          <div className="lg:col-span-2">
            <span className="eyebrow">Open application</span>
            <h2 className="h3 mt-2 text-graphite-900">Don&apos;t see your role? Apply anyway.</h2>
            <p className="mt-2 text-graphite-600">
              We hire on potential. Send your CV and a short note about what you want to build —
              we&apos;ll get back if there&apos;s a fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={buildHrMailLink("Open application — Infra DigiTech")} className="btn-primary">
              <Mail size={16} /> Email HR
            </a>
            <Link href="/contact" className="btn-outline">
              Talk to us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
