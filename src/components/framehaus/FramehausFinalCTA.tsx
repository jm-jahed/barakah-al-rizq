'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import {
  Camera,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Sliders,
} from 'lucide-react';

export const FramehausFinalCTA: React.FC = () => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0D] to-[#050507] border-b border-zinc-800 text-zinc-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.finalCta.badge}</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            {t.finalCta.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#inquiry"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>{t.finalCta.primaryBtn}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>

          <a
            href={FRAMEHAUS_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.finalCta.whatsappBtn}</span>
          </a>

          <a
            href={`tel:${FRAMEHAUS_DATA.phone.replace(/\s+/g, '')}`}
            className="px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span dir="ltr">{t.finalCta.callBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
