import React from 'react';

interface ElaneCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ElaneCrestLogo: React.FC<ElaneCrestLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const dimensions = {
    sm: { box: 'w-8 h-8', px: 32 },
    md: { box: 'w-10 h-10', px: 40 },
    lg: { box: 'w-14 h-14', px: 56 }
  }[size];

  return (
    <div className={`relative flex items-center justify-center ${dimensions.box} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]"
      >
        <defs>
          <linearGradient id="elaneGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient id="elaneShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Architectural Diamond Shield */}
        <polygon
          points="32,4 58,24 58,40 32,60 6,40 6,24"
          stroke="url(#elaneGoldGrad)"
          strokeWidth="1.5"
          fill="url(#elaneShimmer)"
        />

        {/* Inner Guilloché Framing Lines */}
        <polygon
          points="32,9 53,25 53,39 32,55 11,39 11,25"
          stroke="url(#elaneGoldGrad)"
          strokeWidth="0.8"
          strokeDasharray="3 2"
        />

        {/* Haute Couture Monogram Crest "É" with Tailoring Needles */}
        {/* Vertical Backbone */}
        <line x1="24" y1="20" x2="24" y2="44" stroke="url(#elaneGoldGrad)" strokeWidth="2" strokeLinecap="round" />
        {/* Top Horizontal Bar */}
        <line x1="24" y1="20" x2="42" y2="20" stroke="url(#elaneGoldGrad)" strokeWidth="2" strokeLinecap="round" />
        {/* Middle Tailoring Needle Bar with Eyelet */}
        <path d="M24 32 H38" stroke="url(#elaneGoldGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="32" r="1" fill="#FDE68A" />
        {/* Bottom Horizontal Bar */}
        <line x1="24" y1="44" x2="42" y2="44" stroke="url(#elaneGoldGrad)" strokeWidth="2" strokeLinecap="round" />

        {/* Haute Couture French Accent Motif */}
        <path d="M34 13 L39 16" stroke="url(#elaneGoldGrad)" strokeWidth="2" strokeLinecap="round" />

        {/* Dubai DIFC Star Sparkles */}
        <circle cx="32" cy="7" r="1.5" fill="#FDE68A" />
        <circle cx="48" cy="32" r="1" fill="#FDE68A" opacity="0.8" />
        <circle cx="16" cy="32" r="1" fill="#FDE68A" opacity="0.8" />
      </svg>
    </div>
  );
};
