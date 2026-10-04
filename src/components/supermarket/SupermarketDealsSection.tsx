'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_PRODUCTS } from '../../data/supermarketData';
import SupermarketProductCard from './SupermarketProductCard';
import { Flame, ArrowRight } from 'lucide-react';

interface DealsSectionProps {
  onViewAllDeals?: () => void;
}

export default function SupermarketDealsSection({ onViewAllDeals }: DealsSectionProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { setSelectedCategorySlug } = useSupermarketCart();

  // Pick top discounted items
  const dealProducts = SUPERMARKET_PRODUCTS
    .filter((p) => p.discountPercent >= 18)
    .slice(0, 8);

  return (
    <section className="py-10 px-4 bg-rose-50/40 dark:bg-zinc-900/40 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4 fill-rose-600 animate-bounce" />
              <span>{isRtl ? 'تخفيضات اليوم الحصرية' : 'Exclusive Daily Deals'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              {isRtl ? 'عروض وتوفير استثنائي حتى 35%' : "Today's Best Value Deals (Up to 35% OFF)"}
            </h2>
          </div>

          <button
            onClick={() => {
              setSelectedCategorySlug('offers-clearance');
              if (onViewAllDeals) onViewAllDeals();
            }}
            className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 transition-colors"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {dealProducts.map((prod) => (
            <SupermarketProductCard key={prod.id} product={prod} />
          ))}
        </div>

      </div>
    </section>
  );
}
