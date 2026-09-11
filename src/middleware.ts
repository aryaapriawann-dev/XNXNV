import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const response = NextResponse.next();

  const theme = request.cookies.get("theme")?.value;
  if (theme && ["light", "dark", "system"].includes(theme)) {
    response.cookies.set("theme", theme, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  const consent = request.cookies.get("consent")?.value;
  if (consent) {
    try {
      JSON.parse(consent);
      response.cookies.set("consent", consent, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
    } catch {
      /* invalid consent JSON, ignore */
      ;
    }
  }

  const preferredLang = request.headers.get("accept-language");
  if (preferredLang) {
    const lang = preferredLang.split(",")[0]?.split("-")[0] || "id";
    response.cookies.set("language", lang, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
