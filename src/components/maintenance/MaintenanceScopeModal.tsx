'use strict';
import React from 'react';
import { MaintenanceScope } from '@/data/maintenanceCatalogData';
import { X, Clock, Heart, SlidersHorizontal, Truck, CheckCircle2, ShieldCheck, Crown, MapPin, Award, Wrench } from 'lucide-react';

interface MaintenanceScopeModalProps {
  scope: MaintenanceScope | null;
  onClose: () => void;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onBook: (scope: MaintenanceScope) => void;
}

export const MaintenanceScopeModal: React.FC<MaintenanceScopeModalProps> = ({
  scope,
  onClose,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onBook
}) => {
  if (!scope) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-neutral-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl my-8 text-neutral-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Media & Badges */}
          <div className="md:col-span-5 relative h-64 md:h-auto min-h-[300px] bg-neutral-900">
            <img
              src={scope.heroImage}
              alt={scope.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-950" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-neutral-950 font-bold text-xs uppercase tracking-wider w-max shadow-lg">
                <MapPin className="w-3.5 h-3.5" />
                {scope.communityTarget.split(' ')[0]}
              </span>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <span className="px-2.5 py-1 rounded-md bg-neutral-900/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 font-semibold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  {scope.responseTime}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-neutral-900/90 backdrop-blur-md border border-neutral-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {scope.durationHours}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Technical Scope */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              {/* Category & Title */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                  {scope.categoryName} • {scope.serviceType}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white leading-tight">
                  {scope.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                {scope.description}
              </p>

              {/* Technical Standards */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2.5">
                  Certified Standards & Compliance
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {scope.certifiedStandards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-emerald-300"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Roadmap */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Engineering Protocol & Service Steps
                </h4>
                <div className="space-y-2">
                  {scope.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty Notice */}
              <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-emerald-300">{scope.warrantyNotice}</p>
                  <p className="text-neutral-400 text-[11px]">
                    Includes digital before/after thermal diagnostic sign-off.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions & Price */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                  Fixed UAE Rate (AED)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">
                    AED {scope.priceAED.toLocaleString()}
                  </span>
                  {scope.originalPriceAED && (
                    <span className="text-xs text-neutral-500 line-through">
                      AED {scope.originalPriceAED.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => onToggleSave(scope.id)}
                  className={`p-3 rounded-xl border transition-all ${
                    isSaved
                      ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                  title={isSaved ? 'Saved' : 'Save service'}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                <button
                  onClick={() => onToggleCompare(scope.id)}
                  className={`p-3 rounded-xl border transition-all ${
                    isCompared
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                  title={isCompared ? 'Compared' : 'Compare'}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onBook(scope);
                  }}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  <span>Dispatch Van Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
