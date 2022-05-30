import { useState } from "react"
import PetCategoryTypes from "./PetCategoryTypes"
import PetCategoryContracts from "./PetCategoryContracts"
import PetCategoryAge from "./PetCategoryAge"
import PetCategoryTags from "./PetCategoryTags"

export default function MobileMenu({showMobileMenu, hideMobileMenu, categoryAge, categoryTypes, categoryContracts, categoryTags, handleTagSelect}) {

  const [showHideCategoryTypes, setShowHideCategoryTypes] = useState(true)
  const [showHideCategoryContracts, setShowHideCategoryContracts] = useState(true)
  const [showHideCategoryAge, setShowHideCategoryAge] = useState(true)
  const [showHideTags, setShowHideTags] = useState(true)
  

  const renderCategoryTypes= () => ( 
    <div className="border-t border-gray-200 pt-4 pb-4">
        <fieldset>
          <legend className="w-full px-2">
            <button onClick={() => setShowHideCategoryTypes(value => !value)} type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
              <span className="text-sm font-medium text-gray-900"> Types</span>
              <span className="ml-6 h-7 flex items-center">
                <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </legend>
          <div className="pt-4 pb-2 px-4" id="filter-section-0">
            {
             showHideCategoryTypes&&<div className="space-y-6">
              {
                categoryTypes?.length&&categoryTypes.map((category, index) => 
                  <PetCategoryTypes key={index} category={category} index={index} />
                )
              }
            </div>
            }
          </div>
        </fieldset>
      </div>
  )

  const renderCategoryContracts = () => ( 
    <div className="border-t border-gray-200 pt-4 pb-4">
        <fieldset>
          <legend className="w-full px-2">
            <button onClick={() => setShowHideCategoryContracts(value => !value)} type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
              <span className="text-sm font-medium text-gray-900"> Contracts</span>
              <span className="ml-6 h-7 flex items-center">
                <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </legend>
          <div className="pt-4 pb-2 px-4" id="filter-section-0">
            {
             showHideCategoryContracts&&<div className="space-y-6">
              {
                categoryContracts?.length&&categoryContracts.map((category, index) => 
                  <PetCategoryContracts key={index} category={category} index={index} />
                )
              }
            </div>
            }
          </div>
        </fieldset>
      </div>
  )

  const renderCategoryAge= () => ( 
    <div className="border-t border-gray-200 pt-4 pb-4">
        <fieldset>
          <legend className="w-full px-2">
            <button onClick={() => setShowHideCategoryAge(value => !value)} type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
              <span className="text-sm font-medium text-gray-900"> Age</span>
              <span className="ml-6 h-7 flex items-center">
                <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </legend>
          <div className="pt-4 pb-2 px-4" id="filter-section-0">
            {
             showHideCategoryAge&&<div className="space-y-6">
              {
                categoryAge?.length&&categoryAge.map((category, index) => 
                  <PetCategoryAge key={index} category={category} index={index} />
                )
              }
            </div>
            }
          </div>
        </fieldset>
      </div>
  )


  const renderTags = () => (
    <div className="border-t border-gray-200 pt-4 pb-4">
    <fieldset>
      <legend className="w-full px-2">
        <button onClick={() => setShowHideTags(value => !value)} type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
          <span className="text-sm font-medium text-gray-900"> Tags </span>
          <span className="ml-6 h-7 flex items-center">
            <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </legend>

      {
        showHideTags&&<div>
          <div className="flex flex-wrap pt-1 pb-2 px-4 items-baseline  pb-6  border-slate-200">
             {
                categoryTags.map((tag, index) => 
                  <PetCategoryTags key={index} tag={tag} index={index} handleTagSelect={handleTagSelect}/>
                )
              }

           
        </div>
        <button type="button" className="  w-1/3 py-1 ml-1 border border-transparent text-xs font-medium rounded text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
            Show more 
        </button>
       </div>
       }
    </fieldset>
  </div>

  )

  return (
    <>
     { 
     showMobileMenu&&<div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
         <div className="fixed inset-0 flex z-40">
          <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
            <div className="px-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button onClick={hideMobileMenu} type="button" className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* <!-- Filters --> */}
            <form className="mt-4">

            { renderCategoryTypes() }
            { renderCategoryContracts()}
            { renderTags() }
            {renderCategoryAge()}

            </form>
          </div>
        </div>
      </div>}
     </>

    
  )
}
