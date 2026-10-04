import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = (request.headers.get("host") || "").toLowerCase();

  // Match global-pos.webstudioae.com and alternative pos subdomains
  const isPosSubdomain =
    hostname.startsWith("global-pos.") ||
    hostname.startsWith("globalpos.") ||
    hostname.startsWith("pos.");

  if (isPosSubdomain) {
    // Rewrite root path on global-pos subdomain to /retail-pos module
    if (url.pathname === "/") {
      url.pathname = "/retail-pos";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
