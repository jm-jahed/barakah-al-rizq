'use client';

import React from 'react';

export const TrustStrip: React.FC = () => {
  const logos = [
    { name: 'NOVA GLOBAL', category: 'Retail Logistics' },
    { name: 'ARC FREIGHT', category: 'Heavy Industrial' },
    { name: 'ORBIT TECH', category: 'Data Hardware' },
    { name: 'LUMEN PHARMA', category: 'Healthcare' },
    { name: 'NEXA CARGO', category: 'GCC Commerce' },
    { name: 'VERTEX GROUP', category: 'Enterprise' },
    { name: 'ATLAS LINES', category: 'Maritime Air' },
    { name: 'MOTION MOTORS', category: 'Automotive' },
  ];

  return (
    <section className="py-12 bg-[#070B14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-8">
          TRUSTED BY ENTERPRISES THAT MOVE THE WORLD
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group cursor-default"
            >
              <span className="text-xs font-black font-mono text-gray-300 group-hover:text-white tracking-widest transition-colors">
                {logo.name}
              </span>
              <span className="text-[9px] font-mono text-gray-500 group-hover:text-cyan-400 transition-colors mt-0.5">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
