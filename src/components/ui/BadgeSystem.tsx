'use client';

import React from 'react';
import { CheckCircle2, Globe2, Activity, Clock } from 'lucide-react';

export type BadgeType = 'VERIFIED' | 'LIVE' | 'ILLUSTRATIVE' | 'CONCEPT' | 'IN PROGRESS';

interface BadgeProps {
  type: BadgeType;
  customText?: string;
  className?: string;
}

export const BadgeSystem: React.FC<BadgeProps> = ({ type, customText, className = '' }) => {
  switch (type) {
    case 'VERIFIED':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm select-none ${className}`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{customText || 'VERIFIED PLATFORM'}</span>
        </span>
      );

    case 'LIVE':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 shadow-sm select-none ${className}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{customText || 'LIVE SYSTEM'}</span>
        </span>
      );

    case 'ILLUSTRATIVE':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm select-none ${className}`}>
          <Globe2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{customText || 'ILLUSTRATIVE SHOWCASE'}</span>
        </span>
      );

    case 'CONCEPT':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-500/30 shadow-sm select-none ${className}`}>
          <Activity className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>{customText || 'CONCEPT PROTOTYPE'}</span>
        </span>
      );

    case 'IN PROGRESS':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-sm select-none ${className}`}>
          <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>{customText || 'IN PROGRESS'}</span>
        </span>
      );

    default:
      return null;
  }
};

export default BadgeSystem;
