'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, Search, Filter, Eye, ArrowRight, Check } from 'lucide-react';
import { VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraTreatmentDiscoveryProps {
  onSelectRitual: (ritual: WellnessRitual) => void;
  onBookRitual: (ritual: WellnessRitual) => void;
}

const CATEGORIES = [
  'All Rituals',
  'Signature Massage',
  'Deep Recovery',
  'Facial Rituals',
  'Body Treatments',
  'Hydrotherapy',
  'Aromatherapy',
  'Thermal Experiences',
  'Couples Rituals',
  'Private Wellness',
];

export const VeloraTreatmentDiscovery: React.FC<VeloraTreatmentDiscoveryProps> = ({
  onSelectRitual,
  onBookRitual,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Rituals');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [durationFilter, setDurationFilter] = useState<string>('all');

  const filteredRituals = useMemo(() => {
    return VELORA_RITUALS.filter((ritual) => {
      const matchesCategory =
        selectedCategory === 'All Rituals' || ritual.category === selectedCategory;
      const matchesSearch =
        ritual.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ritual.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ritual.idealFor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDuration =
        durationFilter === 'all' ||
        (durationFilter === '60' && ritual.durationMinutes <= 60) ||
        (durationFilter === '90' && ritual.durationMinutes > 60 && ritual.durationMinutes <= 90) ||
        (durationFilter === '120' && ritual.durationMinutes > 90);

      return matchesCategory && matchesSearch && matchesDuration;
    });
  }, [selectedCategory, searchQuery, durationFilter]);

  return (
    <section id="treatments" className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            SANCTUARY MENU & ARCHIVES
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Rituals, Designed With Intention.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            Explore our sanctuary collection of 20+ specialized therapies, therapeutic heat immersions, and restorative bodywork.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 p-6 rounded-2xl bg-[#111613] border border-[#202924] space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7d786d]" />
              <input
                type="text"
                placeholder="Search rituals, botanical notes, or focus areas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#18201c] border border-[#28352e] text-sm text-[#f5f2eb] placeholder-[#7d786d] focus:outline-none focus:border-[#c5a059] transition-colors"
              />
            </div>

            {/* Duration Filter */}
            <div className="flex items-center gap-2 text-xs text-[#9e988c] w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="tracking-wider uppercase text-[11px] mr-1">Duration:</span>
              {[
                { id: 'all', label: 'All Durations' },
                { id: '60', label: '≤ 60 Min' },
                { id: '90', label: '75–90 Min' },
                { id: '120', label: '120+ Min' },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDurationFilter(d.id)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    durationFilter === d.id
                      ? 'bg-[#c5a059] text-[#0a0c0b] font-medium'
                      : 'bg-[#18201c] text-[#8e897d] hover:text-[#ded9ce]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Horizontal Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#232d27]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#222c27] text-[#c5a059] border border-[#c5a059]/40 font-medium'
                    : 'bg-[#151b18] text-[#858075] hover:text-[#cfcac0] border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#7e796e] mb-6">
          <span>Showing {filteredRituals.length} bespoke wellness rituals</span>
          <span className="italic">All experiences conducted by master practitioners</span>
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRituals.map((ritual) => (
            <motion.div
              key={ritual.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group rounded-2xl bg-[#121614] border border-[#202a24] hover:border-[#c5a059]/40 flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1b231f] text-[#c5a059] text-[10px] tracking-wider uppercase font-medium">
                    {ritual.category}
                  </span>
                  <span className="text-[#8e897d] flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {ritual.durationLabel}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#fdfbf7] group-hover:text-[#c5a059] transition-colors mb-1">
                  {ritual.name}
                </h3>
                <div className="text-xs text-[#7a756b] italic mb-3">
                  {ritual.subtitle}
                </div>

                <p className="text-xs text-[#a5a093] font-light leading-relaxed mb-4 line-clamp-3">
                  {ritual.description}
                </p>

                <div className="space-y-1.5 border-t border-[#1a221e] pt-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#6e695f]">Ideal For</div>
                  <div className="text-xs text-[#c0bbb0] font-light truncate">
                    {ritual.idealFor}
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#0e1210] border-t border-[#1c2420] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#6e695f]">Rate</div>
                  <div className="text-base font-serif text-[#fdfbf7]">
                    AED {ritual.priceAED.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectRitual(ritual)}
                    className="p-2 rounded-lg bg-[#18201c] hover:bg-[#222c26] text-[#c5a059] border border-[#2a352f] transition-colors cursor-pointer"
                    title="View Details"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onBookRitual(ritual)}
                    className="px-3.5 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
