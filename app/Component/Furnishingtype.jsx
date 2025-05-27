import React from "react";
import Variantprops from "./Variantprops";

const furnishedtype = [
  {
    title: "Fully Furnished",
    desc: "Properties with All Essentials",
    image: "/fullyfurnished.png",
  },
  {
    title: "Semi Furnished",
    desc: "Properties with Basic Amenities",
    image: "/semifurnished.png",
  },
  {
    title: "Unfurnished",
    desc: "Properties, Ready to be styled by You",
    image: "/unfurnished.png",
  },
];

export default function Furnishingtype() {
  const clickArrow = (
    <img src="/clickarrow.svg" alt="clickarrow" className="h-8 w-8" />
  );

  return (
    <section className="flex sm:pt-13 bg-[#F1F0F5]  sm:bg-white flex-col justify-center px-3 sm:px-20  py-3 sm:pb-16">
      <p className="text-lg sm:text-2xl font-extrabold mb-3 sm:mb-5 text-black">Explore by Furnishing Type</p>

      <div className="flex flex-row w-full gap-2 sm:gap-4 justify-between overflow-x-auto hide-scrollbar">
        {furnishedtype.map((data, index) => (
          <div className="h-28 sm:h-45 w-full" key={index}>
            <Variantprops card={data} variant="Furnishtype" icon={clickArrow} />
          </div>
        ))}
      </div>
    </section>
  );
}
