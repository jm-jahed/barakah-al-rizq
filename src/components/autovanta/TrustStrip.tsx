'use client';

import React from 'react';
import { AUTOVANTA_FLEET_CLIENTS } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const TrustStrip: React.FC = () => {
  const { language, t } = useAutovantaLanguage();

  return (
    <section className="py-10 bg-[#181A1D] border-y border-orange-500/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
          {t('trustTitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
          {AUTOVANTA_FLEET_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#FF5722]/50 transition-all group"
            >
              <span className="text-sm font-bold text-white group-hover:text-[#FF5722] transition-colors font-sans tracking-tight">
                {language === 'ar' && client.nameAr ? client.nameAr : client.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono font-medium mt-0.5">
                {language === 'ar' && client.badgeAr ? client.badgeAr : client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};