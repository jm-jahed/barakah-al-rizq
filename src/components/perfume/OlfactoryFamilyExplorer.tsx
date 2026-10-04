import React from 'react';
import { Crown, Sparkle, Award, ChevronRight, Droplets, Zap } from 'lucide-react';

interface OlfactoryFamily {
  id: string;
  name: string;
  subtitle: string;
  count: number;
  highlight: string;
  image: string;
}

const FAMILIES: OlfactoryFamily[] = [
  {
    id: 'royal-aged-oud',
    name: 'Royal Aged Dehn Al Oud & Pure Oils',
    subtitle: '30-Year Kalakassi, Vintage Hindi & Wild Cambodian Extraits',
    count: 20,
    highlight: 'Wild 100% Pure Distillations',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'french-oriental-extrait',
    name: 'French Oriental Extraits de Parfum',
    subtitle: 'Grasse Centifolia Rose, Ambergris & 40% Haute Concentration',
    count: 20,
    highlight: 'Grasse & Paris Formula',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'taif-damascus-rose',
    name: 'Taif Mountain Rose & Saffron Attars',
    subtitle: 'First-Harvest Taif Petals, Kashmiri Saffron & Golden Ambers',
    count: 20,
    highlight: 'Annual April Dawn Harvest',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'smoky-leather-frankincense',
    name: 'Royal Hojari Frankincense & Leather',
    subtitle: 'Omani Green Hojari, Smoked Birch & Italian Suede',
    count: 20,
    highlight: 'Rare Dhofar Mountain Tears',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gourmand-amber-vanilla',
    name: 'Madagascar Vanilla & Warm Ambers',
    subtitle: 'Spiced Cardamom, Roasted Tonka, Benzoin & Velvet Woods',
    count: 20,
    highlight: 'Single-Origin Bourbon Pods',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'woody-sandalwood-cedar',
    name: 'Mysore Sandalwood & Atlas Cedar',
    subtitle: 'Indian Mysore Santal, Virginian Cedar & White Musk Silk',
    count: 20,
    highlight: 'Sustainable Certified Mysore',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'royal-bakhoor-incense',
    name: 'Royal Agarwood Muattar & Bakhoor',
    subtitle: 'Triple-A Grade Wild Chips, Crystal Burners & Majlis Aromas',
    count: 20,
    highlight: 'Majlis Dignitary Tradition',
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bespoke-flacon-coffrets',
    name: '24K Gold Inlaid Flacons & Coffrets',
    subtitle: 'Hand-Blown Bohemian Crystal, Custom Engraving & Master Sets',
    count: 20,
    highlight: 'Collector Trophy Presentation',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80'
  }
];

interface OlfactoryFamilyExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const OlfactoryFamilyExplorer: React.FC<OlfactoryFamilyExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-16 bg-zinc-950 border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            Olfactory Families & Distillations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Eight Realms of Sovereign Haute Parfumerie
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            From 30-year aged Kalakassi Dehn Al Oud to Grasse 40% haute extraits and Royal Hojari frankincense, explore 160 bespoke luxury fragrances created for royalty and discerning collectors across the Emirates.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FAMILIES.map((family) => {
            const isSelected = selectedCategory === family.id;
            return (
              <div
                key={family.id}
                onClick={() => onSelectCategory(isSelected ? 'all' : family.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/30 bg-zinc-900 shadow-2xl shadow-amber-950/40'
                    : 'border-zinc-800/80 bg-zinc-950/80 hover:border-amber-500/40 hover:bg-zinc-900/90'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={family.image}
                    alt={family.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                      {family.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-zinc-950">
                      {family.count} Flacons
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col justify-between flex-grow gap-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {family.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-sans">
                      {family.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-xs font-medium">
                    <span className={isSelected ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>
                      {isSelected ? 'Active Family Filter' : 'Explore Flacons'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-400' : 'text-zinc-400 group-hover:translate-x-1 group-hover:text-amber-300'}`} />
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
