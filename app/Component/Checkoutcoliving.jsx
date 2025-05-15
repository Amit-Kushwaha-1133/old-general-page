import React from 'react'
import Variantprops from "./Variantprops";

const commercial = [
  {
    title: "Room/Flats",
    desc: "List your Profile & find your second home in the new city and find the perfect co-living room/flat with us.",
    image: "/roomflats.png",
  },
  {
    title: "Roommates",
    desc: "Find the perfect roommate and make your living space into sweet home & split your rent.",
    image: "/Roommates.png",
  },
  
];


function Checkoutcoliving() {
  return (
    <section className="hidden sm:flex bg-gray-200 py-13">
      <div className="flex px-20 justify-between gap-16 w-full">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-5xl font-extrabold leading-16">Checkout the Co-Living<br/> <span>Offerings</span></p>
          <button className="bg-blue-900 flex flex-row w-fit items-center justify-center py-3.5 px-14 rounded-xl cursor-pointer">
            <p className="text-base text-white font-bold leading-6">Explore Co-living</p>
            <img src="/realarrow.svg" alt="realarrow" className="h-5 w-5 pl-1.5" />
          </button>
        </div>
          
          <div className="flex flex-row gap-4">
            {commercial.map((data, index) => (
              <div className="h-full w-auto" key={index}>
                <Variantprops card={data} variant="commercialtype" />
              </div>
            ))}
          </div>
       
      </div>
    </section>
  )
}

export default Checkoutcoliving