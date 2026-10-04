import React from 'react';

interface PatisserieCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PatisserieCrestLogo: React.FC<PatisserieCrestLogoProps> = ({
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
          <linearGradient id="patisserieGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="patisserieGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Hexagonal Guilloché Frame */}
        <polygon
          points="32,4 58,18 58,46 32,60 6,46 6,18"
          stroke="url(#patisserieGold)"
          strokeWidth="1.5"
          fill="url(#patisserieGlow)"
        />

        {/* Inner Octagonal Precision Ring */}
        <circle
          cx="32"
          cy="32"
          r="23"
          stroke="url(#patisserieGold)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Royal Fleur & Pastry Whisk Crest */}
        {/* Central Flourish / Crown */}
        <path
          d="M32 16 L34 23 L41 21 L37 28 L43 32 L36 35 L38 42 L32 38 L26 42 L28 35 L21 32 L27 28 L23 21 L30 23 Z"
          fill="url(#patisserieGold)"
          opacity="0.9"
        />

        {/* Golden Tiered Cake Base */}
        <path
          d="M22 45 H42 V47 C42 48.5 40.5 50 38.5 50 H25.5 C23.5 50 22 48.5 22 47 Z"
          fill="url(#patisserieGold)"
        />
        <path
          d="M25 40 H39 V43 H25 Z"
          stroke="url(#patisserieGold)"
          strokeWidth="1"
        />

        {/* Dubai DIFC Star Accent */}
        <circle cx="32" cy="12" r="1.5" fill="#FDE68A" />
        <circle cx="16" cy="32" r="1" fill="#FDE68A" opacity="0.7" />
        <circle cx="48" cy="32" r="1" fill="#FDE68A" opacity="0.7" />
      </svg>
    </div>
  );
};
