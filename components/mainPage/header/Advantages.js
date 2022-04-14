import Image from "next/image"

export default function Advantages() {
  
  const advantages = [
      {
          'id': 1,
          'img': 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
          'alt': 'Alt here',
          'heading': 'Save a life',
          'body': 'Its not actually free we just price it into the products. Someones paying for it, and its not us.'
      },
      {
        'id': 2,
        'img': 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        'alt': 'Alt here',
        'heading': 'Get a friend',
        'body': 'Its not actually free we just price it into the products. Someones paying for it, and its not us.'
    },
    {
        'id': 3,
        'img': 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        'alt': 'Alt here',
        'heading': 'Be happy',
        'body': 'Its not actually free we just price it into the products. Someones paying for it, and its not us.'
    },
  ]

  
  return (
      <>
            {
                advantages.map((advantage) => {
                    return(
                        <div key={advantage.id} className="sm:flex lg:block">
                            <div  className="sm:flex-shrink-0">
                                <Image src={advantage.img} alt={advantage.alt} width={64} height={64} />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                 <h3 className="text-sm font-medium text-gray-900">{advantage.heading}</h3>
                                 <p className="mt-2 text-sm text-gray-500">{advantage.body}</p>
                            </div>
                        </div>
                    )
                })
            }
      </>

  )
}
