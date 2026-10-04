'use client';

import React from 'react';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
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
  selectedFabric,
  setSelectedFabric,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  onReset,
}) => {
  return (
    <div className="bg-[#121212] p-5 rounded-2xl border border-stone-800 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-stone-300">
      
      {/* Category Filter */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">COLLECTION / CATEGORY</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059]"
        >
          <option value="All">All 100 Abaya Collections</option>
          <option value="Ramadan Edition">Ramadan & Eid Edition</option>
          <option value="Luxury Evening">Luxury Evening Couture</option>
          <option value="Everyday Minimal">Everyday Minimal</option>
          <option value="Embroidered Couture">Embroidered Couture</option>
          <option value="Silk & Satin">Liquid Silk & Satin</option>
          <option value="Kimono Style">Kimono Cut</option>
        </select>
      </div>

      {/* Fabric Filter */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">AUTHENTIC FABRIC</label>
        <select
          value={selectedFabric}
          onChange={(e) => setSelectedFabric(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059]"
        >
          <option value="All">All Fabrics</option>
          <option value="Dubai Nida">Dubai Nida</option>
          <option value="Raw Silk">Raw Silk</option>
          <option value="French Chiffon">French Chiffon</option>
          <option value="Natural Linen">Natural Linen</option>
          <option value="Liquid Satin">Liquid Satin</option>
          <option value="Organza">Organza</option>
        </select>
      </div>

      {/* Sort By */}
      <div>
        <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">SORT PRODUCTS</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-white font-serif font-bold focus:outline-none focus:border-[#C5A059]"
        >
          <option value="featured">Featured Selections</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-[10px] text-stone-400 uppercase font-bold">MAX PRICE (AED)</label>
          <span className="text-[#C5A059] font-bold">AED {priceRange.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="650"
          max="3500"
          step="100"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-[#C5A059] cursor-pointer"
        />
        <div className="flex justify-between text-[9px] text-stone-500 mt-1">
          <span>AED 650</span>
          <span>AED 3,500</span>
        </div>
      </div>

    </div>
  );
};
