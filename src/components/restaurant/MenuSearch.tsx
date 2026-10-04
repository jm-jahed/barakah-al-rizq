'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Utensils } from 'lucide-react';
import { RESTAURANT_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface MenuSearchProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({ onSelectItem }) => {
  const [query, setQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Vegetarian', 'Vegan', 'Halal', 'Gluten-Free', 'Dairy-Free', 'Spicy', 'Chef Special'];

  const filteredItems = RESTAURANT_MENU_ITEMS.filter((item) => {
    const matchesTag = selectedTag === 'All' || item.dietary.some((d) => d.toLowerCase() === selectedTag.toLowerCase());
    const matchesQuery =
      query === '' ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      (item.arabicName && item.arabicName.includes(query)) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(query.toLowerCase()));

    return matchesTag && matchesQuery;
  });

  return (
    <section className="py-16 bg-[#070A0E] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white font-serif">Smart Menu Search & Dietary Filter</h3>
          </div>

          <span className="text-xs font-mono text-amber-300 font-bold">
            Real-Time Gastronomy Indexing
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 relative">
            <input
              type="text"
              placeholder="Search dish, saffron, wagyu, kunafa..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#10141C] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
          </div>

          <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 bg-white/5 p-1.5 rounded-xl border border-white/10">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedTag === t
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {query !== '' || selectedTag !== 'All' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="p-3.5 rounded-2xl bg-[#10141C] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all flex items-center gap-3 group"
              >
                <img src={item.image} alt={item.name} className="w-14 h-16 rounded-xl object-cover bg-black shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white font-serif group-hover:text-amber-300 line-clamp-1">
                    {item.name}
                  </h4>
                  <div className="text-xs font-mono font-bold text-amber-400">AED {item.price}</div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
