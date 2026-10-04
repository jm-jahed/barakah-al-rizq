import React from 'react';

interface AetheraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const AetheraLogo: React.FC<AetheraLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  }[size];

  const titleSize = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg sm:text-xl tracking-[0.24em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.28em]'
  }[size];

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Luxury Geometric Hardware Emblem */}
      <div className={`relative ${iconDimensions} rounded-xl bg-gradient-to-br from-[#F5D08A] via-[#B88746] to-[#4A3215] p-[1px] shadow-xl shadow-amber-500/10 flex-shrink-0 group-hover:shadow-amber-500/25 transition-all duration-500`}>
        <div className="w-full h-full bg-[#0C0D10] rounded-[11px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle Internal Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/15 via-transparent to-transparent pointer-events-none" />
          
          {/* Bespoke AETHERA Æ Hex-Crest Vector */}
          <svg 
            viewBox="0 0 40 40" 
            className="w-5/6 h-5/6 text-[#F5D08A] group-hover:scale-110 transition-transform duration-500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="aetheraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE4A0" />
                <stop offset="50%" stopColor="#E5B25D" />
                <stop offset="100%" stopColor="#996E2E" />
              </linearGradient>
              <linearGradient id="aetheraCoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5B25D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFE4A0" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Outer Hexagon Circuit Bevel */}
            <polygon 
              points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" 
              stroke="url(#aetheraGoldGrad)" 
              strokeWidth="1.4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              opacity="0.85" 
            />
            
            {/* Futuristic Æ Monogram Apex */}
            <path 
              d="M20 9L11 27H15L17.5 21.5H24.5M20 9L29 27H25L23 21.5M20 9V27M17 17.5H27" 
              stroke="url(#aetheraGoldGrad)" 
              strokeWidth="1.6" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            
            {/* Precision Micro-Core Point */}
            <circle cx="20" cy="20" r="1.5" fill="#FFE4A0" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className={`font-mono font-bold text-white ${titleSize} leading-tight flex items-center gap-2`}>
          <span>AETHERA</span>
          <span className="text-[8px] sm:text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-400/20 to-amber-500/10 text-amber-300 border border-amber-400/30 font-sans font-semibold">
            UAE
          </span>
        </div>
        {showSubtitle && (
          <div className="text-[9px] sm:text-[10px] tracking-[0.3em] text-white/50 uppercase -mt-0.5 font-sans font-medium">
            Luxury Technology Atelier
          </div>
        )}
      </div>
    </div>
  );
};
