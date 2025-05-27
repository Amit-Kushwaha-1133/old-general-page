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

const plotstypemob = [
  {
    title: "1BHK",
    image: "/1BHKProperties.png",
  },
  {
    title: "2BHK",
    image: "/2BHKProperties.png",
  },
  {
    title: "3BHK",
    image: "/3BHKProperties.png",
  },
  {
    title: "4BHK",
    image: "/4BHKProperties.png",
  },
  {
    title: "5BHK",
    image: "/5BHKProperties.png",
  },
  {
    title: "5+BHK",
    image: "/5+BHKProperties.png",
  },
];

function BHK() {
  return (
    <section className="flex bg-[#F1F0F5] sm:bg-white flex-col px-3 sm:px-20 py-3 sm:py-14">
      <p className="text-lg sm:text-2xl text-black font-extrabold pb-3 sm:pb-6">BHK in Mind?</p>

      <div className="hidden sm:flex flex-row w-full gap-4 justify-between">
        {plotstype.map((data, index) => (
          <div className="h-35 w-50" key={index}>
            <Variantprops card={data} variant="Bhktype" />
          </div>
        ))}
      </div>
      <div className="flex sm:hidden flex-row overflow-auto justify-between gap-2 pb-3 w-full hide-scrollbar">
          {plotstypemob.map((data, index) => (
            <div key={index}>
              <Variantprops card={data} variant="ouroffering" />
             
            </div>
          ))} 
        </div>

    </section>
  );
}

export default BHK;
