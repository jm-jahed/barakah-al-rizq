'use client';
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '@/data/wellnessData';

export const WellnessMemberships: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="memberships" className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">STUDIO PASSES & MEMBERSHIPS</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Membership Ritual Plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map(plan => (
            <div key={plan.id} className={`bg-[#181512] rounded-3xl p-6 md:p-8 border flex flex-col justify-between relative ${plan.popular ? 'border-amber-400 shadow-2xl bg-[#1C1814]' : 'border-amber-500/20'}`}>
              {plan.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-black font-mono font-extrabold text-[10px] uppercase">MOST POPULAR PASS</span>}
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-2">{plan.name}</span>
                <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl sm:text-4xl font-serif font-extrabold text-white">AED {plan.price}</span><span className="text-xs font-mono text-gray-400">/{plan.cadence}</span></div>
                <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">{plan.tagline}</p>
                <div className="space-y-3 pt-4 border-t border-amber-500/15">
                  {plan.features.map((f, i) => (
                    <div key={i} className="text-xs text-gray-300 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>{f}</span></div>
                  ))}
                </div>
              </div>
              <button onClick={() => onOpenBooking()} className={`w-full py-3.5 rounded-2xl font-mono font-bold text-xs uppercase tracking-wider mt-8 flex items-center justify-center gap-2 ${plan.popular ? 'bg-amber-500 text-black' : 'bg-white/10 text-white'}`}>
                <span>Select {plan.name}</span><ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
