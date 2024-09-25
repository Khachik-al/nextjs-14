import {useTranslations} from 'next-intl';
import Counter from '@/components/Counter';
import styles from './page.module.scss';
import {unstable_setRequestLocale} from "next-intl/server";

interface IHomePageProps {
  params: { locale: string };
}

export default function HomePage({params}: IHomePageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('HomePage');

  return (
    <div className={styles["homepage"]}>
      <h1>{t('title')}</h1>
      <main>
        <Counter/>
      </main>
    </div>
  );
}
