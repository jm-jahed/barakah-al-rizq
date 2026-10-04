'use client';

import React, { useState } from 'react';
import { Camera, Sparkles, Heart } from 'lucide-react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop', title: 'Golden Retriever Post-Hydro Rehab', category: 'Rehabilitation' },
  { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop', title: 'Ragdoll Cat in Luxury Suite', category: 'Feline Boarding' },
  { url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop', title: 'Nose-to-Tail Clinical Examination', category: 'Diagnostics' },
  { url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop', title: 'Show-Ring Aromatherapy Spa Groom', category: 'Grooming' },
  { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', title: 'Aquatic Underwater Treadmill Session', category: 'Hydrotherapy' },
  { url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop', title: 'Gentle Annual Core Vaccination', category: 'Preventive' },
];

export const PetGallery: React.FC<any> = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Rehabilitation', 'Feline Boarding', 'Diagnostics', 'Grooming'];

  const filteredImages = GALLERY_IMAGES.filter((img) => filter === 'All' || img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#090F16] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              PATIENT LIFE & CLINICAL CARE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              Moments from Our Sanctuary.
            </h3>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  filter === c ? 'bg-emerald-400 text-slate-950 shadow-md' : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="relative h-64 rounded-3xl overflow-hidden border border-white/10 group shadow-xl"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090F16] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold text-white font-sans">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetGallery;
