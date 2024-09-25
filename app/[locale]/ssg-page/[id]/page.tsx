import {Post} from "@/types";
import {unstable_setRequestLocale} from "next-intl/server";
import {fetchPost} from "@/services/postServices/fetchPost";
import {fetchPosts} from "@/services/postServices/fetchPosts";
import {Locale} from "@/i18n/routing";
import style from './page.module.scss';

export const revalidate = 1
export const dynamicParams = true

export async function generateStaticParams() {
  const posts: Post[] = await fetchPosts()

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

interface IPostItemProps {
  params: { locale: Locale, id: string }
}

export default async function PostItem({params}: IPostItemProps) {
  unstable_setRequestLocale(params.locale);
  const post: Post = await fetchPost(params.id)

  return (
    <div className={style['post-item']}>
      <h1 className={style['post-item__title']}>{post.title}</h1>
      <p className={style['post-item__body']}>{post.body}</p>
    </div>
  );
}
