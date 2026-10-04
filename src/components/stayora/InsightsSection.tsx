'use client';

import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { STAYORA_INSIGHTS } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const InsightsSection: React.FC = () => {
  const { language } = useStayoraLanguage();

  return (
    <section id="insights" className="py-24 bg-[#133C3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-amber-200 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {language === 'ar' ? 'مركز المعرفة والأبحاث العقارية' : 'UAE HOLIDAY HOME KNOWLEDGE BASE'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {language === 'ar' ? 'رؤى السوق ودليل الملاك' : 'Market Insights & Owner Guides'}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {language === 'ar'
              ? 'ابقَ مطلعاً على أحدث تحليلات عوائد الإيجار قصير الأجل، وتراخيص دائرة السياحة DTCM، وأسرار التصميم الداخلي الفندقي.'
              : 'Stay informed with expert analysis on UAE short-term rental yields, DTCM regulations, and property styling.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAYORA_INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-[#0E2E30] border border-amber-500/20 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#E07A5F]/40 transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={article.image}
                    alt={language === 'ar' && article.titleAr ? article.titleAr : article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-xs font-bold">
                    {language === 'ar' && article.categoryAr ? article.categoryAr : article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
                    <span>{language === 'ar' && article.readTimeAr ? article.readTimeAr : article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-[#E07A5F] transition-colors">
                    {language === 'ar' && article.titleAr ? article.titleAr : article.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-light">
                    {language === 'ar' && article.summaryAr ? article.summaryAr : article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="text-xs font-mono font-bold text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>{language === 'ar' ? 'قراءة المقال' : 'READ ARTICLE'}</span>
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