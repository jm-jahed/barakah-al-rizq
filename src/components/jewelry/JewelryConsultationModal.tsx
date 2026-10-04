import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Phone, Gem, Crown, ArrowRight } from 'lucide-react';
import { JewelryItem } from '@/data/jewelryCatalogData';

interface JewelryConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: JewelryItem | null;
  customQuote?: any;
}

const BOUTIQUE_SALONS = [
  { id: 'difc', name: 'DIFC Gate Village, Building 03 — Haute Joaillerie Private Vault' },
  { id: 'dubai-mall', name: 'The Dubai Mall — Fashion Avenue VIP Salon & Champagne Lounge' },
  { id: 'galleria', name: 'The Galleria Al Maryah Island, Abu Dhabi — Sovereign Suite' }
];

const VIEWING_SLOTS = [
  '11:00 AM (Morning Diamond Sorting & Inspection)',
  '02:30 PM (Afternoon Private Salon Appointment)',
  '05:00 PM (Sunset VIP Viewing & Champagne Service)',
  '07:30 PM (Evening High Complication Watch Private Preview)'
];

export const JewelryConsultationModal: React.FC<JewelryConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
  customQuote
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+971 50 ');
  const [email, setEmail] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(BOUTIQUE_SALONS[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-09-18');
  const [selectedTime, setSelectedTime] = useState(VIEWING_SLOTS[1]);
  const [notes, setNotes] = useState(
    selectedItem ? `Private viewing of: ${selectedItem.title}` : customQuote ? `Bespoke Quote Review: ${customQuote.title}` : 'Diamond Solitaire & Emerald Suite Viewing'
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const msg = `Hi Maison D'Or! I would like to confirm a private appointment at ${selectedSalon}:%0A- Client: ${fullName || 'VIP Client'}%0A- Phone: ${phone}%0A- Date/Time: ${selectedDate} at ${selectedTime}%0A- Subject: ${notes}`;
    window.open(`https://wa.me/971508822000?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/70 my-auto text-zinc-100 p-6 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Private Appointment Reserved</h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
              Your appointment at <strong>{BOUTIQUE_SALONS.find(s => s.id === selectedSalon)?.name}</strong> has been secured for {selectedDate}. Our Private Client Director will contact you via WhatsApp to arrange chauffeur escort.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDirectWhatsApp}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs uppercase"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                <Crown className="w-3.5 h-3.5" />
                <span>Private Client Service</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Reserve Salon Viewing
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Enjoy an exclusive 1-on-1 private viewing with our Master Gemologist at our DIFC Gate Village or Dubai Mall VIP salons.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="block text-zinc-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="H.E. / Sheikh / Lady / Mr. / Ms."
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 mb-1">UAE Contact (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Email Dossier</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@luxury.ae"
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Preferred Boutique Salon</label>
                <select
                  value={selectedSalon}
                  onChange={(e) => setSelectedSalon(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                >
                  {BOUTIQUE_SALONS.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 mb-1">Viewing Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Private Time Slot</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  >
                    {VIEWING_SLOTS.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Curated Pieces of Interest</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-amber-950/50 transition-all"
            >
              <span>Confirm Private Salon Viewing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
