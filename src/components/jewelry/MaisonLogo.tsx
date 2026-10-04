import React from 'react';

interface MaisonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MaisonLogo: React.FC<MaisonLogoProps> = ({
  className = '',
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
      {/* Handcrafted Royal Diamond Octahedron & Golden Crown SVG */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_14px_rgba(245,158,11,0.45)]"
        >
          {/* Outer Royal Diamond Facets */}
          <polygon
            points="32,4 54,18 46,54 32,60 18,54 10,18"
            stroke="url(#goldJewelGrad)"
            strokeWidth="1.5"
          />
          <polygon
            points="32,10 48,20 42,48 32,52 22,48 16,20"
            stroke="url(#goldJewelGrad)"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* Inner Facet Star */}
          <line x1="32" y1="4" x2="32" y2="60" stroke="url(#goldJewelGrad)" strokeWidth="1" opacity="0.4" />
          <line x1="10" y1="18" x2="54" y2="18" stroke="url(#goldJewelGrad)" strokeWidth="1" opacity="0.4" />
          <line x1="16" y1="20" x2="48" y2="20" stroke="url(#goldJewelGrad)" strokeWidth="1" opacity="0.5" />
          
          {/* Central Brilliant Star */}
          <path
            d="M32 20L34 28L42 30L34 32L32 40L30 32L22 30L30 28Z"
            fill="url(#goldJewelGrad)"
          />

          <defs>
            <linearGradient id="goldJewelGrad" x1="10" y1="4" x2="54" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF3C7" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-bold tracking-[0.25em] uppercase text-amber-200">
            MAISON D’OR
          </span>
          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-sans font-semibold tracking-widest">
            DUBAI
          </span>
        </div>
        <span className="text-[8.5px] tracking-[0.35em] uppercase text-zinc-400 font-sans">
          HAUTE JOAILLERIE &amp; HORLOGERIE
        </span>
      </div>
    </div>
  );
};
