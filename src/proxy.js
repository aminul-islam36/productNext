import { NextResponse } from "next/server";

export function proxy(request) {
  const isLogged = request.cookies.get("auth")?.value == "true";

  if (!isLogged) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: "/products/:path*",
};
