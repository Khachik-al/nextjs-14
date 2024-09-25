import {Locale} from '@/i18n/routing';
import {SsgPostLIst} from "@/components/SsgPostList/SsgPostLIst";
import {Page, Post} from "@/types";
import {unstable_setRequestLocale} from "next-intl/server";
import {fetchPosts} from "@/services/postServices/fetchPosts";


interface IIsrPageProps {
  params: { locale: Locale }
}

export default async function IsrPage({params}: IIsrPageProps) {
  unstable_setRequestLocale(params.locale);

  const posts: Post[] = await fetchPosts()

  return (
    <div>
      <SsgPostLIst posts={posts} page={Page.ISR}/>
    </div>
  );
}
