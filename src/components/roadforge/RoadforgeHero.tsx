'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, ShieldAlert, MapPin, ArrowRight } from 'lucide-react';
import { ROADFORGE_BRAND } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface RoadforgeHeroProps {
  onOpenRequestModal: (issue?: string) => void;
}

export const RoadforgeHero: React.FC<RoadforgeHeroProps> = ({ onOpenRequestModal }) => {
  const { language, t, toArabicDigits } = useRoadforgeLanguage();

  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-b from-[#0B132B] via-[#1C2541] to-[#0A0F1D] text-white overflow-hidden font-sans">
      {/* High-Visibility Emergency Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/15 blur-[220px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-amber-500/15 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Urgent Headline */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 backdrop-blur-md"
            >
              <ShieldAlert className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-semibold font-mono text-amber-300 uppercase tracking-widest">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-white">
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
                onClick={() => onOpenRequestModal()}
                className="px-8 py-4 rounded-2xl bg-[#DC2626] hover:bg-[#b91c1c] text-white font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-red-950/60 hover:scale-105 transition-all flex items-center gap-3 font-mono animate-pulse"
              >
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>{t('heroCtaDispatch')}</span>
              </button>

              <a
                href={ROADFORGE_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('whatsappSos')}</span>
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
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                  {toArabicDigits('35,000+')}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statRecoveriesCompleted')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {language === 'ar' ? `${toArabicDigits(24)} دقيقة` : ROADFORGE_BRAND.avgResponseMinutes}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statAvgResponseTime')}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                  {language === 'ar' ? '٢٤ ساعة / ٧ أيام' : ROADFORGE_BRAND.availability}
                </span>
                <span className="text-xs text-gray-400 font-medium">{t('statAvailability')}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                {language === 'ar'
                  ? 'دبي • أبوظبي • الشارقة • الطرق السريعة (E11, E311, E611, E44)'
                  : 'DUBAI • ABU DHABI • SHARJAH • HIGHWAYS (E11, E311, E611)'}
              </span>
            </div>
          </div>

          {/* Right Column Tow Truck Action Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-[#1C2541]/90 backdrop-blur-xl p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop"
                  alt="ROADFORGE Towing Flatbed in Action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating GPS Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-amber-300 font-bold font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {language === 'ar' ? 'توجيه إلكتروني لأقرب سطحة لموقعك' : 'GPS Tracked Nearest Unit Dispatch'}
                  </span>
                </div>

                {/* Floating Response SLA Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-red-500/30 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {language === 'ar' ? 'ضمان سرعة الوصول' : 'RESPONSE GUARANTEE'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">
                      {language === 'ar' ? 'متوسط وصول أقل من ٢٤ دقيقة' : 'Average < 24 Mins On-Site'}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenRequestModal()}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-mono font-bold transition-all flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? 'طلب فوري' : 'REQUEST HELP'}</span>
                    <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};