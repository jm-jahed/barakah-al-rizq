'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AUTOVANTA_BRAND } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface AutovantaFinalCTAProps {
  onOpenBookingModal: () => void;
}

export const AutovantaFinalCTA: React.FC<AutovantaFinalCTAProps> = ({ onOpenBookingModal }) => {
  const { language, t } = useAutovantaLanguage();

  return (
    <section className="py-24 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-black/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest inline-block">
          {language === 'ar' ? 'حافظ على سيارتك بأعلى كفاءة' : 'KEEP YOUR CAR RUNNING LIKE NEW'}
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          {t('finalCtaTitle')}
        </h2>

        <p className="text-lg sm:text-xl text-orange-100 font-light max-w-2xl mx-auto">
          {t('finalCtaSubtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-4 rounded-2xl bg-[#121315] hover:bg-[#181A1D] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3"
          >
            <span>{t('finalCtaButton')}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          <a
            href={AUTOVANTA_BRAND.whatsapp}
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