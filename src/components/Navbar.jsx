"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Leaf } from "lucide-react";
import { siteConfig, buildTelLink } from "@/config/site";

/**
 * Icon map for nav dropdown items - opt-in via the `icon` key in the
 * nav config (see siteConfig.nav children). Keeps site.js a clean data
 * file while letting individual entries render a small contextual glyph.
 */
const NAV_ICON_MAP = {
  Leaf: <Leaf size={14} className="text-emerald-600" />,
};
import { categories, products } from "@/data/products";
import GlobalSearch from "./GlobalSearch";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // generic dropdown (e.g. Contact)
  const [activeSector, setActiveSector] = useState("all");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const filteredProducts =
    activeSector === "all"
      ? products
      : products.filter((p) => (p.sectors || []).includes(activeSector));

  const productsByCategory = categories.map((c) => ({
    ...c,
    items: filteredProducts.filter((p) => p.category === c.id),
  }));

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-card border-b border-graphite-100"
          : "bg-white border-b border-graphite-100"
      }`}
    >
      <div className="container-default flex items-center justify-between h-24 lg:h-28">
        <Link
          href="/"
          className="flex items-center gap-4 group -ml-3 sm:-ml-6 lg:-ml-9 shrink-0"
          aria-label={siteConfig.name}
        >
          {/* Logo mark — Digi-Tech ellipse */}
          <div className="relative shrink-0">
            <Image
              src={siteConfig.logoMark}
              alt={`${siteConfig.shortName}®`}
              width={500}
              height={500}
              priority
              className="h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* Registered trademark mark - positioned right at the top-right edge of the
                Digi-Tech ellipse (not the image bounding box, which has transparent padding). */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute top-[32%] right-[3%] text-[9px] lg:text-[11px] font-bold text-brand-700 leading-none"
            >
              &reg;
            </span>
          </div>

          {/* Wordmark */}
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-extrabold tracking-tight text-lg lg:text-xl">
              <span className="text-brand-700">
                Infra DigiTech
              </span>
            </div>
            <div className="mt-0.5 text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.28em] text-graphite-400">
              Private Limited
            </div>
            <div className="mt-1 text-[10px] sm:text-[11px] italic font-medium text-brand-700/90 tracking-wide whitespace-nowrap">
              Your Vision, Digitally Engineered
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => {
            const isProducts = item.label === "Products";
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            if (isProducts) {
              return (
                <div
                  key={item.href}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="relative"
                >
                  <Link
                    href="/products"
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "text-brand-700 bg-brand-50"
                        : "text-graphite-700 hover:text-brand-700 hover:bg-brand-50/60"
                    }`}
                  >
                    Products
                    <ChevronDown size={16} />
                  </Link>

                  {productsOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(96vw,1080px)]">
                      <div className="bg-white rounded-2xl shadow-glow border border-graphite-100 overflow-hidden">
                        {/* Sector filter */}
                        <div className="flex flex-wrap gap-2 px-6 py-4 border-b border-graphite-100 bg-graphite-50">
                          <button
                            onClick={() => setActiveSector("all")}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                              activeSector === "all"
                                ? "bg-brand-600 text-white"
                                : "bg-white text-graphite-700 border border-graphite-200 hover:border-brand-400"
                            }`}
                          >
                            All
                          </button>
                          {siteConfig.sectors.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => setActiveSector(s.id)}
                              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                                activeSector === s.id
                                  ? "bg-brand-600 text-white"
                                  : "bg-white text-graphite-700 border border-graphite-200 hover:border-brand-400"
                              }`}
                            >
                              {s.name}
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 p-6 max-h-[60vh] overflow-y-auto">
                          {productsByCategory.map((cat) => (
                            <div key={cat.id}>
                              <Link
                                href={`/products?category=${cat.id}`}
                                className="block text-xs font-bold uppercase tracking-wider text-brand-700 mb-2 hover:underline"
                              >
                                {cat.name}
                              </Link>
                              <ul className="space-y-1.5">
                                {cat.items.length === 0 ? (
                                  <li className="text-xs text-graphite-400 italic">No products in this sector</li>
                                ) : (
                                  cat.items.slice(0, 6).map((p) => (
                                    <li key={p.slug}>
                                      <Link
                                        href={`/${p.slug}`}
                                        className="block text-sm text-graphite-700 hover:text-brand-700 hover:translate-x-0.5 transition"
                                      >
                                        {p.title}
                                      </Link>
                                    </li>
                                  ))
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="px-6 py-3 bg-graphite-50 border-t border-graphite-100 flex flex-wrap items-center gap-x-6 gap-y-2">
                          <Link href="/products" className="text-sm font-semibold text-brand-700 hover:underline inline-flex items-center gap-1">
                            View all Digital & Communication products →
                          </Link>
              
                          <Link href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="ml-auto text-sm font-semibold text-graphite-700 hover:text-brand-700">
                            Request a Demo
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            // Generic dropdown for nav items with `children` (e.g. Contact)
            if (item.children && item.children.length > 0) {
              const isOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "text-brand-700 bg-brand-50"
                        : "text-graphite-700 hover:text-brand-700 hover:bg-brand-50/60"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </Link>
                  {isOpen && (
                    <div className="absolute right-0 top-full pt-3 w-56">
                      <div className="bg-white rounded-2xl shadow-glow border border-graphite-100 overflow-hidden py-1.5">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-graphite-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {c.icon && NAV_ICON_MAP[c.icon]}
                            <span>{c.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-700 bg-brand-50"
                    : "text-graphite-700 hover:text-brand-700 hover:bg-brand-50/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTAs (desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <GlobalSearch />
          <a
            href={siteConfig.forms.enquiry}
            target="_blank"
            rel="noopener"
            className="btn-primary !py-2 !px-4 text-xs"
          >
            Request a Demo
          </a>
        </div>

        {/* Mobile: search + toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <GlobalSearch />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg text-graphite-700 hover:bg-graphite-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-graphite-100 shadow-card">
          <div className="container-default py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-graphite-800 hover:bg-brand-50 hover:text-brand-700 font-medium"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l border-graphite-100 pl-2 my-1 flex flex-col gap-0.5">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-graphite-600 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {c.icon && NAV_ICON_MAP[c.icon]}
                        <span>{c.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-graphite-100 my-2" />
            <a
              href={siteConfig.forms.enquiry}
              target="_blank"
              rel="noopener"
              className="btn-primary justify-center"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
