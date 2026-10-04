'use client';

import React, { useState } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA, InsightArticle } from '@/data/framehausData';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  ArrowLeft,
  X,
  Sparkles,
  User,
} from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section className="py-24 bg-[#08080B] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.insights.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.insights.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.insights.subtitle}
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FRAMEHAUS_DATA.insights.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                <div className="absolute top-3 start-3">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] font-mono font-bold text-amber-400 uppercase">
                    {article.category[language]}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {article.date[language]}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {article.readTime[language]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {article.title[language]}
                  </h3>

                  <p className="text-xs text-zinc-400 font-light line-clamp-3 leading-relaxed">
                    {article.summary[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-amber-400 font-semibold">
                  <span>{t.insights.readArticle}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0D0D11] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                    {activeArticle.category[language]}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeArticle.readTime[language]}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white pt-1">
                  {activeArticle.title[language]}
                </h3>
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 pt-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeArticle.author[language]}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Body Sections */}
            <div className="space-y-6 text-sm text-zinc-300 font-sans leading-relaxed">
              <p className="text-base text-zinc-200 border-s-2 border-amber-500 ps-4 italic">
                {activeArticle.summary[language]}
              </p>

              {activeArticle.content[language].map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-lg font-bold font-serif text-white text-amber-400/90">
                    {sec.section}
                  </h4>
                  <p className="text-zinc-300 font-light leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <a
                href="#inquiry"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase tracking-wider"
              >
                Discuss with Creative Director
              </a>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-mono text-zinc-400 hover:text-zinc-200"
              >
                {t.insights.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
