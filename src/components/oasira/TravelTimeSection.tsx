'use client';

import React from 'react';
import { Navigation, Clock } from 'lucide-react';

export const TravelTimeSection: React.FC = () => {
  const routes = [
    { from: 'Dubai Downtown', to: 'Ras Al Khaimah', time: '1h 15m', dist: '110 km' },
    { from: 'Dubai Downtown', to: 'Abu Dhabi Saadiyat', time: '1h 20m', dist: '135 km' },
    { from: 'Dubai Downtown', to: 'Fujairah Coast', time: '1h 40m', dist: '145 km' },
    { from: 'Abu Dhabi', to: 'Al Ain Oasis', time: '1h 30m', dist: '160 km' },
  ];

  return (
    <section className="py-16 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
            UAE STAYCATION ROUTE TIMES
          </span>
          <h3 className="text-2xl font-serif font-bold text-white mt-2">Zero Airport Hassle. Easy Highway Access.</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {routes.map((r) => (
            <div key={r.to} className="p-4 rounded-2xl bg-[#0F382C] border border-stone-800 space-y-1">
              <div className="flex items-center justify-between text-stone-400 text-[10px]">
                <span>{r.from}</span>
                <span>➔</span>
                <span>{r.to}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-white font-bold text-sm">{r.time} Drive</span>
                <span className="text-[#D4B382] font-bold">{r.dist}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
