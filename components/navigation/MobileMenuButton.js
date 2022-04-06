import { useState, useEffect } from "react"

export default function MobileMenuButton({isMenuOpen,  handleMenuClick }) {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    {/*   <!-- Mobile menu button --> */}
      <button onClick={() =>  handleMenuClick(isMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
      {/*  <!--
          Icon when menu is closed.

          Heroicon name: outline/menu

          Menu open: "hidden", Menu closed: "block"
        --> */}

      {/*  <!--
          Icon when menu is open.

          Heroicon name: outline/x

          Menu open: "block", Menu closed: "hidden"
        --> */}
        {!isMenuOpen
          ?
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>  
          :

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
                      
        }
      </button>
    </div>
  )
}
