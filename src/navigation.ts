import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "de", "fr"] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  "/contact": "/contact",
  "/photos": "/photos",
  "/carteCadeaux": "/carteCadeaux",
  "/bretagne": "/bretagne",
  "/logement": "/logement",

  "/tarifsEtReservations": "/tarifsEtReservations",

  "/plageEtEquipe": "/plageEtEquipe",
  "/presentationDesCours": "/presentationDesCours",

  "/app/sucess": "/app/sucess",
  "/app/error": "/app/error",
  "/app/form": "/app/form",
  "/app/contact": "/app/contact",

  "/location": "/location",
  "/location/inscription": "/location/inscription",
  "/location/inscription/autorisation": "/location/inscription/autorisation",
  "/tarifsEtReservations/inscription" : "/tarifsEtReservations/inscription",
  "/reservationObligatoireParTelephone": "/reservationObligatoireParTelephone",
  "/tarifsEtReservations/form/inscription/autorisations":
    "/tarifsEtReservations/form/inscription/autorisations",
  "/tarifsEtReservations/form/inscription/autorisations/contact":
    "/tarifsEtReservations/form/inscription/autorisations/contact",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
