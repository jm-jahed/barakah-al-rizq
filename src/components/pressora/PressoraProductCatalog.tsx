'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShieldCheck, ArrowRight, Layers, Tag, Eye } from 'lucide-react';
import { PRESSORA_PRODUCTS, PrintProduct } from '@/data/pressoraData';

interface PressoraProductCatalogProps {
  onSelectProduct: (product: PrintProduct) => void;
}

export const PressoraProductCatalog: React.FC<PressoraProductCatalogProps> = ({
  onSelectProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  const categories = [
    'All Products',
    'Business Stationery',
    'Marketing Materials',
    'Packaging & Labels',
    'Hospitality & Events',
    'Signage & Displays',
  ];

  const filteredProducts = useMemo(() => {
    return PRESSORA_PRODUCTS.filter((prod) => {
      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All Products' || prod.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="products" className="py-24 bg-[#0a0c10] text-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-[#1a2536]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            COMMERCIAL PRINT PRODUCTION CATALOG
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            24+ Print Formats. Infinite Detail.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            From precision corporate stationery to large-scale retail packaging and architectural signage. Choose a product to launch the custom print configurator.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-6 rounded-3xl bg-[#0e1420] border border-[#1e2e44] mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
              <input
                type="text"
                placeholder="What do you need printed? (e.g. cards, boxes, menus)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#090d14] border border-[#1b2b40] text-xs font-mono text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>

            <div className="text-xs font-mono text-[#64748b]">
              Displaying <strong className="text-[#38bdf8]">{filteredProducts.length}</strong> of {PRESSORA_PRODUCTS.length} Print Formats
            </div>
          </div>

          {/* Category Horizontal Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 border-t border-[#182638] scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0284c7] text-[#ffffff] font-bold shadow-md'
                    : 'bg-[#121a28] text-[#64748b] hover:text-[#cbd5e1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 24+ Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="group rounded-3xl bg-[#0d131e] border border-[#1a2b40] hover:border-[#38bdf8]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[10px] uppercase text-[#38bdf8] font-bold px-2.5 py-0.5 rounded bg-[#09101a] border border-[#15273d]">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="text-[10px] uppercase text-[#c084fc] font-bold px-2 py-0.5 rounded bg-[#27103a] border border-[#481d6d]">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors mb-1">
                  {product.name}
                </h3>

                <p className="text-xs font-mono text-[#64748b] mb-3">
                  {product.tagline}
                </p>

                <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Sub-spec pills */}
                <div className="space-y-1 text-[11px] font-mono text-[#64748b] p-3 rounded-xl bg-[#080d14] border border-[#142233]">
                  <div className="flex justify-between">
                    <span>Lead Time:</span>
                    <strong className="text-[#cbd5e1] font-normal">{product.leadTimeDays}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard Run:</span>
                    <strong className="text-[#cbd5e1] font-normal">{product.defaultQuantity.toLocaleString()} Units</strong>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#090f18] border-t border-[#152336] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono text-[#64748b]">Starts From</div>
                  <div className="text-lg font-bold font-mono text-[#f8fafc]">
                    AED {product.startingPriceAED.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProduct(product)}
                  className="px-4 py-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Configure</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
