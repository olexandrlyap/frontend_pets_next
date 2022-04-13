import Head from "next/head"
import { useState, useEffect } from "react"
import Header from "../dashboard/Header"
import Sidebar from "../dashboard/sidebar/Sidebar"
import VerifyAnimation from "../partials/VerifyAnimation"
import { setTimeoutPromise } from "../../helpers"

export default function DashboardLayout({title, keywords, description, children}) {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingFunction = async () => {
      setLoading(true)
      await setTimeoutPromise(1000)
      setLoading(false)
    }
    loadingFunction()
  }, [])

  const animation = () => 
    <div className="flex justify-center mx-auto items-center w-full h-screen">
        <VerifyAnimation />
    </div>

  const body = () => {
    return (
      <div className="flex  w-full h-screen">
            <div className=" bg-white md:flex w-full">
              < Sidebar/> 
              <div className='w-full flex flex-col  bg-gray-100'>
                  <Header />  
                  <div className="-my-12 bg-white m-0 md:mx-12 h-screen rounded">
                    {children}
                  </div>
              </div>
            </div>
      </div>
    )
  }

  return ( 
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      {
        loading
        ?
        animation()
        :
        body()
      }
    </div>  
  )
}

DashboardLayout.defaultProps = {
    title: 'PetFinder | Nástěnka',
    description: 'Lorem descriptum',
    keywords: 'test, test'
}
