"use client";

import React from "react";

interface FlagIconProps {
  countryCode: string;
  className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, className = "w-4 h-3" }) => {
  const code = countryCode.toLowerCase();

  switch (code) {
    case "gb": // United Kingdom
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );

    case "ae": // United Arab Emirates
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="10" fill="#00732f" />
          <rect y="10" width="60" height="10" fill="#ffffff" />
          <rect y="20" width="60" height="10" fill="#000000" />
          <rect width="15" height="30" fill="#ff0000" />
        </svg>
      );

    case "sa": // Saudi Arabia
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#006c35" />
          <path d="M12 18h36v2H12z" fill="#ffffff" opacity="0.9" />
          <text x="30" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            🇸🇦
          </text>
        </svg>
      );

    case "bd": // Bangladesh
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#006a4e" />
          <circle cx="26" cy="15" r="9" fill="#f42a41" />
        </svg>
      );

    case "fr": // France
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="20" height="30" fill="#002395" />
          <rect x="20" width="20" height="30" fill="#ffffff" />
          <rect x="40" width="20" height="30" fill="#ed2939" />
        </svg>
      );

    case "de": // Germany
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="10" fill="#000000" />
          <rect y="10" width="60" height="10" fill="#dd0000" />
          <rect y="20" width="60" height="10" fill="#ffce00" />
        </svg>
      );

    case "es": // Spain
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="7.5" fill="#aa151b" />
          <rect y="7.5" width="60" height="15" fill="#f1bf00" />
          <rect y="22.5" width="60" height="7.5" fill="#aa151b" />
          <circle cx="15" cy="15" r="3" fill="#aa151b" opacity="0.8" />
        </svg>
      );

    case "it": // Italy
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="20" height="30" fill="#009246" />
          <rect x="20" width="20" height="30" fill="#ffffff" />
          <rect x="40" width="20" height="30" fill="#ce2b37" />
        </svg>
      );

    case "pt": // Portugal
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="24" height="30" fill="#046a38" />
          <rect x="24" width="36" height="30" fill="#da291c" />
          <circle cx="24" cy="15" r="5" fill="#ffc72c" />
        </svg>
      );

    case "in": // India
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="10" fill="#ff9933" />
          <rect y="10" width="60" height="10" fill="#ffffff" />
          <rect y="20" width="60" height="10" fill="#138808" />
          <circle cx="30" cy="15" r="3.5" fill="#000080" />
        </svg>
      );

    case "tr": // Turkey
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#e30a17" />
          <circle cx="24" cy="15" r="8" fill="#ffffff" />
          <circle cx="26" cy="15" r="6.5" fill="#e30a17" />
          <polygon points="32,15 36,13.5 34.5,17.5 34.5,12.5 36,16.5" fill="#ffffff" />
        </svg>
      );

    case "cn": // China
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#de2910" />
          <polygon points="10,4 12,10 7,6 13,6 8,10" fill="#ffde00" />
          <circle cx="18" cy="4" r="1.2" fill="#ffde00" />
          <circle cx="22" cy="7" r="1.2" fill="#ffde00" />
          <circle cx="22" cy="12" r="1.2" fill="#ffde00" />
          <circle cx="18" cy="15" r="1.2" fill="#ffde00" />
        </svg>
      );

    case "jp": // Japan
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#ffffff" />
          <circle cx="30" cy="15" r="8.5" fill="#bc002d" />
        </svg>
      );

    case "kr": // South Korea
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#ffffff" />
          <circle cx="30" cy="15" r="7" fill="#cd2e3a" />
          <path d="M 30,8 A 7,7 0 0,0 30,22 A 3.5,3.5 0 0,0 30,15 A 3.5,3.5 0 0,1 30,8" fill="#0047a0" />
        </svg>
      );

    case "us": // USA
      return (
        <svg viewBox="0 0 60 30" className={`inline-block rounded-xs shadow-xs ${className}`}>
          <rect width="60" height="30" fill="#b22234" />
          <line x1="0" y1="4.6" x2="60" y2="4.6" stroke="#fff" strokeWidth="2.3" />
          <line x1="0" y1="9.2" x2="60" y2="9.2" stroke="#fff" strokeWidth="2.3" />
          <line x1="0" y1="13.8" x2="60" y2="13.8" stroke="#fff" strokeWidth="2.3" />
          <line x1="0" y1="18.4" x2="60" y2="18.4" stroke="#fff" strokeWidth="2.3" />
          <line x1="0" y1="23" x2="60" y2="23" stroke="#fff" strokeWidth="2.3" />
          <line x1="0" y1="27.6" x2="60" y2="27.6" stroke="#fff" strokeWidth="2.3" />
          <rect width="26" height="16.1" fill="#3c3b6e" />
        </svg>
      );

    default:
      return (
        <span className={`inline-flex items-center justify-center font-mono text-[9px] bg-slate-800 text-slate-300 rounded ${className}`}>
          {countryCode.toUpperCase().slice(0, 2)}
        </span>
      );
  }
};
