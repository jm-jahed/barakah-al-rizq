import type { NextConfig } from "next";
import dns from "node:dns";
import fs from "node:fs";

// Filter out delete-pending tombstone directory from Next.js route discovery
try {
  const filterShopPos = (items: any[]) => {
    if (!Array.isArray(items)) return items;
    return items.filter((item) => {
      const name = typeof item === "string" ? item : item?.name;
      return name !== "shop-pos";
    });
  };

  const origReaddirSync = fs.readdirSync;
  fs.readdirSync = function (p: any, ...args: any[]): any {
    try {
      const result = origReaddirSync.apply(this, [p, ...args] as any);
      if (typeof p === "string" && p.replace(/\\/g, "/").includes("src/app/work")) {
        return filterShopPos(result);
      }
      return result;
    } catch (err: any) {
      if (typeof p === "string" && p.includes("shop-pos")) return [];
      throw err;
    }
  };

  const origReaddir = fs.readdir;
  (fs as any).readdir = function (p: any, ...args: any[]): any {
    const cb = typeof args[args.length - 1] === "function" ? args[args.length - 1] : null;
    if (cb) {
      const wrappedCb = (err: any, files: any) => {
        if (err && typeof p === "string" && p.includes("shop-pos")) return cb(null, []);
        if (!err && typeof p === "string" && p.replace(/\\/g, "/").includes("src/app/work")) {
          return cb(null, filterShopPos(files));
        }
        return cb(err, files);
      };
      args[args.length - 1] = wrappedCb;
      return (origReaddir as any).call(this, p, ...args);
    }
    return (origReaddir as any).apply(this, [p, ...args]);
  };

  if (fs.promises && fs.promises.readdir) {
    const origPromisesReaddir = fs.promises.readdir;
    (fs.promises as any).readdir = async function (p: any, ...args: any[]): Promise<any> {
      try {
        const files = await (origPromisesReaddir as any).call(this, p, ...args);
        if (typeof p === "string" && p.replace(/\\/g, "/").includes("src/app/work")) {
          return filterShopPos(files);
        }
        return files;
      } catch (err: any) {
        if (typeof p === "string" && p.includes("shop-pos")) return [];
        throw err;
      }
    };
  }
} catch {
  // Ignore
}

try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch {
  // Ignore in restricted environments
}

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/pos": ["./backend/**/*"],
    "/api/pos/*": ["./backend/**/*"],
    "/api/pos/**/*": ["./backend/**/*"],
    "/api/pos/[...route]": ["./backend/**/*"],
    "/api/pos/health": ["./backend/**/*"],
    "api/pos": ["./backend/**/*"],
    "api/pos/*": ["./backend/**/*"],
    "api/pos/**/*": ["./backend/**/*"],
    "api/pos/[...route]": ["./backend/**/*"],
    "api/pos/health": ["./backend/**/*"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      }
    ],
  },
};

export default nextConfig;
