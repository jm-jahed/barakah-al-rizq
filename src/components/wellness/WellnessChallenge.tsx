'use client';
import React, { useState } from 'react';
import { Flame } from 'lucide-react';

export const WellnessChallenge: React.FC<any> = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const toggleDay = (day: number) => {
    if (completedDays.includes(day)) setCompletedDays(completedDays.filter(d => d !== day));
    else setCompletedDays([...completedDays, day]);
  };

  const progressPct = Math.round((completedDays.length / 30) * 100);

  return (
    <section className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">INTERACTIVE HABIT TRACKER</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2">30-Day Wellness Reset Challenge</h2>
        </div>

        <div className="bg-[#181512] p-6 md:p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-300 font-bold uppercase flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-400" /> Active Reset Progress</span>
            <span className="text-xs font-mono text-white font-bold">{completedDays.length} / 30 Days ({progressPct}%)</span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 pt-2">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <button key={day} onClick={() => toggleDay(day)} className={`p-3 rounded-xl border font-mono text-xs ${completedDays.includes(day) ? 'bg-amber-500 text-black border-amber-400 font-bold' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
