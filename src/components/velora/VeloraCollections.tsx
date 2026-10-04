'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Moon, Activity, Flame, Shield, Users, ArrowRight, Clock } from 'lucide-react';
import { WELLNESS_COLLECTIONS, VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraCollectionsProps {
  onSelectRitual: (ritual: WellnessRitual) => void;
  onBookRitual: (ritual: WellnessRitual) => void;
}

export const VeloraCollections: React.FC<VeloraCollectionsProps> = ({
  onSelectRitual,
  onBookRitual,
}) => {
  const [activeCollectionId, setActiveCollectionId] = useState<string>(WELLNESS_COLLECTIONS[0].id);

  const activeCollection =
    WELLNESS_COLLECTIONS.find((c) => c.id === activeCollectionId) || WELLNESS_COLLECTIONS[0];

  const collectionRituals = VELORA_RITUALS.filter((r) =>
    activeCollection.ritualIds.includes(r.id)
  );

  const iconMap: Record<string, React.ElementType> = {
    'rest-collection': Moon,
    'recovery-collection': Activity,
    'beauty-collection': ShieldCheck,
    'private-collection': Shield,
    'couples-collection': Users,
  };

  return (
    <section className="py-24 bg-[#0a0d0b] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            CURATED ARCHIVES
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Wellness Collections.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            Immersive treatment sequences grouped by distinct sensory architectures and therapeutic intentions.
          </p>
        </div>

        {/* Collection Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {WELLNESS_COLLECTIONS.map((col) => {
            const Icon = iconMap[col.id] || ShieldCheck;
            const isSelected = col.id === activeCollectionId;

            return (
              <button
                key={col.id}
                onClick={() => setActiveCollectionId(col.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#18211c] border-[#c5a059] text-[#fdfbf7] shadow-lg'
                    : 'bg-[#111613] border-[#1d2620] text-[#7d786d] hover:bg-[#151c17] hover:text-[#ded9ce]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c5a059]' : 'text-[#686358]'}`} />
                  <span className="text-[10px] uppercase font-mono text-[#7a756b]">
                    {col.ritualIds.length} Rituals
                  </span>
                </div>
                <div className={`text-xs font-serif ${isSelected ? 'text-[#c5a059]' : 'text-[#ded9ce]'}`}>
                  {col.name}
                </div>
                <div className="text-[10px] text-[#6d685e] truncate font-light mt-1">
                  {col.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Collection Active Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCollection.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141b17] via-[#101512] to-[#0d100e] border border-[#222e26] mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs text-[#c5a059] uppercase tracking-widest font-medium">
                  {activeCollection.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#fdfbf7] mt-1 mb-2">
                  {activeCollection.tagline}
                </h3>
                <p className="text-sm text-[#aba597] font-light max-w-2xl">
                  {activeCollection.description}
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#1b2520] border border-[#2d3d34] text-xs text-[#ded9ce] whitespace-nowrap">
                Curated Series
              </div>
            </div>

            {/* Rituals in this collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionRituals.map((ritual) => (
                <div
                  key={ritual.id}
                  className="rounded-2xl bg-[#111613] border border-[#1f2923] hover:border-[#c5a059]/40 p-6 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8e897d] mb-3">
                      <span className="text-[10px] uppercase text-[#c5a059] tracking-wider font-medium">
                        {ritual.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        {ritual.durationLabel}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif text-[#fdfbf7] mb-1">
                      {ritual.name}
                    </h4>
                    <p className="text-xs text-[#7a756b] italic mb-3">
                      {ritual.subtitle}
                    </p>

                    <p className="text-xs text-[#a5a093] font-light leading-relaxed mb-4">
                      {ritual.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1b241f] flex items-center justify-between">
                    <div className="text-base font-serif text-[#fdfbf7]">
                      AED {ritual.priceAED.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectRitual(ritual)}
                        className="px-3 py-1.5 rounded-lg bg-[#18201b] hover:bg-[#232d27] text-xs text-[#ded9ce] border border-[#28352e] transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onBookRitual(ritual)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
