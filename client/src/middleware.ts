import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const LINK =
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000'
      : 'https://www.connor-ashton.com';
  await fetch(`${LINK}/api/hello?requester=${pathname}`);
  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: `/application/:pathname*`,
};
