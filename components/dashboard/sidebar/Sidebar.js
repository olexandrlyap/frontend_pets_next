import SidebarItems from "./SidebarItems"
import { useEffect } from "react"
export default function Sidebar() {
  useEffect(() => {
    console.log('mounted sidebar')
  }, [])
  return (
    <div className=' w-full md:w-52 flex flex-col p-5  rounded'>
       <div className='bg-gray-50 rounded-xl  p-5'>
       <img className="lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
       
       </div>
       <div className='mt-7'>
           <div className='flex flex-col  '>
            < SidebarItems/>
           </div>
       </div>
    </div>
  )
}
