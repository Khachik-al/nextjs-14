import {Post} from "@/types";
import {unstable_setRequestLocale} from "next-intl/server";
import {fetchPost, fetchPosts} from "@/services";
import {Locale} from "@/i18n/routing";

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
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
