'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Search } from 'lucide-react';
import { PERFUME_PRODUCTS, PerfumeProduct } from '@/data/perfumeData';
import { PerfumeProductCard } from './PerfumeProductCard';

interface FragranceCollectionProps {
  wishlist: PerfumeProduct[];
  onToggleWishlist: (product: PerfumeProduct) => void;
  onAddToCart: (product: PerfumeProduct) => void;
  onQuickView: (product: PerfumeProduct) => void;
}

export const FragranceCollection: React.FC<FragranceCollectionProps> = ({
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Men', 'Women', 'Unisex', 'Oud', 'Bestsellers', 'New Arrivals'];

  const filteredProducts = PERFUME_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Bestsellers' && product.isBestseller) ||
      (selectedCategory === 'New Arrivals' && product.isNewArrival) ||
      product.category === selectedCategory;

    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.fragranceFamily.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.topNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.baseNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collection" className="py-24 bg-[#07090C] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-3">
              <Droplets className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Haute Parfumerie Catalog
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              The Fragrance Collection.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-2xl">
              12 handcrafted Extraits and Eaux de Parfum blending royal Cambodian oud, Grasse rose, and Australian sandalwood.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes (e.g. Saffron, Oud, Rose)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-72 bg-[#10141C] border border-white/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.some((item) => item.id === product.id);
              return (
                <PerfumeProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={isWishlisted}
                  onToggleWishlist={onToggleWishlist}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-[#10141C] border border-white/10 space-y-3">
            <Droplets className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="text-lg font-bold text-white font-serif">No Fragrances Found</h4>
            <p className="text-xs text-gray-400">Try adjusting your search notes or category filter.</p>
          </div>
        )}

        <div className="mt-8 text-center text-xs font-mono text-gray-400">
          Sample Product Catalog — Concept Build #11 • Demonstrating AED 2,499 E-Commerce Architecture
        </div>
      </div>
    </section>
  );
};
