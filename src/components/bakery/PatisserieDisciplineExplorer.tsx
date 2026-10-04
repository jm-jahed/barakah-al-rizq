import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cake, 
  Sparkles, 
  Layers, 
  Coffee, 
  Gift, 
  Crown, 
  Heart, 
  Flame,
  ArrowRight
} from 'lucide-react';

interface PatisserieDisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'grand-celebration-cakes',
    name: 'Celebration Cakes',
    count: '20 Masterpieces',
    french: 'Gâteaux de Célébration',
    desc: 'Multi-tiered 24K gold foil & architectural sponge towers',
    icon: Crown,
    bgGradient: 'from-amber-950/40 via-amber-900/20 to-black',
    tag: 'DIFC Signature'
  },
  {
    id: 'royal-wedding-parures',
    name: 'Royal Wedding Cakes',
    count: '20 Masterpieces',
    french: 'Parures de Mariage',
    desc: 'Hand-piped sugar lace, cascading orchids & bespoke monogramming',
    icon: Heart,
    bgGradient: 'from-pink-950/40 via-rose-900/20 to-black',
    tag: '5-Tier Pavilion'
  },
  {
    id: 'parisian-haute-entremets',
    name: 'Haute Entremets',
    count: '20 Masterpieces',
    french: 'Entremets Parisiens',
    desc: 'Mirror-glazed Valrhona mousse, tonka bean & exotic fruit gelee',
    icon: Sparkles,
    bgGradient: 'from-amber-950/40 via-yellow-900/20 to-black',
    tag: 'Same-Day 4H'
  },
  {
    id: 'artisanal-viennoiserie',
    name: 'Artisanal Viennoiserie',
    count: '20 Masterpieces',
    french: 'Viennoiserie & Cruffins',
    desc: '48-hour fermented Normandy AOP butter & pistachio frangipane',
    icon: Coffee,
    bgGradient: 'from-amber-950/40 via-orange-950/20 to-black',
    tag: 'Baked at 6 AM'
  },
  {
    id: 'exclusive-macaron-coffrets',
    name: 'Macaron Coffrets',
    count: '20 Masterpieces',
    french: 'Coffrets de Macarons',
    desc: 'Taif rose, Iranian saffron, Madagascar bourbon & pistachio di Bronte',
    icon: Layers,
    bgGradient: 'from-violet-950/40 via-purple-900/20 to-black',
    tag: 'Gold Coffret'
  },
  {
    id: 'signature-tartes-fines',
    name: 'Tartes & Feuilletés',
    count: '20 Masterpieces',
    french: 'Tartes & Mille-Feuilles',
    desc: 'Caramelized arlette pastry, Tahitian diplomat & fresh raspberries',
    icon: Flame,
    bgGradient: 'from-amber-950/40 via-amber-900/20 to-black',
    tag: 'Crisp Arlette'
  },
  {
    id: 'dubai-majlis-dessert-towers',
    name: 'Majlis Dessert Towers',
    count: '20 Masterpieces',
    french: 'Plateaux de Réception',
    desc: 'Medjool date financiers, cardamom truffles & saffron amber towers',
    icon: Crown,
    bgGradient: 'from-yellow-950/40 via-amber-900/20 to-black',
    tag: 'VIP Hospitality'
  },
  {
    id: 'bespoke-fondant-sculptures',
    name: 'Haute Sculptures',
    count: '20 Masterpieces',
    french: 'Sculptures Artistiques',
    desc: 'Gravity-defying architectural fondant sculptures & museum displays',
    icon: Gift,
    bgGradient: 'from-amber-950/40 via-stone-900/20 to-black',
    tag: 'Museum Grade'
  }
];

export const PatisserieDisciplineExplorer: React.FC<PatisserieDisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-20 bg-[#080706] border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              8 Arenas of Pâtisserie Artistry
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Curated Pastry Disciplines.
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Select an arena to explore our 160 creations, each formulated in our DIFC Dubai laboratory with imported French butter, Grand Cru chocolate, and Emirati heritage infusions.
          </p>
        </div>

        {/* 8 Arenas Grid */}
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
                    : 'border-zinc-800 hover:border-amber-500/50 bg-[#110E0C]'
                }`}
              >
                {/* Subtle Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${d.bgGradient} opacity-40 group-hover:opacity-70 transition-opacity`} />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar: Icon + Tag */}
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

                  {/* Discipline Title */}
                  <div>
                    <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest block mb-0.5">
                      {d.french}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1.5 line-clamp-2">
                      {d.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="relative z-10 pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-amber-300 font-semibold">
                    {d.count}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                    Filter <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
