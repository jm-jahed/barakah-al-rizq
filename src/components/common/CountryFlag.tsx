"use client";

import React from "react";

export type CountryCode =
  | "AE"
  | "SA"
  | "QA"
  | "KW"
  | "BH"
  | "OM"
  | "US"
  | "BD"
  | "IN"
  | "GB"
  | "FR"
  | "DE"
  | "ES"
  | "TR"
  | "CN"
  | "JP";

interface CountryFlagProps {
  country: CountryCode | string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  country,
  className = "",
  size = "md",
}) => {
  const code = (country || "AE").toUpperCase();

  const sizeClasses = {
    xs: "w-3.5 h-2.5",
    sm: "w-4 h-3",
    md: "w-5 h-3.5",
    lg: "w-6 h-4",
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  const renderFlagContent = () => {
    switch (code) {
      // 🇦🇪 United Arab Emirates
      case "AE":
      case "AED":
      case "AR":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#00732f" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#000" d="M0 320h640v160H0z" />
            <path fill="#f00" d="M0 0h160v480H0z" />
          </svg>
        );

      // 🇸🇦 Saudi Arabia
      case "SA":
      case "SAR":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#006c35" d="M0 0h640v480H0z" />
            <g fill="#fff">
              <path d="M190 220h260v12H190z" />
              <path d="M175 226l20-8v16z" />
              <circle cx="210" cy="226" r="6" />
              <path d="M220 180c10-15 30-15 40 0 10-15 30-15 40 0v20h-80v-20z" opacity="0.9" />
              <path d="M330 180c10-15 30-15 40 0 10-15 30-15 40 0v20h-80v-20z" opacity="0.9" />
            </g>
          </svg>
        );

      // 🇶🇦 Qatar
      case "QA":
      case "QAR":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#8d1b3d" d="M0 0h640v480H0z" />
            <path
              fill="#fff"
              d="M0 0h180l60 26.6-60 26.7 60 26.7-60 26.7 60 26.6-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7 60 26.6-60 26.7 60 26.7-60 26.6H0z"
            />
          </svg>
        );

      // 🇰🇼 Kuwait
      case "KW":
      case "KWD":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#007a3d" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#ce1126" d="M0 320h640v160H0z" />
            <path fill="#000" d="M0 0l160 160v160L0 480z" />
          </svg>
        );

      // 🇧🇭 Bahrain
      case "BH":
      case "BHD":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#ce1126" d="M0 0h640v480H0z" />
            <path
              fill="#fff"
              d="M0 0h180l60 48-60 48 60 48-60 48 60 48-60 48 60 48-60 48 60 48-60 48H0z"
            />
          </svg>
        );

      // 🇴🇲 Oman
      case "OM":
      case "OMR":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#fff" d="M0 0h640v160H0z" />
            <path fill="#db161b" d="M0 160h640v160H0z" />
            <path fill="#008000" d="M0 320h640v160H0z" />
            <path fill="#db161b" d="M0 0h160v480H0z" />
            <g fill="#fff" transform="translate(45, 30) scale(0.6)">
              <path d="M40 10l-15 35h30zM25 45l30 30M55 45l-30 30" stroke="#fff" strokeWidth="4" />
            </g>
          </svg>
        );

      // 🇺🇸 United States
      case "US":
      case "USD":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#bd3d44" d="M0 0h640v480H0z" />
            <path
              stroke="#fff"
              strokeWidth="37"
              d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
            />
            <path fill="#192f5d" d="M0 0h260v260H0z" />
            <g fill="#fff">
              {[40, 85, 130, 175, 220].map((x) =>
                [35, 75, 115, 155, 195, 235].map((y) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />
                ))
              )}
            </g>
          </svg>
        );

      // 🇧🇩 Bangladesh
      case "BD":
      case "BDT":
      case "BN":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#006a4e" d="M0 0h640v480H0z" />
            <circle cx="280" cy="240" r="140" fill="#f42a41" />
          </svg>
        );

      // 🇮🇳 India
      case "IN":
      case "INR":
      case "HI":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#ff9933" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#138808" d="M0 320h640v160H0z" />
            <circle cx="320" cy="240" r="50" fill="none" stroke="#000080" strokeWidth="6" />
            <circle cx="320" cy="240" r="10" fill="#000080" />
            <g stroke="#000080" strokeWidth="2.5">
              {[...Array(24)].map((_, i) => (
                <line
                  key={i}
                  x1="320"
                  y1="240"
                  x2={320 + 48 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={240 + 48 * Math.sin((i * 15 * Math.PI) / 180)}
                />
              ))}
            </g>
          </svg>
        );

      // 🇬🇧 United Kingdom
      case "GB":
      case "UK":
      case "EN":
      case "ENG":
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <clipPath id="gb-saltire">
              <path d="M0 0l640 480M640 0L0 480" />
            </clipPath>
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path stroke="#fff" strokeWidth="80" d="M0 0l640 480M640 0L0 480" />
            <path stroke="#c8102e" strokeWidth="48" d="M0 0l640 480M640 0L0 480" />
            <path stroke="#fff" strokeWidth="120" d="M320 0v480M0 240h640" />
            <path stroke="#c8102e" strokeWidth="72" d="M320 0v480M0 240h640" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#00732f" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#000" d="M0 320h640v160H0z" />
            <path fill="#f00" d="M0 0h160v480H0z" />
          </svg>
        );
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] border border-white/20 shadow-sm flex-shrink-0 ${currentSize} ${className}`}
      style={{ aspectRatio: "4 / 3" }}
      title={code}
    >
      {renderFlagContent()}
    </span>
  );
};
