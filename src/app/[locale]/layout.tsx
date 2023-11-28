import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";


type Props = {
  children: ReactNode;
  params: { locale: string };
};
export type meta = {
  params: { locale: string };
};

const locales = ["en", "de", "fr"];

export async function generateMetadata({ params: { locale } }: meta) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("home"),
    description: t("homeDesc"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!locales.includes(locale as any)) notFound();
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (err) {
    console.log(err);
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
