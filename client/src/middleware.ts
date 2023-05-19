import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const LINK =
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000'
      : 'https://www.connor-ashton.com';
  const { pathname } = request.nextUrl;
  await fetch(`${LINK}/api/hello`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: `/resumes/:path*`,
};
