'use client';

import React from 'react';
import { STAYORA_LEADERS } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const LeadershipSection: React.FC = () => {
  const { language, t } = useStayoraLanguage();

  return (
    <section className="py-24 bg-[#F9F6F0] text-[#133C3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('teamBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#133C3E]">
            {t('teamTitle')}
          </h2>
          <p className="text-gray-700 text-base font-normal">
            {language === 'ar'
              ? 'نخبة من كبار مدراء العقارات في الإمارات، وخبراء تعظيم العوائد، وقادة عمليات الضيافة الفندقية ٥ نجوم.'
              : 'Seasoned UAE real estate directors, yield strategists, and 5-star hotel operations leaders.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STAYORA_LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-amber-900/10 shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-gray-200">
                  <img
                    src={leader.image}
                    alt={language === 'ar' && leader.nameAr ? leader.nameAr : leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#133C3E]">
                  {language === 'ar' && leader.nameAr ? leader.nameAr : leader.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#C85A32] block mb-2">
                  {language === 'ar' && leader.roleAr ? leader.roleAr : leader.role}
                </span>
                <span className="text-xs text-gray-600 font-medium block">
                  {language === 'ar' && leader.experienceAr ? leader.experienceAr : leader.experience}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4 text-[11px] text-gray-500 font-mono">
                {language === 'ar' && leader.specializationAr ? leader.specializationAr : leader.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};