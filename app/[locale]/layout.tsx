import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import StoreProvider from '@/app/StoreProvider';
import ReactQueryProvider from '@/app/ReactQueryProvider';
import {Locale, routing} from '@/i18n/routing';
import './globals.scss';
import Header from "@/components/Header/Header";
import React from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                             children,
                                             params: {locale},
                                           }: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body>
    <NextIntlClientProvider messages={messages}>
      <StoreProvider>
        <ReactQueryProvider>
          <Header locale={locale}/>
          {children}
        </ReactQueryProvider>
      </StoreProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
