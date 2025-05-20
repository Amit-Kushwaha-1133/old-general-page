import React from 'react'
import Variantprops from "./Variantprops";

const furnishedtype = [
  {
    title: "Residential Properties",
    image: "/Residential.png",
  },
  {
    title: "Commercial Properties",
    image: "/Commercial.png",
  },
  {
    title: "Residential Plots",
    image: "/plot.png",
  },
  {
    title: "Commercial Plots",
    image: "/Commercialhot.png",
  },
];

function Hotdealprop() {
    const clickArrow = (
        <img src="/clickarrow.svg" alt="clickarrow" className="h-8 w-8" />
      );
    
      return (
        <section className="sm:flex flex-col hidden bg-white sm:justify-center px-20 pb-16">
          <p className="text-2xl text-black font-extrabold mb-5">Hot Deal Properties in noida</p>
    
          <div className="flex flex-row w-full justify-between gap-4">
            {furnishedtype.map((data, index) => (
              <div className="h-45 w-full" key={index}>
                <Variantprops card={data} variant="Furnishtype" icon={clickArrow} />
              </div>
            ))}
          </div>
        </section>
  )
}

export default Hotdealprop;