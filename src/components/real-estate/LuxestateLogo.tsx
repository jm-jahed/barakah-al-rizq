'use client';

import React from 'react';

interface LuxestateLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export const LuxestateLogo: React.FC<LuxestateLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  lightMode = false
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', title: 'text-base', sub: 'text-[9px]', tracking: 'tracking-[0.22em]' },
    md: { icon: 'w-9 h-9', title: 'text-xl', sub: 'text-[10px]', tracking: 'tracking-[0.25em]' },
    lg: { icon: 'w-12 h-12', title: 'text-2xl', sub: 'text-xs', tracking: 'tracking-[0.28em]' },
    xl: { icon: 'w-16 h-16', title: 'text-3xl', sub: 'text-sm', tracking: 'tracking-[0.3em]' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Architectural Crest Icon */}
      <div className={`relative ${currentSize.icon} flex items-center justify-center`}>
        {/* Glow ambient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-yellow-400/30 to-amber-200/10 rounded-lg blur-md" />
        
        {/* SVG Crest */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id="luxGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="luxPlatinumGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>

          {/* Outer Geometric Facet Frame */}
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="8"
            stroke="url(#luxGoldGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            fill="#090B0E"
            fillOpacity="0.85"
          />

          {/* Corner Accent Triangles */}
          <path d="M4 12L12 4" stroke="url(#luxGoldGrad)" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M36 4L44 12" stroke="url(#luxGoldGrad)" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M4 36L12 44" stroke="url(#luxGoldGrad)" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M36 44L44 36" stroke="url(#luxGoldGrad)" strokeWidth="1" strokeOpacity="0.5" />

          {/* Architectural High-Rise / Crown Monogram Pillar */}
          <path
            d="M24 10L32 17V36H16V17L24 10Z"
            stroke="url(#luxGoldGrad)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          
          {/* Inner Vertical Spire / Monogram Line */}
          <line
            x1="24"
            y1="14"
            x2="24"
            y2="36"
            stroke="url(#luxPlatinumGrad)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />

          {/* Horizontal Level Divisions */}
          <line x1="19" y1="23" x2="29" y2="23" stroke="url(#luxGoldGrad)" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="19" y1="29" x2="29" y2="29" stroke="url(#luxGoldGrad)" strokeWidth="1" strokeOpacity="0.6" />

          {/* Diamond Finial Keystone */}
          <polygon
            points="24,7 26.5,10 24,13 21.5,10"
            fill="url(#luxGoldGrad)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif ${currentSize.title} font-bold tracking-[0.18em] uppercase ${lightMode ? 'text-slate-900' : 'text-white'}`}>
            LUX<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 font-extrabold">ESTATE</span>
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold tracking-widest hidden sm:inline-block">
            UAE
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-sans ${currentSize.sub} ${currentSize.tracking} uppercase ${lightMode ? 'text-slate-500' : 'text-zinc-400'} font-medium`}>
            Private Client Property Reserve
          </span>
        )}
      </div>
    </div>
  );
};
