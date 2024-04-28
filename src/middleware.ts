import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'de', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'fr'
})
 
export const config = {
  matcher: ['/', '/(de|en|fr)/:path*']
};