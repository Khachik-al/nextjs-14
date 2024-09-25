"use client"
import {useTranslations} from "next-intl";
import Link from "next/link";
import {Post} from "@/types";

interface ISsgPostProps {
  posts: Post[]
}

export function SsgPostLIst({posts}: ISsgPostProps) {
  const t = useTranslations('ssgPage');

  return (
    <>
      <Link href="/">{t('home')}</Link>
      <h1>{t('title')}</h1>
      <ul>
        {posts?.map((post) => (
          <Link href={`/ssg-page/${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}
