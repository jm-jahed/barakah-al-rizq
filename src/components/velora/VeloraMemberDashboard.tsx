'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, History, Heart, Shield, Sliders, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { VELORA_RITUALS } from '@/data/veloraData';

export const VeloraMemberDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'UPCOMING' | 'MY RITUALS' | 'WELLNESS HISTORY' | 'FAVORITES' | 'MEMBERSHIP' | 'PREFERENCES'>('UPCOMING');

  const tabs = [
    { id: 'UPCOMING', label: 'Upcoming', icon: Calendar },
    { id: 'MY RITUALS', label: 'My Rituals', icon: ShieldCheck },
    { id: 'WELLNESS HISTORY', label: 'Wellness History', icon: History },
    { id: 'FAVORITES', label: 'Favorites', icon: Heart },
    { id: 'MEMBERSHIP', label: 'Membership', icon: Shield },
    { id: 'PREFERENCES', label: 'Preferences', icon: Sliders },
  ] as const;

  return (
    <section className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b241e] border border-[#27352d] text-xs text-[#c5a059] uppercase tracking-[0.25em] mb-3">
              <User className="w-3.5 h-3.5" />
              <span>SANCTUARY PORTAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#fdfbf7] font-normal tracking-tight">
              Member Sanctuary Dashboard.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs text-[#8c877b] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
            <span>Patron Status: <strong className="text-[#ded9ce] font-normal">Signature Tier (Active)</strong></span>
          </div>
        </div>

        {/* Dashboard Shell */}
        <div className="rounded-3xl bg-[#111613] border border-[#222c26] overflow-hidden shadow-2xl">
          {/* Dashboard Navigation Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto p-3 bg-[#0d100e] border-b border-[#1f2823] scrollbar-thin">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1b2520] text-[#c5a059] font-medium border border-[#2b3a32]'
                      : 'text-[#7d786d] hover:text-[#ded9ce] hover:bg-[#141916]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Viewport */}
          <div className="p-6 sm:p-8 min-h-[340px]">
            <AnimatePresence mode="wait">
              {activeTab === 'UPCOMING' && (
                <motion.div
                  key="upcoming"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between text-xs text-[#8c877b] mb-2">
                    <span>Confirmed Reserved Experiences</span>
                    <span>1 Active Session</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#151d18] border border-[#26342b] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-[#c5a059] uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Thursday, 18 September 2026 · 15:00 GST</span>
                      </div>
                      <h4 className="text-xl font-serif text-[#fdfbf7]">The Silent Hour (90 Min)</h4>
                      <p className="text-xs text-[#8f897d]">Private Suite 01 · Aromatherapy: Wild Sage & Warm Amber</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#1f2c24] text-[#c5a059] text-[11px] uppercase tracking-wider">
                        Confirmed #VEL-8924
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'MY RITUALS' && (
                <motion.div
                  key="rituals"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <div className="text-xs text-[#8c877b] mb-2">Curated Intention Roadmap</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {VELORA_RITUALS.slice(0, 4).map((r) => (
                      <div key={r.id} className="p-4 rounded-xl bg-[#151c18] border border-[#212c25] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-serif text-[#fdfbf7]">{r.name}</div>
                          <div className="text-[10px] text-[#787368]">{r.durationLabel} · {r.category}</div>
                        </div>
                        <span className="text-xs text-[#c5a059]">AED {r.priceAED.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'WELLNESS HISTORY' && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <div className="text-xs text-[#8c877b] mb-2">Sanctuary Log & Biomarker Notes</div>
                  {[
                    { date: '12 August 2026', ritual: 'The Stone Reset (75 Min)', notes: 'Noted deep tension release in lumbar quadrant. Warm basalt stones.' },
                    { date: '29 July 2026', ritual: 'Obsidian Deep Sleep Protocol (90 Min)', notes: 'Cranial rhythm balanced; lavender & frankincense infusion.' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#141a16] border border-[#202923] space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#c5a059] font-medium">{item.ritual}</span>
                        <span className="text-[#6e695f]">{item.date}</span>
                      </div>
                      <p className="text-xs text-[#a39e91] font-light">{item.notes}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'FAVORITES' && (
                <motion.div
                  key="favs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {VELORA_RITUALS.slice(0, 3).map((r) => (
                    <div key={r.id} className="p-4 rounded-xl bg-[#151c18] border border-[#232f27] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#c5a059] uppercase tracking-wider">{r.category}</span>
                        <Heart className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                      </div>
                      <div className="text-sm font-serif text-[#fdfbf7]">{r.name}</div>
                      <div className="text-xs text-[#7a756b]">{r.durationLabel}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'MEMBERSHIP' && (
                <motion.div
                  key="membership"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 rounded-2xl bg-[#141b17] border border-[#222e27] space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#c5a059] uppercase tracking-widest">Active Tier</div>
                      <h4 className="text-2xl font-serif text-[#fdfbf7]">Signature Patronage</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#1f2b23] text-xs text-[#c5a059] border border-[#2f3f35]">
                      Renews Dec 2026
                    </span>
                  </div>
                  <p className="text-xs text-[#9d978a] font-light">
                    Includes 2 complimentary 90-minute rituals per month, unlimited private hydrotherapy access, priority suite bookings, and seasonal botanical gifting.
                  </p>
                </motion.div>
              )}

              {activeTab === 'PREFERENCES' && (
                <motion.div
                  key="preferences"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
                >
                  <div className="p-4 rounded-xl bg-[#131915] border border-[#1f2823] space-y-2">
                    <div className="text-[#c5a059] uppercase tracking-wider font-medium">Aromatherapy Preference</div>
                    <div className="text-[#ded9ce]">Smoked Oud, Roman Chamomile & Frankincense</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#131915] border border-[#1f2823] space-y-2">
                    <div className="text-[#c5a059] uppercase tracking-wider font-medium">Pressure & Technique</div>
                    <div className="text-[#ded9ce]">Deep Firm with Heated Basalt Accents</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#131915] border border-[#1f2823] space-y-2">
                    <div className="text-[#c5a059] uppercase tracking-wider font-medium">Post-Ritual Infusion</div>
                    <div className="text-[#ded9ce]">Silver Needle White Tea with Saffron</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#131915] border border-[#1f2823] space-y-2">
                    <div className="text-[#c5a059] uppercase tracking-wider font-medium">Atmospheric Lighting</div>
                    <div className="text-[#ded9ce]">Subdued 1800K Warm Amber Candlelight</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
