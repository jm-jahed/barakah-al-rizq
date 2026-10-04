'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowLeftRight, 
  ShieldCheck, 
  Clock, 
  Heart,
  Stethoscope
} from 'lucide-react';

const CASES = [
  {
    id: 'case-dental',
    title: 'Grade-3 Periodontal Calculus & Gum Disease',
    category: 'Advanced Dental Prophylaxis',
    beforeImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
    beforeDesc: 'Heavy subgingival tartar, bleeding gums, severe halitosis, and pain while chewing hard food.',
    afterDesc: 'Subgingival ultrasonic scaling, high-speed fluoride polish, full gum restoration, and zero pain chewing.',
    turnaround: 'Same-Day Procedure (60 min)',
    doctor: 'Dr. Sarah Al-Falasi, MRCVS'
  },
  {
    id: 'case-grooming',
    title: 'Severe Matted Undercoat vs Show-Ring Silk Trim',
    category: 'Dermatological Spa & Restyle',
    beforeImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop',
    beforeDesc: 'Skin-tight pelt matting causing painful dermal pull and heat entrapment during UAE summer.',
    afterDesc: 'Pain-free gentle dematting, ozone jacuzzi soak, blueberry facial, and hand-scissored fluffy teddy trim.',
    turnaround: '2-Hour Spa Session',
    doctor: 'Master Groomer Alexander'
  }
];

export const PetBeforeAfter: React.FC<any> = () => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const activeCase = CASES[activeCaseIdx];

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-[#090E14] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CLINICAL & SPA TRANSFORMATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Verified Patient <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Recovery & Results.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Drag the interactive comparison slider to witness real patient recoveries from severe dental disease, trauma surgery, and luxury coat restorations.
            </p>
          </div>

          {/* Case Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0E1720] border border-white/10 self-start md:self-end">
            {CASES.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCaseIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCaseIdx === idx ? 'bg-emerald-400 text-slate-950 shadow-lg' : 'text-slate-300 hover:text-white'
                }`}
              >
                Case #{idx + 1}: {c.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Visual Drag Slider */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl select-none">
            {/* After Image (Full background) */}
            <img
              src={activeCase.afterImage}
              alt="After Clinical Care"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-emerald-500 text-slate-950 font-mono font-black text-xs z-10">
              AFTER TREATMENT
            </span>

            {/* Before Image (Clipped via sliderPos %) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt="Before Clinical Care"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: '100%', maxWidth: 'none' }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-rose-500 text-white font-mono font-black text-xs z-10">
                BEFORE
              </span>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Invisible Range Input for Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare before and after"
            />
          </div>

          {/* Right: Clinical Context Deck */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#0E1620] border border-white/10 space-y-6 backdrop-blur-xl">
            <div className="space-y-1.5 border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                {activeCase.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                {activeCase.title}
              </h3>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                <span className="text-rose-300 font-bold block uppercase text-[10px]">Pre-Procedure State:</span>
                <p className="text-slate-200 font-sans text-xs leading-relaxed">{activeCase.beforeDesc}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <span className="text-emerald-300 font-bold block uppercase text-[10px]">Clinical Outcome:</span>
                <p className="text-slate-200 font-sans text-xs leading-relaxed">{activeCase.afterDesc}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{activeCase.turnaround}</span>
              </div>
              <span className="text-emerald-300 font-bold">{activeCase.doctor}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PetBeforeAfter;
