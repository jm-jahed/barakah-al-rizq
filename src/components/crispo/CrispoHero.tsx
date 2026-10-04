'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck, Award, Clock } from 'lucide-react';
import { CRISPO_BRAND } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface CrispoHeroProps {
  onOpenCheckout: () => void;
  onExploreMenu: () => void;
}

export const CrispoHero: React.FC<CrispoHeroProps> = ({ onOpenCheckout, onExploreMenu }) => {
  const { t, isRtl, formatPrice } = useCrispoLanguage();

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 bg-[#12100E] overflow-hidden flex items-center">
      
      {/* Background Energy Glow & Dynamic Slanted Rays */}
      <div className="absolute top-1/4 -right-10 rtl:-left-10 rtl:right-auto w-[600px] h-[600px] bg-[#E63946]/15 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 rtl:right-10 rtl:left-auto w-[500px] h-[500px] bg-[#FFC107]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1715] border border-[#E63946]/40 shadow-lg"
            >
              <Flame className="w-4 h-4 text-[#FFC107] animate-bounce" />
              <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest">
                {t('heroBadge')}
              </span>
            </motion.div>

            {/* Giant Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#FAF6EE] tracking-tight leading-[0.95] italic font-sans"
            >
              {isRtl ? (
                <>
                  قرمشة ذهبية <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FF4757] to-[#E63946]">
                    طعم يفوق
                  </span> <br />
                  التوقعات.
                </>
              ) : (
                <>
                  THE CRUNCH <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FF4757] to-[#E63946]">
                    YOU'VE BEEN
                  </span> <br />
                  WAITING FOR.
                </>
              )}
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-normal leading-relaxed"
            >
              {t('heroDesc')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenCheckout}
                className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] hover:from-[#d12e3b] hover:to-[#e62e00] text-white font-black text-sm uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-[#E63946]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{t('heroOrderDelivery')}</span>
              </button>

              <button
                onClick={onExploreMenu}
                className="px-8 py-4 rounded-2xl bg-[#1A1715] hover:bg-stone-800 border border-stone-700 text-[#FAF6EE] font-bold text-sm flex items-center gap-3 transition-all shadow-lg"
              >
                <span>{t('heroExploreMenu')}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 text-[#FFC107]" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[#FFC107]" />
                )}
              </button>
            </motion.div>

            {/* Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800 max-w-xl font-mono text-xs text-stone-300"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFC107] flex-shrink-0" />
                <span>{t('heroStatFresh')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFC107] flex-shrink-0" />
                <span>{t('heroStatTime')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFC107] flex-shrink-0" />
                <span>{t('qualityHalal')}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Food Photography Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#1A1715] group"
            >
              <div className="relative h-[380px] sm:h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop"
                  alt="Crispo Family Bucket"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent" />
              </div>

              {/* Floating Top Pill */}
              <div className="absolute top-5 right-5 rtl:right-auto rtl:left-5 bg-[#12100E]/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#FFC107]/40 shadow-2xl flex items-center gap-3">
                <Flame className="w-4 h-4 text-[#FFC107]" />
                <div>
                  <span className="text-xs font-black text-white block">{t('heroHotBadge')}</span>
                  <span className="text-[10px] text-stone-400 font-mono">{t('avgDeliveryTime')}</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#1A1715]/95 backdrop-blur-xl p-4 rounded-2xl border border-[#E63946]/40 shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-[#FAF6EE] font-serif block">
                    {isRtl ? 'بوكس كرانش العائلي (١٠ قطع)' : 'Family Crunch Bucket (10 Pcs)'}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {isRtl ? '١٠ قطع دجاج + ٤ بطاطس + ٢ كولسلو + ٤ مشروبات' : '10 Pcs Chicken + 4 Fries + 2 Coleslaw + 4 Drinks'}
                  </span>
                </div>
                <span className="text-lg font-black text-[#FFC107] font-mono">
                  {formatPrice(89)}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
