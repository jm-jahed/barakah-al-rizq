'use client';
import React from 'react';
import { BAKERY_INGREDIENTS } from '@/data/bakeryData';

export const BakeryIngredients: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A120B] text-white border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-2">SOURCING & QUALITY</span>
          <h2 className="text-3xl sm:text-5xl font-serif mb-4">Ingredient Library.</h2>
          <p className="text-xs text-gray-400">We source 25+ premier global ingredients: 70% Belgian chocolate, Madagascar Bourbon vanilla beans, Sicilian pistachios, and fresh local dairy.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {BAKERY_INGREDIENTS.map(ing => (
            <div key={typeof ing === 'string' ? ing : ing.id} className="bg-[#241A12] p-3 rounded-xl border border-amber-900/30 text-center font-serif text-xs text-amber-200">
              {typeof ing === 'string' ? ing : ing.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
