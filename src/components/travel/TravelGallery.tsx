'use client';
import React from 'react';

export const TravelGallery: React.FC<any> = () => {
  const images = [
    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((img, i)=>(<div key={i} className="h-60 rounded-2xl overflow-hidden"><img src={img} alt="Gallery" className="w-full h-full object-cover" /></div>))}</div>
      </div>
    </section>
  );
};
