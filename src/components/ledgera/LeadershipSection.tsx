'use client';

import React from 'react';
import { Globe2 } from 'lucide-react';
import { LEDGERA_LEADERS } from '@/data/ledgeraData';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              SENIOR ACCOUNTING & TAX DIRECTORS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              Partners & Directors.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Led by veteran CPAs, chartered tax advisers, and former Big 4 audit directors with deep GCC practice experience.
            </p>
          </div>
        </div>

        {/* 4 Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEDGERA_LEADERS.map((ldr) => (
            <div
              key={ldr.name}
              className="bg-[#0E3B27] rounded-3xl border border-stone-800 overflow-hidden p-6 shadow-xl flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all font-sans"
            >
              <div>
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-[#0A291C]">
                  <img
                    src={ldr.image}
                    alt={ldr.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B27] via-transparent to-transparent" />
                </div>

                <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block mb-1">{ldr.experience}</span>
                <h3 className="text-xl font-serif font-bold text-[#F7F6F2] mb-1">{ldr.name}</h3>
                <span className="text-xs font-mono text-stone-400 block mb-3">{ldr.role}</span>
                <p className="text-xs text-stone-300 font-light line-clamp-3 leading-relaxed mb-4">{ldr.bio}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 space-y-1 font-mono text-[10px] text-stone-400">
                <span className="text-stone-500 uppercase block text-[9px]">SPECIALIZATION:</span>
                <span className="text-stone-300 block">{ldr.specialization}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
