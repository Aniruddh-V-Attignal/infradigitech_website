import Link from "next/link";
import { ArrowRight, Sparkles, Wrench, Cpu } from "lucide-react";
import ProductsExplorer from "./ProductsExplorer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Products — Digital Display, IoT & Electronics Manufacturing",
  description:
    "Explore the full Infra DigiTech catalogue — banking display systems, queue & token management, healthcare communication, GPS clocks, food counter displays and electronic scoreboards.",
  alternates: { canonical: "/products" }
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow eyebrow-dark">Catalogue</span>
              <h1 className="h1 mt-2 text-white">All Products</h1>
              <p className="mt-4 text-lg text-graphite-200 max-w-2xl">
                Filter by category or industry to find the right system for your project.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/software-automation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-graphite-900 px-5 py-2.5 text-sm font-bold hover:bg-cyanx-50 transition"
              >
                <Cpu size={16} /> Software &amp; Embedded<ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyanx-400 text-graphite-950 px-5 py-2.5 text-sm font-bold hover:bg-cyanx-300 transition"
              >
                <Wrench size={16} /> Custom built product<ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductsExplorer />

      {/* Didn't find your product? -> funnel into Software & Automation */}
      <section className="relative overflow-hidden bg-graphite-950 text-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-cyanx-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-brand-500/20 rounded-full blur-3xl" />

        <div className="container-default relative py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-cyanx-400 backdrop-blur">
                <Sparkles size={14} /> Custom engineering
              </span>
              <h2 className="h2 mt-3 text-white">Didn&apos;t find your product?</h2>
              <p className="mt-3 text-lg text-graphite-200 max-w-2xl">
                Get it built with our expert team — embedded hardware, firmware, custom software,
                dashboards and integrations engineered for your exact workflow.
              </p>
              <div className="mt-2 text-sm text-graphite-300 max-w-xl">
                Explore our four engineering capabilities — Embedded Systems, Custom Software,
                Web &amp; Ecommerce and Enterprise Applications — and start a project.
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyanx-400 text-graphite-950 px-5 py-2.5 text-sm font-bold hover:bg-cyanx-300 transition"
              >
                <Wrench size={16} /> Get it custom built <ArrowRight size={14} />
              </Link>
              <Link
                href="/software-automation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-graphite-900 px-5 py-2.5 text-sm font-bold hover:bg-cyanx-50 transition"
              >
                <Cpu size={16} /> Software &amp; Automation <ArrowRight size={14} />
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
