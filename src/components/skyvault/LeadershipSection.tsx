'use client';

import React from 'react';
import { SKYVAULT_LEADERS } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const LeadershipSection: React.FC = () => {
  const { lang, t } = useSkyvaultLanguage();

  return (
    <section className="py-24 bg-[#07090E] text-white border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('team.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('team.title')}
          </h2>
          <p className="text-slate-400 text-base font-light">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKYVAULT_LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0D1118] border border-white/10 shadow-lg p-6 flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-[#11161F]">
                  <img
                    src={leader.image}
                    alt={lang === 'ar' ? leader.nameAr : leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white font-sans group-hover:text-[#E5C378] transition-colors">
                  {lang === 'ar' ? leader.nameAr : leader.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#E5C378] block mb-2">
                  {lang === 'ar' ? leader.roleAr : leader.role}
                </span>
                <span className="text-xs text-slate-400 font-medium block">
                  {lang === 'ar' ? leader.experienceAr : leader.experience}
                </span>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-400 font-mono">
                {lang === 'ar' ? leader.specializationAr : leader.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};