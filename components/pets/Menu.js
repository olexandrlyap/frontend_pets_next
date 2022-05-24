

export default function Menu() {
  return (
    <div className="hidden lg:block ">
            <form className="divide-y divide-gray-200 space-y-10">
              <div>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">Color</legend>
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center">
                      <input id="color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                      <label for="color-0" className="ml-3 text-sm text-gray-600"> White </label>
                    </div>

                    <div className="flex items-center">
                      <input id="color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                      <label for="color-1" className="ml-3 text-sm text-gray-600"> Beige </label>
                    </div>

                    <div className="flex items-center">
                      <input id="color-2" name="color[]" value="blue" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                      <label for="color-2" className="ml-3 text-sm text-gray-600"> Blue </label>
                    </div>

                    <div className="flex items-center">
                      <input id="color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                      <label for="color-3" className="ml-3 text-sm text-gray-600"> Brown </label>
                    </div>

                    <div className="flex items-center">
                      <input id="color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                      <label for="color-4" className="ml-3 text-sm text-gray-600"> Green </label>
                    </div>
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
                     <input className="focus:ring-1 focus:ring-indigo-500 focus:outline-none appearance-none text-center italic  text-xs  text-slate-500 placeholder-slate-500 rounded-md  ring-1 ring-slate-200 shadow-sm" type="text" placeholder="Search more tags" />

                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-baseline mt-6 pb-6  border-slate-200">
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
                  <legend className="block text-sm font-medium text-gray-900">Sizes</legend>
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center">
                      <input id="sizes-0" name="sizes[]" value="xs" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                      <label for="sizes-0" className="ml-3 text-sm text-gray-600"> XS </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
  )
}
