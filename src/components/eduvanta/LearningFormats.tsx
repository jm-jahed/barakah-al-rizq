'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';

export const LearningFormats: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const formats = [
    {
      id: 'inPerson',
      title: t.learningFormats.inPersonTitle,
      tag: t.learningFormats.inPersonTag,
      desc: t.learningFormats.inPersonDesc,
      icon: '🏛️',
      schedule: language === 'ar' ? 'أيام السبت (٩:٠٠ ص – ٤:٠٠ م)' : 'Saturdays (9:00 AM – 4:00 PM)',
      idealFor: language === 'ar' ? 'المديرون والتنفيذيون الباحثون عن شبكة علاقات قوية وتفاعل حضوري مباشر' : 'Executives seeking intensive boardroom simulations & high-value peer networking',
      features: [
        language === 'ar' ? 'قاعات تدريب تنفيذية بمجمع دبي للمعرفة وجزيرة المارية' : 'State-of-the-art suites at Dubai Knowledge Park & Abu Dhabi',
        language === 'ar' ? 'استراحة غداء وتواصل تنفيذي مع كبار الممارسين' : 'Executive catering & structured peer networking lunches',
        language === 'ar' ? 'دراسات حالة جماعية ومحاكاة لبيئة العمل الحقيقية' : 'Live boardroom crisis simulations & case defense'
      ],
      badgeColor: 'border-amber-500/30 text-[#E5C378] bg-amber-500/10'
    },
    {
      id: 'hybrid',
      title: t.learningFormats.hybridTitle,
      tag: t.learningFormats.hybridTag,
      desc: t.learningFormats.hybridDesc,
      icon: '⚡',
      schedule: language === 'ar' ? 'عطلة الأسبوع حضورياً + منصة إلكترونية تفاعلية' : 'Bi-Weekly Saturday Masterclasses + Self-Paced Modules',
      idealFor: language === 'ar' ? 'المحترفون الذين يسعون للجمع بين المرونة الرقمية والتواصل الحضوري' : 'Professionals balancing high workloads with high-touch classroom engagement',
      features: [
        language === 'ar' ? 'أفضل توازن بين الحضور المباشر والمرونة الذاتية' : 'Optimal balance of physical immersion & digital coursework',
        language === 'ar' ? 'ورش عمل تطبيقية مكثفة نصف شهرية في المقر' : 'Fortnightly hands-on campus project workshops',
        language === 'ar' ? 'دعم مستمر وإرشاد فردي عبر المنصة الذكية' : 'Continuous 1-on-1 advisor mentoring via portal'
      ],
      badgeColor: 'border-[#E5C378]/50 text-[#E5C378] bg-[#E5C378]/10 ring-1 ring-[#E5C378]/30',
      popular: true
    },
    {
      id: 'online',
      title: t.learningFormats.onlineTitle,
      tag: t.learningFormats.onlineTag,
      desc: t.learningFormats.onlineDesc,
      icon: '💻',
      schedule: language === 'ar' ? 'أمسيات أيام الأسبوع (٧:٠٠ م – ٩:٣٠ م) عبر زووم' : 'Weekday Evenings (7:00 PM – 9:30 PM UAE Time)',
      idealFor: language === 'ar' ? 'المهنيون دائمو السفر أو المتواجدون في الإمارات الشمالية والخليج' : 'Busy regional travelers & GCC professionals seeking zero commute',
      features: [
        language === 'ar' ? 'بث افتراضي عالي الدقة وتفاعل حي مع المدربين' : 'HD interactive live streaming with direct instructor Q&A',
        language === 'ar' ? 'تسجيلات رقمية فورية متاحة على مدار الساعة' : 'All live sessions recorded with lifetime portal access',
        language === 'ar' ? 'غرف عمل جماعية ونقاشات تفاعلية مستمرة' : 'Collaborative breakout pods and dedicated Slack community'
      ],
      badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10'
    }
  ];

  return (
    <section id="formats" className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.learningFormats.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.learningFormats.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.learningFormats.subtitle}
          </p>
        </div>

        {/* 3 Formats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {formats.map((fmt) => (
            <div
              key={fmt.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                fmt.popular
                  ? 'bg-gradient-to-b from-[#11161F] to-[#0D1118] border-2 border-[#E5C378]/40 shadow-2xl shadow-[#E5C378]/10'
                  : 'bg-[#0D1118] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {fmt.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#07090E] font-black text-[10px] tracking-wider uppercase shadow-md">
                  {fmt.tag}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{fmt.icon}</span>
                  {!fmt.popular && (
                    <span className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border ${fmt.badgeColor}`}>
                      {fmt.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {fmt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {fmt.desc}
                </p>

                {/* Schedule Box */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-5">
                  <span className="block text-[10.5px] font-bold text-[#E5C378] uppercase tracking-wider mb-1">
                    {t.learningFormats.scheduleLabel}
                  </span>
                  <span className="text-xs text-slate-200 font-mono">
                    {fmt.schedule}
                  </span>
                </div>

                {/* Ideal For */}
                <div className="mb-6">
                  <span className="block text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {t.learningFormats.idealForLabel}
                  </span>
                  <p className="text-xs text-slate-300">
                    {fmt.idealFor}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-8">
                  <span className="block text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">
                    {t.learningFormats.featuresLabel}
                  </span>
                  {fmt.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#E5C378] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href="#courses"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E5C378]/40 transition-all text-center"
                >
                  <span>{language === 'ar' ? 'استكشف برامج هذه الصيغة' : 'View Matching Programs'}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
