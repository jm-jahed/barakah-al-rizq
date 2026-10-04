'use client';
import React from 'react';

export const BrandWall: React.FC = () => {
  const brands = ['NIKE', 'JORDAN', 'ADIDAS', 'NEW BALANCE', 'ASICS', 'PUMA', 'CONVERSE', 'VANS'];
  return (
    <section className="py-16 bg-[#141210] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-6">CURATED BRAND PARTNERS</span>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-lg sm:text-2xl font-serif font-black tracking-widest text-gray-400">
          {brands.map(b => <span key={b} className="hover:text-amber-300 transition-colors cursor-pointer">{b}</span>)}
        </div>
      </div>
    </section>
  );
};
