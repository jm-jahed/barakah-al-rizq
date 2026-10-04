'use client';

import React from 'react';

interface EscapeCategoriesProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const EscapeCategories: React.FC<EscapeCategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = [
    { id: 'All', label: 'All Stays', icon: '✦' },
    { id: 'Beach', label: '🏖 Beach Escape', icon: '🏖' },
    { id: 'Desert', label: '🏜 Desert Retreat', icon: '🏜' },
    { id: 'Romantic', label: '❤️ Romantic Getaway', icon: '❤️' },
    { id: 'Family', label: '👨‍👩‍👧 Family Staycation', icon: '👨‍👩‍👧' },
    { id: 'Wellness', label: '🧘 Wellness Retreat', icon: '🧘' },
    { id: 'Sunset', label: '🌅 Sunset Escape', icon: '🌅' },
    { id: 'Celebration', label: '🎉 Celebration', icon: '🎉' },
    { id: 'Business', label: '💼 Business Weekend', icon: '💼' },
  ];

  return (
    <section className="py-8 bg-[#0A2920] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 font-serif text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl font-bold transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-[#D4B382] text-black border-[#D4B382] shadow-lg shadow-[#D4B382]/20'
                  : 'bg-[#0F382C] text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
