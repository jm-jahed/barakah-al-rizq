'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, ShieldCheck, Heart, Cake, Car, Share2, ArrowRight } from 'lucide-react';
import { DESERT_MIRAGE_BRAND } from '@/data/desertMirageData';

interface ConciergeProps {
  onOpenModal: (intent?: string) => void;
}

export const Concierge: React.FC<ConciergeProps> = ({ onOpenModal }) => {
  const bespokeServices = [
    {
      title: 'Romantic Sunset Marriage Proposals',
      desc: 'Secluded dune crest with 1,000 candle lanterns, violist, champagne, and custom floral styling.',
      icon: Heart
    },
    {
      title: 'Milestone Birthdays & Anniversaries',
      desc: 'Exclusive private chef table, personalized cake, and firepit acoustic Oud performance.',
      icon: Cake
    },
    {
      title: 'Helicopter & Exotic Vehicle Transit',
      desc: 'Direct aerial transfer from Dubai Police Academy / DWC or private convoy of Range Rovers.',
      icon: Car
    }
  ];

  const handleWhatsAppConcierge = () => {
    const text = encodeURIComponent(
      `Hello Desert Mirage VIP Concierge,\n` +
      `I would like to speak directly with a dedicated desert expedition designer for a bespoke inquiry.`
    );
    window.open(`https://wa.me/${DESERT_MIRAGE_BRAND.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <section id="concierge" className="relative py-24 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BESPOKE CONCIERGE SERVICE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Your Desert Concierge.
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Every extraordinary journey begins with a private conversation. Our concierge team tailors every detail — from dietary preferences to musical accompaniment and aerial logistics.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenModal('Concierge Bespoke Request')}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#C9A265] to-[#A87B38] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C9A265]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Speak with a Concierge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppConcierge}
                className="px-6 py-4 rounded-xl bg-[#140F0C] hover:bg-[#1C1612] border border-stone-800 text-stone-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bespoke Services */}
          <div className="lg:col-span-6 space-y-4">
            {bespokeServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#140F0C] to-[#0A0806] border border-stone-800 flex items-start gap-4 hover:border-[#C9A265]/40 transition-colors"
              >
                <div className="p-3 rounded-xl bg-[#090706] border border-[#C9A265]/30 text-[#C9A265] shrink-0">
                  <srv.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif text-white">{srv.title}</h3>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
