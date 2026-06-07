"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Building2,
  MapPin,
} from "lucide-react";
import { getSectorById } from "@/data/testimonials";

/**
 * TestimonialsCarousel
 * --------------------
 * Manual-only carousel for the home page testimonials section.
 * - No autoscroll. Users control with arrows, dots, or by
 *   dragging / swiping the strip (CSS scroll-snap keeps cards aligned).
 * - Dots show how many testimonials exist and which is currently active.
 * - Scrollbar hidden via the global `scrollbar-hide` utility.
 *
 * Pattern matches WhyHomeCarousel so the home page has consistent UX
 * across the two manual carousels.
 */
export default function TestimonialsCarousel({ testimonials = [] }) {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Helper: figure out one card's step width (card + gap) */
  const getStep = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector("[data-testimonial-card]");
    return (card?.clientWidth || 320) + 20; // gap-5 = 20px
  };

  /* Track which card is currently most visible as user scrolls / swipes */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const step = getStep();
      if (!step) return;
      const idx = Math.round(el.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [testimonials.length]);

  const scrollToIndex = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(testimonials.length - 1, index));
    el.scrollTo({ left: clamped * getStep(), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const stepBy = (dir) => scrollToIndex(activeIndex + dir);

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === testimonials.length - 1;

  if (testimonials.length === 0) return null;

  return (
    <div className="relative">
      {/* Soft edge fades — match the section background colour */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Left arrow */}
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => stepBy(-1)}
        disabled={atStart}
        className={`grid absolute left-1 sm:-left-2 top-1/2 -translate-y-1/2 z-20 place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-brand-700 border border-graphite-200 shadow-lg transition ${
          atStart
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-brand-600 hover:text-white hover:border-brand-600"
        }`}
      >
        <ChevronLeft size={18} className="sm:hidden" />
        <ChevronLeft size={22} className="hidden sm:block" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => stepBy(1)}
        disabled={atEnd}
        className={`grid absolute right-1 sm:-right-2 top-1/2 -translate-y-1/2 z-20 place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-brand-700 border border-graphite-200 shadow-lg transition ${
          atEnd
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-brand-600 hover:text-white hover:border-brand-600"
        }`}
      >
        <ChevronRight size={18} className="sm:hidden" />
        <ChevronRight size={22} className="hidden sm:block" />
      </button>

      {/* Scrollable strip */}
      <div
        ref={scrollerRef}
        className="scrollbar-hide flex gap-5 overflow-x-auto pb-2 pt-1 px-4 sm:px-14 scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>

      {/* Dot indicators */}
      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Testimonials carousel position"
      >
        {testimonials.map((t, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to testimonial from ${t.authorName} at ${t.company}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-brand-600"
                  : "w-2.5 bg-graphite-300 hover:bg-graphite-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------
 * Testimonial card — one quote, author + company, product link.
 * Same visual treatment as TestimonialsExplorer's card, but with
 * scroll-snap behaviour for the carousel.
 * ------------------------------------------------------------*/
function TestimonialCard({ testimonial: t }) {
  const sector = getSectorById(t.companySector);
  const initials = (t.authorName || "")
    .replace(/^(Mr\.?|Mrs\.?|Ms\.?|Dr\.?|Prof\.?)\s+/i, "")
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      data-testimonial-card
      style={{ scrollSnapAlign: "start" }}
      className="shrink-0 w-[calc(100vw-3rem)] sm:w-[340px] lg:w-[380px] card p-6 flex flex-col"
    >
      {/* Rating + sector chip */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < (t.rating || 0)
                  ? "fill-amber-400 text-amber-400"
                  : "text-graphite-200"
              }
              strokeWidth={1.5}
            />
          ))}
        </div>
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

      <div className="flex-1" />

      {/* Author + company */}
      <div className="mt-5 pt-5 border-t border-graphite-100 flex items-start gap-3">
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
              {initials}
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
    </article>
  );
}
