"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Crown, Star, Zap, ChevronDown } from "lucide-react";

/**
 * Renders multiple "tiers" (Advanced → Standard → Basic) for a product family
 * on the same page. Advanced tier is highlighted as the recommended flagship.
 *
 * Each `tier` object: { id, name, badge, headline, summary, features[], specs[{label,value}], applications[] }
 *
 * Props:
 *   - tiers       : the tier objects
 *   - tierSlots   : { [tierId]: ReactNode } — optional extra content rendered
 *                   directly under that tier's card. Used to inject
 *                   page-specific showcases (e.g. Advanced Nurse Call
 *                   dashboard imagery) under the matching tier.
 */

const TIER_STYLES = {
  advanced: {
    Icon: Crown,
    chip: "bg-gradient-to-r from-brand-700 to-cyanx-500 text-white",
    border: "border-brand-300/80",
    glow: "shadow-glow",
    rank: "Flagship",
    nav: "bg-gradient-to-r from-brand-700 to-cyanx-500 text-white border-transparent hover:from-brand-800 hover:to-cyanx-600",
  },
  standard: {
    Icon: Star,
    chip: "bg-brand-50 text-brand-700 border border-brand-200",
    border: "border-graphite-200",
    glow: "shadow-card",
    rank: "Mid-range",
    nav: "bg-white text-brand-700 border-brand-200 hover:bg-brand-50",
  },
  basic: {
    Icon: Zap,
    chip: "bg-graphite-100 text-graphite-700 border border-graphite-200",
    border: "border-graphite-200",
    glow: "shadow-card",
    rank: "Entry-level",
    nav: "bg-white text-graphite-700 border-graphite-200 hover:bg-graphite-50",
  },
};

export default function ProductTiers({ tiers = [], tierSlots = {} }) {
  return (
    <div>
      {/* --------------------------------------------------------------
        Tier-jump navigation — sticky-feel pill bar so visitors instantly
        see how many tiers exist and can jump to the one they care about
        without scrolling blindly.
        -------------------------------------------------------------- */}
      {tiers.length > 1 && (
        <div className="mb-10 rounded-2xl border border-graphite-200 bg-graphite-50/60 px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 shrink-0">
              Jump to a tier
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {tiers.map((tier) => {
                const style = TIER_STYLES[tier.id] || TIER_STYLES.standard;
                return (
                  <a
                    key={tier.id}
                    href={`#tier-${tier.id}`}
                    className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-bold transition shadow-sm hover:shadow ${style.nav}`}
                  >
                    <style.Icon size={14} />
                    <span>{tier.name}</span>
                    <ChevronDown
                      size={14}
                      className="opacity-70 group-hover:translate-y-0.5 transition-transform"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {tiers.map((tier, i) => {
          const style = TIER_STYLES[tier.id] || TIER_STYLES.standard;
          const slot = tierSlots[tier.id];
          return (
            <div
              key={tier.id}
              id={`tier-${tier.id}`}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`relative rounded-3xl bg-white border-2 ${style.border} ${style.glow} overflow-hidden`}
              >
                {/* Top ribbon */}
                <div className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 ${tier.id === "advanced" ? "bg-gradient-to-r from-brand-700 to-cyanx-500" : "bg-graphite-50 border-b border-graphite-100"}`}>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${tier.id === "advanced" ? "bg-white/15 text-white" : style.chip}`}>
                    <style.Icon size={12} /> {style.rank}
                  </span>
                  <div className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${tier.id === "advanced" ? "text-white/85" : "text-graphite-500"}`}>
                    Tier {i + 1} of {tiers.length}
                  </div>
                  {tier.badge && (
                    <span className="ml-auto text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 hidden sm:inline">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 grid lg:grid-cols-3 gap-6 lg:gap-10">
                  {/* Left: name + summary + features */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-graphite-900 tracking-tight">
                      {tier.name}
                    </h3>
                    {tier.headline && (
                      <div className="mt-1 text-sm font-semibold text-brand-700">
                        {tier.headline}
                      </div>
                    )}
                    <p className="mt-3 text-graphite-700 leading-relaxed">{tier.summary}</p>

                    {tier.features?.length > 0 && (
                      <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {tier.features.map((f) => (
                          <li key={f} className="flex gap-2 items-start text-graphite-700">
                            <CheckCircle2 size={16} className="text-brand-600 shrink-0 mt-0.5" />
                            <span className="text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {tier.applications?.length > 0 && (
                      <div className="mt-6">
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 mb-2">
                          Best for
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tier.applications.map((a) => (
                            <span key={a} className="inline-flex items-center text-xs font-medium text-graphite-700 bg-graphite-50 border border-graphite-200 rounded-full px-3 py-1">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: specs */}
                  {tier.specs?.length > 0 && (
                    <aside className="rounded-2xl bg-graphite-50 border border-graphite-100 p-5">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500">
                        Specifications
                      </h4>
                      <dl className="mt-3 divide-y divide-graphite-200/60">
                        {tier.specs.map((s) => (
                          <div key={s.label} className="grid grid-cols-2 gap-2 py-2">
                            <dt className="text-[11px] uppercase tracking-wider text-graphite-500">{s.label}</dt>
                            <dd className="text-sm text-graphite-800">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </aside>
                  )}
                </div>
              </motion.div>

              {/* Page-injected content under this tier (e.g. Advanced Nurse
                  Call dashboard showcase). Rendered directly below the
                  tier card with a small gap. */}
              {slot && <div className="mt-6">{slot}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
