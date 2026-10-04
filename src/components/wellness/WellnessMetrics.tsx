'use client';
import React from 'react';
import { Award, Users, ShieldCheck, HeartPulse } from 'lucide-react';

export const WellnessMetrics: React.FC<any> = () => {
  const metrics = [
    { icon: Award, value: '12+', label: 'Weekly Classes', desc: 'Yoga, Pilates & Breathwork' },
    { icon: Users, value: '8', label: 'Master Instructors', desc: 'International E-RYT Certified' },
    { icon: HeartPulse, value: '432Hz', label: 'Sound Healing', desc: 'Quartz Crystal Harmonic Tuning' },
    { icon: Award, value: '12 Max', label: 'Class Capacity', desc: 'Intimate Sanctuary Space' },
    { icon: ShieldCheck, value: '7 Days', label: 'Studio Access', desc: 'Downtown Dubai Location' }
  ];

  return (
    <section className="py-12 bg-[#12100E] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-[#181512] p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-colors">
              <m.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">{m.value}</div>
              <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider mb-1">{m.label}</div>
              <div className="text-[11px] text-gray-400 font-sans">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
