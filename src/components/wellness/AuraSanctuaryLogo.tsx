import React from 'react';

interface AuraSanctuaryLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AuraSanctuaryLogo: React.FC<AuraSanctuaryLogoProps> = ({
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
          <linearGradient id="auraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <linearGradient id="auraGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Sacred Geometry Lotus Mandala Outer Ring */}
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="url(#auraGoldGrad)"
          strokeWidth="1.5"
          fill="url(#auraGlow)"
        />

        {/* Inner Subtle Sunbeam Radiance */}
        <circle
          cx="32"
          cy="32"
          r="20"
          stroke="url(#auraGoldGrad)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />

        {/* Sacred Lotus Blossom Petals */}
        {/* Central Lotus Bud */}
        <path
          d="M32 16 C34 22, 38 28, 32 38 C26 28, 30 22, 32 16 Z"
          fill="url(#auraGoldGrad)"
          opacity="0.9"
        />
        {/* Right Petal */}
        <path
          d="M32 38 C39 36, 44 28, 41 21 C36 26, 34 32, 32 38 Z"
          stroke="url(#auraGoldGrad)"
          strokeWidth="1.2"
          fill="url(#auraGlow)"
        />
        {/* Left Petal */}
        <path
          d="M32 38 C25 36, 20 28, 23 21 C28 26, 30 32, 32 38 Z"
          stroke="url(#auraGoldGrad)"
          strokeWidth="1.2"
          fill="url(#auraGlow)"
        />
        {/* Base Water Waves / Calm Basin */}
        <path
          d="M18 43 C22 45, 26 42, 32 42 C38 42, 42 45, 46 43"
          stroke="url(#auraGoldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 47 C26 49, 29 46, 32 46 C35 46, 38 49, 42 47"
          stroke="url(#auraGoldGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Dubai Sanctuary Crown Star */}
        <circle cx="32" cy="11" r="1.5" fill="#FDE68A" />
      </svg>
    </div>
  );
};
