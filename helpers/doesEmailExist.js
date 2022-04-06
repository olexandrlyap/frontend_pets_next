import axios from "axios"
import { EXPRESS_URL } from "../config"

const doesEmailExist = async (email) => {

        const response = await axios.post(`${EXPRESS_URL}/api/v1/auth/email-exists`, {
            email
        })

        return response.data.user
        
}

export default doesEmailExist 