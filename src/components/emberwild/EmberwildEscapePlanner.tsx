'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Calendar, Compass, Sun, Moon, ArrowRight, Clock } from 'lucide-react';

export const EmberwildEscapePlanner: React.FC<{ onReserveItinerary?: () => void }> = ({ onReserveItinerary }) => {
  const [nights, setNights] = useState<number>(3);
  const [groupSize, setGroupSize] = useState<string>('Couples (2)');
  const [mood, setMood] = useState<string>('ESCAPE');
  const [destination, setDestination] = useState<string>('Mountain');
  const [activityLevel, setActivityLevel] = useState<string>('Moderate');

  const getItinerary = () => {
    return [
      {
        day: 'DAY 01',
        title: 'Arrival & Welcoming Embers',
        schedule: [
          { time: '15:00', title: 'Arrival & Luggage Porterage', desc: 'Check-in to your cliffside retreat. Welcome cardamom tea and cold towel service.' },
          { time: '17:30', title: 'Golden Hour Ridge Walk', desc: 'Self-guided botanical stroll along the crest as sunset paints the Hajar mountains.' },
          { time: '19:30', title: 'Live Olive-Wood Welcome Fire', desc: 'Gather around the sunken firepit for artisanal s’mores and acoustic stillness.' }
        ]
      },
      {
        day: 'DAY 02',
        title: 'Full Wilderness Immersion',
        schedule: [
          { time: '06:30', title: 'Sunrise Mountain Breakfast Basket', desc: 'Hand-ground single origin Chemex coffee, fresh pastries, and local wadi honey delivered.' },
          { time: '09:00', title: 'Guided Geological Ridge Trail', desc: '3.5 hour guided traverse exploring ancient marine fossils and 1,200m vertical vistas.' },
          { time: '14:00', title: 'Afternoon Solitude & Hammock Session', desc: 'Unhurried rest in the shaded cedar glade with ambient nature sounds.' },
          { time: '20:30', title: 'Deep Sky Astronomy Session', desc: 'High-magnification Celestron telescope exploration of Saturn, Andromeda, and nebulae.' }
        ]
      },
      {
        day: 'DAY 03',
        title: 'Slow Morning & Departure',
        schedule: [
          { time: '08:00', title: 'Pranayama Ridge Breathwork', desc: 'Gentle mindfulness session in pure high-altitude mountain air overlooking the valley.' },
          { time: '10:00', title: 'Slow Artisan Brunch', desc: 'Freshly baked sourdough, organic poached eggs, and local herb tonics.' },
          { time: '11:00', title: 'Departure & Gift of Wild Seeds', desc: 'Check-out with a keepsake container of native mountain wildflower seeds.' }
        ]
      }
    ];
  };

  const itinerary = getItinerary();

  return (
    <section className="py-24 bg-[#0a0d0a] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SMART ESCAPE PLANNER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
            Your Escape, <span className="font-serif italic text-amber-400">Designed Around You.</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3 leading-relaxed">
            Configure your travel parameters to simulate a bespoke 3-day wilderness journey tailored to your rhythm.
          </p>
        </div>

        {/* Input Parameters Controls */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1.5">Nights</label>
              <select
                value={nights}
                onChange={(e) => setNights(parseInt(e.target.value, 10))}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200"
              >
                <option value="2">2 Nights (Weekend)</option>
                <option value="3">3 Nights (Recommended)</option>
                <option value="5">5 Nights (Deep Immersion)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1.5">Group Size</label>
              <select
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200"
              >
                <option value="Solo (1)">Solo Traveler</option>
                <option value="Couples (2)">Couples (2 Guests)</option>
                <option value="Family (4)">Family (4 Guests)</option>
                <option value="Private Group (6+)">Private Group (6+)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1.5">Travel Mood</label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200"
              >
                <option value="ESCAPE">ESCAPE (Unplug)</option>
                <option value="REST">REST (Wellness)</option>
                <option value="EXPLORE">EXPLORE (Active)</option>
                <option value="DISCOVER">DISCOVER (Nature)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1.5">Landscape</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200"
              >
                <option value="Mountain">Hajar Mountain Range</option>
                <option value="Desert">Al Qudra & Liwa Dunes</option>
                <option value="Forest">Wadi Shawkah Ancient Canopy</option>
                <option value="Lakeside">Hatta Dam Waterways</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-amber-400 uppercase mb-1.5">Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200"
              >
                <option value="Gentle">Gentle & Unhurried</option>
                <option value="Moderate">Moderate (Hike + Rest)</option>
                <option value="Adventurous">High Adrenaline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Generated Itinerary Days */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {itinerary.map((dayPlan, idx) => (
            <motion.div
              key={dayPlan.day}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs mb-4">
                  <span className="font-mono text-amber-400 font-bold">{dayPlan.day}</span>
                  <span className="text-stone-400">{mood} PACE</span>
                </div>

                <h3 className="text-lg font-light text-stone-100 mb-6">{dayPlan.title}</h3>

                <div className="space-y-4">
                  {dayPlan.schedule.map((item, sIdx) => (
                    <div key={sIdx} className="relative pl-6 pb-2 border-l border-stone-800 last:border-none">
                      <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-stone-900 border border-amber-500" />
                      <div className="text-[11px] font-mono text-amber-400">{item.time}</div>
                      <div className="text-xs font-medium text-stone-200 mt-0.5">{item.title}</div>
                      <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 text-[11px] text-stone-500 font-mono flex items-center justify-between">
                <span>Personalized Wilderness Plan</span>
                <span className="text-emerald-400">100% Flexible</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
