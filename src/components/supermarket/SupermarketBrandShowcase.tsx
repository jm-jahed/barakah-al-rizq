'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { POPULAR_BRANDS } from '../../data/supermarketData';
import { Award, ArrowRight } from 'lucide-react';

interface BrandShowcaseProps {
  onSelectBrand?: (brandName: string) => void;
}

export default function SupermarketBrandShowcase({ onSelectBrand }: BrandShowcaseProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { setSearchQuery } = useSupermarketCart();

  const handleBrandClick = (brandName: string) => {
    setSearchQuery(brandName);
    if (onSelectBrand) onSelectBrand(brandName);
  };

  return (
    <section className="py-10 px-4 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>{isRtl ? 'علامات تجارية موثوقة' : 'Trusted Household Brands'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
            {isRtl ? 'تسوق حسب علامتك المفضلة' : 'Shop by Leading Supermarket Brands'}
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {POPULAR_BRANDS.map((brand, idx) => (
            <button
              key={idx}
              onClick={() => handleBrandClick(brand.name)}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center transition-all hover:shadow-md hover:-translate-y-0.5 group"
            >
              <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                {brand.logo}
              </span>
              <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate max-w-full">
                {isRtl ? brand.ar : brand.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">
                {brand.origin}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
