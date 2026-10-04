'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, ShieldCheck, Coffee, Flame, CheckCircle2, ChefHat } from 'lucide-react';
import { DESERT_MENU, MenuItem } from '@/data/desertMirageData';

export const DesertDining: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Starter');

  const categories = ['Starter', 'Main Course', 'Dessert', 'Arabian Coffee & Tea'];

  const filteredItems = DESERT_MENU.filter(m => m.category === activeCategory);

  return (
    <section id="dining" className="relative py-24 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Utensils className="w-3.5 h-3.5" />
            <span>GASTRONOMY UNDER THE STARS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Dinner, Without Walls.
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Reinterpreting traditional Arabian pit-roasting and charcoal fire gastronomy into an intimate seven-course sensory banquet served on open dune ridges.
          </p>
        </div>

        {/* Menu Interactive Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C9A265] to-[#A87B38] text-[#090706] font-bold shadow-lg shadow-[#C9A265]/20'
                  : 'bg-[#140F0C] border border-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-b from-[#1A1410] to-[#100C09] border border-[#C9A265]/25 space-y-2 hover:border-[#C9A265]/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="text-lg font-serif text-white">{item.title}</h3>
                    <span className="text-xs font-mono text-[#C9A265]">{item.arabicName}</span>
                  </div>

                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.dietary.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#090706] border border-stone-800 text-[10px] font-mono text-stone-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
