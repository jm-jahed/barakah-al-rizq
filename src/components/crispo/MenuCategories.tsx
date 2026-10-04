'use client';

import React from 'react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface MenuCategoriesProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({ activeCategory, setActiveCategory }) => {
  const { translateCategory } = useCrispoLanguage();

  const categories = [
    'All',
    'Chicken',
    'Burgers',
    'Wings',
    'Tenders',
    'Buckets',
    'Combos',
    'Sides',
    'Desserts',
    'Drinks'
  ];

  return (
    <div className="sticky top-[72px] z-30 bg-[#12100E]/95 backdrop-blur-xl border-y border-stone-800 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#E63946] text-white shadow-lg shadow-[#E63946]/30'
                  : 'bg-[#1A1715] border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {translateCategory(cat)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
