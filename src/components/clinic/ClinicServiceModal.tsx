import React from 'react';
import { X, Calendar, ShieldCheck, Clock, Award, Phone, CheckCircle2, FileText, ChevronRight, Stethoscope } from 'lucide-react';
import { ClinicCatalogItem } from '@/data/clinicCatalogData';

interface ClinicServiceModalProps {
  item: ClinicCatalogItem | null;
  onClose: () => void;
  onBook: (item: ClinicCatalogItem) => void;
}

export const ClinicServiceModal: React.FC<ClinicServiceModalProps> = ({
  item,
  onClose,
  onBook,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-gradient-to-b from-slate-900 to-[#0B132B] border border-sky-500/40 rounded-2xl shadow-2xl shadow-sky-950/80 overflow-hidden my-6">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/60 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-semibold">
              DHA Medical Clinical Dossier • {item.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content container */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Top row with Image and basic metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-sky-500/30 bg-slate-950">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 bg-slate-950/90 text-sky-300 text-[10px] font-mono px-2.5 py-1 rounded border border-sky-500/30">
                  {item.clinicWing}
                </span>
              </div>

              {/* Gallery thumbnails */}
              {item.images && item.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {item.images.map((img, idx) => (
                    <div key={idx} className="aspect-[16/10] rounded-lg overflow-hidden border border-slate-800">
                      <img src={img} alt={`${item.title} preview ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-teal-400 tracking-wider font-semibold uppercase">
                  {item.disciplineName}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {item.subtitle}
                </p>

                {/* Price block */}
                <div className="mt-4 p-3.5 bg-slate-950/70 border border-sky-500/30 rounded-xl flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Official Dubai Tariff</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs font-mono font-bold text-sky-400">AED</span>
                      <span className="text-2xl font-black text-white">{item.priceAED.toLocaleString()}</span>
                      {item.originalPriceAED && (
                        <span className="text-xs text-slate-400 line-through">AED {item.originalPriceAED.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded block">
                      {item.insuranceBadge}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block font-mono flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-teal-400" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-white font-medium">{item.doctor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>DHA Accredited Medical Protocol • Facility License #DHA-2024-8849</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    onBook(item);
                    onClose();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Private Consultation
                </button>
                <a
                  href={`https://wa.me/971523394001?text=Hello%20Nova%20Private%20Clinic,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(item.title)}%20(${item.id})`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  VIP WhatsApp Care
                </a>
              </div>
            </div>
          </div>

          {/* Description & Clinical Features */}
          <div className="border-t border-slate-800 pt-5 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-2">
                Clinical Overview & Protocol Standards
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                {item.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-2">
                Included Clinical Diagnostics & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.clinicalFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient notice */}
            <div className="bg-sky-950/40 border border-sky-500/20 rounded-xl p-3 text-xs text-sky-300 flex items-start gap-2">
              <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                <strong>Patient Advisory:</strong> {item.patientNotice} Direct insurance pre-approval coordinated via our VIP Patient Concierge.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
