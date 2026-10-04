'use client';

import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { SKYVAULT_BRAND } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface SkyvaultFinalCTAProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const SkyvaultFinalCTA: React.FC<SkyvaultFinalCTAProps> = ({ onOpenContactModal }) => {
  const { lang, isRtl, t } = useSkyvaultLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-[#07090E] via-[#0D1118] to-black text-white relative overflow-hidden font-sans border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E5C378]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
          {t('final.tag')}
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          {t('final.title')}
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          {t('final.subtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenContactModal()}
            className="px-8 py-4 rounded-2xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3"
          >
            <span>{t('final.ctaProposal')}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          <a
            href={SKYVAULT_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('final.ctaWhatsapp')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};