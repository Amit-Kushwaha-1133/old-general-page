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
    <section className="flex  bg-white sm:bg-gray-200 py-6 sm:py-13">
      <div className="flex flex-col sm:flex-row px-3 sm:px-20 justify-between gap-2 sm:gap-16 h-full w-full">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-lg sm:text-5xl text-black font-extrabold pb-2 sm:leading-16"><span className='hidden sm:block'>Checkout the</span>Co-Living Offerings</p>
          <button className="hidden bg-blue-900 sm:flex flex-row w-fit items-center justify-center py-3.5 px-14 rounded-xl cursor-pointer">
            <p className="text-base text-white font-bold leading-6">Explore Co-living</p>
            <img src="/realarrow.svg" alt="realarrow" className="h-5 w-5 pl-1.5" />
          </button>
        </div>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {commercial.map((data, index) => (
              <div className="h-45 w-auto sm:h-full" key={index}>
                <Variantprops card={data} variant="commercialtype" />
              </div>
            ))}
          </div>
       
      </div>
    </section>
  )
}

export default Checkoutcoliving