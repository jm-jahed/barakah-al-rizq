'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, ShieldCheck, MapPin, Compass } from 'lucide-react';
import { AEROVAULT_BRAND } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface AerovaultHeroProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const AerovaultHero: React.FC<AerovaultHeroProps> = ({ onOpenQuoteModal }) => {
  const { language, t, toArabicDigits, formatPrice } = useAerovaultLanguage();

  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-b from-[#07090E] via-[#0D1118] to-[#05070B] text-white overflow-hidden font-sans">
      {/* Aviation Runway Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[240px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-blue-900/15 blur-[220px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-[#E5C378]" />
              <span className="text-xs font-semibold font-mono text-[#E5C378] uppercase tracking-widest">
                {t('heroBadge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] font-sans"
            >
              {t('heroTitleLine1')} <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#F5E6BE] to-white">
                {t('heroTitleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-light"
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
                onClick={() => onOpenQuoteModal()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] text-black font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-amber-950/60 hover:scale-105 transition-all flex items-center gap-3 font-mono"
              >
                <span>{t('heroCtaCalculate')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#fleet"
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider font-mono transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <span>{t('heroCtaFleet')}</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/15"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#E5C378] font-mono">
                  {language === 'ar' ? `+${toArabicDigits(150)}` : '150+'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statFleetAccess')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-200 font-mono">
                  {language === 'ar' ? `+${toArabicDigits('5000')}` : '5,000+'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statAirportsCount')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {language === 'ar' ? `${toArabicDigits(90)} دقيقة` : '90 Mins'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statDispatchTime')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">
                  {language === 'ar' ? 'ARGUS ذهبي' : 'ARGUS Gold'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statSafetyRating')}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono pt-1">
              <MapPin className="w-4 h-4 text-[#E5C378] shrink-0" />
              <span>
                {language === 'ar'
                  ? 'صالات كبار الشخصيات: مطار آل مكتوم DWC • مطار دبي DXB • مطار البطين AUH'
                  : 'DUBAI (DXB / DWC EXECUJET FBO) • ABU DHABI (AUH AL BATEEN VIP TERMINAL)'}
              </span>
            </div>
          </div>

          {/* Right Column Jet Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-[#E5C378]/30 shadow-2xl bg-[#11161F]/90 backdrop-blur-xl p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
                  alt="AEROVAULT Luxury Private Jet Charter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Rating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-[#E5C378] font-bold font-mono">
                  <Plane className="w-3.5 h-3.5 text-[#E5C378]" />
                  <span>
                    {language === 'ar' ? 'أمان معتمد دولياً • طاقم طيارين مرخصين' : 'ARGUS Certified Safety Fleet'}
                  </span>
                </div>

                {/* Floating Experience Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#07090E]/90 backdrop-blur-md border border-[#E5C378]/30 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {language === 'ar' ? 'طيران تنفيذي مباشر' : 'EXECUTIVE PRIVATE JET'}
                    </span>
                    <span className="text-sm font-bold text-white font-mono">
                      {language === 'ar' ? 'دبي إلى لندن • جنيف • الرياض' : 'Dubai to London • Geneva • Riyadh'}
                    </span>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-[#E5C378]/20 text-[#E5C378] text-xs font-mono font-bold border border-[#E5C378]/40" dir="ltr">
                    {language === 'ar' ? `تبدأ من ${toArabicDigits('14000')} د.إ/س` : 'From AED 14,000/hr'}
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