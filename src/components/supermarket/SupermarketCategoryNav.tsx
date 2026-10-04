'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_CATEGORIES } from '../../data/supermarketData';
import {
  Flame,
  Percent,
  Leaf,
  Tag,
  Package,
  Layers,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface CategoryNavProps {
  onSelectCategory?: (slug: string | null) => void;
}

export default function SupermarketCategoryNav({ onSelectCategory }: CategoryNavProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { selectedCategorySlug, setSelectedCategorySlug } = useSupermarketCart();

  const handleCategoryClick = (slug: string | null) => {
    setSelectedCategorySlug(slug);
    if (onSelectCategory) onSelectCategory(slug);
  };

  return (
    <nav aria-label="Aisles and category filter" className="bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 py-2.5 px-4 overflow-x-auto no-scrollbar select-none">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
        
        {/* All Products button */}
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
            selectedCategorySlug === null
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isRtl ? 'كافة المنتجات (1,000+)' : 'All Groceries (1,000+)'}</span>
        </button>

        {/* Highlight Quick Filters */}
        <button
          onClick={() => handleCategoryClick('offers-clearance')}
          className="px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 border border-rose-200 dark:border-rose-900/50 flex items-center gap-1.5 font-bold transition-colors"
        >
          <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>{t('deals')}</span>
        </button>

        <button
          onClick={() => handleCategoryClick('fruits-vegetables')}
          className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-1.5 font-bold transition-colors"
        >
          <Leaf className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('freshMarket')}</span>
        </button>

        <button
          onClick={() => handleCategoryClick('uae-local-products')}
          className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-900/50 flex items-center gap-1.5 font-bold transition-colors"
        >
          <span>🇦🇪 {t('uaeLocal')}</span>
        </button>

        <div className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-1 flex-shrink-0" />

        {/* Top Major Supermarket Aisle Chips */}
        {SUPERMARKET_CATEGORIES.slice(0, 16).map((cat) => {
          const isSelected = selectedCategorySlug === cat.slug;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-sm font-bold'
                  : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-800'
              }`}
            >
              <span>{isRtl ? cat.nameAr : cat.nameEn}</span>
            </button>
          );
        })}

      </div>
    </nav>
  );
}
