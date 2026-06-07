import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import StructuredData from "@/components/StructuredData";
import { Download, ExternalLink, ShieldCheck, Scale, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { certLogos } from "@/data/certifications";

export const metadata = {
  title: "Certifications & Compliance | Infra DigiTech",
  description:
    "ISO 9001:2015 (QRO certified), GeM Registered Vendor, MSME / Udyam Registered, CE Marking, IEC code holder, Made in India and Export Ready. Certificate numbers, issuing bodies and validity dates for Infra DigiTech Pvt Ltd.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications & Compliance | Infra DigiTech",
    description:
      "Independently audited certifications with issuing body, certificate number, validity and verification source — for procurement and tender teams.",
  },
};

const breadcrumbs = [
  { name: "Home",           url: "/" },
  { name: "Certifications", url: "/certifications" },
];

/**
 * Each card now carries verifiable details that procurement / tender
 * teams ask for: issuing body, certificate / registration number, dates
 * and a direct verification URL on the issuing authority's portal.
 *
 * `pending: true` flags a certification whose document is not yet
 * available for public download (CE document being relocated). The
 * badge stays — the download is hidden until the file is in place.
 */
const CARDS = [
  {
    id: "iso",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    text: "Independently assessed by QRO Certification (EGAC accredited, IAF member) — covers manufacturing, design, development, supply, installation and maintenance of our nurse calling, queue management, GPS clocks, token displays, banking displays and industrial production display systems.",
    issuingBody: "QRO Certification LLP",
    accreditation: "EGAC (CAB # 011905), IAF MLA member",
    certNumber: "Final certificate number — issuance pending from QRO",
    issuedOn: "14 April 2026",
    validTill: "13 April 2029 (annual surveillance audits)",
    verifyUrl: "https://www.qrocert.org",
    download: "/certifications/ISO.pdf",
  },
  {
    id: "ce",
    title: "CE Marking",
    subtitle: "European Conformity (Safety & EMC)",
    text: "Applied to nurse calling, queue management, GPS clocks and other applicable product lines for export to GCC, Southeast Asia, Africa and EU markets. Declaration of Conformity provided on request with each export shipment.",
    issuingBody: "Notified Body (per product family)",
    note: "Declaration of Conformity available on request — please contact sales for the document for your specific product line.",
    pending: true,
  },
  {
    id: "gem",
    title: "GeM Registered Vendor",
    subtitle: "Government e-Marketplace",
    text: "Verified seller on the Government e-Marketplace, the procurement portal for all Indian government ministries, PSUs, departments and autonomous bodies. Eligible for tender-based and rate-contract purchases nationwide.",
    issuingBody: "GeM, Department of Commerce, Government of India",
    certNumber: `Seller ID: ${siteConfig.legal.gemSellerId}`,
    verifyUrl: "https://gem.gov.in/",
    download: "/certificates/gem.pdf",
  },
  {
    id: "msme",
    title: "MSME / Udyam Registered",
    subtitle: "Ministry of MSME, Government of India",
    text: "Registered as a Micro enterprise under the Udyam portal of the Ministry of MSME — classification 2026-27. Major activity: Manufacturing of computer, electronic and optical products (NIC 26 / 2680 / 26800).",
    issuingBody: "Ministry of MSME, Government of India",
    certNumber: `Udyam: ${siteConfig.legal.udyam}`,
    issuedOn: "8 April 2026",
    verifyUrl: "https://udyamregistration.gov.in/",
    download: "/certifications/Udyam%20Registration%20Certificate.pdf",
  },
  {
    id: "mii",
    title: "Made in India",
    subtitle: "Manufactured in Bengaluru",
    text: "Designed, engineered and assembled at our Bengaluru facility — in-house PCB design, firmware, sheet-metal fabrication and final assembly under one roof. Aligned with Atmanirbhar Bharat and the local-content preference rules for Indian government procurement.",
    issuingBody: "Self-declared / per Public Procurement (Preference to Make in India) Order, 2017",
  },
  {
    id: "exp",
    title: "Export Ready (IEC / DGFT)",
    subtitle: "Importer-Exporter Code holder",
    text: "Active Importer-Exporter Code holder, DGFT registered for export. Voltage, language and compliance variants for GCC, Southeast Asia, Africa and other markets.",
    issuingBody: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry",
    certNumber: `IEC: ${siteConfig.legal.iec}`,
    issuedOn: "24 April 2026 (DGFT Bengaluru)",
    verifyUrl: "https://www.dgft.gov.in/",
    download: "/certifications/IE%20Code.pdf",
  },
  {
    id: "tm",
    title: "Registered Trade Mark",
    subtitle: "DIGI-TECH logomark — Class 9",
    text: "DIGI-TECH ellipse logomark is a registered trade mark in Class 9 (cash registers, calculating machines, data processing equipment and computers) with the Trade Marks Registry, Mumbai — valid through January 2032 and renewable for further ten-year periods.",
    issuingBody: "Trade Marks Registry, Government of India (Mumbai)",
    certNumber: `Trade Mark No. ${siteConfig.legal.trademark.number}`,
    issuedOn: `Filed ${siteConfig.legal.trademark.filingDate} · Sealed ${siteConfig.legal.trademark.sealedOn}`,
    validTill: `${siteConfig.legal.trademark.validTill} (renewable)`,
    verifyUrl: "https://search.ipindia.gov.in/TMSearch/",
    download: "/certifications/DIGI%20TECH%20REGISTERED%20CERTIFICATE%20(%20TRADE%20MARK%20).pdf",
    note: "Mark currently held by predecessor partnership firm M/S DigiTech Solutions; assignment to Infra DigiTech Pvt Ltd in progress with the Trade Marks Registry.",
  },
];

