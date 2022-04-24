import Links from "./Links"
import CardsAdoption from "./CardsAdoption"
import Newsletter from "../../partials/Newsletter"
import Categories from "./Categories"

export default function Main() {
  return (
    <main className="flex flex-col">
       <Categories />
        <CardsAdoption />
        <Newsletter />
        <CardsAdoption />
   
    </main>
  )
}
