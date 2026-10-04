'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { AZURE_BRAND } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface AzureFinalCTAProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const AzureFinalCTA: React.FC<AzureFinalCTAProps> = ({ onOpenBookingModal }) => {
  const { language, t } = useAzureLanguage();

  return (
    <section className="py-24 bg-gradient-to-r from-[#071324] via-[#0B1A2F] to-[#040B16] text-white relative overflow-hidden font-sans border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
          {t('finalCtaBadge')}
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          {t('finalCtaTitle')}
        </h2>

        <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          {t('finalCtaSubtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3 hover:scale-105"
          >
            <span>{t('finalCtaModalBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={AZURE_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('finalCtaWhatsappBtn')}</span>
          </a>

          <a
            href={`tel:${AZURE_BRAND.phone.replace(/\s+/g, '')}`}
            className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
            dir="ltr"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{AZURE_BRAND.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};