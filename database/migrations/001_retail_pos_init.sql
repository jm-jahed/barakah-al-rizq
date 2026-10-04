-- ============================================================================
-- UNIVERSAL RETAIL POS - POSTGRESQL INITIAL SCHEMA MIGRATION
-- Migration: 001_retail_pos_init.sql
-- ============================================================================

CREATE TABLE IF NOT EXISTS retail_shops (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    address TEXT,
    phone VARCHAR(50),
    email VARCHAR(100),
    trn VARCHAR(20),
    logo_url TEXT,
    default_currency VARCHAR(10) DEFAULT 'AED',
    vat_percentage NUMERIC(5, 2) DEFAULT 5.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retail_users (
    id VARCHAR(64) PRIMARY KEY,
    shop_id VARCHAR(64) REFERENCES retail_shops(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'CASHIER',
    pin VARCHAR(10),
    active BOOLEAN DEFAULT TRUE,
    phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retail_categories (
    id VARCHAR(64) PRIMARY KEY,
    shop_id VARCHAR(64) REFERENCES retail_shops(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    display_order INT DEFAULT 0,
    enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (shop_id, slug)
);

CREATE TABLE IF NOT EXISTS retail_products (
    id VARCHAR(64) PRIMARY KEY,
    shop_id VARCHAR(64) REFERENCES retail_shops(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    sku VARCHAR(100) NOT NULL,
    barcode VARCHAR(100) NOT NULL,
    category_id VARCHAR(64) REFERENCES retail_categories(id),
    brand_name VARCHAR(100),
    unit VARCHAR(50) DEFAULT 'Piece',
    cost_price NUMERIC(12, 3) DEFAULT 0.000,
    selling_price NUMERIC(12, 3) DEFAULT 0.000,
    discount_percentage NUMERIC(5, 2) DEFAULT 0.00,
    tax_percentage NUMERIC(5, 2) DEFAULT 5.00,
    stock INT DEFAULT 0,
    min_stock_alert INT DEFAULT 5,
    image TEXT,
    description TEXT,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    expiry_date DATE,
    batch_number VARCHAR(100),
    is_pinned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (shop_id, sku),
    UNIQUE (shop_id, barcode)
);

CREATE INDEX IF NOT EXISTS idx_retail_products_barcode ON retail_products(barcode);
CREATE INDEX IF NOT EXISTS idx_retail_products_sku ON retail_products(sku);
CREATE INDEX IF NOT EXISTS idx_retail_products_category ON retail_products(category_id);

CREATE TABLE IF NOT EXISTS retail_product_variants (
    id VARCHAR(64) PRIMARY KEY,
    product_id VARCHAR(64) REFERENCES retail_products(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) UNIQUE NOT NULL,
    barcode VARCHAR(100) UNIQUE NOT NULL,
    price_modifier NUMERIC(12, 3) DEFAULT 0.000,
    stock INT DEFAULT 0,
    variant_type VARCHAR(50) NOT NULL,
    variant_value VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS retail_stock_movements (
    id VARCHAR(64) PRIMARY KEY,
    product_id VARCHAR(64) REFERENCES retail_products(id) ON DELETE CASCADE,
    type VARCHAR(20) NOT NULL, -- SALE, PURCHASE, RETURN, ADJUSTMENT, DAMAGE, MANUAL
    quantity INT NOT NULL,
    previous_stock INT NOT NULL,
    new_stock INT NOT NULL,
    reference_id VARCHAR(100),
    user_id VARCHAR(64) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_stock_movements_product ON retail_stock_movements(product_id, created_at);

CREATE TABLE IF NOT EXISTS retail_price_history (
    id VARCHAR(64) PRIMARY KEY,
    product_id VARCHAR(64) REFERENCES retail_products(id) ON DELETE CASCADE,
    price_type VARCHAR(20) NOT NULL, -- COST, SELLING
    old_price NUMERIC(12, 3) NOT NULL,
    new_price NUMERIC(12, 3) NOT NULL,
    currency VARCHAR(10) DEFAULT 'AED',
    changed_by_id VARCHAR(64) NOT NULL,
    changed_by_name VARCHAR(255) NOT NULL,
    reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retail_customers (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255),
    address TEXT,
    notes TEXT,
    total_orders INT DEFAULT 0,
    total_spent NUMERIC(14, 3) DEFAULT 0.000,
    last_purchase_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retail_suppliers (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    address TEXT,
    total_purchases INT DEFAULT 0,
    total_spent NUMERIC(14, 3) DEFAULT 0.000,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retail_cashier_shifts (
    id VARCHAR(64) PRIMARY KEY,
    shop_id VARCHAR(64) REFERENCES retail_shops(id) ON DELETE CASCADE,
    cashier_id VARCHAR(64) REFERENCES retail_users(id),
    opened_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    closed_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'OPEN',
    opening_cash NUMERIC(12, 3) NOT NULL,
    expected_cash NUMERIC(12, 3),
    actual_cash NUMERIC(12, 3),
    variance NUMERIC(12, 3),
    cash_sales NUMERIC(14, 3) DEFAULT 0.000,
    card_sales NUMERIC(14, 3) DEFAULT 0.000,
    total_sales NUMERIC(14, 3) DEFAULT 0.000,
    cash_in_total NUMERIC(12, 3) DEFAULT 0.000,
    cash_out_total NUMERIC(12, 3) DEFAULT 0.000,
    refunds_total NUMERIC(12, 3) DEFAULT 0.000,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS retail_orders (
    id VARCHAR(64) PRIMARY KEY,
    shop_id VARCHAR(64) REFERENCES retail_shops(id) ON DELETE CASCADE,
    order_number VARCHAR(100) UNIQUE NOT NULL,
    order_type VARCHAR(20) DEFAULT 'WALK_IN',
    status VARCHAR(20) DEFAULT 'COMPLETED',
    customer_id VARCHAR(64) REFERENCES retail_customers(id),
    customer_name VARCHAR(255),
    customer_phone VARCHAR(50),
    delivery_address TEXT,
    cashier_id VARCHAR(64) REFERENCES retail_users(id),
    shift_id VARCHAR(64) REFERENCES retail_cashier_shifts(id),
    item_count INT NOT NULL,
    subtotal NUMERIC(14, 3) NOT NULL,
    discount_type VARCHAR(20) DEFAULT 'NONE',
    discount_value NUMERIC(12, 3) DEFAULT 0.000,
    discount_total NUMERIC(12, 3) DEFAULT 0.000,
    tax_percentage NUMERIC(5, 2) DEFAULT 5.00,
    taxable_amount NUMERIC(14, 3) NOT NULL,
    tax_total NUMERIC(14, 3) NOT NULL,
    grand_total NUMERIC(14, 3) NOT NULL,
    paid_total NUMERIC(14, 3) NOT NULL,
    change_total NUMERIC(14, 3) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retail_currency_snapshots (
    id VARCHAR(64) PRIMARY KEY,
    order_id VARCHAR(64) UNIQUE REFERENCES retail_orders(id) ON DELETE CASCADE,
    currency_code VARCHAR(10) NOT NULL,
    currency_symbol VARCHAR(20) NOT NULL,
    currency_display VARCHAR(20) NOT NULL,
    decimals INT DEFAULT 2,
    exchange_rate_to_aed NUMERIC(10, 6) DEFAULT 1.000000,
    subtotal NUMERIC(14, 3) NOT NULL,
    discount NUMERIC(14, 3) NOT NULL,
    taxable_amount NUMERIC(14, 3) NOT NULL,
    tax_amount NUMERIC(14, 3) NOT NULL,
    grand_total NUMERIC(14, 3) NOT NULL,
    paid_amount NUMERIC(14, 3) NOT NULL,
    change_amount NUMERIC(14, 3) NOT NULL
);

CREATE TABLE IF NOT EXISTS retail_order_items (
    id VARCHAR(64) PRIMARY KEY,
    order_id VARCHAR(64) REFERENCES retail_orders(id) ON DELETE CASCADE,
    product_id VARCHAR(64) REFERENCES retail_products(id),
    product_name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) NOT NULL,
    barcode VARCHAR(100) NOT NULL,
    variant_name VARCHAR(255),
    unit_price NUMERIC(12, 3) NOT NULL,
    quantity INT NOT NULL,
    cost_price NUMERIC(12, 3) NOT NULL,
    discount_amount NUMERIC(12, 3) DEFAULT 0.000,
    tax_percentage NUMERIC(5, 2) DEFAULT 5.00,
    tax_amount NUMERIC(12, 3) NOT NULL,
    line_total NUMERIC(12, 3) NOT NULL
);

CREATE TABLE IF NOT EXISTS retail_audit_logs (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_role VARCHAR(20) NOT NULL,
    action VARCHAR(100) NOT NULL,
    entity VARCHAR(100) NOT NULL,
    entity_id VARCHAR(100),
    details TEXT NOT NULL,
    before_state TEXT,
    after_state TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
