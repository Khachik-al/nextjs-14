import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import {fetchPosts} from "@/services";
import {SsrPosts} from "@/components/SsrPosts";


export default async function SsrPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SsrPosts/>
    </HydrationBoundary>
  )
}


