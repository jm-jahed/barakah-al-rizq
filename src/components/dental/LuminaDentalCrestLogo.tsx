import React from 'react';

interface LuminaDentalCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LuminaDentalCrestLogo: React.FC<LuminaDentalCrestLogoProps> = ({
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
        className="w-full h-full text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
      >
        <defs>
          <linearGradient id="luminaDentalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0E7490" />
          </linearGradient>
          <linearGradient id="luminaBackglow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#083344" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Sovereign Dental Shield */}
        <polygon
          points="32,4 56,16 56,44 32,60 8,44 8,16"
          stroke="url(#luminaDentalGrad)"
          strokeWidth="1.8"
          fill="url(#luminaBackglow)"
        />

        {/* Inner Diamond Brilliant Luster Orbit */}
        <circle
          cx="32"
          cy="32"
          r="21"
          stroke="url(#luminaDentalGrad)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Sculpted Enamel Crown Tooth Silhouette */}
        <path
          d="M22 22 C22 17, 28 16, 32 19 C36 16, 42 17, 42 22 C42 30, 40 37, 36 46 C34 50, 33 50, 32 44 C31 50, 30 50, 28 46 C24 37, 22 30, 22 22 Z"
          fill="url(#luminaDentalGrad)"
          fillOpacity="0.3"
          stroke="url(#luminaDentalGrad)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Luminescence Optical Star / 3D Guided Precision Accent */}
        <path
          d="M32 23 L33.5 28.5 L39 30 L33.5 31.5 L32 37 L30.5 31.5 L25 30 L30.5 28.5 Z"
          fill="#FFFFFF"
        />

        {/* Micro Dental Arch Nodes */}
        <circle cx="32" cy="9" r="1.5" fill="#A5F3FC" />
        <circle cx="16" cy="20" r="1.2" fill="#A5F3FC" opacity="0.8" />
        <circle cx="48" cy="20" r="1.2" fill="#A5F3FC" opacity="0.8" />
        <circle cx="32" cy="54" r="1.2" fill="#A5F3FC" opacity="0.8" />
      </svg>
    </div>
  );
};
