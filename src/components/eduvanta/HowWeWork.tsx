'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const HowWeWork: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: t.journey.step1Title,
      desc: t.journey.step1Desc,
      icon: '🧭',
      outcome: language === 'ar' ? 'تحديد دقيق للمسار المهني واختيار البرنامج المناسب مع مستشارك الأكاديمي' : 'Targeted career diagnostics & optimal cohort alignment with an advisor',
      badge: language === 'ar' ? 'الاستشارة والتقييم' : 'Consultation & Diagnostics'
    },
    {
      step: '02',
      title: t.journey.step2Title,
      desc: t.journey.step2Desc,
      icon: '📝',
      outcome: language === 'ar' ? 'حجز فوري للمقعد في الدفعة وتأكيد خيارات السداد أو الرعاية المؤسسية' : 'Guaranteed cohort seat, onboarding pack & 0% installment plan setup',
      badge: language === 'ar' ? 'حجز المقعد والتسجيل' : 'Seat Allocation & Setup'
    },
    {
      step: '03',
      title: t.journey.step3Title,
      desc: t.journey.step3Desc,
      icon: '🎓',
      outcome: language === 'ar' ? 'اكتساب مهارات عملية ومناقشة دراسات حالة مستمدة من كبرى مشاريع الإمارات' : 'Hands-on executive mastery with senior GCC industry practitioner feedback',
      badge: language === 'ar' ? 'التطبيق العملي والمحاكاة' : 'Executive Masterclasses'
    },
    {
      step: '04',
      title: t.journey.step4Title,
      desc: t.journey.step4Desc,
      icon: '🏆',
      outcome: language === 'ar' ? 'شهادة مهنية معتمدة، تحديث الملف المهني، ودعم الترقية والتوظيف' : 'Accredited credential, LinkedIn badge & dedicated career advancement support',
      badge: language === 'ar' ? 'الاعتماد والترقية' : 'Credential & Promotion'
    }
  ];

  return (
    <section className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.journey.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.journey.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.journey.subtitle}
          </p>
        </div>

        {/* 4 Interactive Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${
                activeStep === idx
                  ? 'bg-gradient-to-b from-[#11161F] to-[#0D1118] border-[#E5C378] ring-1 ring-[#E5C378]/40 shadow-xl shadow-[#E5C378]/5'
                  : 'bg-[#0D1118] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-[#E5C378]">
                  {language === 'ar' ? `٠${idx + 1}` : s.step}
                </span>
                <span className="text-2xl">{s.icon}</span>
              </div>

              <span className="inline-block text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                {s.badge}
              </span>

              <h3 className="text-lg font-bold text-white mb-2">
                {s.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {s.desc}
              </p>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-emerald-400 font-medium">
                <span className="text-slate-400 block text-[10px] uppercase">{language === 'ar' ? 'المخرج المكتسب:' : 'Milestone:'}</span>
                {s.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="bg-[#0D1118] border border-white/[0.08] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 text-center sm:text-start">
            <span className="font-bold text-white block mb-0.5">
              {language === 'ar' ? 'هل أنت مستعد لبدء المرحلة الأولى؟' : 'Ready to begin Stage 01: Explore?'}
            </span>
            <span>
              {language === 'ar'
                ? 'تواصل مع مستشارنا الأكاديمي لمساعدتك في مواءمة خبراتك مع الشهادة الأنسب.'
                : 'Schedule a free 15-minute career alignment session with an academic admissions advisor.'}
            </span>
          </div>

          <div className="flex gap-3">
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 transition-all cursor-pointer"
            >
              <span>{t.hero.advisorCta}</span>
              <span className={isRtl ? 'rotate-180' : ''}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
