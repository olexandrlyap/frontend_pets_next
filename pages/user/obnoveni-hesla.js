
import Head from 'next/head';
import ResetPassword from '../../components/auth/ResetPassword';


export default function index() {
    
  const title = 'Obnovení hesla'

  return (
      <div>
        <Head>
            <title>{title}</title>
        </Head>

        <ResetPassword />
        
       
      </div>
     
  )
}
