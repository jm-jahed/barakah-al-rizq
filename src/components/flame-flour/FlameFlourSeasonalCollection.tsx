'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, ArrowRight, Sun, Snowflake, CloudRain, Wind } from 'lucide-react';
import { BakeryProduct } from '@/data/flameFlourData';

interface FlameFlourSeasonalCollectionProps {
  onSelectProductByName: (name: string) => void;
}

const SEASONS = [
  {
    name: 'Winter Atelier',
    season: 'Current Release',
    theme: 'Dark Cocoa, Burnt Caramel & Chestnut',
    hero: 'Chocolate Babka & Smoked Sea Salt Sourdough',
    icon: '❄️',
    desc: 'Deep warm hearth bakes featuring single-origin Valrhona chocolate, toasted pecans, and rich cultured butter.'
  },
  {
    name: 'Spring Citrus & Blossom',
    season: 'Upcoming March',
    theme: 'Amalfi Lemon, Wild Thyme & Orange Blossom',
    hero: 'Lemon Meringue Tarts & Brioche Feuilletée',
    icon: '🌸',
    desc: 'Bright floral infusions, delicate honeyed curds, and light crisp laminated viennoiserie.'
  },
  {
    name: 'Summer Berry Harvest',
    season: 'June – August',
    theme: 'Local UAE Hydroponic Berries & Mascarpone',
    hero: 'Strawberry Mascarpone Cake & Raspberry Danishes',
    icon: '☀️',
    desc: 'Vivid berry compotes, fresh whipped mascarpone, and caramelized puff pastry layers.'
  },
  {
    name: 'Autumn Spice & Fig',
    season: 'September – November',
    theme: 'Mission Figs, Spiced Brioche & Rye',
    hero: 'Fig & Walnut Country Levain & Cinnamon Morning Buns',
    icon: '🍂',
    desc: 'Dense grain loaves, caramelized fig preserves, and warm Saigon cinnamon sugars.'
  }
];

export const FlameFlourSeasonalCollection: React.FC<FlameFlourSeasonalCollectionProps> = ({
  onSelectProductByName
}) => {
  return (
    <section className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>SEASONAL CULINARY RELEASES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Baked for the Season
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Our recipes rotate in harmony with seasonal harvests, ambient fermentation temperatures, and global flour millings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SEASONS.map((s, idx) => (
            <div
              key={s.name}
              className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between shadow-xl ${
                idx === 0
                  ? 'bg-[#140f0c] border-amber-700/60 ring-1 ring-amber-500/30'
                  : 'bg-[#100d0b] border-stone-800/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase ${
                    idx === 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-stone-900 text-stone-400 border border-stone-800'
                  }`}>
                    {s.season}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-stone-100">{s.name}</h3>
                <div className="text-xs font-mono text-amber-400 mt-1 mb-3">{s.theme}</div>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-4">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-850 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 block">Featured Signature</span>
                  <span className="text-xs font-serif text-stone-200 font-medium">{s.hero}</span>
                </div>

                <button
                  onClick={() => onSelectProductByName('Chocolate Babka')}
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-850 text-amber-300 border border-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Bakes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
