import { useState, useEffect } from "react"
import axios from "axios"
import {EXPRESS_URL} from '../../config'
import PetCategoryTypes from "./PetCategoryTypes"
import PetCategoryContracts from "./PetCategoryContracts"
import PetCategoryAge from "./PetCategoryAge"
import PetCategoryTags from "./PetCategoryTags"
import PetBreeds from "./PetBreeds"
import PetLocation from "./PetLocation"


const allowedBreeds = [
  {
    id: 1,
    type: 'cat',
    breeds: [
        {
          id: 1,
          type: 'cat',
          name: 'perská'
        },
        {
          id: 2,
          type: 'cat',
          name: 'obyčejná'
        },
        {
          id: 3,
          type: 'cat',
          name: 'májská mývalí'
        },
        {
          id: 4,
          type: 'cat',
          name: 'ragdoll'
        },
    ]
  },
  {
    id: 2,
    type: 'dog',
    breeds: [
      {
        id: 5,
        type: 'pes',
        name: 'retriever'
      },
      {
        id: 6,
        type: 'pes',
        name: 'pitbull'
      },
    ]
  },
  {
    id: 3,
    type: 'other',
    breeds: [
      {
        id: 7,
        type: 'ostatní',
        name: 'kůň'
      }
    ]
  },
]


export default function Menu({categoryAge, categoryTypes, categoryContracts, categoryTags, handleTagSelect}) {


  useEffect(() => {
    
  }, [])


  return (
    <div className="hidden lg:block ">
            <form className="divide-y divide-gray-200 space-y-10">
              <div>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">Types</legend>
                  <div className="pt-6 space-y-3">
                    {
                      categoryTypes?.length&&categoryTypes.map((category, index) => 
                        <PetCategoryTypes key={index} category={category} index={index} />
                      )
                    }
                  </div>
                </fieldset>
              </div>

              <div className="pt-4">
                <fieldset>
                  <div className="pt-6 space-y-3">
                    {/* display cat breeds */}
                     {
                       allowedBreeds.map((breedType) =>
                        <PetBreeds key={breedType.type} typeID={breedType.id} type={breedType.type} breeds={breedType.breeds} />
                       )
                     }

                  </div>
                </fieldset>
              </div>


              <div className="pt-10">
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">Contracts</legend>
                  <div className="pt-6 space-y-3">
                    {
                      categoryContracts?.length&&categoryContracts.map((category, index) => 
                        <PetCategoryContracts key={index} category={category} index={index} />
                      )
                    }
                  </div>
                </fieldset>
              </div>

              {/*
               TAGS WITH SEARCH TAG INPUT
               - show most favorite tags
               - let user search for more tags
               - autocomplete search
              */}

              <div className="pt-10">
                <fieldset>
                  <div className="flex justify-between shrink">
                     <legend className="block text-sm font-medium text-gray-900">Tags</legend>
                     <input className="focus:ring-1 focus:ring-indigo-500 focus:outline-none appearance-none text-center italic  text-xs  text-indigo-500 placeholder-gray-500 rounded-md  ring-1 ring-gray-200 shadow-sm" type="text" placeholder="Search more tags" />

                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-baseline mt-6 pb-6  border-slate-200">
                      {
                        categoryTags.map((tag, index) => 
                          <PetCategoryTags key={index} tag={tag} index={index} handleTagSelect={handleTagSelect}/>
                        )
                      }
                    </div>
                  <button
                  type="button"
                  className=" self-center w-1/3 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 hover:border hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Show more 
                </button>

                  </div>
                </fieldset>
              </div>

              <div className="pt-10">
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">Age</legend>
                  <div className="pt-6 space-y-3">
                   {
                      categoryAge?.length&&categoryAge.map((category, index) => 
                        <PetCategoryAge key={index} category={category} index={index} />
                      )
                    }
                  </div>
                </fieldset>
              </div>

              <div className="pt-10">
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">Nearest to you</legend>
                  <div className="pt-6 space-y-3">
                    <PetLocation />
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
  )
}
