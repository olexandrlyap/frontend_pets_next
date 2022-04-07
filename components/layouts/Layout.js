import Head from "next/head"
import Navigation from "../navigation/Navigation"
import { useEffect, useContext, useState } from "react"
//import { login, AuthStateContext } from '../../context/auth/index'

import { AuthStateContext, AuthDispatchContext } from '../../context/auth/AuthContext'

export default function Layout({title, keywords, description, children}) {


  const context = useContext(AuthStateContext)
  const dispatch = useContext(AuthDispatchContext)
  const email = 'test'
  const password = 'skakssak'

  useEffect(() => {
    console.log('context', context)
  }, [])

  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

        {/* <Navigation /> */}

        {children}
    </div>
  )
}

Layout.defaultProps = {
    title: 'PetFinder | Save animals',
    description: 'Lorem descriptum',
    keywords: 'test, test'
}
