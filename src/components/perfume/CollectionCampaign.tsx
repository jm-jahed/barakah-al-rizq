'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight, Flame } from 'lucide-react';

export const CollectionCampaign: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 overflow-hidden shadow-2xl p-6 sm:p-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                  SPECIAL CAMPAIGN RELEASE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
                The Midnight Oud Suite.
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed font-serif italic">
                A dark nocturnal symphony of rare Cambodian agarwood, smoldering incense, and velvet Damask rose.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 space-y-1">
                <span className="text-amber-400 font-bold block">CAMPAIGN INCLUSIONS:</span>
                <p>100ml Extrait de Parfum + 12ml Concentrated Attar Oil + Leather Travel Sleeve</p>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-xl shadow-amber-500/20"
              >
                <span>Explore Midnight Collection →</span>
              </button>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
                alt="Midnight Campaign"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-amber-300 font-bold bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                Concept Campaign — Demo Build #11
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
