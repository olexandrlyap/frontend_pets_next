import axios from "axios"
import { EXPRESS_URL} from '../../../config'



export const getUser = async () => {
     
     try {
          const data = await axios.get(`${EXPRESS_URL}/api/v1/users/showMe`, { withCredentials: true })
          return data
     } catch (error) {
          console.log('e', error)
     }
}

