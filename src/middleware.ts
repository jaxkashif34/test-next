import { cookies } from "next/headers";
import { RedirectType } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const rawCookies = await cookies();
  rawCookies.set("id", "1");
  return NextResponse.next();
}

export const config = {
  matcher: "/contact",
};
