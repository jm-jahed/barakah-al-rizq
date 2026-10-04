'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface DietaryAssistantProps {
  onSelectItem: (item: MenuItem) => void;
}

export const DietaryAssistant: React.FC<DietaryAssistantProps> = ({ onSelectItem }) => {
  const [selectedTag, setSelectedTag] = useState<string>('Gluten-Free');

  const tags = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Halal'];

  const matchingDishes = RESTAURANT_MENU_ITEMS.filter((i) =>
    i.dietary.some((d) => d.toLowerCase() === selectedTag.toLowerCase())
  );

  return (
    <section className="py-20 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  DIETARY CONCIERGE ASSISTANT
                </span>
                <h3 className="text-2xl font-bold text-white font-serif">Dietary Preference Filter</h3>
              </div>
            </div>

            <span className="text-xs font-mono text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-bold">
              Demo Dietary Filter
            </span>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                  selectedTag === t
                    ? 'bg-emerald-500 text-black border-emerald-400 shadow-lg'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                ✓ {t}
              </button>
            ))}
          </div>

          {/* Matching Dishes List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {matchingDishes.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="p-4 rounded-2xl bg-[#161D27] border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all space-y-2 group"
              >
                <img src={item.image} alt={item.name} className="w-full h-32 rounded-xl object-cover bg-black" />
                <h4 className="text-sm font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h4>
                <div className="text-xs font-mono font-bold text-amber-400">AED {item.price}</div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center text-xs font-mono text-amber-300">
            Demo Dietary Filter — Always confirm ingredients with restaurant staff.
          </div>
        </div>
      </div>
    </section>
  );
};
