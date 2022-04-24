import { useState, useEffect, useRef } from 'react'
import 'animate.css'
import Image from 'next/image'
import Link from 'next/link'
import { setTimeoutPromise } from '../../../helpers'
import cat from '../../../assets/link_cat.png'
import dog from '../../../assets/link_dog.png'
import other from '../../../assets/link_other_animals.png'
import shelters from '../../../assets/link_shelters.png'
export default function Categories() {

  const [isVisible, setIsVisible] = useState(false)
  const [firstRender, setFirstRender] = useState(true)

  const containerRef = useRef()

  const visibleClass = 'flex flex-wrap justify-center animate__animated animate__backInUp '
  const notVisibleClass = 'flex flex-wrap justify-center '
  
  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
        if(firstRender && entry.isIntersecting) {
            await setTimeoutPromise(3000)
            setFirstRender(false)
        }
    })

    observer.observe(containerRef.current)

    return () => {
        if(!firstRender&&observer) {
            observer.unobserve(containerRef.current)
            observer.disconnect(containerRef.current)
        }
    }
  }, [])

  useEffect(() => {
    if(!firstRender) {
        console.log('delete me', containerRef.current)
        const observer = new MutationObserver((entries) => {
        })
        return observer.disconnect(containerRef)
    }

  }, [firstRender])


  const determineClass = () => {
      if(isVisible&&firstRender) {
          console.log('trigger')
          return visibleClass 
      }
      return notVisibleClass
  }


    const links = [
        {
            'id': 1,
            'icon': cat,
            'heading': 'Cats',
            'link': '/'
        },
        {
          'id': 2,
          'icon': dog,
          'heading': 'Dog',
          'link': '/'
      },
      {
          'id': 3,
          'icon': other,
          'heading': 'Cats',
          'link': '/'
      },
      {
          'id': 4,
          'icon': shelters,
          'heading': 'Shelters',
          'link': '/'
      }
    ]

  return (
    <div ref={containerRef} className="bg-white py-16 sm:py-24">
        <div className="relative sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
                <defs>
                <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                >
                    <path
                    className="text-indigo-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                    className="text-indigo-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                </svg>
                </div>
                <div className="relative">
                <div className="sm:text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Browse these categories
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                    tristique pellentesque.
                    </p>
                </div>
                <div className={determineClass()}>
                {
                    links.map((link) => {
                        return(
                            <div key={link.id} className="flex flex-col justify-center items-center  w-20 h-24 md:h-40 md:w-36 flex-shrink   p-8 m-5 shadow-sm  bg-white hover:border-2 hover:border-indigo-500 rounded">
                                <Link href={link.link}>
                                    <a>
                                        <Image src={link.icon} width={64} height={64}/>
                                        <h3 className='text-lg font-bold text-center'>{link.heading}</h3>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
                </div>

               {/*  <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                    <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="cta-email"
                        type="email"
                        className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        placeholder="Enter your email"
                    />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                    >
                        Notify me
                    </button>
                    </div>
                </form> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
