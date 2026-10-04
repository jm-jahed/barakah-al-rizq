'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TREATMENTS_DATA } from '@/data/dentalData';

export const TreatmentFinder: React.FC<any> = ({ onSelectTreatment, onOpenBooking }) => {
  const [concern, setConcern] = useState('Stained Teeth');
  const [budget, setBudget] = useState('AED 500 - 2,000');

  const concernsList = ['Stained Teeth', 'Missing Tooth', 'Crooked / Gapped Teeth', 'Cavity / Pain', 'Child Checkup', 'Full Smile Design'];

  const matched = TREATMENTS_DATA.filter(t => {
    if (concern === 'Stained Teeth') return t.id === 'whitening' || t.id === 'cleaning';
    if (concern === 'Missing Tooth') return t.id === 'implants' || t.id === 'crown';
    if (concern === 'Crooked / Gapped Teeth') return t.id === 'aligners' || t.id === 'veneers';
    if (concern === 'Cavity / Pain') return t.id === 'filling' || t.id === 'root-canal';
    if (concern === 'Child Checkup') return t.id === 'pediatric';
    return t.id === 'smile-makeover' || t.id === 'veneers';
  });

  return (
    <section id="finder" className="py-24 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] block mb-2 font-bold">SMART DENTAL FINDER</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Interactive Treatment Finder</h2>
          <p className="text-sm text-slate-300 font-sans">Select your primary concern to view recommended treatment paths and sample AED estimates.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-slate-900 p-6 md:p-8 rounded-3xl border border-cyan-500/30 space-y-6">
            <div>
              <label className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider block mb-3">1. Primary Concern</label>
              <div className="flex flex-wrap gap-2">
                {concernsList.map(c => (
                  <button key={c} onClick={() => setConcern(c)} className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${concern === c ? 'bg-cyan-400 text-slate-950 font-bold shadow-lg' : 'bg-slate-950 text-slate-300 border border-slate-800'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider block mb-3">2. Sample Budget Preference</label>
              <select value={budget} onChange={e=>setBudget(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white">
                <option>AED 150 - 500</option>
                <option>AED 500 - 2,000</option>
                <option>AED 2,000 - 8,000+</option>
              </select>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">✓ Recommended Treatments ({matched.length} Options)</span>
            {matched.map(item => (
              <div key={item.id} className="bg-slate-900 p-5 rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">{item.category} • {item.duration}</span>
                    <h4 className="font-sans font-bold text-base text-white">{item.name}</h4>
                    <span className="text-xs font-mono text-teal-300 font-bold">Sample: AED {item.price}</span>
                  </div>
                </div>
                <button onClick={() => { if(onSelectTreatment) onSelectTreatment(item); onOpenBooking(); }} className="px-4 py-2 bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
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
