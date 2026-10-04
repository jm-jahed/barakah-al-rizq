'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, CheckCircle2 } from 'lucide-react';
import { PERFUME_INGREDIENTS, PerfumeIngredient } from '@/data/perfumeData';

export const IngredientLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Resin & Wood', 'Floral', 'Citrus & Fresh', 'Spices', 'Balsamic & Sweet'];

  const filteredIngredients = PERFUME_INGREDIENTS.filter((ing) => {
    const matchesCategory = activeCategory === 'All' || ing.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.scentCharacter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ingredients" className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Raw Olfactory Library
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Raw Ingredients.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-2xl">
              Discover Koh Kong Cambodian oud resin, Grasse centifolia rose absolute, and Khorasan saffron.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search raw ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-72 bg-[#10141C] border border-white/15 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIngredients.map((ing, idx) => (
            <motion.div
              key={ing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all p-5 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-black">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 font-bold uppercase">
                    {ing.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-serif mb-1">{ing.name}</h3>
                <span className="text-[11px] font-mono text-amber-400 block mb-2">Origin: {ing.origin}</span>

                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  {ing.scentCharacter}
                </p>

                <div className="space-y-1 border-t border-white/10 pt-2 text-[10px] font-mono text-gray-300">
                  <span className="text-gray-400 font-bold block uppercase">FREQUENTLY PAIRED WITH:</span>
                  <span>{ing.pairedWith.join(', ')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
