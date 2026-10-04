'use client';
import React from 'react';

export const OpticalGallery: React.FC<any> = () => {
  const images = [
    'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((img, i)=>(<div key={i} className="h-60 rounded-2xl overflow-hidden"><img src={img} alt="Gallery" className="w-full h-full object-cover" /></div>))}</div>
      </div>
    </section>
  );
};
