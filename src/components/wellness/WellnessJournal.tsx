'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ARTICLES_DATA, JournalArticle } from '@/data/wellnessData';

export const WellnessJournal: React.FC<any> = () => {
  const [selectedArt, setSelectedArt] = useState<JournalArticle | null>(null);

  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">AURA Wellness Journal</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{ARTICLES_DATA.map(art => (<div key={art.id} onClick={() => setSelectedArt(art)} className="bg-[#161411] rounded-3xl border border-amber-500/20 p-5 cursor-pointer"><h3 className="font-serif text-base font-bold text-white">{art.title}</h3><p className="text-xs text-gray-400 mt-2 line-clamp-2">{art.excerpt}</p></div>))}</div>
        {selectedArt && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"><div className="bg-[#161411] border border-amber-500/30 rounded-3xl p-6 max-w-xl text-white relative"><button onClick={() => setSelectedArt(null)} className="absolute top-4 right-4 text-white"><X className="w-5 h-5" /></button><h2 className="text-xl font-serif font-bold mb-2">{selectedArt.title}</h2><p className="text-xs text-gray-300">{selectedArt.content}</p></div></div>)}
      </div>
    </section>
  );
};
