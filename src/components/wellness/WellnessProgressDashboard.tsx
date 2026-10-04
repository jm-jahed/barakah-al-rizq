'use client';
import React from 'react';
import { Activity, Flame, Shield, Heart } from 'lucide-react';

export const WellnessProgressDashboard: React.FC<any> = () => {
  return (
    <section className="py-20 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">MEMBER BIOMETRIC TELEMETRY</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2">Sample Practice Progress Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#181512] p-6 rounded-2xl border border-amber-500/20 text-center"><Flame className="w-6 h-6 text-amber-400 mx-auto mb-2" /><span className="text-3xl font-serif font-bold text-white block">18</span><span className="text-xs font-mono text-amber-300 font-bold uppercase block">Completed Sessions</span></div>
          <div className="bg-[#181512] p-6 rounded-2xl border border-amber-500/20 text-center"><Activity className="w-6 h-6 text-emerald-400 mx-auto mb-2" /><span className="text-3xl font-serif font-bold text-white block">12 Days</span><span className="text-xs font-mono text-emerald-300 font-bold uppercase block">Active Practice Streak</span></div>
          <div className="bg-[#181512] p-6 rounded-2xl border border-amber-500/20 text-center"><Shield className="w-6 h-6 text-amber-400 mx-auto mb-2" /><span className="text-3xl font-serif font-bold text-white block">94%</span><span className="text-xs font-mono text-amber-300 font-bold uppercase block">Spinal Mobility Score</span></div>
          <div className="bg-[#181512] p-6 rounded-2xl border border-amber-500/20 text-center"><Heart className="w-6 h-6 text-amber-400 mx-auto mb-2" /><span className="text-3xl font-serif font-bold text-white block">480 min</span><span className="text-xs font-mono text-amber-300 font-bold uppercase block">Mindfulness Minutes</span></div>
        </div>
      </div>
    </section>
  );
};
