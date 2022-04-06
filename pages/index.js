import Layout from "../components/layouts/Layout"

export default function Home() {
  return (
   <Layout>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   </Layout>
  )
}


export async function getServerSideProps(context) {
  console.log('main page')
  return {
    props: {}, // will be passed to the page component as props
  }
}
