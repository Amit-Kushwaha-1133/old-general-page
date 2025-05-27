import React from 'react'
import Variantprops from "./Variantprops";

const furnishedtype = [
  {
    title: "PG’s for Girls",
    image: "/pggirls.png",
    button: "Explore"
  },
  {
    title: "PG’s for Boys",
    image: "/mealpg.png",
    button: "Explore"
  },
  {
    title: "PG’s With Meal",
    image: "/boyspg.png",
    button: "Explore"
  },
];

function Pginnoida() {
    
    
      return (
        <section className="flex flex-col bg-white sm:justify-center px-3 sm:pt-0 py-6 sm:px-20 sm:pb-16">
          <p className="text-lg sm:text-2xl text-black font-extrabold mb-3 sm:mb-5">PG’s in Noida</p>
    
          <div className="flex flex-row w-full justify-between overflow-x-auto hide-scrollbar gap-2 sm:gap-4">
            {furnishedtype.map((data, index) => (
              <div className="h-30 sm:h-45 w-full" key={index}>
                <Variantprops card={data} variant="pginnoida" />
              </div>
            ))}

            
          </div>
        </section>
  )
}

export default Pginnoida;