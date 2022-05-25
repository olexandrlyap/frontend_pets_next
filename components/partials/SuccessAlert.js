import { useEffect, useState } from 'react'
import { setTimeoutPromise } from '../../helpers'

export default function SuccessAlert({text, time}) {

  const [show, setShow] = useState(false)

  useEffect(() => {
    async function showAndHide() {
        if (text) {
            setShow(true)
            await setTimeoutPromise(time || 1500)
            setShow(false)
        }
    }
    showAndHide()
  }, [text, time])

  return (
      <>
       { 
       show&&<div className="text-white mt-1 mr-1 w-full md:w-1/3 px-6 py-4 border-0 rounded fixed top-0 right-0 mb-4 bg-indigo-700 z-40">
            <span className="text-xl inline-block mr-5 align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            </span>
            <span className="inline-block align-middle mr-8">
            {text}
            </span>
        </div>
        }
      </>
  )
}
