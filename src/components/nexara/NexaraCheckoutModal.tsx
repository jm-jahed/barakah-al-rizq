'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Gamepad2, ArrowRight } from 'lucide-react';
import { NexaraStoreItem } from '@/data/nexaraData';

interface NexaraCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: NexaraStoreItem[];
  onClearCart: () => void;
}

export const NexaraCheckoutModal: React.FC<NexaraCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart
}) => {
  const [step, setStep] = useState<number>(1);
  const [gamerTag, setGamerTag] = useState('VOIDRUNNER_77');
  const [pinCode, setPinCode] = useState('7882');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const totalAED = items.reduce((sum, item) => sum + item.priceAED, 0);

  const handleConfirm = () => {
    setConfirmed(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-950 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-slate-100 my-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase font-mono">Cosmetics Unlocked!</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Items successfully deployed to account <strong className="text-cyan-400">{gamerTag}</strong>. Your loadout skins and frames are now equipped in-game.
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              Transaction Ref: #NX-TX-2026-DXB-998
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs"
            >
              Return to Universe
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                DEMO DIGITAL TRANSACTION
              </div>
              <h3 className="text-2xl font-black text-white uppercase font-mono mt-1">Unlock Loadout</h3>
            </div>

            {/* Items Summary */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 max-h-48 overflow-y-auto">
              {items.map((i) => (
                <div key={i.id} className="flex justify-between text-xs">
                  <span className="text-slate-200">{i.name}</span>
                  <span className="font-mono text-amber-400 font-bold">AED {i.priceAED}</span>
                </div>
              ))}
            </div>

            {/* Account Credentials */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-mono">Target Gamertag / ID</label>
                <input
                  type="text"
                  value={gamerTag}
                  onChange={(e) => setGamerTag(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-mono">Demo 2FA Security Pin</label>
                <input
                  type="password"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-mono tracking-widest"
                />
              </div>
            </div>

            {/* Price Total */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-500">Total Demo Cost</div>
                <div className="text-2xl font-mono font-bold text-amber-400">
                  AED {totalAED}
                </div>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">Demo Credits Active</span>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-violet-950/40"
            >
              <span>Confirm Instant Unlock</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
