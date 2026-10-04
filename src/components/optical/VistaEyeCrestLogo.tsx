import React from 'react';

interface VistaEyeCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const VistaEyeCrestLogo: React.FC<VistaEyeCrestLogoProps> = ({
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
        className="w-full h-full text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
      >
        <defs>
          <linearGradient id="vistaEyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="vistaEyeBackglow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Precision Optical Diamond Shield */}
        <polygon
          points="32,4 58,24 48,58 16,58 6,24"
          stroke="url(#vistaEyeGrad)"
          strokeWidth="1.8"
          fill="url(#vistaEyeBackglow)"
        />

        {/* Optical Lens Iris Contour */}
        <ellipse
          cx="32"
          cy="31"
          rx="20"
          ry="12"
          stroke="url(#vistaEyeGrad)"
          strokeWidth="1.8"
        />

        {/* Central Pupil & Optical Precision Reticle */}
        <circle
          cx="32"
          cy="31"
          r="6.5"
          fill="url(#vistaEyeGrad)"
          opacity="0.9"
        />
        <circle
          cx="32"
          cy="31"
          r="2.5"
          fill="#FFFFFF"
        />

        {/* Optical Reticle Crosshairs */}
        <line x1="32" y1="14" x2="32" y2="19" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="43" x2="32" y2="48" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="31" x2="20" y2="31" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="31" x2="49" y2="31" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />

        {/* Precision Diopter Sparkle */}
        <circle cx="27" cy="27" r="1.2" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
