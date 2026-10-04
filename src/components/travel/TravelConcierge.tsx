'use client';
import React from 'react';

export const TravelConcierge: React.FC<any> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-950 p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-serif font-bold text-white">24/7 VIP Travel Concierge Desk</h2>
          <p className="text-xs text-slate-300">Instant Michelin restaurant reservations, private drivers & event access.</p>
          <button onClick={() => onOpenInquiry('Concierge')} className="px-6 py-3 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Speak With Concierge</button>
        </div>
      </div>
    </section>
  );
};
