
import Head from 'next/head';
import Verify from '../../components/auth/Verify';


export default function index() {

    
  const title = 'Potvrzení emailu'

  return (
      <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Verify />
       

      </div>
     
  )
}
