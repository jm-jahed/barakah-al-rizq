'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BarakahProduct } from '@/data/barakahData';

interface ProductsGridProps {
  products: BarakahProduct[];
  onSelectProduct: (product: BarakahProduct) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({ 
  products, 
  onSelectProduct, 
  onOpenQuoteModal 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'FRUITS', 'VEGETABLES', 'SPICES', 'PULSES', 'RICE & GRAINS', 'DRY FOOD'];

  const filteredProducts = selectedCategory === 'ALL'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-white text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
              WHOLESALE PRODUCT CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight">
              Our Foodstuff Products
            </h2>
            <p className="text-gray-600 text-base font-light">
              Directly imported and regionally sourced fresh fruits, vegetables, pulses, rice, whole spices, and dry foodstuffs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#063D24] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat === 'ALL' ? `All Products (${products.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 22 Products Grid with Smooth Layout Transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-[#F8FAF8] border border-emerald-200 overflow-hidden shadow-md flex flex-col justify-between hover:border-emerald-400 transition-all group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 font-mono text-[10px] font-bold">
                      {prod.category}
                    </div>
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 text-[#063D24] font-mono text-[10px] font-semibold shadow-sm">
                      Origin: {prod.origin}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-[10px] font-mono text-amber-700 font-bold block mb-1">
                      {prod.arabicName}
                    </span>
                    
                    <h3 className="text-lg font-bold text-[#063D24] mb-2 group-hover:text-amber-600 transition-colors font-sans">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-light mb-4 line-clamp-2">
                      {prod.description}
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-emerald-200 mb-4 flex items-center justify-between font-mono text-xs shadow-sm">
                      <span className="text-gray-500">UNIT:</span>
                      <span className="text-[#063D24] font-black">{prod.unit}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-5 pt-0 flex gap-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="flex-1 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#063D24] font-bold text-xs font-mono transition-all border border-gray-200"
                  >
                    VIEW DETAILS
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(prod.name)}
                    className="flex-1 py-2.5 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span className="text-amber-300">QUOTE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};