
import { useState, useEffect } from "react"
import axios from "axios"
import { validationRules, setTimeoutPromise } from "../../../helpers"
import { EXPRESS_URL } from "../../../config"

export default function PasswordModal({setIsModalActive}) {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [newPasswordIsValid, setNewPasswordIsValid] = useState(false)
    const [oldPasswordIsValid, setOldPasswordIsValid] = useState(false)


    useEffect(() => {
        checkOldPassword()
        checkNewPassword()
    }, [oldPassword, newPassword])


    const checkOldPassword = () => {
        oldPassword.length >= validationRules.password.minLength && oldPassword.length <= validationRules.password.maxLength 
        ?
        setOldPasswordIsValid(true)
        :
        setOldPasswordIsValid(false)
    }

    const checkNewPassword = () => {
        newPassword.length >= validationRules.password.minLength && newPassword.length <= validationRules.password.maxLength 
        ?
        setNewPasswordIsValid(true)
        :
        setNewPasswordIsValid(false)
    }

    const isValid = async () => newPasswordIsValid && oldPasswordIsValid ? true : false


    const submit = async () => {
        setError('')
        setWasClicked(true)
        try {
            const check = await isValid()
            if(!check) {
               return setError('Heslo musí obsahovat alespoň 6 znaků.')       
            }
            await axios.patch(`${EXPRESS_URL}/api/v1/users/updateUserPassword`, {
                oldPassword,
                newPassword
            }, {withCredentials: true})

            setSuccess(true)
            setNewPassword('')
            setOldPassword('')
            await setTimeoutPromise(1000)
            setIsModalActive(false)
            
        } catch (error) {
            console.log(error)
            setError('Nesprávné heslo.')
        }
    }

    const submitErrorResponse = () => error&&wasClicked&&<p className='mt-5 font-semibold text-red-500 text-sm italic'>{error}</p>
    const submitSuccessResponse = () => success&&!error&&<p className='mt-5 font-semibold text-green-500 text-sm italic'>Heslo bylo úspěšně změněno.</p>
    
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/*   <!-- Heroicon name: outline/exclamation --> */}
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                  </div>
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900" id="modal-title">Change your password</h3>
                      <div className="my-10">
  
  
                  <form className="space-y-6 " action="#" method="POST">
                      <div>
                          <label htmlFor="old_password" className="block text-sm font-medium text-gray-700">
                          Old Password
                          </label>
                          <div className="mt-1">
                          <input
                              id="old_password"
                              name="old_password"
                              value={oldPassword}
                              onChange={e => setOldPassword(e.target.value)}
                              type="password"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          </div>
                      </div>
  
                      <div>
                          <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
                          New password
                          </label>
                          <div className="mt-1">
                          <input
                              id="new_password"
                              name="new_password"
                              value={newPassword}
                              onChange={e => setNewPassword(e.target.value)}
                              type="password"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          </div>
                      </div>
                  </form>

                        { submitErrorResponse() }
                        { submitSuccessResponse() }
                      </div>
                  </div>
                  </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button onClick={submit} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Change</button>
                  <button onClick={() => setIsModalActive(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
              </div>
              </div>
          </div>
      </div>
    )
  }
  