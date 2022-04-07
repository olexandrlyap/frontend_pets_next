import axios from "axios"
import { EXPRESS_URL} from '../../config'
import { setTimeoutPromise } from "../../helpers"


export const login = async ({email, password}) => {
    try {
        console.log('login action', email, password)
       const data = await axios.post(`${EXPRESS_URL}/api/v1/auth/login`, {
               email,
               password
       },{ withCredentials: true })

       if(data.status !== 200 ) { 
           return undefined
       } 

    //   await setTimeoutPromise(2000) 

    
   } catch (error) {
       await setTimeoutPromise(2500)
       throw new Error(`${error}`)
   } 
}

