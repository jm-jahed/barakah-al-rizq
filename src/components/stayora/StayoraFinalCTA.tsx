'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { STAYORA_BRAND } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface StayoraFinalCTAProps {
  onOpenEstimateModal: () => void;
}

export const StayoraFinalCTA: React.FC<StayoraFinalCTAProps> = ({ onOpenEstimateModal }) => {
  const { language, t } = useStayoraLanguage();

  return (
    <section className="py-24 bg-gradient-to-r from-[#C85A32] via-[#D86840] to-[#E07A5F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest inline-block">
          {language === 'ar' ? 'ضاعف عوائد تأجير عقارك السياحي اليوم' : 'MAXIMIZE YOUR SHORT-TERM YIELD TODAY'}
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          {t('finalCtaTitle')}
        </h2>

        <p className="text-lg sm:text-xl text-amber-100 font-light max-w-2xl mx-auto">
          {t('finalCtaSubtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenEstimateModal}
            className="px-8 py-4 rounded-2xl bg-[#133C3E] hover:bg-[#0E2E30] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3"
          >
            <span>{t('finalCtaButton')}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          <a
            href={STAYORA_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('finalCtaWhatsapp')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};