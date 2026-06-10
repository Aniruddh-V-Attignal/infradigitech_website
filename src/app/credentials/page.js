import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import StructuredData from "@/components/StructuredData";
import {
  Scale,
  ShieldCheck,
  Landmark,
  Building2,
  Globe2,
  Factory,
  FileText,
  ExternalLink,
  Download,
  Award,
  Wallet,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Company Credentials & Vendor Profile | Infra DigiTech",
  description:
    "Verifiable legal credentials for Infra DigiTech Pvt Ltd — CIN, PAN, TAN, GSTIN, Udyam (UDYAM-KR-03-0683142), Importer-Exporter Code (IEC), GeM Seller ID, Registered Trade Mark, ISO 9001:2015 (QRO), registered office in Bengaluru. Vendor profile for tender, GeM and procurement teams.",
  alternates: { canonical: "/credentials" },
  openGraph: {
    title: "Company Credentials & Vendor Profile | Infra DigiTech",
    description:
      "Government-issued identifiers, certifications and registrations with direct verification sources — for procurement, tender and AI engines.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home",        url: "/" },
  { name: "Credentials", url: "/credentials" },
];

const L = siteConfig.legal;
const A = siteConfig.contact.address;

/* ----------------------------------------------------------------------------
 * Data
 * --------------------------------------------------------------------------*/

// Legal registrations - primary government-issued identifiers
// (PAN and TAN are confidential and intentionally not displayed publicly.
// They are provided directly to verified vendor-onboarding partners on request.)
const REGISTRATIONS = [
  {
    label:   "Corporate Identity Number (CIN)",
    value:   L.cin,
    issuer:  "Ministry of Corporate Affairs",
    note:    "Private Limited Company, incorporated 21 January 2026",
    verify:  "https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do",
  },
  {
    label:   "Goods and Services Tax Identification (GSTIN)",
    value:   L.gstin,
    issuer:  "Central Board of Indirect Taxes & Customs",
    note:    "Registered in Karnataka (State code 29)",
    verify:  "https://services.gst.gov.in/services/searchtp",
  },
  {
    label:   "Udyam Registration (MSME)",
    value:   L.udyam,
    issuer:  "Ministry of MSME, Government of India",
    note:    `${L.udyamClassification} enterprise · classification 2026-27 · registered ${L.udyamRegisteredOn}`,
    verify:  "https://udyamregistration.gov.in/Udyam_Verify.aspx",
  },
  {
    label:   "Importer-Exporter Code (IEC)",
    value:   L.iec,
    issuer:  `${L.iecIssuedAt}, Ministry of Commerce & Industry`,
    note:    `Issued ${L.iecIssuedOn} · enables export of CE-marked products to GCC, Southeast Asia, Africa and EU markets`,
    verify:  "https://dgft.gov.in/",
  },
  {
    label:   "GeM Seller ID",
    value:   L.gemSellerId,
    issuer:  "Government e-Marketplace (GeM), Department of Commerce",
    note:    "Eligible for tender-based and rate-contract procurement by all Indian government ministries, PSUs and autonomous bodies",
    verify:  "https://gem.gov.in/",
  },
];

// Trade Mark - separate block because it has more attributes
const TM = L.trademark;

// Banking partners - fill in these slots with real values when available.
// Each entry renders as a card on the Banking Partners section.
// Leave a string empty to show a "To be updated" placeholder for that field.
const BANKING = [
  {
    bankName:       "HDFC Bank",
    branchLocation: "Avalahalli Extension, Bengaluru",
    accountNumber:  "50200117056693",
    ifsc:           "HDFC0001750",
  },
  // Add a second banking partner here if you have one - copy the block above.
];

// Compliance documents we will scan and host - filenames the user will
// drop into /public/credentials/ later.
// Note: Certificate of Incorporation is NOT exposed for public download
// because it contains the company's PAN.
const DOWNLOADS = [
  { label: "ISO 9001:2015 Certificate (QRO)",         file: "/certifications/ISO.pdf" },
  { label: "Udyam Registration Certificate",           file: "/certifications/Udyam%20Registration%20Certificate.pdf" },
  { label: "Importer-Exporter Code Certificate",       file: "/certifications/IE%20Code.pdf" },
  { label: "Trade Mark Registration Certificate",      file: "/certifications/DIGI%20TECH%20REGISTERED%20CERTIFICATE%20(%20TRADE%20MARK%20).pdf" },
  { label: "GeM Seller Profile (snapshot)",            file: "/credentials/gem-seller-profile.pdf" },
];

/* ----------------------------------------------------------------------------
 * Page
 * --------------------------------------------------------------------------*/

