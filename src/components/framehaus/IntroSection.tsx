'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  Sparkles,
  Sliders,
  FileCheck2,
  Video,
  Shield,
  Layers,
  Zap,
  CheckCircle,
} from 'lucide-react';

export const IntroSection: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const pillarIcons = [
    <Sliders className="w-5 h-5 text-amber-400" key="0" />,
    <FileCheck2 className="w-5 h-5 text-amber-400" key="1" />,
    <Video className="w-5 h-5 text-amber-400" key="2" />,
    <Shield className="w-5 h-5 text-amber-400" key="3" />,
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0A0A0C] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.intro.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
              {t.intro.title}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            <p className="border-s-2 border-amber-500/80 ps-4 text-zinc-200">
              {t.intro.description1}
            </p>
            <p className="text-zinc-400">
              {t.intro.description2}
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.intro.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 space-y-4 hover:translate-y-[-2px] group"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {pillarIcons[idx]}
              </div>
              <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
