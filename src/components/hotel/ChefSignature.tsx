'use client';

import React from 'react';
import { Wine, Award, Utensils, Sparkles } from 'lucide-react';
import { CHEF_DISHES } from '@/data/hotelData';

export const ChefSignature: React.FC = () => {
  return (
    <section className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            MICHELIN SIGNATURE TASTING MENU
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
            Signature creations by Chef Laurent.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Rare Arabian Gulf seafood, Royal Ossetra caviar, and authentic French-Levantine culinary mastery.
          </p>
        </div>

        {/* 3 Dishes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEF_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#29221D] rounded-3xl border border-stone-800 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#C5A059]/40 transition-all duration-300"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#29221D] via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#1C1917]/80 text-[#C5A059] border border-stone-700 backdrop-blur-md">
                    {dish.category}
                  </span>

                  <span className="absolute top-4 right-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/80 text-[#D4AF37] border border-[#C5A059]/30 backdrop-blur-md">
                    AED {dish.priceAED}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif text-[#F7F4EE] group-hover:text-[#C5A059] transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 font-mono text-[11px] space-y-2">
                    <div className="flex items-center gap-2 text-[#C5A059]">
                      <Wine className="w-3.5 h-3.5" />
                      <span className="font-bold">Sommelier Pairing:</span>
                    </div>
                    <p className="text-stone-300 leading-snug">{dish.winePairing}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 font-serif italic text-xs text-stone-400 border-t border-stone-800/60 mt-4 pt-4">
                "{dish.chefNote}"
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
