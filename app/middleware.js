import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const token = true; //req.cookies.get("accessToken")?.value;
  const isAuthPage = true; //req.nextUrl.pathname.startsWith("/auth");

  if (!token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/main", req.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };
