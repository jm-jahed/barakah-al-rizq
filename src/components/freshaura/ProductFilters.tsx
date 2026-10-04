'use client';

import React from 'react';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';
import { FRESHAURA_CATEGORIES } from '@/data/freshauraCatalogData';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedOrigin: string;
  setSelectedOrigin: (origin: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  organicOnly: boolean;
  setOrganicOnly: (org: boolean) => void;
  priceRange: number;
  setPriceRange: (val: number) => void;
  onReset: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedOrigin,
  setSelectedOrigin,
  sortBy,
  setSortBy,
  organicOnly,
  setOrganicOnly,
  priceRange,
  setPriceRange,
  onReset,
}) => {
  const { t, isRtl, formatPrice, formatNumber } = useFreshauraLanguage();

  const originsList = [
    { id: 'All', en: 'All Origins', ar: 'كافة بلدان المنشأ' },
    { id: 'UAE Local Hydroponic', en: 'UAE Local Farm', ar: 'مزارع الإمارات المحلية' },
    { id: 'Spain', en: 'Spain', ar: 'إسبانيا' },
    { id: 'Holland', en: 'Holland', ar: 'هولندا' },
    { id: 'Italy', en: 'Italy', ar: 'إيطاليا' },
    { id: 'Egypt', en: 'Egypt', ar: 'مصر' },
    { id: 'Morocco', en: 'Morocco', ar: 'المغرب' },
    { id: 'Thailand', en: 'Thailand', ar: 'تايلاند' },
    { id: 'Kenya', en: 'Kenya', ar: 'كينيا' },
    { id: 'India', en: 'India', ar: 'الهند' },
    { id: 'USA', en: 'USA', ar: 'الولايات المتحدة' },
  ];

  return (
    <div className="bg-[#064E3B] p-5 rounded-2xl border border-emerald-700/40 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs text-stone-200">
      
      {/* Category Filter */}
      <div>
        <label className="text-[10px] text-stone-300 uppercase font-bold block mb-1">
          {isRtl ? 'قسم المحاصيل' : 'PRODUCE CATEGORY'}
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#042F2E] border border-emerald-600/40 text-white font-serif font-bold focus:outline-none focus:border-emerald-400"
        >
          <option value="All">{isRtl ? 'كافة الأقسام الـ ١٠' : 'All 10 Categories'}</option>
          {FRESHAURA_CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.nameEn}>
              {isRtl ? cat.nameAr : cat.nameEn}
            </option>
          ))}
        </select>
      </div>

      {/* Origin Filter */}
      <div>
        <label className="text-[10px] text-stone-300 uppercase font-bold block mb-1">
          {isRtl ? 'بلد المنشأ والمصدر' : 'PRODUCE ORIGIN'}
        </label>
        <select
          value={selectedOrigin}
          onChange={(e) => setSelectedOrigin(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#042F2E] border border-emerald-600/40 text-white font-serif font-bold focus:outline-none focus:border-emerald-400"
        >
          {originsList.map((org) => (
            <option key={org.id} value={org.id}>
              {isRtl ? org.ar : org.en}
            </option>
          ))}
        </select>
      </div>

      {/* Sort By */}
      <div>
        <label className="text-[10px] text-stone-300 uppercase font-bold block mb-1">
          {isRtl ? 'الترتيب والتصنيف' : 'SORT PRODUCE'}
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#042F2E] border border-emerald-600/40 text-white font-serif font-bold focus:outline-none focus:border-emerald-400"
        >
          <option value="featured">{t('sortFeatured')}</option>
          <option value="price-low">{t('sortPriceAsc')}</option>
          <option value="price-high">{t('sortPriceDesc')}</option>
          <option value="rating">{t('sortRating')}</option>
        </select>
      </div>

      {/* Organic Checkbox */}
      <div className="flex flex-col justify-center">
        <label className="text-[10px] text-stone-300 uppercase font-bold block mb-1">
          {isRtl ? 'شهادة العضوي' : 'ORGANIC CERTIFIED'}
        </label>
        <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#042F2E] border border-emerald-600/40 cursor-pointer">
          <input
            type="checkbox"
            checked={organicOnly}
            onChange={(e) => setOrganicOnly(e.target.checked)}
            className="accent-emerald-400 w-4 h-4"
          />
          <span className="text-[#FBF9F5] font-bold">{t('filterOrganic')}</span>
        </label>
      </div>

      {/* Max Price Slider */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-[10px] text-stone-300 uppercase font-bold">
            {isRtl ? 'أقصى سعر' : 'MAX PRICE'}
          </label>
          <span className="text-emerald-400 font-bold">{formatPrice(priceRange)}</span>
        </div>
        <input
          type="range"
          min="5"
          max="200"
          step="5"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-emerald-400 cursor-pointer"
        />
        <div className="flex justify-between text-[9px] text-stone-400 mt-1">
          <span>{formatPrice(5)}</span>
          <span>{formatPrice(200)}</span>
        </div>
      </div>

    </div>
  );
};
