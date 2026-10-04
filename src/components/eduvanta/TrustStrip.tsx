'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const TrustStrip: React.FC = () => {
  const { language } = useEduvantaLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#090D14] border-b border-white/[0.06] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-start max-w-sm">
            <h4 className="text-xs font-bold text-slate-300 tracking-wider uppercase mb-1">
              {t.trustStrip.trustedBy}
            </h4>
            <p className="text-[11px] text-slate-400">
              {t.trustStrip.subtext}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto">
            {EDUVANTA_DATA.trustLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#E5C378]/30 transition-all group"
              >
                <span className="font-mono font-bold text-sm sm:text-base text-slate-300 tracking-widest group-hover:text-[#E5C378] transition-colors">
                  {logo.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 tracking-tight">
                  {language === 'ar' ? logo.tagAr : logo.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
