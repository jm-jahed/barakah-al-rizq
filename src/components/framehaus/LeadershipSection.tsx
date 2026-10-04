'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { Users, Award, Camera, Sparkles } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const directorPhotos = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section className="py-24 bg-[#0A0A0D] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>{t.team.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.team.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.team.subtitle}
          </p>
        </div>

        {/* 3 Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.team.directors.map((director, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={directorPhotos[idx]}
                  alt={director.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                <div className="absolute top-3 start-3">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] font-mono font-bold text-amber-400 uppercase">
                    {director.specialty}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                      {director.name}
                    </h3>
                    <span className="text-xs font-mono text-amber-400 font-semibold block">
                      {director.role}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {director.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{director.awards}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
