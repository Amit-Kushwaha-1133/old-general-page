"use client";
import React, { useRef } from "react";
import Variantprops from "./Variantprops";
import { Image } from "next/image";

const properties = [
  {
    title: "Apartments for Rent",
    image: "/ApartmentsforRent.png",
  },
  {
    title: "2 & 3 BHK Houses",
    image: "/BHKHouses.png",
  },
  {
    title: "Budget friendly Homes",
    image: "/BudgetfriendlyHomes.png",
  },
  {
    title: "Homes for Family",
    image: "/HomesforFamily.png",
  },
  {
    title: "Apartments for Rent",
    image: "/ApartmentsforRent.png",
  },
  {
    title: "2 & 3 BHK Houses",
    image: "/BHKHouses.png",
  },
  {
    title: "Budget friendly Homes",
    image: "/BudgetfriendlyHomes.png",
  },
  {
    title: "Homes for Family",
    image: "/HomesforFamily.png",
  },
];

const Propertiesforrenty = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="flex w-full bg-white flex-col sm:justify-center px-3 sm:px-20 pt-6 sm:pb-16">
      <p className="text-lg  sm:text-2xl text-black font-extrabold pb-3 sm:pb-6">
        Properties for Rent in Noida
      </p>

      <div className="relative hidden sm:flex items-center ">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-5" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-5" />

        <button
          onClick={() => scroll("left")}
          className="z-10 absolute left-0 border border-gray-300 bg-white p-4 rounded-full"
        >
          <img src="/backword.svg" alt="backword" />
        </button>

        <div
          ref={scrollRef}
          className="flex flex-row gap-4 w-full overflow-auto pointer-events-none hide-scrollbar"
        >
          {properties.map((data, index) => (
            <div className="h-45 w-96" key={index}>
              <Variantprops card={data} variant="Propertiestype" />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="z-10 absolute right-0 border border-gray-300 bg-white p-4 rounded-full"
        >
          <img src="/farword.svg" alt="farword" className="" />
        </button>
      </div>
      <div className="flex sm:hidden flex-row overflow-auto justify-between gap-2 pb-6 w-full hide-scrollbar">
          {properties.map((data, index) => (
            <div key={index} >
              <Variantprops card={data} variant="ouroffering" />
             
            </div>
          ))}
        </div>
    </section>
  );
};

export default Propertiesforrenty;
