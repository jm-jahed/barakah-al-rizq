'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Layers,
  Zap,
  Truck,
  Plane,
  Ship,
  ShieldCheck,
  PackageCheck,
  Construction,
  Navigation,
  FileCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Eye,
  ThermometerSnowflake,
  Shield,
  Award
} from 'lucide-react';
import {
  LOGISTICS_PRODUCTS,
  LOGISTICS_CATEGORIES,
  LogisticsProductItem
} from '@/data/logisticsData';

interface LogisticsSolutionsCatalogProps {
  onSelectProduct: (product: LogisticsProductItem) => void;
  onBookProduct: (product: LogisticsProductItem) => void;
  onToggleCompare: (product: LogisticsProductItem) => void;
  comparedProductIds: string[];
}

export const LogisticsSolutionsCatalog: React.FC<LogisticsSolutionsCatalogProps> = ({
  onSelectProduct,
  onBookProduct,
  onToggleCompare,
  comparedProductIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEmirate, setSelectedEmirate] = useState<string>('all');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(10000);

  // Filter products based on category, search, emirate, and price
  const filteredProducts = useMemo(() => {
    return LOGISTICS_PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || product.categorySlug === selectedCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.title.toLowerCase().includes(q) ||
        product.sku.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.industryFit.some((ind) => ind.toLowerCase().includes(q));

      // Emirate match
      const matchesEmirate =
        selectedEmirate === 'all' ||
        product.popularInEmirates.includes(selectedEmirate);

      // Price match
      const matchesPrice = product.startingPriceAED <= maxPriceFilter;

      return matchesCategory && matchesSearch && matchesEmirate && matchesPrice;
    });
  }, [selectedCategory, searchQuery, selectedEmirate, maxPriceFilter]);

  return (
    <section id="catalog" className="py-24 bg-[#070B14] relative border-t border-slate-800/80">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>200+ Logistics Products & Solutions Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Specialized Transport Engineered For{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              Every Cargo Class.
            </span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Explore 200+ specialized logistics services across 10 mission-critical sectors. Every solution is backed by SLA guarantees, live telemetry tracking, and compliant UAE/GCC customs handling.
          </p>
        </div>

        {/* Category Selector Tabs Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-800 mb-8">
          {LOGISTICS_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-600/30'
                    : 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Multi-Filter Control Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* Live Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solutions by name, SKU (e.g. VLX-LM-001), industry, or payload..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-white absolute right-3.5 top-1/2 -translate-y-1/2"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Emirate Route Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedEmirate}
                onChange={(e) => setSelectedEmirate(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="all">All Emirates & GCC Routes</option>
                <option value="Dubai">Dubai Hubs (DIFC, South, JAFZA)</option>
                <option value="Abu Dhabi">Abu Dhabi (ADGM, Khalifa Port, ICAD)</option>
                <option value="Sharjah">Sharjah & Northern Emirates</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah & Fujairah</option>
              </select>
            </div>

            {/* Results Count & Reset */}
            <div className="sm:col-span-3 flex items-center justify-between sm:justify-end gap-3 text-xs font-mono">
              <span className="text-slate-400">
                Showing <strong className="text-cyan-400 font-bold">{filteredProducts.length}</strong> Solutions
              </span>
              {(searchQuery || selectedCategory !== 'all' || selectedEmirate !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setSelectedEmirate('all');
                  }}
                  className="text-cyan-400 hover:underline font-sans font-semibold"
                >
                  Reset
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <Layers className="w-12 h-12 text-slate-600 mx-auto" />
            <div className="text-xl font-bold text-white">No matching logistics solutions found</div>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Try adjusting your search query or selecting a different category tab above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSelectedEmirate('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 text-white text-xs font-bold"
            >
              Show All 200+ Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isCompared = comparedProductIds.includes(product.id);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0A0E1A] border border-slate-800/90 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 group relative overflow-hidden"
                >
                  {/* Glowing hover line accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Card Metadata Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700/80">
                        {product.sku}
                      </span>
                      {product.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                          <span>{product.badge}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Key Technical Specs Badges */}
                    <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-mono">SLA SPEED:</span>
                        <span className="font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          <span>{product.sla}</span>
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-mono">PAYLOAD:</span>
                        <span className="font-semibold text-slate-200 mt-0.5 block truncate">
                          {product.payloadCapacity}
                        </span>
                      </div>
                    </div>

                    {/* Features Snippets */}
                    <ul className="space-y-1.5 my-3 text-[11px] text-slate-300">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Compliance Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {product.compliance.map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/40 text-blue-300"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA & Pricing Bar */}
                  <div className="pt-5 mt-4 border-t border-slate-800/80">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-mono block">STARTING RATE</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-amber-400 font-bold">AED</span>
                          <span className="text-xl font-black text-white font-mono">
                            {product.startingPriceAED.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400 font-normal">
                            /{product.pricingUnit}
                          </span>
                        </div>
                      </div>

                      {/* Compare Toggle Button */}
                      <button
                        onClick={() => onToggleCompare(product)}
                        className={`text-[10px] font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                          isCompared
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60'
                            : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        {isCompared ? '✓ Compared' : '+ Compare'}
                      </button>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-700/80"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Quick View</span>
                      </button>

                      <button
                        onClick={() => onBookProduct(product)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-600/20"
                      >
                        <span>Book / Quote</span>
                        <ArrowRight className="w-3 h-3" />
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
