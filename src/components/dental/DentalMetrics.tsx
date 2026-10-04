'use client';
import React from 'react';
import { Smile, UserCheck, ShieldCheck, Activity, Clock } from 'lucide-react';

export const DentalMetrics: React.FC<any> = () => {
  const metrics = [
    { icon: Smile, value: '12+', label: 'Treatment Modalities', desc: 'Cosmetic, Aligners & Implants' },
    { icon: UserCheck, value: '6', label: 'Specialist Dentists', desc: 'International Clinical Lineage' },
    { icon: Activity, value: '3D CAD/CAM', label: 'Digital Dentistry', desc: 'Same-Day Zirconia Milled Crowns' },
    { icon: Clock, value: '7 Days', label: 'Clinic Schedule', desc: 'City Walk Jumeirah Location' },
    { icon: ShieldCheck, value: 'AED 150', label: 'Starting Fee', desc: 'Transparent Sample Pricing' }
  ];

  return (
    <section className="py-12 bg-slate-900/90 border-b border-cyan-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-colors">
              <m.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-white mb-1">{m.value}</div>
              <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider mb-1">{m.label}</div>
              <div className="text-[11px] text-slate-400 font-sans">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
