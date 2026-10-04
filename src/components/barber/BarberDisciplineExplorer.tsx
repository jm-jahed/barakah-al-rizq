import React from 'react';
import { Scissors, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface BarberDiscipline {
  id: string;
  name: string;
  tagline: string;
  count: number;
}

interface BarberDisciplineExplorerProps {
  activeDiscipline: string;
  onSelectDiscipline: (id: string) => void;
  disciplines: BarberDiscipline[];
}

export const BarberDisciplineExplorer: React.FC<BarberDisciplineExplorerProps> = ({
  activeDiscipline,
  onSelectDiscipline,
  disciplines,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold">
            Grooming Disciplines & Executive Rituals
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Specialized Gentlemen's Parlor Services
          </h3>
        </div>
        <button
          onClick={() => onSelectDiscipline('all')}
          className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
            activeDiscipline === 'all'
              ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-sm'
              : 'text-neutral-400 border-neutral-700/60 hover:text-white hover:border-neutral-500'
          }`}
        >
          All Rituals (160)
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
                  ? 'bg-gradient-to-b from-amber-950/80 to-neutral-900 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/50'
                  : 'bg-neutral-900/50 border-neutral-800/80 hover:border-amber-500/40 hover:bg-neutral-800/60'
              }`}
            >
              <div className="flex items-start justify-between w-full mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'bg-neutral-800 text-amber-400 group-hover:bg-amber-500/20'
                  }`}
                >
                  <Scissors className="w-3.5 h-3.5" />
                </div>
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-amber-400/20 text-amber-200' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {dept.count}
                </span>
              </div>

              <div>
                <p
                  className={`text-xs font-bold line-clamp-2 leading-tight transition-colors ${
                    isActive ? 'text-amber-200' : 'text-neutral-200 group-hover:text-white'
                  }`}
                >
                  {dept.name}
                </p>
                <p className="text-[9px] text-neutral-400 mt-1 line-clamp-1 font-mono">
                  {dept.tagline.split(',')[0]}
                </p>
              </div>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
