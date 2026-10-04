'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_PRODUCTS } from '../../data/supermarketData';
import SupermarketProductCard from './SupermarketProductCard';
import { Flag, ArrowRight } from 'lucide-react';

interface UaeLocalProps {
  onViewAllLocal?: () => void;
}

export default function SupermarketUaeLocal({ onViewAllLocal }: UaeLocalProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { setSelectedCategorySlug } = useSupermarketCart();

  const localProducts = SUPERMARKET_PRODUCTS
    .filter((p) => p.isUaeLocal)
    .slice(0, 8);

  return (
    <section className="py-10 px-4 bg-amber-50/40 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
              <span className="text-base">🇦🇪</span>
              <span>{isRtl ? 'فخر الإنتاج الوطني' : 'Emirates National Harvest'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              {isRtl ? 'منتجات مزارع الإمارات الطازجة 100%' : 'UAE Local Farm Produce & Heritage Staples'}
            </h2>
          </div>

          <button
            onClick={() => {
              setSelectedCategorySlug('uae-local-products');
              if (onViewAllLocal) onViewAllLocal();
            }}
            className="flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 transition-colors"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {localProducts.map((prod) => (
            <SupermarketProductCard key={prod.id} product={prod} />
          ))}
        </div>

      </div>
    </section>
  );
}
