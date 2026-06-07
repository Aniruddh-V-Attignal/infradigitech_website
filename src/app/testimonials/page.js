import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import StructuredData from "@/components/StructuredData";
import TestimonialsExplorer from "@/components/TestimonialsExplorer";
import { TESTIMONIALS } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export const metadata = {
  title:
    "Customer Testimonials | Infra DigiTech — Hospitals, Banks, Manufacturing",
  description:
    "Customer stories from hospital procurement heads, bank IT managers, diagnostic centre operations leaders and production managers — on Infra DigiTech's nurse calling, queue management, banking displays and industrial production systems.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Testimonials | Infra DigiTech",
    description:
      "Hospital, bank, diagnostic and industrial customers on Infra DigiTech's nurse call, queue management, banking display and industrial display systems.",
    type: "website",
    url: `${siteConfig.url}/testimonials`,
  },
};

const breadcrumbs = [
  { name: "Home",         url: "/" },
  { name: "Testimonials", url: "/testimonials" },
];

/* ----------------------------------------------------------------------
 * Schema.org Review markup — one Review entry per testimonial,
 * grouped inside an ItemList so AI engines and Google can ingest the
 * full set. Each Review is tied to the specific Product it concerns,
 * giving the search engines (and AI assistants) verifiable structured
 * data linking customer feedback to product pages.
 * --------------------------------------------------------------------*/
function buildReviewListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Infra DigiTech Customer Testimonials",
    itemListElement: TESTIMONIALS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        "@id": `${siteConfig.url}/testimonials#${t.id}`,
        author: { "@type": "Person", name: t.authorName },
        reviewBody: t.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: t.product
          ? {
              "@type": "Product",
              name: t.product,
              url: t.productSlug
                ? `${siteConfig.url}/${t.productSlug}`
                : undefined,
              manufacturer: {
                "@type": "Organization",
                name: siteConfig.legalName,
                url: siteConfig.url,
              },
            }
          : undefined,
        publisher: {
          "@type": "Organization",
          name: t.company,
        },
        datePublished: t.publishedAt,
      },
    })),
  };
}

export default function TestimonialsPage() {
  const reviewListLd = buildReviewListSchema();

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewListLd) }}
      />
      <StructuredData
        type="Speakable"
        data={{ cssSelectors: ["h1", ".lead", "blockquote"] }}
      />

      {/* Hero */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-dark">Customer testimonials</span>
            <h1 className="h1 mt-3 text-white">
              What our customers say about
              {" "}
              <span className="text-cyanx-400">Infra DigiTech</span>
            </h1>
            <p className="lead mt-5 text-lg text-graphite-200">
              Hospital procurement heads, bank IT managers, diagnostic centre operations
              leaders and production managers on how Infra DigiTech&apos;s nurse calling,
              queue management, banking display and industrial display systems have changed
              their day-to-day operations.
            </p>
          </div>
        </div>
      </section>

      {/* Explorer */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Browse stories"
          title="Filter by sector"
          subtitle="Healthcare hospitals, BFSI public-sector and private banks, industrial manufacturers, diagnostic centres and IT campuses — pick the sector closest to your operation."
        />
        <TestimonialsExplorer testimonials={TESTIMONIALS} />
      </Section>

      {/* CTA */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 text-white">
              Ready to join them?
            </h2>
            <p className="mt-3 text-graphite-200">
              Talk to our engineering team about your project. Site survey within 5-7 working days, AMC and PAN-India service network included.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-cyanx-50 transition"
              >
                Contact us
              </a>
              <a
                href={siteConfig.forms.enquiry}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
