import Head from "next/head"
import NotifyPage from '../../../components/pages/NotifyPage'
export default function index() {

    const heading = 'Potvrzovací email odeslán'
    const text = 'K dokončení registrace je nutné potvrdit Vámi registrovaný email.'
    const notification = ''

    return (
        <main className="h-full">
            <Head>
                <title>Kontrola emailu</title>
            </Head>
            <NotifyPage heading={heading} text={text} notification={notification}/>
        </main>

    )
  }
  