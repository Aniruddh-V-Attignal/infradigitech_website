"use client";

/**
 * Heavy global-search panel — extracted from GlobalSearch.jsx so it
 * can be dynamic-imported only when the user actually opens search
 * (via the navbar icon or Ctrl/Cmd+K).
 *
 * Saves the products + software + categories data + matching logic
 * from the initial page bundle.
 *
 * Controlled by GlobalSearch.jsx via the `onClose` prop.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X, FileText, Package, Layers3 } from "lucide-react";
import { categories, products } from "@/data/products";
import { services as softwareServices } from "@/data/software";

const STATIC_PAGES = [
  { title: "Home",              href: "/",                  keywords: "home landing" },
  { title: "About",             href: "/about",             keywords: "about company history timeline directors mission vision manufacturing bengaluru" },
  { title: "All Products",      href: "/products",          keywords: "products catalogue range portfolio" },
  { title: "Case Studies",      href: "/case-studies",      keywords: "case studies success stories deployments projects portfolio results Ramiah Sakra Manipal Narayana Fortis Apollo Syngene NIMHANS Toyota Wipro Canara token forwarding nurse call NABH crowd management" },
  { title: "Software & Automation", href: "/software-automation", keywords: "software embedded IoT web ecommerce enterprise application React Next.js WordPress Shopify firmware PCB development" },
  { title: "Catalogues & Brochures", href: "/downloads",    keywords: "brochures catalogues PDF download datasheet" },
  { title: "Clients",           href: "/clients",           keywords: "clients customers banks hospitals reference" },
  { title: "Certifications",    href: "/certifications",    keywords: "ISO 9001 CE GeM MSME Udyam IEC trademark certifications compliance QRO" },
  { title: "Credentials & Vendor Profile", href: "/credentials", keywords: "credentials vendor profile CIN PAN TAN GSTIN Udyam IEC GeM seller ID trade mark legal registrations verification tender empanelment due diligence procurement government" },
  { title: "Sustainability",               href: "/sustainability", keywords: "sustainability esg green renewable solar bescom net zero electric vehicle ev tata nexon ola ather organic farm attiganal bhadra tarikere fruit trees e-waste recycling buy back biogas induction csr environmental" },
  { title: "Careers",           href: "/careers",           keywords: "careers jobs hiring engineering roles HR" },
  { title: "Contact Us",        href: "/contact",           keywords: "contact phone email WhatsApp address bengaluru" },
  { title: "Service Request",   href: "/service-request",   keywords: "service support AMC ticket repair maintenance" },
  { title: "FAQ",               href: "/faq",               keywords: "faq frequently asked questions help NABH RBI crowd management wired wireless integration AMC" },
  { title: "Infra DigiTech in Bengaluru", href: "/bengaluru", keywords: "bengaluru bangalore karnataka local banashankari jayanagar koramangala whitefield electronic city peenya attibele hebbal rajajinagar yelahanka local presence mumbai chennai hyderabad delhi kolkata kochi guwahati coimbatore madurai mysore mangalore hubli dharwad vishakapatnam kozhikode channel partner regional office pan india cities" },
];

export default function GlobalSearchPanel({ onClose }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  // Focus the input on mount, lock body scroll, wire Esc to close
  useEffect(() => {
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 30);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) {
      return {
        products:   products.slice(0, 6),
        pages:      STATIC_PAGES.slice(0, 4),
        categories: categories.slice(0, 4),
        software:   softwareServices.slice(0, 4),
      };
    }
    const matchesProduct = (p) => {
      const hay = [
        p.title, p.short, p.description,
        ...(p.features || []),
        ...(p.applications || []),
        ...(p.seo?.keywords || []),
        ...(p.tiers?.map((t) =>
          [t.name, t.badge, t.headline, t.summary, ...(t.features || [])].join(" ")
        ) || []),
      ].join(" ").toLowerCase();
      return hay.includes(term);
    };
    const matchesSoftware = (s) => {
      const hay = [s.title, s.headline, s.summary, s.eyebrow, ...(s.offer || [])].join(" ").toLowerCase();
      return hay.includes(term);
    };
    return {
      products:   products.filter(matchesProduct).slice(0, 10),
      software:   softwareServices.filter(matchesSoftware).slice(0, 6),
      pages:      STATIC_PAGES.filter((p) => `${p.title} ${p.keywords}`.toLowerCase().includes(term)).slice(0, 6),
      categories: categories.filter((c) => `${c.name} ${c.description}`.toLowerCase().includes(term)).slice(0, 6),
    };
  }, [q]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-graphite-950/60 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-glow border border-graphite-100 overflow-hidden animate-fade-in-up"
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 border-b border-graphite-100">
          <Search size={20} className="text-graphite-400 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, pages, keywords — try “nurse calling”, “forex”, “GPS clock”…"
            className="flex-1 py-4 text-base outline-none border-none focus:ring-0 placeholder:text-graphite-400"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-lg text-graphite-500 hover:bg-graphite-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results scroller */}
        <div className="max-h-[60vh] overflow-y-auto">
          {results.products.length > 0 && (
            <ResultSection title="Products" icon={<Package size={14} />}>
              {results.products.map((p) => (
                <Row key={p.slug} href={`/${p.slug}`} title={p.title} sub={p.short} onSelect={onClose} />
              ))}
            </ResultSection>
          )}
          {results.software?.length > 0 && (
            <ResultSection title="Software & Embedded" icon={<Layers3 size={14} />}>
              {results.software.map((s) => (
                <Row key={s.id} href={`/software-automation#${s.id}`} title={s.title} sub={s.headline} onSelect={onClose} />
              ))}
            </ResultSection>
          )}
          {results.categories.length > 0 && (
            <ResultSection title="Categories" icon={<Layers3 size={14} />}>
              {results.categories.map((c) => (
                <Row key={c.id} href={`/products?category=${c.id}`} title={c.name} sub={c.description} onSelect={onClose} />
              ))}
            </ResultSection>
          )}
          {results.pages.length > 0 && (
            <ResultSection title="Pages" icon={<FileText size={14} />}>
              {results.pages.map((p) => (
                <Row key={p.href} href={p.href} title={p.title} sub={p.keywords} onSelect={onClose} />
              ))}
            </ResultSection>
          )}
          {results.products.length === 0 &&
            results.pages.length === 0 &&
            results.categories.length === 0 &&
            (results.software?.length || 0) === 0 && (
              <div className="px-5 py-10 text-center text-graphite-500">
                No matches for <span className="font-semibold text-brand-700">“{q}”</span>.
                Try a different keyword or{" "}
                <Link href="/contact" onClick={onClose} className="text-brand-700 underline hover:no-underline">
                  contact our team
                </Link>.
              </div>
            )}
        </div>

        {/* Hints */}
        <div className="px-5 py-3 border-t border-graphite-100 bg-graphite-50 text-[11px] text-graphite-500 flex items-center justify-between">
          <span>
            Tip — Press{" "}
            <kbd className="font-mono bg-white border border-graphite-200 rounded px-1.5 py-0.5">Ctrl</kbd>{" "}
            <span>+</span>{" "}
            <kbd className="font-mono bg-white border border-graphite-200 rounded px-1.5 py-0.5">K</kbd>{" "}
            to open search anywhere
          </span>
          <span>
            <kbd className="font-mono bg-white border border-graphite-200 rounded px-1.5 py-0.5">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}

function ResultSection({ title, icon, children }) {
  return (
    <div className="py-2">
      <div className="px-5 pb-1.5 pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-graphite-500 flex items-center gap-1.5">
        {icon} {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Row({ href, title, sub, onSelect }) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      className="flex items-center gap-3 px-5 py-2.5 hover:bg-brand-50 transition group"
    >
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-graphite-900 group-hover:text-brand-700 truncate">
          {title}
        </div>
        {sub && <div className="text-xs text-graphite-500 truncate">{sub}</div>}
      </div>
    </Link>
  );
}
