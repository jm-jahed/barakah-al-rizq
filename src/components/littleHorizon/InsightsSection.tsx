'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA, InsightArticle } from '@/data/littleHorizonData';

export const InsightsSection: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].insights;
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#0E1B13] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            📚 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LITTLE_HORIZON_DATA.insights.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-[#132219]/80 p-6 sm:p-7 rounded-3xl border border-emerald-800/40 hover:border-amber-400/50 hover:bg-[#1A2F22] transition-all flex flex-col justify-between group cursor-pointer shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-300 mb-4">
                  <span className="text-amber-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-700/40">
                    {isRtl ? art.categoryAr : art.category}
                  </span>
                  <span className="text-[11px] text-emerald-400/80">
                    ⏱️ {isRtl ? art.readTimeAr : art.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                  {isRtl ? art.titleAr : art.title}
                </h3>

                <p className="text-xs text-emerald-200/80 leading-relaxed mb-6 line-clamp-3">
                  {isRtl ? art.summaryAr : art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-800/30 flex items-center justify-between text-xs text-emerald-300">
                <span className="text-[11px] text-emerald-400/70">{isRtl ? art.dateAr : art.date}</span>
                <span className="font-bold text-amber-400 group-hover:underline flex items-center gap-1">
                  <span>{tr.readArticle}</span>
                  <span>{isRtl ? '←' : '→'}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Article Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#0E1B13] border border-amber-400/40 max-w-3xl w-full p-6 sm:p-8 rounded-3xl relative shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#1A2F22] hover:bg-red-950/60 border border-emerald-700/40 text-emerald-200 hover:text-red-300 flex items-center justify-center font-bold text-base transition-colors"
              aria-label={tr.modalClose}
            >
              ✕
            </button>

            {/* Category & Read Time */}
            <div className="flex items-center gap-3 text-xs mb-3">
              <span className="text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/40 font-bold">
                {isRtl ? activeArticle.categoryAr : activeArticle.category}
              </span>
              <span className="text-emerald-300 font-medium">
                🕒 {isRtl ? activeArticle.readTimeAr : activeArticle.readTime} • {isRtl ? activeArticle.dateAr : activeArticle.date}
              </span>
            </div>

            {/* Article Title */}
            <h3 className="text-xl sm:text-3xl font-black text-white mb-6 leading-tight">
              {isRtl ? activeArticle.titleAr : activeArticle.title}
            </h3>

            {/* Summary Callout */}
            <div className="p-4 rounded-2xl bg-[#132219] border border-emerald-800/40 mb-6">
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium leading-relaxed">
                💡 {isRtl ? activeArticle.summaryAr : activeArticle.summary}
              </p>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-8">
              {(isRtl ? activeArticle.contentAr : activeArticle.content).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="p-5 rounded-2xl bg-[#1A2F22] border border-emerald-700/50 mb-6">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>🔑</span>
                <span>{isRtl ? 'أبرز النقاط المستفادة للوالدين:' : 'Key Takeaways for Parents:'}</span>
              </h4>
              <div className="space-y-2">
                {(isRtl ? activeArticle.keyTakeawaysAr : activeArticle.keyTakeaways).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-100">
                    <span className="text-amber-400 font-bold mt-0.5">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Close CTA */}
            <div className="text-center pt-3 border-t border-emerald-800/30">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="text-xs font-bold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-8 py-3 rounded-xl transition-all shadow-md"
              >
                {tr.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
