'use client';

import React, { useState } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA, StudioService } from '@/data/framehausData';
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sliders,
  Clock,
  Sparkles,
  Camera,
  X,
  ShieldCheck,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { language, isRtl, formatPrice } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];
  const [selectedService, setSelectedService] = useState<StudioService | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0A0A0D] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
              {t.services.title}
            </h2>
            <p className="text-base text-zinc-400 font-light">
              {t.services.subtitle}
            </p>
          </div>

          <a
            href="#estimator"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-amber-400 text-amber-400 font-mono text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <Sliders className="w-4 h-4" />
            <span>Open Cost Estimator</span>
          </a>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FRAMEHAUS_DATA.services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Service Banner Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute top-3 start-3">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] font-mono font-bold text-amber-400 uppercase">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                    {service.title[language]}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {service.shortDesc[language]}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-2">
                    {service.deliverables[language].slice(0, 3).map((del, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                      {t.services.ratesFrom}
                    </span>
                    <span className="text-base font-bold font-mono text-amber-400">
                      {formatPrice(service.startingRate)}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-amber-400 hover:text-black border border-zinc-700 hover:border-amber-400 text-zinc-200 font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1"
                  >
                    <span>{t.services.viewDetails}</span>
                    {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Drawer / Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0D0D11] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  {selectedService.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scope Deliverables */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.services.scopeTitle}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables[language].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gear & Tech Specs */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-400" />
                <span>{t.services.gearTitle}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.gearRoster[language].map((gear, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                    {gear}
                  </span>
                ))}
              </div>
            </div>

            {/* Turnaround & Ideal Audience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">{t.services.turnaroundTitle}</span>
                <p className="text-xs font-semibold text-zinc-200">{selectedService.turnaround[language]}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Ideal Commercial Fit</span>
                <p className="text-xs text-zinc-300">{selectedService.idealFor[language]}</p>
              </div>
            </div>

            {/* Footer / Booking CTA */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 block">{t.services.ratesFrom}</span>
                <span className="text-2xl font-black font-mono text-amber-400">{formatPrice(selectedService.startingRate)}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#estimator"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider text-center shadow-lg shadow-amber-500/20"
                >
                  Configure in Quote Builder
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
