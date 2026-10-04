'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { PortfolioItem } from '@/data/framehausData';
import {
  X,
  Camera,
  Layers,
  SunMedium,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface PortfolioLightboxProps {
  item: PortfolioItem;
  onClose: () => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({ item, onClose }) => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0C0C0F] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase">
              {item.categoryLabel[language]}
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">•</span>
            <span className="text-xs font-mono text-zinc-300 hidden sm:inline">{item.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            aria-label={t.gallery.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: High-Res Image View */}
          <div className="lg:col-span-7 bg-black flex items-center justify-center p-4 sm:p-6 relative min-h-[320px] sm:min-h-[440px]">
            <img
              src={item.image}
              alt={item.title[language]}
              className="max-h-[500px] w-auto object-contain rounded-lg shadow-2xl border border-zinc-900"
            />
            <div className="absolute bottom-6 start-6 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <span className="text-amber-400 font-bold">16-Bit ProPhoto RGB</span> • Master Raw Capture
            </div>
          </div>

          {/* Right: Technical Specs & Case Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-s border-zinc-800/80 bg-zinc-950">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {item.location[language]}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {item.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  {item.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description[language]}
                </p>
              </div>

              {/* Technical Gear Breakdown Box */}
              <div className="space-y-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-zinc-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Production Technical Specifications</span>
                </div>

                <div className="space-y-2 text-zinc-300">
                  <div className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase">{t.gallery.cameraLabel}</span>
                      <span className="font-semibold text-zinc-200">{item.specs.camera}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Layers className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase">{t.gallery.lensLabel}</span>
                      <span className="font-semibold text-zinc-200">{item.specs.lens}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <SunMedium className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase">{t.gallery.lightingLabel}</span>
                      <span className="font-semibold text-zinc-200">{item.specs.lighting}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase">{t.gallery.deliverablesLabel}</span>
                      <span className="font-semibold text-emerald-400">{item.specs.deliverables[language]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Booking Action */}
            <div className="pt-4 border-t border-zinc-900 flex flex-col gap-2">
              <a
                href="#estimator"
                onClick={onClose}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider text-center shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Request Similar Shoot Package</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
              <button
                onClick={onClose}
                className="w-full py-2 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 text-center"
              >
                {t.gallery.closeModal}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
