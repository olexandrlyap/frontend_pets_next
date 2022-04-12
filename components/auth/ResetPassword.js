import queryString from 'query-string'
import { useState, useEffect } from 'react'
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import { EXPRESS_URL } from '../../config/index'
import { setTimeoutPromise, validationRules } from '../../helpers/index';
import LoadingButton from '../partials/LoadingButton';

export default function ResetPassword() {
    const [password, setPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [error, setError] = useState(false);
    const [formWasClicked, setFormWasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState(null)
    const [resetSuccess, setResetSuccess] = useState(false)

    useEffect(() => {
        const parsed = queryString.parse(location.search)
        setQuery(parsed)
    }, [])
  
    useEffect(() => {
        isPasswordValid()
    }, [password])

    const resetPassword = async () => {
        try {
           const response = await axios.post(`${EXPRESS_URL}/api/v1/auth/reset-password`, {
                email: query.email,
                token: query.token,
                password
            }, { withCredentials: true })
            console.log(response)
            return response
            
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const submit = async (e) => {
        e.preventDefault()
        setError(false)
        setIsLoading(true)
        setFormWasClicked(true)
        
        if(!passwordIsValid){
            setError(true)
            await setTimeoutPromise(1000)
            setIsLoading(false)
            return
        }

        await resetPassword()
        if(error) return

        setResetSuccess(true)
        await setTimeoutPromise(1000)
        Router.push('/prihlaseni')

    }

    const isPasswordValid = async () => {
        password.length >= validationRules.password.minLength && password.length <= validationRules.password.maxLength 
        ?
        setPasswordIsValid(true)
        :
        setPasswordIsValid(false)
    }

    const renderButton = (() => 
        !isLoading 
        ?   
        <button
        type="submit"
        onClick={submit}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  "
        >
        Resetovat heslo
        </button>
        :
        <LoadingButton />
    )

    const renderError = () => error&&formWasClicked&&<p className='text-red-500 text-xs italic'>Vyskytla se chyba. Heslo musí obsahovat 6 a více znaků nebo platnost resetovacího odkazu vypršela. </p>
    const renderSuccess = () => resetSuccess&&<p className='text-green-500 text-xs italic'>Změna hesla proběhla úspěšně.</p>

    const resetForm = () => {
        return(
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
                                <h3 className="pt-4 my-2 text-2xl">Change Your Password</h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    We get it, stuff happens. Just enter your password address below and we'll send you a
                                    link to reset your password!
                                </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                    </label>
                                    <div className="mt-1">
                                    <input
                                        id="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        name="password"
                                        type="password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                            </div>
                                </div>
                                <div className="mb-6 text-center">
                                    {renderButton()}
                                </div>
                                { renderError() }
                                { renderSuccess() }
                            </form>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
  
    return (
        <main className='h-screen mx-auto flex items-center justify-center'>
        {
            resetForm()
        }
        </main>
    )
}
