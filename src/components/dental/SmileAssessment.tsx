'use client';
import React, { useState } from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const SmileAssessment: React.FC<any> = ({ onOpenBooking }) => {
  const [concern, setConcern] = useState('Tooth Color');

  return (
    <section id="assessment" className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Interactive Smile Assessment</h2></div>
        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl max-w-4xl mx-auto mb-8 text-xs text-amber-200 flex items-start gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" /><span>Demo Experience Notice: This assessment provides general educational guidance only and is not a medical diagnosis.</span>
        </div>
        <div className="bg-slate-950 p-8 rounded-3xl border border-cyan-500/30 max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Select Your Smile Preference</span>
          <div className="flex justify-center flex-wrap gap-2">
            {['Tooth Color', 'Tooth Shape', 'Spacing / Gaps', 'Crookedness', 'Missing Tooth'].map(c => (
              <button key={c} onClick={() => setConcern(c)} className={`px-4 py-2 rounded-xl text-xs font-mono ${concern === c ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}>{c}</button>
            ))}
          </div>
          <button onClick={() => onOpenBooking()} className="px-6 py-3 bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>Book Assessment Visit</span><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
