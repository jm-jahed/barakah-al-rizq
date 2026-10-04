'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, MapPin, Calculator } from 'lucide-react';
import { AUTOVANTA_BRAND } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface AutovantaHeroProps {
  onOpenBookingModal: () => void;
}

export const AutovantaHero: React.FC<AutovantaHeroProps> = ({ onOpenBookingModal }) => {
  const { language, t, toArabicDigits } = useAutovantaLanguage();

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#121315] via-[#181A1D] to-[#0F1012] text-white overflow-hidden font-sans">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#FF5722]/15 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/10 blur-[220px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-[#FF5722]" />
              <span className="text-xs font-semibold font-mono text-orange-200 uppercase tracking-widest">
                {t('heroBadge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]"
            >
              {t('heroTitleLine1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-300">
                {t('heroTitleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
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
                onClick={onOpenBookingModal}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-orange-950/50 hover:scale-105 transition-all flex items-center gap-3 font-mono"
              >
                <span>{t('heroCtaBook')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <a
                href="#quote-tool"
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 backdrop-blur-md font-mono"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>{t('heroCtaQuote')}</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-white/15"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#FF5722] font-mono">
                  {toArabicDigits('18,000+')}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statVehiclesServiced')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">
                  {toArabicDigits('4.9')} ★
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statCustomerRating')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {toArabicDigits(12)} {language === 'ar' ? 'شهراً' : 'Months'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statWarrantyMonths')}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
              <span>
                {language === 'ar'
                  ? 'دبي (القوز ٣ الصناعية) • الشارقة (المنطقة الصناعية ١٢)'
                  : 'DUBAI (AL QUOZ 3) • SHARJAH (INDUSTRIAL AREA 12)'}
              </span>
            </div>
          </div>

          {/* Right Column Visual Workshop Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#181A1D]/90 backdrop-blur-xl p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
                  alt="AUTOVANTA Modern Workshop Bay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Rating Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-amber-300 font-bold font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{toArabicDigits('4.9')} ★ {language === 'ar' ? 'مركز صيانة معتمد' : 'Certified Master Garage'}</span>
                </div>

                {/* Floating Warranty Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-orange-500/30 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {language === 'ar' ? 'ضمان الخدمة المعتمد' : 'SERVICE GUARANTEE'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">
                      {language === 'ar' ? 'تسعير مسبق • قطع أصلية OEM' : 'Upfront Quotes • Genuine OEM Parts'}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-orange-500/20 text-[#FF5722] text-xs font-mono font-bold border border-orange-500/40">
                    {language === 'ar' ? 'تسليم نفس اليوم' : 'Same-Day Available'}
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