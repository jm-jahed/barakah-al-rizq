'use client';
import React from 'react';

export const BarberGallery: React.FC<any> = () => {
  const images = [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section className="py-24 bg-neutral-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((img, i)=>(<div key={i} className="h-60 rounded-2xl overflow-hidden"><img src={img} alt="Gallery" className="w-full h-full object-cover" /></div>))}</div>
      </div>
    </section>
  );
};
