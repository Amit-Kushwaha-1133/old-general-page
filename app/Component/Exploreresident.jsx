import React from "react";
import Variantprops from "./Variantprops";

const residentialProperties = [
  {
    title: "Apartment/Flats",
    image: "/Apartment.png",
  },
  {
    title: "Individual Floor",
    image: "/IndividualFloor.png",
  },
  {
    title: "Independent House",
    image: "/IndependentHouse.png",
  },
  {
    title: "1Rk/Studio House",
    image: "/StudioHouse.png",
  },
  {
    title: "Independent Villa",
    image: "/IndependentVilla.png",
  },
  {
    title: "Residential Plot/Land",
    image: "/ResidentialPlot.png",
  },
];

const Exploreresident = () => {
  return (
    <section className="sm:flex flex-col hidden pt-13 bg-blue-50 sm:justify-center h px-20 pb-16">
      <p className="text-2xl text-black font-extrabold mb-5">Explore Residential Properties</p>
      <div className="flex flex-row justify-between items-center h-[380px]">
        <div className="w-[27%] h-full">
          <Variantprops card={residentialProperties[0]} variant="residential" />
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-y-4 w-[45%] h-full">
          {residentialProperties.slice(1, residentialProperties.length - 1).map((data, index) => (
            <div className="w-[49%] h-[48%]" key={index}>
              <Variantprops card={data} variant="ouroffering" />
             
            </div>
          ))}
        </div>
        <div className="w-[27%] h-full">
          <Variantprops
            card={residentialProperties[residentialProperties.length - 1]}
            variant="residential"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Exploreresident;
