'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_TOKYO_ITINERARY } from '@/data/aeroviaData';
import { Calendar, MapPin, Clock, Plane, Building2, Share2, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

export const AeroviaSmartPlanner: React.FC = () => {
  const itinerary = SAMPLE_TOKYO_ITINERARY;
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const activeDay = itinerary.days[selectedDayIdx];

  return (
    <section className="relative py-28 bg-[#02050b] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              SMART TRAVEL PLANNER
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              One Trip. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                One Intelligent Plan.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              Share Itinerary Link
            </button>
            <span className="px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono">
              {itinerary.journeyCode}
            </span>
          </div>
        </div>

        {/* Itinerary Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#081220] via-[#050a12] to-[#02050a] border border-amber-500/30 shadow-2xl p-6 sm:p-10">
          {/* Header Specs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                {itinerary.dates} • {itinerary.travelers}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{itinerary.title}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">Accommodations</span>
              <span className="text-sm font-bold text-slate-200 font-mono">{itinerary.hotelSummary.name}</span>
            </div>
          </div>

          {/* Day Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-8">
            {itinerary.days.map((day, idx) => {
              const isSelected = idx === selectedDayIdx;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-gradient-to-b from-amber-950/60 to-slate-900/80 border-amber-500 text-amber-300 shadow-md shadow-amber-500/20'
                      : 'bg-[#060c14] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold block mb-1">{day.dayNumber}</span>
                  <h4 className="text-xs font-bold leading-tight line-clamp-1">{day.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Active Day Schedule Breakdown */}
          <div className="p-8 rounded-2xl bg-[#060c16] border border-slate-800">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-amber-950 text-amber-300 border border-amber-500/30">
                  {activeDay.dayNumber}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-white">{activeDay.title}</h4>
                  <p className="text-xs text-slate-400 font-mono">{activeDay.location}</p>
                </div>
              </div>
            </div>

            {/* Time Slot Items */}
            <div className="space-y-4 pl-4 border-l border-amber-950/80 ml-2">
              {activeDay.schedule.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Dot */}
                  <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-amber-500/20 border border-amber-400" />
                  <div className="text-xs font-mono font-bold text-amber-300">{item.time}</div>
                  <p className="text-sm text-slate-200 mt-0.5 leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
