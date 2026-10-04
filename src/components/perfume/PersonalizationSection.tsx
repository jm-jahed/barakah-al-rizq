'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2 } from 'lucide-react';

export const PersonalizationSection: React.FC = () => {
  const [engravingText, setEngravingText] = useState<string>('R.A.');
  const [giftNote, setGiftNote] = useState<string>('With my deepest affection.');

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            MAKE IT UNFORGETTABLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Bespoke Bottle Personalization.
          </h2>
          <p className="text-base text-gray-400">
            Engrave initial monograms on metallic bottle caps and craft wax-sealed calligraphy gift messages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Engraving Preview */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-[#10141C] border border-amber-500/30 shadow-2xl text-center space-y-4">
            <div className="relative h-72 rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center p-4">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop"
                alt="Engraved Bottle Cap"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/90 backdrop-blur-md border border-amber-400 text-center shadow-2xl space-y-1">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">ENGRAVED CAP MONOGRAM</span>
                <span className="text-3xl font-extrabold text-amber-400 font-serif tracking-widest">
                  {engravingText || 'R.A.'}
                </span>
              </div>
            </div>

            <span className="text-xs font-mono text-amber-300 block">
              Sample Personalization Experience — Concept Option
            </span>
          </div>

          {/* Controls */}
          <div className="lg:col-span-6 space-y-4 p-6 rounded-3xl bg-[#10141C] border border-white/10 shadow-2xl">
            <div>
              <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                01. Custom Cap Engraving (Max 4 Characters)
              </label>
              <input
                type="text"
                maxLength={4}
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-sm text-white font-serif font-bold tracking-widest focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                02. Wax-Sealed Gift Card Message
              </label>
              <textarea
                rows={3}
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
                className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 font-sans"
              />
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Complimentary Silk Ribbon & Wax Seal Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
