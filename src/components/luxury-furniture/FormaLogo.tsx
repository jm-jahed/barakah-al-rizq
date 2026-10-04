import React from 'react';

interface FormaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const FormaLogo: React.FC<FormaLogoProps> = ({
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
    sm: 'text-base tracking-[0.24em]',
    md: 'text-lg sm:text-xl tracking-[0.28em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.32em]'
  }[size];

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Architectural Crest Monolith */}
      <div className={`relative ${iconDimensions} rounded-xl bg-gradient-to-br from-[#E6AF73] via-[#9E7A52] to-[#2D2114] p-[1px] shadow-xl shadow-[#E6AF73]/10 flex-shrink-0 group-hover:shadow-[#E6AF73]/25 transition-all duration-500`}>
        <div className="w-full h-full bg-[#141210] rounded-[11px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle Ambient Texture */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E6AF73]/15 via-transparent to-transparent pointer-events-none" />

          {/* Bespoke Architectural F-Monolith Crest Vector */}
          <svg 
            viewBox="0 0 40 40" 
            className="w-5/6 h-5/6 text-[#E6AF73] group-hover:scale-105 transition-transform duration-500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="formaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7DFBF" />
                <stop offset="50%" stopColor="#E6AF73" />
                <stop offset="100%" stopColor="#A87A48" />
              </linearGradient>
            </defs>

            {/* Architectural Column & Monolith Pedestal */}
            <rect 
              x="8" 
              y="6" 
              width="4.5" 
              height="28" 
              rx="1.5" 
              fill="url(#formaGoldGrad)" 
            />

            {/* Upper Cantilever Beam */}
            <path 
              d="M12.5 8H31C32.1 8 33 8.9 33 10V11C33 12.1 32.1 13 31 13H12.5V8Z" 
              fill="url(#formaGoldGrad)" 
            />

            {/* Middle Sculptural Floating Bar */}
            <path 
              d="M12.5 19H25C26.1 19 27 19.9 27 21V21.5C27 22.6 26.1 23.5 25 23.5H12.5V19Z" 
              fill="url(#formaGoldGrad)" 
              opacity="0.9" 
            />

            {/* Micro Foundation Step */}
            <line 
              x1="5" 
              y1="34" 
              x2="35" 
              y2="34" 
              stroke="url(#formaGoldGrad)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              opacity="0.6" 
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className={`font-serif font-bold text-[#F5F2EB] ${titleSize} leading-tight flex items-center gap-2`}>
          <span>FORMA</span>
          <span className="text-[8px] sm:text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#E6AF73]/10 text-[#E6AF73] border border-[#E6AF73]/25 font-sans font-medium">
            ATELIER
          </span>
        </div>
        {showSubtitle && (
          <div className="text-[9px] sm:text-[10px] tracking-[0.32em] text-[#A8A096] uppercase -mt-0.5 font-sans font-medium">
            Architectural Living • UAE
          </div>
        )}
      </div>
    </div>
  );
};
