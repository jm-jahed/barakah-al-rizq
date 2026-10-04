'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const OrthodonticsSection: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="ortho" className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-950 p-8 rounded-3xl border border-cyan-500/30 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Invisible Clear Aligner Alignment</h2>
          <p className="text-xs text-slate-300">Custom 3D printed transparent aligner trays discreetly straightening teeth without metal braces (AED 7,500).</p>
          <button onClick={() => onOpenBooking()} className="px-6 py-3 bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>Book Aligner Consultation</span><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
