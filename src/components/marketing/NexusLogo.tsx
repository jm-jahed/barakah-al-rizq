import React from 'react';

interface NexusLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export const NexusLogo: React.FC<NexusLogoProps> = ({
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
      {/* High-Growth Geometric Monogram Crest */}
      <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nexusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="40%" stopColor="#EAB308" />
              <stop offset="80%" stopColor="#CA8A04" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
            <linearGradient id="nexusCyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Hexagonal Tech Matrix Frame */}
          <polygon
            points="60,10 105,35 105,85 60,110 15,85 15,35"
            stroke={isGold ? 'url(#nexusGoldGrad)' : isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="2.5"
            strokeDasharray="5 3"
            fill="none"
            className="opacity-80"
          />

          {/* Dynamic Scaling Apex 'N' Wings */}
          <path
            d="M36 82V38L62 68L84 38V82"
            stroke={isGold ? 'url(#nexusGoldGrad)' : isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Upward Growth Trajectory Vector */}
          <path
            d="M62 68L84 38L96 50"
            stroke="url(#nexusCyanGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="84" cy="38" r="3.5" fill="#06B6D4" />

          {/* Core Energy Center */}
          <circle cx="60" cy="60" r="3" fill="#FDE047" />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-yellow-500/10 blur-md rounded-full pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold uppercase transition-colors duration-300 ${
            isGold
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100'
              : isLight
              ? 'text-white'
              : 'text-neutral-900'
          } ${textSizes[size].title}`}
        >
          NEXUS
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
          GROWTH ATELIER • DUBAI
        </span>
      </div>
    </div>
  );
};
