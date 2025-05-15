import React from "react";
import Variantprops from "./Variantprops";

const plotstype = [
  {
    title: "1BHK Properties",
    image: "/1BHKProperties.png",
  },
  {
    title: "2BHK Properties",
    image: "/2BHKProperties.png",
  },
  {
    title: "3BHK Properties",
    image: "/3BHKProperties.png",
  },
  {
    title: "4BHK Properties",
    image: "/4BHKProperties.png",
  },
  {
    title: "5BHK Properties",
    image: "/5BHKProperties.png",
  },
  {
    title: "5+BHK Properties",
    image: "/5+BHKProperties.png",
  },
];

function BHK() {
  return (
    <section className="hidden sm:flex flex-col px-20 py-14">
      <p className="text-2xl font-extrabold pb-6">BHK in Mind?</p>

      <div className="flex flex-row w-full gap-4 justify-between">
        {plotstype.map((data, index) => (
          <div className="h-35 w-50" key={index}>
            <Variantprops card={data} variant="Bhktype" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BHK;
