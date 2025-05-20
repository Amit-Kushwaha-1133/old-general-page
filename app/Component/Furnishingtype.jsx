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
    <section className="sm:flex pt-13 bg-white flex-col hidden sm:justify-center px-20 pb-16">
      <p className="text-2xl font-extrabold mb-5 text-black">Explore by Furnishing Type</p>

      <div className="flex flex-row w-full justify-between">
        {furnishedtype.map((data, index) => (
          <div className="h-45 w-96" key={index}>
            <Variantprops card={data} variant="Furnishtype" icon={clickArrow} />
          </div>
        ))}
      </div>
    </section>
  );
}
