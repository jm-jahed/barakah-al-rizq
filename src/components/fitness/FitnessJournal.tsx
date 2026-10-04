'use client';
import React from 'react';
import { JOURNAL_ARTICLES } from '@/data/fitnessData';

export const FitnessJournal: React.FC = () => {
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">PERFORMANCE SCIENCE</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Training Journal.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNAL_ARTICLES.map(art => (
            <div key={art.id} className="bg-[#12100F] rounded-2xl border border-red-500/15 overflow-hidden p-6">
              <span className="text-[10px] font-mono text-red-400 uppercase block mb-1">{art.category} • {art.readTime}</span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">{art.title}</h3>
              <p className="text-xs text-gray-400">{art.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
