'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_CATEGORIES } from '../../data/supermarketData';
import { Grid, ChevronDown, ChevronUp, ArrowRight, Layers } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory?: (slug: string) => void;
}

export default function SupermarketCategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { setSelectedCategorySlug } = useSupermarketCart();
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedCategories = isExpanded
    ? SUPERMARKET_CATEGORIES
    : SUPERMARKET_CATEGORIES.slice(0, 16);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategorySlug(slug);
    if (onSelectCategory) onSelectCategory(slug);
  };

  return (
    <section className="py-10 px-4 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>{isRtl ? 'استكشف كافة الأقسام' : 'Browse All Aisles'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              {isRtl ? 'تسوق حسب القسم (40 قسماً متكاملاً)' : 'Shop by Category (40 Supermarket Aisles)'}
            </h2>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
          >
            <span>{isExpanded ? (isRtl ? 'عرض أقل' : 'Show Less') : (isRtl ? 'عرض كافة الـ 40 قسماً' : 'View All 40 Categories')}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Dense Responsive Visual Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className="group cursor-pointer bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500 rounded-2xl p-2.5 text-center flex flex-col items-center justify-between hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden mb-2 bg-white dark:bg-zinc-800 shadow-inner">
                <img
                  src={cat.image}
                  alt={cat.nameEn}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 line-clamp-2 leading-tight">
                  {isRtl ? cat.nameAr : cat.nameEn}
                </h3>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {cat.itemCount} {isRtl ? 'منتج' : 'items'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden mt-4 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <span>{isExpanded ? (isRtl ? 'عرض أقل' : 'Show Less') : (isRtl ? 'عرض كافة الأقسام الـ 40' : 'View All 40 Categories')}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}
