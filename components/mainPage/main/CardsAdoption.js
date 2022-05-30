
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link"
import { EXPRESS_URL }from '../../../config'
import { setTimeoutPromise } from '../../../helpers'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShowMoreButton from "../../partials/ShowMoreButton"
import test from '../../../assets/test.jpg'
import Image from "next/image"
import Card from "../../partials/card/Card"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import SuccessAlert from "../../partials/SuccessAlert";


// will be different styles per pet.contract
const adoptionBadge = 'inline-flex shrink items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'


export default function CardsAdoption() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false)
  const [showAlertResponse, setShowAlertResponse] = useState(false)
  const [alertText, setAlertText] = useState('')

  useEffect(() => {
    fetchPets()
  }, [])

  const fetchPets = async () => {
    setLoading(true)
    try {
        const limit = 4
        const response = await axios.get(`${EXPRESS_URL}/api/v1/pets?limit=${limit}`)
        const data = await response.data.pets
        setPets(data)
        console.log(data)
        await setTimeoutPromise(2000)
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error)    
    }
  }

  const showAlert = async (text) => {
    setShowAlertResponse(true)
    setAlertText(text)
    await setTimeoutPromise(1000)
    setShowAlertResponse(false)
    setAlertText('')
  }



  return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {
        showAlertResponse&&<SuccessAlert text={alertText} time={2000}/>
      }
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Checkout pets for adoption</h2>
        <Link href='/zvirata'>
          <a className="text-indigo-500 text-sm font-medium z-30">Show more </a>
        </Link>
      </div>
      
      {/* Without a slider */}
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {pets.map((pet) => (
           <Card key={pet.id} pet={pet} loading={loading} scale={true} showAlert={showAlert}/>
        ))}
      </div>



     {/*  Swiper Container  */}

      {/* <div className="">
        { 
           pets&&<Swiper
           // install Swiper modules
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={2}
           slidesPerColumn= {2}
           navigation={true}
           pagination={true}

           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           >
             {pets.map((pet) => (
               <Card key={pet.id} pet={pet} loading={loading} />
             ))}
           </Swiper>
        }
      </div> */}


    </div>
  </div>
  )
}
