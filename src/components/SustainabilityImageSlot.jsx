"use client";

import { Sun, Car, Sprout, Flame } from "lucide-react";

/**
 * Client component used by /sustainability page.
 *
 * Extracted into its own client file because it needs an `onError` handler
 * on the <img> tag (a function prop — not allowed across the server→client
 * boundary in Next.js App Router).
 *
 * The icon is selected by `kind` string rather than a component reference,
 * because component references also cannot be passed from server to client.
 */
const ICONS = {
  solar:  Sun,
  ev:     Car,
  farm:   Sprout,
  biogas: Flame,
};

export default function SustainabilityImageSlot({ src, alt, kind, label, caption }) {
  const Icon = ICONS[kind] || Sun;

  return (
    <figure>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-emerald-200 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
        {/* Fallback decoration shows through if the image file is missing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-emerald-700/70">
          <Icon size={48} strokeWidth={1.4} />
          <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/60">
            {label}
          </span>
        </div>
        {src && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="relative w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-graphite-600 leading-relaxed italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
