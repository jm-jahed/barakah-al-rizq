import React from 'react';
import { Crown, Zap, ChevronRight, Award, ShieldCheck } from 'lucide-react';

interface Discipline {
  id: string;
  name: string;
  subtitle: string;
  piecesCount: number;
  highlight: string;
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'solitaire-bridal-suite',
    name: 'High Solitaire & Bridal Suites',
    subtitle: '18K Gold, VVS1 Certified Diamonds & Custom Prongs',
    piecesCount: 20,
    highlight: 'GIA Laser Inscribed Dossier',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'haute-collier-necklaces',
    name: 'Haute Joaillerie Colliers',
    subtitle: 'Rivière Diamond Lines, Floating Chokers & Torcs',
    piecesCount: 20,
    highlight: 'DIFC Private Atelier Crafted',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'colombian-emeralds-rubies',
    name: 'Muzo Emeralds & Burmese Rubies',
    subtitle: 'Vivid Green Colombian Emeralds & Pigeon Blood Rubies',
    piecesCount: 20,
    highlight: 'Gübelin Certified Natural Origin',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'diamond-tennis-bracelets',
    name: 'Diamond Tennis & Gold Cuffs',
    subtitle: '10-Carat Seamless Lines & Sculptural Fluted Bangles',
    piecesCount: 20,
    highlight: '18K Yellow, Rose & White Gold',
    image: 'https://images.unsplash.com/photo-1611591475879-1c99131a9dc9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'grand-complication-timepieces',
    name: 'High Complication Timepieces',
    subtitle: 'Double-Axis Tourbillons, Moonphase & Diamond Bezels',
    piecesCount: 20,
    highlight: 'Swiss Calibre High Horology',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'statement-chandelier-earrings',
    name: 'Cascade Chandelier Earrings',
    subtitle: 'Pear-Cut Drops, Art Deco Baguettes & Floating Huggies',
    piecesCount: 20,
    highlight: 'Ultralight Platinum Weight Balance',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'arabian-gulf-natural-pearls',
    name: 'Arabian Gulf & Basra Pearls',
    subtitle: 'Natural Luster Sea Pearls, Gold Brooches & Tiaras',
    piecesCount: 20,
    highlight: 'Authentic Heritage Basra Pearls',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bespoke-sovereign-masterpieces',
    name: 'Bespoke Sovereign Parures',
    subtitle: 'Imperial Suites, 25ct Vivid Yellow Diamonds & Diadems',
    piecesCount: 20,
    highlight: 'Single-Owner Royal Commissions',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop'
  }
];

interface JewelryDisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const JewelryDisciplineExplorer: React.FC<JewelryDisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-20 bg-zinc-950 border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Eight Imperial Jewelry Arenas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-100 tracking-tight">
            High Joaillerie &amp; Complication Disciplines
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From certified GIA diamond solitaires to rare Muzo emeralds and flying tourbillon timepieces, each discipline embodies centuries of European and Arabian goldsmithing mastery.
          </p>
        </div>

        {/* 8 Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINES.map((disc) => {
            const isSelected = selectedCategory === disc.id;
            return (
              <div
                key={disc.id}
                onClick={() => onSelectCategory(disc.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-amber-500 shadow-2xl shadow-amber-950/60 ring-2 ring-amber-500/40'
                    : 'border-zinc-800 hover:border-amber-500/50 bg-zinc-900/60'
                }`}
              >
                {/* Background Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img
                    src={disc.image}
                    alt={disc.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                      {disc.piecesCount} Masterpieces
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                      {disc.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                      {disc.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-amber-400/90 font-medium">
                      {disc.highlight}
                    </span>
                    <span className="text-zinc-500 group-hover:text-amber-400 transition-colors">
                      Explore →
                    </span>
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
