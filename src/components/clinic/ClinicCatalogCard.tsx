import React from 'react';
import { ShieldCheck, Clock, Calendar, ChevronRight, Stethoscope, Award } from 'lucide-react';
import { ClinicCatalogItem } from '@/data/clinicCatalogData';

interface ClinicCatalogCardProps {
  item: ClinicCatalogItem;
  onSelect: (item: ClinicCatalogItem) => void;
  onBook: (item: ClinicCatalogItem) => void;
}

export const ClinicCatalogCard: React.FC<ClinicCatalogCardProps> = ({
  item,
  onSelect,
  onBook,
}) => {
  return (
    <div className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onSelect(item)}>
        <img
          src={item.heroImage}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
          <span className="bg-sky-950/80 backdrop-blur-md border border-sky-400/30 text-sky-200 text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-sky-400" />
            {item.disciplineName.split(' ')[0]}
          </span>
          {item.isBestseller && (
            <span className="bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold">
              Popular Protocol
            </span>
          )}
        </div>

        <div className="absolute top-2.5 right-2.5">
          <span className="bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1">
            <Clock className="w-3 h-3 text-teal-400" />
            {item.duration.split(' ')[0]} {item.duration.split(' ')[1]}
          </span>
        </div>

        {/* Price Tag Overlay at bottom */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-baseline justify-between">
          <div className="bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-500/30">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-mono text-sky-400 font-bold">AED</span>
              <span className="text-base font-extrabold text-white">{item.priceAED.toLocaleString()}</span>
              {item.originalPriceAED && (
                <span className="text-[10px] text-slate-400 line-through">AED {item.originalPriceAED.toLocaleString()}</span>
              )}
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
            {item.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-mono text-teal-400 uppercase tracking-wider font-semibold">
            {item.disciplineName}
          </p>
          <h4
            onClick={() => onSelect(item)}
            className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1 mt-1 cursor-pointer"
          >
            {item.title}
          </h4>

          <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 leading-relaxed">
            {item.description}
          </p>

          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 line-clamp-1 font-mono">
              <Stethoscope className="w-3 h-3 text-sky-400 shrink-0" />
              {item.doctor.split('(')[0]}
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-medium shrink-0 ml-2">
              {item.insuranceBadge}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3.5 pt-2.5 border-t border-slate-800/60 flex items-center gap-2">
          <button
            onClick={() => onSelect(item)}
            className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
          >
            Clinical Dossier
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </button>
          <button
            onClick={() => onBook(item)}
            className="py-1.5 px-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition-all shadow-sm flex items-center gap-1 shrink-0"
          >
            <Calendar className="w-3 h-3" />
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
