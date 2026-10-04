'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Heart, Clock, ArrowRight } from 'lucide-react';
import { VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraCouplesExperienceProps {
  onSelectRitual: (ritual: WellnessRitual) => void;
  onBookRitual: (ritual: WellnessRitual) => void;
}

export const VeloraCouplesExperience: React.FC<VeloraCouplesExperienceProps> = ({
  onSelectRitual,
  onBookRitual,
}) => {
  const couplesRituals = VELORA_RITUALS.filter((r) => r.category === 'Couples Rituals');
  const mainRitual = couplesRituals[0] || VELORA_RITUALS[0];

  return (
    <section className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#17211b] via-[#121714] to-[#0a0d0b] border border-[#27372e] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2a23] border border-[#2d3e33] text-xs text-[#c5a059] uppercase tracking-[0.25em] mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>SHARED SENSORY JOURNEY</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-3">
                Share the Stillness.
              </h2>

              <p className="text-sm sm:text-base text-[#b8b2a3] font-light leading-relaxed mb-6">
                Designed for two guests who seek deep shared relaxation in total seclusion. Experience synchronized side-by-side restorative bodywork, private hydrotherapy, and an unhurried floral tea ceremony.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Synchronized 90-Minute Bodywork',
                  'Exclusive Private Suite Access',
                  'Cedar Steam & Sunken Bath',
                  'Organic Botanical Tea Service',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#ded9ce] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookRitual(mainRitual)}
                  className="px-8 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Reserve Couples Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectRitual(mainRitual)}
                  className="px-6 py-3.5 rounded-full bg-[#18211c] hover:bg-[#222d27] text-xs uppercase tracking-widest text-[#ded9ce] border border-[#2c3b32] transition-colors cursor-pointer"
                >
                  Explore Details
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0e1210] border border-[#212c25] space-y-6">
              <div className="text-xs tracking-[0.2em] uppercase text-[#c5a059] font-medium">
                Featured Couples Ritual
              </div>

              <div className="space-y-1">
                <div className="text-2xl font-serif text-[#fdfbf7]">The Sanctuary Dual Retreat</div>
                <div className="text-xs text-[#8c867a] italic">120 Minutes of Synchronized Reconnection</div>
              </div>

              <p className="text-xs text-[#aba598] font-light leading-relaxed">
                Full access to a private dual suite, twin warm stone tables, customized pressure profiles, and private hydro immersion overlooking botanical atrium shadows.
              </p>

              <div className="pt-4 border-t border-[#1d2620] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#716c62] uppercase tracking-wider">Couples Rate</div>
                  <div className="text-lg font-serif text-[#fdfbf7]">AED 3,600 <span className="text-xs text-[#7d786d] font-sans font-light">(for two)</span></div>
                </div>
                <div className="text-xs text-[#c5a059] font-light">All-Inclusive Dual Session</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
