'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/barberData';

export const BarberFinder: React.FC<any> = ({ onSelectService, onOpenBooking }) => {
  const [goal, setGoal] = useState('Haircut + Beard');

  const goals = ['Haircut + Beard', 'Skin Fade Only', 'Hot Towel Shave', 'Facial & Refresh', 'VIP Royal Grooming'];

  const matched = SERVICES_DATA.filter(s => {
    if (goal === 'Skin Fade Only') return s.id === 'skin-fade';
    if (goal === 'Hot Towel Shave') return s.id === 'hot-shave';
    if (goal === 'Facial & Refresh') return s.id === 'facial-grooming';
    if (goal === 'VIP Royal Grooming') return s.id === 'royal-grooming';
    return s.id === 'cut-and-beard';
  });

  return (
    <section id="match" className="py-24 bg-neutral-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">SMART GROOMING MATCH</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Find Your Signature Grooming</h2>
        </div>

        <div className="bg-neutral-950 p-8 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto space-y-6">
          <label className="text-xs font-mono text-amber-400 font-bold uppercase block text-center">What is your grooming objective today?</label>
          <div className="flex flex-wrap justify-center gap-2">
            {goals.map(g => (
              <button key={g} onClick={() => setGoal(g)} className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${goal === g ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-neutral-900 text-neutral-300'}`}>
                {g}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t border-neutral-800">
            {matched.map(item => (
              <div key={item.id} className="bg-neutral-900 p-5 rounded-2xl border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-sans font-bold text-base text-white">{item.name}</h4>
                  <p className="text-xs text-neutral-300 mt-1">{item.description}</p>
                  <span className="text-xs font-mono text-amber-300 font-bold mt-2 block">Sample Fee: AED {item.price} • {item.duration}</span>
                </div>
                <button onClick={() => { onSelectService(item); onOpenBooking(); }} className="px-5 py-2.5 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                  <span>Book</span><ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
