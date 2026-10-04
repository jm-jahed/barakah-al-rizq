'use client';
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Wind } from 'lucide-react';

export const MindfulnessSection: React.FC<any> = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            if (phase === 'Inhale') { setPhase('Hold'); return 4; }
            if (phase === 'Hold') { setPhase('Exhale'); return 4; }
            if (phase === 'Exhale') { setPhase('Rest'); return 4; }
            if (phase === 'Rest') { setPhase('Inhale'); return 4; }
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('Inhale');
    setSeconds(4);
  };

  return (
    <section id="mindfulness" className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181512] rounded-3xl p-8 md:p-12 border border-amber-500/20 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4">
            <Wind className="w-3.5 h-3.5" /><span>INTERACTIVE BREATHWORK PACER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">Box Breathing Nervous System Reset</h2>

          <div className="relative w-48 h-48 mx-auto flex items-center justify-center my-8">
            <div className={`absolute inset-0 rounded-full border-2 border-amber-400/40 transition-all duration-1000 ${isActive ? 'scale-110 bg-amber-500/10' : 'scale-90'}`} />
            <div className="text-center z-10">
              <span className="text-2xl font-serif font-bold text-amber-300 block">{phase}</span>
              <span className="text-4xl font-mono font-extrabold text-white">{seconds}s</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button onClick={() => setIsActive(!isActive)} className="px-6 py-3 rounded-full bg-amber-500 text-black font-mono font-bold text-xs uppercase flex items-center gap-2">
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}<span>{isActive ? 'Pause Pacer' : 'Start 4-4-4-4 Breath'}</span>
            </button>
            <button onClick={handleReset} className="p-3 rounded-full bg-white/10 text-white"><RotateCcw className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
