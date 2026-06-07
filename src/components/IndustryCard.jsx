"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse, Landmark, Hotel, Plane, Building2, Factory, Trophy, ShoppingBag,
} from "lucide-react";

const iconBySlug = {
  healthcare: HeartPulse,
  bfsi: Landmark,
  hospitality: Hotel,
  airports: Plane,
  corporate: Building2,
  factories: Factory,
  sports: Trophy,
  retail: ShoppingBag,
};

export default function IndustryCard({ sector, index = 0, count = 0 }) {
  const Icon = iconBySlug[sector.id] || Building2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <Link
        href={`/products?sector=${sector.id}`}
        className="card group block p-6 h-full text-center"
      >
        <div className="mx-auto inline-flex p-4 rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-gradient group-hover:text-white transition">
          <Icon size={28} />
        </div>
        <h3 className="mt-4 font-bold text-graphite-900 group-hover:text-brand-700 transition">
          {sector.name}
        </h3>
        {count > 0 && <div className="mt-1 text-xs text-graphite-500">{count} products</div>}
      </Link>
    </motion.div>
  );
}
