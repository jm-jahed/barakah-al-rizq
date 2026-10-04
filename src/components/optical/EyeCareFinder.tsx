'use client';
import React, { useState } from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/opticalData';

export const EyeCareFinder: React.FC<any> = ({ onSelectService, onOpenBooking }) => {
  const [symptom, setSymptom] = useState('Blurry Distance Vision');

  const symptomsList = ['Blurry Distance Vision', 'Digital Screen Fatigue', 'Dry / Burning Eyes', 'Child School Vision', 'Contact Lens Comfort'];

  const matched = SERVICES_DATA.filter(s => {
    if (symptom === 'Blurry Distance Vision') return s.id === 'exam-comp';
    if (symptom === 'Digital Screen Fatigue') return s.id === 'exam-comp';
    if (symptom === 'Dry / Burning Eyes') return s.id === 'exam-dryeye';
    if (symptom === 'Child School Vision') return s.id === 'exam-myopia';
    return s.id === 'exam-contact';
  });

  return (
    <section id="care-finder" className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.3em] block mb-2 font-bold">SMART CLINICAL RECOMMENDATION</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Interactive Eye Care Finder</h2>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl max-w-4xl mx-auto mb-8 text-xs text-amber-200 flex items-start gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span>Demo Guidance Notice: This assessment is an educational recommendation tool and is not a medical diagnosis.</span>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-sky-500/30 max-w-4xl mx-auto space-y-6">
          <label className="text-xs font-mono text-sky-400 font-bold uppercase block text-center">Select Your Primary Vision Concern</label>
          <div className="flex flex-wrap justify-center gap-2">
            {symptomsList.map(s => (
              <button key={s} onClick={() => setSymptom(s)} className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${symptom === s ? 'bg-sky-400 text-slate-950 font-bold' : 'bg-slate-950 text-slate-300'}`}>
                {s}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            {matched.map(item => (
              <div key={item.id} className="bg-slate-950 p-5 rounded-2xl border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-sans font-bold text-base text-white">{item.name}</h4>
                  <p className="text-xs text-slate-300 mt-1">{item.description}</p>
                  <span className="text-xs font-mono text-sky-300 font-bold mt-2 block">Sample Fee: AED {item.price} • {item.duration}</span>
                </div>
                <button onClick={() => { onSelectService(item); onOpenBooking(); }} className="px-5 py-2.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                  <span>Book Visit</span><ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
