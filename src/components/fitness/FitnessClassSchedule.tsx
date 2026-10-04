'use client';
import React, { useState } from 'react';
import { FITNESS_CLASSES } from '@/data/fitnessData';

export const FitnessClassSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">TIMETABLE</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Class Schedule.</h2>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {days.map((d) => (
            <button key={d} onClick={() => setSelectedDay(d)} className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${selectedDay === d ? 'bg-red-600 text-white font-bold' : 'bg-[#12100F] text-gray-400 hover:text-white border border-red-500/15'}`}>
              {d}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FITNESS_CLASSES.map((c) => (
            <div key={c.id} className="bg-[#12100F] p-6 rounded-2xl border border-red-500/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-red-400 mb-2">
                  <span>{c.time} ({c.durationMinutes}m)</span>
                  <span>{c.locationRoom}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">{c.name}</h3>
                <p className="text-xs text-gray-400 font-mono mb-4">Coach: {c.trainerName} • Intensity: {c.intensity}</p>
              </div>
              <div className="pt-3 border-t border-red-500/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400">{c.capacity - c.bookedCount} Spots Left</span>
                <button className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-mono uppercase font-bold rounded-xl">
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
