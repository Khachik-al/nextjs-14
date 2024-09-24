import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <div><Link href="/ssg-page">{t('ssg-page')}</Link></div>
      <div><Link href="/ssr-page">{t('ssr-page')}</Link></div>
      <div><Link href="/isr-page">{t('isr-page')}</Link></div>
    </div>
  );
}
