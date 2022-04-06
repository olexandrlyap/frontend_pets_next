import axios from "axios"
import { EXPRESS_URL } from "../config"

const doesUsernameExist = async (username) => {

        const response = await axios.post(`${EXPRESS_URL}/api/v1/auth/username-exists`, {
            username
        })

        return response.data.user
        
}

export default doesUsernameExist