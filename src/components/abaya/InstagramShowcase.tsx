'use client';

import React from 'react';
import { Camera, Heart, Crown } from 'lucide-react';

export const InstagramShowcase: React.FC = () => {
  const posts = [
    { img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop', tag: '@noura.abaya.dubai' },
    { img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop', tag: '#RamadanCouture' },
    { img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop', tag: '#DubaiFashionAvenue' },
    { img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop', tag: '#ModestLuxury' },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
              INSTAGRAM SHOWCASE • @NOURA.ABAYA.DUBAI
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              #NouraWomen Gallery.
            </h2>
          </div>

          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((p, idx) => (
            <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group bg-[#121212] border border-stone-800">
              <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 font-mono text-xs text-white">
                <Heart className="w-6 h-6 text-[#C5A059] fill-[#C5A059]" />
                <span>{p.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
