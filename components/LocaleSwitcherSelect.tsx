'use client';

import {ChangeEvent, ReactNode} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
                                               children,
                                               defaultValue,
                                             }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <select
      defaultValue={defaultValue}
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
}
