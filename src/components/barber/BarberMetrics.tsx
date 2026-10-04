'use client';
import React from 'react';
import { Scissors, UserCheck, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const BarberMetrics: React.FC<any> = () => {
  const metrics = [
    { icon: Scissors, value: '14 Services', label: 'Grooming Menu', desc: 'Fades, Shaves, Facials & Massages' },
    { icon: UserCheck, value: '6 Master Barbers', label: 'Senior Team', desc: 'Mayfair & European Lineage' },
    { icon: MapPin, value: '5 Locations', label: 'Dubai Studios', desc: 'DIFC, Downtown, Marina, Jumeirah' },
    { icon: Clock, value: '7 Days', label: 'Studio Schedule', desc: '09:00 AM – 10:00 PM Daily' },
    { icon: ShieldCheck, value: 'AED 95', label: 'Starting Cut', desc: 'Transparent Sample Pricing' }
  ];

  return (
    <section className="py-12 bg-neutral-900/90 border-b border-amber-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-neutral-950 p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-colors">
              <m.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-white mb-1">{m.value}</div>
              <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider mb-1">{m.label}</div>
              <div className="text-[11px] text-neutral-400 font-sans">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
