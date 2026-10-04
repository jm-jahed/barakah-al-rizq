'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Calendar, 
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { VET_SERVICES_DATA, VetService } from '@/data/petCareData';

interface PetHealthMatcherProps {
  onSelectService: (service: VetService) => void;
  onOpenBooking: (serviceId?: string) => void;
}

const SPECIES = [
  { id: 'dog', label: 'Canine (Dog)', icon: '🐕' },
  { id: 'cat', label: 'Feline (Cat)', icon: '🐈' },
  { id: 'bird', label: 'Avian & Falcon', icon: '🦅' },
  { id: 'small', label: 'Rabbit & Small Pet', icon: '🐇' },
];

const SYMPTOM_OPTIONS = [
  { id: 'lethargy', label: 'Lethargy & Low Energy', severity: 'Medium', serviceId: 'vet-consult' },
  { id: 'vomit', label: 'Vomiting or Diarrhea', severity: 'High', serviceId: 'vet-ultrasound-ct' },
  { id: 'limping', label: 'Limping or Joint Stiffness', severity: 'Medium', serviceId: 'vet-orthopedic-surgery' },
  { id: 'skin', label: 'Constant Scratching / Rash', severity: 'Low', serviceId: 'vet-consult' },
  { id: 'dental', label: 'Bad Breath & Eating Pain', severity: 'Low', serviceId: 'vet-dental' },
  { id: 'trauma', label: 'Acute Heat Exhaustion / Trauma', severity: 'Critical', serviceId: 'vet-emergency-icu' },
  { id: 'travel', label: 'International Relocation Papers', severity: 'Routine', serviceId: 'vet-travel-passport' },
  { id: 'vaccine', label: 'Annual Vaccine Due', severity: 'Routine', serviceId: 'vet-vaccine' },
];

export const PetHealthMatcher: React.FC<PetHealthMatcherProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [selectedSpecies, setSelectedSpecies] = useState('dog');
  const [selectedSymptom, setSelectedSymptom] = useState(SYMPTOM_OPTIONS[0].id);
  const [duration, setDuration] = useState<'acute' | 'moderate' | 'chronic'>('acute');

  const activeSymptomObj = useMemo(() => {
    return SYMPTOM_OPTIONS.find((s) => s.id === selectedSymptom) || SYMPTOM_OPTIONS[0];
  }, [selectedSymptom]);

  const recommendedService = useMemo(() => {
    return VET_SERVICES_DATA.find((s) => s.id === activeSymptomObj.serviceId) || VET_SERVICES_DATA[0];
  }, [activeSymptomObj]);

  const severityColor = useMemo(() => {
    switch (activeSymptomObj.severity) {
      case 'Critical': return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      case 'High': return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      default: return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    }
  }, [activeSymptomObj.severity]);

  return (
    <section id="triage" className="py-24 sm:py-32 bg-[#080E14] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI CLINICAL TRIAGE ASSISTANT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Interactive Pet Health & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Symptom Triage Matrix.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Select your companion’s species and observed symptoms to receive an instant veterinary urgency staging, recommended diagnostic protocol, and direct booking slot.
          </p>
        </div>

        {/* Interactive 2-Column Triage Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Input Matrix */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0E1620] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            
            {/* Step 1: Species Selector */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                1. Select Companion Species:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SPECIES.map((sp) => {
                  const isSelected = selectedSpecies === sp.id;
                  return (
                    <button
                      key={sp.id}
                      type="button"
                      onClick={() => setSelectedSpecies(sp.id)}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold shadow-lg shadow-emerald-500/10'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-2xl">{sp.icon}</span>
                      <span className="text-xs font-mono">{sp.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Primary Symptoms Selector */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                2. Select Observed Symptom or Reason for Visit:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SYMPTOM_OPTIONS.map((sym) => {
                  const isSelected = selectedSymptom === sym.id;
                  return (
                    <button
                      key={sym.id}
                      type="button"
                      onClick={() => setSelectedSymptom(sym.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold shadow-lg shadow-emerald-500/10'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-mono">{sym.label}</span>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 shrink-0">
                          {sym.severity}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Duration / Onset */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                3. Symptom Duration / Onset:
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'acute', label: 'Started Today (< 24h)' },
                  { id: 'moderate', label: '2 – 3 Days' },
                  { id: 'chronic', label: 'Persistent (> 1 Week)' }
                ].map((dur) => {
                  const isSelected = duration === dur.id;
                  return (
                    <button
                      key={dur.id}
                      type="button"
                      onClick={() => setDuration(dur.id as any)}
                      className={`p-3 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {dur.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: AI Diagnostic Result & Prescription Recommendation Deck */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedSpecies}-${selectedSymptom}-${duration}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-7 rounded-3xl bg-[#0E1720] border border-emerald-500/30 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl"
              >
                {/* Result Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                      RECOMMENDED CLINICAL PROTOCOL
                    </span>
                    <h3 className="text-lg font-bold text-white font-sans">
                      {recommendedService.name}
                    </h3>
                  </div>

                  <span className={`px-2.5 py-1 rounded-xl border text-xs font-mono font-bold shrink-0 ${severityColor}`}>
                    {activeSymptomObj.severity} Priority
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {recommendedService.description}
                </p>

                {/* Key Inclusions */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                    Included Diagnostics & Tests:
                  </span>
                  {recommendedService.included.slice(0, 3).map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Turnaround Row */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Estimated Fee:</span>
                    <span className="text-lg font-black text-emerald-400">AED {recommendedService.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">Consultation Time:</span>
                    <span className="text-white font-bold">{recommendedService.duration}</span>
                  </div>
                </div>

                {/* Booking CTA */}
                <button
                  type="button"
                  onClick={() => onOpenBooking(recommendedService.id)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Priority Slot For This Care</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Accompanying Assurance */}
            <div className="p-4 rounded-2xl bg-[#0A1016] border border-white/10 flex items-center gap-3 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Full medical history will be synced with your Dubai Municipality pet passport record.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PetHealthMatcher;
