import React from 'react';

interface VelvetLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export const VelvetLogo: React.FC<VelvetLogoProps> = ({
  className = '',
  variant = 'gold',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14'
  };

  const textSizes = {
    sm: { title: 'text-base tracking-[0.25em]', sub: 'text-[9px] tracking-[0.3em]' },
    md: { title: 'text-xl tracking-[0.28em]', sub: 'text-[10px] tracking-[0.35em]' },
    lg: { title: 'text-2xl tracking-[0.3em]', sub: 'text-[12px] tracking-[0.4em]' }
  };

  const isGold = variant === 'gold';
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Luxury Atelier Crest Emblem */}
      <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full transform transition-transform duration-700 ease-out group-hover:rotate-45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="velvetGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="35%" stopColor="#E5A855" />
              <stop offset="70%" stopColor="#C88A3B" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
            <linearGradient id="velvetRoseGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5A855" />
              <stop offset="100%" stopColor="#FDA4AF" />
            </linearGradient>
          </defs>

          {/* Outer Royal Diamond Frame */}
          <rect
            x="20"
            y="20"
            width="80"
            height="80"
            rx="14"
            transform="rotate(45 60 60)"
            stroke={isGold ? 'url(#velvetGoldGrad)' : isLight ? '#FFFFFF' : '#1E293B'}
            strokeWidth="2.5"
            strokeDasharray="4 2"
            fill="none"
            className="opacity-70"
          />

          {/* Inner Precision Shield */}
          <circle
            cx="60"
            cy="60"
            r="38"
            stroke={isGold ? 'url(#velvetRoseGrad)' : isLight ? '#FFFFFF' : '#1E293B'}
            strokeWidth="1.5"
            className="opacity-90"
          />

          {/* Haute Monogram 'V' & Symmetry Motif */}
          <path
            d="M44 42L60 76L76 42"
            stroke={isGold ? 'url(#velvetGoldGrad)' : isLight ? '#FFFFFF' : '#1E293B'}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 30V48"
            stroke={isGold ? 'url(#velvetGoldGrad)' : isLight ? '#FFFFFF' : '#1E293B'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="60"
            cy="26"
            r="2.5"
            fill={isGold ? '#F5D061' : isLight ? '#FFFFFF' : '#1E293B'}
          />

          {/* Bottom Crown Arc */}
          <path
            d="M50 84C55 87 65 87 70 84"
            stroke={isGold ? 'url(#velvetGoldGrad)' : isLight ? '#FFFFFF' : '#1E293B'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-amber-500/10 blur-md rounded-full pointer-events-none group-hover:bg-amber-500/25 transition-all duration-500" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold uppercase transition-colors duration-300 ${
            isGold
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100'
              : isLight
              ? 'text-white'
              : 'text-neutral-900'
          } ${textSizes[size].title}`}
          style={{ letterSpacing: '0.22em' }}
        >
          VELVET
        </span>
        <span
          className={`font-sans uppercase font-medium transition-colors duration-300 ${
            isGold
              ? 'text-amber-400/80'
              : isLight
              ? 'text-neutral-400'
              : 'text-neutral-500'
          } ${textSizes[size].sub}`}
        >
          BEAUTY ATELIER • DUBAI
        </span>
      </div>
    </div>
  );
};
