'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown } from 'lucide-react';
import { ABAYA_COLLECTIONS } from '@/data/abayaData';

interface CollectionShowcaseProps {
  onSelectCategory: (catName: string) => void;
}

export const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              DUBAI FASHION AVENUE COLLECTIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              Curated Collections.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Explore bespoke silhouettes ranging from opulent Ramadan gold embroidery to minimalist Japanese Nida everyday cuts.
            </p>
          </div>
        </div>

        {/* 4 Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABAYA_COLLECTIONS.map((col) => (
            <motion.div
              key={col.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectCategory(col.name)}
              className="bg-[#121212] rounded-3xl border border-stone-800 overflow-hidden shadow-xl hover:border-[#C5A059]/40 transition-all cursor-pointer flex flex-col justify-between group font-sans"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={col.bannerImage}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-[#FAFAFA] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {col.name}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-3">
                    {col.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 font-mono text-xs text-[#C5A059] font-bold flex items-center justify-between">
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
