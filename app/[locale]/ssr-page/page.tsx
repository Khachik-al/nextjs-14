import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import {fetchPosts} from "@/services/postServices/fetchPosts";
import {SsrPostList} from "@/components/SsrPostList";
import {Locale} from "@/i18n/routing";
import {unstable_setRequestLocale} from "next-intl/server";


interface ISsrPageProps {
  params: { locale: Locale }
}

export default async function SsrPage({params }: ISsrPageProps) {
  unstable_setRequestLocale(params.locale);
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SsrPostList/>
    </HydrationBoundary>
  )
}


