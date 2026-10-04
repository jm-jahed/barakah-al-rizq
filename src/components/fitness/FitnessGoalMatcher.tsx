'use client';
import React, { useState } from 'react';
import { FITNESS_PROGRAMS, FITNESS_TRAINERS } from '@/data/fitnessData';

export const FitnessGoalMatcher: React.FC<any> = ({ onSelectProgram }) => {
  const [goal, setGoal] = useState('Lose Fat & Lean Recomp');
  const [days, setDays] = useState('4 Days / Week');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="matcher" className="py-24 bg-[#090807] text-[#E8E2D5] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full inline-block mb-3">
            SMART CONSULTATION • AI GOAL MATCHER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">FITNESS GOAL MATCHER.</h2>
          <p className="text-xs text-gray-400">Answer 2 questions to receive your custom program & master trainer recommendation.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#12100F] p-8 rounded-3xl border border-red-500/20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-red-300 uppercase tracking-widest mb-2">Primary Fitness Goal</label>
              <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-[#090807] border border-red-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['Lose Fat & Lean Recomp', 'Build Muscle Density', 'Explosive Athletic Power', 'Boxing & Combat Cardio', 'Mobility & Posture Reset'].map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-red-300 uppercase tracking-widest mb-2">Weekly Commitment</label>
              <select value={days} onChange={(e) => setDays(e.target.value)} className="w-full bg-[#090807] border border-red-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['3 Days / Week', '4 Days / Week', '5 Days / Week', '6 Days / Week'].map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setSubmitted(true)} className="w-full py-4 bg-red-600 text-white font-extrabold text-xs uppercase font-mono tracking-widest rounded-xl shadow-xl">
            Generate Consultation Recommendation →
          </button>

          {submitted && (
            <div className="mt-8 pt-8 border-t border-red-500/20">
              <span className="text-xs font-mono text-emerald-400 block mb-4 text-center">✓ Recommended APEX Program Match Generated</span>
              <div className="bg-[#090807] p-6 rounded-2xl border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase block mb-1">Top Recommended Protocol</span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">{FITNESS_PROGRAMS[0].title}</h3>
                  <p className="text-xs text-gray-400 font-mono mb-2">{FITNESS_PROGRAMS[0].subtitle}</p>
                  <span className="text-xs font-mono text-red-300 font-bold">Coach: {FITNESS_TRAINERS[0].name}</span>
                </div>
                <button onClick={() => onSelectProgram?.(FITNESS_PROGRAMS[0])} className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold font-mono uppercase tracking-wider rounded-xl">
                  View Program Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
