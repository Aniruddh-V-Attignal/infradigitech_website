"use client";

import {
  Baby,
  FlaskConical,
  Factory,
  Network,
  Globe2,
  Clock,
  LayoutGrid,
  Hash,
  ListOrdered,
  CheckCircle2,
  Layers,
} from "lucide-react";

/**
 * Renders a "Variants by application" section — shown when a product object
 * has a `variants` array. Used by the GPS Synchronised Digital Clock page
 * to surface its four environment-specific configurations (Labour Room,
 * Pharma Cleanroom, Industrial / Corporate, Master-Slave).
 *
 * Each variant shape:
 *   { id, name, icon, badge, summary, features[], applications[], models[] }
 *
 * The component is generic — additional products can adopt the same pattern
 * by adding new `id` entries to VARIANT_ACCENTS / VARIANT_ICONS below.
 */

const VARIANT_ICONS = {
  Baby,
  FlaskConical,
  Factory,
  Network,
  Globe2,
  Clock,
  LayoutGrid,
  Hash,
  ListOrdered,
};

const VARIANT_ACCENTS = {
  "labour-room":          { ring: "ring-rose-100",    chip: "bg-rose-50 text-rose-700 border-rose-100",       iconBg: "from-rose-600 to-pink-500" },
  "pharma-cleanroom":     { ring: "ring-emerald-100", chip: "bg-emerald-50 text-emerald-700 border-emerald-100", iconBg: "from-emerald-600 to-cyanx-500" },
  "industrial-corporate": { ring: "ring-brand-100",   chip: "bg-brand-50 text-brand-700 border-brand-100",     iconBg: "from-brand-700 to-cyanx-500" },
  "world-gps":            { ring: "ring-brand-100",   chip: "bg-brand-50 text-brand-700 border-brand-100",     iconBg: "from-brand-700 to-cyanx-500" },
  "world-ntp":            { ring: "ring-cyan-100",    chip: "bg-cyan-50 text-cyan-700 border-cyan-100",        iconBg: "from-cyanx-600 to-brand-600" },
  "world-rtc":            { ring: "ring-amber-100",   chip: "bg-amber-50 text-amber-700 border-amber-100",     iconBg: "from-amber-600 to-orange-500" },
  "world-wall":           { ring: "ring-violet-100", chip: "bg-violet-50 text-violet-700 border-violet-100",   iconBg: "from-violet-700 to-brand-600" },
  "master-slave":         { ring: "ring-amber-100",   chip: "bg-amber-50 text-amber-700 border-amber-100",     iconBg: "from-graphite-800 to-brand-700" },
  "token-4digit":             { ring: "ring-cyan-100",   chip: "bg-cyan-50 text-cyan-700 border-cyan-100",      iconBg: "from-cyanx-600 to-brand-600" },
  "token-3digit-sequential":  { ring: "ring-orange-100", chip: "bg-orange-50 text-orange-700 border-orange-100", iconBg: "from-orange-600 to-rose-500" },
};

function VariantCard({ v }) {
  const Icon = VARIANT_ICONS[v.icon] || Layers;
  const accent = VARIANT_ACCENTS[v.id] || VARIANT_ACCENTS["industrial-corporate"];
  return (
    <article
      id={`variant-${v.id}`}
      className={`rounded-2xl border border-graphite-200 bg-white ring-1 ${accent.ring} shadow-card overflow-hidden`}
    >
      {/* Top header */}
      <div className="px-6 sm:px-7 py-4 bg-gradient-to-r from-graphite-50 to-white border-b border-graphite-100">
        <div className="flex items-start gap-4">
          <div className={`shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent.iconBg} text-white shadow-glow`}>
            <Icon size={22} />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-extrabold text-graphite-900 leading-tight">
              {v.name}
            </h3>
            <p className={`mt-1.5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${accent.chip}`}>
              {v.badge}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 sm:px-7 py-6">
        <p className="text-graphite-700 leading-relaxed">{v.summary}</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
          {v.features.map((f) => (
            <div key={f} className="flex gap-2.5 text-sm leading-relaxed">
              <CheckCircle2 size={16} className="text-cyanx-500 mt-0.5 shrink-0" />
              <span className="text-graphite-700">{f}</span>
            </div>
          ))}
        </div>

        {/* Applications */}
        {v.applications?.length > 0 && (
          <div className="mt-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
              Typical applications
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {v.applications.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center rounded-full border border-graphite-200 bg-white px-3 py-1 text-xs font-medium text-graphite-700"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProductVariants({ variants = [], productTitle = "" }) {
  if (!variants?.length) return null;

  return (
    <section id="variants" className="section bg-graphite-50 border-t border-graphite-100">
      <div className="container-default">
        <div className="max-w-3xl">
          <span className="eyebrow">Variants by application</span>
          <h2 className="h2 mt-2">
            {variants.length} {productTitle ? `${productTitle.split(" ").slice(0, 2).join(" ")} ` : ""}variants — engineered to the environment.
          </h2>
          <p className="mt-4 text-lg text-graphite-600 leading-relaxed">
            The same engineered core, packaged for the environments where accurate,
            uniform time is non-negotiable.
          </p>

          {/* Quick-jump chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {variants.map((v) => (
              <a
                key={v.id}
                href={`#variant-${v.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-graphite-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-graphite-700 hover:border-brand-300 hover:text-brand-700 transition"
              >
                {v.name
                  .split(" / ")[0]
                  .replace(" Clock", "")
                  .replace(" World Clock", "")
                  .replace(" Synchronised Clock System", "")
                  .replace(" Token Display", "")
                  .replace("Wireless ", "")}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-7">
          {variants.map((v) => (
            <VariantCard key={v.id} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
