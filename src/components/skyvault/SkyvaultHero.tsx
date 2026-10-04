'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Plane, Building2, MapPin, Sparkles, Award } from 'lucide-react';
import { SKYVAULT_BRAND } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface SkyvaultHeroProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const SkyvaultHero: React.FC<SkyvaultHeroProps> = ({ onOpenContactModal }) => {
  const { lang, isRtl, t } = useSkyvaultLanguage();

  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-b from-[#07090E] via-[#0D1118] to-[#07090E] text-white overflow-hidden font-sans border-b border-white/5">
      {/* Deep Aviation Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#E5C378]/5 blur-[220px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#3A506B]/10 blur-[200px] pointer-events-none rounded-full" />

      {/* Decorative Flight Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

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
                {t('hero.tag')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-sans"
            >
              {t('hero.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-amber-200 to-white">
                {t('hero.title2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              {lang === 'ar' ? SKYVAULT_BRAND.subheadingAr : SKYVAULT_BRAND.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenContactModal()}
                className="px-8 py-4 rounded-2xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-[#E5C378]/20 hover:scale-105 transition-all flex items-center gap-3 font-mono"
              >
                <span>{t('hero.ctaProposal')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <a
                href="#services"
                className="px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 backdrop-blur-md font-mono"
              >
                <span>{t('hero.ctaModules')}</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-white/10"
            >
              <div className="p-3 rounded-2xl bg-[#0D1118] border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-[#E5C378] font-mono">
                  {lang === 'ar' ? SKYVAULT_BRAND.aircraftManagedAr : SKYVAULT_BRAND.aircraftManaged}
                </span>
                <span className="text-xs text-slate-400 font-medium">{t('hero.managedFleet')}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#0D1118] border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-slate-200 font-mono">
                  {lang === 'ar' ? SKYVAULT_BRAND.flightHoursManagedAr : SKYVAULT_BRAND.flightHoursManaged}
                </span>
                <span className="text-xs text-slate-400 font-medium">{t('hero.flightHours')}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#0D1118] border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  {lang === 'ar' ? SKYVAULT_BRAND.gccaApprovedAr : SKYVAULT_BRAND.gccaApproved}
                </span>
                <span className="text-xs text-slate-400 font-medium">{t('hero.camoCert')}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E5C378] shrink-0" />
              <span>{t('hero.basesLabel')}</span>
            </div>
          </div>

          {/* Right Column Executive Hangar Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0D1118] p-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
                  alt="SKYVAULT Executive Aviation Hangar DWC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Rating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-[#E5C378] font-bold font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5C378]" />
                  <span>{lang === 'ar' ? 'اعتماد GCAA CAMO AWR-048' : 'GCAA Approved CAMO AWR-048'}</span>
                </div>

                {/* Floating Experience Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-[#E5C378]/30 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {t('hero.yieldBadge')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {t('hero.yieldDesc')}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#E5C378]/20 text-[#E5C378] text-[10px] font-mono font-bold border border-[#E5C378]/40 shrink-0">
                    {lang === 'ar' ? 'رخصة AOC' : 'AOC Approved'}
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