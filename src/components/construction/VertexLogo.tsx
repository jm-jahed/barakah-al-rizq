import React from 'react';

interface VertexLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export const VertexLogo: React.FC<VertexLogoProps> = ({
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
    sm: { title: 'text-base tracking-[0.22em]', sub: 'text-[9px] tracking-[0.28em]' },
    md: { title: 'text-xl tracking-[0.25em]', sub: 'text-[10px] tracking-[0.32em]' },
    lg: { title: 'text-2xl tracking-[0.28em]', sub: 'text-[12px] tracking-[0.38em]' }
  };

  const isGold = variant === 'gold';
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Precision Architectural Compass & Vertex Apex Crest */}
      <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full transform transition-transform duration-700 ease-out group-hover:rotate-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vertexGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="40%" stopColor="#D97706" />
              <stop offset="80%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
            <linearGradient id="vertexSteelGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
          </defs>

          {/* Outer Structural Square (Rotated Architectural Blueprint Box) */}
          <rect
            x="22"
            y="22"
            width="76"
            height="76"
            rx="8"
            transform="rotate(45 60 60)"
            stroke={isGold ? 'url(#vertexGoldGrad)' : isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            className="opacity-75"
          />

          {/* Master Vertex 'V' Triangle Pyramid Structure */}
          <path
            d="M32 36L60 92L88 36"
            stroke={isGold ? 'url(#vertexGoldGrad)' : isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Compass Drafting Crosshair */}
          <path
            d="M44 56H76"
            stroke="url(#vertexSteelGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M60 26V74"
            stroke="url(#vertexSteelGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />

          {/* Apex Pivot Point */}
          <circle cx="60" cy="92" r="3.5" fill="#F5D061" />
          <circle cx="60" cy="24" r="2.5" fill="#CBD5E1" />
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
        >
          VERTEX
        </span>
        <span
          className={`font-sans uppercase font-medium transition-colors duration-300 ${
            isGold
              ? 'text-amber-400/90'
              : isLight
              ? 'text-neutral-400'
              : 'text-neutral-500'
          } ${textSizes[size].sub}`}
        >
          CONTRACTING & INTERIORS • UAE
        </span>
      </div>
    </div>
  );
};
