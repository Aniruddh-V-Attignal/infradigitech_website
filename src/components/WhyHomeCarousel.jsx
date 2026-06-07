"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * WhyHomeCarousel
 * ---------------
 * Manual-only carousel for the home page "Why Infra DigiTech" section.
 * - No autoscroll. The user controls the carousel via the left/right
 *   arrows, the dot indicators at the bottom, or by dragging/swiping
 *   the strip directly (CSS scroll-snap keeps each card aligned).
 * - Dots show how many cards exist in total and which is currently
 *   active. Click a dot to jump straight to that card.
 * - Scrollbar hidden via the global `scrollbar-hide` utility.
 */

const CARDS = [
  {
    image: "/images/customization.jpg",
    title: "Custom Engineering",
    text: "We customize every solution to match your workflow, infrastructure, and operational needs.",
  },
  {
    image: "/images/R&D.jpg",
    title: "In-house R&D",
    text: "From PCB design to cloud platforms and software development, everything is engineered under one roof in Bengaluru.",
  },
  {
    image: "/images/panindia.png",
    title: "PAN-India Service",
    text: "Service partners across 50+ cities in India and worldwide, with both remote and on-site technical support.",
  },
  {
    image: "/images/delivery.png",
    title: "On-time Delivery",
    text: "From production to deployment, we maintain strict timelines to keep your projects on schedule.",
  },
  {
    image: "/images/installation.png",
    title: "Easy Installation",
    text: "Designed for quick and hassle-free deployment with minimal wiring, seamless integration, and simplified installation.",
  },
  {
    image: "/images/sustainability.jpg",
    title: "Sustainability",
    text: "Solar-powered since 2016, fully electric vehicle fleet, e-waste buy-back program and a 3,500-tree organic farm.",
  },
];

export default function WhyHomeCarousel() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---- helper: figure out one card's "step" width (card + gap) ---- */
  const getStep = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector("[data-why-card]");
    return (card?.clientWidth || 240) + 24; // gap-6 = 24px
  };

  /* ---- track which card is currently most visible while user scrolls ---- */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const step = getStep();
      if (!step) return;
      const idx = Math.round(el.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(CARDS.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(CARDS.length - 1, index));
    el.scrollTo({ left: clamped * getStep(), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const stepBy = (dir) => scrollToIndex(activeIndex + dir);

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === CARDS.length - 1;

  return (
    <div className="relative">
      {/* Soft edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-slate-100 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-slate-100 to-transparent z-10" />

      {/* Left arrow - smaller on mobile, larger on tablet+.
          Sits over the image at the upper-middle of the card. */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => stepBy(-1)}
        disabled={atStart}
        className={`grid absolute left-3 sm:left-3 top-[40%] -translate-y-1/2 z-20 place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-brand-700 border border-graphite-200 shadow-lg transition ${
          atStart
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-brand-600 hover:text-white hover:border-brand-600"
        }`}
      >
        <ChevronLeft size={18} className="sm:hidden" />
        <ChevronLeft size={22} className="hidden sm:block" />
      </button>

      {/* Right arrow - same responsive sizing. Dimmed at last card. */}
      <button
        type="button"
        aria-label="Next"
        onClick={() => stepBy(1)}
        disabled={atEnd}
        className={`grid absolute right-3 sm:right-3 top-[40%] -translate-y-1/2 z-20 place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-brand-700 border border-graphite-200 shadow-lg transition ${
          atEnd
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-brand-600 hover:text-white hover:border-brand-600"
        }`}
      >
        <ChevronRight size={18} className="sm:hidden" />
        <ChevronRight size={22} className="hidden sm:block" />
      </button>

      {/* Scrollable strip - tight padding on mobile so one full card fills
          the viewport; standard padding from sm+ where arrows reappear. */}
      <div
        ref={scrollerRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto pb-2 pt-1 px-4 sm:px-16 scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {CARDS.map((c) => (
          <WhyImageCard
            key={c.title}
            image={c.image}
            title={c.title}
            text={c.text}
          />
        ))}
      </div>

      {/* Dot indicators - one per card, current is wider + brand-coloured */}
      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Carousel position"
      >
        {CARDS.map((c, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={c.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to ${c.title}`}
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

function WhyImageCard({ image, title, text }) {
  return (
    <div
      data-why-card
      style={{ scrollSnapAlign: "start" }}
      // Mobile: card width = viewport - 2rem (matches the px-4 padding on
      // the strip), so exactly one card fills the screen at a time.
      // Tablet+: fixed pixel widths so the strip shows multiple cards.
      className="shrink-0 w-[calc(100vw-2rem)] sm:w-[290px] lg:w-[330px] h-[440px] sm:h-[480px] bg-white overflow-hidden shadow-sm group"
    >
      <div className="relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite-950 via-graphite-950/85 to-transparent px-6 pb-5 pt-20">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{text}</p>
        </div>
      </div>
    </div>
  );
}
