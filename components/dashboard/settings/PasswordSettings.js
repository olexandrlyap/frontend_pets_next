import { useState } from "react"
import PasswordModal from "./PasswordModal"


export default function PasswordSettings() {

  const [isModalActive, setIsModalActive] = useState(false)



  return (
    <div className=" flex justify-between  py-5 px-10  mt-10 h-screens ">
        <div className="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <div className="flex flex-col ">
                <p className="text-sm font-medium">Set your password</p>
                <p className="text-xs italic">Choose a strong, unique password that’s at least 6 characters long.</p>
            </div>
        </div>
        <div onClick={() => setIsModalActive(true)} className="bg-indigo-100 p-2 rounded-lg cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 " viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>      
        </div>

        {/* Trigger Modal */}
        {
            isModalActive&&<PasswordModal setIsModalActive={setIsModalActive} />
           
        }

       
    </div>
  )
}
