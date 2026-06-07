"use client";

import Link from "next/link";
import { Download, CheckCircle2, Tag, Layers3, Hash, Crown, Star, Zap } from "lucide-react";
import CTAButtons from "./CTAButtons";
import ImageGallery from "./ImageGallery";
import YoutubeEmbed from "./YoutubeEmbed";
import ProductCard from "./ProductCard";
import ProductTiers from "./ProductTiers";
import ProductVariants from "./ProductVariants";
import { siteConfig } from "@/config/site";
import { getCategoryById, getRelatedProducts } from "@/data/products";
import { getProductModels, TIER_LABELS } from "@/data/product-models";

/**
 * Universal product detail page renderer used by /<slug> routes
 * AND the dynamic /products/[slug] fallback.
 */
export default function ProductDetail({ product, tierSlots }) {
  const cat = getCategoryById(product.category);
  const sectorNames = (product.sectors || [])
    .map((id) => siteConfig.sectors.find((s) => s.id === id)?.name)
    .filter(Boolean);
  const related = getRelatedProducts(product.slug, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-default pt-10 sm:pt-14 pb-10">
          <nav className="text-xs text-graphite-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/products" className="hover:underline">Products</Link>
            {cat && (
              <>
                <span className="mx-1.5">/</span>
                <Link href={`/products?category=${cat.id}`} className="hover:underline">{cat.name}</Link>
              </>
            )}
            <span className="mx-1.5">/</span>
            <span className="text-graphite-700">{product.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ImageGallery images={product.images} alt={product.title} />

            <div>
              <div className="flex flex-wrap gap-2">
                {cat && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-600 text-white">
                    <Layers3 size={12} /> {cat.name}
                  </span>
                )}
                {sectorNames.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-3 py-1">
                    <Tag size={12} /> {n}
                  </span>
                ))}
              </div>
              <h1 className="h1 mt-4 text-graphite-900">{product.title}</h1>
              <p className="mt-4 text-lg text-graphite-700 leading-relaxed">{product.short}</p>

              <div className="mt-6">
                <CTAButtons productName={product.title} />
              </div>

              {product.brochure && (
                <a
                  href={product.brochure}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-graphite-700 hover:text-brand-700"
                >
                  <Download size={16} /> Download brochure (PDF)
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="section bg-white">
        <div className="container-default grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose prose-lg max-w-none">
            <h2 className="h3 text-graphite-900">About this product</h2>
            <p className="mt-3 text-graphite-700 leading-relaxed text-base">
              {product.description}
            </p>

            {product.features?.length > 0 && (
              <>
                <h3 className="h3 mt-10 text-graphite-900">Key features</h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3 list-none p-0">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start text-graphite-700">
                      <CheckCircle2 size={18} className="text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {product.applications?.length > 0 && (
              <>
                <h3 className="h3 mt-10 text-graphite-900">Applications</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1 text-sm font-medium text-graphite-700 bg-graphite-50 border border-graphite-200 rounded-full px-3 py-1.5">
                      {a}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Specs sidebar */}
          <aside>
            <div className="card p-6 sticky top-24">
              <h3 className="font-bold text-graphite-900">Technical specifications</h3>
              <dl className="mt-4 divide-y divide-graphite-100">
                {(product.specs || []).map((s) => (
                  <div key={s.label} className="grid grid-cols-3 gap-2 py-2.5">
                    <dt className="text-xs uppercase tracking-wider text-graphite-500 col-span-1">{s.label}</dt>
                    <dd className="text-sm text-graphite-800 col-span-2">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 grid grid-cols-1 gap-2">
                <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="btn-primary justify-center">
                  Request a Quote
                </a>
                <a href={siteConfig.forms.serviceRequest} target="_blank" rel="noopener" className="btn-outline justify-center">
                  Speak with an Agent
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Tier-by-tier breakdown (Advanced → Standard → Basic) */}
      {product.tiers?.length > 0 && (
        <section className="section bg-white">
          <div className="container-default">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="eyebrow">Choose your tier</span>
              <h2 className="h2 mt-2 text-graphite-900">
                {product.title} — Advanced to Basic
              </h2>
              <p className="mt-3 text-graphite-600">
                Three configurations to fit every budget and site size. Pick the tier that matches your operations — or contact us for a custom configuration.
              </p>
            </div>
            <ProductTiers tiers={product.tiers} tierSlots={tierSlots} />
          </div>
        </section>
      )}

      {/* Variants by application (e.g. GPS clock: Labour Room, Pharma, Industrial, Master-Slave) */}
      {product.variants?.length > 0 && (
        <ProductVariants variants={product.variants} productTitle={product.title} />
      )}

      {/* Available Models — model-number table per product (data lives in
          src/data/product-models.js, keyed by product slug). Renders only when
          the product has at least one entry in that map. */}
      <ProductModelsTable product={product} />

      {/* Video — only when an actual YouTube ID is present */}
      {product.youtubeId && (
        <section className="section bg-graphite-50">
          <div className="container-default">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="eyebrow">Watch it in action</span>
              <h2 className="h2 mt-2 text-graphite-900">{product.title} demo</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <YoutubeEmbed videoId={product.youtubeId} title={product.title} />
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container-default">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="eyebrow">Related products</span>
                <h2 className="h2 mt-2 text-graphite-900">You may also like</h2>
              </div>
              <Link href="/products" className="text-sm font-semibold text-brand-700 hover:underline hidden sm:inline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA band */}
      <section className="bg-brand-gradient text-white">
        <div className="container-default py-14 grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h3 className="h3 text-white">Ready to deploy {product.title}?</h3>
            <p className="mt-2 text-graphite-200">
              Talk to our specialists for a tailored quotation, site survey and rollout plan.
            </p>
          </div>
          <div className="lg:text-right">
            <CTAButtons productName={product.title} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------
 * ProductModelsTable
 * Renders the model-number variants for a given product. Data lives in
 * src/data/product-models.js keyed by product slug. If a product has
 * no entries in that file, this component renders nothing.
 *
 * The table is procurement-team friendly — clean rows of (Model
 * Number, Description, optional Tier badge). Useful for AMC ordering,
 * tender response documents, and reference during sales calls.
 * ---------------------------------------------------------------- */
function ProductModelsTable({ product }) {
  const models = getProductModels(product.slug);
  if (!models || models.length === 0) return null;

  const tierIcon = { basic: Zap, standard: Star, advanced: Crown };
  const tierStyle = {
    basic:    "bg-graphite-100 text-graphite-700 border-graphite-200",
    standard: "bg-brand-50 text-brand-700 border-brand-200",
    advanced: "bg-gradient-to-r from-brand-700 to-cyanx-500 text-white border-transparent",
  };

  const hasTiers = models.some((m) => m.tier);

  return (
    <section className="section bg-white">
      <div className="container-default">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="eyebrow">Available Models</span>
          <h2 className="h2 mt-2 text-graphite-900">
            Model numbers and variants
          </h2>
          <p className="mt-3 text-graphite-600">
            Reference these model numbers when requesting a quote, raising an AMC ticket, or submitting a tender. Every variant ships from the same Bengaluru manufacturing facility under the same ISO 9001:2015 quality controls.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl border border-graphite-200 bg-white shadow-sm overflow-hidden">
          {/* Table header — desktop only */}
          <div className={`hidden sm:grid ${hasTiers ? "grid-cols-12" : "grid-cols-10"} gap-4 px-5 sm:px-7 py-3.5 bg-graphite-50 border-b border-graphite-200 text-[11px] font-bold uppercase tracking-[0.14em] text-graphite-500`}>
            <div className={hasTiers ? "col-span-4" : "col-span-4"}>
              <span className="inline-flex items-center gap-1.5"><Hash size={12} /> Model Number</span>
            </div>
            <div className={hasTiers ? "col-span-6" : "col-span-6"}>Description</div>
            {hasTiers && <div className="col-span-2 text-right">Tier</div>}
          </div>

          {/* Rows */}
          <div className="divide-y divide-graphite-100">
            {models.map((m) => {
              const Icon = m.tier ? tierIcon[m.tier] : null;
              return (
                <div
                  key={m.number}
                  className={`grid ${hasTiers ? "grid-cols-1 sm:grid-cols-12" : "grid-cols-1 sm:grid-cols-10"} gap-2 sm:gap-4 items-center px-5 sm:px-7 py-4 hover:bg-graphite-50/60 transition`}
                >
                  <div className={`${hasTiers ? "sm:col-span-4" : "sm:col-span-4"}`}>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-brand-50 border border-brand-100 px-3 py-1.5 font-mono text-xs font-bold text-brand-800 tracking-tight">
                      {m.number}
                    </span>
                  </div>
                  <div className={`${hasTiers ? "sm:col-span-6" : "sm:col-span-6"} text-sm text-graphite-700`}>
                    {m.description}
                  </div>
                  {hasTiers && (
                    <div className="sm:col-span-2 sm:text-right">
                      {m.tier ? (
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${tierStyle[m.tier]}`}>
                          {Icon && <Icon size={10} />} {TIER_LABELS[m.tier]}
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-graphite-500">
          Need a custom variant or a model not listed here?{" "}
          <Link href="/contact" className="font-semibold text-brand-700 hover:text-brand-800 hover:underline">
            Talk to our engineering team
          </Link>{" "}
          for an OEM / private-label build.
        </p>
      </div>
    </section>
  );
}
