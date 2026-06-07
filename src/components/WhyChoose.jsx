"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Cpu, Globe2, HeadphonesIcon, Wrench, Truck,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const items = [
  { icon: ShieldCheck,    title: "ISO & CE Certified",  desc: "Quality, safety and EMC compliance audited annually." },
  { icon: Cpu,            title: "In-house R&D",         desc: "PCB design, firmware, and IoT cloud — built under one roof in Bengaluru." },
  { icon: Globe2,         title: "Export Ready",         desc: "Voltage / language variants for GCC, SE-Asia and Africa." },
  { icon: HeadphonesIcon, title: "PAN-India Service",    desc: "Service partners across 50+ cities. AMC and remote support." },
  { icon: Wrench,         title: "Custom Engineering",   desc: "Bespoke sizes, colours, layouts and integrations on request." },
  { icon: Truck,          title: "On-time Delivery",     desc: "Stock-and-build model — typical 4–6 week lead times." },
];

export default function WhyChoose() {
  const scrollerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduced = typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let rafId;
    let last = performance.now();
    const SPEED = 32; // px/s

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused && el) {
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
        el.scrollLeft += SPEED * dt;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const width = (card?.clientWidth || 320) + 24;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  // Duplicate items so we can loop seamlessly
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-blue-200/60 bg-gradient-to-br from-[#EAF3FF] via-[#DCEEFF] to-[#D6F4FF] p-4 sm:p-6 lg:p-8 shadow-[0_18px_60px_rgba(37,99,235,0.10)]">
      {/* PCB grid background */}
      <div className="absolute inset-0 opacity-[0.92] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.18)_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18px_18px,rgba(14,165,233,0.55)_2px,transparent_3px)] bg-[size:54px_54px]" />
      </div>

      {/* Decorative blue glows */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/18 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/18 blur-3xl pointer-events-none" />

      {/* Carousel viewport */}
      <div
        className="relative z-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Arrow controls (desktop) */}
        <button
          type="button"
          aria-label="Scroll previous"
          onClick={() => scrollBy(-1)}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-white text-brand-700 border border-blue-200 shadow-card hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Scroll next"
          onClick={() => scrollBy(1)}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-white text-brand-700 border border-blue-200 shadow-card hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#EAF3FF] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#D6F4FF] to-transparent z-10" />

        {/* Scrollable strip - scrollbar-hide kills the visible scroll track. */}
        <div
          ref={scrollerRef}
          className="scrollbar-hide flex gap-7 overflow-x-auto scroll-smooth px-14 sm:px-20 py-3"
        >
          {loop.map((it, i) => (
            <motion.div
              key={`${it.title}-${i}`}
              data-card
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, type: "spring", stiffness: 180, damping: 18 }}
              className="group shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 sm:p-8 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-blue-300 hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]"
            >
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-brand-600 via-cyanx-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="inline-flex rounded-2xl bg-blue-50 p-3.5 text-brand-700 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]">
                  <it.icon size={28} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-graphite-900 tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-graphite-600">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile arrow row */}
        <div className="sm:hidden mt-3 flex items-center justify-end gap-2 px-1">
          <button
            type="button"
            aria-label="Scroll previous"
            onClick={() => scrollBy(-1)}
            className="w-9 h-9 rounded-full bg-white text-brand-700 border border-blue-200 shadow-card grid place-items-center"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Scroll next"
            onClick={() => scrollBy(1)}
            className="w-9 h-9 rounded-full bg-white text-brand-700 border border-blue-200 shadow-card grid place-items-center"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
