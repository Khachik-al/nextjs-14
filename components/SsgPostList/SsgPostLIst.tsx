"use client"
import {useTranslations} from "next-intl";
import Link from "next/link";
import {Page, Post} from "@/types";
import style from './ssgPostList.module.scss';

interface ISsgPostProps {
  posts: Post[],
  page: Page
}

export function SsgPostLIst({posts, page}: ISsgPostProps) {
  const t = useTranslations(page === Page.SSG ? 'ssgPage' : 'isrPage');

  return (
    <div className={style['ssg-post-list']}>
      <h1 className={style['ssg-post-list__title']}>{t('title')}</h1>
      <ul className={style['ssg-post-list__items']}>
        {posts?.map((post) => (
          <li key={post.id} className={style['ssg-post-list__item']}>
            <Link href={`/ssg-page/${post.id}`} className={style['ssg-post-list__link']}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
