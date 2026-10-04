'use client';
import React from 'react';
import { Users, Trophy, Activity, Clock } from 'lucide-react';

export const FitnessMetrics: React.FC = () => {
  const metrics = [
    { icon: Users, label: 'Active Members', value: '1,200+', detail: 'Sample Concept Metric' },
    { icon: Trophy, label: 'Trainer Rating', value: '4.9 / 5.0', detail: 'Based on 500+ Reviews' },
    { icon: Activity, label: 'Workout Attendance', value: '96%', detail: 'Monthly Consistency' },
    { icon: Clock, label: 'Facility Access', value: '24 / 7', detail: 'Keycard VIP Entry' },
  ];
  return (
    <section className="py-16 bg-[#12100F] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="p-6 rounded-2xl bg-[#090807] border border-red-500/15 flex flex-col items-center">
                <Icon className="w-6 h-6 text-red-400 mb-3" />
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-1">{m.value}</span>
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-1">{m.label}</span>
                <span className="text-[9px] font-mono text-gray-500">{m.detail}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
