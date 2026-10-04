'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ShieldCheck, Eye } from 'lucide-react';

export const DesertGallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      caption: 'High-Crest Navigation across Lahbab Dunes at Golden Hour',
      colSpan: 'md:col-span-8'
    },
    {
      url: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80',
      caption: 'Private Gyrfalcon Demonstration on Mirage Ridge',
      colSpan: 'md:col-span-4'
    },
    {
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      caption: 'Nomad Sanctuary Camp Under Moonlit Desert Sky',
      colSpan: 'md:col-span-4'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Sunken Majlis Dining Pavilion with Olive-Wood Fire',
      colSpan: 'md:col-span-8'
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>EDITORIAL VISUAL ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            The Horizon in Frames
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            A curated photographic essay capturing the raw scale of the dunes, the intimate glow of camp lanterns, and the quiet stillness of Arabian twilight.
          </p>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`${img.colSpan} relative rounded-2xl overflow-hidden group h-80 sm:h-96 border border-[#C9A265]/20`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif text-white tracking-wide">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
