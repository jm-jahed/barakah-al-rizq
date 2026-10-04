'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { ALL_210_PRODUCE_PRODUCTS, ProduceProduct } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface DealsSectionProps {
  onQuickView: (p: ProduceProduct) => void;
  onAddToCart: (p: ProduceProduct) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({ onQuickView, onAddToCart }) => {
  const { t, isRtl, formatPrice } = useFreshauraLanguage();
  const deals = ALL_210_PRODUCE_PRODUCTS.filter((p) => p.isDailyDeal).slice(0, 4);

  return (
    <section id="deals" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-amber-500/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{isRtl ? 'عروض الحصاد اليومية والتخفيضات' : 'DAILY HARVEST OFFERS & FLASH SAVINGS'}</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
              {t('navDailyDeals')}
            </h2>
            <p className="text-base text-stone-200 font-light mt-2 max-w-xl">
              {isRtl
                ? 'تخفيضات لفترة محدودة على التوتيات الموسمية، الورقيات المائية، الأفوكادو المستورد، وصناديق الحصاد العضوية.'
                : 'Limited-time discounts on seasonal berries, local hydroponic greens, imported avocados, and organic produce bundles.'}
            </p>
          </div>
        </div>

        {/* 4 Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((product) => {
            const name = isRtl ? product.nameAr || product.nameEn : product.nameEn;
            const origin = isRtl ? product.originAr || product.originEn : product.originEn;
            const unit = isRtl ? product.unitAr || product.unitEn : product.unitEn;

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#064E3B] rounded-3xl border border-amber-500/30 overflow-hidden shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group font-sans relative"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#042F2E] cursor-pointer" onClick={() => onQuickView(product)}>
                    <img
                      src={product.image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'} px-3 py-1 rounded-full bg-amber-950/90 text-amber-300 border border-amber-500/40 font-mono text-[10px] font-bold uppercase backdrop-blur-md`}>
                      {isRtl ? 'عرض اليوم' : 'DAILY DEAL'}
                    </span>
                  </div>

                  <div className="p-5 space-y-2 font-mono text-xs">
                    <span className="text-emerald-300 font-bold uppercase text-[10px] block">{origin}</span>
                    <h3
                      onClick={() => onQuickView(product)}
                      className="text-lg font-serif font-bold text-[#FBF9F5] group-hover:text-amber-300 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {name}
                    </h3>
                    <span className="text-stone-300 block">{unit}</span>

                    <div className="pt-2 flex items-baseline gap-2 font-mono">
                      <span className="text-xl font-serif font-bold text-amber-300">
                        {formatPrice(product.priceAED)}
                      </span>
                      {product.originalPriceAED && (
                        <span className="text-xs text-stone-400 line-through">
                          {formatPrice(product.originalPriceAED)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 font-mono text-xs flex gap-2">
                  <button
                    onClick={() => onQuickView(product)}
                    className="flex-1 py-2.5 rounded-xl bg-[#042F2E] border border-emerald-700 text-stone-200 hover:text-white flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t('quickView')}</span>
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold flex items-center justify-center gap-1 shadow-lg transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
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
