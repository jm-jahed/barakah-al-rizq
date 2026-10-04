'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import {
  Building2,
  Camera,
  SunMedium,
  Tv,
  Zap,
  Coffee,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export const StudioFacilities: React.FC = () => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  return (
    <section id="facilities" className="py-24 bg-[#08080B] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.facilities.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.facilities.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.facilities.subtitle}
          </p>
        </div>

        {/* 2 Flagship Studios Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FRAMEHAUS_DATA.studios.map((studio) => (
            <div
              key={studio.id}
              className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                <img
                  src={studio.image}
                  alt={studio.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute top-4 start-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-amber-400 text-black text-xs font-mono font-bold uppercase">
                    {studio.city[language]}
                  </span>
                  <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-zinc-300 text-xs font-mono">
                    {studio.district[language]}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                    {studio.name[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {studio.address[language]}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      Facility Specifications:
                    </span>
                    <ul className="space-y-1.5">
                      {studio.specs[language].map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">{studio.hours[language]}</span>
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>Book Studio Hire</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Gear Locker Grid */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-bold font-serif text-white">
                {t.facilities.gearSectionTitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              100% Owned & Maintained In-House • Zero Equipment Rental Delays
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase text-[10px] block">Cyclorama</span>
              <span className="text-zinc-200 font-bold">{t.facilities.specs.cyclorama}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase text-[10px] block">Lighting Generators</span>
              <span className="text-zinc-200 font-bold">{t.facilities.specs.lighting}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase text-[10px] block">Camera Systems</span>
              <span className="text-zinc-200 font-bold">{t.facilities.specs.cameras}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase text-[10px] block">Color Calibration</span>
              <span className="text-zinc-200 font-bold">{t.facilities.specs.monitors}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase text-[10px] block">Studio Power</span>
              <span className="text-zinc-200 font-bold">{t.facilities.specs.power}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase text-[10px] block">Client Amenities</span>
              <span className="text-zinc-200 font-bold">{t.facilities.specs.amenities}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
