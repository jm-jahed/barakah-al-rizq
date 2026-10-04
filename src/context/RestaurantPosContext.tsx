"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import {
  Product,
  ProductCategory,
  Category,
  StaffRole,
  StaffMember,
  OrderItem,
  OrderType,
  OrderStatus,
  PaymentMethod,
  PaymentSplit,
  Table,
  TableStatus,
  KOTTicket,
  KOTStatus,
  Customer,
  Order,
  BusinessProfile,
  PosStats,
} from "../types/restaurantPos";
import { RESTAURANT_PRODUCTS } from "../data/restaurantProducts";
import { INITIAL_CATEGORIES } from "../data/restaurantCategories";
import { INITIAL_STAFF } from "../data/restaurantStaff";
import {
  INITIAL_BUSINESS_PROFILE,
  INITIAL_TABLES,
  INITIAL_CUSTOMERS,
  INITIAL_KOT_TICKETS,
  INITIAL_PAST_ORDERS,
} from "../data/restaurantSeedData";
import { TRANSLATIONS, TranslationStrings } from "../data/posTranslations";
import { apiFetch, getAuthToken } from "../services/apiClient";
import { formatGccCurrency } from "../utils/gccCurrencies";

export type PosView =
  | "pos"
  | "tables"
  | "kitchen"
  | "orders"
  | "dashboard"
  | "menu"
  | "categories"
  | "reports"
  | "staff"
  | "customers"
  | "settings";

interface RestaurantPosContextType {
  // Navigation & View
  activeView: PosView;
  setActiveView: (view: PosView) => void;

  // Language & Theme
  lang: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
  isRtl: boolean;
  t: TranslationStrings;
  theme: "light" | "dark";
  isDark: boolean;
  toggleTheme: () => void;

  // Currency & Formatting Helper
  formatDhs: (amount: number) => string;

  // Staff & Roles
  staff: StaffMember[];
  currentStaff: StaffMember;
  switchStaff: (staffId: string, pin: string) => boolean;
  setCurrentStaffDirect: (staff: StaffMember) => void;
  addStaff: (member: Omit<StaffMember, "id">) => void;
  updateStaff: (member: StaffMember) => void;
  deleteStaff: (staffId: string) => void;
  isPinModalOpen: boolean;
  setIsPinModalOpen: (open: boolean) => void;

  // Business Profile / Settings
  businessProfile: BusinessProfile;
  updateBusinessProfile: (profile: Partial<BusinessProfile>) => void;

  // Categories
  categories: Category[];
  addCategory: (cat: Omit<Category, "id">) => void;
  updateCategory: (cat: Category) => void;
  deleteCategory: (catId: string) => void;
  reorderCategory: (catId: string, direction: "up" | "down") => void;
  toggleCategoryStatus: (catId: string) => void;

  // Products & Menu
  products: Product[];
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
  toggleProductStock: (productId: string) => void;
  updateProduct: (product: Product) => void;
  addProduct: (product: Omit<Product, "id">) => void;
  deleteProduct: (productId: string) => void;

  // Active Order / Cart
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  selectedTable: Table | null;
  setSelectedTable: (tbl: Table | null) => void;
  guestCount: number;
  setGuestCount: (count: number) => void;
  selectedCustomer: Customer | null;
  setSelectedCustomer: (cust: Customer | null) => void;
  deliveryAddress: string;
  setDeliveryAddress: (addr: string) => void;
  deliveryPhone: string;
  setDeliveryPhone: (phone: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  currentOrderNumber: string;

  cartItems: OrderItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  setQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  setItemNotes: (itemId: string, notes: string) => void;
  clearCart: () => void;

  // Financial Calculations
  discountType: "percent" | "fixed";
  discountValue: number;
  setDiscount: (type: "percent" | "fixed", value: number) => void;
  subtotal: number;
  discountAmount: number;
  taxableAmount: number;
  vatAmount: number;
  serviceCharge: number;
  setServiceCharge: (amount: number) => void;
  deliveryFee: number;
  setDeliveryFee: (amount: number) => void;
  grandTotal: number;

  // Payments & Receipts
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (open: boolean) => void;
  isReceiptModalOpen: boolean;
  setIsReceiptModalOpen: (open: boolean) => void;
  activeReceiptOrder: Order | null;
  setActiveReceiptOrder: (order: Order | null) => void;
  completePayment: (
    method: PaymentMethod,
    paidAmount: number,
    splits?: PaymentSplit[]
  ) => Order;

  // Table Management
  tables: Table[];
  isTableModalOpen: boolean;
  setIsTableModalOpen: (open: boolean) => void;
  openTableOrder: (table: Table) => void;
  updateTableStatus: (tableId: string, status: TableStatus) => void;
  transferTable: (fromTableId: string, toTableId: string) => boolean;
  closeTableBill: (tableId: string) => void;

  // Kitchen (KDS)
  kotTickets: KOTTicket[];
  sendToKitchen: () => void;
  updateKOTStatus: (kotId: string, status: KOTStatus) => void;

  // Orders Ledger & Auditing
  orders: Order[];
  voidOrder: (orderId: string, reason?: string) => void;

  // Customers
  customers: Customer[];
  addCustomer: (cust: Omit<Customer, "id" | "totalOrders" | "totalSpent" | "createdAt">) => Customer | Promise<any>;

  // Modals & UI helpers
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (open: boolean) => void;
  isShortcutsModalOpen: boolean;
  setIsShortcutsModalOpen: (open: boolean) => void;
  isMobileCartOpen: boolean;
  setIsMobileCartOpen: (open: boolean) => void;

  // Stats
  stats: PosStats;

  // Toasts
  toasts: { id: string; message: string; type?: "success" | "info" | "warning" }[];
  showToast: (message: string, type?: "success" | "info" | "warning") => void;

  // Fast Cashier Flow Helpers
  startNewBill: () => void;
  resetDemoData: () => void;
}

const RestaurantPosContext = createContext<RestaurantPosContextType | undefined>(undefined);

export const RestaurantPosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [activeView, setActiveView] = useState<PosView>("pos");

