import React from 'react';

interface GentlemenRoomCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GentlemenRoomCrestLogo: React.FC<GentlemenRoomCrestLogoProps> = ({
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
          <linearGradient id="barberGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="barberBackglow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Sovereign Barber Shield */}
        <polygon
          points="32,4 56,16 56,44 32,60 8,44 8,16"
          stroke="url(#barberGoldGrad)"
          strokeWidth="1.8"
          fill="url(#barberBackglow)"
        />

        {/* Inner Guilloché Orbit */}
        <circle
          cx="32"
          cy="32"
          r="21"
          stroke="url(#barberGoldGrad)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Crossed Damascus Steel Shears */}
        {/* Left Shear Blade */}
        <path
          d="M20 44 L44 20 M20 44 C17 44 15 42 15 39 C15 36 18 36 21 38 L25 41"
          stroke="url(#barberGoldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Right Shear Blade */}
        <path
          d="M44 44 L20 20 M44 44 C47 44 49 42 49 39 C49 36 46 36 43 38 L39 41"
          stroke="url(#barberGoldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Central Traditional Straight Razor Crest Accent */}
        <circle cx="32" cy="32" r="3" fill="#FDE68A" />

        {/* Royal Crown Finial */}
        <path
          d="M25 18 L28 13 L32 16 L36 13 L39 18 Z"
          fill="url(#barberGoldGrad)"
        />

        {/* Micro Barber Stars */}
        <circle cx="32" cy="9" r="1.2" fill="#FDE68A" />
        <circle cx="16" cy="20" r="1" fill="#FDE68A" opacity="0.8" />
        <circle cx="48" cy="20" r="1" fill="#FDE68A" opacity="0.8" />
        <circle cx="32" cy="54" r="1.2" fill="#FDE68A" opacity="0.8" />
      </svg>
    </div>
  );
};
