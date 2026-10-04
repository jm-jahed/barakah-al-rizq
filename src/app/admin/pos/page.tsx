"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  ShoppingBag,
  Users,
  TrendingUp,
  BarChart3,
  FileText,
  Activity,
  Settings as SettingsIcon,
  ShieldAlert,
  Search,
  RefreshCw,
  LogOut,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Eye,
  Edit,
  Power,
  Sliders,
  Globe,
  Database,
  Server,
  UserCheck,
  ChevronRight,
  X,
  Filter,
} from "lucide-react";
import { apiFetch, removeAuthToken } from "@/services/apiClient";

type AdminTab =
  | "dashboard"
  | "restaurants"
  | "subscriptions"
  | "orders"
  | "users"
  | "revenue"
  | "analytics"
  | "activity"
  | "health"
  | "settings";

export default function SuperAdminPosPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [loading, setLoading] = useState(true);
  const [globalSearch, setGlobalSearch] = useState("");

  // Data States
  const [overview, setOverview] = useState<any>(null);
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [revenueData, setRevenueData] = useState<any>(null);
  const [activityLogs, setActivityLogs] = useState<any[]>([]);
  const [systemHealth, setSystemHealth] = useState<any>(null);
  const [saasSettings, setSaasSettings] = useState<any>(null);

  // Filters
  const [statusFilter, setStatusFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Modal / Drawer States
  const [selectedRestaurant, setSelectedRestaurant] = useState<any | null>(null);
  const [selectedRestaurantDetail, setSelectedRestaurantDetail] = useState<any | null>(null);
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
  const [confirmActionModal, setConfirmActionModal] = useState<{
    open: boolean;
    title: string;
    message: string;
    action: () => void;
  }>({ open: false, title: "", message: "", action: () => {} });

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [
        overviewRes,
        restRes,
        subRes,
        ordersRes,
        usersRes,
        revRes,
        actRes,
        healthRes,
        settingsRes,
      ] = await Promise.all([
        apiFetch("/api/admin/overview"),
        apiFetch(`/api/admin/restaurants?status=${statusFilter}&country=${countryFilter}&search=${globalSearch}`),
        apiFetch("/api/admin/subscriptions"),
        apiFetch(`/api/admin/orders?search=${globalSearch}`),
        apiFetch(`/api/admin/users?role=${roleFilter}&search=${globalSearch}`),
        apiFetch("/api/admin/revenue"),
        apiFetch("/api/admin/activity"),
        apiFetch("/api/admin/health"),
        apiFetch("/api/admin/settings"),
      ]);

      if (overviewRes.success) setOverview(overviewRes.data);
      if (restRes.success) setRestaurants(restRes.data || []);
      if (subRes.success) setSubscriptions(subRes.data || []);
      if (ordersRes.success) setOrders(ordersRes.data || []);
      if (usersRes.success) setUsersList(usersRes.data || []);
      if (revRes.success) setRevenueData(revRes.data);
      if (actRes.success) setActivityLogs(actRes.data || []);
      if (healthRes.success) setSystemHealth(healthRes.data);
      if (settingsRes.success) setSaasSettings(settingsRes.data);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [statusFilter, countryFilter, roleFilter]);

  const handleLogout = () => {
    removeAuthToken();
    router.push("/login");
  };

  const openRestaurantDetails = async (id: string) => {
    setIsDetailDrawerOpen(true);
    setSelectedRestaurantDetail(null);
    const res = await apiFetch(`/api/admin/restaurants/${id}`);
    if (res.success) {
      setSelectedRestaurantDetail(res.data);
    }
  };

  const handleStatusChange = (id: string, newStatus: string, restName: string) => {
    setConfirmActionModal({
      open: true,
      title: `${newStatus === "suspended" ? "Suspend" : "Activate"} Restaurant Account?`,
      message: `Are you sure you want to change status of ${restName} to '${newStatus}'?`,
      action: async () => {
        const res = await apiFetch(`/api/admin/restaurants/${id}`, {
          method: "PATCH",
          body: JSON.stringify({ status: newStatus }),
        });
        if (res.success) {
          fetchAllData();
          setConfirmActionModal({ open: false, title: "", message: "", action: () => {} });
        } else {
          alert(res.message || "Failed to update status");
        }
      },
    });
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await apiFetch("/api/admin/settings", {
      method: "PATCH",
      body: JSON.stringify(saasSettings),
    });
    if (res.success) {
      alert("SaaS settings saved successfully!");
      fetchAllData();
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex font-sans">
      {/* 1. Sidebar Navigation */}
      <aside className="w-64 bg-[#0F121C] border-r border-[#1E2333] flex flex-col flex-shrink-0 min-h-screen">
        <div className="p-5 border-b border-[#1E2333] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
            POS
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">SaaS Control</h2>
            <p className="text-[10px] text-amber-400 font-medium tracking-wider">SUPER ADMIN PORTAL</p>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {[
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
            { id: "restaurants", label: "Restaurants", icon: Building2, count: restaurants.length },
            { id: "subscriptions", label: "Subscriptions", icon: CreditCard },
            { id: "orders", label: "Orders", icon: ShoppingBag, count: orders.length },
            { id: "users", label: "Users & Staff", icon: Users, count: usersList.length },
            { id: "revenue", label: "Revenue Analytics", icon: TrendingUp },
            { id: "analytics", label: "Platform Growth", icon: BarChart3 },
            { id: "activity", label: "Activity Logs", icon: FileText },
            { id: "health", label: "System Health", icon: Activity },
            { id: "settings", label: "SaaS Settings", icon: SettingsIcon },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AdminTab)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  active
                    ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/30 text-amber-400 shadow-md shadow-amber-500/5"
                    : "text-slate-400 hover:text-slate-100 hover:bg-[#161A28]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${active ? "text-amber-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1C2030] text-slate-300 font-mono">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer Admin Info & Logout */}
        <div className="p-4 border-t border-[#1E2333] bg-[#0B0D14]">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">Platform Admin</p>
              <p className="text-[10px] text-slate-400 truncate">admin@pos.ae</p>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* 2. Main Workspace */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen bg-[#07090E]">
        {/* Header Bar */}
        <header className="h-16 border-b border-[#1E2333] bg-[#0F121C] px-6 flex items-center justify-between gap-4 sticky top-0 z-30">
          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Global search restaurants, owners, emails, phone, orders..."
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchAllData()}
              className="w-full pl-9 pr-4 py-2 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
            />
          </div>

          {/* System Health Badge & Refresh */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>API & DB Operational</span>
            </div>

            <button
              onClick={fetchAllData}
              className="p-2 bg-[#161A28] hover:bg-[#202538] border border-[#252B3D] rounded-xl text-slate-300 text-xs flex items-center gap-2 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-amber-400" : ""}`} />
              <span className="hidden md:inline">Sync Data</span>
            </button>
          </div>
        </header>

        {/* Tab Body Content */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6">
          {/* TAB 1: DASHBOARD */}
          {activeTab === "dashboard" && overview && (
            <div className="space-y-6">
              {/* KPI Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#0F121C] p-5 rounded-2xl border border-[#1E2333]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Tenants</p>
                  <p className="text-3xl font-black text-white mt-1">{overview.totalRestaurants}</p>
                  <p className="text-[11px] text-emerald-400 mt-2 font-medium">+{overview.newRestaurants30d} new in last 30d</p>
                </div>
                <div className="bg-[#0F121C] p-5 rounded-2xl border border-[#1E2333]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Restaurants</p>
                  <p className="text-3xl font-black text-emerald-400 mt-1">{overview.activeRestaurants}</p>
                  <p className="text-[11px] text-slate-400 mt-2">{overview.suspendedRestaurants} suspended / {overview.pendingRestaurants} pending</p>
                </div>
                <div className="bg-[#0F121C] p-5 rounded-2xl border border-[#1E2333]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Sales (AED)</p>
                  <p className="text-3xl font-black text-amber-400 mt-1">Dhs {overview.totalSales.toLocaleString()}</p>
                  <p className="text-[11px] text-slate-400 mt-2">Dhs {overview.monthlySales.toLocaleString()} this month</p>
                </div>
                <div className="bg-[#0F121C] p-5 rounded-2xl border border-[#1E2333]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subscription ARR</p>
                  <p className="text-3xl font-black text-white mt-1">Dhs {(overview.subscriptionRevenue * 12).toLocaleString()}</p>
                  <p className="text-[11px] text-amber-400 mt-2">Dhs {overview.subscriptionRevenue.toLocaleString()}/mo recurring</p>
                </div>
              </div>

              {/* GCC Currencies Breakdown */}
              <div className="bg-[#0F121C] p-6 rounded-2xl border border-[#1E2333] space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>GCC Country & Currency Platform Totals</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { flag: "🇦🇪", name: "UAE", code: "AED", symbol: "Dhs", total: overview.currencyTotals?.AED || 0 },
                    { flag: "🇸🇦", name: "Saudi Arabia", code: "SAR", symbol: "﷼", total: overview.currencyTotals?.SAR || 0 },
                    { flag: "🇶🇦", name: "Qatar", code: "QAR", symbol: "﷼", total: overview.currencyTotals?.QAR || 0 },
                    { flag: "🇰🇼", name: "Kuwait", code: "KWD", symbol: "د.ك", total: overview.currencyTotals?.KWD || 0 },
                    { flag: "🇧🇭", name: "Bahrain", code: "BHD", symbol: "BD", total: overview.currencyTotals?.BHD || 0 },
                    { flag: "🇴🇲", name: "Oman", code: "OMR", symbol: "﷼", total: overview.currencyTotals?.OMR || 0 },
                  ].map((c) => (
                    <div key={c.code} className="bg-[#141724] p-3.5 rounded-xl border border-[#22283A]">
                      <div className="text-lg">{c.flag}</div>
                      <div className="text-xs font-bold text-slate-300 mt-1">{c.name}</div>
                      <div className="text-sm font-black text-amber-400 mt-0.5">
                        {c.symbol} {c.total.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Tenants Quick List */}
              <div className="bg-[#0F121C] p-6 rounded-2xl border border-[#1E2333] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Registered Restaurant Tenants</h3>
                  <button
                    onClick={() => setActiveTab("restaurants")}
                    className="text-xs text-amber-400 hover:underline font-semibold"
                  >
                    View All Tenants →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#1E2333] text-slate-400 uppercase tracking-wider">
                        <th className="p-3">Restaurant</th>
                        <th className="p-3">Location</th>
                        <th className="p-3">Contact Email</th>
                        <th className="p-3">Plan</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#181C2B]">
                      {restaurants.slice(0, 5).map((r) => (
                        <tr key={r.id} className="hover:bg-[#141724]">
                          <td className="p-3 font-bold text-white">{r.name}</td>
                          <td className="p-3 text-slate-300">{r.city}, {r.country}</td>
                          <td className="p-3 text-slate-300">{r.email}</td>
                          <td className="p-3 text-amber-400 font-semibold">{r.subscriptionPlan}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${r.status === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/10 text-rose-400 border border-rose-500/30"}`}>
                              {r.status}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => openRestaurantDetails(r.id)}
                              className="px-2.5 py-1 bg-[#1E2333] hover:bg-[#282F45] text-slate-200 rounded-lg text-xs font-medium transition"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESTAURANTS */}
          {activeTab === "restaurants" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0F121C] p-4 rounded-2xl border border-[#1E2333]">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <span>Multi-Tenant Restaurant Accounts</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1C2030] text-slate-300 font-mono">
                    {restaurants.length} Registered
                  </span>
                </h2>

                <div className="flex items-center gap-3">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="">All Statuses</option>
                    <option value="active">Active Only</option>
                    <option value="suspended">Suspended Only</option>
                    <option value="pending">Pending</option>
                  </select>

                  <select
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="px-3 py-2 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="">All Countries</option>
                    <option value="United Arab Emirates">🇦🇪 UAE</option>
                    <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                    <option value="Qatar">🇶🇦 Qatar</option>
                    <option value="Kuwait">🇰🇼 Kuwait</option>
                    <option value="Bahrain">🇧🇭 Bahrain</option>
                    <option value="Oman">🇴🇲 Oman</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="bg-[#0F121C] rounded-2xl border border-[#1E2333] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#1E2333] text-slate-400 uppercase tracking-wider bg-[#121522]">
                        <th className="p-4">Restaurant</th>
                        <th className="p-4">Owner</th>
                        <th className="p-4">Country & Currency</th>
                        <th className="p-4">Products / Orders</th>
                        <th className="p-4">Total Sales</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#181C2B]">
                      {restaurants.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-12 text-center text-slate-500">
                            No restaurants found. New restaurant registrations will appear here.
                          </td>
                        </tr>
                      ) : (
                        restaurants.map((r) => (
                          <tr key={r.id} className="hover:bg-[#141724] transition">
                            <td className="p-4">
                              <div className="font-bold text-white text-sm">{r.name}</div>
                              <div className="text-[11px] text-slate-400 font-mono">ID: {r.id}</div>
                            </td>
                            <td className="p-4">
                              <div className="text-slate-200 font-medium">{r.ownerName}</div>
                              <div className="text-[11px] text-slate-400">{r.email}</div>
                            </td>
                            <td className="p-4">
                              <div className="text-slate-200">{r.country}</div>
                              <div className="text-[11px] font-bold text-amber-400">{r.currency} ({r.currencySymbol})</div>
                            </td>
                            <td className="p-4 text-slate-300">
                              {r.productsCount} items / {r.ordersCount} orders
                            </td>
                            <td className="p-4 font-black text-emerald-400">
                              {r.currencySymbol} {r.totalRevenue.toLocaleString()}
                            </td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${r.status === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/10 text-rose-400 border border-rose-500/30"}`}>
                                {r.status}
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => openRestaurantDetails(r.id)}
                                  className="px-2.5 py-1.5 bg-[#1E2333] hover:bg-[#282F45] text-slate-200 rounded-lg text-xs font-medium border border-[#2B3248] transition flex items-center gap-1"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>View</span>
                                </button>
                                {r.status === "active" ? (
                                  <button
                                    onClick={() => handleStatusChange(r.id, "suspended", r.name)}
                                    className="px-2.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-xs font-medium border border-rose-500/30 transition"
                                  >
                                    Suspend
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleStatusChange(r.id, "active", r.name)}
                                    className="px-2.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-medium border border-emerald-500/30 transition"
                                  >
                                    Activate
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SUBSCRIPTIONS */}
          {activeTab === "subscriptions" && (
            <div className="space-y-4">
              <div className="bg-[#0F121C] p-4 rounded-2xl border border-[#1E2333]">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-400" />
                  <span>SaaS Subscriptions Management</span>
                </h2>
              </div>

              <div className="bg-[#0F121C] rounded-2xl border border-[#1E2333] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#1E2333] text-slate-400 uppercase tracking-wider bg-[#121522]">
                        <th className="p-4">Restaurant</th>
                        <th className="p-4">Subscription Plan</th>
                        <th className="p-4">Monthly Fee</th>
                        <th className="p-4">Billing Status</th>
                        <th className="p-4">Renewal Date</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#181C2B]">
                      {subscriptions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-[#141724]">
                          <td className="p-4 font-bold text-white">{sub.restaurantName}</td>
                          <td className="p-4 font-semibold text-amber-400">{sub.planName}</td>
                          <td className="p-4 text-slate-200">Dhs {sub.monthlyPrice} / mo</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              {sub.status}
                            </span>
                          </td>
                          <td className="p-4 text-slate-400">{new Date(sub.renewalDate).toLocaleDateString()}</td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => alert(`Updated plan for ${sub.restaurantName}`)}
                              className="px-3 py-1.5 bg-[#1E2333] hover:bg-[#282F45] text-slate-200 rounded-lg text-xs font-medium border border-[#2B3248] transition"
                            >
                              Extend Plan
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ORDERS */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              <div className="bg-[#0F121C] p-4 rounded-2xl border border-[#1E2333]">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <span>Platform-Wide Order Activity</span>
                </h2>
              </div>

              <div className="bg-[#0F121C] rounded-2xl border border-[#1E2333] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#1E2333] text-slate-400 uppercase tracking-wider bg-[#121522]">
                        <th className="p-4">Order #</th>
                        <th className="p-4">Restaurant</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Amount</th>
                        <th className="p-4">Payment</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#181C2B]">
                      {orders.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-12 text-center text-slate-500">
                            No orders recorded yet.
                          </td>
                        </tr>
                      ) : (
                        orders.map((o) => (
                          <tr key={o.id} className="hover:bg-[#141724]">
                            <td className="p-4 font-mono font-bold text-white">{o.orderNumber}</td>
                            <td className="p-4 text-slate-200">{o.restaurantName}</td>
                            <td className="p-4 text-slate-300">{o.customer?.name || "Walk-in Guest"}</td>
                            <td className="p-4 font-black text-amber-400">{o.currencySymbol || "Dhs"} {o.grandTotal}</td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${o.paymentStatus === "paid" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                                {o.paymentStatus}
                              </span>
                            </td>
                            <td className="p-4 text-slate-300 uppercase font-semibold text-[10px]">{o.orderStatus}</td>
                            <td className="p-4 text-slate-400">{new Date(o.createdAt).toLocaleString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: USERS & STAFF */}
          {activeTab === "users" && (
            <div className="space-y-4">
              <div className="bg-[#0F121C] p-4 rounded-2xl border border-[#1E2333]">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-400" />
                  <span>Platform Accounts & Staff Members</span>
                </h2>
              </div>

              <div className="bg-[#0F121C] rounded-2xl border border-[#1E2333] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#1E2333] text-slate-400 uppercase tracking-wider bg-[#121522]">
                        <th className="p-4">User</th>
                        <th className="p-4">Restaurant</th>
                        <th className="p-4">Role</th>
                        <th className="p-4">PIN</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Created Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#181C2B]">
                      {usersList.map((u) => (
                        <tr key={u.id} className="hover:bg-[#141724]">
                          <td className="p-4 font-bold text-white">
                            <div>{u.name}</div>
                            <div className="text-[11px] text-slate-400 font-normal">{u.email}</div>
                          </td>
                          <td className="p-4 text-slate-300">{u.restaurantName}</td>
                          <td className="p-4 text-amber-400 font-bold uppercase text-[10px]">{u.role}</td>
                          <td className="p-4 font-mono text-slate-300">{u.pin || "••••"}</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              {u.status}
                            </span>
                          </td>
                          <td className="p-4 text-slate-400">{new Date(u.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: REVENUE ANALYTICS */}
          {activeTab === "revenue" && revenueData && (
            <div className="space-y-6">
              <div className="bg-[#0F121C] p-6 rounded-2xl border border-[#1E2333] space-y-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span>Platform Revenue Breakdown by GCC Country & Currency</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.values(revenueData.byCurrency || {}).map((c: any) => (
                    <div key={c.code} className="bg-[#141724] p-5 rounded-2xl border border-[#22283A] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">{c.country} ({c.code})</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-[#1F2536] text-amber-400 font-mono">
                          {c.ordersCount} Paid Orders
                        </span>
                      </div>
                      <div className="text-2xl font-black text-white">
                        {c.symbol} {c.total.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: SYSTEM HEALTH */}
          {activeTab === "health" && systemHealth && (
            <div className="bg-[#0F121C] p-6 rounded-2xl border border-[#1E2333] space-y-6">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-400" />
                <span>Platform System Health & Monitoring</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#141724] p-5 rounded-2xl border border-[#22283A] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">REST API</span>
                    <Server className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-lg font-bold text-emerald-400">● {systemHealth.api}</div>
                </div>

                <div className="bg-[#141724] p-5 rounded-2xl border border-[#22283A] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">MongoDB Database</span>
                    <Database className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-lg font-bold text-emerald-400">● {systemHealth.mongodb}</div>
                </div>

                <div className="bg-[#141724] p-5 rounded-2xl border border-[#22283A] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">JWT Authentication</span>
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-lg font-bold text-emerald-400">● {systemHealth.auth}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: ACTIVITY LOGS */}
          {activeTab === "activity" && (
            <div className="space-y-4">
              <div className="bg-[#0F121C] p-4 rounded-2xl border border-[#1E2333]">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Platform Audit Trail</span>
                </h2>
              </div>

              <div className="bg-[#0F121C] rounded-2xl border border-[#1E2333] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#1E2333] text-slate-400 uppercase tracking-wider bg-[#121522]">
                        <th className="p-4">Action</th>
                        <th className="p-4">Admin Email</th>
                        <th className="p-4">Target</th>
                        <th className="p-4">Details</th>
                        <th className="p-4">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#181C2B]">
                      {activityLogs.map((log) => (
                        <tr key={log.id || log._id} className="hover:bg-[#141724]">
                          <td className="p-4 font-bold text-amber-400 uppercase text-[11px]">{log.action}</td>
                          <td className="p-4 text-slate-200">{log.adminEmail}</td>
                          <td className="p-4 text-slate-300">{log.targetEntity}</td>
                          <td className="p-4 text-slate-400">{log.details || "-"}</td>
                          <td className="p-4 text-slate-400">{new Date(log.createdAt).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: SETTINGS */}
          {activeTab === "settings" && saasSettings && (
            <form onSubmit={handleSaveSettings} className="bg-[#0F121C] p-6 rounded-2xl border border-[#1E2333] space-y-6 max-w-2xl">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-amber-400" />
                <span>SaaS Platform Configuration</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Platform Name</label>
                  <input
                    type="text"
                    value={saasSettings.platformName || ""}
                    onChange={(e) => setSaasSettings({ ...saasSettings, platformName: e.target.value })}
                    className="w-full p-3 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Support Email</label>
                  <input
                    type="email"
                    value={saasSettings.supportEmail || ""}
                    onChange={(e) => setSaasSettings({ ...saasSettings, supportEmail: e.target.value })}
                    className="w-full p-3 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Trial Days</label>
                    <input
                      type="number"
                      value={saasSettings.trialDays || 14}
                      onChange={(e) => setSaasSettings({ ...saasSettings, trialDays: Number(e.target.value) })}
                      className="w-full p-3 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Default VAT %</label>
                    <input
                      type="number"
                      value={saasSettings.defaultVatPercent || 5}
                      onChange={(e) => setSaasSettings({ ...saasSettings, defaultVatPercent: Number(e.target.value) })}
                      className="w-full p-3 bg-[#161926] border border-[#252B3D] rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-xl text-xs shadow-lg shadow-amber-500/20"
                >
                  Save Platform Settings
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* 3. Detailed Tenant Drawer / Modal */}
      {isDetailDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in-50">
          <div className="w-full max-w-2xl bg-[#0F121C] border-l border-[#1E2333] h-full overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1E2333] pb-4">
              <h3 className="text-lg font-bold text-white">Restaurant Tenant Breakdown</h3>
              <button onClick={() => setIsDetailDrawerOpen(false)} className="p-2 rounded-lg text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedRestaurantDetail ? (
              <div className="space-y-6 text-xs">
                <div className="bg-[#141724] p-4 rounded-xl border border-[#22283A] space-y-2">
                  <div className="text-base font-bold text-white">{selectedRestaurantDetail.restaurant.name}</div>
                  <div className="text-slate-400">Owner: {selectedRestaurantDetail.owner?.name} ({selectedRestaurantDetail.owner?.email})</div>
                  <div className="text-slate-400">Location: {selectedRestaurantDetail.restaurant.city}, {selectedRestaurantDetail.restaurant.country}</div>
                  <div className="text-amber-400 font-bold">Currency: {selectedRestaurantDetail.restaurant.currency} ({selectedRestaurantDetail.restaurant.currencySymbol || "Dhs"})</div>
                </div>

                {/* Business Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#141724] p-3 rounded-xl border border-[#22283A]">
                    <div className="text-slate-400 text-[10px]">Products</div>
                    <div className="text-lg font-bold text-white">{selectedRestaurantDetail.stats.productsCount}</div>
                  </div>
                  <div className="bg-[#141724] p-3 rounded-xl border border-[#22283A]">
                    <div className="text-slate-400 text-[10px]">Tables</div>
                    <div className="text-lg font-bold text-white">{selectedRestaurantDetail.stats.tablesCount}</div>
                  </div>
                  <div className="bg-[#141724] p-3 rounded-xl border border-[#22283A]">
                    <div className="text-slate-400 text-[10px]">Orders</div>
                    <div className="text-lg font-bold text-white">{selectedRestaurantDetail.stats.totalOrders}</div>
                  </div>
                  <div className="bg-[#141724] p-3 rounded-xl border border-[#22283A]">
                    <div className="text-slate-400 text-[10px]">Revenue</div>
                    <div className="text-lg font-bold text-emerald-400">{selectedRestaurantDetail.restaurant.currencySymbol} {selectedRestaurantDetail.stats.totalRevenue}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400">Loading tenant details...</div>
            )}
          </div>
        </div>
      )}

      {/* 4. Confirmation Modal */}
      {confirmActionModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121522] border border-[#22283A] p-6 rounded-2xl max-w-sm w-full space-y-4">
            <h3 className="text-base font-bold text-white">{confirmActionModal.title}</h3>
            <p className="text-xs text-slate-300">{confirmActionModal.message}</p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setConfirmActionModal({ open: false, title: "", message: "", action: () => {} })}
                className="px-4 py-2 bg-[#1C2030] text-slate-300 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={confirmActionModal.action}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold rounded-xl"
              >
                Confirm Action
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
