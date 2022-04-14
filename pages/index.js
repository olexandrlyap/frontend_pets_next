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
  console.log('main page')
  return {
    props: {}, // will be passed to the page component as props
  }
}
