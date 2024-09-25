import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import StoreProvider from "@/app/StoreProvider";
import ReactQueryProvider from "@/app/ReactQueryProvider";
import {routing} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body>
    <NextIntlClientProvider messages={messages}>
      <StoreProvider>
        <ReactQueryProvider>
          <p><LocaleSwitcher/></p>
          {children}
        </ReactQueryProvider>
      </StoreProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
