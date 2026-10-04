'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const LeadershipSection: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].leadership;

  return (
    <section id="leadership" className="py-24 bg-[#070D1E] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            👨‍🏫 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 4 Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALTAIR_ACADEMY_DATA.leadership.map((person, idx) => (
            <div
              key={idx}
              className="bg-[#0D1B3E]/80 rounded-3xl border border-amber-500/20 overflow-hidden group hover:border-amber-400/50 hover:bg-[#122452] transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-serif">
                    {isRtl ? person.nameAr : person.name}
                  </h3>
                  <span className="text-xs font-semibold text-amber-400 block mt-1 mb-2">
                    {isRtl ? person.roleAr : person.role}
                  </span>
                  <div className="text-[11px] text-slate-300 font-medium bg-[#070D1E] px-2.5 py-1 rounded-lg border border-slate-800 mb-3">
                    📜 {isRtl ? person.credentialsAr : person.credentials}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isRtl ? person.bioAr : person.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
