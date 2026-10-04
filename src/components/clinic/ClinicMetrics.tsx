'use client';
import React from 'react';
import { UserCheck, Building2, Stethoscope, Clock, ShieldCheck } from 'lucide-react';

export const ClinicMetrics: React.FC<any> = () => {
  const metrics = [
    { icon: UserCheck, value: '8', label: 'Sample Specialists', desc: 'Board-Certified Consultants' },
    { icon: Building2, value: '8', label: 'Care Departments', desc: 'Comprehensive Private Facility' },
    { icon: Stethoscope, value: '25+', label: 'Sample Services', desc: 'Diagnostics & Consultations' },
    { icon: Clock, value: '7 Days', label: 'Appointment Window', desc: 'Mon to Sun Clinic Hours' },
    { icon: ShieldCheck, value: 'Jumeirah 1', label: 'Downtown Dubai', desc: 'Complimentary Valet Parking' }
  ];

  return (
    <section className="py-12 bg-[#0F172A] border-b border-sky-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-sky-500/20 text-center hover:border-sky-400/50 transition-colors">
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
