
import { useEffect, useState, useRef } from "react";
import Image from "next/image"
import headerImage from '../../../assets/header.png'
import Advantages from "./Advantages"
import { textAnimation, setTimeoutPromise } from "../../../helpers"
import styles from '../../../styles/BlinkTextAnimation.module.css'

export default function Header() {
    const headingRef = useRef('')
    const heading = 'Be loved. Get an animal and help.'

    useEffect(() => {
        headingRef.current.textContent = ''
        
        const animate = async () => {
            await setTimeoutPromise(1000)
            await textAnimation({ heading, headingRef  })
        }
        animate()
    }, [])


  return (
    <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                <div>
                    <h2 ref={ headingRef }  className={`${styles.blinker} text-4xl font-extrabold tracking-tight text-gray-900`}></h2>
                    <p className="mt-4 text-gray-500">At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.</p>
                </div>
                <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                  {/*   <img src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt="" className="object-center object-cover" /> */}
                    <span className="object-center object-cover ">
                         <Image src={headerImage} alt='Přátelství člověka a zvířete' placeholder="blur"  priority />
                    </span>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                 <Advantages />
            </div>


           {/*  <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                <div className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16" src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">Free shipping</h3>
                    <p className="mt-2 text-sm text-gray-500">It&#039;s not actually free we just price it into the products. Someone&#039;s paying for it, and it&#039;s not us.</p>
                </div>
                </div>

                <div className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16" src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg" alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">10-year warranty</h3>
                    <p className="mt-2 text-sm text-gray-500">If it breaks in the first 10 years we&#039;ll replace it. After that you&#039;re on your own though.</p>
                </div>
                </div>

                <div className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16" src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg" alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">Exchanges</h3>
                    <p className="mt-2 text-sm text-gray-500">If you don&#039;t like it, trade it to one of your friends for something of theirs. Don&#039;t send it here though.</p>
                </div>
                </div>
            </div> */}



            </div>
        </div>
    </div>
  )
}
