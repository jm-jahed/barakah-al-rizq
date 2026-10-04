'use client';

import React, { useState } from 'react';
import { Clock, ArrowRight, X, BookOpen, ShieldCheck } from 'lucide-react';
import { SKYVAULT_INSIGHTS, SkyvaultInsight } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const InsightsSection: React.FC = () => {
  const { lang, isRtl, t } = useSkyvaultLanguage();
  const [activeArticle, setActiveArticle] = useState<SkyvaultInsight | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#0D1118] text-white border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('insights.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('insights.title')}
          </h2>
          <p className="text-slate-300 text-base font-light">
            {t('insights.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKYVAULT_INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-[#11161F] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#E5C378]/40 transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={article.image}
                    alt={lang === 'ar' ? article.titleAr : article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#E5C378] font-mono text-xs font-bold">
                    {lang === 'ar' ? article.categoryAr : article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#E5C378]" />
                    <span>{lang === 'ar' ? article.readTimeAr : article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#E5C378] transition-colors font-sans">
                    {lang === 'ar' ? article.titleAr : article.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-light">
                    {lang === 'ar' ? article.summaryAr : article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-mono font-bold text-[#E5C378] hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <span>{t('insights.read')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="max-w-2xl w-full rounded-3xl bg-[#0D1118] border border-[#E5C378]/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C378] mb-3">
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'ar' ? activeArticle.categoryAr : activeArticle.category}</span>
              <span>•</span>
              <span>{lang === 'ar' ? activeArticle.readTimeAr : activeArticle.readTime}</span>
            </div>

            <h3 className="text-2xl font-bold mb-4 font-sans text-white">
              {lang === 'ar' ? activeArticle.titleAr : activeArticle.title}
            </h3>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={activeArticle.image}
                alt={lang === 'ar' ? activeArticle.titleAr : activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
              {lang === 'ar' ? activeArticle.summaryAr : activeArticle.summary}
            </p>

            <div className="p-4 rounded-2xl bg-[#11161F] border border-white/10 text-xs text-slate-400 font-light">
              <p>
                {lang === 'ar'
                  ? 'لمناقشة وضع طائرتك الخاصة وإجراء تقييم فني وإيرادي شامل، تواصل مع فريق إدارة الطيران في إيروفولت.'
                  : 'To discuss your aircraft management strategy and receive an itemized CAMO airworthiness review, connect with the SKYVAULT executive desk.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};