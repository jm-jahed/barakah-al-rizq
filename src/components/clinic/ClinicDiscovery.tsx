import React, { useState, useMemo } from 'react';
import { Search, Filter, Stethoscope, ChevronDown, Check, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { NOVA_CLINIC_CATALOG, ClinicCatalogItem } from '@/data/clinicCatalogData';
import { ClinicDisciplineExplorer } from './ClinicDisciplineExplorer';
import { ClinicCatalogCard } from './ClinicCatalogCard';
import { ClinicServiceModal } from './ClinicServiceModal';

interface ClinicDiscoveryProps {
  onBookAppointment: (serviceTitle: string, doctorName: string) => void;
  initialSearchQuery?: string;
}

const ITEMS_PER_PAGE = 16;

const DISCIPLINES_METADATA = [
  { id: 'executive-longevity-health', name: 'Executive Longevity', tagline: 'Bio-Markers & Full-Body MRI' },
  { id: 'advanced-aesthetic-dermatology', name: 'Aesthetic Dermatology', tagline: 'Pico Laser & HydraFacial' },
  { id: 'cosmetic-implant-dentistry', name: 'Cosmetic Dentistry', tagline: 'E-Max Veneers & Guided Implants' },
  { id: 'womens-health-gynecology', name: 'Women’s Health', tagline: 'Well-Woman & 4D Ultrasound' },
  { id: 'pediatrics-child-health', name: 'Pediatrics Care', tagline: 'Newborn Care & Vaccinations' },
  { id: 'orthopedics-sports-medicine', name: 'Orthopedics & Sports', tagline: 'PRP Stem Cell & Arthroscopy' },
  { id: 'physiotherapy-spine-rehab', name: 'Physiotherapy & Spine', tagline: 'Tecar Therapy & Decompression' },
  { id: 'telehealth-vip-home-care', name: 'VIP Home & Telehealth', tagline: 'Doctor Home Dispatch & IV Drip' },
];

export const ClinicDiscovery: React.FC<ClinicDiscoveryProps> = ({
  onBookAppointment,
  initialSearchQuery = '',
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [selectedService, setSelectedService] = useState<ClinicCatalogItem | null>(null);

  // Sync external search query if changes
  React.useEffect(() => {
    if (initialSearchQuery !== undefined) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  // Calculate counts for disciplines
  const disciplineListWithCounts = useMemo(() => {
    return DISCIPLINES_METADATA.map((dept) => ({
      ...dept,
      count: NOVA_CLINIC_CATALOG.filter((item) => item.disciplineId === dept.id).length,
    }));
  }, []);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let list = [...NOVA_CLINIC_CATALOG];

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

    // Sorting
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
    <section id="services-catalog" className="py-16 sm:py-24 bg-[#0B132B] relative">
      {/* Background ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>160 ACCREDITED DHA SPECIALIST SERVICES • DUBAI UAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nova Specialist Clinical Catalog
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Explore 160 bespoke medical protocols, private surgical consultations, diagnostic longevities, and aesthetic dermatology treatments across Jumeirah & Downtown Dubai.
          </p>
        </div>

        {/* Discipline Explorer */}
        <div className="mb-10">
          <ClinicDisciplineExplorer
            activeDiscipline={selectedDiscipline}
            onSelectDiscipline={(id) => {
              setSelectedDiscipline(id);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            disciplines={disciplineListWithCounts}
          />
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-sky-500/20 backdrop-blur-md mb-8">
          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              placeholder="Search treatments, doctors, codes..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          {/* Controls: Count & Sort */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-mono text-slate-400">
              Showing <span className="text-sky-300 font-bold">{filteredItems.length}</span> Services
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono hidden md:inline">Sort:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="bg-slate-950 border border-slate-700/80 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-sky-400 font-mono"
              >
                <option value="featured">Featured Treatments</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid of Medical Services */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedItems.map((item) => (
              <ClinicCatalogCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedService(selected)}
                onBook={(selected) => onBookAppointment(selected.title, selected.doctor)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Activity className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">No medical services matched your query</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the department filter or searching a different term.</p>
            <button
              onClick={() => {
                setSelectedDiscipline('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold hover:bg-sky-500/30 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Progressive Expansion Section: "See More (+16)" & Progress Bar */}
        {filteredItems.length > 0 && (
          <div className="mt-14 max-w-xl mx-auto text-center space-y-4">
            {/* Real-time Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>Displaying {displayedItems.length} of {filteredItems.length} Medical Protocols</span>
                <span className="text-sky-300 font-bold">{percentLoaded}%</span>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-teal-400 to-sky-500 transition-all duration-500 rounded-full"
                  style={{ width: `${percentLoaded}%` }}
                />
              </div>
            </div>

            {/* Buttons: See More and Show All */}
            {displayedItems.length < filteredItems.length ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleSeeMore}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>See More (+16 Services)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShowAll}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 font-mono text-xs font-semibold transition-all"
                >
                  Show All ({filteredItems.length})
                </button>
              </div>
            ) : (
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  All {filteredItems.length} Accredited Treatments Loaded
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Clinical Dossier Modal */}
      <ClinicServiceModal
        item={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(item) => onBookAppointment(item.title, item.doctor)}
      />
    </section>
  );
};
