'use client';

import React from 'react';
import { FRESHAURA_STATS } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const TrustSection: React.FC = () => {
  const { isRtl } = useFreshauraLanguage();

  return (
    <section className="py-20 bg-[#064E3B] border-y border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
          {FRESHAURA_STATS.map((st) => (
            <div key={st.labelEn} className="space-y-2">
              <span className="text-3xl sm:text-5xl font-black text-emerald-300 block">
                {isRtl ? st.valueAr : st.valueEn}
              </span>
              <span className="text-xs text-stone-200 uppercase font-sans font-medium block">
                {isRtl ? st.labelAr : st.labelEn}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
