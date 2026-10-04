'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Activity, 
  Droplets, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Flame
} from 'lucide-react';

export const PetWellnessCalculator: React.FC<any> = () => {
  const [species, setSpecies] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<number>(3);
  const [weight, setWeight] = useState<number>(12);
  const [activity, setActivity] = useState<'low' | 'moderate' | 'high'>('moderate');

  // Human Age Equivalent Calculation
  const humanAge = useMemo(() => {
    if (species === 'cat') {
      if (age <= 1) return 15;
      if (age === 2) return 24;
      return 24 + (age - 2) * 4;
    } else {
      // Dog
      if (age <= 1) return 15;
      if (age === 2) return 24;
      const factor = weight > 25 ? 6 : weight > 10 ? 5 : 4;
      return 24 + (age - 2) * factor;
    }
  }, [species, age, weight]);

  // UAE Hydration Needs (Summer High-Temp Formula)
  const hydrationMl = useMemo(() => {
    const base = weight * 60; // 60ml per kg
    const multiplier = activity === 'high' ? 1.35 : activity === 'moderate' ? 1.15 : 1.0;
    return Math.round(base * multiplier);
  }, [weight, activity]);

  // Daily Calorie Target
  const dailyKcal = useMemo(() => {
    const rer = 70 * Math.pow(weight, 0.75); // Resting Energy Requirement
    const factor = activity === 'high' ? 1.8 : activity === 'moderate' ? 1.4 : 1.1;
    return Math.round(rer * factor);
  }, [weight, activity]);

  // Recommended Checkup Frequency
  const checkupFreq = useMemo(() => {
    if (age >= 8) return 'Bi-Annual (Every 6 Months) Comprehensive Geriatric Profile';
    if (age <= 1) return 'Quarterly Growth & Core Booster Stage';
    return 'Annual Nose-to-Tail Health Audit & Blood Screen';
  }, [age]);

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#070D13] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>BIO-TELEMETRY & LONGEVITY PREDICTOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Pet Biological Age & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              UAE Climate Hydration Calculator.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Calculate your pet’s biological human age equivalent, UAE summer hydration targets, caloric needs, and customized preventative wellness roadmap.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Input Form */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#0E1620] border border-white/10 space-y-6 shadow-2xl backdrop-blur-xl">
            
            {/* Species */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold block">
                Companion Species:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpecies('dog')}
                  className={`py-3 rounded-2xl border text-center text-xs font-mono font-bold transition-all cursor-pointer ${
                    species === 'dog'
                      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg'
                      : 'bg-white/[0.03] border-white/10 text-slate-300'
                  }`}
                >
                  🐕 Canine (Dog)
                </button>
                <button
                  type="button"
                  onClick={() => setSpecies('cat')}
                  className={`py-3 rounded-2xl border text-center text-xs font-mono font-bold transition-all cursor-pointer ${
                    species === 'cat'
                      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg'
                      : 'bg-white/[0.03] border-white/10 text-slate-300'
                  }`}
                >
                  🐈 Feline (Cat)
                </button>
              </div>
            </div>

            {/* Age Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold">Chronological Pet Age:</span>
                <span className="text-emerald-300 font-bold text-sm">{age} Years Old</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="18"
                step="0.5"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Weight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold">Pet Body Weight:</span>
                <span className="text-emerald-300 font-bold text-sm">{weight} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold block">
                Daily Activity in UAE:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: 'Indoor Calm' },
                  { id: 'moderate', label: 'Daily Walks' },
                  { id: 'high', label: 'Athletic / Agility' }
                ].map((act) => (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setActivity(act.id as any)}
                    className={`p-2.5 rounded-xl border text-center text-[11px] font-mono transition-all cursor-pointer ${
                      activity === act.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                        : 'bg-white/[0.03] border-white/10 text-slate-300'
                    }`}
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Telemetry Output */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#0D151F] border border-emerald-500/30 shadow-2xl space-y-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                  CALCULATED BIOMETRICS
                </span>
                <h3 className="text-xl font-bold text-white">
                  Telemetry Summary
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono">
                <Activity className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Biological Human Age */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Human Age Equivalent</span>
                </div>
                <span className="text-2xl font-black text-white font-mono block">
                  ~ {humanAge} Years Old
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {age >= 7 ? 'Senior Lifestage' : age <= 1 ? 'Puppy / Kitten Stage' : 'Prime Adult Stage'}
                </span>
              </div>

              {/* UAE Summer Daily Hydration */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  <span>UAE Climate Hydration</span>
                </div>
                <span className="text-2xl font-black text-cyan-300 font-mono block">
                  {hydrationMl} ml / day
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Crucial during 35°C+ UAE summer
                </span>
              </div>

              {/* Daily Energy Intake */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Target Energy Intake</span>
                </div>
                <span className="text-2xl font-black text-amber-300 font-mono block">
                  {dailyKcal} kcal / day
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Based on resting energy metabolic rate
                </span>
              </div>

              {/* Health Frequency */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Recommended Exam</span>
                </div>
                <span className="text-sm font-bold text-emerald-300 font-mono block">
                  {age >= 7 ? 'Every 6 Months' : 'Annual Exam'}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Cardiopulmonary + blood panel
                </span>
              </div>
            </div>

            {/* Recommended Wellness Plan */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-[10px] text-emerald-300 font-bold block uppercase">
                  RECOMMENDED WELLNESS TIER
                </span>
                <span className="text-white font-bold text-sm">
                  {age >= 7 ? 'Golden Years Geriatric Wellness Plan' : 'Active Companion Preventative Shield'}
                </span>
              </div>
              <span className="text-emerald-400 font-black text-sm">
                From AED 149/mo
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PetWellnessCalculator;
