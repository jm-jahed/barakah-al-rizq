'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { EXPEDITIONS } from '@/data/desertMirageData';

export const Availability: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#140F0C] border border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#C9A265] font-bold">
                OPERATIONS STATUS
              </div>
              <h3 className="text-xl font-serif text-white mt-0.5">
                Live Seasonal Expedition Schedule
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Limited
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C9A265]" />
                Private Only
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXPEDITIONS.map((exp) => (
              <div
                key={exp.id}
                className="p-3.5 rounded-xl bg-[#090706] border border-stone-800/80 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-serif text-white">{exp.title}</div>
                  <div className="text-[10px] font-mono text-stone-500">{exp.departureTime}</div>
                </div>

                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                  exp.availability === 'AVAILABLE'
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                    : exp.availability === 'LIMITED'
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                    : 'bg-[#C9A265]/20 text-[#E8D7B8] border border-[#C9A265]/40'
                }`}>
                  {exp.availability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
