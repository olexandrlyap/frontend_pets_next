const queryString = require('query-string');

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Router from 'next/router';
import axios from 'axios'
import { EXPRESS_URL } from '../../config/index'
import { setTimeoutPromise } from '../../helpers/index';

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
      console.log('query use', query)
      if(!query) return
      setLoading(true)
      verifyToken()
    }, [query])

    const verifyToken = async () => {
        try {
          console.log('query', query)
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
    <main>
    {
      loading && <p>loading</p>
    }


    {
      error&& <p>There was a problem...</p>
    }

    </main>

  )
}
