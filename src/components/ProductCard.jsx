"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { getCategoryById } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function ProductCard({ product, index = 0 }) {
  const cat = getCategoryById(product.category);
  const sectorNames = (product.sectors || [])
    .map((id) => siteConfig.sectors.find((s) => s.id === id)?.name)
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <Link href={`/${product.slug}`} className="card group block overflow-hidden h-full">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-50 to-cyanx-400/10 overflow-hidden">
          <ImageOrPlaceholder src={product.images?.[0]} alt={product.title} />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {cat && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/90 text-brand-700 backdrop-blur">
                {cat.name}
              </span>
            )}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-graphite-900 group-hover:text-brand-700 transition">
            {product.title}
          </h3>
          <p className="mt-2 text-sm text-graphite-600 leading-relaxed line-clamp-2">{product.short}</p>
          {sectorNames.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1">
              {sectorNames.slice(0, 3).map((n) => (
                <span key={n} className="inline-flex items-center gap-1 text-[10px] font-semibold text-graphite-600 bg-graphite-50 border border-graphite-100 rounded-full px-2 py-0.5">
                  <Tag size={10} /> {n}
                </span>
              ))}
            </div>
          )}
          <div className="mt-5 flex items-center justify-between text-sm font-semibold text-brand-700">
            <span>View product</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ImageOrPlaceholder({ src, alt }) {
  if (!src) return <Placeholder />;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover group-hover:scale-105 transition duration-500"
      onError={() => {}}
    />
  );
}

function Placeholder() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg viewBox="0 0 64 64" width="64" height="64" className="text-brand-200">
        <rect x="6" y="14" width="52" height="32" rx="4" fill="currentColor"/>
        <rect x="10" y="18" width="44" height="24" rx="2" fill="#fff"/>
        <rect x="22" y="48" width="20" height="3" rx="1.5" fill="currentColor"/>
      </svg>
    </div>
  );
}
