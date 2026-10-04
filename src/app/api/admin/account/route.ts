import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { db } from '@/lib/db';
import { verifyPassword, hashPassword } from '@/lib/auth/password';

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { currentPassword, newPassword } = await req.json();
  const user = db.adminUsers.findUnique(session.email);

  if (!user || !verifyPassword(currentPassword, user.passwordHash)) {
    return NextResponse.json({ error: 'Current password incorrect' }, { status: 400 });
  }

  const newHash = hashPassword(newPassword);
  db.adminUsers.updatePassword(session.email, newHash);
  return NextResponse.json({ success: true });
}
