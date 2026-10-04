'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle2,
  Thermometer
} from 'lucide-react';
import { COLD_CHAIN_JOURNEY_STEPS, FROZEN_BRAND } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

export const FrozenSupplyColdChainJourney: React.FC = () => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  return (
    <section id="cold-chain" className={`py-24 border-t transition-colors duration-200 relative overflow-hidden font-sans ${
      isDark ? 'bg-[#080E1A] border-slate-800' : 'bg-slate-100 border-slate-200'
    }`}>
      
      {/* Cold Tech Backdrop Grid */}
      <div className={`absolute inset-0 [background-size:32px_32px] opacity-20 pointer-events-none ${
        isDark ? 'bg-[radial-gradient(#1E293B_1px,transparent_1px)]' : 'bg-[radial-gradient(#CBD5E1_1px,transparent_1px)]'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono uppercase font-bold ${
            isDark ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-300 text-cyan-800'
          }`}>
            <Thermometer className="w-3.5 h-3.5" />
            <span>{isRtl ? 'هيكلية التبريد غير المنقطعة' : 'Unbroken Thermal Architecture'}</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t('coldChainTitle')}
          </h2>

          <p className={`text-sm sm:text-base font-normal leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t('coldChainSubtitle')}
          </p>
        </div>

        {/* 5 Stages Horizontal / Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {COLD_CHAIN_JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-5 rounded-2xl border shadow-lg flex flex-col justify-between space-y-4 group transition-all ${
                isDark
                  ? 'bg-[#0A1120] border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 hover:border-cyan-400'
              }`}
            >
              <div className="space-y-3">
                {/* Step Number & Temp Badge */}
                <div className="flex items-center justify-between font-mono">
                  <span className={`text-2xl font-black transition-colors ${
                    isDark ? 'text-slate-700 group-hover:text-cyan-400' : 'text-slate-300 group-hover:text-cyan-600'
                  }`}>
                    {step.step}
                  </span>
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${
                    isDark ? 'bg-cyan-950/80 border-cyan-500/30 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                  }`}>
                    {step.tempBadge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`text-base font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
                  }`}>
                    {isRtl && step.titleAr ? step.titleAr : step.title}
                  </h3>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-mono block mt-0.5">
                    {isRtl && step.subtitleAr ? step.subtitleAr : step.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-xs font-normal leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {isRtl && step.descAr ? step.descAr : step.desc}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isRtl ? 'تتبع حراري موثق' : 'Verified Traceability'}</span>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Hubs Overview Strip */}
        <div className={`mt-12 p-6 rounded-3xl border grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs ${
          isDark ? 'bg-[#050B14] border-cyan-900/30' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {FROZEN_BRAND.hubs.map((hub) => (
            <div key={hub.city} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-cyan-950 border-cyan-500/40 text-cyan-400' : 'bg-cyan-100 border-cyan-300 text-cyan-700'
              }`}>
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className={`text-xs font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{hub.city} Hub</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{hub.hub}</span>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold block mt-0.5">{hub.temp}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
