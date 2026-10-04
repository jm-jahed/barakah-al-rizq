'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import { FRESHAURA_CATEGORIES } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface CategoryShowcaseProps {
  onSelectCategory: (catName: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const { t, isRtl, formatNumber } = useFreshauraLanguage();

  return (
    <section id="categories" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
              {isRtl ? 'استكشف تشكيلات الحصاد الطازج' : 'EXPLORE OUR FRESH HARVEST SELECTIONS'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
              {t('catSectionTitle')}
            </h2>
            <p className="text-base text-stone-200 font-light mt-2 max-w-2xl">
              {t('catSectionSubtitle')}
            </p>
          </div>
        </div>

        {/* 10 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FRESHAURA_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectCategory(cat.nameEn)}
              className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 overflow-hidden shadow-xl hover:border-emerald-400 transition-all cursor-pointer flex flex-col justify-between group font-sans"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#042F2E]">
                  <img
                    src={cat.image}
                    alt={isRtl ? cat.nameAr : cat.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-transparent to-transparent" />
                  
                  <span className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} text-2xl p-2 rounded-2xl bg-[#042F2E]/90 border border-emerald-500/30 backdrop-blur-md`}>
                    {cat.icon}
                  </span>

                  <span className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md`}>
                    {formatNumber(cat.count)} {isRtl ? 'صنف' : 'Items'}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-[#FBF9F5] group-hover:text-emerald-300 transition-colors">
                    {isRtl ? cat.nameAr : cat.nameEn}
                  </h3>
                </div>
              </div>

              <div className="p-5 pt-0 font-mono text-xs text-emerald-400 font-bold flex items-center justify-between">
                <span>{isRtl ? 'تصفح الأصناف' : 'Browse Products'}</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
