import axios from "axios";
import { useEffect, useState } from "react";
import { QueryClient } from "react-query";
import { fetchCategoryAge, fetchCategoryContracts, fetchCategoryTypes, fetchPets, fetchTags, useCategoryAgeQuery, useCategoryContractsQuery, useCategoryTypesQuery, usePetsQuery, useTagsQuery } from "../../api";
import Layout from "../../components/layouts/Layout";
import Card from "../../components/partials/card/Card";
import Pagination from "../../components/partials/Pagination";
import Menu from "../../components/pets/Menu";
import MobileMenu from "../../components/pets/MobileMenu";
import { EXPRESS_URL } from '../../config';

export default function Zvirata() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showSort, setShowSort] = useState(false)

  const { data: pets = [], isLoading: isPetsLoading } = usePetsQuery()
  const { data: tags = [], isLoading: isTagsLoading } = useTagsQuery()
  const { data: categoryAge = [], isLoading: isCategoryAgeLoading } = useCategoryAgeQuery()
  const { data: categoryContracts = [], isLoading: isCategoryContractsLoading } = useCategoryContractsQuery()
  const { data: categoryTypes = [], isLoading: isCategoryTypesLoading } = useCategoryTypesQuery()

  const loading = isPetsLoading || isTagsLoading || isCategoryAgeLoading || isCategoryContractsLoading || isCategoryTypesLoading

  const hideMobileMenu = () => setShowMobileMenu(false)

  return (
    <Layout>
      <div className="bg-white">

        {/* MOBILE, TABLET DARK BACKGROUND */}
       { 
        showMobileMenu&&<div>
            <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 bg-black bg-opacity-25"></div>
            </div>
          </div>
        }


        {/* MOBILE, TABLET MENU */}
        <div>
          < MobileMenu showMobileMenu={showMobileMenu}  hideMobileMenu={hideMobileMenu} categoryTypes={categoryTypes} categoryContracts={categoryContracts} categoryAge={categoryAge} categoryTags={tags} />
        


          {/* Breadcrumb */}

      {/*     <div className="border-b border-gray-200">
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ol role="list" className="flex items-center space-x-4 py-4">
                <li>
                  <div className="flex items-center">
                    <a href="#" className="mr-4 text-sm font-medium text-gray-900"> Men </a>
                    <svg viewBox="0 0 6 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-auto text-gray-300">
                      <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600"> New Arrivals </a>
                </li>
              </ol>
            </nav>
          </div> */}


          {/* PRODUCTS AND HEADING section */}

          <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
            <div className="border-b border-gray-200 pt-24 pb-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Have a look at these pets</h1>

                <div className="lg:flex justify-between items-center mt-2">
                <input id="search" type="search" placeholder="What are you searching for?" className="block w-60 shadow-sm  px-1 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " />
                  
                  <div className="relative z-20 inline-block text-left mt-10 lg:mt-0">
                    <div>
                      <button onClick={() => setShowSort(value => !value)} type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                        Sort
                        <svg className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    {
                      showSort&&<div className="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div className="py-1" role="none">

                        <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0"> Most Popular </a>

                        <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="menu-item-1"> Best Rating </a>

                      </div>
                    </div>}
                  </div>
                </div>


              
            </div>
            <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              <aside>
                <h2 className="sr-only">Filters</h2>
                <button onClick={() => setShowMobileMenu(true)} type="button" className="inline-flex items-center lg:hidden">
                  <span className="text-sm font-medium text-gray-700">Filters</span>
                  <svg className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <Menu categoryTypes={categoryTypes} categoryContracts={categoryContracts} categoryAge={categoryAge} categoryTags={tags}  />
              </aside>
              <section aria-labelledby="product-heading" className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                <h2 id="product-heading" className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                    {pets.map((pet) => (
                      <Card key={pet.id} pet={pet} loading={loading} />
                    ))}
                </div>
                <div className="mt-10">
                <Pagination />
              </div>
              </section>

            </div>
          </main>
        </div>
      </div>

    </Layout>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(['pets', 0, undefined], fetchPets)
  queryClient.prefetchQuery('tags', fetchTags)
  queryClient.prefetchQuery('categoryAge', fetchCategoryAge)
  queryClient.prefetchQuery('categoryContracts', fetchCategoryContracts)
  queryClient.prefetchQuery('categoryTypes', fetchCategoryTypes)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
