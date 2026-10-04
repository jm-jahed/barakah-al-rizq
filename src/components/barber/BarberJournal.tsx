'use client';
import React from 'react';
import { ARTICLES_DATA } from '@/data/barberData';

export const BarberJournal: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{ARTICLES_DATA.map(a => (<div key={a.id} className="bg-neutral-900 p-5 rounded-3xl border border-amber-500/20"><h3 className="font-sans font-bold text-base text-white">{a.title}</h3><p className="text-xs text-neutral-400 mt-2">{a.excerpt}</p></div>))}</div>
      </div>
    </section>
  );
};
