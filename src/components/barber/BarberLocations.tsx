'use client';
import React from 'react';

export const BarberLocations: React.FC<any> = () => {
  const locs = ['DIFC Studio (Gate Precinct 4)', 'Downtown Dubai (Boulevard)', 'Dubai Marina (Yacht Club)', 'Jumeirah Studio (Beach Road)', 'Business Bay (Bay Square)'];

  return (
    <section id="locations" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">5 Dubai Barber Studios</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{locs.map((l, i) => (<div key={i} className="bg-neutral-900 p-6 rounded-3xl border border-amber-500/20 font-sans font-bold text-sm text-white">{l}</div>))}</div>
      </div>
    </section>
  );
};
