import { cookies } from 'next/headers';
import crypto from 'crypto';

const SECRET = process.env.AUTH_SECRET || 'super-secret-jwt-key-change-in-production-2026';

export interface SessionData {
  userId: string;
  email: string;
  role: string;
  exp: number;
}

export function createToken(payload: Omit<SessionData, 'exp'>): string {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24 hours
  const data: SessionData = { ...payload, exp };
  const str = Buffer.from(JSON.stringify(data)).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(str).digest('base64url');
  return `${str}.${sig}`;
}

export function verifyToken(token: string): SessionData | null {
  try {
    const [str, sig] = token.split('.');
    if (!str || !sig) return null;
    const expectedSig = crypto.createHmac('sha256', SECRET).update(str).digest('base64url');
    if (sig !== expectedSig) return null;
    const data = JSON.parse(Buffer.from(str, 'base64url').toString('utf-8')) as SessionData;
    if (data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_session')?.value;
  if (!token) return null;
  return verifyToken(token);
}
