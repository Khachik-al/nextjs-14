import {Locale} from '@/i18n/routing';
import {SsgPostLIst} from "@/components/SsgPostLIst";
import {fetchPosts} from "@/services/postServices/fetchPosts";
import {Post} from "@/types";
import {unstable_setRequestLocale} from "next-intl/server";


interface SsgPageProps {
  params: { locale: Locale }
}

export default async function SsgPage({params}: SsgPageProps) {
  unstable_setRequestLocale(params.locale);
  const posts: Post[] = await fetchPosts()


  return (
    <div>
      <SsgPostLIst posts={posts}/>
    </div>
  );
}
