'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import { Star, MessageSquare, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  return (
    <section className="py-24 bg-[#08080A] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.testimonials.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FRAMEHAUS_DATA.testimonials.map((testi) => (
            <div
              key={testi.id}
              className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{testi.verifiedTag[language]}</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-zinc-300 font-light leading-relaxed italic">
                  "{testi.quote[language]}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-zinc-900 flex items-center gap-3">
                <img
                  src={testi.avatar}
                  alt={testi.author[language]}
                  className="w-11 h-11 rounded-full object-cover border border-zinc-700"
                />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold font-serif text-white">
                    {testi.author[language]}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-400">
                    {testi.role[language]} • <span className="text-amber-400/90">{testi.company[language]}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
