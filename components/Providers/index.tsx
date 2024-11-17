"use client"
import { PropsWithChildren, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpc } from '@/app/_trpc/client'
import { httpBatchLink } from "@trpc/client/links/httpBatchLink"

const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
                headers() {
                    return {
                        'x-trpc-source': 'client',
                    }
                },
            }),
        ],
    }))
  return (
    <trpc.Provider 
    client={trpcClient} 
    queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </trpc.Provider>
  )
}

export default Providers
  