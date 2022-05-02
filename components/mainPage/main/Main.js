import Links from "./Links"
import CardsAdoption from "./CardsAdoption"
import Newsletter from "../../partials/Newsletter"
import Categories from "./Categories"
import CardsRecommended from "./CardsRecommended"

export default function Main() {
  return (
    <main className="flex flex-col">
       <Categories />

       < CardsRecommended />

        {/* <CardsAdoption /> */}
        {/* <Newsletter /> */}
        {/* <CardsAdoption /> */}
   
    </main>
  )
}
