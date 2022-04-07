const queryString = require('query-string');
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Router from 'next/router';
import axios from 'axios'
import { EXPRESS_URL } from '../../config/index'
import { setTimeoutPromise } from '../../helpers/index';

import VerifyAnimation from '../partials/VerifyAnimation';

export default function Verify() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState(null)
    const router = useRouter()

    useEffect(() => {
      const parsed = queryString.parse(location.search)
      setQuery(parsed)
    }, [])

    useEffect(() => {
      if(!query) return
      setLoading(true)
      verifyToken()
    }, [query])

    const verifyToken = async () => {
      try {
            await setTimeoutPromise(2500)
            await axios.post(`${EXPRESS_URL}/api/v1/auth/verify-email`, {
                email: query.email,
                verificationToken: query.token
            }, { withCredentials: true })
            setLoading(false)
            Router.push('/prihlaseni')
            
        } catch (error) {
          console.log(error)
          setLoading(false)
          setError(true)
        }
    }
  
  return (
    <main className='h-screen mx-auto flex items-center justify-center'>
      
    {
      loading && <VerifyAnimation />
    }


    {
      error&& <p>Vyskytl se problém. Prosím kontakujte zákaznickou podporu.</p>
    }

    </main>

  )
}
