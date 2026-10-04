import React from 'react';

interface KineticLogoProps {
  className?: string;
  variant?: 'gold' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const KineticLogo: React.FC<KineticLogoProps> = ({
  className = '',
  variant = 'gold',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-14 text-xl'
  };

  const iconSizes = {
    sm: 28,
    md: 38,
    lg: 52
  };

  return (
    <div className={`inline-flex items-center gap-3 font-serif tracking-wider ${sizeClasses[size]} ${className}`}>
      {/* Luxury Shield & Kinetic Bolt Crest SVG */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_12px_rgba(234,179,8,0.4)]"
        >
          {/* Outer Crest Shield Ring */}
          <polygon
            points="32,6 56,18 56,42 32,58 8,42 8,18"
            stroke="url(#goldKineticGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <polygon
            points="32,10 52,20 52,40 32,54 12,40 12,20"
            stroke="url(#goldKineticGrad)"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Kinetic Athletic Bolt */}
          <path
            d="M34 14L22 34H33L30 50L44 28H32L34 14Z"
            fill="url(#goldKineticGrad)"
            stroke="url(#goldKineticGrad)"
            strokeWidth="1"
          />
          
          <defs>
            <linearGradient id="goldKineticGrad" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF08A" />
              <stop offset="0.5" stopColor="#EAB308" />
              <stop offset="1" stopColor="#A16207" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-bold tracking-[0.2em] uppercase text-yellow-200">
            KINETIC
          </span>
          <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-sans font-semibold tracking-widest">
            DUBAI
          </span>
        </div>
        <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-400 font-sans">
          ATHLETIC CLUB & BIOHACKING
        </span>
      </div>
    </div>
  );
};
