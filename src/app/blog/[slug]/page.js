import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
  Check,
  AlertTriangle,
  Info,
  CheckCircle2,
  BookOpen,
  Phone,
} from "lucide-react";
import Section from "@/components/Section";
import StructuredData from "@/components/StructuredData";
import CTAButtons from "@/components/CTAButtons";
import {
  POSTS,
  getPostBySlug,
  getCategoryById,
  getRelatedPosts,
  getAllPostSlugs,
} from "@/data/blog";
import { getProductBySlug } from "@/data/products";
import { siteConfig } from "@/config/site";

/* ----------------------------------------------------------------------------
 * Static params — pre-generate every post route at build time for SEO
 * --------------------------------------------------------------------------*/
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

/* ----------------------------------------------------------------------------
 * Per-post metadata
 * --------------------------------------------------------------------------*/
export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Infra DigiTech Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.ogImage ? [post.ogImage] : (post.heroImage ? [post.heroImage] : []),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.ogImage ? [post.ogImage] : (post.heroImage ? [post.heroImage] : []),
    },
  };
}

/* ----------------------------------------------------------------------------
 * Content block renderer — renders each structured block in the post.content
 * array into JSX. Keeps content portable and styling consistent across posts.
 * --------------------------------------------------------------------------*/
function Block({ block }) {
  if (block.type === "lead") {
    return (
      <p className="text-lg sm:text-xl text-graphite-700 leading-relaxed font-medium mb-8">
        {block.text}
      </p>
    );
  }
  if (block.type === "h2") {
    return (
      <h2
        id={block.id}
        className="text-2xl sm:text-3xl font-extrabold font-display text-graphite-900 tracking-tight mt-10 mb-4 scroll-mt-24"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3
        id={block.id}
        className="text-xl font-bold font-display text-graphite-900 tracking-tight mt-7 mb-3 scroll-mt-24"
      >
        {block.text}
      </h3>
    );
  }
  if (block.type === "p") {
    return (
      <p className="text-base text-graphite-700 leading-[1.75] mb-5">
        {block.text}
      </p>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mb-6 space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-graphite-700 leading-relaxed">
            <Check size={18} className="text-brand-600 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="mb-6 space-y-2.5 counter-reset list-none">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-graphite-700 leading-relaxed">
            <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  if (block.type === "callout") {
    const toneMap = {
      info:    { Icon: Info,           bg: "bg-brand-50",   border: "border-brand-200",   text: "text-brand-900",  icon: "text-brand-600"  },
      warn:    { Icon: AlertTriangle,  bg: "bg-amber-50",   border: "border-amber-200",   text: "text-amber-900",  icon: "text-amber-600"  },
      success: { Icon: CheckCircle2,   bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900",icon: "text-emerald-600"},
    };
    const t = toneMap[block.tone || "info"];
    return (
      <div className={`my-7 rounded-2xl ${t.bg} border ${t.border} p-5 sm:p-6`}>
        <div className="flex gap-3">
          <t.Icon size={20} className={`${t.icon} shrink-0 mt-0.5`} />
          <div>
            {block.title && (
              <h4 className={`font-bold ${t.text} mb-1.5`}>{block.title}</h4>
            )}
            <p className={`text-sm ${t.text}/90 leading-relaxed`}>{block.text}</p>
          </div>
        </div>
      </div>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="my-7 border-l-4 border-brand-300 bg-graphite-50/60 px-6 py-4 rounded-r-xl">
        <p className="text-graphite-800 italic leading-relaxed">{block.text}</p>
        {block.source && (
          <footer className="mt-2 text-xs text-graphite-500">— {block.source}</footer>
        )}
      </blockquote>
    );
  }
  if (block.type === "stats") {
    return (
      <div className="my-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {block.items.map((s, i) => (
          <div key={i} className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-5">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-700 font-display">
              {s.value}
            </div>
            <div className="mt-1.5 text-xs text-graphite-600 leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "cta") {
    return (
      <div className="my-8 rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50 to-cyanx-50 p-5 sm:p-6">
        <p className="text-base text-graphite-800 leading-relaxed">
          {block.text}
        </p>
        {block.href && (
          <Link
            href={block.href}
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition"
          >
            {block.label || "Learn more"} <ArrowRight size={14} />
          </Link>
        )}
      </div>
    );
  }
  return null;
}

/* ----------------------------------------------------------------------------
 * Page
 * --------------------------------------------------------------------------*/
export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const cat = getCategoryById(post.category);
  const related = getRelatedPosts(post.slug, 3);
  const relatedProductObjects = (post.relatedProducts || [])
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Article schema for SEO + AEO
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage ? `${siteConfig.url}${post.heroImage}` : `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || siteConfig.shortName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: cat?.name,
    keywords: (post.tags || []).join(", "),
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <StructuredData
        type="Speakable"
        data={{ cssSelectors: ["h1", ".post-lead", "h2"] }}
      />

      {/* Hero — matches the site-wide hero pattern (graphite-950 base + brand-gradient overlay + hero-pattern) */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-12 sm:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-graphite-200 hover:text-white transition"
          >
            <ArrowLeft size={14} /> Back to all articles
          </Link>
          <div className="mt-6 max-w-3xl">
            {cat && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyanx-300">
                <Tag size={11} /> {cat.name}
              </span>
            )}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-graphite-300">
              <span className="inline-flex items-center gap-1.5">
                <User size={13} /> {post.author}
              </span>
              <span className="text-graphite-500">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="text-graphite-500">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} /> {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image — compact size matching other product/showcase images on the site.
          Max-width 600px, centered. The article body below has its own max-w-3xl so
          this sits comfortably within the reading column. */}
      {post.heroImage && (
        <div className="container-default mt-8 sm:mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async"
            src={post.heroImage}
            alt={post.title}
            className="block w-full max-w-xl mx-auto h-auto rounded-2xl border border-graphite-200 shadow-sm"
          />
        </div>
      )}
      {!post.heroImage && (
        <div className="container-default mt-8 sm:mt-10">
          <div className="max-w-xl mx-auto rounded-2xl bg-gradient-to-br from-brand-50 via-white to-cyanx-50 border border-graphite-200 aspect-[16/9] flex items-center justify-center">
            <BookOpen size={48} className="text-brand-300" strokeWidth={1.2} />
          </div>
        </div>
      )}

      {/* Body */}
      <Section>
        <article className="max-w-3xl mx-auto post-lead">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-10 pt-6 border-t border-graphite-200">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
                Tags
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-graphite-50 border border-graphite-200 px-3 py-1 text-xs font-medium text-graphite-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </Section>

      {/* Related products */}
      {relatedProductObjects.length > 0 && (
        <Section variant="soft">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="eyebrow">Products referenced in this article</span>
              <h2 className="h3 mt-2 text-graphite-900">Read the product detail pages</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProductObjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="card group p-5 flex items-start gap-3 hover:-translate-y-0.5 transition"
                >
                  <div className="rounded-xl bg-brand-50 text-brand-700 p-2.5 inline-flex shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-graphite-900 group-hover:text-brand-700 transition leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-graphite-500 line-clamp-2">{p.short}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <CTAButtons />
            </div>
          </div>
        </Section>
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="eyebrow">Continue reading</span>
              <h2 className="h3 mt-2 text-graphite-900">More from the blog</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => {
                const rcat = getCategoryById(rp.category);
                return (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="card group p-5 block hover:-translate-y-0.5 transition"
                  >
                    {rcat && (
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-brand-50 border border-brand-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-700">
                        {rcat.name}
                      </span>
                    )}
                    <h3 className="mt-3 font-bold text-graphite-900 leading-snug group-hover:text-brand-700 transition">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-xs text-graphite-500 line-clamp-2">
                      {rp.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-700">
                      Read <ArrowRight size={12} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
