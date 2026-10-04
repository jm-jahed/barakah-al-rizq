'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, ArrowRight, ShieldCheck, Scissors, Sparkles, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { NOURA_STATS, NOURA_PRODUCTS, NouraProduct } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface NouraHeroProps {
  onShopCollection: () => void;
  onExploreNewArrivals: () => void;
  onOpenCustomizer?: () => void;
  onOpenLookbook?: () => void;
  onQuickView?: (product: NouraProduct) => void;
}

export const NouraHero: React.FC<NouraHeroProps> = ({
  onShopCollection,
  onOpenCustomizer,
  onOpenLookbook,
  onQuickView,
}) => {
  const { isRtl, t, translateProductName, translateFabric, formatPrice } = useNouraLanguage();
  const featuredProducts = NOURA_PRODUCTS.slice(0, 6);
  const [currentIdx, setCurrentIdx] = useState(0);

  const activeProduct = featuredProducts[currentIdx] || featuredProducts[0] || NOURA_PRODUCTS[0];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % featuredProducts.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 bg-[#0A0A0A] overflow-hidden flex items-center">
      
      {/* Background Editorial Fashion Photography Overlay from Real Products */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeProduct.image || NOURA_PRODUCTS[0]?.image}
          alt="NOURA ABAYA Luxury Couture Dubai"
          className="w-full h-full object-cover opacity-20 scale-105 blur-sm transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/75" />
      </div>

      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#C5A059]/10 blur-[190px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#121212]/50 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121212] border border-[#C5A059]/40 shadow-xl"
            >
              <Crown className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.15em]">
                {t('heroBadge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#FAFAFA] tracking-tight leading-[1.05]"
            >
              {t('heroTitle1')} <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#E6DFD5]">
                {t('heroTitle2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-normal leading-relaxed"
            >
              {t('heroDesc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2 font-serif text-xs font-bold uppercase tracking-wider"
            >
              <button
                onClick={onShopCollection}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] hover:scale-105 text-black flex items-center gap-2.5 transition-all shadow-xl shadow-[#C5A059]/20 font-bold"
              >
                <span>{t('heroShopBtn')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              {onOpenCustomizer && (
                <button
                  onClick={onOpenCustomizer}
                  className="px-6 py-4 rounded-xl bg-[#121212] hover:bg-[#1a1a1a] border border-[#C5A059]/40 text-[#C5A059] flex items-center gap-2 transition-all shadow-lg hover:scale-105"
                >
                  <Scissors className="w-4 h-4 text-[#C5A059]" />
                  <span>{t('heroCustomizerBtn')}</span>
                </button>
              )}

              {onOpenLookbook && (
                <button
                  onClick={onOpenLookbook}
                  className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 flex items-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>{t('heroLookbookBtn')}</span>
                </button>
              )}
            </motion.div>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">248+</span>
                <span className="text-[10px] text-stone-400 uppercase block leading-tight">{t('statDesigns')}</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">100%</span>
                <span className="text-[10px] text-stone-400 uppercase block leading-tight">{t('statAtelier')}</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">7 Emirates</span>
                <span className="text-[10px] text-stone-400 uppercase block leading-tight">{t('statDelivery')}</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">4.9 ★</span>
                <span className="text-[10px] text-stone-400 uppercase block leading-tight">{t('statRating')}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Image Card - Featuring Real Scraped Posh Abaya Products */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#121212] group"
            >
              <div className="relative h-[530px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={translateProductName(activeProduct.name)}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                
                {/* Navigation Arrows for Featured Products */}
                <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#C5A059] hover:text-black transition-all pointer-events-auto shadow-lg"
                    aria-label="Previous Featured Abaya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#C5A059] hover:text-black transition-all pointer-events-auto shadow-lg"
                    aria-label="Next Featured Abaya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 bg-[#0A0A0A]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#C5A059]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <div>
                  <span className="text-[#C5A059] font-bold block">{isRtl ? 'خياطة إماراتية يدوية 100%' : '100% Authentic UAE Tailoring'}</span>
                  <span className="text-[10px] text-stone-400">{t('freeSheilaBadge')}</span>
                </div>
              </div>

              {/* Floating Bottom Card with Real Product Details */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#121212]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-800 shadow-2xl space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="truncate pr-2 rtl:pl-2 rtl:pr-0">
                    <span className="text-white font-serif font-bold text-sm block truncate">
                      {translateProductName(activeProduct.name)}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {translateFabric(activeProduct.fabric)} • {formatPrice(activeProduct.priceAED)}
                      {activeProduct.originalPriceAED && (
                        <span className="line-through text-stone-600 ml-1.5 rtl:mr-1.5 rtl:ml-0 font-normal">
                          {formatPrice(activeProduct.originalPriceAED)}
                        </span>
                      )}
                    </span>
                  </div>
                  {onQuickView && (
                    <button
                      onClick={() => onQuickView(activeProduct)}
                      className="px-3 py-1.5 rounded-xl bg-[#C5A059] hover:bg-[#d4af37] text-black font-sans font-bold text-xs flex items-center gap-1.5 shadow-md flex-shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t('quickView')}</span>
                    </button>
                  )}
                </div>

                {/* Delivery Badge & Pagination Dots */}
                <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-stone-400">{t('topBarDelivery').split('•')[0]}</span>
                  <div className="flex items-center gap-1.5">
                    {featuredProducts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIdx(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === currentIdx ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-stone-700'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-emerald-400 font-bold">{isRtl ? 'نفس اليوم بدبي' : 'SAME-DAY DUBAI'}</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
