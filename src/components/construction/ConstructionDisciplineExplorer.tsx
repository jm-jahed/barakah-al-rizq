'use strict';
import React from 'react';
import { ArrowRight, Crown, Award, Building, Ruler, Compass, Layers, ShieldCheck } from 'lucide-react';

interface ConstructionDisciplineExplorerProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'villa-architecture-build',
    name: 'Ground-Up Villa Construction',
    subtitle: 'Palm Jumeirah & Emirates Hills Mansions',
    description: 'Bespoke structural engineering, deep piling, reinforced Swiss glazing, and palatial architectural builds up to 35,000 sq ft.',
    startingPriceAED: 4500000,
    rateSqFt: 'AED 650 / sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'corporate-fitout-difc',
    name: 'DIFC Corporate & Grade-A Fit-Out',
    subtitle: 'Sovereign Wealth & Private Equity Suites',
    description: 'High-security boardrooms, acoustic glass partitions, customized trading floors, and fast-track DIFC / DDA permit clearances.',
    startingPriceAED: 850000,
    rateSqFt: 'AED 420 / sq ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'penthouse-renovation',
    name: 'Super-Prime Penthouse Overhauls',
    subtitle: 'Downtown & Marina Sky Palaces',
    description: 'Complete interior structural stripping, bookmatched Statuario Italian marble, Poliform walk-in wardrobes, and cantilevered pools.',
    startingPriceAED: 1650000,
    rateSqFt: 'AED 580 / sq ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'mep-authority-approvals',
    name: 'MEP & Municipality Permitting',
    subtitle: 'Dubai Municipality, Civil Defense & DEWA',
    description: 'Heavy electrical transformer installations, central HVAC VRV systems, fire suppression infrastructure, and statutory sign-offs.',
    startingPriceAED: 380000,
    rateSqFt: 'AED 180 / sq ft',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'hospitality-restaurant-fitout',
    name: 'Fine Dining & Michelin Restaurant Fit-Out',
    subtitle: 'Commercial Kitchens & Haute Ambience',
    description: 'Electrolux Professional commercial kitchen engineering, custom terrazzo flooring, acoustic brass cladding, and guest lounges.',
    startingPriceAED: 2200000,
    rateSqFt: 'AED 750 / sq ft',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'bespoke-joinery-marble',
    name: 'Artisanal Millwork & Marble Masonry',
    subtitle: 'Al Quoz Fabrication & Italian Calacatta',
    description: 'In-house 5-axis CNC marble bookmatching, Canaletto walnut architectural paneling, and bespoke hidden pivot doors.',
    startingPriceAED: 650000,
    rateSqFt: 'AED 490 / sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'landscape-pool-outdoor',
    name: 'Landscape Architecture & Infinity Pools',
    subtitle: 'Glass-Edge Pools & Bioclimatic Pergolas',
    description: 'Balinese Sukabumi natural stone pools, sunken fire pits, private padel courts, thermal ash decking, and ancient olive trees.',
    startingPriceAED: 950000,
    rateSqFt: 'AED 380 / sq ft',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'smart-knx-automation',
    name: 'KNX Smart Home & Acoustic Cinemas',
    subtitle: 'Crestron, Basalte & Dolby Atmos 9.4.6',
    description: 'Private acoustic isolation theatres, biometric access control, circadian lighting control, and high-fidelity multi-zone audio.',
    startingPriceAED: 520000,
    rateSqFt: 'AED 240 / sq ft',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80',
    count: 20
  }
];

export const ConstructionDisciplineExplorer: React.FC<ConstructionDisciplineExplorerProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section id="disciplines" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold tracking-widest text-amber-400 uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Full-Spectrum Contracting Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Eight Pillars of <span className="text-amber-400 italic font-normal">Architectural Mastery</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              From raw foundation piling to bespoke Italian millwork, every discipline is managed in-house under Dubai Municipality Grade-1 supervision.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              160 Turnkey Contracting Scopes
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINES.map((disc) => {
            const isSelected = activeCategory === disc.id;

            return (
              <div
                key={disc.id}
                onClick={() => onSelectCategory(disc.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'border-neutral-800/90 hover:border-amber-500/50 hover:-translate-y-1'
                } bg-neutral-900/60`}
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={disc.image}
                    alt={disc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Starting Price Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300">
                    From AED {(disc.startingPriceAED / 1000000).toFixed(1)}M
                  </div>

                  {/* Count */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[10px] font-medium text-neutral-300">
                    {disc.count} Scopes
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-amber-300 transition-colors mb-1 line-clamp-1">
                    {disc.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-2 line-clamp-1">
                    {disc.subtitle}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {disc.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-400 truncate font-mono">
                      {disc.rateSqFt}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                      View Scopes <ArrowRight className="w-3.5 h-3.5" />
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
