import axios from "axios"
import { EXPRESS_URL} from '../../../config'


export const logout = async () => {
    await axios.delete(`${EXPRESS_URL}/api/v1/auth/logout`, { withCredentials: true })
}