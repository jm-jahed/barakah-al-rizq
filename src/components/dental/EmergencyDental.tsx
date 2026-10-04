'use client';
import React from 'react';
import { Phone } from 'lucide-react';

export const EmergencyDental: React.FC<any> = () => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-rose-500/10 border border-rose-500/30 p-8 rounded-3xl max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-sans font-bold text-white">Urgent & Emergency Dental Slot</h2>
          <p className="text-xs text-slate-300">Severe toothache, chipped front tooth, or lost filling? We reserve daily emergency appointments.</p>
          <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="px-6 py-3 bg-rose-500 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><Phone className="w-4 h-4" /> Request Urgent Slot</a>
        </div>
      </div>
    </section>
  );
};
