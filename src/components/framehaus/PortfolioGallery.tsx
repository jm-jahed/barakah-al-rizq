'use client';

import React, { useState } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA, PortfolioItem } from '@/data/framehausData';
import { PortfolioLightbox } from './PortfolioLightbox';
import {
  Camera,
  Maximize2,
  Sparkles,
  Layers,
  MapPin,
  Calendar,
  Filter,
} from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: t.gallery.all },
    { id: 'architecture', label: t.gallery.architecture },
    { id: 'hospitality', label: t.gallery.hospitality },
    { id: 'product', label: t.gallery.product },
    { id: 'fashion', label: t.gallery.fashion },
    { id: 'portraits', label: t.gallery.portraits },
    { id: 'automotive', label: t.gallery.automotive },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? FRAMEHAUS_DATA.portfolio
      : FRAMEHAUS_DATA.portfolio.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-[#08080A] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Camera className="w-3.5 h-3.5" />
              <span>{t.gallery.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
              {t.gallery.title}
            </h2>
            <p className="text-base text-zinc-400 font-light">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-amber-400 flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-lg border border-zinc-800">
            <Sparkles className="w-4 h-4" />
            <span>150MP 16-Bit RAW Calibrated Portfolio</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-xl bg-zinc-950 border border-zinc-800/80 overflow-hidden hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image with Aspect Ratio & Hover Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 start-3">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                    {item.categoryLabel[language]}
                  </span>
                </div>

                {/* Inspect Button on Hover */}
                <div className="absolute bottom-3 end-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t.gallery.viewSpecs}</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {item.location[language]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>

                {/* Camera Quick Info Tag */}
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span className="truncate max-w-[200px]">{item.specs.camera}</span>
                  <span className="text-amber-400 font-bold">{item.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Technical Specs Modal */}
      {activeItem && (
        <PortfolioLightbox
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </section>
  );
};
