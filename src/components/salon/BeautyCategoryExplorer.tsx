'use strict';
import React from 'react';
import { BEAUTY_CATEGORIES, BeautyCategory } from '@/data/salonData';
import { ArrowRight, Crown, Sparkle, Award } from 'lucide-react';

interface BeautyCategoryExplorerProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export const BeautyCategoryExplorer: React.FC<BeautyCategoryExplorerProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold tracking-widest text-amber-400 uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Haute Beauty Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Curated Master <span className="text-amber-400 italic font-normal">Sanctuaries</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Eight specialized departments staffed by certified European & International artisans with bespoke clinical protocols.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              160 Distinct Master Treatments
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEAUTY_CATEGORIES.map((cat: BeautyCategory) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'border-neutral-800/90 hover:border-amber-500/50 hover:-translate-y-1'
                } bg-neutral-900/60`}
              >
                {/* Background Card Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  
                  {/* Category Starting Price Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300">
                    From AED {cat.startingPriceAED}
                  </div>

                  {/* Count Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[10px] font-medium text-neutral-300">
                    {cat.treatmentCount} Protocols
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-amber-300 transition-colors mb-1 line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mb-2 line-clamp-1">
                    {cat.subtitle}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-500 truncate max-w-[170px]">
                      {cat.brandHighlight}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                      View <ArrowRight className="w-3.5 h-3.5" />
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
