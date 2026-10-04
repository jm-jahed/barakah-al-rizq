'use client';

import React from 'react';
import { Info, ShieldAlert } from 'lucide-react';

interface IllustrativeDisclosureProps {
  variant?: 'banner' | 'badge' | 'inline';
  text?: string;
  className?: string;
}

export const IllustrativeDisclosure: React.FC<IllustrativeDisclosureProps> = ({
  variant = 'banner',
  text = 'Concept Showcase / Illustrative Architecture Case Study',
  className = '',
}) => {
  if (variant === 'badge') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/25 shadow-sm select-none ${className}`}
        title="This project is an illustrative concept showcase demonstrating engineering and design capabilities."
      >
        <Info className="w-3 h-3 text-amber-400 shrink-0" />
        <span>{text}</span>
      </span>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-2 text-xs font-mono text-amber-300/80 ${className}`}>
        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div
      className={`p-3.5 sm:p-4 rounded-2xl bg-[#14100D] border border-amber-500/30 text-xs font-mono text-amber-200/90 flex items-start gap-3 shadow-md backdrop-blur-md ${className}`}
    >
      <div className="p-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
        <Info className="w-4 h-4" />
      </div>
      <div className="space-y-0.5">
        <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
          Illustrative Concept Showcase
        </span>
        <p className="text-gray-300 text-[11px] leading-relaxed">
          {text || 'This case study represents an illustrative engineering prototype designed specifically for UAE & GCC commercial scenarios. Metrics and specifications demonstrate architectural capability.'}
        </p>
      </div>
    </div>
  );
};

export default IllustrativeDisclosure;
