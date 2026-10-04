'use client';

import React from 'react';

interface UaeDirhamIconProps {
  className?: string;
  size?: number;
}

export const UaeDirhamIcon: React.FC<UaeDirhamIconProps> = ({
  className = 'w-6 h-6',
  size,
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center font-bold select-none shrink-0 ${className}`}
      style={size ? { width: `${size}px`, height: `${size}px` } : undefined}
      title="UAE Dirham (AED)"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <text
          x="16"
          y="20.5"
          textAnchor="middle"
          fontSize="14"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fill="currentColor"
          className="tracking-tighter"
        >
          د.إ
        </text>
      </svg>
    </span>
  );
};

interface AedPriceDisplayProps {
  amount: number | string;
  period?: string;
  prefix?: string;
  className?: string;
  priceClassName?: string;
}

export const AedPriceDisplay: React.FC<AedPriceDisplayProps> = ({
  amount,
  period,
  prefix = 'Starting from',
  className = '',
  priceClassName = 'text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight',
}) => {
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      {prefix && (
        <span className="text-[11px] font-mono font-medium text-amber-400/90 tracking-wider uppercase">
          {prefix}
        </span>
      )}
      <div className="flex items-baseline gap-2.5 flex-wrap">
        <div className="flex items-center gap-2">
          <UaeDirhamIcon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
          <span className={priceClassName}>
            {typeof amount === 'number' ? amount.toLocaleString() : amount}
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-amber-300/90 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 tracking-widest uppercase">
          AED
        </span>
        {period && (
          <span className="text-xs font-mono text-gray-400">/{period}</span>
        )}
      </div>
    </div>
  );
};
