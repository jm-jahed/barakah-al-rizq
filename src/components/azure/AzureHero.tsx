'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { AZURE_BRAND } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface AzureHeroProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const AzureHero: React.FC<AzureHeroProps> = ({ onOpenBookingModal }) => {
  const { language, t, toArabicDigits } = useAzureLanguage();

  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-b from-[#06101E] via-[#0A1A2F] to-[#040B16] text-white overflow-hidden font-sans">
      {/* Nautical Ocean Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/15 blur-[220px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold font-mono text-amber-300 uppercase tracking-widest">
                {t('heroBadge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-sans"
            >
              {t('heroTitleLine1')} <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-white">
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
                onClick={() => onOpenBookingModal()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-amber-950/60 hover:scale-105 transition-all flex items-center gap-3 font-mono"
              >
                <span>{t('heroCtaPlanner')}</span>
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
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                  {language === 'ar' ? `${toArabicDigits(24)} يخت` : '24 Yachts'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statFleetCount')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-200 font-mono">
                  {language === 'ar' ? `+${toArabicDigits('8500')}` : '8,500+'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statChartersCompleted')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {language === 'ar' ? `★${toArabicDigits('4.9')}` : '4.9★'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statGuestRating')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                  {language === 'ar' ? `١٠٠٪` : '100%'}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statCrewExperience')}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {language === 'ar'
                  ? 'دبي مارينا (مرسى بيير ٧) • كورنيش أبوظبي • نخلة جميرا'
                  : 'DUBAI MARINA (PIER 7 BERTH) • ABU DHABI CORNICHE • PALM JUMEIRAH'}
              </span>
            </div>
          </div>

          {/* Right Column Superyacht Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-[#0D213A]/90 backdrop-blur-xl p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop"
                  alt="AZURE Luxury Superyacht Dubai Marina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Rating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>
                    {language === 'ar' ? 'طاقم مرخص وضيافة فندقية ٥ نجوم' : '5-Star Private Crew & Catering'}
                  </span>
                </div>

                {/* Floating Experience Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#071324]/90 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {language === 'ar' ? 'رحلات الغروب والاحتفالات' : 'SUNSET & CELEBRATION CHARTERS'}
                    </span>
                    <span className="text-sm font-bold text-white font-serif">
                      {language === 'ar' ? 'شامل القبطان والطاقم والوقود' : 'All-Inclusive Captain, Crew & Fuel'}
                    </span>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/40" dir="ltr">
                    {language === 'ar' ? `تبدأ من ${toArabicDigits(950)} د.إ/س` : 'From AED 950/hr'}
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