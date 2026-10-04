'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FASHION_PRODUCTS, FashionProduct } from '@/data/fashionData';
import { Search, Heart, Eye, ShoppingBag } from 'lucide-react';

interface FashionProductsProps {
  onSelectProduct?: (product: FashionProduct) => void;
  onAddToCart?: (product: FashionProduct) => void;
  onToggleWishlist?: (product: FashionProduct) => void;
  wishlistIds?: string[];
}

export const FashionProducts: React.FC<FashionProductsProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const categories = ['All', 'Dresses', 'Abayas', 'Outerwear', 'Tops', 'Bottoms', 'Men', 'Occasion Wear', 'Accessories'];

  const filteredProducts = useMemo(() => {
    return FASHION_PRODUCTS.filter((prod) => {
      const matchCat = selectedCategory === 'All' || prod.category === selectedCategory;
      const matchQuery =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-24 bg-[#0D0B0A] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            ÉLANE ATELIER • READY TO WEAR
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            Product Discovery.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
            Explore contemporary dresses, minimal linen abayas, tailored blazers, and luxury accessories with transparent UAE AED sample pricing.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#161311] p-4 sm:p-6 rounded-2xl border border-amber-500/20 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs uppercase font-mono tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search silk, linen, abaya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0D0B0A] border border-amber-500/20 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors font-sans"
              />
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-[#0D0B0A] border border-amber-500/20 rounded-xl px-3 py-2 text-xs text-amber-200 font-mono focus:outline-none focus:border-amber-400"
            >
              <option value="featured">Sort: Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl bg-[#161311] border border-amber-500/15 overflow-hidden hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between shadow-xl"
                >
                  {/* Image Showcase Container */}
                  <div
                    className="relative h-80 w-full bg-[#0D0B0A] overflow-hidden cursor-pointer"
                    onClick={() => onSelectProduct?.(product)}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161311] via-transparent to-transparent opacity-60" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {product.isFeatured && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[9px] font-mono font-bold uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                      {product.isBestseller && !product.isFeatured && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] font-mono uppercase tracking-wider backdrop-blur-md">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist?.(product);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all z-10 ${
                        isWishlisted
                          ? 'bg-amber-500 border-amber-500 text-black'
                          : 'bg-black/40 border-white/20 text-white hover:bg-amber-500 hover:text-black hover:border-amber-500'
                      }`}
                      aria-label="Add to Wishlist"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>

                    {/* Quick View Floating Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct?.(product);
                        }}
                        className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-amber-400 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Details Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-amber-400/80 mb-1">
                        <span>{product.category}</span>
                        <span>{product.material}</span>
                      </div>

                      <h3
                        onClick={() => onSelectProduct?.(product)}
                        className="text-base font-serif text-white font-semibold mb-1 cursor-pointer hover:text-amber-300 transition-colors line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Color dots preview */}
                      <div className="flex items-center gap-1.5 my-2">
                        {product.colors.map((c) => (
                          <span
                            key={c.name}
                            className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                        <span className="text-[10px] text-gray-400 font-mono ml-1">
                          {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
                        </span>
                      </div>
                    </div>

                    {/* Pricing & Add to Cart */}
                    <div className="pt-3 border-t border-amber-500/10 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider block">
                          Sample AED Price
                        </span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="text-base font-bold text-white">
                            AED {product.price.toLocaleString()}
                          </span>
                          {product.oldPrice && (
                            <span className="text-xs text-gray-500 line-through">
                              AED {product.oldPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onAddToCart?.(product)}
                        className="p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 text-amber-300 hover:text-black transition-all group/btn"
                        aria-label="Add to Bag"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#161311] rounded-2xl border border-amber-500/15">
            <p className="text-gray-400 font-mono text-sm mb-4">No boutique fashion items match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
