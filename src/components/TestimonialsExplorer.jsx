"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Star, Quote, Filter, X, Building2, MapPin } from "lucide-react";
import { SECTORS, getSectorById } from "@/data/testimonials";

/**
 * TestimonialsExplorer — client-side sector filter + grid for /testimonials.
 *
 * The parent server component (testimonials/page.js) renders the hero,
 * the JSON-LD schema, and passes the testimonials array as a prop. This
 * client component handles only the filter UI and the filtered grid.
 *
 * The grid stays simple — one card per testimonial. Pagination is not
 * needed until the list grows past ~30 entries (in-memory filtering is
 * instant for any reasonable number).
 */
export default function TestimonialsExplorer({ testimonials = [] }) {
  const [activeSector, setActiveSector] = useState("all");

  /* Count per sector for chip labels, computed once */
  const counts = useMemo(() => {
    const c = { all: testimonials.length };
    for (const s of SECTORS) {
      c[s.id] = testimonials.filter((t) => t.companySector === s.id).length;
    }
    return c;
  }, [testimonials]);

  const filtered = useMemo(() => {
    if (activeSector === "all") return testimonials;
    return testimonials.filter((t) => t.companySector === activeSector);
  }, [testimonials, activeSector]);

  /* Hide chips for sectors that have zero testimonials */
  const visibleSectors = SECTORS.filter((s) => (counts[s.id] || 0) > 0);

  return (
    <div>
      {/* Sector filter chips */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 mr-1">
          <Filter size={12} /> Filter by sector
        </span>

        <button
          type="button"
          onClick={() => setActiveSector("all")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold border transition ${
            activeSector === "all"
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white text-graphite-700 border-graphite-200 hover:border-brand-300 hover:text-brand-700"
          }`}
        >
          All
          <span
            className={`text-[10px] tabular-nums font-bold ${
              activeSector === "all" ? "text-white/90" : "text-graphite-400"
            }`}
          >
            {counts.all}
          </span>
        </button>

        {visibleSectors.map((sector) => {
          const isActive = activeSector === sector.id;
          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => setActiveSector(sector.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold border transition ${
                isActive
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-graphite-700 border-graphite-200 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {sector.name}
              <span
                className={`text-[10px] tabular-nums font-bold ${
                  isActive ? "text-white/90" : "text-graphite-400"
                }`}
              >
                {counts[sector.id]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result count + clear filter */}
      <div className="flex items-center justify-between mb-6 text-xs text-graphite-500">
        <span>
          Showing{" "}
          <span className="font-bold text-graphite-900 tabular-nums">
            {filtered.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold tabular-nums">{testimonials.length}</span>{" "}
          {testimonials.length === 1 ? "story" : "stories"}
        </span>
        {activeSector !== "all" && (
          <button
            type="button"
            onClick={() => setActiveSector("all")}
            className="inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-800 transition"
          >
            <X size={12} /> Show all sectors
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <EmptyState onClear={() => setActiveSector("all")} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------------
 * Testimonial card — one quote, author, company, product link
 * ------------------------------------------------------------*/
function TestimonialCard({ testimonial: t }) {
  const sector = getSectorById(t.companySector);

  return (
    <article className="card h-full p-6 flex flex-col">
      {/* Rating + sector chip */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <StarRating value={t.rating} />
        {sector && (
          <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-700">
            {sector.name}
          </span>
        )}
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote
          size={20}
          className="absolute -top-1 -left-1 text-brand-200"
          strokeWidth={1.5}
          aria-hidden
        />
        <blockquote className="pl-7 text-sm text-graphite-700 leading-relaxed italic">
          {t.quote}
        </blockquote>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Author + company block */}
      <div className="mt-5 pt-5 border-t border-graphite-100">
        <div className="flex items-start gap-3">
          {/* Author photo placeholder — initials circle if no photo */}
          <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-50 border border-brand-100">
            {t.authorPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img loading="lazy" decoding="async"
                src={t.authorPhoto}
                alt={t.authorName}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-xs font-bold text-brand-700 tracking-wider">
                {getInitials(t.authorName)}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold text-graphite-900 truncate">
              {t.authorName}
            </div>
            <div className="text-[11px] text-graphite-500 leading-snug">
              {t.authorTitle}
            </div>
            <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-brand-700">
              <Building2 size={11} />
              {t.companyUrl ? (
                <a
                  href={t.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate hover:text-brand-800 hover:underline"
                >
                  {t.company}
                </a>
              ) : (
                <span className="truncate">{t.company}</span>
              )}
            </div>
            {t.city && (
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-graphite-500">
                <MapPin size={10} />
                <span className="truncate">{t.city}</span>
              </div>
            )}
          </div>
        </div>

        {/* Product link */}
        {t.product && t.productSlug && (
          <div className="mt-4 pt-3 border-t border-graphite-100">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-graphite-400 mb-1">
              Product deployed
            </div>
            <Link
              href={`/${t.productSlug}`}
              className="text-xs font-semibold text-brand-700 hover:text-brand-800 hover:underline transition"
            >
              {t.product} →
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

/* --------------------------------------------------------------
 * 5-star visual rating
 * ------------------------------------------------------------*/
function StarRating({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < value ? "fill-amber-400 text-amber-400" : "text-graphite-200"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* --------------------------------------------------------------
 * Empty state for zero results
 * ------------------------------------------------------------*/
function EmptyState({ onClear }) {
  return (
    <div className="rounded-2xl border border-graphite-200 bg-graphite-50/60 p-12 text-center">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white border border-graphite-200 mb-5">
        <Quote size={22} className="text-graphite-400" />
      </div>
      <h3 className="font-bold text-graphite-900 text-lg">
        No testimonials in this sector yet
      </h3>
      <p className="mt-2 text-sm text-graphite-600 max-w-md mx-auto leading-relaxed">
        We are continuously collecting customer stories. Check back as the list grows, or browse all stories below.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition"
      >
        Show all testimonials
      </button>
    </div>
  );
}

function getInitials(name) {
  if (!name) return "";
  return name
    .replace(/^(Mr\.?|Mrs\.?|Ms\.?|Dr\.?|Prof\.?)\s+/i, "")
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
