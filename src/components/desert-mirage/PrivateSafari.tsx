'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Car, Utensils, Camera, Moon, ShieldCheck, ArrowRight } from 'lucide-react';

interface PrivateSafariProps {
  onOpenBooking: (intent?: string) => void;
}

export const PrivateSafari: React.FC<PrivateSafariProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: 'Dedicated Range Rover Autobiography',
      desc: 'No shared vehicles. Complete privacy from doorstep to dunes with customizable climate and personal media connectivity.',
      icon: Car
    },
    {
      title: 'Personal Michelin-Calibre Chef',
      desc: 'Seven-course bespoke banquet prepared live on the dunes, tailored to your exact dietary and gastronomic preferences.',
      icon: Utensils
    },
    {
      title: 'Private Desert Master & Falconer',
      desc: 'Your dedicated licensed navigator and master falconer pacing the expedition entirely around your preferred speed.',
      icon: Crown
    },
    {
      title: 'Exclusive Untouched Dune Crests',
      desc: 'Guaranteed seclusion with zero visibility of other tour operators or commercial camps in your panoramic horizon.',
      icon: Moon
    }
  ];

  return (
    <section className="relative py-24 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
              <Crown className="w-3.5 h-3.5" />
              <span>ULTRA-EXCLUSIVE PRIVACY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
              Your Desert. <br />
              <span className="italic text-[#E8D7B8] font-light">Your Rules.</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Designed for dignitaries, royalty, and discerning travellers who expect absolute discretion, uncompromised safety, and total customization.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('Private VIP Bespoke Safari')}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#C9A265] to-[#A87B38] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C9A265]/20 hover:scale-[1.02] transition-all"
              >
                <span>Design Private Safari</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Editorial Feature Tiles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#1A1410] to-[#100C09] border border-[#C9A265]/20 space-y-3 hover:border-[#C9A265]/40 transition-colors"
              >
                <div className="p-3 rounded-xl bg-[#090706] border border-[#C9A265]/30 text-[#C9A265] w-fit">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif text-white">{item.title}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
