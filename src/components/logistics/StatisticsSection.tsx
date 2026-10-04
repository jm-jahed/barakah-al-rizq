'use client';

import React from 'react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    { label: 'Deliveries Completed', value: '15M+', subtext: 'Across UAE & Global Routes' },
    { label: 'On-Time SLA Rate', value: '98.7%', subtext: 'Verified Telemetry Benchmark' },
    { label: 'Countries Served', value: '120+', subtext: 'Global Cross-Border Network' },
    { label: 'Business Clients', value: '4,500+', subtext: 'Retailers, Tech & Healthcare' },
    { label: 'Operations Support', value: '24/7/365', subtext: 'Live Dispatch Support' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-950 via-[#070B14] to-blue-950 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 font-mono block">
                {s.value}
              </span>
              <span className="text-sm font-bold text-white block mt-2">{s.label}</span>
              <span className="text-[10px] font-mono text-gray-400 block mt-1">{s.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
