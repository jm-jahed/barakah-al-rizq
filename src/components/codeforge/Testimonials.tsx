'use client';

import React, { useState } from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const Testimonials: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total = CODEFORGE_DATA.testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const current = CODEFORGE_DATA.testimonials[currentIndex];

  return (
    <section className="bg-[#070A12] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
            {t.reviews.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Review Card */}
        <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          {/* Top Outcome Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              {t.reviews.careerOutcome}: {language === 'ar' ? current.roleAr : current.role} ({current.company}) • {language === 'ar' ? current.salaryOutcomeAr : current.salaryOutcome}
            </span>

            <div className="flex items-center gap-1 text-[#38BDF8]">
              {Array.from({ length: current.rating }).map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>
          </div>

          {/* Editorial Quote */}
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-relaxed mb-8 italic">
            "{language === 'ar' ? current.quoteAr : current.quote}"
          </blockquote>

          {/* Learner & Program Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div>
              <div className="text-base font-bold text-white font-mono">
                {language === 'ar' ? current.authorAr : current.author}
              </div>
              <div className="text-xs text-slate-400">
                {language === 'ar' ? current.roleAr : current.role} •{' '}
                <span className="text-[#38BDF8]">{current.company}</span> ({language === 'ar' ? current.locationAr : current.location})
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                {language === 'ar' ? current.programAr : current.program}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label={t.reviews.prevReview}
              >
                <span className={isRtl ? 'rotate-180 inline-block' : ''}>←</span>
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                {currentIndex + 1} / {total}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label={t.reviews.nextReview}
              >
                <span className={isRtl ? 'rotate-180 inline-block' : ''}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
