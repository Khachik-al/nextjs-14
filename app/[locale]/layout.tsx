import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import StoreProvider from "@/app/StoreProvider";

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
        <LocaleSwitcher/>
        {children}
      </StoreProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
