'use client';
import React from 'react';
import { FITNESS_PROGRAMS, Program } from '@/data/fitnessData';

interface FitnessProgramsProps {
  onSelectProgram?: (program: Program) => void;
}

export const FitnessPrograms: React.FC<FitnessProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full inline-block mb-3">
            TARGETED PROTOCOLS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Performance Programs.</h2>
          <p className="text-xs sm:text-sm text-gray-400">Structured training blueprints led by master coaches in Dubai.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FITNESS_PROGRAMS.map((prog) => (
            <div key={prog.id} className="bg-[#12100F] rounded-3xl border border-red-500/15 overflow-hidden flex flex-col justify-between hover:border-red-500/40 transition-all">
              <div className="relative h-64 w-full">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-red-300 border border-red-500/30">
                  {prog.category} • {prog.durationWeeks} Weeks
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{prog.title}</h3>
                  <p className="text-xs font-mono text-red-300 mb-3">{prog.subtitle}</p>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">{prog.description}</p>
                </div>

                <div className="pt-4 border-t border-red-500/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase block">Sample Package Price</span>
                    <span className="text-base font-bold font-mono text-white">AED {prog.startingPriceAED.toLocaleString()}</span>
                  </div>
                  <button onClick={() => onSelectProgram?.(prog)} className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs font-mono uppercase tracking-wider">
                    Program Overview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
