import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { EXPRESS_URL} from '../config/index'
import { setTimeoutPromise } from "../helpers"

const AuthContext = createContext(null)


// AUTH BEFORE REDUCER

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [error, setError] = useState(null)


   useEffect(() => {
    console.log('run')
    checkUserLoggedIn()
   }, [])

   
    // Register User

    const register = async ({username, password, email}) => {
        try {
            const data = await axios.post(`${EXPRESS_URL}/api/v1/auth/register`, {
                username,
                password,
                email
            }, { withCredentials: true })

            await setTimeoutPromise(3000)   
    
        } catch (error) {
            setUser(null)
            setUserIsLoggedIn(false)
            await setTimeoutPromise(2500)
            throw new Error(`Chybové hlášení ${error}`)  
        }
    }

    // Login User
    const login = async ({email, password}) => {
         try {
            const data = await axios.post(`${EXPRESS_URL}/api/v1/auth/login`, {
                    email,
                    password
            },{ withCredentials: true })

            if(data.status !== 200) { 
                throw new Error('Bad request')
            } 
            setUser(data.data.user)
            await setTimeoutPromise(2000)
                
        } catch (error) {
            await setTimeoutPromise(2500)
            throw new Error(`${error}`)
        } 
    }

    // Logout User

    const logout = async () => {
        const response = await axios.delete(`${EXPRESS_URL}/api/v1/auth/logout`, { withCredentials: true })

    }

    // Check if User is logged in
    
    const checkUserLoggedIn = async (user) => {

        try {
            const data = await axios.get(`${EXPRESS_URL}/api/v1/users/showMe`, { withCredentials: true })
            
            if(!data) {
                setUser(null)
                setUserIsLoggedIn(false)
            }

            setUser(data.data.user)
            setUserIsLoggedIn(true)
          
        } catch (error) {
            setUser(null)
            setUserIsLoggedIn(false)
            console.log(error)
        } 
    }

    return (
        <AuthContext.Provider value={{user, register, login, logout, userIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext