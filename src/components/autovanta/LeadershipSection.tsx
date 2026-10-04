'use client';

import React from 'react';
import { AUTOVANTA_LEADERS } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const LeadershipSection: React.FC = () => {
  const { language, t } = useAutovantaLanguage();

  return (
    <section className="py-24 bg-[#0F1012] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('teamBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('teamTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {language === 'ar'
              ? 'نخبة من كبار المهندسين والخبراء المعتمدين في فحص وبرمجة وتوضيب السيارات وإدارة الأساطيل.'
              : 'Experienced automotive engineers, workshop leads, and customer service directors.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AUTOVANTA_LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#181A1D] border border-white/10 shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-[#121315]">
                  <img
                    src={leader.image}
                    alt={language === 'ar' && leader.nameAr ? leader.nameAr : leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {language === 'ar' && leader.nameAr ? leader.nameAr : leader.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#FF5722] block mb-2">
                  {language === 'ar' && leader.roleAr ? leader.roleAr : leader.role}
                </span>
                <span className="text-xs text-gray-400 font-medium block">
                  {language === 'ar' && leader.experienceAr ? leader.experienceAr : leader.experience}
                </span>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-gray-400 font-mono">
                {language === 'ar' && leader.specializationAr ? leader.specializationAr : leader.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};