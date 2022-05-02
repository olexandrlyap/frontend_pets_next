import axios from "axios"


export default function index({ user }) {
  return (
    <div>One user here:</div>
  )
}

export async function getServerSideProps({params}) {
    const { username } = params
    try {
        const response = await axios.get(`${process.env.EXPRESS_URL}/api/v1/users/${username}`)
        const { user } = await response.data
        console.log('res', user)

    } catch (error) {
        console.log('error', error)
    }




    return {
        props: {
            user: 'hello'
        }
    }
  }
