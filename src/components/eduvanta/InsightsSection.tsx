'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA, InsightArticle } from '@/data/eduvantaData';

export const InsightsSection: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.insights.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.insights.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.insights.subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUVANTA_DATA.insights.map((article) => (
            <div
              key={article.id}
              className="bg-[#0D1118] border border-white/[0.08] hover:border-[#E5C378]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-[11px] font-mono text-slate-400">
                  <span className="text-[#E5C378] font-semibold uppercase tracking-wider">
                    {language === 'ar' ? article.categoryAr : article.category}
                  </span>
                  <span>
                    {language === 'ar' ? article.readTimeAr : article.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-[#E5C378] transition-colors leading-snug">
                  {language === 'ar' ? article.titleAr : article.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {language === 'ar' ? article.summaryAr : article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {language === 'ar' ? article.dateAr : article.date}
                </span>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C378] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t.insights.readArticle}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-[#0D1118] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-scaleUp text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className={`absolute top-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer ${
                isRtl ? 'left-6' : 'right-6'
              }`}
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                <span className="text-[#E5C378] font-bold uppercase">
                  {language === 'ar' ? activeArticle.categoryAr : activeArticle.category}
                </span>
                <span>•</span>
                <span>{language === 'ar' ? activeArticle.readTimeAr : activeArticle.readTime}</span>
                <span>•</span>
                <span>{language === 'ar' ? activeArticle.dateAr : activeArticle.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-3">
                {language === 'ar' ? activeArticle.titleAr : activeArticle.title}
              </h3>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              {(language === 'ar' ? activeArticle.contentAr : activeArticle.content).map((para, idx) => (
                <p key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  {para}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                {language === 'ar' ? 'نُشرت بواسطة هيئة الفكر القيادي في إدوفانتا الإمارات.' : 'Published by EDUVANTA UAE Executive Thought Leadership.'}
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#07090E] bg-[#E5C378] hover:bg-[#F0D595] transition-colors"
              >
                {t.insights.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
