'use client';

import React from 'react';

interface ApexMotorsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export const ApexMotorsLogo: React.FC<ApexMotorsLogoProps> = ({
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
      {/* Apex Crest Icon */}
      <div className={`relative ${currentSize.icon} flex items-center justify-center`}>
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-amber-200/10 rounded-lg blur-md" />
        
        {/* SVG Crest */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id="apexGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="apexRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#BE123C" />
            </linearGradient>
          </defs>

          {/* Aerodynamic Shield Frame */}
          <polygon
            points="24,4 44,14 38,40 24,46 10,40 4,14"
            stroke="url(#apexGoldGrad)"
            strokeWidth="1.75"
            fill="#0B0909"
            fillOpacity="0.9"
            strokeLinejoin="round"
          />

          {/* Inner Wing Apex Chevrons */}
          <path
            d="M14 26L24 14L34 26"
            stroke="url(#apexGoldGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 32L24 23L31 32"
            stroke="url(#apexRedGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Speed Spire */}
          <line
            x1="24"
            y1="10"
            x2="24"
            y2="38"
            stroke="url(#apexGoldGrad)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif ${currentSize.title} font-bold tracking-[0.18em] uppercase ${lightMode ? 'text-slate-900' : 'text-white'}`}>
            APEX<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-amber-400 font-extrabold">MOTORS</span>
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold tracking-widest hidden sm:inline-block">
            DUBAI
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-sans ${currentSize.sub} ${currentSize.tracking} uppercase ${lightMode ? 'text-slate-500' : 'text-zinc-400'} font-medium`}>
            Exotic Supercar Reserve
          </span>
        )}
      </div>
    </div>
  );
};
