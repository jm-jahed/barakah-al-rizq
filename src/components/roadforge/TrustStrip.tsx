'use client';

import React from 'react';
import { ROADFORGE_BADGES } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const TrustStrip: React.FC = () => {
  const { language, t } = useRoadforgeLanguage();

  return (
    <section className="py-10 bg-[#162032] border-y border-amber-500/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
          {t('trustTitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {ROADFORGE_BADGES.map((b, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:border-amber-500/50 transition-all group"
            >
              <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors font-sans tracking-tight">
                {language === 'ar' && b.nameAr ? b.nameAr : b.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono font-medium mt-0.5">
                {language === 'ar' && b.badgeAr ? b.badgeAr : b.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};