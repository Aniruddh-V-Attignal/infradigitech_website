"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-cyanx-500 to-brand-700" />
      <div className="space-y-10">
        {timeline.map((step, i) => {
          const isRight = i % 2 === 1;
          return (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-8 ${
                isRight ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`lg:py-2 ${isRight ? "lg:text-left lg:pl-12" : "lg:text-right lg:pr-12"}`}>
                <div className="card p-6 inline-block text-left max-w-xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-700">{step.year}</div>
                  <h3 className="mt-2 text-lg font-bold text-graphite-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-graphite-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className="hidden lg:block" />
              <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-3 w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
