'use client';

import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { AZURE_INSIGHTS } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

export const InsightsSection: React.FC = () => {
  const { language, t } = useAzureLanguage();

  return (
    <section id="insights" className="py-24 bg-[#081528] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('insightsBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('insightsTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light max-w-2xl mx-auto">
            {t('insightsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AZURE_INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-[#0B1A2F] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-500/50 transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={article.image}
                    alt={language === 'ar' ? article.titleAr : article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-xs font-bold">
                    {language === 'ar' ? article.categoryAr : article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{language === 'ar' ? article.readTimeAr : article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors font-sans">
                    {language === 'ar' ? article.titleAr : article.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-light">
                    {language === 'ar' ? article.summaryAr : article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="text-xs font-mono font-bold text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>{language === 'ar' ? 'قراءة الدليل الملاحي' : 'READ CHARTER GUIDE'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};