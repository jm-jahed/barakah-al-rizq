'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  TrendingUp,
  FileCheck2,
  Tv,
  MapPin,
  Sliders,
  Clock,
  Sparkles,
  Shield,
} from 'lucide-react';

export const WhyFramehaus: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const pillarIcons = [
    <TrendingUp className="w-5 h-5 text-amber-400" key="0" />,
    <FileCheck2 className="w-5 h-5 text-amber-400" key="1" />,
    <Tv className="w-5 h-5 text-amber-400" key="2" />,
    <MapPin className="w-5 h-5 text-amber-400" key="3" />,
    <Sliders className="w-5 h-5 text-amber-400" key="4" />,
    <Clock className="w-5 h-5 text-amber-400" key="5" />,
  ];

  return (
    <section id="why-fh" className="py-24 bg-[#08080B] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.whyUs.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-amber-500/60 transition-all duration-300 space-y-4 hover:translate-y-[-2px] group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-2xl font-black font-mono text-zinc-700 group-hover:text-amber-500/40 transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-400">
                <span>The Framehaus Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
