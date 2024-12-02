"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

const ReactQueryProvider = ({children}: {children :React.ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries:{
              retry:1,
              staleTime:1000 * 6 * 5,
              //@ts-ignore
              cacheTime: 1000 * 6 * 5,
              refetchOnWindowFocus:false
            }
          }
    }))

    return(
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default ReactQueryProvider