import Section from "@/components/Section";
import DownloadsExplorer from "./DownloadsExplorer";
import { Download } from "lucide-react";

export const metadata = {
  title: "Catalogues & Brochures | Infra DigiTech",
  description:
    "Download product catalogues and brochures (PDF) for the full Infra DigiTech range — nurse calling, queue management, banking displays, GPS clocks, food counter displays and more. Search by keyword or filter by category.",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow eyebrow-dark">Resources</span>
              <h1 className="h1 mt-2 text-white">Catalogues &amp; Brochures</h1>
              <p className="mt-4 text-lg text-graphite-200 max-w-2xl">
                Search and download our complete product catalogues. Each PDF contains specifications,
                applications and tier-by-tier comparisons.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/brochures/Master_catalogue.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-graphite-900 px-5 py-2.5 text-sm font-bold hover:bg-cyanx-50 transition"
              >
                <Download size={16} /> Download Master Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search + grid */}
      <Section variant="soft">
        <DownloadsExplorer />
      </Section>
    </>
  );
}
