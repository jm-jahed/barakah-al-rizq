import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Crown, 
  Layers, 
  Compass, 
  Feather, 
  ShoppingBag, 
  UserCheck, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface FashionDisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'haute-couture-evening-gowns',
    name: 'Evening Gowns',
    count: '20 Creations',
    french: 'Robes du Soir Haute Couture',
    desc: 'Hand-pleated mulberry silk, French Chantilly lace & crystal drops',
    icon: Crown,
    bgGradient: 'from-amber-950/40 via-purple-950/20 to-black',
    tag: 'Red Carpet'
  },
  {
    id: 'emirati-royal-abayas',
    name: 'Royal Abayas',
    count: '20 Creations',
    french: 'Abayas Souveraines',
    desc: 'Japanese crepe, silk organza, velvet trim & Zari gold thread',
    icon: Sparkles,
    bgGradient: 'from-stone-950/40 via-amber-950/20 to-black',
    tag: 'Sovereign Cut'
  },
  {
    id: 'bespoke-tailored-blazers',
    name: 'Bespoke Suiting',
    count: '20 Creations',
    french: 'Tailleur Architectural',
    desc: 'Super 160s English wool, sculpted shoulders & Milanese buttonholes',
    icon: Layers,
    bgGradient: 'from-zinc-900/50 via-amber-950/20 to-black',
    tag: 'd3 Tailoring'
  },
  {
    id: 'resort-silk-kimonos',
    name: 'Resort Silks',
    count: '20 Creations',
    french: 'Soies de la Riviera',
    desc: 'Sandwashed Habotai silk, fluid drapes & French caftan silhouettes',
    icon: Compass,
    bgGradient: 'from-blue-950/40 via-teal-950/20 to-black',
    tag: 'Palm Resort'
  },
  {
    id: 'contemporary-knitwear-cashmere',
    name: 'Mongolian Cashmere',
    count: '20 Creations',
    french: 'Cachemire de Mongolie',
    desc: '18-gauge Grade-A inner cashmere, cardigans & seamless knit sets',
    icon: Feather,
    bgGradient: 'from-amber-950/40 via-orange-950/20 to-black',
    tag: 'Cloud Soft'
  },
  {
    id: 'handcrafted-leather-goods',
    name: 'Atelier Leather',
    count: '20 Creations',
    french: 'Maroquinerie d\'Art',
    desc: 'French calfskin minaudières, 24K gold plated clasps & saddle stitches',
    icon: ShoppingBag,
    bgGradient: 'from-amber-950/40 via-yellow-950/20 to-black',
    tag: '24K Hardware'
  },
  {
    id: 'sartorial-mens-linen-silks',
    name: 'Sartorial Men',
    count: '20 Creations',
    french: 'Vestiaire Sartorial',
    desc: 'Neapolitan safari jackets, Irish linen shirts & silk-cotton knit polos',
    icon: UserCheck,
    bgGradient: 'from-stone-950/40 via-zinc-900/20 to-black',
    tag: 'Italian Fit'
  },
  {
    id: 'monogram-cashmere-capes',
    name: 'Cashmere Capes',
    count: '20 Creations',
    french: 'Capes & Manteaux Impériaux',
    desc: 'Double-faced cashmere, Saga royal fox trims & leather clasp closures',
    icon: ShieldCheck,
    bgGradient: 'from-rose-950/40 via-amber-950/20 to-black',
    tag: 'Private Salon'
  }
];

export const FashionDisciplineExplorer: React.FC<FashionDisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-20 bg-[#0A0807] border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              8 Haute Couture Arenas
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Sartorial Disciplines.
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Select a sartorial universe to explore our 160 creations, each tailored across Place Vendôme and Dubai Design District (d3) private salon ateliers.
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
                    : 'border-zinc-800 hover:border-amber-500/50 bg-[#120F0D]'
                }`}
              >
                {/* Background Gradient */}
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

                  {/* Title & Info */}
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

                {/* Footer Strip */}
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
