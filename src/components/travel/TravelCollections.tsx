'use client';
import React from 'react';

export const TravelCollections: React.FC<any> = () => {
  const collections = [
    { title: 'Romantic Escapes', desc: 'Overwater villas, sunset yacht charters & secluded beaches.' },
    { title: 'Swiss Alpine Luxury', desc: 'Glacier Express Excellence Class & historic chalets.' },
    { title: 'Cultural Mastery', desc: 'Private Kyoto temples & Italian coastal estates.' },
    { title: 'Wellness Retreats', desc: 'Holistic Balinese healing & alpine spa hydrotherapy.' }
  ];

  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">Curated Collections</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 transition-colors">
              <h3 className="font-serif font-bold text-lg text-white mb-2">{c.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
