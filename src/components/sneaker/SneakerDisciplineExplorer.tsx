import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Layers, 
  Shirt, 
  SlidersHorizontal, 
  Award,
  ArrowRight
} from 'lucide-react';

interface SneakerDisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'retro-grail-high-tops',
    name: 'Retro Grail High-Tops',
    count: '20 Pairs',
    subtitle: 'Air Jordan 1, 85 Cuts & OGs',
    desc: 'Deadstock Chicago Lost & Found, Georgetowns, and vintage high silhouettes',
    icon: Flame,
    bgGradient: 'from-red-950/40 via-amber-950/20 to-black',
    tag: 'Deadstock'
  },
  {
    id: 'collab-heat-drops',
    name: 'Heat Collaborations',
    count: '20 Pairs',
    subtitle: 'Travis Scott, Off-White, Sacai',
    desc: 'Reverse Mochas, Virgil Abloh Dunks, and high-heat grails with RFID chip verified tags',
    icon: Zap,
    bgGradient: 'from-amber-950/40 via-yellow-950/20 to-black',
    tag: 'Verified Heat'
  },
  {
    id: 'performance-running-runners',
    name: 'Performance Runners',
    count: '20 Pairs',
    subtitle: 'ASICS, New Balance 990, Salomon',
    desc: 'GEL-Kayano 14, 1906R, and XT-6 Gore-Tex Y2K technical runners',
    icon: Sparkles,
    bgGradient: 'from-blue-950/40 via-teal-950/20 to-black',
    tag: 'Y2K Tech'
  },
  {
    id: 'classic-lows-skate',
    name: 'Classics & SB Dunks',
    count: '20 Pairs',
    subtitle: 'Nike Dunk SB, Samba OG, Campus',
    desc: 'Everyday street staples, fat-lace suede classics, and gum sole icons',
    icon: Layers,
    bgGradient: 'from-stone-900/50 via-zinc-900/20 to-black',
    tag: 'Daily Rotation'
  },
  {
    id: 'dubai-heavyweight-hoodies',
    name: 'Heavyweight Hoodies',
    count: '20 Pieces',
    subtitle: '520GSM French Terry Cotton',
    desc: 'Distressed acid washes, oversized boxy cuts, and high-density puff prints',
    icon: Shirt,
    bgGradient: 'from-amber-950/40 via-orange-950/20 to-black',
    tag: '520GSM'
  },
  {
    id: 'oversized-vintage-tees',
    name: 'Washed Graphic Tees',
    count: '20 Pieces',
    subtitle: '280GSM Pre-Shrunk Cotton',
    desc: 'Motorsport graphics, dropped shoulders, and thick ribbed collars',
    icon: Shirt,
    bgGradient: 'from-zinc-900/50 via-stone-950/20 to-black',
    tag: 'Vintage Wash'
  },
  {
    id: 'tactical-cargo-trackpants',
    name: 'Tactical Track & Cargos',
    count: '20 Pieces',
    subtitle: 'Ripstop Nylon & Cobrax Hardware',
    desc: 'Multi-pocket technical cargo pants, bungee ankle cuffs, and wide-leg silhouettes',
    icon: SlidersHorizontal,
    bgGradient: 'from-emerald-950/40 via-zinc-900/20 to-black',
    tag: 'Ripstop Utility'
  },
  {
    id: 'vault-caps-accessories',
    name: 'Caps & Sneaker Care',
    count: '20 Items',
    subtitle: 'Corduroy Fitteds & Drop Fronts',
    desc: 'Reshoevn8r cleaning kits, magnetic display cases, and 24K metal pin snapbacks',
    icon: Award,
    bgGradient: 'from-amber-950/40 via-yellow-950/20 to-black',
    tag: 'Vault Essentials'
  }
];

export const SneakerDisciplineExplorer: React.FC<SneakerDisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-20 bg-[#090807] border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              8 Vault Categories • Alserkal Avenue
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight uppercase">
            Curated Vault Arenas.
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Select a category to filter our 160 authenticated grails, performance runners, and heavyweight streetwear pieces.
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
                    : 'border-zinc-800 hover:border-amber-500/50 bg-[#120F0D]'
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
                      {d.subtitle}
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
