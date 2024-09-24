"use client"
import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "@/services";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {Post} from "@/types";


export function SsrPosts() {
  const t = useTranslations('ssrPage');
  const {data} = useQuery<Post[]>({queryKey: ['posts'], queryFn: fetchPosts})

  return (
    <>
      <Link href="/">{t('home')}</Link>
      <h1>{t('title')}</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
