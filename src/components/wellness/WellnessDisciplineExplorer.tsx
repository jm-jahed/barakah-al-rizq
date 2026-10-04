import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Activity, 
  Sparkles, 
  Wind, 
  Flame, 
  Moon, 
  HeartHandshake, 
  Compass,
  ArrowRight
} from 'lucide-react';

interface WellnessDisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'sunrise-vinyasa-ashtanga',
    name: 'Vinyasa & Ashtanga',
    count: '20 Practices',
    tagline: 'Dynamic Heat & Inversions',
    desc: 'Sunrise breath-linked dynamic flows, strength building, and posture mastery',
    icon: Sun,
    bgGradient: 'from-amber-950/40 via-orange-950/20 to-black',
    tag: 'Sunrise Studio'
  },
  {
    id: 'reformer-tower-pilates',
    name: 'Reformer Pilates',
    count: '20 Practices',
    tagline: 'Allegro 2 Core Centering',
    desc: 'Tower springs, spinal elongation, and postural realignment with max 8 mats',
    icon: Activity,
    bgGradient: 'from-stone-900/50 via-amber-950/20 to-black',
    tag: 'Max 8 Beds'
  },
  {
    id: 'crystal-sound-baths-gongs',
    name: 'Alchemy Sound Baths',
    count: '20 Practices',
    tagline: '432Hz Quartz Bowls & Gongs',
    desc: 'Planetary gongs, acoustic theta wave healing, and deep cellular nervous reset',
    icon: Sparkles,
    bgGradient: 'from-purple-950/40 via-indigo-950/20 to-black',
    tag: 'Theta Wave'
  },
  {
    id: 'somatic-pranayama-breathwork',
    name: 'Somatic Breathwork',
    tagline: 'Vagus Nerve & Wim Hof',
    count: '20 Practices',
    desc: 'Conscious connected breathing, cold plunge integration, and emotional release',
    icon: Wind,
    bgGradient: 'from-blue-950/40 via-teal-950/20 to-black',
    tag: 'Breath & Ice'
  },
  {
    id: 'hot-infrared-detox-yoga',
    name: 'Infrared Hot Yoga',
    count: '20 Practices',
    tagline: '38°C Far-Infrared Radiant',
    desc: 'Zero-humidity radiant heat, lymphatic detox, and deep fascial decompression',
    icon: Flame,
    bgGradient: 'from-red-950/40 via-amber-950/20 to-black',
    tag: '38°C Far Heat'
  },
  {
    id: 'restorative-yin-myofascial',
    name: 'Yin & Myofascial',
    count: '20 Practices',
    tagline: '5-Minute Restorative Holds',
    desc: 'Cork roller trigger point therapy, bolster traction, and parasympathetic calm',
    icon: Moon,
    bgGradient: 'from-stone-950/50 via-zinc-900/20 to-black',
    tag: 'Deep Calm'
  },
  {
    id: 'private-vip-sound-reiki',
    name: 'Private 1-on-1 Sanctuary',
    count: '20 Practices',
    tagline: '100% Private Somatic Care',
    desc: 'Bespoke movement therapy, Reiki biofield realignment, and customized sound',
    icon: HeartHandshake,
    bgGradient: 'from-amber-950/40 via-yellow-950/20 to-black',
    tag: '1-on-1 VIP'
  },
  {
    id: 'weekend-desert-wellness-retreat',
    name: 'Desert Moon Retreats',
    count: '20 Practices',
    tagline: 'Al Maha & Hatta Expeditions',
    desc: 'Stargazing sound ceremonies, desert dune sunset flows, and herbal dining',
    icon: Compass,
    bgGradient: 'from-orange-950/40 via-amber-950/20 to-black',
    tag: 'All-Inclusive'
  }
];

export const WellnessDisciplineExplorer: React.FC<WellnessDisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-20 bg-[#0C0A09] border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              8 Somatic Arenas • Downtown Dubai
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Curated Wellness Modalities.
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Select a modality to explore our 160 practices, sound journeys, and luxury retreats designed for nervous system recalibration.
          </p>
        </div>

        {/* 8 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DISCIPLINES.map((d) => {
            const Icon = d.icon;
            const isSelected = selectedCategory === d.id;

            return (
              <motion.button
                key={d.id}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectCategory(isSelected ? 'all' : d.id)}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/15 shadow-xl shadow-amber-500/20'
                    : 'border-zinc-800 hover:border-amber-500/50 bg-[#14110E]'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${d.bgGradient} opacity-40 group-hover:opacity-75 transition-opacity`} />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'bg-amber-400 text-black border-amber-400'
                        : 'bg-zinc-900/80 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 border border-amber-500/30 text-amber-300">
                      {d.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest block mb-0.5">
                      {d.tagline}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1.5 line-clamp-2">
                      {d.desc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-amber-300 font-semibold">
                    {d.count}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
