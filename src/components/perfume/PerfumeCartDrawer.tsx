import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ShieldCheck, MessageSquare, ArrowRight, CheckCircle2, Gift, Truck } from 'lucide-react';
import { PerfumeItem } from '@/data/perfumeCatalogData';

export interface CartItem {
  perfume: PerfumeItem;
  quantity: number;
}

interface PerfumeCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (perfumeId: string, quantity: number) => void;
  onRemoveItem: (perfumeId: string) => void;
  onClearCart: () => void;
  customCoffret?: any;
}

export const PerfumeCartDrawer: React.FC<PerfumeCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  customCoffret
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('+971 50 ');
  const [deliveryAddress, setDeliveryAddress] = useState('Villa / Penthouse, Palm Jumeirah, Dubai');
  const [selectedEmirate, setSelectedEmirate] = useState('Dubai (Same-Day Express 3 Hours)');
  const [isOrdered, setIsOrdered] = useState(false);

  const itemsSubtotal = cartItems.reduce((acc, item) => acc + (item.perfume.priceAED * item.quantity), 0);
  const coffretTotal = customCoffret ? customCoffret.grandTotalAED : 0;
  const netSubtotal = itemsSubtotal + coffretTotal;
  const vat5Percent = Math.round(netSubtotal * 0.05);
  const grandTotalAED = netSubtotal + vat5Percent;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-amber-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  Fragrance Box & Cart ({cartItems.reduce((a, b) => a + b.quantity, 0) + (customCoffret ? 1 : 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!isOrdered ? (
              <div className="mt-6 space-y-6">
                
                {/* Custom Coffret Summary if Present */}
                {customCoffret && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1.5">
                    <div className="flex justify-between items-center text-amber-400 font-mono font-bold">
                      <span className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5" /> Bespoke Master Coffret</span>
                      <span>AED {customCoffret.grandTotalAED.toLocaleString()}</span>
                    </div>
                    <div className="font-serif font-bold text-zinc-200">{customCoffret.box}</div>
                    <div className="text-[11px] text-zinc-400 italic">&quot;{customCoffret.engraving}&quot;</div>
                    <div className="text-[10px] text-zinc-500">{customCoffret.flaconsCount} Curated Flacons Included</div>
                  </div>
                )}

                {/* Cart Items List */}
                {cartItems.length > 0 ? (
                  <div className="space-y-3">
                    {cartItems.map(item => (
                      <div key={item.perfume.id} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0 bg-zinc-950">
                          <img src={item.perfume.heroImage} alt={item.perfume.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-serif font-bold text-zinc-100 truncate">
                            {item.perfume.title}
                          </h4>
                          <div className="text-[10px] text-amber-400/90 font-mono">
                            {item.perfume.bottleVolume} • {item.perfume.concentration}
                          </div>
                          <div className="text-xs font-bold font-serif text-amber-300 mt-1">
                            AED {(item.perfume.priceAED * item.quantity).toLocaleString()}
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.perfume.id, item.quantity - 1)}
                            className="w-6 h-6 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs hover:bg-zinc-700"
                          >
                            -
                          </button>
                          <span className="text-xs font-mono text-zinc-200">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.perfume.id, item.quantity + 1)}
                            className="w-6 h-6 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs hover:bg-zinc-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  !customCoffret && (
                    <div className="py-16 text-center text-zinc-500 space-y-3">
                      <ShoppingBag className="w-12 h-12 mx-auto text-zinc-700 stroke-1" />
                      <div className="text-sm font-serif text-zinc-400">Your fragrance box is empty</div>
                      <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                        Explore our 160 royal extraits and aged Dehn Al Oud to begin your olfactory acquisition.
                      </p>
                    </div>
                  )
                )}

                {/* Checkout Form */}
                {(cartItems.length > 0 || customCoffret) && (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-4 pt-4 border-t border-zinc-900">
                    <div className="text-xs uppercase font-mono tracking-widest text-amber-400">
                      UAE VIP Delivery Details
                    </div>

                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">Full Name / Title</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Sheikh Rashid / Lady Evelyn"
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">UAE Phone & WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 font-mono focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-zinc-400 block mb-1">Delivery Destination & Emirate</label>
                      <select
                        value={selectedEmirate}
                        onChange={(e) => setSelectedEmirate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500 mb-2"
                      >
                        <option value="Dubai (Same-Day Express 3 Hours)">Dubai (Same-Day Chauffeur 3 Hours)</option>
                        <option value="Abu Dhabi (VIP Courier Next Morning)">Abu Dhabi (VIP Chauffeur Next Morning)</option>
                        <option value="Sharjah & Northern Emirates">Sharjah & Northern Emirates</option>
                      </select>
                      <input
                        type="text"
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Villa / Tower, Community / Street"
                        className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2"
                    >
                      <Truck className="w-4 h-4" />
                      <span>Confirm Order (AED {grandTotalAED.toLocaleString()})</span>
                    </button>
                  </form>
                )}

              </div>
            ) : (
              /* Success State */
              <div className="mt-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-serif font-bold text-zinc-100">
                  Acquisition Confirmed
                </h4>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Thank you, <span className="font-semibold text-amber-300">{customerName}</span>. Your bespoke order has been logged with our Dubai Mall master flacon vault.
                </p>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-left space-y-1.5 font-mono text-zinc-300">
                  <div className="text-[10px] text-amber-400 uppercase">Dispatch Reference: #OR-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>Recipient: {customerName}</div>
                  <div>Delivery: {selectedEmirate}</div>
                  <div className="text-amber-300 font-bold">Total: AED {grandTotalAED.toLocaleString()}</div>
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href={`https://wa.me/971508889999?text=Hello%20Oud%20Royale%20Concierge,%20I%20have%20placed%20order%20for%20${encodeURIComponent(customerName)}%20totaling%20AED%20${grandTotalAED}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp VIP Concierge Confirmation</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsOrdered(false);
                      onClearCart();
                      onClose();
                    }}
                    className="w-full py-2.5 text-xs text-zinc-400 hover:text-white"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guarantee Footer */}
          <div className="pt-6 border-t border-zinc-900 text-center text-[10px] text-zinc-500">
            ESMA Halal & Grasse Master Laboratory Certified • 100% Authentic Guarantee
          </div>

        </div>
      </div>
    </div>
  );
};
