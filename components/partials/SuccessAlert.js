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
       show&&<div className="text-white mt-1 w-full md:w-1/3 px-6 py-4 border-0 rounded fixed top-0 right-0 mb-4 bg-indigo-700 z-40">
            <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
            {text}
            </span>
        </div>
        }
      </>
  )
}
