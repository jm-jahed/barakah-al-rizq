'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CurrentlyBuilding() {
  const activities = [
    {
      tag: "Active Engineering",
      title: "51 Standalone UAE Web Platforms",
      desc: "Architecting $15k–$60k production-grade web applications for real estate, corporate law, private aviation, and luxury retail.",
      tech: ["Next.js 16", "TypeScript 5", "Tailwind CSS 4"],
      status: "In Production",
      accent: "from-amber-500 to-amber-600",
    },
    {
      tag: "AI & Automation",
      title: "Autonomous Component Builders",
      desc: "Developing Python & Node.js orchestration scripts for rapid component synthesis and automated Webpack prerendering.",
      tech: ["OpenAI API", "Python 3.13", "Node.js"],
      status: "Active R&D",
      accent: "from-blue-500 to-indigo-600",
    },
    {
      tag: "Performance R&D",
      title: "Sub-5s Webpack Static Prerendering",
      desc: "Optimizing App Router compilation across 58 static routes with 0 TypeScript/ESLint errors and zero hydration shifts.",
      tech: ["Webpack 5", "App Router", "SSG"],
      status: "Optimized",
      accent: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-[#0B0F19] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Live Activity
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Currently Building & Exploring
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
            A real-time snapshot of current engineering projects, R&D initiatives, and performance optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
