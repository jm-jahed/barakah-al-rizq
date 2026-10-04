import React from 'react';

interface OudRoyaleLogoProps {
  className?: string;
  variant?: 'gold' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const OudRoyaleLogo: React.FC<OudRoyaleLogoProps> = ({
  className = '',
  variant = 'gold',
  size = 'md'
}) => {
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
    <div className={`inline-flex items-center gap-3 font-serif tracking-wider ${sizeClasses[size]} ${className}`}>
      {/* Luxury Royal Flacon & Scent Vapor Crest SVG */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_12px_rgba(217,119,6,0.4)]"
        >
          {/* Outer Royal Crest Ring */}
          <circle cx="32" cy="32" r="30" stroke="url(#goldPerfumeGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="32" cy="32" r="27" stroke="url(#goldPerfumeGrad)" strokeWidth="1" opacity="0.6" />
          
          {/* Flacon Stopper */}
          <rect x="28" y="12" width="8" height="6" rx="2" fill="url(#goldPerfumeGrad)" />
          <rect x="30" y="18" width="4" height="4" fill="url(#goldPerfumeGrad)" />

          {/* Octagonal Crystal Flacon Body */}
          <path
            d="M24 22H40L46 28V46L40 52H24L18 46V28L24 22Z"
            fill="url(#goldPerfumeGrad)"
            fillOpacity="0.25"
            stroke="url(#goldPerfumeGrad)"
            strokeWidth="1.5"
          />

          {/* Central Oud Drop & Royal Star */}
          <path
            d="M32 28C32 28 27 35 27 38C27 40.76 29.24 43 32 43C34.76 43 37 40.76 37 38C37 35 32 28 32 28Z"
            fill="url(#goldPerfumeGrad)"
          />
          
          <defs>
            <linearGradient id="goldPerfumeGrad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE68A" />
              <stop offset="0.5" stopColor="#D97706" />
              <stop offset="1" stopColor="#92400E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-bold tracking-[0.25em] uppercase text-amber-200">
            OUD ROYALE
          </span>
          <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-sans font-semibold tracking-widest">
            PARIS • DUBAI
          </span>
        </div>
        <span className="text-[9px] tracking-[0.35em] uppercase text-zinc-400 font-sans">
          HAUTE PARFUMERIE & DEHN AL OUD
        </span>
      </div>
    </div>
  );
};
