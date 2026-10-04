'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import { ShieldCheck, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  return (
    <section className="bg-[#0A0A0D] border-b border-zinc-800/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{t.trust.heading}</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            {t.trust.tagline}
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {FRAMEHAUS_DATA.trustLogos.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 hover:border-amber-500/40 transition-colors group text-center"
            >
              <span className="text-xs font-serif font-black tracking-wider text-zinc-200 group-hover:text-amber-400 transition-colors">
                {client.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-400 tracking-tighter mt-0.5">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
