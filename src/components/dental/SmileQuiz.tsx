'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SmileQuiz: React.FC<any> = ({ onOpenBooking }) => {
  const [step, setStep] = useState(1);
  const [q1, setQ1] = useState('Brighter Teeth');

  return (
    <section className="py-24 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500/30 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Multi-Step Smile Goal Quiz</span>
          <h3 className="text-2xl font-sans font-bold text-white">Find Your Treatment Path</h3>
          <div className="flex justify-center gap-2">
            {['Brighter Teeth', 'Straighter Alignment', 'Veneers Makeover'].map(ans => (
              <button key={ans} onClick={() => setQ1(ans)} className={`px-4 py-2 rounded-xl text-xs font-mono ${q1 === ans ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-950 text-slate-300'}`}>{ans}</button>
            ))}
          </div>
          <button onClick={() => onOpenBooking()} className="px-6 py-3 bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>View Results & Book</span><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
