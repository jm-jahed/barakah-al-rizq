'use client';
import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export const WellnessCalculator: React.FC<any> = ({ onOpenBooking }) => {
  const [sessionsPerWeek, setSessionsPerWeek] = useState(3);
  const [includeReformer, setIncludeReformer] = useState(true);
  const [includePrivate, setIncludePrivate] = useState(false);

  const monthlySessions = sessionsPerWeek * 4;
  let estimatedCost = 499;

  if (sessionsPerWeek <= 1 && !includeReformer) estimatedCost = 299;
  else if (sessionsPerWeek > 3 || includeReformer) estimatedCost = 799;
  if (includePrivate) estimatedCost += 800;

  return (
    <section className="py-20 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181512] rounded-3xl p-8 border border-amber-500/20 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-amber-400">
              <Calculator className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest">Interactive Investment Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Calculate Your Monthly Ritual</h3>

            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span>Classes Per Week: {sessionsPerWeek} Sessions</span>
                <span className="text-amber-300 font-bold">{monthlySessions} Sessions/mo</span>
              </div>
              <input type="range" min="1" max="7" value={sessionsPerWeek} onChange={(e) => setSessionsPerWeek(parseInt(e.target.value))} className="w-full accent-amber-400 cursor-pointer" />
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <label className="flex items-center gap-2 text-xs font-mono text-gray-300 cursor-pointer">
                <input type="checkbox" checked={includeReformer} onChange={(e) => setIncludeReformer(e.target.checked)} className="rounded accent-amber-400" /> Include Reformer Pilates Access
              </label>
              <label className="flex items-center gap-2 text-xs font-mono text-gray-300 cursor-pointer">
                <input type="checkbox" checked={includePrivate} onChange={(e) => setIncludePrivate(e.target.checked)} className="rounded accent-amber-400" /> Include 1-on-1 Private Sessions
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0E0D0B] p-6 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">ESTIMATED MONTHLY COST</span>
            <div className="text-4xl font-serif font-extrabold text-white">AED {estimatedCost}</div>
            <span className="text-xs font-mono text-gray-400 block">Recommended Pass: {estimatedCost >= 799 ? 'VIP Reformer' : estimatedCost >= 499 ? 'Unlimited Pass' : 'Essential Pass'}</span>
            <button onClick={() => onOpenBooking()} className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2">
              <span>Reserve Recommended Plan</span><ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
