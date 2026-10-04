'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, RefreshCw, Calendar, CheckCircle2 } from 'lucide-react';
import { MOVING_CHECKLIST_DATA, ChecklistTask } from '@/data/movingData';

export const MovingChecklist: React.FC = () => {
  const [tasks, setTasks] = useState<ChecklistTask[]>(MOVING_CHECKLIST_DATA);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const categories = ['All', '4 Weeks Before', '2 Weeks Before', '1 Week Before', 'Moving Day', 'After Moving'];

  const filteredTasks = tasks.filter((t) => {
    if (activeCategory !== 'All' && t.category !== activeCategory) return false;
    return true;
  });

  return (
    <section id="checklist" className="py-24 bg-[#0A0806] relative border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              INTERACTIVE RELOCATION PLANNER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
              Your 30-Day Moving Checklist.
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              Track essential developer permits, DEWA disconnections, telecom moves, and packing milestones. Click to mark off items as you prepare.
            </p>
          </div>

          {/* Counter Progress */}
          <div className="p-4 rounded-2xl bg-[#14100C] border border-amber-500/30 font-mono text-xs flex items-center gap-4 self-start md:self-auto">
            <div>
              <span className="text-slate-400 block text-[10px]">CHECKLIST COMPLETION</span>
              <span className="text-xl font-bold text-amber-400">
                {completedCount} / {totalCount} Done ({progressPercent}%)
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-amber-500/40 flex items-center justify-center font-bold text-amber-300 text-xs">
              {progressPercent}%
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-amber-950/80 border border-amber-400 text-amber-300 shadow-md'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTasks.map((t) => (
            <div
              key={t.id}
              onClick={() => toggleTask(t.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                t.completed
                  ? 'bg-emerald-950/20 border-emerald-500/30 opacity-80'
                  : 'bg-[#120F0C] border-slate-800 hover:border-amber-500/40'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {t.completed ? (
                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Square className="w-5 h-5 text-slate-500" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-950 border border-amber-500/30">
                    {t.category}
                  </span>
                </div>
                <h4 className={`text-sm font-bold ${t.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                  {t.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
