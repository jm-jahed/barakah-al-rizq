import React from 'react';
import { Eye, Glasses, ShieldCheck, Sun, Sparkles } from 'lucide-react';

interface OpticalDiscipline {
  id: string;
  name: string;
  tagline: string;
  count: number;
}

interface OpticalDisciplineExplorerProps {
  activeDiscipline: string;
  onSelectDiscipline: (id: string) => void;
  disciplines: OpticalDiscipline[];
}

export const OpticalDisciplineExplorer: React.FC<OpticalDisciplineExplorerProps> = ({
  activeDiscipline,
  onSelectDiscipline,
  disciplines,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-sky-400 font-bold">
            Optical Collections & Clinical Services
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Curated Eyewear & Optometric Categories
          </h3>
        </div>
        <button
          onClick={() => onSelectDiscipline('all')}
          className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
            activeDiscipline === 'all'
              ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 shadow-sm'
              : 'text-slate-400 border-slate-700/60 hover:text-white hover:border-slate-500'
          }`}
        >
          All Items (160)
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
        {disciplines.map((dept) => {
          const isActive = activeDiscipline === dept.id;
          return (
            <button
              key={dept.id}
              onClick={() => onSelectDiscipline(dept.id)}
              className={`group text-left p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                isActive
                  ? 'bg-gradient-to-b from-sky-950/80 to-slate-900 border-sky-400/80 shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-sky-400/50'
                  : 'bg-slate-900/50 border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-start justify-between w-full mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-sky-400 text-slate-950 font-bold'
                      : 'bg-slate-800 text-sky-400 group-hover:bg-sky-500/20'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-sky-400/20 text-sky-200' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {dept.count}
                </span>
              </div>

              <div>
                <p
                  className={`text-xs font-bold line-clamp-2 leading-tight transition-colors ${
                    isActive ? 'text-sky-200' : 'text-slate-200 group-hover:text-white'
                  }`}
                >
                  {dept.name}
                </p>
                <p className="text-[9px] text-slate-400 mt-1 line-clamp-1 font-mono">
                  {dept.tagline.split(',')[0]}
                </p>
              </div>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
