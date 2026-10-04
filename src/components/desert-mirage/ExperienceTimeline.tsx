'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Car, Compass, Wind, Sun, Flame, Utensils, Moon, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';
import { TIMELINE_MILESTONES, TimelineMilestone } from '@/data/desertMirageData';

export const ExperienceTimeline: React.FC = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(3);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Car': return Car;
      case 'Compass': return Compass;
      case 'Wind': return Wind;
      case 'Sun': return Sun;
      case 'Flame': return Flame;
      case 'Utensils': return Utensils;
      case 'Moon': return Moon;
      case 'ShieldCheck': return ShieldCheck;
      default: return Clock;
    }
  };

  return (
    <section id="timeline" className="relative py-24 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>CINEMATIC CHRONOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            From City Lights to Desert Stars
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Experience the seamless progression as the urban neon skyline of Dubai fades into the golden twilight of the Lahbab dunes, concluding beneath a quiet sea of stars.
          </p>
        </div>

        {/* Interactive Timeline Track */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {TIMELINE_MILESTONES.map((m, idx) => {
            const isSelected = activeMilestoneIndex === idx;
            const Icon = getIcon(m.icon);

            return (
              <button
                key={idx}
                onClick={() => setActiveMilestoneIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1A1410] to-[#120E0B] border-[#C9A265] shadow-lg shadow-[#C9A265]/20 ring-1 ring-[#C9A265]/40'
                    : 'bg-[#120E0B]/80 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C9A265]">{m.time}</span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E8D7B8]' : 'text-stone-600'}`} />
                </div>
                <div className="text-[11px] font-mono leading-tight truncate text-stone-300">
                  {m.title.split(' ')[0]} {m.title.split(' ')[1] || ''}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Spotlight */}
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/40 shadow-2xl shadow-[#C9A265]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#C9A265]">
                  {TIMELINE_MILESTONES[activeMilestoneIndex].time}
                </span>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                  STAGE 0{activeMilestoneIndex + 1} OF 08
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                {TIMELINE_MILESTONES[activeMilestoneIndex].title}
              </h3>

              <div className="flex items-center gap-2 text-xs font-mono text-[#E8D7B8]">
                <MapPin className="w-3.5 h-3.5 text-[#C9A265]" />
                <span>{TIMELINE_MILESTONES[activeMilestoneIndex].location}</span>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed font-light">
                {TIMELINE_MILESTONES[activeMilestoneIndex].description}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-[#0F0C0A] border border-stone-800 space-y-3 text-center">
              <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                Atmospheric State
              </div>
              <div className="text-lg font-serif italic text-[#E8D7B8]">
                &ldquo;{TIMELINE_MILESTONES[activeMilestoneIndex].atmosphere}&rdquo;
              </div>
              <div className="pt-2 flex items-center justify-center gap-2">
                <button
                  onClick={() => setActiveMilestoneIndex(prev => (prev > 0 ? prev - 1 : 7))}
                  className="px-3 py-1.5 rounded-lg bg-[#18130F] text-xs font-mono text-stone-400 hover:text-white"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveMilestoneIndex(prev => (prev < 7 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-[#C9A265] text-xs font-mono text-[#090706] font-bold"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
