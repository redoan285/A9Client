import { NextResponse } from "next/server";

export async function proxy(request) {
    const { pathname } = request.nextUrl;
    
    const isProtectedRoute = pathname.startsWith('/dashboard') || 
        (pathname.startsWith('/appointments/') && pathname !== '/appointments');

    if (isProtectedRoute) {
        const sessionCookie = request.cookies.get("better-auth.session_token")?.value || request.cookies.get("__Secure-better-auth.session_token")?.value;
        
        if (!sessionCookie) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        
        try {
            const response = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
                headers: {
                    cookie: request.headers.get("cookie") || "",
                },
            });
            
            if (!response.ok) {
                return NextResponse.redirect(new URL('/login', request.url));
            }
            const session = await response.json();
            if (!session) {
                return NextResponse.redirect(new URL('/login', request.url));
            }
        } catch (error) {
            console.error("Middleware session check failed:", error);
            // Allow to pass through and let Server Component handle it if fetch fails
        }
    }
    
    return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/appointments/:path+'],
}
