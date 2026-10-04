'use client';
import React from 'react';
import { Eye, UserCheck, Activity, ShieldCheck, Clock } from 'lucide-react';

export const OpticalMetrics: React.FC<any> = () => {
  const metrics = [
    { icon: Eye, value: '30+', label: 'Eyewear Designs', desc: 'Italian Acetate & Titanium' },
    { icon: Activity, value: '10+', label: 'Eye Care Services', desc: 'Comprehensive Exams & Retinal Scans' },
    { icon: UserCheck, value: '6', label: 'Optometrists', desc: 'UK & EU Clinical Lineage' },
    { icon: Clock, value: 'Same-Day', label: 'Dubai Delivery', desc: '2-Hour City Walk Store Pickup' },
    { icon: ShieldCheck, value: 'AED 150', label: 'Eye Exam Fee', desc: 'Transparent Sample Pricing' }
  ];

  return (
    <section className="py-12 bg-slate-900/90 border-b border-sky-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-sky-500/20 text-center hover:border-sky-400/50 transition-colors">
              <m.icon className="w-6 h-6 text-sky-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-white mb-1">{m.value}</div>
              <div className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider mb-1">{m.label}</div>
              <div className="text-[11px] text-slate-400 font-sans">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
