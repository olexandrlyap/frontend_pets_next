import { useState, useEffect, useContext } from 'react'
import  Router  from 'next/router'

import LoadingButton from '../../partials/LoadingButton'
import SignUpSocial from './SignUpSocial'
import AuthContext from '../../../context/AuthContext'

import { validateEmail, validationRules, doesUsernameExist, doesEmailExist } from '../../../helpers/index'



function SignUp () {

    const { register, userIsLoggedIn } = useContext(AuthContext)

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [formIsValid, setFormIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [usernameIsValid, setUsernameIsValid] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [formWasClicked, setFormWasClicked] = useState(false)
    const [userNameExists, setUserNameExists] = useState(false)
    const [userEmailExists, setUserEmailExists] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        isFormValid()

    }, [form, passwordIsValid, usernameIsValid, emailIsValid])

    const checkForExistingUsername = ( async () =>   {
       const check =  await doesUsernameExist(form.username)
       console.log('check username', check)
       check ? setUserNameExists(true) : setUserNameExists(false)
       setIsLoading(false)
       return check ? true : false
    })

    const checkForExistingEmail = ( async () =>   {
        const check =  await doesEmailExist(form.email)
        console.log('check email', check)
        check ? setUserEmailExists(true) : setUserEmailExists(false)
        setIsLoading(false)
        return check ? true : false
     })

    const handleChange = ((e) => {
        setUserNameExists(false)
        setUserEmailExists(false)
        const { name, value } = e.target
        const condition = name === 'username' || name === 'email'

        setForm(prevState => ({
            ...prevState,
            [name]: condition ? value.replace(/ /g, "").toLowerCase() : value
        }))
    })

    const submit = ( async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setFormWasClicked(true)
        
        if(!formIsValid) {  
            setIsLoading(false) 
            return
        } 

        try {
            if( await checkForExistingUsername()) return
            if( await checkForExistingEmail()) return
            await register({username: form.username, password:form.password, email: form.email})
            setError('')
            Router.push('/')
            
        }catch(e) {
            setError('Vyskytla se chyba. Zkuste to prosím později.')
            setIsLoading(false)
        }
    })

    const usernameIsNotValid = (() => 
      !usernameIsValid&&formWasClicked&&<p className='text-red-500 text-xs italic'>Uživatelské jméno musí být v rozmezí {validationRules.username.minLength}-{validationRules.username.maxLength} znaků</p>

      ||

      userNameExists&&formWasClicked&&<p className='text-red-500 text-xs italic'>Uživatelské jméno již existuje</p>
    )

    const passwordIsNotValid = (() => 
      !passwordIsValid&&formWasClicked&&<p className='text-red-500 text-xs italic'>Heslo musí být v rozmezí {validationRules.password.minLength}-{validationRules.password.maxLength} znaků</p>
    )

    const emailIsNotValid = (() => 
      !emailIsValid&&formWasClicked&&<p className='text-red-500 text-xs italic'>Zadejte prosím email</p>

      ||

      userEmailExists&&formWasClicked&&<p className='text-red-500 text-xs italic'>Email je používán</p>
    )

    const formError = (() => 
      error&&<p className='font-semibold text-red-500 text-sm italic'>{error}</p>
    )


  const isFormValid = (() => {
    if(!form) return


    form.password.length >= validationRules.password.minLength && form.password.length <= validationRules.password.maxLength 
        ?
        setPasswordIsValid(true)
        :
        setPasswordIsValid(false)

    form.username.length >= validationRules.username.minLength && form.username.length <= validationRules.username.maxLength
        ?
        setUsernameIsValid(true)
        :
        setUsernameIsValid(false)
    
    validateEmail(form.email) ? setEmailIsValid(true) : setEmailIsValid(false)
    
    passwordIsValid&&usernameIsValid&&emailIsValid ? setFormIsValid(true) : setFormIsValid(false)
 })

    const renderButton = (() => 
        !isLoading 
        ?   
        <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  "
        >
        Registrace
        </button>
        :
        <LoadingButton />
    )

    return (
        <div className="min-h-full flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                <img
                    className="h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign UP to your account</h2>

                </div>

                <div className="mt-8">
                <div>
                    <SignUpSocial />

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
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                        </label>
                        <div className="mt-1">
                        <input
                            id="username"
                            value={form.username}
                            onChange={handleChange}
                            name="username"
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {usernameIsNotValid()}
                        </div>
                    </div>
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
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {emailIsNotValid()}
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
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {passwordIsNotValid()}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">


                        <div className="text-sm">
                     {/*    <Link to={ROUTES.LOGIN} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Do you have an account?
                        </Link> */}
                        </div>
                    </div>

                    <div>
                        {renderButton()}
                    </div>

                    {formError()}

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

export default SignUp