'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Bookmark, History, ShieldCheck, MapPin, QrCode, Flame, ArrowRight, Heart } from 'lucide-react';
import { EMBERWILD_STAYS } from '@/data/emberwildData';

export const EmberwildDashboard: React.FC<{ onViewStay?: (stay: any) => void }> = ({ onViewStay }) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'saved' | 'history' | 'preferences'>('upcoming');

  const upcomingStay = EMBERWILD_STAYS[0]; // Ember Ridge Dome
  const savedStays = [EMBERWILD_STAYS[1], EMBERWILD_STAYS[2], EMBERWILD_STAYS[8]];

  return (
    <section className="py-24 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              GUEST SANCTUARY PORTAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
              My Journey <span className="font-serif italic text-amber-400">Dashboard</span>
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Access your active reservation passes, saved wilderness retreats, past expeditions, and dietary preferences.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-1 bg-stone-900 border border-stone-800 p-1.5 rounded-2xl text-xs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'upcoming' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Upcoming Escape
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'saved' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Saved ({savedStays.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'history' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Previous Journeys
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'preferences' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              Preferences
            </button>
          </div>
        </div>

        {/* Tab 1: Upcoming Escape */}
        {activeTab === 'upcoming' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/60 border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-800">
              <img
                src={upcomingStay.image}
                alt={upcomingStay.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] border border-stone-800">
                ACTIVE ESCAPE · CONFIRMED
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-stone-500">REF: EW-2026-DXB-9142</span>
                  <h3 className="text-2xl sm:text-3xl font-light text-stone-100 mt-1">{upcomingStay.name}</h3>
                  <div className="text-xs text-amber-400 font-mono mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{upcomingStay.location}</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-950 rounded-2xl border border-stone-800 text-center">
                  <div className="text-[10px] uppercase font-mono text-stone-500">Check-In In</div>
                  <div className="text-xl font-mono font-bold text-amber-400">12 Days</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
                  <div className="text-[10px] font-mono text-stone-500 uppercase">Dates</div>
                  <div className="text-stone-200 font-mono mt-1">15 Oct – 17 Oct</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
                  <div className="text-[10px] font-mono text-stone-500 uppercase">Guests</div>
                  <div className="text-stone-200 mt-1">2 Adults (Private)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80">
                  <div className="text-[10px] font-mono text-stone-500 uppercase">Add-Ons</div>
                  <div className="text-amber-300 mt-1">Campfire + Stargazing</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-stone-800">
                <button
                  onClick={() => onViewStay && onViewStay(upcomingStay)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-950/40"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>View Digital Trip Pass</span>
                </button>
                <button className="px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 text-xs text-stone-300 transition-colors">
                  Modify Itinerary Add-Ons
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Saved Stays */}
        {activeTab === 'saved' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savedStays.map((stay) => (
              <div
                key={stay.id}
                onClick={() => onViewStay && onViewStay(stay)}
                className="p-5 rounded-3xl bg-stone-900/60 border border-stone-800 cursor-pointer group hover:border-amber-500/50 transition-all"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-stone-950">
                  <img src={stay.image} alt={stay.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-2.5 right-2.5 p-2 rounded-full bg-stone-950/80 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-rose-400" />
                  </span>
                </div>
                <h4 className="text-base font-medium text-stone-100 group-hover:text-amber-300">{stay.name}</h4>
                <div className="text-xs text-stone-400 mt-1">{stay.location}</div>
                <div className="text-sm font-mono text-amber-400 font-medium mt-3">
                  AED {stay.pricePerNightAED.toLocaleString()} / night
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Previous Journeys */}
        {activeTab === 'history' && (
          <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-950 border border-stone-800 text-stone-500 flex items-center justify-center mx-auto">
              <History className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-light text-stone-200">Past Wilderness Expeditions</h4>
            <p className="text-xs text-stone-400 max-w-md mx-auto">
              You completed a 2-night stay at <strong className="text-stone-200">Moonstone Camp (Rub Al Khali)</strong> on 12 Feb 2026.
            </p>
          </div>
        )}

        {/* Tab 4: Preferences */}
        {activeTab === 'preferences' && (
          <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-6 max-w-2xl mx-auto text-xs">
            <h4 className="text-base font-medium text-stone-100">Guest Hospitality Preferences</h4>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-center justify-between p-3.5 bg-stone-950 rounded-xl border border-stone-800">
                <span>Dietary: Plant-based & Gluten-free breakfast basket</span>
                <span className="text-emerald-400 font-mono">Saved</span>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-stone-950 rounded-xl border border-stone-800">
                <span>Pillow Selection: Organic Featherdown + Lavender mist</span>
                <span className="text-emerald-400 font-mono">Saved</span>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-stone-950 rounded-xl border border-stone-800">
                <span>Firewood: Sustainably harvested olive wood embers only</span>
                <span className="text-emerald-400 font-mono">Saved</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
