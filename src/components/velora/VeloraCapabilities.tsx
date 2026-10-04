'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Calendar, Shield, Users, Flame, UserCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { VELORA_CAPABILITIES } from '@/data/veloraData';

interface VeloraCapabilitiesProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const VeloraCapabilities: React.FC<VeloraCapabilitiesProps> = ({
  onOpenBooking,
  onExploreTreatments,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    ShieldCheck,
    Calendar,
    Shield,
    Users,
    Flame,
    UserCheck,
    MessageSquare,
  };

  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            SANCTUARY CAPABILITIES
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            The Digital Wellness Ecosystem.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            Eight intelligent pillars orchestrating continuous tranquility, tailored therapies, and seamless reservation journeys.
          </p>
        </div>

        {/* 8-Card Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {VELORA_CAPABILITIES.map((cap, idx) => {
            const icons = [ShieldCheck, Compass, Calendar, Shield, Users, Flame, UserCheck, MessageSquare];
            const Icon = icons[idx % icons.length] || ShieldCheck;

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#111613] border border-[#1f2923] hover:border-[#c5a059]/40 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-[#18211c] text-[#c5a059] border border-[#27342c] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-[#fdfbf7] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#a29c90] font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Final CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#17221c] via-[#121714] to-[#0a0d0b] border border-[#27372e] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs tracking-[0.4em] uppercase text-[#c5a059] font-light block">
              YOUR TIME
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#fdfbf7] font-normal tracking-tight">
              Make Space for Yourself.
            </h2>

            <p className="text-base sm:text-lg text-[#b8b3a7] font-light leading-relaxed max-w-2xl mx-auto">
              Step away from the noise and enter a world designed around stillness, intention, and extraordinary care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(197,160,89,0.3)] cursor-pointer"
              >
                <span>Reserve Your Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTreatments}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#17201b] hover:bg-[#202c25] text-[#ded9ce] border border-[#2c3d33] text-xs font-light tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                Explore Velora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
