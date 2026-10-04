'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Key, MapPin, Star, Award, CheckCircle2 } from 'lucide-react';
import { STAYORA_BRAND } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface StayoraHeroProps {
  onOpenEstimateModal: () => void;
}

export const StayoraHero: React.FC<StayoraHeroProps> = ({ onOpenEstimateModal }) => {
  const { t, isRtl, formatNumber, formatPercent } = useStayoraLanguage();

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#133C3E] via-[#1A4B4E] to-[#0E2E30] text-white overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C85A32]/15 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-[#E07A5F] shrink-0" />
              <span className="text-xs font-semibold font-mono text-amber-200 uppercase tracking-wider">
                {t('heroBadge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
            >
              {isRtl ? (
                <>
                  حوّل عقارك في الإمارات إلى <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07A5F] via-amber-300 to-yellow-400">
                    بيت عطلات فاخر بأعلى العوائد.
                  </span>
                </>
              ) : (
                <>
                  Turn Your Property Into a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07A5F] via-amber-300 to-yellow-400">
                    Five-Star High-Yield Stay.
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-light"
            >
              {t('heroDesc')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenEstimateModal}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C85A32] to-[#E07A5F] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-2xl shadow-[#C85A32]/40 hover:scale-105 transition-all flex items-center gap-3 font-mono"
              >
                <span>{t('heroCtaCalculate')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <a
                href="#calculator"
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <span>{t('navEstimator')}</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-white/15 font-mono"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#E07A5F]">
                  {formatNumber(STAYORA_BRAND.managedPropertiesCount)}+
                </span>
                <span className="text-xs text-gray-300 font-sans font-medium">
                  {t('statManagedProperties')}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300">
                  {isRtl ? `٦٢ مليون+ د.إ` : `AED ${STAYORA_BRAND.revenueGeneratedAED}`}
                </span>
                <span className="text-xs text-gray-300 font-sans font-medium">
                  {t('statRevenueGenerated')}
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">
                  {formatPercent(STAYORA_BRAND.avgOccupancyPercent)}
                </span>
                <span className="text-xs text-gray-300 font-sans font-medium">
                  {t('statAvgOccupancy')}
                </span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-200/80 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E07A5F] shrink-0" />
              <span>{isRtl ? 'دبي • أبوظبي • رأس الخيمة' : 'DUBAI • ABU DHABI • RAS AL KHAIMAH'}</span>
            </div>
          </div>

          {/* Right Column Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0E2E30]/80 backdrop-blur-xl p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                  alt="STAYORA Luxury Property Showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Rating Badge */}
                <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-amber-300 font-bold`}>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                  <span>{isRtl ? '٤.٩٨ ★ مضيف سوبرهوست' : '4.98 ★ Superhost Certified'}</span>
                </div>

                {/* Floating Revenue Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-500/30 flex items-center justify-between font-mono">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                      {isRtl ? 'متوسط العائد الشهري الصافي للمالك' : 'AVERAGE OWNER YIELD'}
                    </span>
                    <span className="text-lg font-bold text-white">
                      {isRtl ? '١٤,٠٠٠ د.إ / شهرياً' : 'AED 14,000 / mo net'}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                    {isRtl ? '+٧٧٪ مقارنة بالسنوي' : '+77% vs Long Term'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};