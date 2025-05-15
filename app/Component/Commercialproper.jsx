"use client";
import React from "react";
import ApartmentCard from "./ApartmentCard"; // adjust path if needed

const apart = [
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹24 Crs",
    apartheading: "3BHK Apartment House for Rent",
    loc: "Sector 142, Noida",
    posted: "Amit Kushwaha",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹17 Crs",
    apartheading: "1BHK Apartment House for Rent",
    loc: "Greater.Noida",
    posted: "Manish Kushwaha",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹19 Crs",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Gorakhpur",
    posted: "Rakesh",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹64 Crs",
    apartheading: "4BHK Apartment House for Rent",
    loc: "Delhi",
    posted: "Atul",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15 Crs",
    apartheading: "3BHK Apartment House for Rent",
    loc: "Sector 162, Noida",
    posted: "Anurag",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹18 Crs",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Saket",
    posted: "Divy",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹8 Crs",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Noida",
    posted: "Sunny Maurya",
  },
  {
    apartmenttype: "Office Space",
    Images: "/Commercialbg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹11 Crs",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Hydrabad",
    posted: "Ajay Maurya",
  },
];

const highlight = [
  { id: "5BHK" },
  { id: "1350 Sq.ft." },
  { id: "Fully Furnished" },
  { id: "North-East Facing" },
  { id: "kon?" },
  { id: "ekele" },
  { id: "Cook" },
  { id: "Watchman" },
  { id: "Parking" },
  { id: "Food" },
];

const Commercialproper = () => {
  return (
    <section className="hidden sm:flex flex-col px-20 pb-16">
      <h2 className="text-2xl font-extrabold mb-4">
      Commercial Properties for Sale in Noida
      </h2>
      <div className="flex flex-row overflow-x-auto hide-scrollbar gap-4">
        {apart.map((data, index) => (
          <ApartmentCard key={index} data={data} highlights={highlight} />
        ))}
      </div>
    </section>
  );
};

export default Commercialproper;
