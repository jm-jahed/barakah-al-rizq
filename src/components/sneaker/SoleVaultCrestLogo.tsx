import React from 'react';

interface SoleVaultCrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SoleVaultCrestLogo: React.FC<SoleVaultCrestLogoProps> = ({
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
          <linearGradient id="soleVaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="vaultBackglow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Industrial Vault Octagon Outer Shield */}
        <polygon
          points="20,4 44,4 60,20 60,44 44,60 20,60 4,44 4,20"
          stroke="url(#soleVaultGrad)"
          strokeWidth="1.8"
          fill="url(#vaultBackglow)"
        />

        {/* Inner High-Tension Guilloché Ring */}
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="url(#soleVaultGrad)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* High-Top Sneaker Silhouette + Vault Lock Monogram */}
        {/* Sneaker Sole Base */}
        <path
          d="M16 43 C20 43, 24 44, 32 44 C42 44, 46 43, 48 41 C48 39, 45 37, 42 36 L38 31 C37 29, 36 26, 36 21 C36 19, 34 18, 32 18 L26 19 C25 21, 24 24, 21 28 L17 33 C15 36, 15 39, 16 43 Z"
          stroke="url(#soleVaultGrad)"
          strokeWidth="1.5"
          fill="url(#vaultBackglow)"
        />

        {/* Tread Pattern Stripes */}
        <line x1="20" y1="41" x2="22" y2="39" stroke="url(#soleVaultGrad)" strokeWidth="1.2" />
        <line x1="26" y1="41" x2="28" y2="39" stroke="url(#soleVaultGrad)" strokeWidth="1.2" />
        <line x1="32" y1="41" x2="34" y2="39" stroke="url(#soleVaultGrad)" strokeWidth="1.2" />
        <line x1="38" y1="41" x2="40" y2="39" stroke="url(#soleVaultGrad)" strokeWidth="1.2" />

        {/* Dubai Vault Verified Star */}
        <circle cx="32" cy="11" r="1.5" fill="#FDE68A" />
        <circle cx="10" cy="32" r="1" fill="#FDE68A" opacity="0.8" />
        <circle cx="54" cy="32" r="1" fill="#FDE68A" opacity="0.8" />
      </svg>
    </div>
  );
};
