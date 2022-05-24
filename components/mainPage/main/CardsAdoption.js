
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


const pets = [
  {
    id: 1,
    name: 'Shiba s pp',
    slug: 'test',
    type: 'kočka',
    breed: 'perská',
    contract: 'koupě',
    description: 'Lorem descriptiium',
    now_available: true,
    notes: '',
    age: 'senior',
    main_image: {
      url: 'https://res.cloudinary.com/de9rel1yu/image/upload/v1653293436/pets/dbt8tbskxmcg78wvzqmq.jpg'
    },
    price: 'dohodou',
    fees: 0,
    tags: [
      {name: 's pp'},
      {name: 'nekouše'},
      {name: 'přátelský'}
    ],
    user: {
      username: 'loretest'
    }
  },
  {
    id: 2,
    name: 'Mucek',
    slug: 'test',
    type: 'kočka',
    breed: 'perská',
    contract: 'koupě',
    description: 'Lorem descriptiium',
    now_available: false,
    notes: 'here are noptes',
    age: 'senior',
    main_image: {
      url: 'https://res.cloudinary.com/de9rel1yu/image/upload/v1653296885/pets/karsten-winegeart-NE0XGVKTmcA-unsplash_pwxtaj.jpg'
    },
    price: 10000,
    fees: 0,
    tags: [
      {name: 's pp'},
      {name: 'nekouše'},
      {name: 'přátelský'}
    ],
    user: {
      username: 'loretest'
    }
  },

  {
    id: 3,
    name: 'Štěně Shiby',
    slug: 'test',
    type: 'kočka',
    breed: 'perská',
    contract: 'koupě',
    description: 'Lorem descriptiium',
    now_available: true,
    notes: 'here are noptes Lorem descriptiium Lorem descriptiium Lorem descriptiium',
    age: 'senior',
    main_image: {
      url: 'https://res.cloudinary.com/de9rel1yu/image/upload/v1653296922/pets/alvan-nee-ZCHj_2lJP00-unsplash_zyr6va.jpg'
    },
    price: 10000,
    fees: 0,
    tags: [
      {name: 's pp'},
      {name: 'nekouše'},
      {name: 'přátelský'}
    ],
    user: {
      username: 'loretest'
    }
  },

  {
    id: 4,
    name: 'Johny',
    slug: 'test',
    type: 'pes',
    breed: 'shiba',
    contract: 'darování',
    description: 'Lorem descriptiium',
    now_available: true,
    notes: 'here are noptes',
    age: 'senior',
    main_image: {
      url: 'https://res.cloudinary.com/de9rel1yu/image/upload/v1653296905/pets/taylor-kopel-WX4i1Jq_o0Y-unsplash_wccuph.jpg'
    },
    price: 'zdarma',
    fees: 0,
    tags: [
      {name: 's pp'},
      {name: 'nekouše'},
      {name: 'přátelský'},
      {name: 'vhodný pro děti'},
      {name: 'jídlo zdarma'}
    ],
    user: {
      username: 'loretest'
    }
  },
]

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
        const response = await axios.get(`${EXPRESS_URL}/api/v1/pets/recommended/main`)
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
