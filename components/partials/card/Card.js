import { useEffect, useState } from 'react'
import axios from 'axios'
import test from '../../../assets/test.jpg'
import Image from 'next/image'
import Link from 'next/link'
import CardLoadingSkeleton from './CardLoadingSkeleton'
import { EXPRESS_URL } from '../../../config'
import { formatTimeFromNow } from '../../../helpers'



export default function Card({pet, loading, scale, showAlert}) {
  const [isHovered, setIsHovered] = useState(false)

  const adoptionBadge = 'inline-flex shrink items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'
  const withScaleStyle = 'flex flex-col md:hover:scale-110 '
  const withoutScaleStyle = 'flex flex-col min-h-0'

  const handleHover = (e) => e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false)
  
  const addFavorite = async (pet) => {
    const petID = pet._id
    try {
      const response = await axios.post(`${EXPRESS_URL}/api/v1/favorite-pets/${petID }`, {
      }, { withCredentials: true } )
      showAlert('Success, you have favorite pet')
      
    } catch (error) {
      showAlert('You have allready favorited this pet')
    }
  }

  const card = () => (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}  className= {scale ? withScaleStyle : withoutScaleStyle}>
    <div className="relative">
      <div className="relative w-full h-72 rounded-lg overflow-hidden">
      <Link href={`uzivatele/${pet.user.username}/${pet.slug}`}>
        <a >
            <Image
            src={pet.main_image.url || test}
            alt={'text '}
            layout='fill'
            className="w-full h-full object-center object-cover z-10"
            />
        </a>
      </Link>
      </div>
      <div className="relative mt-4">
        <div className="flex justify-between">
          <Link href={`uzivatele/${pet.user.username}/${pet.slug}`}>
            <a className="text-sm font-medium text-gray-900">{pet.name}</a>
          </Link>
          <p className={adoptionBadge}>{pet.contract}</p>
        </div>
        <div className="flex flex-wrap items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          {
            pet.tags.map((tag) => <p 
            key={pet.id}
            className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'
            >
              {tag.name}
            </p>)
          }
        </div>
       {
        <div className="flex justify-between ">
            <div className='flex  justify-between w-full text-gray-500'>
              <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  <p className='text-xs'>{pet.breed}</p>
              </div>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                  <p className='text-xs'>{pet.age}</p>
              </div>
              <div className='flex items-center'>
                {/*   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg> */}
                  <p className='text-xs'>{formatTimeFromNow(pet.createdAt)}</p>
              </div>
            </div>
            
        </div>
        }
      </div>
      {
        isHovered&&<div className=" absolute  -top-56 right-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden cursor-pointer "> 
          <button onClick={() => addFavorite(pet)} className=" z-20 relative flex-none  flex items-center justify-center  w-9 h-9  text-white " type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
          </button>
      </div>
      }
      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden z-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50 "
        />
        {
          pet.now_available&&<p className="relative text-xs font-semibold text-white">Dostupný ihned</p>  
        }
      </div>
    </div>
    <div className="mt-6">
      <a
        className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
      >
        {pet.price} <span className="sr-only">, button</span>
      </a>
    </div>
  </div>
  )


  return (
    <>
    {
        loading
        ?
        <CardLoadingSkeleton />
        :
        card()
    }
    </>
  )
}

Card.defaultProps = {
  scale: false
}

