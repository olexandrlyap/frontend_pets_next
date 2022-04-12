import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { EXPRESS_URL } from '../../config'
import { setTimeoutPromise } from '../../helpers/index';
import LoadingButton from '../partials/LoadingButton';
import { Router } from "next/router";


export default function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [wasSent, setWasSent] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const submit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      setWasSent(false)
      try {
        await axios.post(`${EXPRESS_URL}/api/v1/auth/forgot-password`, {
            email
        })
        setWasSent(true)
        await setTimeoutPromise(1000)
        setIsLoading(false)

      } catch (error) {
        setWasSent(false)
      }
  }

   const renderButton = (() => 
        !isLoading 
        ?   
        <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  "
        >
        Zaslat resetovací odkaz
        </button>
        :
        <LoadingButton />
   )


  return (

    <div className=" bg-indigo-600 h-screen ">
		<div className="container mx-auto pt-12 ">
			<div className="flex justify-center px-6 ">

					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg ">
						<div className="px-8 mb-4 flex flex-col justify-center text-center">
                            <Link href='/'>
                                <img
                                    className="h-12 w-auto cursor-pointer"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                            </Link>
							<h3 className="pt-4 my-2 text-2xl">Zapomněli jste heslo?</h3>
							<p className="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and we'll send you a
								link to reset your password!
							</p>
						</div>
						<form onSubmit={submit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                                </label>
                                <div className="mt-1">
                                <input
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                        </div>
							</div>
							<div className="mb-6 text-center">
								{renderButton()}

                                { wasSent &&
                                 <div className=" mt-5 p-2 rounded">
                                   <p className='text-green-500 text-xs italic'>  Resetovací odkaz byl zaslán na email. Prosím zkontrolujte si email. Odkaz je platný po dobu 24h. </p>
                                </div>
                                }
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
                                <Link href="/register">
                                <a
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Create an Account.
								</a>
                                
                                </Link>
							</div>
							<div className="text-center">
                                <Link href="/prihlaseni">
                                    <a
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Already have an account? 
                                    </a>
                                </Link>
							</div>
						</form>
					</div>

		    	</div>
	    	</div>
	    </div>
  )
}
