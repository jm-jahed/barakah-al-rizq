'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Plus, Info, Clock, Check, ChevronRight } from 'lucide-react';
import { BakeryProduct, BAKERY_PRODUCTS } from '@/data/flameFlourData';

interface FlameFlourCounterProps {
  onSelectProduct: (product: BakeryProduct) => void;
  onAddToCart: (product: BakeryProduct) => void;
}

const CATEGORIES = [
  'All',
  'Bread',
  'Croissants',
  'Viennoiserie',
  'Cakes',
  'Pastries',
  'Cookies',
  'Breakfast',
  'Gift Boxes'
] as const;

export const FlameFlourCounter: React.FC<FlameFlourCounterProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? BAKERY_PRODUCTS.slice(0, 12)
    : BAKERY_PRODUCTS.filter(p => p.category === activeCategory);

  const handleAdd = (product: BakeryProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-20 bg-[#0c0908] border-b border-stone-800/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE DIGITAL COUNTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
              Fresh from the Morning Bake
            </h2>
            <p className="mt-3 text-stone-400 max-w-xl text-sm sm:text-base">
              Every loaf, croissant, and pastry is baked in small numbered batches each morning. Explore our counter selections below.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-400 bg-stone-900/90 px-4 py-2 rounded-xl border border-stone-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Counter Restocked: 08:30 AM UAE Time</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-md shadow-amber-950/40'
                    : 'bg-stone-900/70 text-stone-400 hover:text-stone-200 hover:bg-stone-850 border border-stone-800/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isJustAdded = addedId === product.id;
              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectProduct(product)}
                  className="group relative bg-[#130f0d] hover:bg-[#181310] border border-stone-800/80 hover:border-amber-700/50 rounded-2xl p-5 flex flex-col justify-between transition-all cursor-pointer shadow-lg hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    {/* Visual Card Image / Embellishment */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-900 border border-stone-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Availability Tag */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase backdrop-blur-md border ${
                          product.availability === 'Fresh from Oven'
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                            : product.availability === 'Limited Batch'
                            ? 'bg-orange-500/20 border-orange-500/40 text-orange-300'
                            : 'bg-stone-900/70 border-stone-700 text-stone-300'
                        }`}>
                          {product.availability}
                        </span>
                      </div>

                      {/* Dietary Badges */}
                      <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                        {product.dietary.slice(0, 2).map((d) => (
                          <span key={d} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-stone-300 border border-stone-700/50">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Product Name & Category */}
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 mb-1">
                      {product.category} · {product.servingSize}
                    </div>
                    <h3 className="text-xl font-serif text-stone-100 group-hover:text-amber-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-stone-400 line-clamp-2 leading-relaxed font-light">
                      {product.tagline}
                    </p>

                    {/* Flavor Profile pill */}
                    <div className="mt-3 text-[11px] text-stone-400 bg-stone-900/60 p-2 rounded-lg border border-stone-850">
                      <span className="text-amber-400 font-medium">Profile:</span> {product.flavorProfile}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-4 border-t border-stone-850/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block font-mono">Price (UAE)</span>
                      <span className="text-lg font-serif font-bold text-amber-400">
                        AED {product.priceAED}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-800 transition-colors"
                        title="View Craft Details"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleAdd(product, e)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                          isJustAdded
                            ? 'bg-emerald-500 text-stone-950 font-bold'
                            : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-950/40 active:scale-95'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
