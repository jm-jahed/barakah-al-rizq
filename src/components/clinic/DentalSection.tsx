'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const DentalSection: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/20 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Preventative & Cosmetic Dentistry</h2>
          <p className="text-xs text-slate-300">Painless ultrasonic scale, polish & tooth shade review (AED 400).</p>
          <button onClick={() => onOpenBooking()} className="px-6 py-3 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>Book Dental Visit</span><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
