'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  FileText,
  Users,
  Camera,
  Sliders,
  CheckCircle,
  Sparkles,
  Layers,
} from 'lucide-react';

export const CreativeProcess: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const steps = [
    {
      num: '01',
      title: t.workflow.step1Title,
      desc: t.workflow.step1Desc,
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      tag: '48h Discovery',
    },
    {
      num: '02',
      title: t.workflow.step2Title,
      desc: t.workflow.step2Desc,
      icon: <Users className="w-5 h-5 text-amber-400" />,
      tag: 'DFTVC Permits',
    },
    {
      num: '03',
      title: t.workflow.step3Title,
      desc: t.workflow.step3Desc,
      icon: <Camera className="w-5 h-5 text-amber-400" />,
      tag: 'Live 4K Tether',
    },
    {
      num: '04',
      title: t.workflow.step4Title,
      desc: t.workflow.step4Desc,
      icon: <Sliders className="w-5 h-5 text-amber-400" />,
      tag: '16-Bit ProPhoto',
    },
    {
      num: '05',
      title: t.workflow.step5Title,
      desc: t.workflow.step5Desc,
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      tag: 'Master Cloud Portal',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0A0A0D] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.workflow.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.workflow.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* 5-Step Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between space-y-4 hover:translate-y-[-3px] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-400">
                    {step.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-900/80 text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                <span>Phase {step.num} of 05</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
