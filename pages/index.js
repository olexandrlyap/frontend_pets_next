import { QueryClient } from "react-query"
import { fetchPets } from "../api"
import Layout from "../components/layouts/Layout"
import Header from "../components/mainPage/header/Header"
import Main from "../components/mainPage/main/Main"

export default function Home() {
  return (
   <Layout>
     <Header />
     <Main />
   </Layout>
  )
}


export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  queryClient.prefetchQuery(['pets', 0, 4], () => fetchPets({ skip: 0, limit: 4 }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }, // will be passed to the page component as props
  }
}
