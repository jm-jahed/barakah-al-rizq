'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Compass, Flame, Star, BedDouble } from 'lucide-react';
import { EMBERWILD_STAYS, EmberwildStay } from '@/data/emberwildData';

interface EmberwildWildFinderProps {
  onSelectStay: (stay: EmberwildStay) => void;
}

export const EmberwildWildFinder: React.FC<EmberwildWildFinderProps> = ({ onSelectStay }) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('ALL');
  const [selectedStayType, setSelectedStayType] = useState<string>('ALL');
  const [selectedExperience, setSelectedExperience] = useState<string>('ALL');
  const [selectedMood, setSelectedMood] = useState<string>('ALL');

  const destinationOptions = ['ALL', 'Forest', 'Mountain', 'Desert', 'Lakeside', 'Coastal', 'Valley'];
  const stayTypeOptions = ['ALL', 'Glass Dome', 'Forest Cabin', 'Luxury Tent', 'Treehouse', 'Safari Lodge', 'Desert Camp', 'Wilderness Pod', 'Private Villa'];
  const experienceOptions = ['ALL', 'Stargazing', 'Hiking', 'Campfire', 'Wildlife', 'Wellness', 'Adventure', 'Romance', 'Family Escape', 'Digital Detox'];
  const moodOptions = ['ALL', 'REST', 'EXPLORE', 'ESCAPE', 'CONNECT', 'DISCOVER'];

  // Filter recommendations
  const matchedStays = EMBERWILD_STAYS.filter(stay => {
    const matchDest = selectedDestination === 'ALL' || stay.destinationType === selectedDestination;
    const matchType = selectedStayType === 'ALL' || stay.stayType === selectedStayType;
    const matchExp = selectedExperience === 'ALL' || stay.experienceTags.includes(selectedExperience);
    const matchMood = selectedMood === 'ALL' || stay.tripMoods.includes(selectedMood as any);
    return matchDest && matchType && matchExp && matchMood;
  });

  const displayStays = matchedStays.length > 0 ? matchedStays.slice(0, 3) : EMBERWILD_STAYS.slice(0, 3);

  return (
    <section className="py-20 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE WILD FINDER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
            Find Your <span className="font-serif italic text-amber-400">Kind of Wild.</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3 leading-relaxed">
            Select your destination landscape, preferred structure, wilderness experience, and travel mood. Our intelligent discovery engine matches your ideal retreat.
          </p>
        </div>

        {/* Interactive Selector Pill Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 mb-12 space-y-6">
          {/* 1. Destination Type */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2.5">
              1. Landscape Destination
            </div>
            <div className="flex flex-wrap gap-2">
              {destinationOptions.map((dest) => (
                <button
                  key={dest}
                  onClick={() => setSelectedDestination(dest)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                    selectedDestination === dest
                      ? 'bg-amber-500 text-stone-950 font-medium shadow-md shadow-amber-950/40'
                      : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {dest === 'ALL' ? 'All Landscapes' : dest}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Stay Type */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2.5">
              2. Architectural Stay Type
            </div>
            <div className="flex flex-wrap gap-2">
              {stayTypeOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedStayType(type)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                    selectedStayType === type
                      ? 'bg-amber-500 text-stone-950 font-medium shadow-md shadow-amber-950/40'
                      : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {type === 'ALL' ? 'All Stay Types' : type}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Experience & Mood Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-800/80">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2.5">
                3. Signature Experience
              </div>
              <div className="flex flex-wrap gap-2">
                {experienceOptions.map((exp) => (
                  <button
                    key={exp}
                    onClick={() => setSelectedExperience(exp)}
                    className={`px-3 py-1 rounded-xl text-xs transition-all ${
                      selectedExperience === exp
                        ? 'bg-stone-200 text-stone-950 font-medium'
                        : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {exp === 'ALL' ? 'Any Experience' : exp}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2.5">
                4. Trip Mood
              </div>
              <div className="flex flex-wrap gap-2">
                {moodOptions.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`px-3 py-1 rounded-xl text-xs transition-all font-mono ${
                      selectedMood === mood
                        ? 'bg-emerald-500 text-stone-950 font-bold'
                        : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {mood === 'ALL' ? 'ANY MOOD' : mood}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Recommendations:
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20">
              {matchedStays.length} Stays Matched
            </span>
          </div>
        </div>

        {/* Recommended Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayStays.map((stay) => (
              <motion.div
                key={stay.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectStay(stay)}
                className="group rounded-3xl bg-stone-900/60 border border-stone-800 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                    <img
                      src={stay.image}
                      alt={stay.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-400 text-[10px] font-mono border border-stone-800">
                        {stay.destinationType.toUpperCase()}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-stone-300 text-[10px] font-mono border border-stone-800">
                        {stay.stayType}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-stone-950/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-stone-800 text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-mono text-stone-200">{stay.rating}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-medium text-stone-100 group-hover:text-amber-300 transition-colors">
                      {stay.name}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                      {stay.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {stay.experienceTags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800 text-stone-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">From / Night</span>
                    <span className="text-lg font-mono font-medium text-amber-400">
                      AED {stay.pricePerNightAED.toLocaleString()}
                    </span>
                  </div>
                  <button className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center gap-1.5 transition-colors">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
