'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WomensHealthSection: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/20 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Women's Healthcare Sanctuary</h2>
          <p className="text-xs text-slate-300">Comprehensive annual wellness reviews & gynecology consultations (AED 450).</p>
          <button onClick={() => onOpenBooking()} className="px-6 py-3 bg-rose-500 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>Book Women's Wellness</span><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
