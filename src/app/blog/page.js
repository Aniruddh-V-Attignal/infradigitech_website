import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import StructuredData from "@/components/StructuredData";
import BlogExplorer from "@/components/BlogExplorer";
import { POSTS, getCategoryById } from "@/data/blog";
import { siteConfig } from "@/config/site";

export const metadata = {
  title:
    "Blog & Insights | Infra DigiTech — Healthcare, BFSI, Industrial & Buyer's Guides",
  description:
    "Procurement-focused articles on nurse calling, queue management, GPS clocks, industrial displays and sustainability — written by Infra DigiTech's engineering team for hospital, banking and manufacturing decision-makers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights | Infra DigiTech",
    description:
      "Procurement guides, technical decision frameworks and field insights from a Bengaluru-based electronics manufacturer.",
    type: "website",
    url: `${siteConfig.url}/blog`,
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
];

export default function BlogIndexPage() {
  // Order posts newest first. Featured = newest. Rest = everything else,
  // which then gets handed to the client-side BlogExplorer for search + filter.
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />

      {/* Hero */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-dark">Blog &amp; Insights</span>
            <h1 className="h1 mt-3 text-white">
              Decision frameworks and field notes from a{" "}
              <span className="text-cyanx-400">Bengaluru electronics manufacturer</span>
            </h1>
            <p className="mt-5 text-lg text-graphite-200">
              Procurement-focused articles on healthcare communication, banking
              displays, queue management, synchronized time and industrial
              automation — written by the engineering team that builds the
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post — always the newest article, server-rendered for SEO */}
      {featured && (
        <Section>
          <div className="mb-6">
            <span className="eyebrow">Featured</span>
          </div>
          <Link
            href={`/blog/${featured.slug}`}
            className="card group block p-0 overflow-hidden grid lg:grid-cols-5 gap-0"
          >
            <div className="lg:col-span-2 aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-brand-50 via-white to-cyanx-50 border-b lg:border-b-0 lg:border-r border-graphite-100 relative overflow-hidden">
              {featured.heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img loading="lazy" decoding="async"
                  src={featured.heroImage}
                  alt={featured.title}
                  className="block w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen size={56} className="text-brand-300" strokeWidth={1.2} />
                </div>
              )}
            </div>
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              {(() => {
                const cat = getCategoryById(featured.category);
                return cat ? (
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-brand-50 border border-brand-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700">
                    {cat.name}
                  </span>
                ) : null;
              })()}
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-graphite-900 leading-tight group-hover:text-brand-700 transition">
                {featured.title}
              </h2>
              <p className="mt-3 text-graphite-600 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-3 text-xs text-graphite-500">
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {featured.readingMinutes} min read
                </span>
                <span className="text-graphite-300">·</span>
                <time dateTime={featured.publishedAt}>
                  {new Date(featured.publishedAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:gap-2.5 transition-all">
                Read the article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </Section>
      )}

      {/* Browse / filter — search + category filter chips for the remaining posts */}
      {rest.length > 0 && (
        <Section variant="soft">
          <SectionHeader
            eyebrow="Browse the archive"
            title="Find an article by topic or keyword"
            subtitle="Filter by category or search by keyword, topic name or tag — the article grid updates as you type."
          />
          <BlogExplorer posts={rest} />
        </Section>
      )}
    </>
  );
}
