"use client";
import React from "react";
import ApartmentCard from "./ApartmentCard"; // adjust path if needed

const apart = [
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹25K /Month",
    apartheading: "3BHK Apartment House for Rent",
    loc: "Sector 142, Noida",
    posted: "Amit Kushwaha",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
    apartheading: "1BHK Apartment House for Rent",
    loc: "Greater.Noida",
    posted: "Manish Kushwaha",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Gorakhpur",
    posted: "Rakesh",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
    apartheading: "4BHK Apartment House for Rent",
    loc: "Delhi",
    posted: "Atul",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
    apartheading: "3BHK Apartment House for Rent",
    loc: "Sector 162, Noida",
    posted: "Anurag",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Saket",
    posted: "Divy",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
    apartheading: "2BHK Apartment House for Rent",
    loc: "Noida",
    posted: "Sunny Maurya",
  },
  {
    apartmenttype: "Apartment",
    Images: "/propertybg.png",
    bookmarks: "/Bookmarks.svg",
    prices: "₹15K /Month",
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

const Apartments = () => {
  return (
    <section className="hidden sm:flex flex-col px-20 pb-16">
      <h2 className="text-2xl font-extrabold mb-4">
        Apartments & Builder Floors for Rent in Noida
      </h2>
      <div className="flex flex-row overflow-x-auto hide-scrollbar gap-4">
        {apart.map((item, index) => (
          <ApartmentCard key={index} data={item} highlights={highlight} />
        ))}
      </div>
    </section>
  );
};

export default Apartments;
