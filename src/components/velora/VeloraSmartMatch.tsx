'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, ArrowRight, RefreshCw, CheckCircle2, Shield } from 'lucide-react';
import { VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraSmartMatchProps {
  onSelectRitual: (ritual: WellnessRitual) => void;
  onBookRitual: (ritual: WellnessRitual) => void;
}

const FEELINGS = [
  { id: 'Tired', label: 'Tired', desc: 'Low energy & physical fatigue', targetRitualId: 'rit-silent-hour' },
  { id: 'Stressed', label: 'Stressed', desc: 'Mental overload & fast pace', targetRitualId: 'rit-cranial-flow' },
  { id: 'Restless', label: 'Restless', desc: 'Difficulty slowing down', targetRitualId: 'rit-thermal-immersion' },
  { id: 'Heavy', label: 'Heavy', desc: 'Limb tension & tight musculature', targetRitualId: 'rit-stone-reset' },
  { id: 'Depleted', label: 'Depleted', desc: 'Need deep replenishment', targetRitualId: 'rit-botanical-polish' },
  { id: 'Balanced', label: 'Balanced', desc: 'Seeking elevated maintenance', targetRitualId: 'rit-moonlit-facial' },
];

const TIME_SLOTS = [
  { id: '30', label: '30 min', desc: 'Express thermal reset' },
  { id: '60', label: '60 min', desc: 'Targeted sanctuary focus' },
  { id: '90', label: '90 min', desc: 'Complete immersive ritual' },
  { id: '120', label: '2 hours', desc: 'Master restorative journey' },
];

export const VeloraSmartMatch: React.FC<VeloraSmartMatchProps> = ({
  onSelectRitual,
  onBookRitual,
}) => {
  const [selectedFeeling, setSelectedFeeling] = useState<string>('Tired');
  const [selectedTime, setSelectedTime] = useState<string>('90');

  // Find best match ritual
  const feelingObj = FEELINGS.find((f) => f.id === selectedFeeling) || FEELINGS[0];
  const matchedRitual =
    VELORA_RITUALS.find((r) => r.id === feelingObj.targetRitualId) ||
    VELORA_RITUALS[0];

  return (
    <section className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18201b] border border-[#27342c] text-xs text-[#c5a059] uppercase tracking-[0.25em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SMART WELLNESS MATCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            A Ritual Matched to Your Moment.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            Share your current physical and mental state. Our digital sanctuary consultation suggests the ideal sensory protocol.
          </p>
        </div>

        {/* Interactive Consultation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-[#111613] border border-[#202b24]">
            {/* Step 1: Feeling */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
                01 · How do you feel today?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {FEELINGS.map((item) => {
                  const isSelected = selectedFeeling === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFeeling(item.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1b2520] border-[#c5a059] text-[#fdfbf7]'
                          : 'bg-[#151b18] border-[#222c26] text-[#8c867b] hover:border-[#324037] hover:text-[#ded9ce]'
                      }`}
                    >
                      <div className={`text-xs font-serif ${isSelected ? 'text-[#c5a059]' : 'text-[#f5f2eb]'}`}>
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[#716c62] truncate mt-0.5 font-light">
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Time */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
                02 · How much time do you have?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot.id;
                  return (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTime(slot.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1b2520] border-[#c5a059] text-[#fdfbf7]'
                          : 'bg-[#151b18] border-[#222c26] text-[#8c867b] hover:border-[#324037] hover:text-[#ded9ce]'
                      }`}
                    >
                      <div className={`text-xs font-serif ${isSelected ? 'text-[#c5a059]' : 'text-[#f5f2eb]'}`}>
                        {slot.label}
                      </div>
                      <div className="text-[10px] text-[#716c62] truncate mt-0.5 font-light">
                        {slot.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-[#6b665c] italic flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#8f8a7e]" />
              <span>Conceptual recommendation experience. Non-medical restorative wellness.</span>
            </div>
          </div>

          {/* Matched Recommendation Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={matchedRitual.id + selectedTime}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#18231c] via-[#121815] to-[#0c0f0d] border border-[#2d3e33] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between text-xs text-[#c5a059] uppercase tracking-[0.25em] mb-4">
                  <span>YOUR VELORA MATCH</span>
                  <span className="p-1 rounded-full bg-[#1b2720] border border-[#2b3d32]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#fdfbf7] mb-1">
                  {matchedRitual.name}
                </h3>
                <div className="text-xs text-[#8c8679] italic mb-4">
                  {matchedRitual.subtitle}
                </div>

                <div className="flex items-center gap-3 text-xs text-[#ded9ce] mb-6">
                  <span className="px-2.5 py-1 rounded-full bg-[#1e2a23] border border-[#2c3d33]">
                    {matchedRitual.durationLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1e2a23] border border-[#2c3d33] text-[#c5a059] font-medium">
                    AED {matchedRitual.priceAED.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#b5af9f] font-light leading-relaxed mb-6">
                  {matchedRitual.description}
                </p>

                <div className="p-4 rounded-xl bg-[#0e1310] border border-[#1d2720] mb-8 space-y-2">
                  <div className="text-[10px] text-[#787368] uppercase tracking-wider">
                    Recommended For You Because:
                  </div>
                  <div className="text-xs text-[#ded9ce] font-light">
                    Addresses state of <strong className="text-[#c5a059] font-medium">{feelingObj.label.toLowerCase()}</strong> with tailored sensory transitions and restorative thermal integration.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectRitual(matchedRitual)}
                    className="flex-1 py-3 rounded-full bg-[#19231d] hover:bg-[#223028] text-xs uppercase tracking-wider text-[#ded9ce] border border-[#2d3c33] transition-colors cursor-pointer text-center"
                  >
                    Explore Ritual
                  </button>
                  <button
                    onClick={() => onBookRitual(matchedRitual)}
                    className="flex-1 py-3 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-xs uppercase tracking-wider font-semibold text-[#0a0c0b] transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-lg"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
