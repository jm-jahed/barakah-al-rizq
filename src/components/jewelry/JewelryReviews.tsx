'use client';
import React from 'react';

export const JewelryReviews: React.FC<any> = (props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0F0D0B] text-[#F3EFEA] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">
            Maison D'Or • HIGH JEWELRY ATELIER
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-4">
            Jewelry Reviews
          </h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Crafted in 18K solid gold and GIA-certified conflict-free natural diamonds in Dubai.
          </p>
        </div>

        <div className="bg-[#181512] p-8 rounded-3xl border border-amber-500/20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#0F0D0B] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">GIA Certified Diamonds</span>
              <p className="text-xs text-gray-300">Every stone above 0.50ct includes a laser-inscribed GIA origin certificate and dossier.</p>
            </div>
            <div className="p-5 bg-[#0F0D0B] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">18K Solid Gold & Platinum</span>
              <p className="text-xs text-gray-300">Hand-finished 18K Yellow, Rose Gold, and 950 Platinum setting precision.</p>
            </div>
            <div className="p-5 bg-[#0F0D0B] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">Armored VIP UAE Delivery</span>
              <p className="text-xs text-gray-300">Insured armored courier delivery across Dubai, Abu Dhabi, and Sharjah within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
