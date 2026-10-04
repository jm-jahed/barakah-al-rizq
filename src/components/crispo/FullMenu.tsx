'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Flame, Search } from 'lucide-react';
import { CRISPO_PRODUCTS, CrispoProduct } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface FullMenuProps {
  activeCategory: string;
  onAddToCart: (product: CrispoProduct) => void;
  onOpenProductModal: (product: CrispoProduct) => void;
}

export const FullMenu: React.FC<FullMenuProps> = ({
  activeCategory,
  onAddToCart,
  onOpenProductModal,
}) => {
  const { t, isRtl, formatPrice, translateProduct, translateCategory } = useCrispoLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = CRISPO_PRODUCTS.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const translated = translateProduct(p);
      const matchEng = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      const matchArb = translated.name.toLowerCase().includes(q) || translated.description.toLowerCase().includes(q);
      if (!matchEng && !matchArb) return false;
    }
    return true;
  });

  return (
    <section id="menu" className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header & Live Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#FAF6EE] italic font-sans">
              {activeCategory === 'All' ? t('fullMenuTitle') : translateCategory(activeCategory)}
            </h2>
            <span className="px-3 py-1 rounded-full bg-[#E63946]/15 border border-[#E63946]/30 text-[#E63946] font-mono text-xs font-bold">
              {t('showingCount', { count: filteredProducts.length })}
            </span>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchMenu')}
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 rounded-2xl bg-[#1A1715] border border-stone-800 text-[#FAF6EE] text-xs font-sans focus:outline-none focus:border-[#E63946]"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((rawProduct) => {
              const product = translateProduct(rawProduct);

              return (
                <motion.div
                  layout
                  key={rawProduct.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1A1715] rounded-3xl border border-stone-800 p-5 shadow-xl hover:border-[#E63946]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Image */}
                    <div
                      onClick={() => onOpenProductModal(rawProduct)}
                      className="relative h-48 rounded-2xl overflow-hidden cursor-pointer mb-4 bg-[#12100E]"
                    >
                      <img
                        src={rawProduct.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent" />

                      {rawProduct.isSpicy && (
                        <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 text-[10px] font-mono font-black px-2.5 py-1 rounded-full bg-[#E63946] text-white flex items-center gap-1 shadow-md">
                          🔥 {t('spicyBadge')}
                        </span>
                      )}

                      <span className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 text-[10px] font-mono text-stone-300 bg-black/70 px-2 py-0.5 rounded backdrop-blur-md">
                        {rawProduct.calories} {t('caloriesLabel')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#FFC107] uppercase">
                        {translateCategory(rawProduct.category)} #{rawProduct.code}
                      </span>
                    </div>

                    <h3
                      onClick={() => onOpenProductModal(rawProduct)}
                      className="text-lg font-black text-[#FAF6EE] mb-2 font-sans cursor-pointer group-hover:text-[#FFC107] transition-colors leading-snug"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-400 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing & Add */}
                  <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-3 font-mono">
                    <span className="text-xl font-black text-[#FFC107]">
                      {formatPrice(rawProduct.priceAED)}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenProductModal(rawProduct)}
                        className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-sans font-bold"
                      >
                        {t('customizeOrder')}
                      </button>

                      <button
                        onClick={() => onAddToCart(rawProduct)}
                        className="px-4 py-2 rounded-xl bg-[#E63946] hover:bg-[#FF4757] text-white font-sans text-xs font-black uppercase flex items-center gap-1 shadow-md active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{t('addToCart')}</span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
