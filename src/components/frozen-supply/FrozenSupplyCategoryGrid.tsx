'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ArrowRight, Layers } from 'lucide-react';
import { FROZEN_CATEGORIES } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyCategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const FrozenSupplyCategoryGrid: React.FC<FrozenSupplyCategoryGridProps> = ({
  onSelectCategory
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  return (
    <section className={`py-20 border-y transition-colors duration-200 relative overflow-hidden ${
      isDark ? 'bg-[#080E1A] border-slate-800' : 'bg-slate-100 border-slate-200'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono uppercase font-bold mb-3 ${
              isDark 
                ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400' 
                : 'bg-cyan-50 border-cyan-300 text-cyan-800'
            }`}>
              <Layers className="w-3.5 h-3.5" />
              <span>{t('categoriesTitle')}</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {isRtl ? '8 نطاقات تبريد معتمدة ومخصصة' : '8 Certified Temperature Zones'}
            </h2>
            <p className={`text-sm sm:text-base max-w-xl font-normal mt-2 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t('categoriesSubtitle')}
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">216 Total Active SKUs</span> in Dubai Cold Hub
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FROZEN_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectCategory(cat.id)}
              className={`rounded-2xl border overflow-hidden shadow-lg cursor-pointer transition-all flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#0A1120] border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
                  : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-slate-300/60'
              }`}
            >
              {/* Category Image Header */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={cat.featuredImage}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-[#0A1120] via-transparent to-black/30'
                    : 'bg-gradient-to-t from-white/90 via-transparent to-black/20'
                }`} />
                
                {/* Temperature Tag */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow">
                  <Snowflake className="w-3 h-3 text-cyan-400" />
                  <span>{cat.tempZone}</span>
                </div>

                {/* SKU Count Tag */}
                <div className="absolute top-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300">
                  {cat.itemCount} SKUs
                </div>
              </div>

              {/* Category Content */}
              <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-lg font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
                  }`}>
                    {isRtl && cat.nameAr ? cat.nameAr : cat.name}
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono font-medium line-clamp-1">
                    {isRtl && cat.taglineAr ? cat.taglineAr : cat.tagline}
                  </p>
                  <p className={`text-xs font-normal mt-2 line-clamp-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {isRtl && cat.descriptionAr ? cat.descriptionAr : cat.description}
                  </p>
                </div>

                <div className={`pt-3 border-t flex items-center justify-between font-mono text-xs font-bold ${
                  isDark
                    ? 'border-slate-800/80 text-cyan-400 group-hover:text-cyan-300'
                    : 'border-slate-100 text-cyan-700 group-hover:text-cyan-600'
                }`}>
                  <span>{t('viewSector')}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                  }`} />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
