'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupermarketProduct, UAE_ZONES } from '../data/supermarketData';

export interface CartItem {
  product: SupermarketProduct;
  quantity: number;
}

export interface LastAddedItem {
  id: string;
  nameEn: string;
  nameAr: string;
  price: number;
  image: string;
  quantity: number;
  timestamp: number;
}

export interface SupermarketOrder {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  emirate: string;
  address: string;
  slot: string;
  paymentMethod: string;
  status: 'Packing' | 'On Delivery Van' | 'Delivered';
}

interface SupermarketCartContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: SupermarketProduct, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Last Added Item Feedback
  lastAddedItem: LastAddedItem | null;
  clearLastAddedItem: () => void;
  
  // Totals
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  discountSavings: number;
  promoDiscount: number;
  promoCode: string;
  appliedPromo: boolean;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  finalTotal: number;
  freeDeliveryThreshold: number;
  amountNeededForFreeDelivery: number;
  
  // Modals / Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  quickViewProduct: SupermarketProduct | null;
  setQuickViewProduct: (product: SupermarketProduct | null) => void;
  
  // Global Filters & Discovery State
  selectedZone: string;
  setSelectedZone: (zoneId: string) => void;
  selectedCategorySlug: string | null;
  setSelectedCategorySlug: (slug: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Orders
  orders: SupermarketOrder[];
  placeCurrentOrder: (details: {
    fullName: string;
    phone: string;
    emirate: string;
    street: string;
    slot: string;
    paymentMethod: string;
  }) => SupermarketOrder;
}

const SupermarketCartContext = createContext<SupermarketCartContextType | undefined>(undefined);

const FREE_DELIVERY_THRESHOLD = 50.0; // 50 AED for Free Delivery in UAE
const STANDARD_DELIVERY_FEE = 10.0; // 10 AED standard

export function SupermarketCartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [lastAddedItem, setLastAddedItem] = useState<LastAddedItem | null>(null);
  const [promoCode, setPromoCode] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<boolean>(false);
  const [selectedZone, setSelectedZone] = useState<string>(UAE_ZONES[0].id);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<SupermarketProduct | null>(null);

  // Orders
  const [orders, setOrders] = useState<SupermarketOrder[]>([]);

  // Local storage persistence
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('mirqab_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem('mirqab_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedOrders = localStorage.getItem('mirqab_orders');
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    } catch {
      // Ignore in SSR
    }
  }, []);

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('mirqab_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  // Save wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem('mirqab_wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignore
    }
  }, [wishlist]);

  // Clear last added item after 4 seconds
  useEffect(() => {
    if (lastAddedItem) {
      const timer = setTimeout(() => {
        setLastAddedItem(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  const clearLastAddedItem = () => setLastAddedItem(null);

  // Cart operations — Auto open drawer on add to cart & track item for visual feedback
  const addToCart = (product: SupermarketProduct, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setLastAddedItem({
      id: product.id,
      nameEn: product.nameEn,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
      quantity,
      timestamp: Date.now()
    });

    // Auto-open Cart Drawer immediately so client sees the cart updated
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          if (quantity > item.quantity) {
            setLastAddedItem({
              id: item.product.id,
              nameEn: item.product.nameEn,
              nameAr: item.product.nameAr,
              price: item.product.price,
              image: item.product.image,
              quantity: quantity - item.quantity,
              timestamp: Date.now()
            });
          }
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Calculations
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = Number(
    cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)
  );
  
  const discountSavings = Number(
    cart.reduce((sum, item) => {
      const itemOrig = item.product.originalPrice > item.product.price ? item.product.originalPrice : item.product.price;
      return sum + (itemOrig - item.product.price) * item.quantity;
    }, 0).toFixed(2)
  );

  const deliveryFee = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  const promoDiscount = appliedPromo ? Number((subtotal * 0.10).toFixed(2)) : 0;
  const finalTotal = Number(Math.max(0, subtotal + deliveryFee - promoDiscount).toFixed(2));
  const amountNeededForFreeDelivery = Number(Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal).toFixed(2));

  // Promo code
  const applyPromoCode = (code: string) => {
    if (code.trim().toUpperCase() === 'MIRQAB10' || code.trim().toUpperCase() === 'SAVE10') {
      setPromoCode(code.trim().toUpperCase());
      setAppliedPromo(true);
      return true;
    }
    return false;
  };

  const removePromoCode = () => {
    setPromoCode('');
    setAppliedPromo(false);
  };

  // Place order
  const placeCurrentOrder = (details: {
    fullName: string;
    phone: string;
    emirate: string;
    street: string;
    slot: string;
    paymentMethod: string;
  }) => {
    const newOrder: SupermarketOrder = {
      id: `UAE-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...cart],
      subtotal,
      deliveryFee,
      discount: discountSavings + promoDiscount,
      total: finalTotal,
      emirate: details.emirate,
      address: `${details.street}, ${details.emirate}`,
      slot: details.slot,
      paymentMethod: details.paymentMethod,
      status: 'Packing'
    };

    const updated = [newOrder, ...orders];
    setOrders(updated);
    try {
      localStorage.setItem('mirqab_orders', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    clearCart();
    return newOrder;
  };

  return (
    <SupermarketCartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        isInWishlist,
        lastAddedItem,
        clearLastAddedItem,
        itemCount,
        subtotal,
        deliveryFee,
        discountSavings,
        promoDiscount,
        promoCode,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        finalTotal,
        freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
        amountNeededForFreeDelivery,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAccountOpen,
        setIsAccountOpen,
        quickViewProduct,
        setQuickViewProduct,
        selectedZone,
        setSelectedZone,
        selectedCategorySlug,
        setSelectedCategorySlug,
        searchQuery,
        setSearchQuery,
        orders,
        placeCurrentOrder
      }}
    >
      {children}
    </SupermarketCartContext.Provider>
  );
}

export function useSupermarketCart() {
  const context = useContext(SupermarketCartContext);
  if (!context) {
    throw new Error('useSupermarketCart must be used within a SupermarketCartProvider');
  }
  return context;
}
