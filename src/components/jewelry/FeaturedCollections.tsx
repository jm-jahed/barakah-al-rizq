'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  const collections = [
    {
      title: 'The Signature Edit',
      subtitle: 'Haute Joaillerie & High Jewelry',
      description: 'Iconic silhouettes set with exceptional Ceylon sapphires, Colombian emeralds, and rare diamonds.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      tag: '01 / SIGNATURE',
    },
    {
      title: 'Everyday Gold',
      subtitle: '18K Solid Gold Essentials',
      description: 'Sculpted paperclip chains, ribbed huggie hoops, and stackable solid bands designed for modern living.',
      image: 'https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=800&auto=format&fit=crop',
      tag: '02 / EVERYDAY',
    },
    {
      title: 'Diamond Stories',
      subtitle: 'VVS Certified Solitaires & Pavé',
      description: 'Exceptional brilliant-cut solitaires and continuous eternity bands set in pure 18K white gold.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      tag: '03 / DIAMOND',
    },
    {
      title: 'The Bridal House',
      subtitle: 'Engagement Rings & Wedding Sets',
      description: 'Bespoke solitaire engagement rings, crown chevron bands, and matching platinum bridal suites.',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop',
      tag: '04 / BRIDAL',
    },
  ];

  return (
    <section id="collections" className="py-24 bg-[#0B0907] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-3">
              CURATED ESSENTIALS • CONCEPT COLLECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Featured Collections.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md font-normal leading-relaxed">
            Discover our four cornerstone fine jewelry edits crafted in 18K gold and conflict-free gemstones.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-[#14110E] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-[380px] sm:h-[420px] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-[#0B0907]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                    {col.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-amber-300/80 uppercase tracking-widest block mb-1">
                    {col.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-semibold mb-3 group-hover:text-amber-200 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-sm font-normal mb-4">
                    {col.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Explore Edit →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
