'use client';
import React from 'react';
import { Smile, ArrowRight } from 'lucide-react';

export const CosmeticDentistry: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="cosmetic" className="py-24 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-cyan-500/30 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyan-400">
              <Smile className="w-5 h-5" /><span className="text-xs font-mono font-bold uppercase tracking-widest">COSMETIC SMILE DESIGN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white">Porcelain Veneers & Laser Whitening</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Handcrafted ultra-thin ceramic veneers, 3D facial proportion design, and cold-laser shade whitening for your perfect smile makeover.
            </p>
          </div>
          <div className="lg:col-span-5 text-center bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-mono text-cyan-300 block font-bold">Veneers Sample: AED 1,800 / unit</span>
            <button onClick={() => onOpenBooking()} className="w-full py-3.5 bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2">
              <span>Book Cosmetic Consultation</span><ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
