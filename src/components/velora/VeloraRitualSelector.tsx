'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, ArrowRight, Check, Heart, Eye } from 'lucide-react';
import { WELLNESS_INTENTIONS, VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraRitualSelectorProps {
  selectedIntentionKey?: string;
  onSelectRitual: (ritual: WellnessRitual) => void;
  onBookRitual: (ritual: WellnessRitual) => void;
}

export const VeloraRitualSelector: React.FC<VeloraRitualSelectorProps> = ({
  selectedIntentionKey = 'RESTORE',
  onSelectRitual,
  onBookRitual,
}) => {
  const [activeKey, setActiveKey] = useState<string>(selectedIntentionKey);

  // Sync with prop if passed
  React.useEffect(() => {
    if (selectedIntentionKey) {
      setActiveKey(selectedIntentionKey);
    }
  }, [selectedIntentionKey]);

  const activeIntention = WELLNESS_INTENTIONS.find((i) => i.key === activeKey) || WELLNESS_INTENTIONS[0];
  const recommendedRituals = VELORA_RITUALS.filter((r) => r.intention === activeKey);

  return (
    <section id="intentions" className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a211d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            THE VELORA RITUAL
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Choose How You Want to Feel.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            Rather than browsing a generic menu, select your present state and allow VELORA to orchestrate a restorative pathway tailored to your energetic need.
          </p>
        </div>

        {/* Intention Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {WELLNESS_INTENTIONS.map((intention) => {
            const isSelected = intention.key === activeKey;
            return (
              <button
                key={intention.key}
                onClick={() => setActiveKey(intention.key)}
                className={`relative px-5 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#c5a059] text-[#0a0c0b] shadow-[0_0_25px_rgba(197,160,89,0.3)]'
                    : 'bg-[#151b18] text-[#9b968a] hover:text-[#ded9ce] hover:bg-[#1e2622] border border-[#242e28]'
                }`}
              >
                {intention.name}
              </button>
            );
          })}
        </div>

        {/* Intention Banner Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIntention.key}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#151b18] via-[#121614] to-[#0c0f0d] border border-[#242e28] mb-12 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c5a059] uppercase mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{activeIntention.subtitle}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#fdfbf7] mb-3">
                  {activeIntention.name}
                </h3>
                <p className="text-[#a8a396] font-light leading-relaxed text-sm sm:text-base mb-6">
                  {activeIntention.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-[#8e897d]">
                  <span className="px-3 py-1 rounded-md bg-[#1d2521] border border-[#2c3731]">
                    Botanical: <strong className="text-[#ded9ce] font-normal">{activeIntention.botanicalElement}</strong>
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#1d2521] border border-[#2c3731]">
                    Atmosphere: <strong className="text-[#ded9ce] font-normal">{activeIntention.ambientTone}</strong>
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0e1210] border border-[#242e28] text-center">
                <div className="text-[11px] tracking-widest uppercase text-[#7a756b] mb-1">Curation</div>
                <div className="text-3xl font-serif text-[#c5a059] mb-1">{recommendedRituals.length}</div>
                <div className="text-xs text-[#9b968a] font-light mb-4">Recommended Sanctuary Rituals</div>
                <div className="text-[11px] text-[#6b665c] italic">All sessions include custom thermal access</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Ritual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recommendedRituals.map((ritual) => (
            <motion.div
              key={ritual.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl bg-[#131815] border border-[#222c26] hover:border-[#c5a059]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs text-[#8e897d] mb-3">
                  <span className="tracking-widest uppercase text-[#c5a059] font-medium text-[11px]">
                    {ritual.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#7a756b]" />
                    {ritual.durationLabel}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-serif text-[#fdfbf7] group-hover:text-[#c5a059] transition-colors mb-2">
                  {ritual.name}
                </h4>

                <p className="text-xs text-[#7d786d] italic mb-4">
                  {ritual.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#a5a093] font-light leading-relaxed mb-6 line-clamp-3">
                  {ritual.description}
                </p>

                <div className="text-[11px] text-[#7a756b] bg-[#0c0f0d] p-3 rounded-lg border border-[#1b231f] mb-6">
                  <span className="text-[#9e988c] block font-medium mb-1 uppercase tracking-wider text-[10px]">
                    Ideal For
                  </span>
                  {ritual.idealFor}
                </div>
              </div>

              <div className="p-6 bg-[#0e1210] border-t border-[#1d2621] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#7a756b]">Ritual Investment</div>
                  <div className="text-lg font-serif text-[#fdfbf7]">
                    AED {ritual.priceAED.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectRitual(ritual)}
                    className="p-2.5 rounded-full bg-[#18201c] hover:bg-[#232d28] text-[#c5a059] border border-[#2b3630] transition-colors cursor-pointer"
                    title="View Full Ritual Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onBookRitual(ritual)}
                    className="px-4 py-2 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
