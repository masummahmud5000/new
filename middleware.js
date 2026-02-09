import { NextResponse } from "next/server";

export const middleware = (request) => {
    const access = request.cookies.get('access_token')
    const { pathname } = request.nextUrl;

    const isAuth = pathname === '/login' || pathname === '/register';
    if (isAuth){
        if (access){
            return NextResponse.redirect(new URL('/dash', request.url));
        }
        return NextResponse.next();
    }
    
    const isProtected = pathname.startsWith('/dash');

    if (isProtected && !access){
        return NextResponse.redirect(new URL('/login', request.url))
    }else{
        return NextResponse.next()
    }
}
export const config = {
    matcher: ['/dashh', '/login', '/register']
};