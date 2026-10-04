import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Check, ShieldCheck, Scissors } from 'lucide-react';
import { GENTLEMEN_BARBER_CATALOG, BarberCatalogItem } from '@/data/barberCatalogData';
import { BarberDisciplineExplorer } from './BarberDisciplineExplorer';
import { BarberCatalogCard } from './BarberCatalogCard';
import { BarberRitualModal } from './BarberRitualModal';

interface BarberDiscoveryProps {
  onBookAppointment: (ritualTitle: string, barberName: string) => void;
  initialSearchQuery?: string;
}

const ITEMS_PER_PAGE = 16;

const DISCIPLINES_METADATA = [
  { id: 'royal-haircut-styling', name: 'Hair Architecture', tagline: 'Scissor Cut & Skin Taper Fade' },
  { id: 'traditional-hot-towel-shave', name: 'Cut-Throat Shave', tagline: 'Damascus Razor & Hot Towels' },
  { id: 'beard-sculpting-contour', name: 'Beard Sculpting', tagline: 'Argan Hot Oil & Steam Therapy' },
  { id: 'vip-gentlemans-rituals', name: 'VIP Sovereign Rituals', tagline: 'The Royal Full-Works VIP Suite' },
  { id: 'charcoal-facial-skin-therapy', name: 'Men’s Detox Facial', tagline: 'Dead Sea Scrub & Cryo Orbs' },
  { id: 'hair-strengthening-spa', name: 'Scalp & Hair Spa', tagline: 'Stem Cell & High-Frequency' },
  { id: 'executive-manicure-pedicure', name: 'Hand & Foot Care', tagline: 'Paraffin Wax & Reflexology' },
  { id: 'exclusive-grooming-products', name: 'Apothecary & Oils', tagline: 'Artisanal Matte Clays & Oud' },
];

export const BarberDiscovery: React.FC<BarberDiscoveryProps> = ({
  onBookAppointment,
  initialSearchQuery = '',
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [selectedItem, setSelectedItem] = useState<BarberCatalogItem | null>(null);

  React.useEffect(() => {
    if (initialSearchQuery !== undefined) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const disciplineListWithCounts = useMemo(() => {
    return DISCIPLINES_METADATA.map((dept) => ({
      ...dept,
      count: GENTLEMEN_BARBER_CATALOG.filter((item) => item.disciplineId === dept.id).length,
    }));
  }, []);

  const filteredItems = useMemo(() => {
    let list = [...GENTLEMEN_BARBER_CATALOG];

    if (selectedDiscipline !== 'all') {
      list = list.filter((item) => item.disciplineId === selectedDiscipline);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.doctor.toLowerCase().includes(q) ||
          item.disciplineName.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
      );
    }

    if (sortOption === 'price-asc') {
      list.sort((a, b) => a.priceAED - b.priceAED);
    } else if (sortOption === 'price-desc') {
      list.sort((a, b) => b.priceAED - a.priceAED);
    } else if (sortOption === 'name') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [selectedDiscipline, searchQuery, sortOption]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredItems.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  const percentLoaded = Math.min(
    100,
    Math.round((displayedItems.length / Math.max(1, filteredItems.length)) * 100)
  );

  return (
    <section id="services-catalog" className="py-16 sm:py-24 bg-[#0A0A0B] relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>160 EXECUTIVE GROOMING RITUALS • DIFC GATE PRECINCT DUBAI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Gentlemen's Room Master Catalog
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300">
            Explore 160 bespoke haircut architectures, traditional Damascus straight razor shaves, argan steam beard sculpting, and private VIP suite grooming ceremonies in Dubai.
          </p>
        </div>

        <div className="mb-10">
          <BarberDisciplineExplorer
            activeDiscipline={selectedDiscipline}
            onSelectDiscipline={(id) => {
              setSelectedDiscipline(id);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            disciplines={disciplineListWithCounts}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-amber-500/20 backdrop-blur-md mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              placeholder="Search rituals, master barbers, cuts..."
              className="w-full pl-10 pr-4 py-2 bg-neutral-950 border border-neutral-700/80 rounded-xl text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-mono text-neutral-400">
              Showing <span className="text-amber-300 font-bold">{filteredItems.length}</span> Grooming Rituals
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 font-mono hidden md:inline">Sort:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="bg-neutral-950 border border-neutral-700/80 text-xs text-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="featured">Featured Rituals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedItems.map((item) => (
              <BarberCatalogCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedItem(selected)}
                onBook={(selected) => onBookAppointment(selected.title, selected.doctor)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <Scissors className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <p className="text-neutral-300 font-semibold">No grooming rituals matched your criteria</p>
            <p className="text-xs text-neutral-500 mt-1">Try resetting the discipline filter or searching another term.</p>
            <button
              onClick={() => {
                setSelectedDiscipline('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold hover:bg-amber-500/30 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {filteredItems.length > 0 && (
          <div className="mt-14 max-w-xl mx-auto text-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
                <span>Displaying {displayedItems.length} of {filteredItems.length} Grooming Rituals</span>
                <span className="text-amber-300 font-bold">{percentLoaded}%</span>
              </div>
              <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 rounded-full"
                  style={{ width: `${percentLoaded}%` }}
                />
              </div>
            </div>

            {displayedItems.length < filteredItems.length ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleSeeMore}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>See More (+16 Rituals)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShowAll}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 font-mono text-xs font-semibold transition-all"
                >
                  Show All ({filteredItems.length})
                </button>
              </div>
            ) : (
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  All {filteredItems.length} Grooming Rituals Loaded
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <BarberRitualModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onBook={(item) => onBookAppointment(item.title, item.doctor)}
      />
    </section>
  );
};
