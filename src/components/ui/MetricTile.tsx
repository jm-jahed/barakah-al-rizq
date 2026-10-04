'use client';

import React from 'react';
import { Activity } from 'lucide-react';

interface MetricTileProps {
  label: string;
  value: string;
  sublabel?: string;
  icon?: React.ReactNode;
  isIllustrative?: boolean;
  className?: string;
}

export const MetricTile: React.FC<MetricTileProps> = ({
  label,
  value,
  sublabel,
  icon,
  isIllustrative = true,
  className = '',
}) => {
  return (
    <div
      className={`p-4 rounded-2xl bg-[#14100D] border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between space-y-2 relative overflow-hidden group shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase text-gray-400 font-bold tracking-wider">
          {label}
        </span>
        {icon ? (
          <div className="text-amber-400 opacity-75 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        ) : (
          <Activity className="w-3.5 h-3.5 text-amber-400 opacity-60" />
        )}
      </div>

      <div>
        <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
          {value}
        </div>
        {sublabel && (
          <div className="text-[10px] font-mono text-gray-400 mt-0.5">
            {sublabel}
          </div>
        )}
      </div>

      {isIllustrative && (
        <div className="pt-1.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-amber-400/70">
          <span>ILLUSTRATIVE BENCHMARK</span>
        </div>
      )}
    </div>
  );
};

export default MetricTile;
