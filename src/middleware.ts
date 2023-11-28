import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({

  locales: ['fr','en', 'de'],
 
  defaultLocale: 'fr'
});
 
export const config = {
  matcher: ['/', '/(de|en|fr)/:path*']
};