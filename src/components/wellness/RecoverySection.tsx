'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const RecoverySection: React.FC<any> = ({ onOpenBooking }) => {
  const recoveryServices = [
    { title: 'Assisted Fascial Stretch Therapy', duration: '45 min', price: 175, desc: '1-on-1 therapist guided neuromuscular stretching decompressing spinal vertebrae and hamstring tightness.' },
    { title: 'Somatic Breathwork Recovery', duration: '45 min', price: 85, desc: 'Guided vagal nerve stimulation using rhythmic breathing patterns for instant stress reset.' },
    { title: 'Targeted Cold Compression Recovery', duration: '30 min', price: 120, desc: 'Hyperbaric cold therapy boots and cryo sleeves flushing lymphatic lactic acid.' }
  ];

  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">NEUROMUSCULAR RECOVERY SUITE</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Active Body Recovery & Regeneration</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recoveryServices.map((r, idx) => (
            <div key={idx} className="bg-[#161411] p-6 rounded-3xl border border-amber-500/20 flex flex-col justify-between hover:border-amber-400/50 transition-all">
              <div>
                <span className="text-xs font-mono text-amber-400 block mb-1">{r.duration} Session</span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{r.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">{r.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-base font-mono font-bold text-amber-200">AED {r.price}</span>
                <button onClick={() => onOpenBooking()} className="px-4 py-2 bg-amber-500 text-black font-mono font-bold text-xs rounded-xl flex items-center gap-1">
                  <span>Book</span><ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
