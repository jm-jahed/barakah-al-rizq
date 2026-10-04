import React from 'react';

interface AuraLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
}

export const AuraLogo: React.FC<AuraLogoProps> = ({
  className = '',
  variant = 'emerald',
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

  const isEmerald = variant === 'emerald';
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Precision Engineering Hexagonal Shield Emblem */}
      <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="auraEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="40%" stopColor="#10B981" />
              <stop offset="80%" stopColor="#059669" />
              <stop offset="100%" stopColor="#6EE7B7" />
            </linearGradient>
            <linearGradient id="auraGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Heavy Shield Hexagon Perimeter */}
          <polygon
            points="60,12 106,36 106,84 60,108 14,84 14,36"
            stroke={isEmerald ? 'url(#auraEmeraldGrad)' : isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="3"
            strokeDasharray="6 3"
            fill="none"
            className="opacity-80"
          />

          {/* Inner Protective Delta Architecture */}
          <path
            d="M60 26L92 82H28L60 26Z"
            stroke={isEmerald ? 'url(#auraEmeraldGrad)' : isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Central Precision Energy Pulse Cross */}
          <path
            d="M60 48V68"
            stroke="url(#auraGoldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 58H70"
            stroke="url(#auraGoldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Base Anchor Vertex */}
          <circle cx="60" cy="94" r="3" fill="#10B981" />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-emerald-500/10 blur-md rounded-full pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold uppercase transition-colors duration-300 ${
            isEmerald
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-100'
              : isLight
              ? 'text-white'
              : 'text-neutral-900'
          } ${textSizes[size].title}`}
        >
          AURA
        </span>
        <span
          className={`font-sans uppercase font-medium transition-colors duration-300 ${
            isEmerald
              ? 'text-emerald-400/90'
              : isLight
              ? 'text-neutral-400'
              : 'text-neutral-500'
          } ${textSizes[size].sub}`}
        >
          FACILITY MANAGEMENT • UAE
        </span>
      </div>
    </div>
  );
};
