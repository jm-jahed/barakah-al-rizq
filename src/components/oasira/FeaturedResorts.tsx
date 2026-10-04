'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin, ArrowRight } from 'lucide-react';
import { OASIRA_RESORTS, OasiraResort } from '@/data/oasiraData';

interface FeaturedResortsProps {
  activeCategory: string;
  savedResortIds: string[];
  onToggleSaveResort: (resortId: string) => void;
  onSelectResortDetail: (resort: OasiraResort) => void;
  onBookResort: (resort: OasiraResort) => void;
}

export const FeaturedResorts: React.FC<FeaturedResortsProps> = ({
  activeCategory,
  savedResortIds,
  onToggleSaveResort,
  onSelectResortDetail,
  onBookResort,
}) => {
  const filteredResorts = OASIRA_RESORTS.filter((r) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Beach' && r.type === 'Beach') return true;
    if (activeCategory === 'Desert' && r.type === 'Desert') return true;
    if (activeCategory === 'Romantic' && r.rating >= 4.8) return true;
    if (activeCategory === 'Family' && r.amenities.includes('Kids Club')) return true;
    if (activeCategory === 'Wellness' && r.type === 'Wellness') return true;
    return true;
  });

  return (
    <section id="resorts" className="py-20 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              UAE RESORT CATALOGUE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-4">
              Stay somewhere unforgettable.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Hand-picked luxury beachfront retreats, desert pool sanctuaries, and mountain retreats across the 7 Emirates.
            </p>
          </div>

          <div className="text-xs font-mono text-[#D4B382]">
            <span>{filteredResorts.length} LUXURY PROPERTIES AVAILABLE</span>
          </div>
        </div>

        {/* Resorts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredResorts.map((resort) => {
            const isSaved = savedResortIds.includes(resort.id);

            return (
              <motion.div
                key={resort.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F382C] rounded-3xl border border-stone-800 overflow-hidden shadow-xl hover:border-[#D4B382]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div
                    onClick={() => onSelectResortDetail(resort)}
                    className="relative h-60 overflow-hidden cursor-pointer bg-[#0A2920]"
                  >
                    <img
                      src={resort.image}
                      alt={resort.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-transparent to-transparent" />

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveResort(resort.id);
                      }}
                      className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-all ${
                        isSaved
                          ? 'bg-[#E63946] border-[#E63946] text-white shadow-lg'
                          : 'bg-[#0A2920]/80 border-stone-700 text-stone-300 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                    </button>

                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#0A2920]/80 text-[#D4B382] border border-[#D4B382]/40 backdrop-blur-md uppercase">
                      {resort.emirate}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                      <div className="flex items-center gap-1 text-[#D4B382]">
                        <Star className="w-3.5 h-3.5 fill-[#D4B382]" />
                        <span className="font-bold">{resort.rating}</span>
                        <span className="text-stone-400">({resort.reviewsCount})</span>
                      </div>

                      <span className="text-stone-400 text-[10px] uppercase font-mono">{resort.type}</span>
                    </div>

                    <h3
                      onClick={() => onSelectResortDetail(resort)}
                      className="text-xl font-serif font-bold text-[#FAF6EE] mb-2 cursor-pointer group-hover:text-[#D4B382] transition-colors leading-snug"
                    >
                      {resort.name}
                    </h3>

                    <p className="text-xs text-stone-300 font-light line-clamp-2 leading-relaxed mb-4">
                      {resort.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-stone-400">
                      {resort.amenities.slice(0, 3).map((a) => (
                        <span key={a} className="px-2 py-0.5 rounded-md bg-[#0A2920] border border-stone-800">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Price & Booking Trigger */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 font-mono border-t border-stone-800/60 mt-4">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">STARTING FROM</span>
                    <span className="text-lg font-bold text-[#D4B382]">AED {resort.startingPriceAED} <span className="text-[10px] font-normal text-stone-400">/ night</span></span>
                  </div>

                  <button
                    onClick={() => onBookResort(resort)}
                    className="px-4 py-2.5 rounded-xl bg-[#D4B382] hover:bg-[#c2a170] text-black font-serif text-xs font-bold uppercase transition-all shadow-md active:scale-95"
                  >
                    Book Now
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
