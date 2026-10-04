'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Utensils, CheckCircle2 } from 'lucide-react';

export const ChefProcess: React.FC = () => {
  const steps = [
    { num: "01", title: "Ingredients", desc: "Wild Omani lobsters, Norcia black truffles, and MB9+ Australian Wagyu delivered fresh daily.", tag: "Sourcing" },
    { num: "02", title: "Preparation", desc: "45-day dry aging, 12-hour lamb marinations, and handmade fresh egg pasta rolled every morning.", tag: "Curing & Prep" },
    { num: "03", title: "Cooking", desc: "Sear over Japanese Bincho-tan oak charcoal reaching 900°C for distinct smoky char flavor.", tag: "Oak Charcoal Grill" },
    { num: "04", title: "Plating", desc: "Artisanal plating with Iranian saffron emulsions, edible 24k gold, and micro-herbs.", tag: "Culinary Art" },
    { num: "05", title: "Served", desc: "Tableside bone marrow jus pouring and hot clotted kaymak serving at peak temperature.", tag: "Guest Service" }
  ];

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            CULINARY PREPARATION SEQUENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            From Source to Table.
          </h2>
          <p className="text-base text-gray-400">
            A 5-step preparation protocol ensuring uncompromised flavor, texture, and visual presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-amber-400 font-mono">{step.num}</span>
                  <span className="text-[9px] font-mono text-gray-400 px-2 py-0.5 rounded bg-white/5">{step.tag}</span>
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-3 mt-4 border-t border-white/10 text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Step Executed
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
