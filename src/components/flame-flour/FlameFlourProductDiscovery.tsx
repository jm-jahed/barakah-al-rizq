'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowUpDown, ShieldCheck, Plus, Check, Info, SlidersHorizontal } from 'lucide-react';
import { BakeryProduct, BAKERY_PRODUCTS } from '@/data/flameFlourData';

interface FlameFlourProductDiscoveryProps {
  onSelectProduct: (product: BakeryProduct) => void;
  onAddToCart: (product: BakeryProduct) => void;
}

export const FlameFlourProductDiscovery: React.FC<FlameFlourProductDiscoveryProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = ['All', 'Bread', 'Croissants', 'Viennoiserie', 'Cakes', 'Pastries', 'Cookies', 'Breakfast', 'Gift Boxes'];
  const dietaryOptions = ['All', 'Organic', 'Vegetarian', 'Vegan', 'Nut Free', 'Dairy Free'];
  const availabilityOptions = ['All', 'Fresh from Oven', 'Available', 'Limited Batch', 'Baking Now'];

  const filteredProducts = useMemo(() => {
    return BAKERY_PRODUCTS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.flavorProfile.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesDietary = selectedDietary === 'All' || item.dietary.includes(selectedDietary as any);
      const matchesAvailability = selectedAvailability === 'All' || item.availability === selectedAvailability;

      return matchesSearch && matchesCategory && matchesDietary && matchesAvailability;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceAED - b.priceAED;
      if (sortBy === 'price-high') return b.priceAED - a.priceAED;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedDietary, selectedAvailability, sortBy]);

  const handleAdd = (product: BakeryProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>24 CRAFTED BAKES · DISCOVERY ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Explore the Artisan Collection
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            Filter by craft category, heritage grains, organic certification, and oven availability states.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#120f0d] p-5 sm:p-6 rounded-2xl border border-stone-800/80 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sourdough, croissants, pistachio, babka..."
                className="w-full bg-stone-900 border border-stone-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700/60 rounded-xl px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
              >
                {categories.map(c => (
                  <option key={c} value={c}>Category: {c}</option>
                ))}
              </select>
            </div>

            {/* Dietary Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedDietary}
                onChange={(e) => setSelectedDietary(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700/60 rounded-xl px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
              >
                {dietaryOptions.map(d => (
                  <option key={d} value={d}>Dietary: {d}</option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-stone-900 border border-stone-700/60 rounded-xl px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>
          </div>

          {/* Quick Dietary Pill Tags */}
          <div className="mt-4 pt-4 border-t border-stone-850 flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-stone-400 font-mono">Quick Filter:</span>
              {dietaryOptions.slice(1).map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(selectedDietary === diet ? 'All' : diet)}
                  className={`px-3 py-1 rounded-full border transition-all ${
                    selectedDietary === diet
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-medium'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>

            <div className="text-stone-400 font-mono">
              Showing <span className="text-amber-400 font-semibold">{filteredProducts.length}</span> of {BAKERY_PRODUCTS.length} Bakes
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-stone-900/30 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-lg font-serif">No bakery items match your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDietary('All');
                setSelectedAvailability('All');
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-stone-950 font-semibold text-xs rounded-xl hover:bg-amber-400"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isJustAdded = addedId === product.id;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectProduct(product)}
                  className="group relative bg-[#130f0d] hover:bg-[#181310] border border-stone-800/80 hover:border-amber-600/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/70"
                >
                  <div>
                    {/* Visual Card */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-900 border border-stone-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md border border-stone-700 text-amber-300">
                          {product.category}
                        </span>
                      </div>

                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-amber-950/80 border border-amber-700/50 text-amber-200">
                          {product.bakeStyle}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 flex gap-1 flex-wrap">
                        {product.dietary.slice(0, 2).map((d) => (
                          <span key={d} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-stone-950/80 text-stone-300 border border-stone-800">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="text-[11px] font-mono text-stone-400 mb-1">
                      {product.servingSize}
                    </div>
                    <h3 className="text-lg font-serif text-stone-100 group-hover:text-amber-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-400 line-clamp-2 leading-relaxed font-light">
                      {product.tagline}
                    </p>

                    <div className="mt-2.5 text-[11px] text-stone-400 bg-stone-900/60 px-2.5 py-1.5 rounded-lg border border-stone-850 truncate">
                      <span className="text-amber-400 font-medium">Crust/Crumb:</span> {product.texture}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-4 pt-3 border-t border-stone-850 flex items-center justify-between">
                    <div>
                      <span className="text-base font-serif font-bold text-amber-400">
                        AED {product.priceAED}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-800 transition-colors"
                        title="View Craft Profile"
                      >
                        <Info className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleAdd(product, e)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                          isJustAdded
                            ? 'bg-emerald-500 text-stone-950 font-bold'
                            : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm active:scale-95'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
