// ============================================================================
// UNIVERSAL RETAIL POS — BILINGUAL TRANSLATIONS (ENGLISH + ARABIC)
// Designed for UAE Commercial Retail with 5% VAT Compliance
// ============================================================================

export interface TranslationDictionary {
  // Navigation
  nav_pos: string;
  nav_inventory: string;
  nav_products: string;
  nav_purchases: string;
  nav_suppliers: string;
  nav_customers: string;
  nav_returns: string;
  nav_sales: string;
  nav_reports: string;
  nav_expenses: string;
  nav_staff: string;
  nav_settings: string;
  nav_dashboard: string;

  // Header & Status
  new_bill: string;
  shortcuts: string;
  dark_mode: string;
  light_mode: string;
  search_placeholder: string;
  barcode_placeholder: string;
  current_bill: string;
  switch_staff: string;
  open_shift: string;
  close_shift: string;

  // POS & Cart
  all_categories: string;
  sku: string;
  barcode: string;
  stock: string;
  in_stock: string;
  low_stock: string;
  out_of_stock: string;
  add_to_cart: string;
  current_order: string;
  clear_order: string;
  customer: string;
  walk_in_customer: string;
  items: string;
  qty: string;
  price: string;
  total: string;
  subtotal: string;
  discount: string;
  vat_5: string;
  grand_total: string;
  paid: string;
  balance: string;
  change: string;
  pay_cash: string;
  pay_card: string;
  hold_sale: string;
  resume_sale: string;
  held_sales_count: string;
  no_items_in_cart: string;
  scan_or_click_hint: string;

  // Modals & Receipts
  payment_modal_title: string;
  select_tender: string;
  cash_tendered: string;
  exact_amount: string;
  complete_payment: string;
  tax_invoice: string;
  trn_label: string;
  date_time: string;
  cashier: string;
  print_receipt: string;
  new_sale: string;
  thank_you_message: string;
}

export const translations: Record<"en" | "ar", TranslationDictionary> = {
  en: {
    nav_pos: "POS Checkout",
    nav_inventory: "Inventory",
    nav_products: "Products",
    nav_purchases: "Purchasing",
    nav_suppliers: "Suppliers",
    nav_customers: "Customers",
    nav_returns: "Returns",
    nav_sales: "Sales History",
    nav_reports: "Reports",
    nav_expenses: "Expenses",
    nav_staff: "Staff",
    nav_settings: "Settings",
    nav_dashboard: "Dashboard",

    new_bill: "New Sale",
    shortcuts: "Shortcuts",
    dark_mode: "Dark Mode",
    light_mode: "Light Mode",
    search_placeholder: "Search product name, SKU or barcode (Ctrl+K)...",
    barcode_placeholder: "Scan Barcode (F3)...",
    current_bill: "Cart",
    switch_staff: "Switch Staff",
    open_shift: "Open Shift",
    close_shift: "Close Shift",

    all_categories: "All Categories",
    sku: "SKU",
    barcode: "Barcode",
    stock: "Stock",
    in_stock: "In Stock",
    low_stock: "Low Stock",
    out_of_stock: "Out of Stock",
    add_to_cart: "Add",
    current_order: "Current Sale",
    clear_order: "Clear",
    customer: "Customer",
    walk_in_customer: "Walk-in Retail Customer",
    items: "Items",
    qty: "Qty",
    price: "Price",
    total: "Total",
    subtotal: "Subtotal",
    discount: "Discount",
    vat_5: "VAT (5% UAE FTA)",
    grand_total: "Grand Total",
    paid: "Paid",
    balance: "Balance",
    change: "Change Due",
    pay_cash: "Cash Pay",
    pay_card: "Card Pay",
    hold_sale: "Hold Sale",
    resume_sale: "Resume Sale",
    held_sales_count: "Held Carts",
    no_items_in_cart: "No items added to current sale",
    scan_or_click_hint: "Scan a barcode or click any product card on the left to begin billing.",

    payment_modal_title: "Process Sale Payment",
    select_tender: "Select Payment Tender",
    cash_tendered: "Cash Amount Tendered",
    exact_amount: "Exact Amount",
    complete_payment: "Complete & Print Tax Invoice",
    tax_invoice: "SIMPLIFIED TAX INVOICE",
    trn_label: "Tax Registration No. (TRN)",
    date_time: "Date & Time",
    cashier: "Cashier",
    print_receipt: "Print Receipt",
    new_sale: "Start Next Sale",
    thank_you_message: "Thank you for shopping with us! Please visit again.",
  },
  ar: {
    nav_pos: "نقطة البيع",
    nav_inventory: "المخزون",
    nav_products: "المنتجات",
    nav_purchases: "المشتريات",
    nav_suppliers: "الموردين",
    nav_customers: "العملاء",
    nav_returns: "المرتجعات",
    nav_sales: "سجل المبيعات",
    nav_reports: "التقارير",
    nav_expenses: "المصروفات",
    nav_staff: "الموظفين",
    nav_settings: "الإعدادات",
    nav_dashboard: "لوحة التحكم",

    new_bill: "فاتورة جديدة",
    shortcuts: "الاختصارات",
    dark_mode: "الوضع الليلي",
    light_mode: "الوضع النهاري",
    search_placeholder: "ابحث عن اسم المنتج، الكود أو الباركود (Ctrl+K)...",
    barcode_placeholder: "مسح الباركود (F3)...",
    current_bill: "السلة",
    switch_staff: "تبديل الموظف",
    open_shift: "فتح الوردية",
    close_shift: "إغلاق الوردية",

    all_categories: "جميع الأقسام",
    sku: "الكود",
    barcode: "الباركود",
    stock: "المخزون",
    in_stock: "متوفر",
    low_stock: "مخزون منخفض",
    out_of_stock: "نفدت الكمية",
    add_to_cart: "إضافة",
    current_order: "الطلب الحالي",
    clear_order: "إلغاء",
    customer: "العميل",
    walk_in_customer: "عميل تجزئة مباشر",
    items: "الأصناف",
    qty: "الكمية",
    price: "السعر",
    total: "الإجمالي",
    subtotal: "المجموع الفرعي",
    discount: "الخصم",
    vat_5: "ضريبة القيمة المضافة (5%)",
    grand_total: "الإجمالي النهائي",
    paid: "المدفوع",
    balance: "المتبقي",
    change: "المتبقي للعميل",
    pay_cash: "الدفع نقداً",
    pay_card: "الدفع بالبطاقة",
    hold_sale: "تعليق الطلب",
    resume_sale: "استئناف الطلب",
    held_sales_count: "الطلبات المعلقة",
    no_items_in_cart: "لا توجد منتجات في الفاتورة الحالية",
    scan_or_click_hint: "امسح الباركود بجهاز المسح أو انقر على أي بطاقة منتج للبدء.",

    payment_modal_title: "معالجة عملية الدفع",
    select_tender: "طريقة السداد",
    cash_tendered: "المبلغ النقدي المسلم",
    exact_amount: "المبلغ بالضبط",
    complete_payment: "إتمام وطباعة الفاتورة الضريبية",
    tax_invoice: "فاتورة ضريبية مبسطة",
    trn_label: "الرقم الضريبي (TRN)",
    date_time: "التاريخ والوقت",
    cashier: "أمين الصندوق",
    print_receipt: "طباعة الفاتورة",
    new_sale: "بدء فاتورة جديدة",
    thank_you_message: "شكراً لتسوقكم معنا! نتطلع لزيارتكم مجدداً.",
  },
};
