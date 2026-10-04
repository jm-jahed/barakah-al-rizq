'use client';

import React from 'react';
import { ROADFORGE_LEADERS } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const LeadershipSection: React.FC = () => {
  const { language, t } = useRoadforgeLanguage();

  return (
    <section className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('teamBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('teamTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {language === 'ar'
              ? 'نخبة من كبار مدراء العمليات اللوجستية، مهندسي غرف التحكم والتوجيه بالأقمار الصناعية، وخبراء السلامة على الطرق السريعة.'
              : 'Experienced logistics directors, GPS dispatch engineers, and roadside safety managers.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROADFORGE_LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#162032] border border-white/10 shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-[#0B132B]">
                  <img
                    src={leader.image}
                    alt={language === 'ar' && leader.nameAr ? leader.nameAr : leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {language === 'ar' && leader.nameAr ? leader.nameAr : leader.name}
                </h3>
                <span className="text-xs font-mono font-bold text-amber-400 block mb-2">
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