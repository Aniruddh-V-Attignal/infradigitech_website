"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clients } from "@/data/clients";

/**
 * ClientCarousel
 * --------------
 * - Auto-scrolls horizontally by default.
 * - Pauses on hover / focus / manual arrow click.
 * - After a short inactivity window the auto-scroll resumes.
 * - The strip is duplicated end-to-end so the loop is seamless.
 *
 * Why not CSS @keyframes marquee?
 *   We need JS control to pause on interaction and to resume on a timer.
 *   A raf-driven scrollLeft mutation gives us both, and the duplicated
 *   list keeps the visual loop seamless without snapping.
 */

const SPEED_PX_PER_SEC = 36;         // auto-scroll speed
const RESUME_AFTER_MS  = 3500;       // inactivity before autoplay resumes

export default function ClientCarousel() {
  const scrollerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Duplicate the client list end-to-end so we can loop seamlessly:
  // when scrollLeft passes the halfway mark we subtract half the scrollWidth,
  // which leaves the visible viewport unchanged but resets us to position 0.
  const items = [...clients, ...clients];

  /* ---- raf auto-scroll loop ---- */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let rafId;
    let last = performance.now();

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused && el) {
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        el.scrollLeft += SPEED_PX_PER_SEC * dt;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  /* ---- pause + inactivity-resume helpers ---- */
  const clearResumeTimer = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const armResumeTimer = useCallback(() => {
    clearResumeTimer();
    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  }, []);

  useEffect(() => () => clearResumeTimer(), []); // cleanup on unmount

  /* ---- arrow click handler ---- */
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-client]");
    const step = (card?.clientWidth || 180) + 24; // card width + gap fallback
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" }); // 2 cards per click feels right
    setPaused(true);
    armResumeTimer();
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => { setPaused(true); clearResumeTimer(); }}
      onMouseLeave={() => { setPaused(false); clearResumeTimer(); }}
      onFocusCapture={() => { setPaused(true); clearResumeTimer(); }}
      onBlurCapture={armResumeTimer}
    >
      {/* Edge fades for a clean look against the white page background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white via-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-white via-white to-transparent z-10" />

      {/* Left arrow */}
      <button
        type="button"
        aria-label="Scroll clients left"
        onClick={() => scrollBy(-1)}
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-brand-700 border border-graphite-200 shadow-md hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        aria-label="Scroll clients right"
        onClick={() => scrollBy(1)}
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-brand-700 border border-graphite-200 shadow-md hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
      >
        <ChevronRight size={18} />
      </button>

      {/* Scrolling strip */}
      <div
        ref={scrollerRef}
        className="scrollbar-hide flex items-center gap-12 overflow-x-auto py-2 px-14 sm:px-20"
      >
        {items.map((c, i) => (
          <ClientLogo key={i} client={c} />
        ))}
      </div>
    </div>
  );
}

function ClientLogo({ client }) {
  const inner = (
    <div
      data-client
      className="h-16 w-40 sm:h-20 sm:w-44 shrink-0 flex items-center justify-center transition duration-300 opacity-95 hover:opacity-100"
    >
      <ClientArt name={client.name} src={client.logo} />
    </div>
  );
  if (client.url) {
    return (
      <a href={client.url} target="_blank" rel="noopener" title={client.name}>
        {inner}
      </a>
    );
  }
  return <div title={client.name}>{inner}</div>;
}

function ClientArt({ name, src }) {
  // If a real logo is dropped into /public/images/clients/<file>, an <img loading="lazy" decoding="async">
  // will render. If not, we fall back to a typographic initials block.
  const initials = (name || "")
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="relative w-full h-full grid place-items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" decoding="async"
        src={src}
        alt={name}
        className="object-contain max-h-12 sm:max-h-14 w-auto"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const sib = e.currentTarget.nextSibling;
          if (sib) sib.style.display = "flex";
        }}
      />
      <div
        className="hidden absolute inset-0 items-center justify-center font-display font-extrabold text-graphite-700 tracking-wider text-base"
        aria-hidden
      >
        {initials}
      </div>
    </div>
  );
}
