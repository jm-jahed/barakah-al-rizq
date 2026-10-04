'use client';

import React from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const LeadershipSection: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].leadership;

  return (
    <section id="leadership" className="py-24 bg-[#0A120D] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            👩‍⚕️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 4 Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LITTLE_HORIZON_DATA.leadership.map((person, idx) => (
            <div
              key={idx}
              className="bg-[#132219]/80 rounded-3xl border border-emerald-800/40 overflow-hidden group hover:border-amber-400/50 hover:bg-[#1A2F22] transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132219] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {isRtl ? person.nameAr : person.name}
                  </h3>
                  <span className="text-xs font-semibold text-amber-400 block mt-1 mb-2">
                    {isRtl ? person.roleAr : person.role}
                  </span>
                  <div className="text-[11px] text-emerald-300/90 font-medium bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/40 mb-3">
                    📜 {isRtl ? person.credentialsAr : person.credentials}
                  </div>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
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
