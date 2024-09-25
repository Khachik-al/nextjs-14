import {Locale} from '@/i18n/routing';
import {SsgPostLIst} from "@/components/SsgPostList/SsgPostLIst";
import {fetchPosts} from "@/services/postServices/fetchPosts";
import {Page, Post} from "@/types";
import {unstable_setRequestLocale} from "next-intl/server";


interface SsgPageProps {
  params: { locale: Locale }
}

export default async function SsgPage({params}: SsgPageProps) {
  unstable_setRequestLocale(params.locale);
  const posts: Post[] = await fetchPosts()


  return (
    <main>
      <SsgPostLIst posts={posts} page={Page.SSG}/>
    </main>
  );
}
