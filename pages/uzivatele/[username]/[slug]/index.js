import axios from "axios"


export default function index() {
  return (
    <div>Display one pet page </div>
  )
}

export async function getServerSideProps({params}) {
    const { username, slug } = params
    try {
       // const response = await axios.get(`${process.env.EXPRESS_URL}/api/v1/users/${username}`)

        console.log('res', username, slug)

    } catch (error) {
        console.log('error', error)
    }




    return {
        props: {

        }
    }
  }

