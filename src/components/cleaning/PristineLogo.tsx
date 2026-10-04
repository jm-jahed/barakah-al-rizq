'use client';

import React from 'react';

interface PristineLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export const PristineLogo: React.FC<PristineLogoProps> = ({
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
      {/* Pristine Crest Icon */}
      <div className={`relative ${currentSize.icon} flex items-center justify-center`}>
        {/* Glow ambient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-400/30 to-amber-200/10 rounded-lg blur-md" />
        
        {/* SVG Crest */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id="pristineEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="35%" stopColor="#10B981" />
              <stop offset="70%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="pristineGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Geometric Diamond Shield Frame */}
          <path
            d="M24 4L42 12V26C42 35.5 24 44 24 44C24 44 6 35.5 6 26V12L24 4Z"
            stroke="url(#pristineEmeraldGrad)"
            strokeWidth="1.75"
            fill="#06120E"
            fillOpacity="0.9"
            strokeLinejoin="round"
          />

          {/* Inner Geometrical Hexagon */}
          <polygon
            points="24,10 36,17 36,31 24,38 12,31 12,17"
            stroke="url(#pristineGoldGrad)"
            strokeWidth="1.25"
            strokeOpacity="0.75"
          />

          {/* Central Architectural Monogram "P" Pillar / Precision Star Line */}
          <path
            d="M20 16H27C29.2 16 31 17.8 31 20C31 22.2 29.2 24 27 24H20V32"
            stroke="url(#pristineEmeraldGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top Diamond Keystone */}
          <polygon
            points="24,7 26,9 24,11 22,9"
            fill="url(#pristineGoldGrad)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif ${currentSize.title} font-bold tracking-[0.18em] uppercase ${lightMode ? 'text-slate-900' : 'text-white'}`}>
            PRIS<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 font-extrabold">TINE</span>
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold tracking-widest hidden sm:inline-block">
            UAE
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-sans ${currentSize.sub} ${currentSize.tracking} uppercase ${lightMode ? 'text-slate-500' : 'text-zinc-400'} font-medium`}>
            Sovereign Facility Detailing
          </span>
        )}
      </div>
    </div>
  );
};
