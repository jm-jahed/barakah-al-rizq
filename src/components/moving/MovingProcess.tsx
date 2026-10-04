'use client';

import React from 'react';
import { Calendar, Calculator, Truck, Home, ArrowRight } from 'lucide-react';

export const MovingProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Plan',
      description: 'Share where you are moving from and to, your property type, and preferred moving date.',
      icon: <Calendar className="w-6 h-6 text-[#E87A36]" />,
      detail: 'Instant online quote estimation'
    },
    {
      step: '02',
      title: 'Get Your Quote',
      description: 'Receive a transparent fixed moving estimate with guaranteed pricing and zero surprise fees.',
      icon: <Calculator className="w-6 h-6 text-emerald-400" />,
      detail: 'Move Manager dedicated assignment'
    },
    {
      step: '03',
      title: 'We Handle the Move',
      description: 'Our trained crew packs, protects, disassembles furniture, and transports your belongings safely.',
      icon: <Truck className="w-6 h-6 text-[#E87A36]" />,
      detail: 'Live Move ID tracking & photo POD'
    },
    {
      step: '04',
      title: 'Settle In',
      description: 'We unload, reassemble furniture, unpack wardrobes, and place everything where you want it.',
      icon: <Home className="w-6 h-6 text-emerald-400" />,
      detail: 'Debris removal & Ejari peace-of-mind'
    }
  ];

  return (
    <section className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold text-[#E87A36] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D96B27]/15 border border-[#D96B27]/30">
            SIMPLE 4-STEP RELOCATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mt-4 font-serif">
            A better way to move.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 mt-2">
            Four transparent phases engineered to eliminate moving anxiety from initial quote to final room setup.
          </p>
        </div>

        {/* 4 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#292524] rounded-3xl border border-stone-700 p-8 relative overflow-hidden group hover:border-[#D96B27]/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black font-mono text-stone-600 group-hover:text-[#D96B27] transition-colors">
                  {item.step}
                </span>
                <div className="p-3 rounded-2xl bg-[#1C1917] border border-stone-700">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E87A36] transition-colors font-serif">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="pt-4 border-t border-stone-800 text-[11px] font-mono text-emerald-300">
                ✓ {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