const logoById = Object.fromEntries(certLogos.map((c) => [c.id, c]));

export default function CertificationsPage() {
  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />

      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-12 sm:py-14">
          <span className="eyebrow eyebrow-dark">Trust & compliance</span>
          <h1 className="h1 mt-2 text-white">Certifications</h1>
          <p className="mt-4 text-lg text-graphite-200 max-w-2xl">
            Independently audited certifications and government registrations — with the issuing
            authority, certificate number, validity dates and direct verification source for every entry.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/credentials"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-brand-700 px-5 py-2.5 font-semibold shadow-sm hover:bg-brand-50 transition"
            >
              <Scale size={16} /> View full legal credentials
            </Link>
            <a
              href={siteConfig.forms.enquiry}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-cyanx-400 text-graphite-950 px-5 py-2.5 font-bold shadow-sm hover:bg-cyanx-300 transition"
            >
              Request certificate copies
            </a>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((c) => {
            const logo = logoById[c.id];
            return (
              <div key={c.id} className="card p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-16 flex items-center justify-start">
                    {logo && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="max-h-14 max-w-[150px] object-contain"
                      />
                    )}
                    {!logo && c.id === "tm" && (
                      <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-2 text-brand-700">
                        <ShieldCheck size={20} />
                        <span className="text-sm font-bold">Trade Marks Registry, India</span>
                      </div>
                    )}
                  </div>
                  {c.pending && (
                    <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
                      On request
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-bold text-graphite-900">{c.title}</h3>
                {c.subtitle && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mt-0.5">
                    {c.subtitle}
                  </p>
                )}
                <p className="mt-2 text-sm text-graphite-600 leading-relaxed">{c.text}</p>

                {/* Verifiable details */}
                <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-[12px]">
                  {c.issuingBody && (
                    <>
                      <dt className="text-graphite-500 font-semibold">Issuing body</dt>
                      <dd className="text-graphite-800">{c.issuingBody}</dd>
                    </>
                  )}
                  {c.accreditation && (
                    <>
                      <dt className="text-graphite-500 font-semibold">Accreditation</dt>
                      <dd className="text-graphite-800">{c.accreditation}</dd>
                    </>
                  )}
                  {c.certNumber && (
                    <>
                      <dt className="text-graphite-500 font-semibold">Reference</dt>
                      <dd className="text-graphite-800 font-mono break-all">{c.certNumber}</dd>
                    </>
                  )}
                  {c.issuedOn && (
                    <>
                      <dt className="text-graphite-500 font-semibold">Issued</dt>
                      <dd className="text-graphite-800">{c.issuedOn}</dd>
                    </>
                  )}
                  {c.validTill && (
                    <>
                      <dt className="text-graphite-500 font-semibold">Valid till</dt>
                      <dd className="text-graphite-800">{c.validTill}</dd>
                    </>
                  )}
                </dl>

                {c.note && (
                  <p className="mt-3 text-[11px] italic text-graphite-500 leading-relaxed">
                    {c.note}
                  </p>
                )}

                <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Verify at source <ExternalLink size={12} />
                    </a>
                  )}
                  {c.download && !c.pending && (
                    <a
                      href={c.download}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-graphite-700 hover:text-brand-700"
                    >
                      Download PDF <Download size={12} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeader
          eyebrow="Documents"
          title="Need a certificate copy?"
          subtitle="Download the scanned certificate PDFs — or request a specific document via the enquiry form. CE Declaration of Conformity is available on request, per product line."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/certifications/ISO.pdf" target="_blank" rel="noopener" className="btn-outline justify-between">
            <span className="text-sm">ISO 9001:2015 (QRO)</span>
            <Download size={16} />
          </a>
          <a href="/certificates/gem.pdf" target="_blank" rel="noopener" className="btn-outline justify-between">
            <span className="text-sm">GeM Seller Profile</span>
            <Download size={16} />
          </a>
          <a href="/certifications/Udyam%20Registration%20Certificate.pdf" target="_blank" rel="noopener" className="btn-outline justify-between">
            <span className="text-sm">Udyam / MSME Registration</span>
            <Download size={16} />
          </a>
          <a href="/certifications/IE%20Code.pdf" target="_blank" rel="noopener" className="btn-outline justify-between">
            <span className="text-sm">Importer-Exporter Code (IEC)</span>
            <Download size={16} />
          </a>
          <a href="/certifications/DIGI%20TECH%20REGISTERED%20CERTIFICATE%20(%20TRADE%20MARK%20).pdf" target="_blank" rel="noopener" className="btn-outline justify-between">
            <span className="text-sm">Trade Mark Registration</span>
            <Download size={16} />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-primary">
            Request a specific document
          </a>
          <Link href="/credentials" className="btn-secondary inline-flex items-center gap-2">
            <FileText size={16} /> See full legal credentials
          </Link>
        </div>
      </Section>
    </>
  );
}
