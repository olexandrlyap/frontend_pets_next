import { useState, useEffect } from "react"
import PropTypes from 'prop-types'

import { capitalizeFirstLetter } from '../../helpers'

export default function PetBreeds({breeds, typeID, type}) {
 const [isActive, setIsActive] = useState(false)

  useEffect(() => {

   console.log('pet breeds', type, typeID, breeds)
  }, [])

{/* {capitalizeFirstLetter(type) */}

  return (
    <div  className="p-10">
        <label onClick={() => setIsActive(value => !value)} htmlFor={typeID} className="block text-sm font-medium text-gray-900"> {capitalizeFirstLetter(type)} breeds</label>
        <div className="relative mt-1">
           <div onClick={() => setIsActive(value => !value)}>
                <input type="text" className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" role="combobox" aria-controls="options" aria-expanded="false" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                {/* <!-- Heroicon name: solid/selector --> */}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>

            {
            isActive&&<ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id="options" role="listbox">
                {
                    breeds?.length&&breeds.map((breed) => 
                    <>
                        <li key={breed.id} className="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900" id="option-0" role="option" tabindex="-1">
                           <span className="block truncate">{breed.name}</span>
                        </li>
                    </>
                )}

                <li className="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900" id="option-0" role="option" tabindex="-1">
                </li>

            {/*     <li className="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900" id="option-0" role="option" tabindex="-1">
                    <span className="block truncate">Leslie Alexander</span>

                    <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                </li> */}

            </ul>
            }
        </div>
    </div>
  )
}

PetBreeds.propTypes = {
    breeds: PropTypes.array
}
