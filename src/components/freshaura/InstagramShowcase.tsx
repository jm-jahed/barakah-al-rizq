'use client';

import React from 'react';
import { Camera, Heart } from 'lucide-react';

export const InstagramShowcase: React.FC = () => {
  const posts = [
    { img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=600&auto=format&fit=crop', tag: '@freshaura.uae' },
    { img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop', tag: '#FreshProduceDubai' },
    { img: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=600&auto=format&fit=crop', tag: '#ExoticFruitsUAE' },
    { img: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=600&auto=format&fit=crop', tag: '#OrganicDubai' },
  ];

  return (
    <section className="py-20 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
              SOCIAL SHOWCASE • @FRESHAURA.UAE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FBF9F5] mt-4">
              #FreshAuraLife Gallery.
            </h2>
          </div>

          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((p, idx) => (
            <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group bg-[#064E3B] border border-emerald-700/40">
              <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 font-mono text-xs text-white">
                <Heart className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                <span>{p.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
