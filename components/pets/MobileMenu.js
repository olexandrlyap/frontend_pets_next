import { useState } from "react"

export default function MobileMenu({showMobileMenu, hideMobileMenu}) {

  const [showHideCategoryExample, setShowHideCategoryExample] = useState(true)
  const [showHideTags, setShowHideTags] = useState(true)

  const renderCategoryExample = () => ( 
    <div className="border-t border-gray-200 pt-4 pb-4">
        <fieldset>
          <legend className="w-full px-2">
            <button onClick={() => setShowHideCategoryExample(value => !value)} type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
              <span className="text-sm font-medium text-gray-900"> Contract </span>
              <span className="ml-6 h-7 flex items-center">
                <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </legend>
          <div className="pt-4 pb-2 px-4" id="filter-section-0">
            {
             showHideCategoryExample&&<div className="space-y-6">
              <div className="flex items-center">
                <input id="color-0-mobile" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="color-0-mobile" className="ml-3 text-sm text-gray-500"> Koupě</label>
              </div>
              <div className="flex items-center">
                <input id="color-0-mobile" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="color-0-mobile" className="ml-3 text-sm text-gray-500"> Darování</label>
              </div>
              <div className="flex items-center">
                <input id="color-0-mobile" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="color-0-mobile" className="ml-3 text-sm text-gray-500"> Útulek </label>
              </div>
              <div className="flex items-center">
                <input id="color-0-mobile" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="color-0-mobile" className="ml-3 text-sm text-gray-500"> Připuštění</label>
              </div>
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
              <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                S pp
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Bez pp
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Jídlo s sebou
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Vhodný do domu
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Vhodný pro děti
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Hravý
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Kříženec
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Mazel
                </p>
                <p className='inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                Vhodný do bytu
                </p>
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
        {/*  <!--
          Off-canvas menu backdrop, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        <div className="fixed inset-0 flex z-40">
      {/*     <!--
            Off-canvas menu, show/hide based on off-canvas menu state.

            Entering: "transition ease-in-out duration-300 transform"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
              From: "translate-x-0"
              To: "translate-x-full"
          --> */}
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

            { renderCategoryExample() }
            { renderTags() }

            
             

              <div className="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                  <legend className="w-full px-2">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                      <span className="text-sm font-medium text-gray-900"> Category </span>
                      <span className="ml-6 h-7 flex items-center">
                        {/*  <!--
                          Expand/collapse icon, toggle classNamees based on section open state.

                          Heroicon name: solid/chevron-down

                          Open: "-rotate-180", Closed: "rotate-0"
                        --> */}
                        <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </legend>
                  <div className="pt-4 pb-2 px-4" id="filter-section-1">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="category-0-mobile" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="category-0-mobile" className="ml-3 text-sm text-gray-500"> All New Arrivals </label>
                      </div>

                      <div className="flex items-center">
                        <input id="category-1-mobile" name="category[]" value="tees" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="category-1-mobile" className="ml-3 text-sm text-gray-500"> Tees </label>
                      </div>

                      <div className="flex items-center">
                        <input id="category-2-mobile" name="category[]" value="crewnecks" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="category-2-mobile" className="ml-3 text-sm text-gray-500"> Crewnecks </label>
                      </div>

                      <div className="flex items-center">
                        <input id="category-3-mobile" name="category[]" value="sweatshirts" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="category-3-mobile" className="ml-3 text-sm text-gray-500"> Sweatshirts </label>
                      </div>

                      <div className="flex items-center">
                        <input id="category-4-mobile" name="category[]" value="pants-shorts" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="category-4-mobile" className="ml-3 text-sm text-gray-500"> Pants &amp; Shorts </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                  <legend className="w-full px-2">
                    {/*  <!-- Expand/collapse section button --> */}
                    <button type="button" className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                      <span className="text-sm font-medium text-gray-900"> Sizes </span>
                      <span className="ml-6 h-7 flex items-center">
                {/*          <!--
                          Expand/collapse icon, toggle classNamees based on section open state.

                          Heroicon name: solid/chevron-down

                          Open: "-rotate-180", Closed: "rotate-0"
                        --> */}
                        <svg className="rotate-0 h-5 w-5 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </legend>
                  <div className="pt-4 pb-2 px-4" id="filter-section-2">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="sizes-0-mobile" name="sizes[]" value="xs" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="sizes-0-mobile" className="ml-3 text-sm text-gray-500"> XS </label>
                      </div>

                      <div className="flex items-center">
                        <input id="sizes-1-mobile" name="sizes[]" value="s" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="sizes-1-mobile" className="ml-3 text-sm text-gray-500"> S </label>
                      </div>

                      <div className="flex items-center">
                        <input id="sizes-2-mobile" name="sizes[]" value="m" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="sizes-2-mobile" className="ml-3 text-sm text-gray-500"> M </label>
                      </div>

                      <div className="flex items-center">
                        <input id="sizes-3-mobile" name="sizes[]" value="l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="sizes-3-mobile" className="ml-3 text-sm text-gray-500"> L </label>
                      </div>

                      <div className="flex items-center">
                        <input id="sizes-4-mobile" name="sizes[]" value="xl" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="sizes-4-mobile" className="ml-3 text-sm text-gray-500"> XL </label>
                      </div>

                      <div className="flex items-center">
                        <input id="sizes-5-mobile" name="sizes[]" value="2xl" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        <label for="sizes-5-mobile" className="ml-3 text-sm text-gray-500"> 2XL </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>}
     </>

    
  )
}
