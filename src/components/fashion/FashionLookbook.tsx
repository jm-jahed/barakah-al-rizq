'use client';
import React from 'react';

export const FashionLookbook: React.FC<any> = (props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0C0B0A] text-[#F3EFEA] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">
            ÉLANE ATELIER • DUBAI BOUTIQUE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-4">
            Fashion Lookbook
          </h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Curated UAE resort wear, silk abayas, and Italian wool tailoring with realistic AED pricing.
          </p>
        </div>

        <div className="bg-[#161412] p-8 rounded-3xl border border-amber-500/20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#0C0B0A] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">100% Mulberry Silk</span>
              <p className="text-xs text-gray-300">Grade 6A Mulberry silk and organic Italian linen tailored in our Dubai studio.</p>
            </div>
            <div className="p-5 bg-[#0C0B0A] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">Bespoke Alterations</span>
              <p className="text-xs text-gray-300">Complimentary in-house seamstress adjustments for perfect length and silhouette fit.</p>
            </div>
            <div className="p-5 bg-[#0C0B0A] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">Try-at-Home Delivery</span>
              <p className="text-xs text-gray-300">White-glove Dubai courier delivery with 15-minute home try-on window.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
