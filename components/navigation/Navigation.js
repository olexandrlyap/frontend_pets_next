import { useState, useContext, useEffect} from "react"
import Link from "next/link"
import ProfileDropdown from "./ProfileDropdown"
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import LogoutButton from '../partials/LogoutButton'
import AuthContext from "../../context/AuthContext"
import Router  from "next/router"


export default function Navigation() {

  useEffect(() => {
    console.log('nav')
  }, [])
    
  const {logout, userIsLoggedIn, user} = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleProfileClick = ((isOpenState) =>  setIsOpen(!isOpenState))
  const handleMenuClick = ((isOpenState) => setIsMenuOpen(!isOpenState))

  const handleLogout = async () => {
    await logout()
    Router.push('/')
    Router.reload()
  }
  
  return (
   <>
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

         < MobileMenuButton isMenuOpen={isMenuOpen}  handleMenuClick ={handleMenuClick}/>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
            </div>
            < Menu isMenuOpen={isMenuOpen} />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
            {/* <!-- Profile dropdown --> */}

            {
              userIsLoggedIn || user
              ?
              <>
                <LogoutButton logout={handleLogout} />
                <ProfileDropdown handleProfileClick={handleProfileClick} isOpen={isOpen} logout={handleLogout}/>
              </>
              :
              <>
                <Link href="/registrace">
                <a className='inline-flex items-center px-2 py-1.5 md:px-4 mr-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Registrace
                </a>
                </Link>
                <Link href="/prihlaseni">
                <a className='inline-flex items-center px-2 py-1.5 md:px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Přihlášení
                </a>
                </Link>
              </>
            }
            
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <MobileMenu isMenuOpen={isMenuOpen} />
    </nav>
   </>
  )
}
