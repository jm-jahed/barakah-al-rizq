'use client';
import React from 'react';

export const WellnessGallery: React.FC<any> = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">AURA Gallery</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{images.map((img, idx) => (<div key={idx} className="h-64 rounded-2xl overflow-hidden border border-amber-500/20"><img src={img.src} alt="Gallery" className="w-full h-full object-cover" /></div>))}</div>
      </div>
    </section>
  );
};
