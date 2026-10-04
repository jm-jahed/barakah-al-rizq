'use client';

import React from 'react';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface AlSultanLogoProps {
  className?: string;
  variant?: 'gold' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const AlSultanLogo: React.FC<AlSultanLogoProps> = ({
  className = '',
  variant = 'gold',
  size = 'md'
}) => {
  let isRtl = false;

  try {
    const ctx = useRestaurantLanguage();
    if (ctx) {
      isRtl = ctx.isRtl;
    }
  } catch {
    // Fallback if rendered outside provider
  }

  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-14 text-xl'
  };

  const iconSizes = {
    sm: 28,
    md: 38,
    lg: 52
  };

  return (
    <div className={`inline-flex items-center gap-3 font-serif tracking-wider ${sizeClasses[size]} ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Luxury Royal Cloche & Palm Crest SVG */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
        >
          {/* Outer Royal Seal Ring */}
          <circle cx="32" cy="32" r="30" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="32" cy="32" r="27" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
          
          {/* Cloche Dome & Steam */}
          <path
            d="M18 38C18 28.5 24 22 32 22C40 22 46 28.5 46 38H18Z"
            fill="url(#goldGrad)"
            fillOpacity="0.25"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
          />
          {/* Cloche Handle */}
          <circle cx="32" cy="19" r="2.5" fill="url(#goldGrad)" />
          {/* Cloche Tray */}
          <path d="M14 39H50V41C50 42 49 43 48 43H16C15 43 14 42 14 41V39Z" fill="url(#goldGrad)" />
          
          {/* Royal Saffron & Palm Star */}
          <path
            d="M32 10L33.5 14L37.5 15.5L33.5 17L32 21L30.5 17L26.5 15.5L30.5 14L32 10Z"
            fill="url(#goldGrad)"
          />
          
          <defs>
            <linearGradient id="goldGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5D061" />
              <stop offset="0.5" stopColor="#E5B232" />
              <stop offset="1" stopColor="#9E7D23" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-bold tracking-[0.2em] uppercase text-amber-200">
            {isRtl ? 'السلطان' : 'AL SULTAN'}
          </span>
          <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-sans font-semibold tracking-widest">
            {isRtl ? 'دبي' : 'DUBAI'}
          </span>
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-400 font-sans">
          {isRtl ? 'المطبخ الملكي الرفيع والمجلس الفاخر' : 'HAUTE CUISINE & ROYAL MAJLIS'}
        </span>
      </div>
    </div>
  );
};

