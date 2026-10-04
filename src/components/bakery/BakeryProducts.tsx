'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cake, ShoppingBag, Eye, Heart, Clock, Star, Flame } from 'lucide-react';
import { BAKERY_PRODUCTS, BAKERY_CATEGORIES, BakeryProduct } from '@/data/bakeryData';

interface BakeryProductsProps {
  onSelectProduct: (product: BakeryProduct) => void;
  onAddToCart: (product: BakeryProduct) => void;
}

export const BakeryProducts: React.FC<BakeryProductsProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = BAKERY_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.frenchName && product.frenchName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.flavor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="products" className="py-24 bg-[#0A0807] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Cake className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              36+ Artisanal Creations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Our Bakery Catalogue.
          </h2>

          <p className="text-base text-gray-400">
            Handcrafted celebration cakes, delicate Parisian macarons, flakey pastries, and luxury dessert boxes.
          </p>

          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
            Sample Pricing — Concept Project Build
          </div>
        </div>

        {/* Category Filters & Search Bar */}
        <div className="space-y-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BAKERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-[#14100E] border border-white/10 text-gray-300 hover:text-white hover:border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Filter by cake, pistachio, chocolate, macaron..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14100E] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.05 }}
              className="rounded-3xl bg-[#14100E] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden bg-black cursor-pointer" onClick={() => onSelectProduct(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent opacity-60" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {product.isBestseller && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-mono font-extrabold uppercase">
                      BESTSELLER
                    </span>
                  )}
                  {product.isNew && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-mono font-extrabold uppercase">
                      NEW CREATION
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 font-mono font-extrabold text-sm">
                  AED {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-400/90 font-bold uppercase">
                      {product.frenchName || product.flavor}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" /> {product.prepTime}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="text-lg font-extrabold text-white font-serif group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center gap-1 border border-white/15"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" /> Details
                  </button>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add to Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
