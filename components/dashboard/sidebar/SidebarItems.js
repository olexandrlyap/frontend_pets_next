import { useRouter } from 'next/router'
import Link from "next/link"
import { useState, useEffect } from "react";


export default function SidebarItems() {
    
    useEffect(() => {
     console.log('items', router.pathname)
    }, [])

    const router = useRouter()
    
    
    const baseStyles = 'flex items-center p-4  rounded-lg cursor-pointer'
    const activeStyles = 'flex items-center p-4  rounded-lg cursor-pointer text-indigo-500 '
    
    const settingsGeneral = '/nastenka/nastaveni/obecne' 
    const settingsPassword = '/nastenka/nastaveni/heslo'

    const determineActiveStateSettings = () => {
         if(router.pathname === settingsGeneral || router.pathname === settingsPassword) {
              return activeStyles
         }
         return baseStyles
    }


    return (
        <>
          <Link href='/nastenka' prefetch={false}>
               <div className={router.pathname === '/nastenka' ? activeStyles : baseStyles}>
                    <p className='mr-2 '>Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
               </div>
          </Link>

          <Link href='/nastenka/nastaveni/obecne' prefetch={false}>
               <div className={determineActiveStateSettings()}>
                    <p className='mr-2'>Settings</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
               </div>
          </Link>
        </>
    )
}
