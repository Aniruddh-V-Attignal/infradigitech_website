"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Clock,
  BookOpen,
  Filter,
  ArrowRight,
} from "lucide-react";
import { CATEGORIES, getCategoryById } from "@/data/blog";

/**
 * Client-side search + category filter for /blog index page.
 *
 * Accepts the full posts array and renders a filtered grid based on
 * (a) search query against title/excerpt/tags, and (b) selected category.
 *
 * The featured post on the blog index is rendered separately by the
 * parent server component, so this explorer typically receives "all
 * posts except the featured one" — the prop name is just `posts`.
 */
export default function BlogExplorer({ posts = [] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Compute per-category counts once so the chip labels stay accurate
  const counts = useMemo(() => {
    const c = { all: posts.length };
    for (const cat of CATEGORIES) {
      c[cat.id] = posts.filter((p) => p.category === cat.id).length;
    }
    return c;
  }, [posts]);

  // Filter logic — category match AND query match (against title, excerpt, tags)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const catOk = activeCategory === "all" || post.category === activeCategory;
      if (!catOk) return false;
      if (!q) return true;
      const inTitle = post.title?.toLowerCase().includes(q);
      const inExcerpt = post.excerpt?.toLowerCase().includes(q);
      const inTags = (post.tags || []).some((t) => t.toLowerCase().includes(q));
      return inTitle || inExcerpt || inTags;
    });
  }, [posts, query, activeCategory]);

  const hasActiveFilters = query.trim() !== "" || activeCategory !== "all";

  const clearAll = () => {
    setQuery("");
    setActiveCategory("all");
  };

  // Visible categories — hide chips with zero posts
  const visibleCategories = CATEGORIES.filter((c) => (counts[c.id] || 0) > 0);

  return (
    <div>
      {/* ----------------------------------------------------------
        Search bar
        ----------------------------------------------------------*/}
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-graphite-400 pointer-events-none">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles by keyword, topic or tag..."
          aria-label="Search blog articles"
          className="w-full rounded-2xl border border-graphite-200 bg-white pl-12 pr-12 py-3.5 text-sm text-graphite-900 placeholder:text-graphite-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-graphite-400 hover:text-graphite-700 transition"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* ----------------------------------------------------------
        Category filter chips
        ----------------------------------------------------------*/}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-graphite-500 mr-1">
          <Filter size={12} /> Filter
        </span>

        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold border transition ${
            activeCategory === "all"
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white text-graphite-700 border-graphite-200 hover:border-brand-300 hover:text-brand-700"
          }`}
        >
          All
          <span
            className={`text-[10px] tabular-nums font-bold ${
              activeCategory === "all" ? "text-white/90" : "text-graphite-400"
            }`}
          >
            {counts.all}
          </span>
        </button>

        {visibleCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold border transition ${
                isActive
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-graphite-700 border-graphite-200 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {cat.name}
              <span
                className={`text-[10px] tabular-nums font-bold ${
                  isActive ? "text-white/90" : "text-graphite-400"
                }`}
              >
                {counts[cat.id]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ----------------------------------------------------------
        Results indicator + clear-filters link
        ----------------------------------------------------------*/}
      <div className="flex items-center justify-between mb-6 text-xs text-graphite-500">
        <span>
          Showing{" "}
          <span className="font-bold text-graphite-900 tabular-nums">
            {filtered.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold tabular-nums">{posts.length}</span>{" "}
          {posts.length === 1 ? "article" : "articles"}
          {hasActiveFilters && " (filters active)"}
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-800 transition"
          >
            <X size={12} /> Clear all filters
          </button>
        )}
      </div>

      {/* ----------------------------------------------------------
        Filtered post grid (or empty state)
        ----------------------------------------------------------*/}
      {filtered.length === 0 ? (
        <EmptyState query={query} category={activeCategory} onClear={clearAll} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------------
 * Post card — keeps the same visual treatment as the rest of
 * the site (16:9 hero / placeholder, category chip, title,
 * excerpt, reading time + date).
 * ------------------------------------------------------------*/
function PostCard({ post }) {
  const cat = getCategoryById(post.category);
  return (
    <article className="card h-full p-0 overflow-hidden group hover:-translate-y-0.5 transition">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Hero image / placeholder */}
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-50 via-white to-cyanx-50 border-b border-graphite-100 relative overflow-hidden">
          {post.heroImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img loading="lazy" decoding="async"
              src={post.heroImage}
              alt={post.title}
              className="block w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen size={40} className="text-brand-300" strokeWidth={1.4} />
            </div>
          )}
          {cat && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 border border-brand-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700">
              {cat.name}
            </span>
          )}
        </div>

        <div className="p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-graphite-900 leading-snug group-hover:text-brand-700 transition">
            {post.title}
          </h2>
          <p className="mt-2.5 text-sm text-graphite-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 text-[11px] text-graphite-500">
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> {post.readingMinutes} min read
            </span>
            <span className="text-graphite-300">·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* --------------------------------------------------------------
 * Empty state — shown when search/filter combination returns 0
 * ------------------------------------------------------------*/
function EmptyState({ query, category, onClear }) {
  const catName = category && category !== "all" ? getCategoryById(category)?.name : null;
  return (
    <div className="rounded-2xl border border-graphite-200 bg-graphite-50/60 p-12 text-center">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white border border-graphite-200 mb-5">
        <Search size={22} className="text-graphite-400" />
      </div>
      <h3 className="font-bold text-graphite-900 text-lg">
        No articles match your filters
      </h3>
      <p className="mt-2 text-sm text-graphite-600 max-w-md mx-auto leading-relaxed">
        {query && catName
          ? `Nothing matches "${query}" in the ${catName} category.`
          : query
          ? `Nothing matches "${query}" across any category.`
          : catName
          ? `No articles available in the ${catName} category yet.`
          : "No articles match the current filter combination."}
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition"
      >
        <X size={14} /> Clear filters and show all
      </button>
    </div>
  );
}
