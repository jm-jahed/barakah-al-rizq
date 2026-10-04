'use client';

import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';

const ARTICLES = [
  {
    id: 'art-1',
    title: 'Managing Canine Hydration & Heat Exhaustion in UAE Summer',
    category: 'Emergency & Climate Care',
    readTime: '4 min read',
    date: 'August 2026',
    excerpt: 'Key physiological indicators of thermal stress in brachycephalic breeds (Bulldogs, Pugs) and urgent cooling measures.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'art-2',
    title: 'Complete 2026 Checklist: Exporting Your Pet from Dubai to EU/UK',
    category: 'International Relocation',
    readTime: '6 min read',
    date: 'July 2026',
    excerpt: 'Step-by-step roadmap for RNATT rabies antibody titers, MOCCAE health permits, microchipping, and airline approved crates.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'art-3',
    title: 'Why Dental Disease Shortens Pet Lifespans: The Periodontal Threat',
    category: 'Veterinary Medicine',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'How subgingival bacteria enter the bloodstream affecting cardiac valves and kidneys, and why ultrasonic scaling is vital.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop'
  }
];

export const PetJournal: React.FC<any> = () => {
  return (
    <section id="journal" className="py-24 bg-[#0B1219] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
              CLINICAL JOURNAL & VETERINARY ADVISORY
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              Expert Insights on UAE Pet Health.
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Written by Resident Specialists</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="rounded-3xl bg-[#0E1720] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-emerald-400/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1720] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-300">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors font-sans leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#hero"
                  className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 hover:underline"
                >
                  <span>Read Full Medical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetJournal;
