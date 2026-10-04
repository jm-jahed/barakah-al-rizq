'use client';
import React from 'react';
import { Calendar } from 'lucide-react';

export const SoundBathSection: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#181512] via-[#221D18] to-[#181512] rounded-3xl p-8 md:p-12 border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">432Hz HARMONIC AUDITORY JOURNEY</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Crystal Bowl Sound Bath & Theta Meditation</h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              Lie back on zero-gravity memory cushions wrapped in cashmere blankets while 432Hz frosted quartz crystal bowls and gong resonance ease your brain into profound theta waves.
            </p>
          </div>
          <div className="lg:col-span-5 text-center bg-[#0E0D0B] p-6 rounded-2xl border border-amber-500/20 space-y-4">
            <span className="text-xs font-mono text-amber-400 block font-bold">AED 120 per Session</span>
            <button onClick={() => onOpenBooking()} className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /><span>Reserve Sound Bath Space</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
