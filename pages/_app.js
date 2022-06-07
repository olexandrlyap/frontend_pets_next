import '../styles/globals.css'
//import { AuthProvider } from '../context/AuthContext'
import { AuthProvider } from '../context/auth/AuthContext'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'



function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  ) 
}

export default MyApp
