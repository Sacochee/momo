import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'de', 'fr'] as const;
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/contact': '/contact',
    '/photos' : '/photos',
    '/carteCadeaux' : '/carteCadeaux',
    '/bretagne' : '/bretagne',
    '/logement' : '/logement',
    '/inscription': '/inscription'
    
   
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, pathnames});