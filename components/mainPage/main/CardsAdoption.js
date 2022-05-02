
import ShowMoreButton from "../../partials/ShowMoreButton"

export default function CardsAdoption() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-50">
        <h2 className="my-10 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">Checkout pets for adoption</h2>
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      

        </div>
        <div className="my-5">
          <ShowMoreButton link={'/pets'} text='Ukázat více' />
        </div>
    </div>
  )
}
