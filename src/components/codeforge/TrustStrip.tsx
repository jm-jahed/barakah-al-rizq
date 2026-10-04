'use client';

import React from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const TrustStrip: React.FC = () => {
  const { language } = useCodeforgeLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#050811] border-b border-white/[0.06] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-start max-w-sm">
            <h4 className="text-xs font-bold text-slate-300 tracking-wider uppercase mb-1 font-mono flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t.trustStrip.trustedBy}</span>
            </h4>
            <p className="text-[11px] text-slate-400">
              {t.trustStrip.subtext}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto">
            {CODEFORGE_DATA.trustLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-sky-500/30 transition-all group"
              >
                <span className="font-mono font-bold text-sm sm:text-base text-slate-300 tracking-widest group-hover:text-[#38BDF8] transition-colors">
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
