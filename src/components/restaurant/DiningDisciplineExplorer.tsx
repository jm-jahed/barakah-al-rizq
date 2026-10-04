import React from 'react';
import { Award, UtensilsCrossed, Wine, Flame, ChevronRight, ChevronLeft, Crown } from 'lucide-react';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface Discipline {
  id: string;
  name: string;
  subtitle: string;
  dishCount: number;
  highlight: string;
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'royal-emirati-heritage',
    name: 'Royal Emirati & Khaleeji Heritage',
    subtitle: 'Saffron Machboos, 18h Camel Shank & Gold Dust Luqaimat',
    dishCount: 20,
    highlight: 'Dignitary & VIP Family Favorite',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'french-haute-gastronomy',
    name: 'French Haute Gastronomy & Truffle',
    subtitle: 'Foie Gras Torchon, Périgord Black Truffle & Duck Confit',
    dishCount: 20,
    highlight: 'Michelin-Caliber Master Execution',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'japanese-omakase-wagyu',
    name: 'Japanese Omakase & Wagyu Robata',
    subtitle: 'A5 Kagoshima Ribeye, Bluefin Otoro & Hokkaido Uni',
    dishCount: 20,
    highlight: 'Flown Fresh Weekly from Toyosu',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mediterranean-seafood',
    name: 'Mediterranean Coastal & Shellfish Bar',
    subtitle: 'Oman Wild Rock Lobster Thermidor & Carabinero Prawns',
    dishCount: 20,
    highlight: 'Wild Arabian Gulf & Brittany Catch',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caviar-beluga-flights',
    name: 'Royal Imperial Caviar & Beluga',
    subtitle: 'Imperial Beluga 50g, Oscietra Royal & Kaluga Queen Flights',
    dishCount: 20,
    highlight: 'Mother-of-Pearl Tableside Ceremony',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dry-aged-prime-cuts',
    name: '45-Day Dry-Aged Steaks & 24K Cuts',
    subtitle: '24K Gold Tomahawk 1.2kg, Olive Wagyu & Bone Marrow',
    dishCount: 20,
    highlight: 'Himalayan Salt Chamber Cured',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'haute-pastry-cafe',
    name: 'Artisanal Pastry & 24K Gold Café',
    subtitle: 'Pistachio Paris-Brest, Damascus Rose & Saffron Brews',
    dishCount: 20,
    highlight: 'Single-Origin Grand Cru Chocolate',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'private-dining-majlis',
    name: 'Private Salons, Majlis & Chef Table',
    subtitle: '12-Course Multi-Sensory Omakase & Sky Banquets',
    dishCount: 20,
    highlight: 'Exclusive VIP Butler & Sommelier',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  }
];

interface DiningDisciplineExplorerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const DiningDisciplineExplorer: React.FC<DiningDisciplineExplorerProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { t, isRtl, translateDiscipline, toArabicDigits } = useRestaurantLanguage();

  return (
    <section className="py-16 bg-zinc-950 border-b border-amber-900/20" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            {t('disciplinesBadge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            {t('disciplinesTitle')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            {t('disciplinesSubtitle')}
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISCIPLINES.map((rawDiscipline) => {
            const isSelected = selectedCategory === rawDiscipline.id;
            const trans = translateDiscipline(rawDiscipline.id);
            const name = trans ? trans.name : rawDiscipline.name;
            const subtitle = trans ? trans.subtitle : rawDiscipline.subtitle;
            const highlight = trans ? trans.highlight : rawDiscipline.highlight;

            return (
              <div
                key={rawDiscipline.id}
                onClick={() => onSelectCategory(isSelected ? 'all' : rawDiscipline.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/30 bg-zinc-900 shadow-2xl shadow-amber-950/40'
                    : 'border-zinc-800/80 bg-zinc-950/80 hover:border-amber-500/40 hover:bg-zinc-900/90'
                }`}
              >
                {/* Discipline Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={rawDiscipline.image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Badges */}
                  <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'}`}>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                      {highlight}
                    </span>
                  </div>

                  <div className={`absolute bottom-3 ${isRtl ? 'left-3' : 'right-3'}`}>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-zinc-950">
                      {t('dishesCount', { count: isRtl ? toArabicDigits(rawDiscipline.dishCount) : rawDiscipline.dishCount })}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col justify-between flex-grow gap-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {name}
                    </h3>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-sans">
                      {subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-xs font-medium">
                    <span className={isSelected ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>
                      {isSelected ? t('activeDisciplineFilter') : t('exploreTastingMenu')}
                    </span>
                    {isRtl ? (
                      <ChevronLeft className={`w-4 h-4 transition-transform ${isSelected ? '-translate-x-1 text-amber-400' : 'text-zinc-400 group-hover:-translate-x-1 group-hover:text-amber-300'}`} />
                    ) : (
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-400' : 'text-zinc-400 group-hover:translate-x-1 group-hover:text-amber-300'}`} />
                    )}
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

