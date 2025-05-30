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
        <section className="flex flex-col bg-[#F1F0F5] sm:bg-white sm:justify-center px-3 py-3 sm:px-20 sm:pb-16">
          <p className="text-lg sm:text-2xl text-black font-extrabold mb-3 sm:mb-5">Hot Deal Properties in noida</p>
    
          <div className="hidden sm:flex flex-row w-full overflow-auto justify-between gap-4">
            {furnishedtype.map((data, index) => (
              <div className="h-45 w-full" key={index}>
                <Variantprops card={data} variant="Furnishtype" icon={clickArrow} />
              </div>
            ))}
          </div>
          <div className="flex sm:hidden flex-row overflow-auto justify-between gap-2 w-full hide-scrollbar">
          {furnishedtype.map((data, index) => (
            <div key={index} >
              <Variantprops card={data} variant="ouroffering" />
             
            </div>
          ))}
        </div>
        </section>
  )
}

export default Hotdealprop;