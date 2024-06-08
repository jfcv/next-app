export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/dashboard/:path*']
}

// by default this makes all '/users' routes protected 
// and forces the user to log in before showing the route