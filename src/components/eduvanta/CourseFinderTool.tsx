'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA, CourseItem } from '@/data/eduvantaData';

export const CourseFinderTool: React.FC = () => {
  const { language, formatPrice, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  // 3-step state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('promotion');
  const [selectedField, setSelectedField] = useState<string>('tech');
  const [selectedFormat, setSelectedFormat] = useState<string>('Hybrid');
  const [recommendation, setRecommendation] = useState<CourseItem | null>(null);

  const goals = [
    { id: 'promotion', label: t.finder.goals.promotion, desc: t.finder.goals.promotionDesc, icon: '📈' },
    { id: 'leadership', label: t.finder.goals.leadership, desc: t.finder.goals.leadershipDesc, icon: '🏛️' },
    { id: 'certification', label: t.finder.goals.certification, desc: t.finder.goals.certificationDesc, icon: '📜' },
    { id: 'techSkills', label: t.finder.goals.techSkills, desc: t.finder.goals.techSkillsDesc, icon: '⚡' },
    { id: 'careerChange', label: t.finder.goals.careerChange, desc: t.finder.goals.careerChangeDesc, icon: '🔄' },
    { id: 'bizGrowth', label: t.finder.goals.bizGrowth, desc: t.finder.goals.bizGrowthDesc, icon: '🚀' }
  ];

  const fields = [
    { id: 'tech', label: t.finder.fields.tech, category: 'Project Management' },
    { id: 'business', label: t.finder.fields.business, category: 'Leadership' },
    { id: 'finance', label: t.finder.fields.finance, category: 'Finance' },
    { id: 'operations', label: t.finder.fields.operations, category: 'Project Management' },
    { id: 'marketing', label: t.finder.fields.marketing, category: 'Digital Marketing' },
    { id: 'hr', label: t.finder.fields.hr, category: 'HR' }
  ];

  const formats = [
    { id: 'Hybrid', label: t.finder.formats.hybrid, desc: t.finder.formats.hybridDesc, icon: '⚡' },
    { id: 'In-Person', label: t.finder.formats.inPerson, desc: t.finder.formats.inPersonDesc, icon: '🏢' },
    { id: 'Online', label: t.finder.formats.online, desc: t.finder.formats.onlineDesc, icon: '💻' }
  ];

  // Deterministic Recommendation Engine
  const calculateRecommendation = () => {
    // Look for best matching course
    let match = EDUVANTA_DATA.courses.find((c) => {
      const matchGoal = c.recommendedFor.includes(selectedGoal);
      const matchFormat = c.format === selectedFormat;
      return matchGoal && matchFormat;
    });

    if (!match) {
      match = EDUVANTA_DATA.courses.find((c) => c.recommendedFor.includes(selectedGoal));
    }

    if (!match) {
      match = EDUVANTA_DATA.courses[0];
    }

    setRecommendation(match);
    setCurrentStep(4); // Result step
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedGoal('promotion');
    setSelectedField('tech');
    setSelectedFormat('Hybrid');
    setRecommendation(null);
  };

  return (
    <section id="finder" className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.finder.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.finder.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.finder.subtitle}
          </p>
        </div>

        {/* Multi-Step Card Console */}
        <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    currentStep === step
                      ? 'bg-[#E5C378] text-[#07090E] ring-4 ring-[#E5C378]/20'
                      : currentStep > step
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-white/5 text-slate-400 border border-white/10'
                  }`}
                >
                  {currentStep > step ? '✓' : step}
                </div>
              ))}
            </div>

            <span className="text-xs font-mono font-medium text-slate-400 uppercase">
              {currentStep <= 3 ? `${language === 'ar' ? 'الخطوة' : 'Step'} 0${currentStep} / 03` : (language === 'ar' ? 'التوصية المهنية' : 'Career Recommendation')}
            </span>
          </div>

          {/* STEP 1: Primary Goal */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {t.finder.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.finder.step1Desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedGoal === g.id
                        ? 'bg-[#E5C378]/10 border-[#E5C378] ring-1 ring-[#E5C378]/30 shadow-lg'
                        : 'bg-[#11161F] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{g.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">{g.label}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{g.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 transition-all cursor-pointer"
                >
                  <span>{t.finder.nextStep}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Current Field */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {t.finder.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.finder.step2Desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {fields.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedField(f.id)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedField === f.id
                        ? 'bg-[#E5C378]/10 border-[#E5C378] ring-1 ring-[#E5C378]/30 shadow-lg'
                        : 'bg-[#11161F] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-sm font-bold text-white mb-0.5">{f.label}</div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                      {language === 'ar' ? 'القطاع الأساسي' : 'Primary Domain'}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {t.finder.prevStep}
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/20 transition-all cursor-pointer"
                >
                  <span>{t.finder.nextStep}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Preferred Format */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {t.finder.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.finder.step3Desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                {formats.map((fmt) => (
                  <button
                    key={fmt.id}
                    onClick={() => setSelectedFormat(fmt.id)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedFormat === fmt.id
                        ? 'bg-[#E5C378]/10 border-[#E5C378] ring-1 ring-[#E5C378]/30 shadow-lg'
                        : 'bg-[#11161F] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-2xl mb-2">{fmt.icon}</div>
                    <div className="text-sm font-bold text-white mb-1">{fmt.label}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{fmt.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {t.finder.prevStep}
                </button>
                <button
                  onClick={calculateRecommendation}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-extrabold text-[#07090E] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C8A030] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/25 transition-all cursor-pointer"
                >
                  <span>{t.finder.findMatches}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>✨</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Dynamic Recommendation Result */}
          {currentStep === 4 && recommendation && (
            <div className="animate-scaleUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
                <span>✓</span>
                <span>{t.finder.recommendedProgram}</span>
              </div>

              <div className="bg-[#11161F] border border-[#E5C378]/30 rounded-2xl p-6 sm:p-8 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? recommendation.categoryAr : recommendation.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#E5C378] px-3 py-1 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/20">
                    {formatPrice(recommendation.numericPrice)}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {language === 'ar' ? recommendation.titleAr : recommendation.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {language === 'ar' ? recommendation.descriptionAr : recommendation.description}
                </p>

                {/* Outcome & Reason */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <div className="text-xs font-bold text-[#E5C378] uppercase tracking-wider mb-1">
                    {t.finder.whyThisProgram}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'ar' ? recommendation.outcomeAr : recommendation.outcome}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400 font-mono mb-6">
                  <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                    <span className="block text-[10px] uppercase text-slate-400">Duration</span>
                    <span className="text-white font-bold">
                      {language === 'ar' ? recommendation.durationAr : recommendation.duration}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                    <span className="block text-[10px] uppercase text-slate-400">Format</span>
                    <span className="text-white font-bold">{recommendation.format}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/20 border border-white/5 col-span-2 sm:col-span-1">
                    <span className="block text-[10px] uppercase text-slate-400">Credential</span>
                    <span className="text-[#E5C378] font-bold text-[11px] truncate block">
                      {language === 'ar' ? recommendation.certificationAr : recommendation.certification}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={handleReset}
                    className="text-xs font-medium text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    {t.finder.resetFinder}
                  </button>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <a
                      href="#enroll"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/20 text-center cursor-pointer"
                    >
                      <span>{t.finder.enrollThisProgram}</span>
                      <span className={isRtl ? 'rotate-180' : ''}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
