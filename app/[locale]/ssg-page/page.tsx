import {useTranslations} from 'next-intl';
import {Link, routing} from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function HomePage() {
  const t = useTranslations('ssgPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/">{t('home')}</Link>
    </div>
  );
}
