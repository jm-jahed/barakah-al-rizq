'use client';

import React, { useState } from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const HowWeWork: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: t.journey.step1Title,
      desc: t.journey.step1Desc,
      icon: '⌨️',
      milestone: language === 'ar' ? 'إتقان سطر الأوامر وأدوات Git وهياكل البيانات الأساسية' : 'Git branch mastery, terminal CLI speed & core algorithms',
      badge: language === 'ar' ? 'الأسس والمعمارية' : 'Core CS & Git Sprints'
    },
    {
      step: '02',
      title: t.journey.step2Title,
      desc: t.journey.step2Desc,
      icon: '⚙️',
      milestone: language === 'ar' ? 'بناء ٤ تطبيقات تدريجية بمراجعة الكود من كبار المهندسين' : '4 production projects + weekly 1-on-1 GitHub PR reviews',
      badge: language === 'ar' ? 'بناء التطبيقات ومراجعة الكود' : 'Hands-On Architecture'
    },
    {
      step: '03',
      title: t.journey.step3Title,
      desc: t.journey.step3Desc,
      icon: '🚀',
      milestone: language === 'ar' ? 'نشر تطبيق سحابي حقيقي في بيئة إنتاج مع فريق سكرام' : 'Production SaaS deployed to AWS with full CI/CD pipelines',
      badge: language === 'ar' ? 'مشروع الإنتاج الحقيقي' : 'Agile Team Capstone'
    },
    {
      step: '04',
      title: t.journey.step4Title,
      desc: t.journey.step4Desc,
      icon: '🏆',
      milestone: language === 'ar' ? 'محاكاة المقابلات الحية وعرض المشاريع أمام مدراء التوظيف' : 'Live whiteboarding mocks & direct pitches to hiring CTOs',
      badge: language === 'ar' ? 'التوظيف ويوم العرض' : 'Demo Day & Placement'
    }
  ];

  return (
    <section id="journey" className="bg-[#070A12] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
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
                  ? 'bg-gradient-to-b from-[#121829] to-[#0D121F] border-[#38BDF8] ring-1 ring-sky-500/40 shadow-xl shadow-sky-500/5'
                  : 'bg-[#0D121F] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-[#38BDF8]">
                  {language === 'ar' ? `٠${idx + 1}` : s.step}
                </span>
                <span className="text-2xl">{s.icon}</span>
              </div>

              <span className="inline-block text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                {s.badge}
              </span>

              <h3 className="text-lg font-bold text-white mb-2">
                {s.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {s.desc}
              </p>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-emerald-400 font-medium font-mono">
                <span className="text-slate-400 block text-[10px] uppercase">{language === 'ar' ? 'المخرج المكتسب:' : 'Target Milestone:'}</span>
                {s.milestone}
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="bg-[#0D121F] border border-white/[0.08] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 text-center sm:text-start">
            <span className="font-bold text-white block mb-0.5 font-mono">
              {language === 'ar' ? 'جاهز لبدء المرحلة الأولى من تدريبك الهندسي؟' : 'Ready to begin Stage 01: Foundations?'}
            </span>
            <span>
              {language === 'ar'
                ? 'تحدث مع مستشار القبول لمناقشة خلفيتك التقنية وتحديد موعد مكالمة التقييم.'
                : 'Speak with our admissions engineers to audit your readiness and receive our pre-bootcamp prep modules.'}
            </span>
          </div>

          <div className="flex gap-3">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-md shadow-sky-500/20 transition-all cursor-pointer font-sans"
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
