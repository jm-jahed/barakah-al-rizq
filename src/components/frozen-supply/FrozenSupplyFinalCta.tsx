'use client';

import React from 'react';
import { Snowflake, ArrowRight, MessageCircle, FileSpreadsheet } from 'lucide-react';
import { FROZEN_BRAND } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyFinalCtaProps {
  onExploreCatalog: () => void;
  onOpenCart: () => void;
}

export const FrozenSupplyFinalCta: React.FC<FrozenSupplyFinalCtaProps> = ({
  onExploreCatalog,
  onOpenCart
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  return (
    <section className={`py-24 border-t transition-colors duration-200 relative overflow-hidden font-sans ${
      isDark ? 'bg-[#080E1A] border-slate-800' : 'bg-slate-100 border-slate-200'
    }`}>
      
      {/* Background Cold Aura */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] blur-[200px] pointer-events-none rounded-full ${
        isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/20'
      }`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-cyan-500 mx-auto shadow-xl ${
          isDark ? 'bg-[#050B14] border-cyan-500/40' : 'bg-white border-cyan-300'
        }`}>
          <Snowflake className="w-8 h-8 animate-spin" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block">
            {isRtl ? 'توريد تجاري موثوق لكافة إمارات الدولة' : 'Reliable Foodservice Procurement Across 7 Emirates'}
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t('ctaTitle')}
          </h2>
          <p className={`text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t('ctaDesc')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs font-bold uppercase tracking-wider">
          <button
            onClick={onExploreCatalog}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 flex items-center gap-2.5 transition-all shadow-xl shadow-cyan-500/25 hover:scale-105"
          >
            <span>{t('heroExploreCatalog')}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={onOpenCart}
            className={`px-7 py-4 rounded-xl border flex items-center gap-2 transition-all shadow-lg hover:scale-105 ${
              isDark
                ? 'bg-[#050B14] hover:bg-slate-900 border-cyan-500/40 text-cyan-300'
                : 'bg-white hover:bg-slate-50 border-slate-300 text-cyan-800'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-cyan-500" />
            <span>{t('navRequestQuote')}</span>
          </button>

          <a
            href={FROZEN_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`px-7 py-4 rounded-xl border flex items-center gap-2 transition-all ${
              isDark
                ? 'bg-emerald-950 hover:bg-emerald-900 border-emerald-500/40 text-emerald-300'
                : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp RFP (+971 50)</span>
          </a>
        </div>

        {/* Footer Brand Notes */}
        <div className={`pt-8 border-t flex flex-wrap items-center justify-between text-xs font-mono gap-4 ${
          isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
        }`}>
          <div>
            {FROZEN_BRAND.name} • {FROZEN_BRAND.headquarters}
          </div>
          <div className="text-cyan-600 dark:text-cyan-400 font-bold">
            Live Telemetry Guaranteed: -18°C to -25°C
          </div>
        </div>

      </div>
    </section>
  );
};
