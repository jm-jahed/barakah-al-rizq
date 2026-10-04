'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { WholesaleOrderItem, WholesaleOrder } from '@/lib/db/types';

export interface CartItem {
  id: string; // `${productId}-${orderType}`
  productId: string;
  productName: string;
  productArabicName?: string;
  orderType: 'CONTAINER' | 'DUBAI_WHOLESALE';
  packagingUnit: string;
  pricePerCtn: number;
  quantityCtn: number;
  moq: number; // 100 for Container, 10 for Dubai Wholesale
  image?: string;
}

export interface MOQError {
  itemId: string;
  productName: string;
  orderType: 'CONTAINER' | 'DUBAI_WHOLESALE';
  requiredMOQ: number;
  currentQuantity: number;
  message: string;
}

interface WholesaleCartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'moq'> & { quantityCtn?: number; moq?: number }) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalCtn: number;
  totalAED: number;
  isValidMOQ: boolean;
  moqErrors: MOQError[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  checkoutStep: 'CART' | 'CHECKOUT' | 'SUCCESS';
  setCheckoutStep: (step: 'CART' | 'CHECKOUT' | 'SUCCESS') => void;
  lastPlacedOrder: WholesaleOrder | null;
  setLastPlacedOrder: (order: WholesaleOrder | null) => void;
}

const WholesaleCartContext = createContext<WholesaleCartContextType | undefined>(undefined);

const STORAGE_KEY = 'barakah_wholesale_cart_v1';

export const WholesaleCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'CART' | 'CHECKOUT' | 'SUCCESS'>('CART');
  const [lastPlacedOrder, setLastPlacedOrder] = useState<WholesaleOrder | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Ignore parse error
    }
    setIsHydrated(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore quota error
    }
  }, [items, isHydrated]);

  const addToCart = (newItem: Omit<CartItem, 'id' | 'moq'> & { quantityCtn?: number; moq?: number }) => {
    const moq = newItem.orderType === 'CONTAINER' ? 100 : 10;
    const initialQty = newItem.quantityCtn && newItem.quantityCtn >= moq ? newItem.quantityCtn : moq;
    const compositeId = `${newItem.productId}-${newItem.orderType}`;

    setItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === compositeId);
      if (existingIdx !== -1) {
        const updated = [...prev];
        const currentQty = updated[existingIdx].quantityCtn;
        const addAmount = newItem.quantityCtn ?? (newItem.orderType === 'CONTAINER' ? 50 : 10);
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantityCtn: currentQty + addAmount,
          pricePerCtn: newItem.pricePerCtn, // update with current rate
        };
        return updated;
      }
      return [
        ...prev,
        {
          ...newItem,
          id: compositeId,
          moq,
          quantityCtn: initialQty,
          packagingUnit: newItem.packagingUnit || 'CTN',
        },
      ];
    });

    setCheckoutStep('CART');
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, qty: number) => {
    const cleanQty = Math.floor(qty);
    if (cleanQty <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantityCtn: cleanQty } : it))
    );
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const totalItems = items.length;

  const totalCtn = useMemo(() => {
    return items.reduce((acc, curr) => acc + (curr.quantityCtn || 0), 0);
  }, [items]);

  const totalAED = useMemo(() => {
    const sum = items.reduce(
      (acc, curr) => acc + (curr.pricePerCtn || 0) * (curr.quantityCtn || 0),
      0
    );
    return parseFloat(sum.toFixed(2));
  }, [items]);

  const moqErrors = useMemo<MOQError[]>(() => {
    const errors: MOQError[] = [];
    for (const it of items) {
      const required = it.orderType === 'CONTAINER' ? 100 : 10;
      if (it.quantityCtn < required) {
        errors.push({
          itemId: it.id,
          productName: it.productName,
          orderType: it.orderType,
          requiredMOQ: required,
          currentQuantity: it.quantityCtn,
          message: `${it.productName} (${
            it.orderType === 'CONTAINER' ? 'Container Wholesale' : 'Dubai Wholesale'
          }) requires minimum ${required} CTN (currently ${it.quantityCtn} CTN).`,
        });
      }
    }
    return errors;
  }, [items]);

  const isValidMOQ = items.length > 0 && moqErrors.length === 0;

  return (
    <WholesaleCartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalCtn,
        totalAED,
        isValidMOQ,
        moqErrors,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        checkoutStep,
        setCheckoutStep,
        lastPlacedOrder,
        setLastPlacedOrder,
      }}
    >
      {children}
    </WholesaleCartContext.Provider>
  );
};

export const useWholesaleCart = () => {
  const context = useContext(WholesaleCartContext);
  if (!context) {
    throw new Error('useWholesaleCart must be used within a WholesaleCartProvider');
  }
  return context;
};
