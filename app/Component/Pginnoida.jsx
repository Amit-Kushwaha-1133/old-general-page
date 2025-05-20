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
        <section className="sm:flex flex-col bg-white hidden sm:justify-center px-20 pb-16">
          <p className="text-2xl text-black font-extrabold mb-5">PG’s in noida</p>
    
          <div className="flex flex-row w-full justify-between gap-4">
            {furnishedtype.map((data, index) => (
              <div className="h-45 w-full" key={index}>
                <Variantprops card={data} variant="pginnoida" />
              </div>
            ))}

            
          </div>
        </section>
  )
}

export default Pginnoida;