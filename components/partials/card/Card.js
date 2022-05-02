import { useEffect } from 'react'
import test from '../../../assets/test.jpg'
import Image from 'next/image'
import Link from 'next/link'
import CardLoadingSkeleton from './CardLoadingSkeleton'

export default function Card({pet, loading}) {

  const adoptionBadge = 'inline-flex shrink items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'

  useEffect(() => {
   
  }, [])



  return (
    <>
    {
        loading
        ?
        <CardLoadingSkeleton />
        :
        <div className="flex  font-sans   md:m-5  bg-white">
            <div className=" w-32 md:w-48 relative ">
                <Image src={pet.main_image || test} layout='fill' alt="" className="absolute inset-0 w-full h-full object-cover " />
            </div>
            <div className="flex-auto p-2  md:p-6 ">
                <div className="flex flex-wrap">
                <Link href={`/uzivatele/${pet.user.username}/${pet.slug}`} >
                    <a className="flex-auto text-sm md:text-lg font-semibold text-slate-900">{pet.name} </a>
                </Link>
                <div className={adoptionBadge}>
                    {pet.contract}
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2"> 
                    {pet.now_available === true &&<span>Dostupný ihned</span> } 
                   
                </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex flex-wrap  text-sm">
                    {
                        pet.tags&&pet.tags.map((tag) =>  
                            <div key={tag._id} className="inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {tag.name}
                            </div>
                        )
                    }
                </div>
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                    <button className=" shrink h-5 px-4 md:h-10 md:px-6  font-semibold rounded-md bg-black text-white" type="submit">
                    {pet.price}
                    </button>
                   {/*  <button className="h-10 px-6 shrink font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    Mám zájem
                    </button> */}
                </div>
                <button className="flex-none shrink flex items-center self-center justify-center w-6 h-5  md:w-9 md:h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                </button>
                </div>
                <p className="text-sm text-slate-700">
                {pet.notes}
                </p> 
            </div>
        </div>
    }
    </>
  )
}
