'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Plane, 
  Building2, 
  Bookmark, 
  FileText, 
  Bell, 
  User, 
  Calendar, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const AeroviaMyJourneys: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'saved' | 'documents'>('upcoming');

  return (
    <section className="relative py-28 bg-[#03060c] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
              <User className="w-3.5 h-3.5 text-amber-400" />
              TRAVELER COMMAND PORTAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              My Journeys & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                Digital Passport.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            All your upcoming luxury escapes, confirmed boarding passes, five-star hotel vouchers, and frequent flyer status in one unified private dashboard.
          </p>
        </div>

        {/* Dashboard Concept Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/30 shadow-2xl overflow-hidden">
          {/* Top Profile Bar */}
          <div className="p-6 bg-[#060c14] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold font-mono">
                TM
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">Tariq Mansoor Al-Nuaimi</h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 font-bold">
                    AEROVIA BLACK VIP
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">Account ID: #AER-9920-DXB • Skywards Platinum</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'upcoming' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                Upcoming (1)
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'past' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                Past Journeys (4)
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'saved' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                Saved Wishlist
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'documents' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Vouchers & Docs
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'upcoming' && (
              <div className="p-6 rounded-2xl bg-[#091424] border border-amber-500/40">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-300">CONFIRMED JOURNEY: #AER-TYO-8820</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                      TICKETS ISSUED
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">12 Nov — 17 Nov 2026 (In 68 Days)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono mb-4">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Route:</span>
                    <div className="text-white font-bold">Dubai (DXB) ↔ Tokyo (HND)</div>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Hotel Stay:</span>
                    <div className="text-slate-200">Aman Tokyo (5 Nights)</div>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">VIP Status:</span>
                    <div className="text-amber-300 font-bold">Maybach Chauffeur + Lounge</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    All Flight & Hotel Vouchers Synced Offline
                  </span>
                  <button className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1">
                    View Live Itinerary <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'past' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#060c14] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Paris Spring Escape • Hôtel de Crillon</div>
                    <span className="text-xs font-mono text-slate-400">April 2026 • First Class EK 402</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Completed</span>
                </div>
                <div className="p-4 rounded-xl bg-[#060c14] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Maldives Overwater Retreat • Cheval Blanc</div>
                    <span className="text-xs font-mono text-slate-400">December 2025 • Water Villa 4N</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Completed</span>
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#091424] border border-slate-800">
                  <h4 className="text-sm font-bold text-white">Raffles Singapore Courtyard Suite</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">Saved from Summer Wishlist • AED 2,850/night</p>
                </div>
                <div className="p-4 rounded-xl bg-[#091424] border border-slate-800">
                  <h4 className="text-sm font-bold text-white">The Lana Dubai Marina Sky Suite</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">Saved from Staycation Wishlist • AED 3,200/night</p>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#091424] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">E-Ticket Receipt & Tax Invoice #INV-8820</div>
                    <span className="text-xs font-mono text-slate-400">PDF Document • Cryptographically Signed</span>
                  </div>
                  <button className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white">
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
