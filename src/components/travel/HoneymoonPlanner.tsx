'use client';
import React from 'react';

export const HoneymoonPlanner: React.FC<any> = ({ onOpenInquiry }) => {
  return (
    <section id="honeymoon" className="py-24 bg-[#0A1017] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-serif font-bold text-white">Bespoke Honeymoon Planning</h2>
          <p className="text-xs text-slate-300">Overwater sanctuaries in the Maldives, private yachting in Capri, and romantic Swiss retreats.</p>
          <button onClick={() => onOpenInquiry('Honeymoon')} className="px-6 py-3 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Plan My Honeymoon</button>
        </div>
      </div>
    </section>
  );
};
