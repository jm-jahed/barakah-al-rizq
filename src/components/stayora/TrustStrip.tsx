'use client';

import React from 'react';
import { STAYORA_PLATFORMS } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const TrustStrip: React.FC = () => {
  const { t, isRtl } = useStayoraLanguage();

  return (
    <section className="py-10 bg-[#0E2E30] border-y border-amber-500/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
          {t('trustTitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {STAYORA_PLATFORMS.map((platform, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#E07A5F]/50 transition-all group"
            >
              <span className="text-sm font-bold text-white group-hover:text-[#E07A5F] transition-colors font-sans tracking-tight">
                {isRtl ? platform.nameAr || platform.name : platform.name}
              </span>
              <span className="text-[10px] text-amber-300/80 font-mono font-medium mt-0.5">
                {isRtl ? platform.badgeAr || platform.badge : platform.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};