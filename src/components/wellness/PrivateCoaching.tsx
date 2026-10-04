'use client';
import React from 'react';
import { UserCheck } from 'lucide-react';

export const PrivateCoaching: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">1-ON-1 VIP SANCTUARY</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Bespoke Private Wellness Coaching</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#181512] p-8 rounded-3xl border border-amber-500/20 space-y-4">
            <UserCheck className="w-8 h-8 text-amber-400" />
            <h3 className="font-serif text-2xl font-bold text-white">Single Private Session</h3>
            <div className="text-2xl font-mono font-bold text-amber-300">AED 350 <span className="text-xs text-gray-400">/ 60 min</span></div>
            <button onClick={() => onOpenBooking()} className="w-full py-3 bg-amber-500 text-black font-mono font-bold text-xs uppercase rounded-xl">Book Private Session</button>
          </div>

          <div className="bg-[#181512] p-8 rounded-3xl border border-amber-400 shadow-2xl space-y-4 relative">
            <UserCheck className="w-8 h-8 text-amber-400" />
            <h3 className="font-serif text-2xl font-bold text-white">Monthly Private Retainer</h3>
            <div className="text-2xl font-mono font-bold text-amber-300">AED 1,499 <span className="text-xs text-gray-400">/ month</span></div>
            <button onClick={() => onOpenBooking()} className="w-full py-3 bg-amber-500 text-black font-mono font-bold text-xs uppercase rounded-xl">Inquire Private Retainer</button>
          </div>
        </div>
      </div>
    </section>
  );
};
