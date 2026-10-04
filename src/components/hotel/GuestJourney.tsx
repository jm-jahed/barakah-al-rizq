'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const GuestJourney: React.FC = () => {
  const steps = [
    { step: '01', title: 'Before You Arrive', desc: 'Pre-arrival royal butler preference itinerary & DXB/DWC VIP tarmac transfer coordination.' },
    { step: '02', title: 'Arrival', desc: 'Private Rolls-Royce Ghost transfer, chilled saffron-infused towels, and royal welcome majlis.' },
    { step: '03', title: 'Your Palace Stay', desc: 'Dedicated butler unpacking, daily champagne breakfast, private superyacht & desert safaris.' },
    { step: '04', title: 'Departure', desc: 'Seamless 14:00 PM late checkout, custom luggage handling, and direct VIP airport lounge transfer.' },
    { step: '05', title: 'After Your Stay', desc: 'Velora Royal Circle membership, bespoke memory album, and priority suite allocations.' }
  ];

  return (
    <section className="py-24 bg-[#141210] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            THE VELORA ROYAL HOSPITALITY PROTOCOL
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
            Your guest journey.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Five bespoke phases engineered to deliver uncompromising royal service from arrival in Dubai to return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#29221D] border border-stone-800 relative space-y-3 font-sans hover:border-[#C5A059]/40 transition-all hover:scale-[1.02]"
            >
              <span className="text-xs font-mono font-bold text-[#C5A059] block">{item.step}</span>
              <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
