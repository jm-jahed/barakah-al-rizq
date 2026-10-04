'use client';

import React, { useState } from 'react';
import { useShopPos } from '@/context/ShopPosContext';
import { Lock, X, Delete, Check, ShieldCheck } from 'lucide-react';

interface ShopPosPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetStaffId: string | null;
  onSuccess?: () => void;
}

export const ShopPosPinModal: React.FC<ShopPosPinModalProps> = ({
  isOpen,
  onClose,
  targetStaffId,
  onSuccess,
}) => {
  const { staffList, verifyPin, t } = useShopPos();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const targetStaff = staffList.find((s) => s.id === targetStaffId);

  const handleDigit = (digit: string) => {
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setError(false);

      if (nextPin.length === 4 && targetStaffId) {
        const valid = verifyPin(targetStaffId, nextPin);
        if (valid) {
          setPin('');
          onClose();
          if (onSuccess) onSuccess();
        } else {
          setError(true);
          setTimeout(() => {
            setPin('');
            setError(false);
          }, 800);
        }
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0D14]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xs bg-[#10121A] border border-[#1F2433] rounded-2xl shadow-2xl p-5 flex flex-col items-center select-none">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-lg text-[#718096] hover:text-[#F7FAFC] hover:bg-[#1A1D2B]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Staff Identity */}
        <div className="w-12 h-12 rounded-2xl bg-[#1A1D2B] border border-[#1F2433] flex items-center justify-center text-[#D4AF37] mb-2 shadow-inner">
          <Lock className="w-5 h-5" />
        </div>

        <h3 className="text-sm font-bold text-[#F7FAFC]">Enter Staff PIN</h3>
        <p className="text-xs text-[#718096] mb-3">
          {targetStaff ? `${targetStaff.name} (${targetStaff.role})` : 'Authorize Action'}
        </p>

        {/* PIN Indicators */}
        <div className="flex items-center gap-3 my-2">
          {[0, 1, 2, 3].map((idx) => {
            const isFilled = pin.length > idx;
            return (
              <div
                key={idx}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-150 ${
                  error
                    ? 'bg-red-500 scale-110'
                    : isFilled
                    ? 'bg-[#D4AF37] scale-110 shadow-sm shadow-[#D4AF37]/50'
                    : 'bg-[#1A1D2B] border border-[#1F2433]'
                }`}
              />
            );
          })}
        </div>

        {error && (
          <span className="text-[11px] text-red-400 font-semibold mb-2 animate-bounce">
            Incorrect PIN. Try default (1234 or 0000)
          </span>
        )}

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-2 w-full mt-2">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleDigit(num)}
              className="h-12 rounded-xl bg-[#151824] hover:bg-[#1f2438] active:bg-[#D4AF37] active:text-[#0B0D14] border border-[#1F2433] text-sm font-bold font-mono text-[#F7FAFC] transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPin('')}
            className="h-12 rounded-xl bg-[#151824] hover:bg-[#1f2438] text-[11px] font-bold text-[#718096] hover:text-[#E2E8F0] border border-[#1F2433] flex items-center justify-center"
          >
            CLR
          </button>
          <button
            onClick={() => handleDigit('0')}
            className="h-12 rounded-xl bg-[#151824] hover:bg-[#1f2438] active:bg-[#D4AF37] active:text-[#0B0D14] border border-[#1F2433] text-sm font-bold font-mono text-[#F7FAFC]"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="h-12 rounded-xl bg-[#151824] hover:bg-[#1f2438] text-[#718096] hover:text-[#E2E8F0] border border-[#1F2433] flex items-center justify-center"
          >
            <Delete className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
