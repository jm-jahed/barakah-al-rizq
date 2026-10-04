import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Phone, ShoppingBag, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { JewelryItem } from '@/data/jewelryCatalogData';

interface JewelryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { item: JewelryItem; quantity: number }[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onSelectItem: (item: JewelryItem) => void;
  onBookConsultation: () => void;
}

export const JewelryCartDrawer: React.FC<JewelryCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemove,
  onClear,
  onSelectItem,
  onBookConsultation
}) => {
  if (!isOpen) return null;

  const totalCartAED = cart.reduce((acc, entry) => acc + (entry.item.priceAED * entry.quantity), 0);

  const handleWhatsAppCheckout = () => {
    const lines = cart.map(e => `• ${e.item.title} x${e.quantity} (AED ${(e.item.priceAED * e.quantity).toLocaleString()})`).join('%0A');
    const msg = `Hi Maison D'Or Dubai! I would like to confirm acquisition for the following jewelry pieces:%0A%0A${lines}%0A%0ATotal Value: AED ${totalCartAED.toLocaleString()}%0A%0APlease schedule armored courier delivery or VIP boutique viewing at DIFC Gate Village.`;
    window.open(`https://wa.me/971508822000?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-amber-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-white">
                  Acquisition Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Item List */}
            <div className="mt-6 space-y-4 divide-y divide-zinc-900">
              {cart.length === 0 ? (
                <div className="py-20 text-center text-zinc-500 font-mono text-xs space-y-3">
                  <Gem className="w-10 h-10 mx-auto opacity-30 text-amber-400" />
                  <p>Your acquisition bag is currently empty.</p>
                  <button
                    onClick={onClose}
                    className="text-amber-400 underline uppercase tracking-widest text-[11px]"
                  >
                    Explore 160 Sovereign Creations
                  </button>
                </div>
              ) : (
                cart.map(({ item, quantity }) => (
                  <div key={item.id} className="pt-4 flex gap-4 group">
                    <div
                      onClick={() => {
                        onSelectItem(item);
                        onClose();
                      }}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-black shrink-0 border border-zinc-800 cursor-pointer"
                    >
                      <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            onClick={() => {
                              onSelectItem(item);
                              onClose();
                            }}
                            className="text-xs font-serif font-bold text-white hover:text-amber-300 transition-colors cursor-pointer truncate"
                          >
                            {item.title}
                          </h4>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-zinc-600 hover:text-red-400 p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                          {item.material} • {item.caratWeight}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono pt-1">
                        <span className="text-zinc-400">Qty: {quantity}</span>
                        <span className="text-amber-300 font-bold">
                          AED {(item.priceAED * quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Totals & Checkout */}
          {cart.length > 0 && (
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Insured Armored Delivery:</span>
                  <span className="text-emerald-400 font-bold">COMPLIMENTARY (UAE)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>GIA Origin Dossier &amp; Dossier:</span>
                  <span className="text-white font-bold">INCLUDED</span>
                </div>
                <div className="flex items-center justify-between text-base pt-2 border-t border-zinc-800">
                  <span className="text-white font-bold font-serif">Total Value:</span>
                  <span className="text-xl font-bold text-amber-300">
                    AED {totalCartAED.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>VIP WhatsApp Acquisition Concierge</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-amber-950/50 transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Schedule DIFC Private Viewing</span>
                </button>

                <button
                  onClick={onClear}
                  className="w-full text-center text-[11px] font-mono text-zinc-500 hover:text-red-400 transition-colors py-1"
                >
                  Empty Acquisition Bag
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
