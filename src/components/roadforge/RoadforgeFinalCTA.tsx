'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ROADFORGE_BRAND } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface RoadforgeFinalCTAProps {
  onOpenRequestModal?: () => void;
}

export const RoadforgeFinalCTA: React.FC<RoadforgeFinalCTAProps> = ({ onOpenRequestModal }) => {
  const { language, t } = useRoadforgeLanguage();

  return (
    <section className="py-24 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-black/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest inline-block">
          {language === 'ar' ? 'خدمات إنقاذ السيارات على مدار الساعة' : '24/7 UAE HIGHWAY ROADSIDE ASSISTANCE'}
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          {t('finalCtaTitle')}
        </h2>

        <p className="text-lg sm:text-xl text-red-100 font-light max-w-2xl mx-auto">
          {t('finalCtaSubtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${ROADFORGE_BRAND.phone.replace(/\s+/g, '')}`}
            className="px-8 py-4 rounded-2xl bg-[#0B132B] hover:bg-[#1C2541] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-3 animate-pulse"
            dir="ltr"
          >
            <Phone className="w-4 h-4 text-yellow-300" />
            <span>{t('finalCtaCallBtn')}</span>
          </a>

          <a
            href={ROADFORGE_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('finalCtaWhatsappBtn')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};