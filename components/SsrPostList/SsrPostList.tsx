"use client"
import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "@/services/postServices/fetchPosts";
import {useTranslations} from "next-intl";
import {Post} from "@/types";
import style from './SsrPostList.module.scss';


export function SsrPostList() {
  const t = useTranslations('ssrPage');
  const {data} = useQuery<Post[]>({queryKey: ['posts'], queryFn: fetchPosts})

  return (
    <div className={style['ssg-post-list']}>
      <h1 className={style['ssg-post-list__title']}>{t('title')}</h1>
      <ul className={style['ssg-post-list__items']}>
        {data?.map((post) => (
          <li key={post.id} className={style['ssg-post-list__item']}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
