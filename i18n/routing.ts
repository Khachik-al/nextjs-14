import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export type Locale = 'en' | 'ru'

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
