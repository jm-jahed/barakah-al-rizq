'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Snowflake,
  ShieldCheck,
  Truck,
  ArrowRight,
  Eye,
  Plus
} from 'lucide-react';
import { FROZEN_BRAND, FROZEN_METRICS, FROZEN_PRODUCTS, FrozenProduct, FROZEN_CATEGORIES } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyHeroProps {
  onExploreCatalog: () => void;
  onSelectCategory: (catId: string) => void;
  onQuickView: (product: FrozenProduct) => void;
  onAddToCart: (product: FrozenProduct) => void;
}

export const FrozenSupplyHero: React.FC<FrozenSupplyHeroProps> = ({
  onExploreCatalog,
  onSelectCategory,
  onQuickView,
  onAddToCart
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  const featuredSpotlight = FROZEN_PRODUCTS.filter(p => p.isFeatured).slice(0, 5);
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);

  const currentProduct = featuredSpotlight[activeSpotlightIdx] || FROZEN_PRODUCTS[0];

  return (
    <section className={`relative min-h-[92vh] pt-36 pb-20 overflow-hidden flex items-center transition-colors duration-200 ${
      isDark ? 'bg-[#050B14]' : 'bg-slate-50'
    }`}>
      
      {/* Cold Atmosphere Ambient Lighting & Grid */}
      <div className={`absolute inset-0 [background-size:24px_24px] pointer-events-none opacity-25 ${
        isDark 
          ? 'bg-[radial-gradient(#1E293B_1px,transparent_1px)]' 
          : 'bg-[radial-gradient(#CBD5E1_1px,transparent_1px)]'
      }`} />
      
      <div className={`absolute top-1/4 -left-20 w-[550px] h-[550px] blur-[180px] pointer-events-none rounded-full ${
        isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/20'
      }`} />
      <div className={`absolute bottom-10 right-10 w-[500px] h-[500px] blur-[190px] pointer-events-none rounded-full ${
        isDark ? 'bg-blue-700/10' : 'bg-blue-300/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono shadow-sm ${
                isDark 
                  ? 'bg-[#0A1120] border-cyan-500/30 text-cyan-300' 
                  : 'bg-white border-cyan-300 text-cyan-800'
              }`}
            >
              <Snowflake className="w-3.5 h-3.5 text-cyan-500 animate-spin" />
              <span className="font-bold tracking-wider uppercase">
                {t('heroBadge')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {t('heroTitle1')} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600">
                {t('heroTitle2')}
              </span>
            </motion.h1>

            {/* Clear Value Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {t('heroDesc')}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs font-bold uppercase tracking-wider"
            >
              <button
                onClick={onExploreCatalog}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 flex items-center gap-2.5 transition-all shadow-xl shadow-cyan-500/20 hover:scale-105"
              >
                <span>{t('heroExploreCatalog')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <a
                href={FROZEN_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`px-6 py-4 rounded-xl border flex items-center gap-2 transition-all hover:scale-105 ${
                  isDark
                    ? 'bg-[#0A1120] hover:bg-[#111C33] border-cyan-500/30 text-cyan-300'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-cyan-700 shadow-sm'
                }`}
              >
                <Truck className="w-4 h-4 text-cyan-500" />
                <span>{t('heroRequestRfq')}</span>
              </a>
            </motion.div>

            {/* Quick Category Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3"
            >
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
                {t('categoriesTitle')}:
              </span>
              <div className="flex flex-wrap gap-2">
                {FROZEN_CATEGORIES.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg border text-xs transition-all flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-slate-900/80 hover:bg-cyan-950/60 border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300'
                        : 'bg-white hover:bg-cyan-50 border-slate-200 hover:border-cyan-300 text-slate-700 hover:text-cyan-800 shadow-sm'
                    }`}
                  >
                    <span>{isRtl && cat.nameAr ? cat.nameAr : cat.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({cat.itemCount})</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Cold-Chain Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 border-t font-mono ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}
            >
              {FROZEN_METRICS.map((m) => (
                <div key={m.label} className="space-y-1">
                  <span className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 block">{m.value}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase block leading-tight">{m.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Product Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`relative rounded-3xl overflow-hidden border shadow-2xl group ${
                isDark 
                  ? 'border-cyan-900/40 bg-[#080E1A] shadow-black/80' 
                  : 'border-slate-200 bg-white shadow-slate-300/50'
              }`}
            >
              {/* Product Image Stage */}
              <div className="relative h-[460px] overflow-hidden bg-slate-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProduct.id}
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                
                {/* Cold Frost Overlay */}
                <div className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-[#080E1A] via-[#080E1A]/40 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/30 to-transparent'
                }`} />
                
                {/* Temperature Compliance Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-bold">{currentProduct.storageTemp}</span>
                </div>

                {/* Origin Flag Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Origin: {currentProduct.origin}</span>
                </div>
              </div>

              {/* Spotlight Product Details Bar */}
              <div className={`p-5 border-t space-y-4 ${
                isDark ? 'bg-[#0A1120] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono uppercase tracking-wider font-semibold block">
                      {currentProduct.category} • {currentProduct.sku}
                    </span>
                    <h3 className={`text-base font-bold mt-0.5 line-clamp-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {isRtl && currentProduct.nameAr ? currentProduct.nameAr : currentProduct.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                      Pack: {currentProduct.packSize} • MOQ: {currentProduct.moq} {currentProduct.unit}s
                    </p>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <span className="text-lg font-black text-cyan-600 dark:text-cyan-400 font-mono block">
                      AED {currentProduct.priceAED}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      ~AED {currentProduct.pricePerKgAED}/kg
                    </span>
                  </div>
                </div>

                {/* Actions & Pagination Dots */}
                <div className={`flex items-center justify-between pt-2 border-t ${
                  isDark ? 'border-slate-800/80' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5">
                    {featuredSpotlight.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSpotlightIdx(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeSpotlightIdx 
                            ? 'w-6 bg-cyan-500' 
                            : isDark ? 'w-1.5 bg-slate-700' : 'w-1.5 bg-slate-300'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQuickView(currentProduct)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                        isDark
                          ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                          : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 shadow-sm'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{t('quickView')}</span>
                    </button>
                    <button
                      onClick={() => onAddToCart(currentProduct)}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-sans font-bold flex items-center gap-1 transition-colors shadow-md shadow-cyan-500/20"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t('addToQuote')}</span>
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
