import React from 'react';
import { X, Heart, Calendar, ShieldCheck, Sparkles, Phone, Clock, User, Check } from 'lucide-react';
import { WellnessCatalogItem } from '@/data/wellnessCatalogData';

interface WellnessSessionModalProps {
  item: WellnessCatalogItem | null;
  onClose: () => void;
  onBookDirect: (item: WellnessCatalogItem) => void;
  isSaved: boolean;
  onToggleSave: (item: WellnessCatalogItem) => void;
}

export const WellnessSessionModal: React.FC<WellnessSessionModalProps> = ({
  item,
  onClose,
  onBookDirect,
  isSaved,
  onToggleSave
}) => {
  if (!item) return null;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Aura Wellness Sanctuary Concierge! I would like to book a spot for "${item.title}" (AED ${item.priceAED.toLocaleString()}, Instructor: ${item.instructor}). Please confirm schedule availability in Downtown Dubai.`
    );
    window.open(`https://wa.me/971508887766?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/70 my-auto text-zinc-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Visual Column */}
          <div className="md:col-span-6 relative aspect-square md:aspect-auto bg-zinc-900 overflow-hidden">
            <img
              src={item.heroImage}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

            {/* Bottom In-Image Strip */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">Duration</span>
                <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> {item.duration}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Studio Zone</span>
                <span className="text-xs font-mono font-bold text-amber-300">Downtown Pavilion</span>
              </div>
            </div>
          </div>

          {/* Dossier Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Discipline & Price */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                  {item.disciplineName}
                </span>
                <div className="text-right">
                  <span className="text-xl font-mono font-extrabold text-amber-400">
                    AED {item.priceAED.toLocaleString()}
                  </span>
                  {item.originalPriceAED && (
                    <span className="text-xs font-mono text-zinc-500 line-through block">
                      AED {item.originalPriceAED.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Instructor */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-white leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs font-mono text-amber-300/90 mt-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Led by {item.instructor}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Atelier Specs */}
              <div className="space-y-2 p-3.5 rounded-xl bg-[#14110E] border border-zinc-800 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Intensity:</span>
                  <span className="text-zinc-200">{item.intensity}</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Class Size:</span>
                  <span className="text-zinc-200">{item.capacity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Amenities:</span>
                  <span className="text-emerald-400">Manduka Mats &amp; Towels Provided</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                  Therapeutic Benefits
                </span>
                {item.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onBookDirect(item)}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Mat / Session</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleSave(item)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-amber-500 text-black border-amber-400'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-amber-400 hover:border-amber-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full py-2.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Concierge Booking</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
