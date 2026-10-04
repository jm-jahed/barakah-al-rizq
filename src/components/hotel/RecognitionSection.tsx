'use client';

import React from 'react';
import { HOTEL_RECOGNITION } from '@/data/hotelData';

export const RecognitionSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#141210] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
            PORTFOLIO HONORS & HOSPITALITY RECOGNITION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
          {HOTEL_RECOGNITION.map((rec) => (
            <div key={rec.publication} className="p-4 rounded-2xl bg-[#1C1917] border border-stone-800 space-y-1">
              <span className="text-xs font-bold text-[#C5A059] uppercase block tracking-wider">{rec.publication}</span>
              <span className="text-[11px] text-stone-300 block">{rec.award}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
