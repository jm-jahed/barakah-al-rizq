'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_PRODUCTS } from '../../data/supermarketData';
import SupermarketProductCard from './SupermarketProductCard';
import { Tag, ArrowRight } from 'lucide-react';

interface Under10Props {
  onViewMore?: () => void;
}

export default function SupermarketUnder10Section({ onViewMore }: Under10Props) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const [activeTier, setActiveTier] = useState<'under5' | 'under10' | 'under20'>('under10');

  // Filter products by tier
  const filteredProducts = SUPERMARKET_PRODUCTS.filter((p) => {
    if (activeTier === 'under5') return p.price < 5.0;
    if (activeTier === 'under10') return p.price < 10.0;
    return p.price < 20.0;
  }).slice(0, 8);

  return (
    <section className="py-10 px-4 bg-emerald-50/50 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading & Interactive Tier Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <Tag className="w-3.5 h-3.5" />
              <span>{isRtl ? 'توفير يومي حقيقي' : 'UAE Everyday Affordability'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              {isRtl ? 'أسعار صغيرة وقيمة كبيرة (أقل من 10 دراهم)' : 'Big Value. Small Prices. (Under AED 10)'}
            </h2>
          </div>

          {/* Tier Switcher Chips */}
          <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTier('under5')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTier === 'under5'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-emerald-600'
              }`}
            >
              {isRtl ? 'أقل من 5 دراهم' : 'Under AED 5'}
            </button>
            <button
              onClick={() => setActiveTier('under10')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTier === 'under10'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-emerald-600'
              }`}
            >
              {isRtl ? 'أقل من 10 دراهم' : 'Under AED 10'}
            </button>
            <button
              onClick={() => setActiveTier('under20')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTier === 'under20'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-emerald-600'
              }`}
            >
              {isRtl ? 'أقل من 20 درهم' : 'Under AED 20'}
            </button>
          </div>
        </div>

        {/* Dense Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {filteredProducts.map((prod) => (
            <SupermarketProductCard key={prod.id} product={prod} />
          ))}
        </div>

      </div>
    </section>
  );
}
