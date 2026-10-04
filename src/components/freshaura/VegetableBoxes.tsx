'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { PREBUILT_VEG_BOXES, VegetableBox } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface VegetableBoxesProps {
  onAddVegBoxToCart: (box: VegetableBox) => void;
}

export const VegetableBoxes: React.FC<VegetableBoxesProps> = ({ onAddVegBoxToCart }) => {
  const { t, isRtl, formatPrice } = useFreshauraLanguage();

  return (
    <section id="veg-boxes" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
              {isRtl ? 'صناديق الخضار العائلية الموفرة' : 'FAMILY SAVINGS BUNDLES'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
              {t('navVegBoxes')}
            </h2>
            <p className="text-base text-stone-200 font-light mt-2 max-w-xl">
              {isRtl
                ? 'تشكيلات يومية متكاملة من الخضروات الأساسية والعضوية من مزارع الإمارات، توفر حتى ٣٥ درهم مقارنة بالأسعار المنفردة.'
                : 'Curated daily vegetable boxes featuring local UAE tomatoes, organic greens, potatoes, onions, and garlic with up to AED 35 savings.'}
            </p>
          </div>
        </div>

        {/* 4 Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREBUILT_VEG_BOXES.map((box) => {
            const name = isRtl ? box.nameAr : box.nameEn;
            const weight = isRtl ? box.weightAr : box.weightEn;
            const badge = isRtl ? box.badgeAr : box.badgeEn;
            const items = isRtl ? box.itemsIncludedAr : box.itemsIncludedEn;

            return (
              <motion.div
                key={box.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 overflow-hidden shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between group font-sans"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#042F2E]">
                    <img
                      src={box.image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-transparent to-transparent" />
                    
                    <span className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'} px-3 py-1 rounded-full bg-[#042F2E]/90 text-emerald-300 border border-emerald-500/40 font-mono text-[10px] font-bold uppercase backdrop-blur-md`}>
                      {badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-4 font-mono text-xs">
                    <div>
                      <span className="text-stone-300 text-[10px] uppercase font-bold block">
                        {isRtl ? `الوزن الصافي: ${weight}` : `NET WEIGHT: ${weight}`}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#FBF9F5] group-hover:text-emerald-300 transition-colors mt-0.5">
                        {name}
                      </h3>
                    </div>

                    {/* Included Items */}
                    <div className="space-y-1.5 pt-2 border-t border-emerald-800 text-[11px] font-sans text-stone-200">
                      <span className="text-emerald-300 font-mono text-[9px] font-bold block uppercase">
                        {isRtl ? 'محتويات الصندوق:' : "WHAT'S INSIDE:"}
                      </span>
                      {items.map((item) => (
                        <div key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 font-mono text-xs space-y-3">
                  <div className="flex items-baseline justify-between border-t border-emerald-800 pt-3">
                    <span className="text-stone-300 text-[10px] uppercase">
                      {isRtl ? 'سعر الصندوق:' : 'BOX PRICE:'}
                    </span>
                    <div className={isRtl ? 'text-left' : 'text-right'}>
                      <span className="text-2xl font-serif font-bold text-emerald-300 block">
                        {formatPrice(box.priceAED)}
                      </span>
                      <span className="text-[10px] text-amber-300 font-bold block">
                        {isRtl ? `وفر ${formatPrice(box.savingsAED)}` : `SAVE AED ${box.savingsAED}`}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddVegBoxToCart(box)}
                    className="w-full py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
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
