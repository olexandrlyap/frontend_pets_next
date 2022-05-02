import axios from "axios"
import Pet from "../../../../components/pet/Pet"
import Layout from '../../../../components/layouts/Layout'

export default function index({pet}) {
  return (
    <Layout>
      <div className="lg:grid lg:grid-cols-4">
        <div className="col-start-1	col-end-4">
           <Pet pet={pet}/>
           <div>Profile of user</div>
           <div>Recommend pets, last viewed section</div>
           
        </div>
        <aside className="hidden lg:flex lg:col-start-4	lg:col-end-5 text-center">
          advertisements here
        </aside>
      </div>
      
    </Layout>
  )
}

export async function getServerSideProps({params}) {
    const { username, slug } = params

    // const responseUser = await axios.get(`${process.env.EXPRESS_URL}/api/v1/pets/${username}`)
    const response = await axios.get(`${process.env.EXPRESS_URL}/api/v1/pets/${slug}`)
    const { pet } = response.data







    return {
        props: {
          pet
        }
    }
  }

