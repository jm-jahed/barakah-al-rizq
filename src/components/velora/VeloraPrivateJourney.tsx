'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ShieldCheck, Droplets, Flame, Moon, Coffee, LogOut, CheckCircle2 } from 'lucide-react';
import { PRIVATE_JOURNEY_STAGES } from '@/data/veloraData';

export const VeloraPrivateJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStage = PRIVATE_JOURNEY_STAGES[activeStep];

  const icons = [Compass, ShieldCheck, Moon, Flame, Droplets, Coffee, LogOut];

  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            THE CHOREOGRAPHY OF PRESENCE
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Your Time, Entirely Yours.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            At VELORA, a wellness visit is never a rushed appointment. It is an unhurried, seven-stage sensory progression designed to suspend the outside world.
          </p>
        </div>

        {/* Timeline Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-12">
          {PRIVATE_JOURNEY_STAGES.map((stage, idx) => {
            const Icon = icons[idx];
            const isSelected = idx === activeStep;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between min-h-[110px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#1a221d] border-[#c5a059] text-[#fdfbf7] shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                    : 'bg-[#111613] border-[#1f2823] text-[#7d786d] hover:bg-[#161c18] hover:text-[#c5a059]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] uppercase tracking-widest font-mono ${isSelected ? 'text-[#c5a059]' : 'text-[#5d584f]'}`}>
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c5a059]' : 'text-[#5d584f]'}`} />
                </div>
                <div className={`text-xs font-serif tracking-wide mt-2 ${isSelected ? 'text-[#fdfbf7]' : 'text-[#a29d91]'}`}>
                  {stage.title}
                </div>
                <div className="text-[10px] text-[#6d685e] truncate font-light">
                  {stage.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Highlight Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#141b17] via-[#101512] to-[#0b0e0c] border border-[#232f28] shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c5a059] uppercase mb-2">
                  <span>Stage {currentStage.step} of 07</span>
                  <span>·</span>
                  <span>{currentStage.duration}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#fdfbf7] mb-3">
                  {currentStage.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8c867a] italic mb-6">
                  {currentStage.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#b5af9f] font-light leading-relaxed mb-8">
                  {currentStage.details}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 0))}
                    disabled={activeStep === 0}
                    className="px-5 py-2.5 rounded-full bg-[#1b231f] hover:bg-[#25302a] disabled:opacity-30 text-xs uppercase tracking-wider text-[#ded9ce] border border-[#2d3a32] transition-colors cursor-pointer"
                  >
                    Previous Stage
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < PRIVATE_JOURNEY_STAGES.length - 1 ? prev + 1 : prev))}
                    disabled={activeStep === PRIVATE_JOURNEY_STAGES.length - 1}
                    className="px-5 py-2.5 rounded-full bg-[#c5a059] hover:bg-[#d4b069] disabled:opacity-30 text-xs uppercase tracking-wider font-medium text-[#0a0c0b] transition-colors cursor-pointer"
                  >
                    Next Stage
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0d110f] border border-[#1f2923] space-y-4">
                <div className="text-[11px] text-[#787368] uppercase tracking-widest font-medium">
                  Sanctuary Etiquette
                </div>
                <div className="text-xs text-[#a5a093] font-light leading-relaxed space-y-2">
                  <p>• Mobile phones remain silenced inside velvet acoustic lockers.</p>
                  <p>• Custom tailored linen robes and botanical footwear provided upon entry.</p>
                  <p>• Personalized temperature and lighting preset prior to your arrival.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
