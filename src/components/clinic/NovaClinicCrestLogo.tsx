import React from 'react';

interface NovaClinicCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const NovaClinicCrestLogo: React.FC<NovaClinicCrestLogoProps> = ({
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
          <linearGradient id="novaClinicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="novaBackglow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Hexagonal Medical Precision Shield */}
        <polygon
          points="32,4 58,18 58,46 32,60 6,46 6,18"
          stroke="url(#novaClinicGrad)"
          strokeWidth="1.8"
          fill="url(#novaBackglow)"
        />

        {/* Inner Caduceus Cross DNA Orbit */}
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="url(#novaClinicGrad)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Royal Clinical Cross with Asclepius Caduceus Rod */}
        {/* Horizontal Cross Bar */}
        <rect x="18" y="27" width="28" height="10" rx="3" fill="url(#novaClinicGrad)" opacity="0.85" />
        {/* Vertical Cross Bar */}
        <rect x="27" y="18" width="10" height="28" rx="3" fill="url(#novaClinicGrad)" opacity="0.85" />

        {/* Central Pulse Beat & Heart Spark */}
        <path
          d="M23 32 H28 L30 26 L34 38 L36 32 H41"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dubai DHA License Accreditation Star */}
        <circle cx="32" cy="10" r="1.5" fill="#BAE6FD" />
        <circle cx="12" cy="32" r="1" fill="#BAE6FD" opacity="0.7" />
        <circle cx="52" cy="32" r="1" fill="#BAE6FD" opacity="0.7" />
      </svg>
    </div>
  );
};
