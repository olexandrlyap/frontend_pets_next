import axios from "axios"
import { EXPRESS_URL} from '../../../config'

export const isCookiePresent = async() => {
    const response = await axios.get(`${NEXT_URL}/api/isCookiePresent`)
    console.log('im response', response)
}