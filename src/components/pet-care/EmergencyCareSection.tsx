'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  PhoneCall, 
  AlertTriangle, 
  Activity, 
  Clock, 
  ShieldAlert, 
  Navigation, 
  HeartHandshake, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';

const TRIAGE_LEVELS = [
  {
    code: 'RED — RESUSCITATION',
    severity: 'Immediate Level-1 Trauma',
    color: 'border-rose-500/60 bg-rose-500/10 text-rose-300',
    examples: 'Acute collapse, severe vehicular trauma, heavy blood loss, non-responsive breathing, heat stroke > 41°C',
    action: 'Zero wait. Immediate bay intubation, high-flow oxygen, IV fluid resuscitation, and emergency ultrasound.'
  },
  {
    code: 'AMBER — CRITICAL URGENT',
    severity: 'Urgent Care (< 10 min)',
    color: 'border-amber-500/60 bg-amber-500/10 text-amber-300',
    examples: 'Suspected gastric dilation (Bloat / GDV), rat poison/chocolate ingestion, male cat urinary blockage, seizures',
    action: 'Immediate stabilization, STAT blood biochemistry, gastric decompression, or urinary catheterization.'
  },
  {
    code: 'YELLOW — SUBACUTE',
    severity: 'Priority Assessment (< 30 min)',
    color: 'border-yellow-500/60 bg-yellow-500/10 text-yellow-300',
    examples: 'Persistent vomiting/diarrhea > 24h, non-weight bearing lameness, deep skin bite wounds, severe eye pain',
    action: 'Comprehensive physical examination, digital X-rays, injectable analgesia, and anti-nausea therapy.'
  },
  {
    code: 'BLUE — MINOR ILLNESS',
    severity: 'Routine Emergency (< 60 min)',
    color: 'border-cyan-500/60 bg-cyan-500/10 text-cyan-300',
    examples: 'Mild ear discharge, minor superficial scratches, localized itching, mild loss of appetite with normal vitals',
    action: 'Full outpatient consultation, diagnostic swabs, tailored medications, and follow-up plan.'
  }
];

export const EmergencyCareSection: React.FC<any> = () => {
  const [selectedTriage, setSelectedTriage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="emergency" className="py-20 sm:py-28 bg-[#090E14] text-white relative overflow-hidden border-b border-rose-500/20">
      {/* Red/Amber Emergency Pulsing Glow */}
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-rose-500 blur-[200px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>24/7 LEVEL-1 TRAUMA & EMERGENCY ICU</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Instant Emergency <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400">
                Triage & Ambulance Support.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              When every second counts, our dedicated trauma surgical teams and ICU bays are fully staffed 24/7/365 in Dubai and Abu Dhabi.
            </p>
          </div>

          {/* Quick Dial Card */}
          <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start md:self-end shrink-0 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-rose-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <PhoneCall className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-rose-300 uppercase tracking-widest block font-bold">
                24/7 EMERGENCY HOTLINE
              </span>
              <a href="tel:+971523394001" className="text-xl sm:text-2xl font-black text-white hover:text-rose-300 transition-colors font-mono">
                +971 52 339 4001
              </a>
              <span className="text-[10px] text-slate-400 block font-mono">Zero Wait • Jumeirah & Al Bateen Bays Ready</span>
            </div>
          </div>
        </div>

        {/* Interactive Triage Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Triage Level Selector Buttons */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
              Select Symptom Urgency Level:
            </span>

            {TRIAGE_LEVELS.map((triage, idx) => {
              const isSelected = selectedTriage === idx;

              return (
                <button
                  key={triage.code}
                  type="button"
                  onClick={() => setSelectedTriage(idx)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-2 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                    isSelected
                      ? `${triage.color} shadow-lg shadow-rose-500/10 scale-[1.01]`
                      : 'bg-[#111822] border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold tracking-wider">
                      {triage.code}
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/10">
                      {triage.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {triage.examples}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Triage Clinical Protocol Deck */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-3xl bg-[#0E1620] border border-rose-500/30 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider font-bold block mb-1">
                    HOSPITAL PROTOCOL ACTIVE
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {TRIAGE_LEVELS[selectedTriage].code}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Immediate Clinical Response:
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  {TRIAGE_LEVELS[selectedTriage].action}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Always On Standby:</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300 text-[11px]">
                  <li>Board-certified veterinary emergency surgeons on-site 24/7</li>
                  <li>In-house STAT blood gas, electrolyte & coagulation testing (&lt; 8 min)</li>
                  <li>High-flow medical oxygen incubators & digital mobile X-ray</li>
                  <li>Fully equipped pet ambulance transport across Dubai & Abu Dhabi</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:+971523394001"
                  className="w-full sm:w-1/2 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-extrabold text-xs uppercase font-mono text-center flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Trauma Bay Now
                </a>

                <a
                  href="https://maps.google.com/?q=Al+Wasl+Road+Jumeirah+2+Dubai"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-1/2 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/40 text-slate-200 hover:text-white font-bold text-xs uppercase font-mono text-center flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  GPS Navigation
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EmergencyCareSection;
