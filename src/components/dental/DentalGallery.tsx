'use client';
import React from 'react';

export const DentalGallery: React.FC<any> = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 bg-[#06101E] text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Dental Visual Gallery</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((img, idx) => (<div key={idx} className="h-60 rounded-2xl overflow-hidden border border-cyan-500/20"><img src={img.src} alt="Gallery" className="w-full h-full object-cover" /></div>))}</div>
      </div>
    </section>
  );
};
