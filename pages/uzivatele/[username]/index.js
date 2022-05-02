import axios from "axios"


export default function index({ user }) {
  return (
    <div>One user here: {user.username}</div>
  )
}

export async function getServerSideProps({params}) {
    const { username } = params

    const response = await axios.get(`${process.env.EXPRESS_URL}/api/v1/users/${username}`)
    const { user }= await response.data


    return {
        props: {
            user
        }
    }
  }
