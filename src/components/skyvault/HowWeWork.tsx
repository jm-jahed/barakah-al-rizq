'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileSearch, ShieldCheck, Wrench, TrendingUp, ArrowRight } from 'lucide-react';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const HowWeWork: React.FC = () => {
  const { lang, isRtl, t, toArabicDigits } = useSkyvaultLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = lang === 'ar' ? [
    {
      num: '٠١',
      title: 'تدقيق الأصول (AUDIT)',
      subtitle: 'الفحص الفني وتدقيق سجلات الصيانة',
      desc: 'تدقيق شامل لبرنامج الصيانة المعتمد (AMP)، فحص سجلات المحركات، وتقييم تكاليف التأمين والوقود للوصول إلى أقصى كفاءة تشغيلية.',
      deliverables: ['فحص وثائق صلاحية الطيران GCAA Part-M', 'مراجعة عقود التأمين الحالية واسترداد الفروقات', 'خطة صيانة وقائية مجدولة لـ ١٢ شهراً'],
      icon: <FileSearch className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '٠٢',
      title: 'الانضمام والتوظيف (ONBOARD)',
      subtitle: 'التسجيل وتخصيص الطاقم والهنجر',
      desc: 'نقل الطائرة تحت إدارة إيروفولت، تعيين الطيارين المرخصين على الطراز بعد تدريبهم بمحاكيات CAE، وتأمين مساحة الهنجر المكيفة.',
      deliverables: ['استخراج تصاريح التشغيل بسجل A6- الإماراتي', 'توظيف قباطنة متمرسين ومضيفة طيران خاصة', 'تخصيص مساحة خاصة في هناجر DWC أو البطين'],
      icon: <ShieldCheck className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '٠٣',
      title: 'الاستدامة والصيانة (MAINTAIN)',
      subtitle: 'رقابة مستمرة وتجديد الصلاحية',
      desc: 'يتولى مهندسونا المعتمدون متابعة كافة جداول الصيانة الدورية، الفحوصات الهيكلية، وتجديد شهادات صلاحية الطيران (ARC).',
      deliverables: ['تجديد دوري سنوي لشهادات ARC معتمدة', 'إشراف فني على مدار الساعة على الصيانة الدورية', 'تقارير فنية ومالية شهرية مفصلة بدون هوامش خفية'],
      icon: <Wrench className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '٠٤',
      title: 'عوائد التأجير (YIELD)',
      subtitle: 'تعظيم التدفقات النقدية للمالك',
      desc: 'إدراج اختياري للطائرة برخصة النقل الجوي (AOC) لتشغيل رحلات تأجير تجاري في أوقات التوقف مع الحفاظ على أولوية المالك.',
      deliverables: ['أولوية مطلقة للمالك لإلغاء أي رحلة تجارية', 'تحويلات مالية شهرية للأرباح الصافية', 'تعويض حتى ٧٠٪ من التكاليف التشغيلية الثابتة'],
      icon: <TrendingUp className="w-5 h-5 text-[#E5C378]" />
    }
  ] : [
    {
      num: '01',
      title: 'AUDIT',
      subtitle: 'Technical & CAMO Assessment',
      desc: 'We perform a full GCAA Part-M airworthiness audit, engine log inspection, and insurance cost analysis to establish baseline efficiency.',
      deliverables: ['GCAA Part-M logbook & airworthiness audit', 'Insurance policy renegotiation & optimization', '12-month proactive scheduled maintenance plan'],
      icon: <FileSearch className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '02',
      title: 'ONBOARD',
      subtitle: 'GCAA Registration & Crew Staffing',
      desc: 'Transition your aircraft under SKYVAULT CAMO management, recruit type-rated captains, and assign climate-controlled hangar space.',
      deliverables: ['A6- UAE registry operational compliance', 'Type-rated captain sourcing with CAE recurrent', 'Assigned climate hangar bay at DWC or AUH'],
      icon: <ShieldCheck className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '03',
      title: 'MAINTAIN',
      subtitle: 'Continuous Airworthiness (AMP)',
      desc: 'Our certified aeronautical engineers manage all scheduled maintenance, ARC airworthiness renewals, and engine overhauls.',
      deliverables: ['Guaranteed annual ARC airworthiness renewal', '24/7 engineering oversight & line maintenance', 'Itemized transparent monthly maintenance ledgers'],
      icon: <Wrench className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '04',
      title: 'YIELD',
      subtitle: 'Charter Revenue Distribution',
      desc: 'Optional AOC charter placement generates monthly net revenue payouts to offset fixed annual operating expenses.',
      deliverables: ['100% owner calendar priority override', 'Direct monthly net charter revenue distributions', 'Up to 70% offset on fixed operating overhead'],
      icon: <TrendingUp className="w-5 h-5 text-[#E5C378]" />
    }
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section className="py-24 bg-[#07090E] text-white relative border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('workflow.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {t('workflow.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            {t('workflow.subtitle')}
          </p>
        </div>

        {/* 4 Interactive Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-3xl text-left transition-all relative border flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#11161F] border-[#E5C378] shadow-2xl shadow-[#E5C378]/10'
                    : 'bg-[#0D1118] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black font-mono transition-colors ${
                      isActive ? 'text-[#E5C378]' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {step.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#E5C378]/20 border border-[#E5C378]/40' : 'bg-white/5 border border-white/10'
                    }`}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 className={`text-base font-bold mb-1 font-mono uppercase tracking-wider ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <h4 className="text-xs font-semibold text-[#E5C378] mb-3">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    {t('workflow.stage')} {step.num} {t('workflow.of')}
                  </span>
                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-[#E5C378]' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-8 rounded-3xl bg-[#0D1118] border border-[#E5C378]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-wider block">
                {lang === 'ar' ? `المرحلة ${currentStep.num} بالتفصيل` : `PHASE ${currentStep.num} IN DEPTH`}
              </span>
              <h3 className="text-2xl font-bold text-white font-sans">
                {currentStep.title} — {currentStep.subtitle}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {currentStep.desc}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#11161F] p-5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
                {lang === 'ar' ? 'المخرجات التنفيذية' : 'OPERATIONAL MILESTONES'}
              </span>
              {currentStep.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 text-xs text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E5C378] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};