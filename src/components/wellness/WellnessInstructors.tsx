'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { INSTRUCTORS_DATA } from '@/data/wellnessData';

export const WellnessInstructors: React.FC<any> = ({ onSelectInstructor, onOpenBooking }) => {
  return (
    <section id="instructors" className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">MASTER FACILITATORS</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">World-Class Studio Instructors</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTRUCTORS_DATA.map(inst => (
            <div key={inst.id} className="bg-[#161411] rounded-3xl border border-amber-500/20 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img src={inst.image} alt={inst.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white">{inst.name}</h3>
                  <span className="text-xs font-mono text-amber-400 block font-bold">{inst.role}</span>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between">
                <button onClick={() => onSelectInstructor(inst)} className="text-xs font-mono text-gray-300 hover:text-white underline">Bio</button>
                <button onClick={() => onOpenBooking()} className="px-3 py-1.5 bg-amber-500 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1"><span>Book</span><ArrowRight className="w-3 h-3" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
