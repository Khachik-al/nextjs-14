import styles from "./header.module.scss";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import {Locale} from "@/i18n/routing";


interface IHeaderProps {
  locale: Locale
}

export default function Header({locale}: IHeaderProps) {

  return (
    <header className={styles["header"]}>
      <nav className={styles["page_links"]}>
        <Link href={`/${locale}`} className={styles["page_link"]}>Home</Link>
        <Link href={`/${locale}/ssg-page`} className={styles["page_link"]}>
          SSG
        </Link>
        <Link href={`/${locale}/ssr-page`} className={styles["page_link"]}>
          SSR
        </Link>
        <Link href={`/${locale}/isr-page`} className={styles["page_link"]}>
          ISR
        </Link>
      </nav>
      <LocaleSwitcher/>
    </header>
  );
}
