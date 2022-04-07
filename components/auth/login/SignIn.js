import { useState, useContext } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from "axios"
import { EXPRESS_URL} from '../../../config'
import { setTimeoutPromise } from "../../../helpers"
import SignInSocial from './SignInSocial'
import LoadingButton from '../../partials/LoadingButton'
import { AuthDispatchContext } from '../../../context/auth/AuthContext'




function SignIn () {

    const dispatch = useContext(AuthDispatchContext)

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
   

    const handleChange = ((e) => {
        const { name, value } = e.target
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    })
    
    const submit = ( async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        try {
            const data = await axios.post(`${EXPRESS_URL}/api/v1/auth/login`, {
                    email: form.email,
                    password: form.password
            },{ withCredentials: true })
            await setTimeoutPromise(2000)
            dispatch({type: 'LOGIN', data})
            
            
        }catch(e) {
            setIsLoading(false)
            setError('Invalid credentials')
        }
    })


    const renderButton = (() =>
        !isLoading 
            ?   
            <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  "
            >
            Přihlášení
            </button>
            :
           <LoadingButton />
    )

    return (
        <div className="min-h-full m-10 flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                <img
                    className="h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign IN to your account</h2>

                </div>

                <div className="mt-8">
                <div>
                    
                    <SignInSocial />

                    <div className="mt-6 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                    </div>
                </div>

                <div className="mt-6">
                    <form onSubmit={submit} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                        </label>
                        <div className="mt-1">
                        <input
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <div className="mt-1">
                        <input
                            id="password"
                            value={form.password}
                            onChange={handleChange}
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">

                        <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                        </div>
                        <div className="text-sm">
                        <Link href='/registrace'>
                            <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                Dont you have an account?
                            </a>
                        </Link>
                        </div>
                    </div>

                    <div>
                        
                        {renderButton()}
                    </div>

                    {error&&<p className='font-bold text-red-500'>Nesprávné příhlašovací údaje. {error.message}</p>}
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">

               {/*  EXTRACT AS COMPONENT */}
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                alt=""
            />
            </div>
      </div>
    )
}

export default SignIn