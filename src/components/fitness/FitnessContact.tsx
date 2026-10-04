'use client';
import React from 'react';

export const FitnessContact: React.FC = () => {
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">GET IN TOUCH</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-10">Downtown Dubai Facility.</h2>
        <div className="max-w-xl mx-auto bg-[#12100F] p-8 rounded-3xl border border-red-500/20 text-left font-mono text-xs space-y-3">
          <p className="text-white font-bold text-base font-serif">APEX ATHLETICS Dubai</p>
          <p className="text-gray-400">Bulding 4, DIFC Gate Precinct, Downtown Dubai, UAE</p>
          <p className="text-red-400 font-bold">Hours: 24 Hours / 7 Days a Week</p>
          <p className="text-emerald-400">WhatsApp: +971 50 123 4567</p>
        </div>
      </div>
    </section>
  );
};
