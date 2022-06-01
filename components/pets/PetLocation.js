import clsx from "clsx";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

export default function PetLocation() {
  const [error, setError] = useState(null);
  useEffect(() => {
    window.initAutocompleteInput = function () {
      const input = document.getElementById("places-autocomplete-input");
      if (input) {
        const searchBox = new google.maps.places.SearchBox(input);
        searchBox?.addListener('places_changed', () => {
          const places = searchBox.getPlaces();
          if (places.length > 1) {
            setError(`The selected place has ${places.length} locations. Please use a more specific query.`);
          } else if (!places[0].geometry?.location) {
            setError('The selected place has no location. Please choose another one.');
          } else {
            const { lat, lng } = places[0].geometry.location;
            const value = [lat(), lng()];
            // Do something with the value
            console.log(value)
          }
        })
      }
    };

    if (typeof google !== "undefined") {
      window.initAutocompleteInput();
    }
  }, []);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&callback=initAutocompleteInput`}
        strategy="afterInteractive"
      />

      <input
        type="text"
        id="places-autocomplete-input"
        className={clsx(
          "w-full rounded-md border bg-white py-2 pl-3 pr-12 shadow-sm focus:outline-none sm:text-sm",
          {
            'border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500': !error,
            'border-red-600': !!error,
          },
        )}
      />

      {error && <p>{error}</p>}
    </>
  );
}
