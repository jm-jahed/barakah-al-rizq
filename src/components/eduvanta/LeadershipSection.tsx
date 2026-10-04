'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const LeadershipSection: React.FC = () => {
  const { language } = useEduvantaLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.leadership.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.leadership.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* Leadership Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUVANTA_DATA.leadership.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#0D1118] border border-white/[0.08] hover:border-[#E5C378]/30 rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              {/* Photo Area */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={language === 'ar' ? member.nameAr : member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-mono font-bold text-[#E5C378] uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 border border-[#E5C378]/30 backdrop-blur-sm">
                    {language === 'ar' ? member.specializationAr : member.specialization}
                  </span>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#E5C378] transition-colors">
                    {language === 'ar' ? member.nameAr : member.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {language === 'ar' ? member.roleAr : member.role}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'ar' ? member.bioAr : member.bio}
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