export default function CredentialsPage() {
  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />
      <StructuredData type="LocalBusiness" />

      {/* Hero */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <span className="eyebrow eyebrow-dark">Vendor profile</span>
          <h1 className="h1 mt-2 text-white">Company Credentials</h1>
          <p className="mt-4 text-lg text-graphite-200 max-w-3xl">
            A single page that gathers every government-issued identifier, registration and
            certification for Infra DigiTech Pvt Ltd — with the issuing authority, registration
            number and a direct verification link on the source portal. Built for procurement
            teams, tender desks and vendor-empanelment processes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-brand-700 px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-brand-50 transition"
            >
              <ShieldCheck size={16} /> Third-party certifications
            </Link>
            <a
              href={siteConfig.forms.enquiry}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-cyanx-400 text-graphite-950 px-5 py-2.5 text-sm font-bold shadow-sm hover:bg-cyanx-300 transition"
            >
              Request a credentials pack
            </a>
          </div>
        </div>
      </section>

      {/* Quick legal entity card */}
      <Section variant="soft">
        <div className="card p-7 sm:p-8 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl bg-brand-50 p-3 text-brand-700">
              <Building2 size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Legal entity</p>
              <h2 className="mt-1 text-2xl font-bold text-graphite-900">{siteConfig.legalName}</h2>
              <p className="mt-1 text-sm text-graphite-600">
                Private Limited Company, incorporated under the Companies Act, 2013 — successor
                to the partnership firm M/S DigiTech Solutions, which itself succeeded the
                original proprietorship founded by A.N. Venkatesh in {siteConfig.founded}.
              </p>

              <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Registered Office</dt>
                  <dd className="mt-0.5 text-graphite-800">
                    {A.line1}, {A.line2}, {A.line3}, {A.city} - {A.postalCode}, {A.state}, {A.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Date of Incorporation</dt>
                  <dd className="mt-0.5 text-graphite-800">21 January 2026 · Manesar, RoC Central Registration Centre</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Founder</dt>
                  <dd className="mt-0.5 text-graphite-800">A.N. Venkatesh ({siteConfig.founded})</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Type</dt>
                  <dd className="mt-0.5 text-graphite-800">Company Limited by Shares · Indian Non-Government Company</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal registrations table */}
      <Section>
        <SectionHeader
          eyebrow="Government registrations"
          title="Legal & statutory identifiers"
          subtitle="Every identifier below is independently verifiable on the issuing authority's public portal — click 'Verify at source' to confirm."
        />

        <div className="space-y-4 max-w-5xl mx-auto">
          {REGISTRATIONS.map((r) => (
            <div key={r.label} className="card p-5 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
                <div className="lg:w-2/5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">
                    {r.issuer}
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-graphite-900">{r.label}</div>
                </div>

                <div className="lg:flex-1 min-w-0">
                  <div className="font-mono text-base font-semibold text-brand-700 break-all">
                    {r.value}
                  </div>
                  {r.note && (
                    <div className="mt-1 text-[12px] text-graphite-600 leading-relaxed">{r.note}</div>
                  )}
                </div>

                {r.verify && (
                  <a
                    href={r.verify}
                    target="_blank"
                    rel="noopener"
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Verify at source <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-graphite-500 max-w-3xl mx-auto">
          For TIN / Service-Tax / Excise legacy queries please contact our compliance desk.
          Form 16 / Form 26AS / Form 60 / TDS reconciliation documents are provided directly
          to verified buyers on request.
        </p>
      </Section>

      {/* Trade Mark - dedicated block */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Intellectual property"
          title="Registered Trade Mark"
          subtitle="The DIGI-TECH ellipse logomark is a registered trade mark with the Trade Marks Registry, Mumbai — visible on every product, brochure and our website as the &reg; mark."
        />

        <div className="card p-7 sm:p-9 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="shrink-0 inline-flex items-center justify-center rounded-2xl bg-brand-50 p-5 text-brand-700">
              <Award size={36} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-graphite-900">DIGI-TECH (device / logomark)</h3>
              <p className="mt-1 text-sm text-graphite-600 leading-relaxed">
                Registered in Class 9 covering cash registers, calculating machines, data
                processing equipment and computers — the standard class for electronic
                manufacturing brands. Valid for ten years from the filing date with renewable
                ten-year periods thereafter.
              </p>

              <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Trade Mark No.</dt>
                  <dd className="mt-0.5 font-mono text-graphite-800">{TM.number}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Class</dt>
                  <dd className="mt-0.5 font-mono text-graphite-800">{TM.class}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Filed</dt>
                  <dd className="mt-0.5 text-graphite-800">{TM.filingDate}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Sealed</dt>
                  <dd className="mt-0.5 text-graphite-800">{TM.sealedOn}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Valid till</dt>
                  <dd className="mt-0.5 text-graphite-800">{TM.validTill} (renewable)</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-graphite-500">Registry</dt>
                  <dd className="mt-0.5 text-graphite-800">{TM.registry}</dd>
                </div>
              </dl>

              <p className="mt-5 rounded-lg bg-amber-50 ring-1 ring-amber-200 p-3.5 text-[12px] text-amber-900 leading-relaxed">
                <span className="font-semibold">Note:</span> the trade mark is currently held by
                M/S DigiTech Solutions (the partnership predecessor of Infra DigiTech Pvt Ltd).
                Assignment to Infra DigiTech Pvt Ltd is in progress with the Trade Marks Registry.
                Both entities are owned by the same proprietor group, so brand continuity is
                preserved through the transition.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href="https://search.ipindia.gov.in/TMSearch/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
                >
                  Verify on Trade Marks Registry portal <ExternalLink size={12} />
                </a>
                <a
                  href="/certifications/DIGI%20TECH%20REGISTERED%20CERTIFICATE%20(%20TRADE%20MARK%20).pdf"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite-700 hover:text-brand-700"
                >
                  Download certificate PDF <Download size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Banking & financial */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Banking & financial standing"
          title="Banking partners"
          subtitle="Our primary banking relationships. A formal banker's reference letter for tender or rate-contract evaluations is provided directly to verified procurement teams on request."
        />

        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {BANKING.map((b, idx) => (
            <div key={idx} className="card p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-brand-50 p-3 text-brand-700">
                  <Wallet size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-graphite-900">
                    {b.bankName || (
                      <span className="text-graphite-400 italic font-normal">
                        Bank name — to be updated
                      </span>
                    )}
                  </h3>
                  {b.branchLocation ? (
                    <p className="mt-0.5 text-sm text-graphite-600">{b.branchLocation}</p>
                  ) : (
                    <p className="mt-0.5 text-sm text-graphite-400 italic">
                      Branch location — to be updated
                    </p>
                  )}

                  <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-[12px]">
                    <dt className="text-graphite-500 font-semibold">Account no.</dt>
                    <dd className="font-mono text-graphite-800 break-all">
                      {b.accountNumber || (
                        <span className="text-graphite-400 italic">To be updated</span>
                      )}
                    </dd>
                    <dt className="text-graphite-500 font-semibold">IFSC code</dt>
                    <dd className="font-mono text-graphite-800 break-all">
                      {b.ifsc || (
                        <span className="text-graphite-400 italic">To be updated</span>
                      )}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-4xl mx-auto text-center">
          <p className="text-sm text-graphite-600">
            For large tenders and rate-contract empanelment, we can issue a formal banker's
            reference letter on the bank's letterhead confirming account standing and
            transaction history.
          </p>
          <a
            href={siteConfig.forms.enquiry}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Request banker's reference letter <ChevronRight size={14} />
          </a>
        </div>
      </Section>

      {/* Downloadable credentials pack */}
      <Section>
        <SectionHeader
          eyebrow="Documents"
          title="Download credential documents"
          subtitle="Scanned PDFs of every government-issued certificate and registration. Tender desks can email the entire pack as a single zipped attachment - just ask."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {DOWNLOADS.map((d) => (
            <a
              key={d.file}
              href={d.file}
              target="_blank"
              rel="noopener"
              className="btn-outline justify-between"
            >
              <span className="text-sm text-left">{d.label}</span>
              <Download size={16} className="shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-primary">
            Request the complete credentials pack
          </a>
        </div>
      </Section>

      {/* Where we are registered / verifiable */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Public listings"
          title="Where to verify us independently"
          subtitle="Apart from this page, the company is listed and verifiable on the following government and trade portals."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { label: "Ministry of Corporate Affairs (MCA)", url: "https://www.mca.gov.in/", icon: Landmark, note: "Company master data, CIN" },
            { label: "Udyam Registration Portal",            url: "https://udyamregistration.gov.in/", icon: Factory, note: "MSME / Udyam verification" },
            { label: "DGFT - Importer-Exporter Code",        url: "https://dgft.gov.in/", icon: Globe2, note: "IEC verification" },
            { label: "Government e-Marketplace (GeM)",       url: "https://gem.gov.in/", icon: ShieldCheck, note: "GeM seller verification" },
            { label: "GST Portal",                            url: "https://services.gst.gov.in/services/searchtp", icon: FileText, note: "GSTIN taxpayer search" },
            { label: "Trade Marks Registry",                  url: "https://search.ipindia.gov.in/TMSearch/", icon: Award, note: "Trade Mark search" },
            { label: "IndiaMart catalogue",                   url: siteConfig.directories.indiamart, icon: CheckCircle2, note: "B2B trade directory" },
            { label: "JustDial profile",                      url: siteConfig.directories.justdial, icon: CheckCircle2, note: "Local business directory" },
          ].map((d) => {
            const Icon = d.icon;
            return (
              <a
                key={d.label}
                href={d.url}
                target="_blank"
                rel="noopener"
                className="card p-5 hover:ring-brand-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 rounded-lg bg-brand-50 p-2 text-brand-700">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-sm text-graphite-900 truncate">{d.label}</div>
                    <div className="text-[12px] text-graphite-500 mt-0.5">{d.note}</div>
                  </div>
                  <ExternalLink size={12} className="shrink-0 text-graphite-400 mt-1" />
                </div>
              </a>
            );
          })}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <Scale size={32} className="text-cyanx-400 mx-auto" />
          <h2 className="h2 mt-3 text-white">Onboarding us as a vendor?</h2>
          <p className="mt-3 text-graphite-200">
            We routinely complete vendor empanelment and tender-eligibility processes
            for banks, hospitals, government departments and large enterprises.
            Send us your empanelment questionnaire and we will return a fully completed
            document with supporting attachments within two business days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.forms.enquiry}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-cyanx-50 transition"
            >
              Start vendor onboarding <ChevronRight size={14} />
            </a>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              Third-party certifications
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
