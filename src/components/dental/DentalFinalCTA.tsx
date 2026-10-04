'use client';
import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export const DentalFinalCTA: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-slate-900/90 text-white text-center">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="text-4xl sm:text-6xl font-sans font-extrabold text-white">Your Smile Deserves Better.</h2>
        <div className="flex justify-center gap-4 pt-4">
          <button onClick={() => onOpenBooking()} className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center gap-2"><Calendar className="w-4 h-4" /> Book Appointment</button>
          <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-bold text-xs uppercase flex items-center gap-2"><Phone className="w-4 h-4" /> WhatsApp Clinic</a>
        </div>
      </div>
    </section>
  );
};
