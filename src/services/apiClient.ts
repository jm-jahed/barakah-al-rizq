/**
 * Multi-Tenant Restaurant POS API Client
 * Manages JWT tokens, headers, and REST API endpoints
 */

const getApiBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_POS_API_URL) {
    return process.env.NEXT_PUBLIC_POS_API_URL;
  }
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (typeof window !== "undefined") {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return "http://localhost:5001/api";
    }
    return "http://localhost:5001/api";
  }
  return "http://localhost:5001/api";
};

export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("pos_auth_token");
};

export const setAuthToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("pos_auth_token", token);
  }
};

export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("pos_auth_token");
    localStorage.removeItem("pos_user");
    localStorage.removeItem("pos_restaurant");
  }
};

export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<{ success: boolean; message?: string; data?: T; pagination?: any; errors?: any }> {
  const token = getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const baseUrl = getApiBaseUrl();
  let cleanEndpoint = endpoint;
  if ((baseUrl.endsWith("/api") || baseUrl.endsWith("/api/pos")) && cleanEndpoint.startsWith("/api/")) {
    cleanEndpoint = cleanEndpoint.substring(4);
  }

  const url = endpoint.startsWith("http")
    ? endpoint
    : `${baseUrl}${cleanEndpoint.startsWith("/") ? "" : "/"}${cleanEndpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error(`API Fetch Error [${url}]:`, error);
    return {
      success: false,
      message: error.message || "Network error while connecting to POS API server",
    };
  }
}
