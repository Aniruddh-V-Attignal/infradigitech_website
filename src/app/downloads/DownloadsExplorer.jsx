"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import BrochureCard from "@/components/BrochureCard";
import { categories, products } from "@/data/products";

/**
 * Search-and-filter explorer for the Catalogues page. Pure client-side:
 * matches title, short description, keywords, features and category name.
 */
export default function DownloadsExplorer() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (activeCat !== "all" && p.category !== activeCat) return false;
      if (!q) return true;
      const cat = categories.find((c) => c.id === p.category);
      const hay = [
        p.title,
        p.short,
        p.description,
        cat?.name,
        ...(p.seo?.keywords || []),
        ...(p.features || []),
        ...(p.applications || []),
        // include tier names for tiered products
        ...(p.tiers?.map((t) => `${t.name} ${t.badge || ""} ${t.headline || ""} ${t.summary || ""}`) || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, activeCat]);

  return (
    <>
      {/* Search + filters */}
      <div className="bg-white rounded-2xl shadow-card border border-graphite-100 p-4 sm:p-5 mb-10">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-graphite-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search catalogues — try “nurse calling”, “queue management”, “GPS clock”, “forex”…"
            className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-graphite-200 focus:border-brand-500 focus:outline-none text-sm sm:text-base"
            aria-label="Search catalogues"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-graphite-400 hover:text-graphite-700"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-graphite-500 mr-1">Filter by category</span>
          <Chip active={activeCat === "all"} onClick={() => setActiveCat("all")}>
            All ({products.length})
          </Chip>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            if (count === 0) return null;
            return (
              <Chip key={c.id} active={activeCat === c.id} onClick={() => setActiveCat(c.id)}>
                {c.name} ({count})
              </Chip>
            );
          })}
        </div>

        <div className="mt-3 text-xs text-graphite-500">
          Showing <span className="font-semibold text-graphite-800">{filtered.length}</span> of {products.length} catalogues
          {query && <> for “<span className="font-semibold text-brand-700">{query}</span>”</>}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-graphite-500">No catalogues match your search.</div>
          <button
            onClick={() => { setQuery(""); setActiveCat("all"); }}
            className="mt-3 btn-outline"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <BrochureCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
        active
          ? "bg-brand-600 text-white border-brand-600"
          : "bg-white text-graphite-700 border-graphite-200 hover:border-brand-400"
      }`}
    >
      {children}
    </button>
  );
}
