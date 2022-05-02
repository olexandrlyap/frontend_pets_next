
import { useState, useEffect, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import Link from "next/link";
import { EXPRESS_URL } from "../../../config";
import {  useWindowSize } from "../../../hooks";
import { setTimeoutPromise } from "../../../helpers"
import Card from "./Card"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


export default function CardsRecommended() {
    // Remove slider on mobile/tablet
// Use slider Desktop
//  Add Show more link and style
// Change color of a slider
// Add effect for slider
// Add loading state on mount slider

    const [loading, setLoading] = useState(false)
    const [isDesktopXl, setIsDesktopXl] = useState(false)
    const [displayCarousel, setDisplayCarousel] = useState(false)
    const [pets, setPets] = useState([])


    const size = useWindowSize()


    useEffect(() => {
        fetchPets()
    }, [])

    useEffect(() => {
        size.width >= 1280 ? setIsDesktopXl(true) : setIsDesktopXl(false)
        size.width <= 1024 ? setDisplayCarousel(false) : setDisplayCarousel(true)
    }, [size.width])

    const fetchPets = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${EXPRESS_URL}/api/v1/pets/recommended/main`)
            const data = await response.data.pets
            setPets(data)
            await setTimeoutPromise(3000)
            setLoading(false)
            console.log('pets', data)
        } catch (error) {
            setLoading(false)
            console.log(error)
            
        }
    }



    const petCarousel = () => (  
           pets&&<Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={ isDesktopXl ? 3 : 2 }
            navigation={loading ? false : true}
            pagination={ loading ? false : true}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

                  {  pets.map((pet) =>
                        <SwiperSlide key={pet._id}>
                            < Card key={pet._id} pet={pet} loading={loading} />
                        </SwiperSlide>
                    ) 
                  }
            </Swiper>
    )

    const petMobileCards = () => (
        pets.map((pet) => 
            <div key={pet._id} className="flex flex-col p-5">
                < Card key={pet._id} pet={pet} loading={loading} />
            </div>
        )
    )
    
  return (
    <div className="p-3 md:m-10 bg-gray-50">
        <div className="flex justify-between items-center">
             <h2 className="my-10 text-4xl font-extrabold tracking-tight text-gray-900">Checkout pets for adoption</h2>
             <Link href='/pets'>
                 <a className="text-indigo-500 text-sm font-medium ">Show more </a>
             </Link>
        </div>

        <div>

            { displayCarousel ? petCarousel() : petMobileCards()}
           
        </div>
    </div>
  )
}


