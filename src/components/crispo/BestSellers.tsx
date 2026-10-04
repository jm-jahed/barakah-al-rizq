'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Plus, Heart, ShoppingBag } from 'lucide-react';
import { CRISPO_PRODUCTS, CrispoProduct } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface BestSellersProps {
  onAddToCart: (product: CrispoProduct) => void;
  onOpenProductModal: (product: CrispoProduct) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ onAddToCart, onOpenProductModal }) => {
  const { t, isRtl, formatPrice, translateProduct } = useCrispoLanguage();
  const bestSellers = CRISPO_PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <section className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
              {t('bestSellersTitle')}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] tracking-tight italic font-sans mt-4">
              {isRtl ? 'المفضلة لدى الجميع.' : 'THE CRISPO FAVOURITES.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {t('bestSellersSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#FFC107]">
            <Flame className="w-4 h-4" />
            <span>{isRtl ? 'تم طلبها أكثر من 4,500 مرة هذا الأسبوع' : 'ORDERED OVER 4,500+ TIMES THIS WEEK'}</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((rawProduct) => {
            const product = translateProduct(rawProduct);

            return (
              <motion.div
                key={rawProduct.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1A1715] rounded-3xl border border-stone-800 overflow-hidden shadow-xl hover:border-[#E63946]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Media Image */}
                  <div
                    onClick={() => onOpenProductModal(rawProduct)}
                    className="relative h-56 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={rawProduct.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 text-[10px] font-mono font-black px-2.5 py-1 rounded-full bg-[#E63946] text-white shadow-md">
                      ★ {t('bestSellerBadge')}
                    </span>

                    <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-[10px] font-mono text-stone-300 bg-[#12100E]/80 px-2 py-0.5 rounded-md backdrop-blur-md">
                      {rawProduct.calories} {t('caloriesLabel')}
                    </span>
                  </div>

                  <div className="p-6">
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
                </div>

                {/* Price & Add to Cart Footer */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 font-mono">
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase">
                      {isRtl ? 'السعر' : 'PRICE'}
                    </span>
                    <span className="text-xl font-black text-[#FFC107]">
                      {formatPrice(rawProduct.priceAED)}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(rawProduct)}
                    className="px-4 py-2.5 rounded-xl bg-[#E63946] hover:bg-[#FF4757] text-white font-sans text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t('addToCart')}</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
