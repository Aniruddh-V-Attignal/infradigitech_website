"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Banknote, Tickets, Stethoscope, Clock, UtensilsCrossed, Trophy,
  ArrowUpRight,
} from "lucide-react";

const icons = { Banknote, Tickets, Stethoscope, Clock, UtensilsCrossed, Trophy };

export default function CategoryCard({ category, count = 0, index = 0 }) {
  const Icon = icons[category.icon] || Banknote;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Link
        href={`/products?category=${category.id}`}
        className="card group block p-6 h-full"
      >
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-brand-50 text-brand-700 p-3 group-hover:bg-brand-600 group-hover:text-white transition">
            <Icon size={22} />
          </div>
          <ArrowUpRight className="text-graphite-400 group-hover:text-brand-600 transition" size={18} />
        </div>
        <h3 className="mt-5 text-lg font-bold text-graphite-900 group-hover:text-brand-700 transition">
          {category.name}
        </h3>
        <p className="mt-2 text-sm text-graphite-600 leading-relaxed">{category.description}</p>
        {count > 0 && (
          <div className="mt-4 text-xs font-semibold text-brand-700">
            {count} product{count > 1 ? "s" : ""} →
          </div>
        )}
      </Link>
    </motion.div>
  );
}