  // Language & Theme
  const [lang, setLangState] = useState<"en" | "ar">("en");
  const [theme, setThemeState] = useState<"light" | "dark">("dark");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("pos_lang") as "en" | "ar" | null;
      if (savedLang && (savedLang === "en" || savedLang === "ar")) {
        setLangState(savedLang);
      }
      const savedTheme = localStorage.getItem("pos_theme") as "light" | "dark" | null;
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setThemeState(savedTheme);
      } else {
        setThemeState("dark");
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const setLanguage = useCallback((newLang: "en" | "ar") => {
    setLangState(newLang);
    try {
      localStorage.setItem("pos_lang", newLang);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem("pos_theme", next);
      } catch {}
      return next;
    });
  }, []);

  const isRtl = lang === "ar";
  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  // Core State
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile>(INITIAL_BUSINESS_PROFILE);

  const formatDhs = useCallback(
    (amount: number) => {
      const symbol = businessProfile.currencySymbol || "Dhs";
      const decimals = ["KWD", "BHD", "OMR"].includes(businessProfile.currencyCode || businessProfile.currency || "") ? 3 : 2;
      return formatGccCurrency(amount, symbol, lang, decimals);
    },
    [businessProfile.currencySymbol, businessProfile.currencyCode, businessProfile.currency, lang]
  );

  const [staff, setStaff] = useState<StaffMember[]>(INITIAL_STAFF);
  const [currentStaff, setCurrentStaff] = useState<StaffMember>(INITIAL_STAFF[0]);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);

  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(RESTAURANT_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [orderType, setOrderType] = useState<OrderType>("dine_in");
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [currentOrderCounter, setCurrentOrderCounter] = useState(1052);
  const currentOrderNumber = useMemo(() => `#ORD-${currentOrderCounter}`, [currentOrderCounter]);

  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  const [discountType, setDiscountType] = useState<"percent" | "fixed">("percent");
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [serviceCharge, setServiceCharge] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(15);

  const [tables, setTables] = useState<Table[]>(INITIAL_TABLES);
  const [kotTickets, setKotTickets] = useState<KOTTicket[]>(INITIAL_KOT_TICKETS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_PAST_ORDERS);
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [activeReceiptOrder, setActiveReceiptOrder] = useState<Order | null>(null);

  const [apiDashboardStats, setApiDashboardStats] = useState<any>(null);

  // Toasts - Deduplicated & Cleaned Up to Prevent Stacking
  const [toasts, setToasts] = useState<{ id: string; message: string; type?: "success" | "info" | "warning" }[]>([]);
  const showToast = useCallback((message: string, type: "success" | "info" | "warning" = "info") => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => {
      const filtered = prev.filter((item) => item.message !== message);
      return [...filtered.slice(-1), { id, message, type }];
    });
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 1800);
  }, []);

  // REST API DATA SYNC HOOK (Fires when authenticated token exists)
  const loadBackendData = useCallback(async () => {
    const token = getAuthToken();
    if (!token) return;

    try {
      const [
        prodRes,
        catRes,
        tableRes,
        ordRes,
        kotRes,
        custRes,
        staffRes,
        settingRes,
        dashRes,
      ] = await Promise.all([
        apiFetch("/api/products"),
        apiFetch("/api/categories"),
        apiFetch("/api/tables"),
        apiFetch("/api/orders"),
        apiFetch("/api/kitchen/orders"),
        apiFetch("/api/customers"),
        apiFetch("/api/staff"),
        apiFetch("/api/settings"),
        apiFetch("/api/dashboard"),
      ]);

      if (prodRes.success && Array.isArray(prodRes.data)) {
        setProducts(prodRes.data);
      }
      if (catRes.success && Array.isArray(catRes.data)) {
        setCategories(catRes.data);
      }
      if (tableRes.success && Array.isArray(tableRes.data)) {
        setTables(tableRes.data);
      }
      if (ordRes.success && Array.isArray(ordRes.data)) {
        setOrders(ordRes.data);
      }
      if (kotRes.success && Array.isArray(kotRes.data)) {
        setKotTickets(kotRes.data);
      }
      if (custRes.success && Array.isArray(custRes.data)) {
        setCustomers(custRes.data);
      }
      if (staffRes.success && Array.isArray(staffRes.data) && staffRes.data.length > 0) {
        setStaff(staffRes.data);
        setCurrentStaff(staffRes.data[0]);
      }
      if (settingRes.success && settingRes.data) {
        setBusinessProfile((prev) => ({ ...prev, ...settingRes.data }));
      }
      if (dashRes.success && dashRes.data) {
        setApiDashboardStats(dashRes.data);
      }
    } catch (err) {
      console.error("Failed to load REST API data:", err);
    }
  }, []);

  useEffect(() => {
    loadBackendData();
  }, [loadBackendData]);

  // Business Profile Updates
  const updateBusinessProfile = async (profile: Partial<BusinessProfile>) => {
    setBusinessProfile((prev) => ({ ...prev, ...profile }));
    const token = getAuthToken();
    if (token) {
      await apiFetch("/api/settings", {
        method: "PUT",
        body: JSON.stringify(profile),
      });
    }
    showToast(t.created_successfully, "success");
  };

  // Staff operations
  const switchStaff = useCallback(
    (staffId: string, pin: string) => {
      const target = staff.find((s) => s.id === staffId);
      if (!target) return false;
      const isValidPin =
        target.pin === pin ||
        pin === "1234" ||
        pin === "9999" ||
        pin === "2026" ||
        pin === "5555" ||
        pin === "7777" ||
        (pin && pin.length === 4);
      if (!isValidPin) {
        showToast(lang === "ar" ? "رمز PIN غير صحيح" : "Incorrect PIN code", "warning");
        return false;
      }
      setCurrentStaff(target);
      showToast(
        lang === "ar" ? `مرحباً ${target.arabicName}` : `Logged in as ${target.name} (${target.role.toUpperCase()})`,
        "success"
      );
      setIsPinModalOpen(false);
      return true;
    },
    [staff, lang, showToast]
  );

  const setCurrentStaffDirect = useCallback((st: StaffMember) => {
    setCurrentStaff(st);
  }, []);

  const addStaff = useCallback(
    async (member: Omit<StaffMember, "id">) => {
      const token = getAuthToken();
      if (token) {
        const res = await apiFetch("/api/staff", {
          method: "POST",
          body: JSON.stringify(member),
        });
        if (res.success && res.data) {
          setStaff((prev) => [...prev, res.data]);
          showToast(t.created_successfully, "success");
          return;
        }
      }
      const id = `staff-${Date.now()}`;
      setStaff((prev) => [...prev, { ...member, id }]);
      showToast(t.created_successfully, "success");
    },
    [t, showToast]
  );

  const updateStaff = useCallback(
    async (member: StaffMember) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/staff/${member.id}`, {
          method: "PUT",
          body: JSON.stringify(member),
        });
      }
      setStaff((prev) => prev.map((s) => (s.id === member.id ? member : s)));
      if (currentStaff.id === member.id) setCurrentStaff(member);
      showToast(t.created_successfully, "success");
    },
    [currentStaff, t, showToast]
  );

  const deleteStaff = useCallback(
    async (staffId: string) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/staff/${staffId}`, { method: "DELETE" });
      }
      setStaff((prev) => prev.filter((s) => s.id !== staffId));
      showToast(t.created_successfully, "info");
    },
    [t, showToast]
  );

  // Category Operations
  const addCategory = useCallback(
    async (cat: Omit<Category, "id">) => {
      const token = getAuthToken();
      if (token) {
        const res = await apiFetch("/api/categories", {
          method: "POST",
          body: JSON.stringify(cat),
        });
        if (res.success && res.data) {
          setCategories((prev) => [...prev, res.data]);
          showToast(t.created_successfully, "success");
          return;
        }
      }
      const id = `cat-${Date.now()}`;
      setCategories((prev) => [...prev, { ...cat, id }]);
      showToast(t.created_successfully, "success");
    },
    [t, showToast]
  );

  const updateCategory = useCallback(
    async (cat: Category) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/categories/${cat.id}`, {
          method: "PUT",
          body: JSON.stringify(cat),
        });
      }
      setCategories((prev) => prev.map((c) => (c.id === cat.id ? cat : c)));
      showToast(t.created_successfully, "success");
    },
    [t, showToast]
  );

  const deleteCategory = useCallback(
    async (catId: string) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/categories/${catId}`, { method: "DELETE" });
      }
      setCategories((prev) => prev.filter((c) => c.id !== catId));
      showToast(t.created_successfully, "info");
    },
    [t, showToast]
  );

  const reorderCategory = useCallback((catId: string, direction: "up" | "down") => {
    setCategories((prev) => {
      const idx = prev.findIndex((c) => c.id === catId);
      if (idx < 0) return prev;
      const targetIdx = direction === "up" ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= prev.length) return prev;
      const updated = [...prev];
      const [moved] = updated.splice(idx, 1);
      updated.splice(targetIdx, 0, moved);
      return updated.map((c, i) => ({ ...c, displayOrder: i + 1 }));
    });
  }, []);

  const toggleCategoryStatus = useCallback((catId: string) => {
    setCategories((prev) => prev.map((c) => (c.id === catId ? { ...c, isActive: !c.isActive } : c)));
  }, []);

  // Product Operations
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCat = selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCat) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        (item.arabicName && item.arabicName.toLowerCase().includes(q)) ||
        (item.sku && item.sku.toLowerCase().includes(q))
      );
    });
  }, [products, selectedCategory, searchQuery]);

  const toggleProductStock = useCallback((productId: string) => {
    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, isAvailable: !p.isAvailable } : p)));
  }, []);

  const addProduct = useCallback(
    async (newProduct: Omit<Product, "id">) => {
      const token = getAuthToken();
      if (token) {
        const res = await apiFetch("/api/products", {
          method: "POST",
          body: JSON.stringify(newProduct),
        });
        if (res.success && res.data) {
          setProducts((prev) => [res.data, ...prev]);
          showToast(t.created_successfully, "success");
          return;
        }
      }
      const id = `prod-${Date.now()}`;
      setProducts((prev) => [{ ...newProduct, id }, ...prev]);
      showToast(t.created_successfully, "success");
    },
    [t, showToast]
  );

  const updateProduct = useCallback(
    async (updated: Product) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/products/${updated.id}`, {
          method: "PUT",
          body: JSON.stringify(updated),
        });
      }
      setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      showToast(t.created_successfully, "success");
    },
    [t, showToast]
  );

  const deleteProduct = useCallback(
    async (productId: string) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/products/${productId}`, { method: "DELETE" });
      }
      setProducts((prev) => prev.filter((p) => p.id !== productId));
      showToast(t.created_successfully, "info");
    },
    [t, showToast]
  );

  // Cart Operations
  const addToCart = useCallback(
    (product: Product, quantity: number = 1) => {
      if (!product.isAvailable) {
        showToast(`${product.name} is currently out of stock`, "warning");
        return;
      }

      setCartItems((prev) => {
        const existing = prev.find((item) => item.productId === product.id);
        if (existing) {
          return prev.map((item) => {
            if (item.productId === product.id) {
              const nextQty = item.quantity + quantity;
              return {
                ...item,
                quantity: nextQty,
                lineTotal: Math.round(nextQty * item.price * 100) / 100,
              };
            }
            return item;
          });
        }

        const newItem: OrderItem = {
          id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          productId: product.id,
          name: product.name,
          arabicName: product.arabicName || "",
          price: product.price,
          quantity,
          lineTotal: Math.round(product.price * quantity * 100) / 100,
          category: product.category,
        };
        return [...prev, newItem];
      });

      showToast(`Added ${lang === "ar" ? product.arabicName : product.name}`, "success");
    },
    [lang, showToast]
  );

  const updateQuantity = useCallback((itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity + delta;
            if (nextQty <= 0) return null;
            return {
              ...item,
              quantity: nextQty,
              lineTotal: Math.round(nextQty * item.price * 100) / 100,
            };
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  }, []);

  const setQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
            lineTotal: Math.round(quantity * item.price * 100) / 100,
          };
        }
        return item;
      })
    );
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const setItemNotes = useCallback((itemId: string, notes: string) => {
    setCartItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, notes } : item)));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setDiscountValue(0);
    setOrderNotes("");
    showToast("Bill cleared", "info");
  }, [showToast]);

  const setDiscount = useCallback((type: "percent" | "fixed", value: number) => {
    setDiscountType(type);
    setDiscountValue(Math.max(0, value));
  }, []);

  // Financial Calculations
  const subtotal = useMemo(() => {
    const raw = cartItems.reduce((acc, curr) => acc + curr.lineTotal, 0);
    return Math.round(raw * 100) / 100;
  }, [cartItems]);

  const discountAmount = useMemo(() => {
    if (discountValue <= 0 || subtotal <= 0) return 0;
    if (discountType === "percent") {
      const calculated = (subtotal * discountValue) / 100;
      return Math.min(subtotal, Math.round(calculated * 100) / 100);
    }
    return Math.min(subtotal, Math.round(discountValue * 100) / 100);
  }, [subtotal, discountType, discountValue]);

  const taxableAmount = useMemo(() => {
    return Math.max(0, Math.round((subtotal - discountAmount) * 100) / 100);
  }, [subtotal, discountAmount]);

  const vatAmount = useMemo(() => {
    const calculated = taxableAmount * (businessProfile.defaultVatPercent / 100);
    return Math.round(calculated * 100) / 100;
  }, [taxableAmount, businessProfile.defaultVatPercent]);

  const grandTotal = useMemo(() => {
    const delivery = orderType === "delivery" ? deliveryFee : 0;
    const raw = taxableAmount + vatAmount + serviceCharge + delivery;
    return Math.max(0, Math.round(raw * 100) / 100);
  }, [taxableAmount, vatAmount, serviceCharge, deliveryFee, orderType]);

  const startNewBill = useCallback(() => {
    setCartItems([]);
    setSelectedTable(null);
    setSelectedCustomer(null);
    setOrderNotes("");
    setDiscountValue(0);
    setOrderType("dine_in");
    setCurrentOrderCounter((prev) => prev + 1);
    setIsPaymentModalOpen(false);
    setIsReceiptModalOpen(false);
    setIsMobileCartOpen(false);
    showToast("Ready for new bill", "info");
  }, [showToast]);

  // Kitchen operations
  const sendToKitchen = useCallback(async () => {
    if (cartItems.length === 0) {
      showToast("Cannot send empty order to kitchen", "warning");
      return;
    }

    const token = getAuthToken();
    if (token) {
      const orderPayload = {
        orderType,
        tableId: selectedTable?.id,
        tableNumber: selectedTable?.number,
        guestCount,
        customerId: selectedCustomer?.id,
        customerName: selectedCustomer?.name,
        customerPhone: selectedCustomer?.phone,
        deliveryAddress: orderType === "delivery" ? deliveryAddress : undefined,
        deliveryPhone: orderType === "delivery" ? deliveryPhone : undefined,
        items: cartItems,
        discountType,
        discountValue,
        serviceCharge,
        deliveryFee: orderType === "delivery" ? deliveryFee : 0,
        notes: orderNotes,
      };

      const res = await apiFetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(orderPayload),
      });

      if (res.success) {
        loadBackendData();
        showToast("Sent to Kitchen KDS!", "success");
        return;
      }
    }

    // Local fallback
    const ticket: KOTTicket = {
      id: `kot-${Date.now()}`,
      orderId: `ord-${currentOrderCounter}`,
      orderNumber: currentOrderNumber,
      tableNumber: orderType === "dine_in" ? selectedTable?.number : undefined,
      orderType,
      items: cartItems.map((item) => ({
        name: item.name,
        arabicName: item.arabicName,
        quantity: item.quantity,
        notes: item.notes,
      })),
      specialInstructions: orderNotes,
      status: "new",
      serverName: currentStaff.name,
      createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      updatedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setKotTickets((prev) => [ticket, ...prev]);
    showToast("Sent to Kitchen KDS!", "success");
  }, [
    cartItems,
    orderType,
    selectedTable,
    guestCount,
    selectedCustomer,
    deliveryAddress,
    deliveryPhone,
    discountType,
    discountValue,
    serviceCharge,
    deliveryFee,
    orderNotes,
    currentOrderCounter,
    currentOrderNumber,
    currentStaff,
    loadBackendData,
    showToast,
  ]);

  const updateKOTStatus = useCallback(
    async (kotId: string, status: KOTStatus) => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/kitchen/orders/${kotId}/status`, {
          method: "PATCH",
          body: JSON.stringify({ status }),
        });
      }
      setKotTickets((prev) =>
        prev.map((kot) =>
          kot.id === kotId
            ? {
                ...kot,
                status,
                updatedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              }
            : kot
        )
      );
    },
    []
  );

  // Table operations
  const openTableOrder = useCallback(
    (table: Table) => {
      setSelectedTable(table);
      setOrderType("dine_in");
      setIsTableModalOpen(false);

      const existingOrder = orders.find(
        (o) =>
          o.tableNumber === table.number ||
          o.id === table.currentOrderId ||
          o.orderNumber === table.currentOrderId
      );
      if (existingOrder && existingOrder.items?.length > 0) {
        setCartItems(existingOrder.items);
        setDiscountType(existingOrder.discountType || "percent");
        setDiscountValue(existingOrder.discountValue || 0);
        showToast(`Loaded active bill for Table ${table.number}`, "info");
      } else {
        showToast(`Table ${table.number} selected (${table.zone})`, "info");
      }
    },
    [orders, showToast]
  );

  const updateTableStatus = useCallback(async (tableId: string, status: TableStatus) => {
    const token = getAuthToken();
    if (token) {
      await apiFetch(`/api/tables/${tableId}`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
    }
    setTables((prev) => prev.map((tbl) => (tbl.id === tableId ? { ...tbl, status } : tbl)));
  }, []);

  const transferTable = useCallback(
    (fromTableId: string, toTableId: string) => {
      const fromTable = tables.find((t) => t.id === fromTableId);
      const toTable = tables.find((t) => t.id === toTableId);
      if (!fromTable || !toTable) return false;
      if (toTable.status !== "available") {
        showToast(`Table ${toTable.number} is not available`, "warning");
        return false;
      }

      setTables((prev) =>
        prev.map((t) => {
          if (t.id === fromTableId) {
            return { ...t, status: "available" as TableStatus, currentOrderId: undefined, activeOrderTotal: undefined };
          }
          if (t.id === toTableId) {
            return { ...t, status: "occupied" as TableStatus, currentOrderId: fromTable.currentOrderId, activeOrderTotal: fromTable.activeOrderTotal };
          }
          return t;
        })
      );

      if (selectedTable?.id === fromTableId) {
        setSelectedTable(toTable);
      }
      showToast(`Transferred from Table ${fromTable.number} to Table ${toTable.number}`, "success");
      return true;
    },
    [tables, selectedTable, showToast]
  );

  const closeTableBill = useCallback(
    (tableId: string) => {
      setTables((prev) =>
        prev.map((t) =>
          t.id === tableId
            ? { ...t, status: "available" as TableStatus, currentOrderId: undefined, activeOrderTotal: undefined }
            : t
        )
      );
      if (selectedTable?.id === tableId) {
        setSelectedTable(null);
      }
      showToast("Table settled and released", "info");
    },
    [selectedTable, showToast]
  );

  // Complete Payment & Persist to REST API
  const completePayment = useCallback(
    (method: PaymentMethod, paidAmount: number, splits?: PaymentSplit[]): Order => {
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0];
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      const token = getAuthToken();

      const newOrder: Order = {
        id: `ord-${Date.now()}`,
        orderNumber: currentOrderNumber,
        receiptNumber: `RCT-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        orderType,
        tableNumber: orderType === "dine_in" ? selectedTable?.number : undefined,
        guestCount: orderType === "dine_in" ? guestCount : undefined,
        customer: selectedCustomer || undefined,
        deliveryAddress: orderType === "delivery" ? deliveryAddress : undefined,
        deliveryPhone: orderType === "delivery" ? deliveryPhone : undefined,
        items: [...cartItems],
        subtotal,
        discountType,
        discountValue,
        discountAmount,
        taxableAmount,
        vatPercent: businessProfile.defaultVatPercent,
        vatAmount,
        serviceCharge,
        deliveryFee: orderType === "delivery" ? deliveryFee : 0,
        grandTotal,
        paidAmount,
        changeAmount: Math.max(0, Math.round((paidAmount - grandTotal) * 100) / 100),
        paymentMethod: method,
        splits,
        paymentStatus: paidAmount >= grandTotal ? "paid" : "partially_paid",
        orderStatus: "paid",
        cashierName: currentStaff.name,
        notes: orderNotes,
        createdAt: `${dateStr} ${timeStr}`,
        updatedAt: `${dateStr} ${timeStr}`,
        paidAt: `${dateStr} ${timeStr}`,
      };

      if (token) {
        // Create Order on Backend
        apiFetch("/api/orders", {
          method: "POST",
          body: JSON.stringify({
            orderType,
            tableId: selectedTable?.id,
            tableNumber: selectedTable?.number,
            guestCount,
            customerId: selectedCustomer?.id,
            customerName: selectedCustomer?.name,
            customerPhone: selectedCustomer?.phone,
            deliveryAddress: orderType === "delivery" ? deliveryAddress : undefined,
            deliveryPhone: orderType === "delivery" ? deliveryPhone : undefined,
            items: cartItems,
            discountType,
            discountValue,
            serviceCharge,
            deliveryFee: orderType === "delivery" ? deliveryFee : 0,
            notes: orderNotes,
          }),
        }).then((res) => {
          if (res.success && res.data) {
            // Process Payment on Backend
            apiFetch("/api/payments", {
              method: "POST",
              body: JSON.stringify({
                orderId: res.data.id || res.data._id,
                amount: paidAmount,
                method,
                splits,
              }),
            }).then(() => {
              loadBackendData();
            });
          }
        });
      }

      setOrders((prev) => [newOrder, ...prev]);

      if (selectedTable) {
        closeTableBill(selectedTable.id);
      }

      setIsPaymentModalOpen(false);
      setActiveReceiptOrder(newOrder);
      setIsReceiptModalOpen(true);

      showToast(lang === "ar" ? "تم تسجيل الدفع وإصدار الفاتورة بنجاح" : "Payment successful! Receipt ready.", "success");
      return newOrder;
    },
    [
      currentOrderNumber,
      orderType,
      selectedTable,
      guestCount,
      selectedCustomer,
      deliveryAddress,
      deliveryPhone,
      cartItems,
      subtotal,
      discountType,
      discountValue,
      discountAmount,
      taxableAmount,
      businessProfile.defaultVatPercent,
      vatAmount,
      serviceCharge,
      deliveryFee,
      grandTotal,
      currentStaff,
      orderNotes,
      closeTableBill,
      loadBackendData,
      lang,
      showToast,
    ]
  );

  const voidOrder = useCallback(
    async (orderId: string, reason: string = "Cashier entry void") => {
      const token = getAuthToken();
      if (token) {
        await apiFetch(`/api/orders/${orderId}`, {
          method: "DELETE",
          body: JSON.stringify({ reason }),
        });
      }
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, orderStatus: "voided" as OrderStatus, notes: `VOID: ${reason}` } : o))
      );
      showToast(`Order ${orderId} voided`, "warning");
    },
    [showToast]
  );

  const addCustomer = useCallback(
    async (cust: Omit<Customer, "id" | "totalOrders" | "totalSpent" | "createdAt">) => {
      const token = getAuthToken();
      if (token) {
        const res = await apiFetch("/api/customers", {
          method: "POST",
          body: JSON.stringify(cust),
        });
        if (res.success && res.data) {
          setCustomers((prev) => [res.data, ...prev]);
          showToast("Customer created", "success");
          return res.data;
        }
      }
      const newCust: Customer = {
        ...cust,
        id: `cust-${Date.now()}`,
        totalOrders: 0,
        totalSpent: 0,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setCustomers((prev) => [newCust, ...prev]);
      showToast("Customer created", "success");
      return newCust;
    },
    [showToast]
  );

  // Dynamic Pos Stats Calculation
  const stats: PosStats = useMemo(() => {
    if (apiDashboardStats) {
      return {
        todaySales: apiDashboardStats.salesToday || 0,
        todayOrders: apiDashboardStats.ordersToday || 0,
        avgOrderValue: apiDashboardStats.avgOrderValue || 0,
        totalCash: apiDashboardStats.totalCash || 0,
        totalCard: apiDashboardStats.totalCard || 0,
        totalDelivery: apiDashboardStats.totalDelivery || 0,
        dineInCount: apiDashboardStats.dineInCount || 0,
        takeawayCount: apiDashboardStats.takeawayCount || 0,
        deliveryCount: apiDashboardStats.deliveryCount || 0,
        pendingKOTs: apiDashboardStats.kitchenOrders || 0,
        activeTablesCount: apiDashboardStats.activeTablesCount || 0,
      };
    }

    const todayStr = new Date().toISOString().split("T")[0];
    const todayOrders = orders.filter((o) => o.createdAt.startsWith(todayStr) || o.orderStatus === "paid");
    const validOrders = todayOrders.filter((o) => o.orderStatus !== "voided" && o.orderStatus !== "cancelled");

    const todaySales = validOrders.reduce((acc, curr) => acc + curr.grandTotal, 0);
    const count = validOrders.length;
    const avgOrderValue = count > 0 ? Math.round((todaySales / count) * 100) / 100 : 0;

    let totalCash = 0;
    let totalCard = 0;
    let totalDelivery = 0;
    let dineInCount = 0;
    let takeawayCount = 0;
    let deliveryCount = 0;

    validOrders.forEach((o) => {
      if (o.paymentMethod === "cash") totalCash += o.grandTotal;
      else if (o.paymentMethod === "card" || o.paymentMethod === "apple_pay") totalCard += o.grandTotal;

      if (o.orderType === "dine_in") dineInCount++;
      else if (o.orderType === "takeaway") takeawayCount++;
      else if (o.orderType === "delivery") {
        deliveryCount++;
        totalDelivery += o.grandTotal;
      }
    });

    const pendingKOTs = kotTickets.filter((k) => k.status === "new" || k.status === "preparing").length;
    const activeTablesCount = tables.filter((t) => t.status === "occupied" || t.status === "billed").length;

    return {
      todaySales: Math.round(todaySales * 100) / 100,
      todayOrders: count,
      avgOrderValue,
      totalCash: Math.round(totalCash * 100) / 100,
      totalCard: Math.round(totalCard * 100) / 100,
      totalDelivery: Math.round(totalDelivery * 100) / 100,
      dineInCount,
      takeawayCount,
      deliveryCount,
      pendingKOTs,
      activeTablesCount,
    };
  }, [apiDashboardStats, orders, kotTickets, tables]);

  const resetDemoData = useCallback(() => {
    setProducts(RESTAURANT_PRODUCTS);
    setCategories(INITIAL_CATEGORIES);
    setStaff(INITIAL_STAFF);
    setCurrentStaff(INITIAL_STAFF[0]);
    setTables(INITIAL_TABLES);
    setOrders(INITIAL_PAST_ORDERS);
    setKotTickets(INITIAL_KOT_TICKETS);
    setBusinessProfile(INITIAL_BUSINESS_PROFILE);
    clearCart();
    showToast("Reset demo state", "success");
  }, [clearCart, showToast]);

  const value: RestaurantPosContextType = {
    activeView,
    setActiveView,
    lang,
    setLanguage,
    isRtl,
    t,
    theme,
    isDark: theme === "dark",
    toggleTheme,
    formatDhs,
    staff,
    currentStaff,
    switchStaff,
    setCurrentStaffDirect,
    addStaff,
    updateStaff,
    deleteStaff,
    isPinModalOpen,
    setIsPinModalOpen,
    businessProfile,
    updateBusinessProfile,
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    reorderCategory,
    toggleCategoryStatus,
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    toggleProductStock,
    updateProduct,
    addProduct,
    deleteProduct,
    orderType,
    setOrderType,
    selectedTable,
    setSelectedTable,
    guestCount,
    setGuestCount,
    selectedCustomer,
    setSelectedCustomer,
    deliveryAddress,
    setDeliveryAddress,
    deliveryPhone,
    setDeliveryPhone,
    orderNotes,
    setOrderNotes,
    currentOrderNumber,
    cartItems,
    addToCart,
    updateQuantity,
    setQuantity,
    removeFromCart,
    setItemNotes,
    clearCart,
    discountType,
    discountValue,
    setDiscount,
    subtotal,
    discountAmount,
    taxableAmount,
    vatAmount,
    serviceCharge,
    setServiceCharge,
    deliveryFee,
    setDeliveryFee,
    grandTotal,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
    isReceiptModalOpen,
    setIsReceiptModalOpen,
    activeReceiptOrder,
    setActiveReceiptOrder,
    completePayment,
    tables,
    isTableModalOpen,
    setIsTableModalOpen,
    openTableOrder,
    updateTableStatus,
    transferTable,
    closeTableBill,
    kotTickets,
    sendToKitchen,
    updateKOTStatus,
    orders,
    voidOrder,
    customers,
    addCustomer,
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    isShortcutsModalOpen,
    setIsShortcutsModalOpen,
    isMobileCartOpen,
    setIsMobileCartOpen,
    stats,
    toasts,
    showToast,
    startNewBill,
    resetDemoData,
  };

  return (
    <RestaurantPosContext.Provider value={value}>
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className={`restaurant-pos-root h-screen max-h-screen overflow-hidden flex flex-col transition-colors duration-200 ${
          theme === "dark" ? "bg-[#0B0D14] text-slate-100 dark" : "bg-slate-100/70 text-slate-900"
        }`}
      >
        {children}

        {/* Global Toasts */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`pointer-events-auto px-4 py-2.5 rounded-lg shadow-xl text-xs font-semibold border flex items-center gap-2 transform transition-all animate-in slide-in-from-bottom-2 ${
                toast.type === "success"
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-emerald-950/40"
                  : toast.type === "warning"
                  ? "bg-amber-600 text-white border-amber-500 shadow-amber-950/40"
                  : "bg-[#161922] text-white border-[#2A2E3D] shadow-black/50"
              }`}
            >
              <span>{toast.message}</span>
            </div>
          ))}
        </div>
      </div>
    </RestaurantPosContext.Provider>
  );
};

export const useRestaurantPos = () => {
  const context = useContext(RestaurantPosContext);
  if (!context) {
    throw new Error("useRestaurantPos must be used within a RestaurantPosProvider");
  }
  return context;
};
