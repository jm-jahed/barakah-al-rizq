'use client';
import React, { useState } from 'react';
import { ARTICLES_DATA } from '@/data/clinicData';

export const ClinicJournal: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Health & Medical Journal</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{ARTICLES_DATA.map(art => (<div key={art.id} className="bg-slate-900 rounded-3xl border border-sky-500/20 p-5"><h3 className="font-sans text-base font-bold text-white">{art.title}</h3><p className="text-xs text-slate-400 mt-2 line-clamp-2">{art.excerpt}</p></div>))}</div>
      </div>
    </section>
  );
};
