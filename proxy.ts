import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
  const session = await getSession();

  const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
  const isSignUpPage = request.nextUrl.pathname.startsWith("/sign-up");
  if (session?.user && (isSignInPage || isSignUpPage)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
  if (!session?.user && isDashboardPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
