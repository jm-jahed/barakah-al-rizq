'use client';

import React from 'react';
import { LUXSHIELD_LEADERS } from '@/data/luxshieldData';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0C0E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            MASTER DETAILING LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Meet Our Studio Master Technicians
          </h2>
          <p className="text-gray-300 text-base font-light">
            Experienced paint correction specialists, PPF plotters, and luxury client managers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LUXSHIELD_LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#14161A] border border-white/10 shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-[#0B0C0E]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                <span className="text-xs font-mono font-bold text-blue-400 block mb-2">{leader.role}</span>
                <span className="text-xs text-gray-400 font-medium block">{leader.experience}</span>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-gray-400 font-mono">
                {leader.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};