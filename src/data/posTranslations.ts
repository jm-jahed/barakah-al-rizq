export interface TranslationStrings {
  // Navigation
  nav_pos: string;
  nav_tables: string;
  nav_kitchen: string;
  nav_orders: string;
  nav_dashboard: string;
  nav_menu: string;
  nav_categories: string;
  nav_reports: string;
  nav_staff: string;
  nav_customers: string;
  nav_settings: string;
  shortcuts: string;
  role_admin: string;
  role_manager: string;
  role_cashier: string;
  role_kitchen: string;
  switch_user: string;
  lock_terminal: string;
  enter_pin: string;
  transfer_table: string;
  transfer_to: string;
  export_csv: string;
  export_excel: string;
  delete_confirm: string;
  currency_dhs: string;
  sales_reports: string;
  daily_sales: string;
  weekly_sales: string;
  monthly_sales: string;
  product_sales: string;
  category_sales: string;
  vat_collected: string;
  payment_methods_report: string;

  // Order types
  dine_in: string;
  takeaway: string;
  delivery: string;

  // Header & Info
  cashier: string;
  terminal: string;
  search_placeholder: string;
  keyboard_shortcuts: string;
  light_mode: string;
  dark_mode: string;

  // Categories
  cat_all: string;
  cat_burgers: string;
  cat_pizza: string;
  cat_rice: string;
  cat_grill: string;
  cat_pasta: string;
  cat_appetizers: string;
  cat_drinks: string;
  cat_coffee: string;
  cat_desserts: string;

  // Cart & Bill
  current_bill: string;
  order_number: string;
  invoice_number: string;
  table_label: string;
  guest: string;
  guest_count: string;
  items_count: string;
  empty_cart_title: string;
  empty_cart_sub: string;
  clear_order: string;
  hold_order: string;
  send_to_kitchen: string;
  subtotal: string;
  discount: string;
  add_discount: string;
  discount_type: string;
  percent: string;
  fixed_aed: string;
  vat_5: string;
  vat_tax: string;
  service_charge: string;
  delivery_fee: string;
  grand_total: string;
  pay_now: string;
  item_note: string;
  item_note_placeholder: string;
  quantity: string;
  unit_price: string;
  line_total: string;

  // Payment Modal
  checkout_title: string;
  amount_payable: string;
  select_payment_method: string;
  pay_cash: string;
  pay_card: string;
  pay_apple_pay: string;
  pay_bank_transfer: string;
  pay_split: string;
  cash_tendered: string;
  change_due: string;
  balance_due: string;
  exact_cash: string;
  confirm_and_print: string;
  cancel: string;
  split_payment_desc: string;
  remaining_balance: string;

  // Receipt
  receipt_title: string;
  tax_invoice: string;
  trn: string;
  receipt_no: string;
  date_time: string;
  print_receipt: string;
  download_pdf: string;
  share_whatsapp: string;
  new_bill: string;
  payment_method: string;
  paid_amount: string;
  change_amount: string;
  served_by: string;
  qr_verified: string;
  view_receipt_en: string;
  view_receipt_ar: string;
  view_receipt_bilingual: string;

  // Tables
  table_management: string;
  all_tables: string;
  available: string;
  occupied: string;
  reserved: string;
  billed: string;
  select_table: string;
  open_table_order: string;
  zone_indoor: string;
  zone_terrace: string;
  zone_vip: string;
  zone_family: string;
  seats: string;

  // Kitchen (KDS)
  kitchen_display: string;
  kds_desc: string;
  kot_ticket: string;
  status_new: string;
  status_preparing: string;
  status_ready: string;
  status_served: string;
  status_cancelled: string;
  status_completed: string;
  start_preparing: string;
  mark_ready: string;
  mark_served: string;
  special_note: string;
  elapsed_time: string;

  // Orders Ledger
  order_history: string;
  filter_today: string;
  filter_yesterday: string;
  filter_week: string;
  filter_all: string;
  search_orders: string;
  reprint_receipt: string;
  void_order: string;
  void_confirm_title: string;
  void_confirm_desc: string;
  status_paid: string;
  status_open: string;
  status_voided: string;

  // Dashboard
  dashboard_title: string;
  today_sales: string;
  orders_today: string;
  avg_order: string;
  active_tables_count: string;
  sales_by_hour: string;
  top_selling: string;
  payment_split_title: string;
  quick_stats: string;

  // Menu Management
  menu_inventory: string;
  add_product: string;
  edit_product: string;
  product_name_en: string;
  product_name_ar: string;
  price_aed: string;
  category: string;
  stock_status: string;
  in_stock: string;
  low_stock: string;
  out_of_stock: string;
  toggle_availability: string;

  // Customer Directory
  customer_directory: string;
  add_customer: string;
  customer_name: string;
  phone_number: string;
  delivery_address: string;
  total_spent: string;
  order_count: string;
  walk_in: string;

  // Common UI
  save: string;
  close: string;
  currency: string;
  currency_sym: string;
  delete: string;
  confirm: string;
  created_successfully: string;
  notification: string;
}

