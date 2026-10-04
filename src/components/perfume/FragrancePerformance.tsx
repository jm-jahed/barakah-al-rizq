'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FragrancePerformance: React.FC = () => {
  const metrics = [
    { label: "Longevity (Hours on Skin)", value: 95, detail: "14+ Hours (Extrait Grade)" },
    { label: "Projection / Sillage Radius", value: 90, detail: "Enormous 2-Meter Radius" },
    { label: "Resin & Oud Concentration", value: 85, detail: "30% Aged Cambodian Oil" },
    { label: "Heat Stability (Dubai Climate)", value: 98, detail: "High Heat Stability" },
  ];

  return (
    <section className="py-16 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#10141C] border border-amber-500/20 space-y-3 shadow-xl"
            >
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-gray-300 font-bold">{m.label}</span>
                <span className="text-amber-400 font-bold">{m.value}%</span>
              </div>

              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${m.value}%` }}
                />
              </div>

              <span className="text-[10px] font-mono text-gray-400 block">{m.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
