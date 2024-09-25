import {useTranslations} from 'next-intl';
import {Link, Locale} from '@/i18n/routing';
import Counter from "@/components/Counter";
import {unstable_setRequestLocale} from "next-intl/server";

interface IHomePageProps {
  params: { locale: Locale }
}

export default function HomePage({params}: IHomePageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <div><Link href="/ssg-page">{t('ssg-page')}</Link></div>
      <div><Link href="/ssr-page">{t('ssr-page')}</Link></div>
      <div><Link href="/isr-page">{t('isr-page')}</Link></div>
      <Counter/>
    </div>
  );
}
