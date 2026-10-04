import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const posts = db.blog.findMany();
  return NextResponse.json({ posts });
}
