
import Link from "next/link"
import { useRouter } from "next/router"

export default function SettingsNavigation() {
  const router = useRouter()
  const linkStyles = ' font-medium text-gray-400 py-3 px-3 md:px-6'
  const linkActiveStyles = 'text-indigo-500 font-semibold border-b-[3px]  border-indigo-500   py-3 px-4'

  return (
   <nav className="flex flex-wrap p-5  bg-gray-50 rounded">

       <Link href='/nastenka/nastaveni/obecne' prefetch={false}>
            <a className={router.pathname === '/nastenka/nastaveni/obecne' ? linkActiveStyles : linkStyles}>General</a>

      {/*  <div className="border-b-[3px] border-indigo-500 mt-3"></div> */}
       </Link>

       <Link  href='/nastenka/nastaveni/heslo' prefetch={false}>
            <a className={router.pathname === '/nastenka/nastaveni/heslo' ? linkActiveStyles : linkStyles}>Password</a>
       </Link>

       <p className={linkStyles}>Others</p>
   </nav>
  )
}
