'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Maximize2 } from 'lucide-react';

export const PerfumeGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ['All', 'Bottles', 'Campaign', 'Ingredients', 'Packaging'];

  const images = [
    { src: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop", cat: "Bottles", title: "Midnight Oud Extrait Bottle" },
    { src: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop", cat: "Campaign", title: "Noir Sovereign Atelier Setup" },
    { src: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1200&auto=format&fit=crop", cat: "Bottles", title: "Rose Élan May Rose Flacon" },
    { src: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop", cat: "Ingredients", title: "Saffron & Sandalwood Raw Ingredients" },
    { src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop", cat: "Packaging", title: "Gold Wax Presentation Box" },
    { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop", cat: "Ingredients", title: "Cambodian Agarwood Resin Chips" }
  ];

  const filteredImages = images.filter((img) => selectedCategory === 'All' || img.cat === selectedCategory);

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-3">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Editorial Visuals
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Fragrance Gallery.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-2xl">
              An editorial look into our flacon craftsmanship, gold-embossed packaging, and botanical raw ingredients.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setLightboxImage(img.src)}
              className="relative h-64 rounded-3xl overflow-hidden bg-black border border-white/10 group cursor-pointer shadow-xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase self-start px-2.5 py-1 rounded bg-black/80 border border-amber-500/30">
                  {img.cat}
                </span>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-serif">{img.title}</span>
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-white z-10 hover:bg-black"
                >
                  <X className="w-5 h-5" />
                </button>
                <img src={lightboxImage} alt="Gallery Enlarged" className="w-full max-h-[85vh] object-contain bg-black" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
