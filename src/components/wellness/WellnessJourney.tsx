'use client';
import React from 'react';

export const WellnessJourney: React.FC<any> = () => {
  const milestones = [
    { phase: 'Baseline (Week 1)', title: 'Assessment & Alignment', desc: 'Initial posture & mobility scoring.' },
    { phase: 'Phase 1 (Week 4)', title: 'Habit Foundation', desc: 'Established 3x/week movement routine.' },
    { phase: 'Phase 2 (Week 8)', title: 'Expanded Mobility', desc: '+25% hamstring ROM.' },
    { phase: 'Phase 3 (Week 12)', title: 'Sustained Vitality', desc: 'Deep physical flexibility.' }
  ];

  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Sample Member Journey</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{milestones.map((m, idx) => (<div key={idx} className="bg-[#161411] p-6 rounded-3xl border border-amber-500/20"><span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">{m.phase}</span><h3 className="font-serif text-lg font-bold text-white">{m.title}</h3><p className="text-xs text-gray-400 mt-1">{m.desc}</p></div>))}</div>
      </div>
    </section>
  );
};