export const TRANSLATIONS: Record<"en" | "ar", TranslationStrings> = {
  en: {
    nav_pos: "POS Billing",
    nav_tables: "Table Plan",
    nav_kitchen: "Kitchen KDS",
    nav_orders: "Order Ledger",
    nav_dashboard: "Live Analytics",
    nav_menu: "Menu Items",
    nav_categories: "Categories",
    nav_reports: "Sales Reports",
    nav_staff: "Staff & Roles",
    nav_customers: "Customers",
    nav_settings: "POS Settings",
    shortcuts: "Shortcuts",
    role_admin: "Administrator",
    role_manager: "Manager",
    role_cashier: "Cashier",
    role_kitchen: "Kitchen Chef",
    switch_user: "Switch Staff",
    lock_terminal: "Lock Terminal",
    enter_pin: "Enter 4-Digit Staff PIN",
    transfer_table: "Transfer Table",
    transfer_to: "Transfer to Table",
    export_csv: "Export CSV",
    export_excel: "Export Excel",
    delete_confirm: "Are you sure you want to delete this item?",
    currency_dhs: "Dhs",
    sales_reports: "Financial & Sales Reports",
    daily_sales: "Daily Sales",
    weekly_sales: "Weekly Sales",
    monthly_sales: "Monthly Sales",
    product_sales: "Product Breakdown",
    category_sales: "Category Breakdown",
    vat_collected: "5% VAT Collected",
    payment_methods_report: "Payment Method Breakdown",

    dine_in: "Dine-In",
    takeaway: "Takeaway",
    delivery: "Delivery",

    cashier: "Cashier",
    terminal: "Terminal #01",
    search_placeholder: "Search items, SKU, burgers, biryani... (Press '/')",
    keyboard_shortcuts: "Keyboard Shortcuts",
    light_mode: "Light Mode",
    dark_mode: "Dark Mode",

    cat_all: "All Menu",
    cat_burgers: "Artisan Burgers",
    cat_pizza: "Stone Pizzas",
    cat_rice: "Royal Rice & Biryani",
    cat_grill: "Charcoal Grills",
    cat_pasta: "Fresh Pastas",
    cat_appetizers: "Appetizers & Mezza",
    cat_drinks: "Fresh Juices & Mojitos",
    cat_coffee: "Specialty Coffee",
    cat_desserts: "Gourmet Desserts",

    current_bill: "Current Order",
    order_number: "Order #",
    invoice_number: "Invoice #",
    table_label: "Table",
    guest: "Guest",
    guest_count: "Guests",
    items_count: "items",
    empty_cart_title: "No items in current order",
    empty_cart_sub: "Click or tap menu cards on the left or press '/' to search",
    clear_order: "Clear",
    hold_order: "Hold Bill",
    send_to_kitchen: "Send to Kitchen",
    subtotal: "Subtotal",
    discount: "Discount",
    add_discount: "Discount",
    discount_type: "Discount Type",
    percent: "Percentage (%)",
    fixed_aed: "Fixed (AED)",
    vat_5: "UAE VAT (5%)",
    vat_tax: "Tax",
    service_charge: "Service Charge",
    delivery_fee: "Delivery Fee",
    grand_total: "Grand Total",
    pay_now: "Pay & Print Bill (F4)",
    item_note: "Add special cooking notes...",
    item_note_placeholder: "e.g. No onion, spicy, sauce on side",
    quantity: "Qty",
    unit_price: "Unit Price",
    line_total: "Total",

    checkout_title: "Checkout & Instant Settlement",
    amount_payable: "Total Payable",
    select_payment_method: "Select Payment Method",
    pay_cash: "Cash (AED)",
    pay_card: "Credit / Debit Card",
    pay_apple_pay: "Apple / Google Pay",
    pay_bank_transfer: "Bank Transfer",
    pay_split: "Split Payment",
    cash_tendered: "Cash Tendered",
    change_due: "Change Due",
    balance_due: "Balance Due",
    exact_cash: "Exact Cash",
    confirm_and_print: "Complete Payment & Print Receipt",
    cancel: "Cancel",
    split_payment_desc: "Split the bill between multiple tender methods",
    remaining_balance: "Remaining Due",

    receipt_title: "Official Restaurant Receipt",
    tax_invoice: "SIMPLIFIED TAX INVOICE",
    trn: "TRN",
    receipt_no: "Receipt #",
    date_time: "Date & Time",
    print_receipt: "Print Receipt (F8)",
    download_pdf: "Download PDF",
    share_whatsapp: "Share WhatsApp",
    new_bill: "New Bill (F2)",
    payment_method: "Payment Method",
    paid_amount: "Amount Paid",
    change_amount: "Change Returned",
    served_by: "Served by",
    qr_verified: "FTA Compliant QR Code Verified",
    view_receipt_en: "English Slip",
    view_receipt_ar: "الفاتورة بالعربية",
    view_receipt_bilingual: "Bilingual / ثنائي اللغة",

    table_management: "Restaurant Floor & Table Plan",
    all_tables: "All Zones",
    available: "Available",
    occupied: "Occupied",
    reserved: "Reserved",
    billed: "Bill Printed",
    select_table: "Select Table",
    open_table_order: "Open Order",
    zone_indoor: "Main Indoor Hall",
    zone_terrace: "Marina Terrace",
    zone_vip: "VIP Majlis Lounge",
    zone_family: "Family Dining Area",
    seats: "seats",

    kitchen_display: "Kitchen Display System (KDS)",
    kds_desc: "Real-time kitchen order tickets, order timers and station routing",
    kot_ticket: "Ticket",
    status_new: "NEW",
    status_preparing: "COOKING",
    status_ready: "READY FOR PICKUP",
    status_served: "DISPATCHED / SERVED",
    status_cancelled: "CANCELLED",
    status_completed: "COMPLETED",
    start_preparing: "Start Cooking",
    mark_ready: "Mark Ready",
    mark_served: "Complete & Serve",
    special_note: "Kitchen Note",
    elapsed_time: "Elapsed",

    order_history: "Order History & Financial Ledger",
    filter_today: "Today",
    filter_yesterday: "Yesterday",
    filter_week: "This Week",
    filter_all: "All History",
    search_orders: "Search by order #, receipt #, customer name...",
    reprint_receipt: "View / Print",
    void_order: "Void Bill",
    void_confirm_title: "Confirm Void Operation",
    void_confirm_desc: "Are you sure you want to void this bill? This financial action will be logged in the audit trail.",
    status_paid: "PAID",
    status_open: "OPEN",
    status_voided: "VOIDED",

    dashboard_title: "Executive Restaurant Analytics",
    today_sales: "Today's Gross Sales",
    orders_today: "Total Orders Today",
    avg_order: "Average Order Value",
    active_tables_count: "Active Seated Tables",
    sales_by_hour: "Hourly Sales Volume",
    top_selling: "Top Revenue Generating Dishes",
    payment_split_title: "Payment Channel Breakdown",
    quick_stats: "Service Speed & KPI Breakdown",

    menu_inventory: "Menu Management & Live Stock",
    add_product: "Add New Product",
    edit_product: "Edit Product",
    product_name_en: "Item Name (English)",
    product_name_ar: "Item Name (Arabic)",
    price_aed: "Price (AED)",
    category: "Category",
    stock_status: "Inventory Status",
    in_stock: "In Stock",
    low_stock: "Low Stock (< 10)",
    out_of_stock: "Sold Out",
    toggle_availability: "Toggle Stock",

    customer_directory: "Customer Database & VIP Accounts",
    add_customer: "Add Customer",
    customer_name: "Customer Name",
    phone_number: "Mobile Number (+971)",
    delivery_address: "Delivery Address & Zone",
    total_spent: "Lifetime Spend",
    order_count: "Total Orders",
    walk_in: "Walk-in Guest (General)",

    save: "Save",
    close: "Close",
    currency: "AED",
    currency_sym: "AED",
    delete: "Delete",
    confirm: "Confirm",
    created_successfully: "Operation executed successfully",
    notification: "Notification",
  },
  ar: {
    nav_pos: "نقطة البيع والفوترة",
    nav_tables: "مخطط الصالة والطاولات",
    nav_kitchen: "شاشة المطبخ (KDS)",
    nav_orders: "سجل الفواتير والعمليات",
    nav_dashboard: "التحليلات والمؤشرات الحية",
    nav_menu: "أصناف القائمة",
    nav_categories: "إدارة التصنيفات",
    nav_reports: "تقارير المبيعات",
    nav_staff: "فريق العمل والأدوار",
    nav_customers: "سجل العملاء والضيوف",
    nav_settings: "إعدادات المنشأة والضريبة",
    shortcuts: "اختصارات سريعة",
    role_admin: "مدير النظام (Admin)",
    role_manager: "مشرف الصالة (Manager)",
    role_cashier: "أمين الصندوق (Cashier)",
    role_kitchen: "طاهي المطبخ (Kitchen)",
    switch_user: "تبديل الموظف",
    lock_terminal: "قفل المحطة",
    enter_pin: "أدخل رمز PIN المكون من 4 أرقام",
    transfer_table: "نقل الطاولة",
    transfer_to: "نقل الطلب إلى طاولة",
    export_csv: "تصدير ملف CSV",
    export_excel: "تصدير ملف Excel",
    delete_confirm: "هل أنت متأكد من رغبتك في حذف هذا العنصر؟",
    currency_dhs: "د.إ",
    sales_reports: "التقارير المالية والمبيعات",
    daily_sales: "المبيعات اليومية",
    weekly_sales: "المبيعات الأسبوعية",
    monthly_sales: "المبيعات الشهرية",
    product_sales: "مبيعات الأصناف بالتفصيل",
    category_sales: "توزيع المبيعات حسب التصنيف",
    vat_collected: "ضريبة القيمة المضافة 5%",
    payment_methods_report: "توزيع وسائل الدفع",

    dine_in: "تناول محلي (صالة)",
    takeaway: "استلام خارجي (سفري)",
    delivery: "توصيل طلبات",

    cashier: "موظف الصندوق",
    terminal: "نقطة بيع #01",
    search_placeholder: "ابحث بالاسم، الرمز، برجر، برياني... (اضغط '/')",
    keyboard_shortcuts: "اختصارات لوحة المفاتيح",
    light_mode: "الوضع النهاري (الفاتح)",
    dark_mode: "الوضع الليلي (الداكن)",

    cat_all: "كافة الأطباق",
    cat_burgers: "برجر مميز وعلى الفحم",
    cat_pizza: "بيتزا الفرن الحجري",
    cat_rice: "أرز وبرياني ملكي",
    cat_grill: "مشاوي فحم أصيلة",
    cat_pasta: "باستا طازجة",
    cat_appetizers: "مقبلات ومقبلات باردة وساخنة",
    cat_drinks: "عصائر طبيعية وموخيتو",
    cat_coffee: "قهوة مختصة وعربية أصيلة",
    cat_desserts: "حلويات شرقية وغربية فاخرة",

    current_bill: "الطلب والفاتورة الحالية",
    order_number: "رقم الطلب #",
    invoice_number: "رقم الفاتورة #",
    table_label: "طاولة",
    guest: "الضيف",
    guest_count: "عدد الضيوف",
    items_count: "أصناف",
    empty_cart_title: "لا توجد عناصر في الفاتورة حالياً",
    empty_cart_sub: "انقر على بطاقات الأصناف على اليمين أو اضغط '/' للبحث السريع",
    clear_order: "تفريغ الفاتورة",
    hold_order: "تعليق الطلب",
    send_to_kitchen: "إرسال للمطبخ (أمر تشغيل KOT)",
    subtotal: "المجموع الفرعي (غير شامل الضريبة)",
    discount: "الخصم التجاري",
    add_discount: "تطبيق خصم",
    discount_type: "طريقة حساب الخصم",
    percent: "نسبة مئوية (%)",
    fixed_aed: "مبلغ مقطوع (درهم)",
    vat_5: "ضريبة القيمة المضافة (5%)",
    vat_tax: "الضريبة المستحقة",
    service_charge: "رسوم الخدمة",
    delivery_fee: "رسوم التوصيل",
    grand_total: "المجموع الإجمالي النهائي (شاملاً الضريبة)",
    pay_now: "سداد وطباعة الفاتورة (F4)",
    item_note: "ملاحظات إعداد الطبق...",
    item_note_placeholder: "مثال: بدون بصل، الصوص جانباً، حار",
    quantity: "العدد",
    unit_price: "السعر الفردي",
    line_total: "المجموع",

    checkout_title: "تسوية الحساب وسداد الفاتورة",
    amount_payable: "المبلغ الإجمالي المستحق للسداد",
    select_payment_method: "اختر وسيلة الدفع",
    pay_cash: "نقداً (درهم إماراتي)",
    pay_card: "بطاقة مصرفية (مدى / فيزا / ماستركارد)",
    pay_apple_pay: "أبل باي / الدفع اللاتلامسي",
    pay_bank_transfer: "تحويل بنكي مباشر",
    pay_split: "دفع مجزأ (نقدي + بطاقة)",
    cash_tendered: "المبلغ المقبوض من العميل",
    change_due: "المتبقي للعميل (الفكة)",
    balance_due: "الرصيد المتبقي المستحق",
    exact_cash: "المبلغ بالتمام",
    confirm_and_print: "إتمام السداد وإصدار الفاتورة الضريبية",
    cancel: "إلغاء التراجع",
    split_payment_desc: "توزيع قيمة الفاتورة على أكثر من وسيلة سداد",
    remaining_balance: "المتبقي لإتمام الفاتورة",

    receipt_title: "فاتورة ضريبية رسمية للمطعم",
    tax_invoice: "فاتورة ضريبية مبسطة",
    trn: "الرقم الضريبي للمنشأة",
    receipt_no: "رقم الفاتورة",
    date_time: "التاريخ والوقت",
    print_receipt: "طباعة الفاتورة (F8)",
    download_pdf: "تحميل بصيغة PDF",
    share_whatsapp: "مشاركة عبر واتساب",
    new_bill: "فاتورة جديدة (F2)",
    payment_method: "وسيلة السداد",
    paid_amount: "المبلغ المسدد",
    change_amount: "المتبقي المرتجع للعميل",
    served_by: "خدمة الموظف",
    qr_verified: "رمز استجابة سريعة معتمد ومتوافق مع هيئة الضرائب الاتحادية",
    view_receipt_en: "English Slip",
    view_receipt_ar: "الفاتورة بالعربية",
    view_receipt_bilingual: "فاتورة ثنائية اللغة",

    table_management: "مخطط الصالة وإدارة الطاولات",
    all_tables: "كافة الأقسام والمناطق",
    available: "متاحة للجلوس",
    occupied: "مشغولة حالياً",
    reserved: "محجوزة مسبقاً",
    billed: "تمت طباعة الفاتورة",
    select_table: "اختر الطاولة",
    open_table_order: "فتح طلب الطاولة",
    zone_indoor: "الصالة الداخلية الرئيسية",
    zone_terrace: "تراس المارينا الخارجي",
    zone_vip: "مجلس كبار الشخصيات (VIP)",
    zone_family: "قسم العائلات والخصوصية",
    seats: "مقاعد",

    kitchen_display: "شاشة تحضير المطبخ (KDS)",
    kds_desc: "أوامر التشغيل المباشرة، متابعة أوقات الطهي وتوجيه المحطات",
    kot_ticket: "تذكرة تشغيل",
    status_new: "طلب جديد",
    status_preparing: "قيد التحضير والطهي",
    status_ready: "جاهز للتسليم والتقديم",
    status_served: "تم التقديم للعميل",
    status_cancelled: "ملغي",
    status_completed: "مكتمل",
    start_preparing: "بدء الطهي والتحضير",
    mark_ready: "تأكيد الجاهزية للتقديم",
    mark_served: "تسليم الطلب للعميل",
    special_note: "ملاحظات الشيف والطهي",
    elapsed_time: "الوقت المنقضي",

    order_history: "سجل العمليات والفواتير الضريبية",
    filter_today: "اليوم",
    filter_yesterday: "أمس",
    filter_week: "هذا الأسبوع",
    filter_all: "كافة الفترات",
    search_orders: "ابحث برقم الفاتورة، رقم الطلب، أو اسم العميل...",
    reprint_receipt: "عرض وإعادة طباعة",
    void_order: "إلغاء الفاتورة (Void)",
    void_confirm_title: "تأكيد إلغاء الفاتورة الضريبية",
    void_confirm_desc: "هل أنت متأكد من رغبتك في إلغاء هذه الفاتورة؟ سيتم توثيق عملية الإلغاء في سجل الرقابة والتدقيق المالي للمنشأة.",
    status_paid: "مسددة بالكامل",
    status_open: "مفتوحة",
    status_voided: "ملغاة رسمياً",

    dashboard_title: "لوحة مؤشرات وتحليلات المطعم المباشرة",
    today_sales: "إجمالي المبيعات اليومية (درهم)",
    orders_today: "إجمالي طلبات اليوم",
    avg_order: "متوسط قيمة الطلب الواحد",
    active_tables_count: "الطاولات المشغولة حالياً",
    sales_by_hour: "توزيع المبيعات على ساعات اليوم",
    top_selling: "الأطباق الأكثر طلباً وإيراداً",
    payment_split_title: "توزيع وسائل الدفع والسداد",
    quick_stats: "مؤشرات سرعة الخدمة وتدوير الطاولات",

    menu_inventory: "إدارة قائمة الطعام والمخزون الحي",
    add_product: "إضافة صنف جديد للقائمة",
    edit_product: "تعديل بيانات الصنف",
    product_name_en: "اسم الصنف (بالإنجليزية)",
    product_name_ar: "اسم الصنف (بالعربية)",
    price_aed: "السعر بالدرهم الإماراتي",
    category: "تصنيف الطبق",
    stock_status: "حالة المخزون والمستودع",
    in_stock: "متوفر للطلب",
    low_stock: "مخزون منخفض (< 10)",
    out_of_stock: "نفدت الكمية بالمطبخ",
    toggle_availability: "تبديل حالة التوفر",

    customer_directory: "دليل الضيوف وحسابات كبار الشخصيات",
    add_customer: "تسجيل عميل جديد",
    customer_name: "اسم العميل / الضيف",
    phone_number: "رقم الهاتف المتحرك (+971)",
    delivery_address: "عنوان ومنطقة التوصيل",
    total_spent: "إجمالي الإنفاق التراكمي",
    order_count: "عدد الطلبات السابقة",
    walk_in: "ضيف صالة (بدون تسجيل)",

    save: "حفظ التعديلات",
    close: "إغلاق النافذة",
    currency: "درهم إماراتي",
    currency_sym: "د.إ",
    delete: "حذف السجل",
    confirm: "تأكيد العملية",
    created_successfully: "تم تنفيذ العملية بنجاح تام",
    notification: "إشعار نظام نقطة البيع",
  },
};
