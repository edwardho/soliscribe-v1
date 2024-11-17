import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(req: NextRequest) {
    // Allow public routes
    const publicRoutes = ["/", "/auth-callback"]
    if (publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.next()
    }

    // Use Kinde's middleware for protected routes
    return withAuth(req)
}

// Configure which routes should be protected
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
        "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
    ],
}