import React from 'react';
import { Crown, Zap, Award, ChevronRight, Flame, ShieldCheck } from 'lucide-react';

interface Discipline {
  id: string;
  name: string;
  subtitle: string;
  programCount: number;
  highlight: string;
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'olympic-strength-conditioning',
    name: 'Olympic Strength & Conditioning',
    subtitle: 'Eleiko IWF Platforms, Keiser Pneumatics & Velocity Barbells',
    programCount: 20,
    highlight: 'Official Eleiko Certified Facility',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reformer-pilates-biomechanics',
    name: 'Reformer Pilates & Biomechanics',
    subtitle: 'Allegro 2 Reformers, Cadillac Towers & Core Decompression',
    programCount: 20,
    highlight: 'PMA Certified Master Instructors',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'championship-combat-boxing',
    name: 'Championship Boxing & Combat',
    subtitle: 'Regulation Ring Sparring, Cleto Reyes Bags & Agility Drills',
    programCount: 20,
    highlight: 'AIBA Level 3 Championship Coaches',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hyrox-endurance-metcon',
    name: 'HYROX Official & Altitude MetCon',
    subtitle: 'SkiErgs, Sled Push, Rogue Echo Bikes & 2500m Altitude Pod',
    programCount: 20,
    highlight: 'Official HYROX Training Center Dubai',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'biohacking-cryo-recovery',
    name: 'Biohacking, -110°C Cryo & Recovery',
    subtitle: 'Sub-Zero Nitrogen Chamber, Hyperbaric Oxygen & Sauna',
    programCount: 20,
    highlight: 'Medical-Grade Cellular Repair',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'executive-personal-mastery',
    name: '1-on-1 Master Performance Coaches',
    subtitle: 'Ex-Olympian Mentors, EMG Muscle Telemetry & Movement Screen',
    programCount: 20,
    highlight: 'Elite PhD Sports Scientists',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'metabolic-nutrition-dexa',
    name: 'DEXA Body Scanning & Sports Lab',
    subtitle: 'Clinical InBody 970, VO2 Max Testing & Tailored UAE Meal Plans',
    programCount: 20,
    highlight: 'Gold-Standard Body Composition',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vip-black-tier-memberships',
    name: 'Sovereign Black-Tier 24/7 Access',
    subtitle: 'DIFC & Palm Jumeirah Sanctuary, Valet, Rooftop Pool & Suites',
    programCount: 20,
    highlight: 'Private High-Net-Worth Sanctum',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
  }
];

interface DisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const DisciplineExplorer: React.FC<DisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-16 bg-zinc-950 border-b border-yellow-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Performance Disciplines & Arenas
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Eight Pillars of Sovereign Athletic Mastery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            From competition Olympic lifting on Eleiko IWF platforms to -110°C full-body cryotherapy and official HYROX racing, explore 160 bespoke training protocols across DIFC and Palm Jumeirah.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISCIPLINES.map((discipline) => {
            const isSelected = selectedCategory === discipline.id;
            return (
              <div
                key={discipline.id}
                onClick={() => onSelectCategory(isSelected ? 'all' : discipline.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'border-yellow-500 ring-2 ring-yellow-500/30 bg-zinc-900 shadow-2xl shadow-yellow-950/40'
                    : 'border-zinc-800/80 bg-zinc-950/80 hover:border-yellow-500/40 hover:bg-zinc-900/90'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={discipline.image}
                    alt={discipline.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur-md text-yellow-300 border border-yellow-500/30 uppercase tracking-wider">
                      {discipline.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-yellow-500 text-zinc-950">
                      {discipline.programCount} Protocols
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col justify-between flex-grow gap-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-zinc-100 group-hover:text-yellow-300 transition-colors">
                      {discipline.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-sans">
                      {discipline.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-xs font-medium">
                    <span className={isSelected ? 'text-yellow-400 font-semibold' : 'text-zinc-400'}>
                      {isSelected ? 'Active Arena Filter' : 'Explore Protocols'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-yellow-400' : 'text-zinc-400 group-hover:translate-x-1 group-hover:text-yellow-300'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
