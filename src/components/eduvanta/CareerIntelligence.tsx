'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';

export const CareerIntelligence: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const pillars = [
    {
      id: 'pm',
      title: t.careerIntel.pillar1Title,
      desc: t.careerIntel.pillar1Desc,
      icon: '🏗️',
      badge: language === 'ar' ? 'البنية التحتية والمشاريع الذكية' : 'Mega-Projects & Infrastructure'
    },
    {
      id: 'tax',
      title: t.careerIntel.pillar2Title,
      desc: t.careerIntel.pillar2Desc,
      icon: '📊',
      badge: language === 'ar' ? 'ضريبة الشركات ٩٪ والتحليل المالي' : '9% Corporate Tax & Audit Readiness'
    },
    {
      id: 'hr',
      title: t.careerIntel.pillar3Title,
      desc: t.careerIntel.pillar3Desc,
      icon: '👥',
      badge: language === 'ar' ? 'مستهدفات التوطين ولوائح العمل' : 'MoHRE & Emiratization Compliance'
    },
    {
      id: 'fintech',
      title: t.careerIntel.pillar4Title,
      desc: t.careerIntel.pillar4Desc,
      icon: '💳',
      badge: language === 'ar' ? 'الابتكار المصرفي والتقنية المالية' : 'FinTech & Open Banking Rails'
    }
  ];

  return (
    <section className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.careerIntel.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.careerIntel.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.careerIntel.subtitle}
          </p>
        </div>

        {/* 4 Market Demand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, idx) => (
            <div
              key={p.id}
              className="bg-[#0D1118] border border-white/[0.08] hover:border-[#E5C378]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? `٠${idx + 1}` : `0${idx + 1}`}
                  </span>
                </div>

                <span className="inline-block text-[10.5px] font-bold text-[#E5C378] uppercase tracking-wider mb-2">
                  {p.badge}
                </span>

                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#E5C378] transition-colors leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.05]">
                <a
                  href="#courses"
                  className="text-xs font-semibold text-slate-300 hover:text-[#E5C378] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === 'ar' ? 'عرض البرامج المرتبطة' : 'Explore Aligned Programs'}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Intelligence Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#11161F] via-[#151D2A] to-[#11161F] border border-[#E5C378]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center sm:text-start">
            <h4 className="text-sm font-bold text-white mb-1">
              {language === 'ar' ? 'تحديث ربع سنوي للمناهج التدريبية' : 'Quarterly Curriculum Intelligence Updates'}
            </h4>
            <p className="text-xs text-slate-300">
              {language === 'ar'
                ? 'يقوم المجلس الاستشاري الأكاديمي بمراجعة وتعديل محتوى المسارات التدريبية فصلياً لمواكبة أحدث القوانين والقرارات التنظيمية في الدولة.'
                : 'Our Academic Advisory Board continuously refines course syllabi to match emerging UAE ministerial decrees and commercial standards.'}
            </p>
          </div>

          <a
            href="#enroll"
            className="px-6 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 shrink-0 text-center cursor-pointer"
          >
            {language === 'ar' ? 'استشر خبير المسار' : 'Consult Market Advisor'}
          </a>
        </div>
      </div>
    </section>
  );
};
