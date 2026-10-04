'use client';

import React, { useState } from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA, TechProgram } from '@/data/codeforgeData';

export const ProgramMatchTool: React.FC = () => {
  const { language, formatPrice, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedAmbition, setSelectedAmbition] = useState<string>('softwareEng');
  const [selectedBackground, setSelectedBackground] = useState<string>('completeBeginner');
  const [selectedSchedule, setSelectedSchedule] = useState<string>('fullTimeImmersive');
  const [recommendation, setRecommendation] = useState<TechProgram | null>(null);

  const ambitions = [
    { id: 'softwareEng', label: t.matcher.ambitions.softwareEng, desc: t.matcher.ambitions.softwareEngDesc, icon: '💻' },
    { id: 'aiData', label: t.matcher.ambitions.aiData, desc: t.matcher.ambitions.aiDataDesc, icon: '🤖' },
    { id: 'cyberCloud', label: t.matcher.ambitions.cyberCloud, desc: t.matcher.ambitions.cyberCloudDesc, icon: '🛡️' },
    { id: 'uiuxProduct', label: t.matcher.ambitions.uiuxProduct, desc: t.matcher.ambitions.uiuxProductDesc, icon: '🎨' },
    { id: 'mobileApp', label: t.matcher.ambitions.mobileApp, desc: t.matcher.ambitions.mobileAppDesc, icon: '📱' }
  ];

  const backgrounds = [
    { id: 'completeBeginner', label: t.matcher.backgrounds.completeBeginner },
    { id: 'techAdjacent', label: t.matcher.backgrounds.techAdjacent },
    { id: 'stemDegree', label: t.matcher.backgrounds.stemDegree },
    { id: 'juniorDev', label: t.matcher.backgrounds.juniorDev }
  ];

  const schedules = [
    { id: 'fullTimeImmersive', label: t.matcher.schedules.fullTimeImmersive, icon: '⚡' },
    { id: 'partTimeEvening', label: t.matcher.schedules.partTimeEvening, icon: '🌙' },
    { id: 'hybridFlex', label: t.matcher.schedules.hybridFlex, icon: '🏢' }
  ];

  const calculateRecommendation = () => {
    let match = CODEFORGE_DATA.programs.find((p) => p.recommendedFor.includes(selectedAmbition));
    if (!match) {
      match = CODEFORGE_DATA.programs[0];
    }
    setRecommendation(match);
    setCurrentStep(4);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedAmbition('softwareEng');
    setSelectedBackground('completeBeginner');
    setSelectedSchedule('fullTimeImmersive');
    setRecommendation(null);
  };

  return (
    <section id="matcher" className="bg-[#050811] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
            {t.matcher.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.matcher.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.matcher.subtitle}
          </p>
        </div>

        {/* Multi-Step Card Console */}
        <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    currentStep === step
                      ? 'bg-[#38BDF8] text-[#070A12] ring-4 ring-sky-500/20'
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
              {currentStep <= 3 ? `${language === 'ar' ? 'الخطوة' : 'Step'} 0${currentStep} / 03` : (language === 'ar' ? 'التوصية التقنية' : 'Tech Recommendation')}
            </span>
          </div>

          {/* STEP 1: Ambition */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">
                {t.matcher.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.matcher.step1Desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {ambitions.map((amb) => (
                  <button
                    key={amb.id}
                    onClick={() => setSelectedAmbition(amb.id)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedAmbition === amb.id
                        ? 'bg-sky-500/10 border-[#38BDF8] ring-1 ring-sky-500/30 shadow-lg'
                        : 'bg-[#121829] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{amb.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-white mb-1 font-mono">{amb.label}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{amb.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-md shadow-sky-500/20 transition-all cursor-pointer font-sans"
                >
                  <span>{t.matcher.nextStep}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Background */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">
                {t.matcher.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.matcher.step2Desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {backgrounds.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBackground(bg.id)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedBackground === bg.id
                        ? 'bg-sky-500/10 border-[#38BDF8] ring-1 ring-sky-500/30 shadow-lg'
                        : 'bg-[#121829] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-sm font-bold text-white mb-0.5 font-mono">{bg.label}</div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                      {language === 'ar' ? 'مستوى الخبرة الحالي' : 'Current Experience Level'}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {t.matcher.prevStep}
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-md shadow-sky-500/20 transition-all cursor-pointer font-sans"
                >
                  <span>{t.matcher.nextStep}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Schedule */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">
                {t.matcher.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.matcher.step3Desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                {schedules.map((sch) => (
                  <button
                    key={sch.id}
                    onClick={() => setSelectedSchedule(sch.id)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedSchedule === sch.id
                        ? 'bg-sky-500/10 border-[#38BDF8] ring-1 ring-sky-500/30 shadow-lg'
                        : 'bg-[#121829] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-2xl mb-2">{sch.icon}</div>
                    <div className="text-sm font-bold text-white font-mono">{sch.label}</div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {t.matcher.prevStep}
                </button>
                <button
                  onClick={calculateRecommendation}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-extrabold text-[#070A12] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#0369A1] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-lg shadow-sky-500/25 transition-all cursor-pointer font-sans"
                >
                  <span>{t.matcher.findMatches}</span>
                  <span className={isRtl ? 'rotate-180' : ''}>✨</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Recommendation Result */}
          {currentStep === 4 && recommendation && (
            <div className="animate-scaleUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono mb-4">
                <span>✓</span>
                <span>{t.matcher.recommendedTrack}</span>
              </div>

              <div className="bg-[#121829] border border-sky-500/30 rounded-2xl p-6 sm:p-8 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? recommendation.categoryAr : recommendation.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#38BDF8] px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                    {formatPrice(recommendation.numericPrice)}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {language === 'ar' ? recommendation.titleAr : recommendation.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {language === 'ar' ? recommendation.descriptionAr : recommendation.description}
                </p>

                {/* Outcome */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <div className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1 font-mono">
                    {t.matcher.whyThisTrack}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'ar' ? recommendation.outcomeAr : recommendation.outcome}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={handleReset}
                    className="text-xs font-medium text-slate-400 hover:text-white underline cursor-pointer font-mono"
                  >
                    {t.matcher.resetFinder}
                  </button>

                  <a
                    href="#apply"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-lg shadow-sky-500/20 text-center font-sans cursor-pointer"
                  >
                    <span>{t.matcher.applyTrack}</span>
                    <span className={isRtl ? 'rotate-180' : ''}>→</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
