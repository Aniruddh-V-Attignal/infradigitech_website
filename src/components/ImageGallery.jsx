"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Multi-image product gallery with thumbnail strip.
 * Falls back gracefully when image files are missing — each tile becomes a labelled placeholder.
 */
export default function ImageGallery({ images = [], alt = "Product image" }) {
  const safe = (images || []).filter(Boolean);
  const [active, setActive] = useState(0);
  const slots = safe.length > 0 ? safe : [null, null, null, null]; // 4 placeholders

  return (
    <div>
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-brand-50 to-cyanx-400/10 border border-graphite-100">
        <Slot src={slots[active]} alt={`${alt} ${active + 1}`} index={active} large />
      </div>
      {slots.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {slots.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 ${
                i === active ? "border-brand-600" : "border-transparent hover:border-brand-200"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <Slot src={src} alt={`${alt} thumb ${i + 1}`} index={i} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Slot({ src, alt, index, large = false }) {
  if (!src) {
    // Graceful fallback when an image is missing — quiet brand-tinted tile,
    // no developer-facing instruction text.
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-50 to-cyanx-400/10">
        <div className={`inline-flex p-3 rounded-2xl bg-white text-brand-700 shadow-card ${large ? "" : "scale-75"}`}>
          <svg
            width={large ? 36 : 22}
            height={large ? 36 : 22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={large ? "(max-width:1024px) 100vw, 50vw" : "12vw"}
      className="object-contain p-4"
    />
  );
}
