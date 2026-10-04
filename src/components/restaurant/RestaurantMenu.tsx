'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, ShoppingBag, Eye, Flame, CheckCircle2, Search } from 'lucide-react';
import { RESTAURANT_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface RestaurantMenuProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
}

export const RestaurantMenu: React.FC<RestaurantMenuProps> = ({
  onSelectItem,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Signature',
    'Starters',
    'Mains',
    'Grills',
    'Seafood',
    'Vegetarian',
    'Desserts',
    'Coffee',
    'Beverages',
  ];

  const filteredItems = RESTAURANT_MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.arabicName && item.arabicName.includes(searchQuery)) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-3">
              <Utensils className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                CULINARY CREATIONS & DIGITAL MENU
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Our Contemporary Menu.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-2xl">
              Exploring 30+ signature Wagyu kebabs, slow-baked mandi, flame-roasted mezze, and pistachio kunafa.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
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
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
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

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all p-5 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-52 rounded-2xl overflow-hidden mb-4 bg-black border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.isBestseller && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-black font-mono text-[9px] font-extrabold uppercase shadow-md">
                        Bestseller
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-mono text-amber-300 border border-amber-500/30 uppercase font-bold">
                      {item.category}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black text-white text-xs font-mono font-bold flex items-center gap-1.5 border border-white/15 shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" /> Quick View
                  </button>
                </div>

                {/* Title & Arabic */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    {item.arabicName && (
                      <span className="text-xs font-mono text-amber-400/90 block">{item.arabicName}</span>
                    )}
                  </div>
                  <div className="text-lg font-extrabold text-amber-400 font-mono shrink-0">
                    AED {item.price}
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 my-2 font-sans">
                  {item.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {item.dietary.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400">
                  {item.portionSize || '1 Serving'}
                </span>

                <button
                  onClick={() => onAddToCart(item)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs font-mono text-gray-400">
          Sample Menu Pricing — Concept Project Build #12
        </div>
      </div>
    </section>
  );
};
