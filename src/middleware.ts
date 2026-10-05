import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SECRET = process.env.AUTH_SECRET || 'super-secret-jwt-key-change-in-production-2026';

function base64UrlToUint8Array(base64url: string): Uint8Array {
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function uint8ArrayToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

interface SessionData {
  userId: string;
  email: string;
  role: string;
  exp: number;
}

async function verifySessionToken(token: string): Promise<SessionData | null> {
  try {
    const [payloadB64, sigB64] = token.split('.');
    if (!payloadB64 || !sigB64) return null;

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', key, enc.encode(payloadB64));
    const expectedSigB64 = uint8ArrayToBase64Url(new Uint8Array(signature));

    if (sigB64 !== expectedSigB64) return null;

    const payloadStr = new TextDecoder().decode(base64UrlToUint8Array(payloadB64));
    const data = JSON.parse(payloadStr) as SessionData;

    if (!data.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Allow public admin login route
  if (pathname === '/admin/login') {
    const token = request.cookies.get('admin_session')?.value;
    const session = token ? await verifySessionToken(token) : null;
    if (session) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  // 2. Verify admin session token
  const token = request.cookies.get('admin_session')?.value;
  const session = token ? await verifySessionToken(token) : null;

  // 3. Handle unauthenticated requests
  if (!session) {
    // If it's an API route under /api/admin/*, return 401 JSON
    if (pathname.startsWith('/api/admin')) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Admin authentication required' },
        { status: 401 }
      );
    }

    // If it's a page under /admin/*, redirect to /admin/login
    if (pathname.startsWith('/admin')) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Next.js 16 Proxy / Middleware dual-export compatibility
export const proxy = middleware;
export default middleware;

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};
