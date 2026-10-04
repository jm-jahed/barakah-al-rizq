'use client';

import React from 'react';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedCollection: string;
  setSelectedCollection: (col: string) => void;
  selectedFabric: string;
  setSelectedFabric: (fab: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  priceRange: number;
  setPriceRange: (val: number) => void;
  onReset: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedCollection,
  setSelectedCollection,
  selectedFabric,
  setSelectedFabric,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
}) => {
  const { isRtl, t, translateCategory, translateCollection, translateFabric, formatPrice } = useNouraLanguage();

  return (
    <div className="bg-[#121212] p-5 rounded-2xl border border-stone-800 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs text-stone-300">
      
      {/* Category Filter */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">
          {t('filterCategory')}
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059] cursor-pointer"
        >
          <option value="All">{t('filterAllCategories')} (248+)</option>
          <option value="Embroidered Abayas">{translateCategory('Embroidered Abayas')}</option>
          <option value="Luxury Abayas">{translateCategory('Luxury Abayas')}</option>
          <option value="Linen & Crepe Abayas">{translateCategory('Linen & Crepe Abayas')}</option>
          <option value="Classic Black Abayas">{translateCategory('Classic Black Abayas')}</option>
          <option value="Silk & Organza Abayas">{translateCategory('Silk & Organza Abayas')}</option>
          <option value="Casual & Daily Wear">{translateCategory('Casual & Daily Wear')}</option>
          <option value="Kaftans & Dresses">{translateCategory('Kaftans & Dresses')}</option>
          <option value="Eid & Festive Edition">{translateCategory('Eid & Festive Edition')}</option>
        </select>
      </div>

      {/* Collection Filter */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">
          {t('filterCollection')}
        </label>
        <select
          value={selectedCollection}
          onChange={(e) => setSelectedCollection(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059] cursor-pointer"
        >
          <option value="All">{t('filterAllCollections')}</option>
          <option value="NEW ARRIVALS">{translateCollection('NEW ARRIVALS')}</option>
          <option value="SIGNATURE ABAYAS">{translateCollection('SIGNATURE ABAYAS')}</option>
          <option value="EID COLLECTION">{translateCollection('EID COLLECTION')}</option>
          <option value="RAMADAN EDIT">{translateCollection('RAMADAN EDIT')}</option>
        </select>
      </div>

      {/* Fabric Filter */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">
          {t('filterFabric')}
        </label>
        <select
          value={selectedFabric}
          onChange={(e) => setSelectedFabric(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059] cursor-pointer"
        >
          <option value="All">{t('filterAllFabrics')}</option>
          <option value="Japanese Royal Nida">{translateFabric('Japanese Royal Nida')}</option>
          <option value="Dubai Luxury Crepe">{translateFabric('Dubai Luxury Crepe')}</option>
          <option value="French Crushed Organza">{translateFabric('French Crushed Organza')}</option>
          <option value="Pure Raw Silk">{translateFabric('Pure Raw Silk')}</option>
          <option value="Natural Washed Linen">{translateFabric('Natural Washed Linen')}</option>
          <option value="Italian Shimmer Chiffon">{translateFabric('Italian Shimmer Chiffon')}</option>
          <option value="Crushed Velvet & Silk">{translateFabric('Crushed Velvet & Silk')}</option>
        </select>
      </div>

      {/* Sort By */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">
          {t('sortBy')}
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059] cursor-pointer"
        >
          <option value="featured">{t('sortFeatured')}</option>
          <option value="price-low">{t('sortPriceAsc')}</option>
          <option value="price-high">{t('sortPriceDesc')}</option>
          <option value="rating">{t('sortRating')}</option>
          <option value="newest">{t('sortNewest')}</option>
        </select>
      </div>

      {/* Max Price Slider */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-[10px] text-stone-400 uppercase font-bold">{t('filterPriceRange')}</label>
          <span className="text-[#C5A059] font-bold">{formatPrice(priceRange)}</span>
        </div>
        <input
          type="range"
          min="299"
          max="1500"
          step="50"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-[#C5A059] cursor-pointer"
        />
        <div className="flex justify-between text-[9px] text-stone-500 mt-1">
          <span>{formatPrice(299)}</span>
          <span>{formatPrice(1500)}+</span>
        </div>
      </div>

    </div>
  );
};
