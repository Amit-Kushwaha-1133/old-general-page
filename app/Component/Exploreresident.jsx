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

const mobresidentialProperties = [
  {
    title: "Apartment/Flats",
    image: "/apartmentmob.png",
  },
  {
    title: "Individual Floor",
    image: "/mobindividual.png",
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
    <section className="sm:flex flex-col pt-6  sm:pt-13 bg-blue-50 sm:justify-center px-3 sm:px-20 sm:pb-16">
      <p className="text-lg sm:text-2xl text-black font-extrabold mb-3 sm:mb-5 whitespace-nowrap "><span className="hidden sm:inline">Explore </span> Residential Properties</p>
      <div className="hidden sm:flex flex-row justify-between items-center h-[380px]">
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
       <div className="flex sm:hidden flex-row overflow-auto justify-between gap-2 min-w-full pb-6 hide-scrollbar">
          {mobresidentialProperties.map((data, index) => (
            <div key={index}>
              <Variantprops card={data} variant="ouroffering" />
             
            </div>
          ))}
        </div>
    </section>
  );
};

export default Exploreresident;
