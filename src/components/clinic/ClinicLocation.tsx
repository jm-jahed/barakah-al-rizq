'use client';
import React from 'react';

export const ClinicLocation: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 border border-sky-500/30 text-center space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Jumeirah 1 Location</h2>
          <p className="text-xs font-mono text-slate-300">Level 3, Al Wasl Medical Tower, Jumeirah 1, Dubai, UAE • Free VIP Valet Parking</p>
        </div>
      </div>
    </section>
  );
};
