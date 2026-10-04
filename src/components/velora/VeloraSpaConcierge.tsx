'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Phone, Send, CheckCircle2, Shield } from 'lucide-react';
import { CONCIERGE_PILLARS } from '@/data/veloraData';

interface VeloraSpaConciergeProps {
  onOpenBooking: () => void;
}

export const VeloraSpaConcierge: React.FC<VeloraSpaConciergeProps> = ({
  onOpenBooking,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('c1');
  const [guestNote, setGuestNote] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  const activePillar =
    CONCIERGE_PILLARS.find((p) => p.id === selectedPillarId) || CONCIERGE_PILLARS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setGuestNote('');
    }, 4000);
  };

  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17201b] border border-[#27352d] text-xs text-[#c5a059] uppercase tracking-[0.25em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BESPOKE CURATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Let Us Prepare the Moment.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            Every visit to VELORA is tailored prior to your arrival. Inform our concierge team of your bespoke preferences or specific sensory requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Concierge Service Pillars */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#8c877a] mb-2 font-medium">
              Select Concierge Service Area
            </div>

            {CONCIERGE_PILLARS.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#18221c] border-[#c5a059] shadow-lg'
                      : 'bg-[#111613] border-[#1e2721] hover:bg-[#151c17]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-base font-serif ${isSelected ? 'text-[#c5a059]' : 'text-[#fdfbf7]'}`}>
                      {pillar.title}
                    </span>
                    <span className="text-[10px] text-[#716c62] uppercase tracking-wider font-mono">
                      {pillar.action}
                    </span>
                  </div>
                  <p className="text-xs text-[#8f8a7e] font-light mt-1">
                    {pillar.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Direct Inscription Box */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#121815] border border-[#232f28] shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-[#c5a059] uppercase tracking-widest font-medium">
                  Direct Sanctuary Concierge
                </span>
                <h3 className="text-xl font-serif text-[#fdfbf7] mt-0.5">
                  {activePillar.title}
                </h3>
              </div>
              <div className="p-3 rounded-full bg-[#1b2520] text-[#c5a059] border border-[#2b3a31]">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>

            {isSent ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#c5a059] mx-auto animate-bounce" />
                <h4 className="text-lg font-serif text-[#fdfbf7]">Preferences Received</h4>
                <p className="text-xs text-[#9d978a] font-light max-w-sm mx-auto">
                  Our Head Concierge has logged your personalized parameters into your private guest dossier.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8e887c] mb-2 font-medium">
                    Special Inquiries & Tailored Preferences
                  </label>
                  <textarea
                    rows={4}
                    value={guestNote}
                    onChange={(e) => setGuestNote(e.target.value)}
                    placeholder="Specify botanical preferences, acoustic preferences, temperature settings, or dietary restrictions..."
                    className="w-full p-4 rounded-2xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <input
                    type="text"
                    placeholder="Guest Name or Patron ID"
                    required
                    className="p-3 rounded-xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059]"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp / VIP Phone (+971)"
                    required
                    className="p-3 rounded-xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Transmit to Sanctuary Concierge</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="text-[10px] text-[#6b665c] text-center italic">
                  Complete client discretion guaranteed. 24/7 dedicated sanctuary liaison.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
