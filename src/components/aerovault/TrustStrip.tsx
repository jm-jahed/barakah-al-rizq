'use client';

import React from 'react';
import { AEROVAULT_BADGES } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

export const TrustStrip: React.FC = () => {
  const { language, t } = useAerovaultLanguage();

  return (
    <section className="py-10 bg-[#0A0E17] border-y border-[#E5C378]/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-[#E5C378]/80 uppercase tracking-widest mb-6">
          {t('trustTitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {AEROVAULT_BADGES.map((b, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#11161F] border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#E5C378]/50 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-[#E5C378] transition-colors font-sans tracking-tight">
                {language === 'ar' ? b.nameAr : b.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono font-medium mt-0.5">
                {language === 'ar' ? b.badgeAr : b.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};