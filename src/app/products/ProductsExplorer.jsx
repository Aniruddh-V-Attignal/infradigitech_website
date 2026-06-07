"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { siteConfig } from "@/config/site";

function ExplorerInner() {
  const router = useRouter();
  const sp = useSearchParams();

  const initialCategory = sp.get("category") || "all";
  const initialSector   = sp.get("sector")   || "all";
  const initialQuery    = sp.get("q")        || "";

  const [category, setCategory] = useState(initialCategory);
  const [sector,   setSector]   = useState(initialSector);
  const [query,    setQuery]    = useState(initialQuery);

  // Sync url -> state when params change externally (e.g. from navbar deep-link)
  useEffect(() => {
    setCategory(sp.get("category") || "all");
    setSector(sp.get("sector")   || "all");
    setQuery(sp.get("q") || "");
  }, [sp]);

  // Sync state -> url
  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== "all") params.set("category", category);
    if (sector   && sector   !== "all") params.set("sector",   sector);
    if (query)                          params.set("q",        query);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : "/products", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sector, query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (sector   !== "all" && !(p.sectors || []).includes(sector)) return false;
      if (q) {
        const hay = [
          p.title, p.short, p.description,
          ...(p.features || []),
          ...(p.applications || []),
        ].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [category, sector, query]);

  return (
    <section className="section">
      <div className="container-default">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-card border border-graphite-100 p-4 sm:p-5 mb-8 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-graphite-500 mr-1">Category</span>
            <Chip active={category === "all"} onClick={() => setCategory("all")}>All</Chip>
            {categories.map((c) => (
              <Chip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                {c.name}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-graphite-500 mr-1">Industry</span>
            <Chip active={sector === "all"} onClick={() => setSector("all")}>All</Chip>
            {siteConfig.sectors.map((s) => (
              <Chip key={s.id} active={sector === s.id} onClick={() => setSector(s.id)}>
                {s.name}
              </Chip>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, features, applications…"
              className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-graphite-200 focus:border-brand-500 focus:outline-none text-sm"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-graphite-400 hover:text-graphite-700" aria-label="Clear">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="text-xs text-graphite-500">
            Showing <span className="font-semibold text-graphite-800">{filtered.length}</span> of {products.length} products
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-graphite-500">No products match your filters.</div>
            <button
              onClick={() => { setCategory("all"); setSector("all"); setQuery(""); }}
              className="mt-3 btn-outline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        )}
      </div>
    </section>
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

export default function ProductsExplorer() {
  return (
    <Suspense fallback={<div className="container-default py-10 text-graphite-500">Loading products…</div>}>
      <ExplorerInner />
    </Suspense>
  );
}
