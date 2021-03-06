import '../styles/globals.css'
//import { AuthProvider } from '../context/AuthContext'
import { AuthProvider } from '../context/auth/AuthContext'



function MyApp({ Component, pageProps }) {

  return(
    <AuthProvider>
       <Component {...pageProps} />
    </AuthProvider>
  ) 
}

export default MyApp
