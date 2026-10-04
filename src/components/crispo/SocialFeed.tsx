'use client';

import React from 'react';
import { Camera, Heart, Share2 } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const SocialFeed: React.FC = () => {
  const { isRtl } = useCrispoLanguage();

  const images = [
    { url: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop', handle: '@crisposocial', likes: '2.4k' },
    { url: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop', handle: '@crisposocial', likes: '4.1k' },
    { url: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop', handle: '@crisposocial', likes: '1.9k' },
    { url: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop', handle: '@crisposocial', likes: '3.8k' },
    { url: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop', handle: '@crisposocial', likes: '5.2k' },
    { url: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop', handle: '@crisposocial', likes: '2.9k' },
  ];

  return (
    <section className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
              {isRtl ? 'مجتمع عشاق كريسبو' : 'COMMUNITY FEED'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#FAF6EE] italic font-sans mt-3">
              {isRtl ? 'شاركنا لحظات قرمشتك.' : 'SHOW US YOUR CRISPO.'}
            </h2>
            <p className="text-xs text-stone-400 font-mono mt-1">
              {isRtl
                ? 'شارك صور وجباتك مع تاق @CrispoSocial على إنستغرام وتيك توك للظهور على شاشتنا المباشرة.'
                : 'Tag @CrispoSocial on Instagram & TikTok to be featured on our live community board.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden h-48 group border border-stone-800">
              <img src={img.url} alt="Crispo Social" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between font-mono text-xs text-white">
                <span className="text-[10px] text-[#FFC107]" dir="ltr">{img.handle}</span>
                <div className="flex items-center gap-1 text-[#E63946]">
                  <Heart className="w-3.5 h-3.5 fill-[#E63946]" />
                  <span dir="ltr">{img.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
