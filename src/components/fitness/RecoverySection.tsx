'use client';
import React from 'react';

export const RecoverySection: React.FC = () => {
  const recs = [
    { title: 'Thermal Sauna Suite', desc: '85°C Finnish dry sauna for neural relaxation and cardiovascular circulation.' },
    { title: 'Cryo Cold Plunge', desc: '14°C ice water immersion tubs designed to eliminate acute post-workout inflammation.' },
    { title: 'Sports Massage Therapy', desc: 'Deep myofascial release & hyper-mobility reset with licensed sports therapists.' },
  ];
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">NEURAL RESET</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Recovery Suite.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recs.map((r) => (
            <div key={r.title} className="bg-[#12100F] p-8 rounded-3xl border border-red-500/15 text-left">
              <h3 className="font-serif text-xl font-bold text-white mb-2">{r.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
