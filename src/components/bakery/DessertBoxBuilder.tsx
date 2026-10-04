'use client';
import React, { useState } from 'react';

export const DessertBoxBuilder: React.FC = () => {
  const [size, setSize] = useState(12);
  const items = ['Belgian Brownie Bites', 'French Macarons', 'Pistachio Tarts', 'Mini Velvet Cakes'];
  return (
    <section className="py-20 bg-[#1A120B] text-white border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2">CUSTOM ASSORTMENTS</span>
        <h2 className="text-3xl sm:text-5xl font-serif mb-8">Dessert Box Assortment.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {items.map(item => (
            <div key={item} className="bg-[#241A12] p-5 rounded-2xl border border-amber-900/30 text-left">
              <h4 className="font-serif text-sm font-semibold text-white mb-2">{item}</h4>
              <span className="text-[10px] font-mono text-amber-400">Fresh Daily</span>
            </div>
          ))}
        </div>
        <div className="inline-flex items-center gap-4 bg-[#241A12] px-6 py-3 rounded-2xl border border-amber-900/30 font-mono text-xs">
          <span>Selected: {size} Piece Box</span>
          <span className="text-amber-400 font-bold">AED {size === 6 ? 120 : size === 12 ? 220 : 380}</span>
        </div>
      </div>
    </section>
  );
};
