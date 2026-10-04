const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const retailApi = {
  // Health
  checkHealth: async () => {
    const res = await fetch(`${API_BASE}/health`);
    return res.json();
  },

  // Products
  getProducts: async () => {
    const res = await fetch(`${API_BASE}/products`);
    return res.json();
  },

  getProductByBarcode: async (barcode: string) => {
    const res = await fetch(`${API_BASE}/products/barcode/${encodeURIComponent(barcode)}`);
    return res.json();
  },

  // Categories
  getCategories: async () => {
    const res = await fetch(`${API_BASE}/categories`);
    return res.json();
  },

  // Orders
  getOrders: async () => {
    const res = await fetch(`${API_BASE}/orders`);
    return res.json();
  },

  createOrder: async (orderData: any) => {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    return res.json();
  },

  // Held Sales
  getHeldSales: async () => {
    const res = await fetch(`${API_BASE}/orders/held-sales`);
    return res.json();
  },

  saveHeldSale: async (saleData: any) => {
    const res = await fetch(`${API_BASE}/orders/held-sales`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saleData),
    });
    return res.json();
  },

  deleteHeldSale: async (id: string) => {
    const res = await fetch(`${API_BASE}/orders/held-sales/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    return res.json();
  },

  // Settings
  getSettings: async () => {
    const res = await fetch(`${API_BASE}/settings`);
    return res.json();
  },

  // Reports
  getReports: async () => {
    const res = await fetch(`${API_BASE}/reports`);
    return res.json();
  },
};

export default retailApi;
