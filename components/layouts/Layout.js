import Head from "next/head"
import Navigation from "../navigation/Navigation"



export default function Layout({title, keywords, description, children}) {

  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

        <Navigation />
 
        {children}
    </div>
  )
}

Layout.defaultProps = {
    title: 'PetFinder | Save animals',
    description: 'Lorem descriptum',
    keywords: 'test, test'
}
