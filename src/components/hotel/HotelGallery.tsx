'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES, GalleryImage } from '@/data/hotelData';

export const HotelGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const categories = ['ALL', 'ROOMS', 'DINING', 'SPA', 'ARCHITECTURE', 'EXPERIENCES'];

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (activeCategory !== 'ALL' && img.category !== activeCategory) return false;
    return true;
  });

  const handleNextLightbox = () => {
    if (!lightboxImg) return;
    const currentIdx = filteredImages.findIndex((i) => i.id === lightboxImg.id);
    const nextIdx = (currentIdx + 1) % filteredImages.length;
    setLightboxImg(filteredImages[nextIdx]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxImg) return;
    const currentIdx = filteredImages.findIndex((i) => i.id === lightboxImg.id);
    const prevIdx = (currentIdx - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImg(filteredImages[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              PHOTOGRAPHIC ESSAY
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
              The House in light.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Explore the architectural spaces, Mediterranean vistas, dining details, and wellness grottos of Velora House.
            </p>
          </div>

          <span className="text-xs font-mono text-stone-400">
            {filteredImages.length} HIGH-RESOLUTION PHOTOGRAPHS
          </span>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#C5A059] text-black font-bold shadow-md'
                  : 'bg-[#29221D] border border-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              onClick={() => setLightboxImg(img)}
              className="relative rounded-2xl overflow-hidden border border-stone-800 h-72 cursor-pointer group shadow-xl"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase block">{img.category}</span>
                <h3 className="text-sm font-serif text-white font-bold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center font-sans"
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-12 right-0 p-2 text-stone-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-black">
                <img
                  src={lightboxImg.url}
                  alt={lightboxImg.title}
                  className="w-full h-full object-contain"
                />

                <button
                  onClick={handlePrevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextLightbox}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[#C5A059] uppercase block">{lightboxImg.category}</span>
                <h3 className="text-lg font-serif text-white font-bold">{lightboxImg.title}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
