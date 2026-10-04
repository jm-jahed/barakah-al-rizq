'use client';
import React from 'react';

export const CorporateTravel: React.FC<any> = ({ onOpenInquiry }) => {
  return (
    <section id="corporate" className="py-24 bg-[#0A1017] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-serif font-bold text-white">Executive Corporate Travel Management</h2>
          <p className="text-xs text-slate-300">C-suite private aviation, executive transfers, and corporate retreats.</p>
          <button onClick={() => onOpenInquiry('Corporate')} className="px-6 py-3 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Speak With Corporate Team</button>
        </div>
      </div>
    </section>
  );
};
