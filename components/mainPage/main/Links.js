
import { useState, useEffect, useRef } from 'react'
import 'animate.css'
import Image from 'next/image'
import Link from 'next/link'
import { setTimeoutPromise } from '../../../helpers'
import cat from '../../../assets/link_cat.png'
import dog from '../../../assets/link_dog.png'
import other from '../../../assets/link_other_animals.png'
import shelters from '../../../assets/link_shelters.png'



export default function Links() {

  const [isVisible, setIsVisible] = useState(false)
  const [firstRender, setFirstRender] = useState(true)

  const containerRef = useRef()
  
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

  const visibleClass = 'flex flex-wrap justify-center animate__animated animate__backInUp '
  const notVisibleClass = 'flex flex-wrap justify-center '

  const determineClass = () => {
      if(isVisible&&firstRender) {
          console.log('trigger')
          return visibleClass 
      }
      return notVisibleClass
  }
  
  return (
    <div ref={containerRef} className="flex flex-col items-center p-10 bg-gray-100">

            <h2 className="mb-5 text-2xl font-semibold tracking-tighter  text-gray-900">What are you looking for?</h2>

            <div className={determineClass()}>
                {
                    links.map((link) => {
                        return(
                            <div key={link.id} className="flex flex-col justify-center items-center h-40 w-36 flex-shrink   p-8 m-5 shadow-sm  bg-white hover:border-2 hover:border-indigo-500 rounded">
                                <Link href={link.link}>
                                    <a>
                                        <Image src={link.icon} width={64} height={64}/>
                                        <h3 className='text-lg font-medium  hover:text-gray-600 text-center'>{link.heading}</h3>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>



    </div>

  )
}
