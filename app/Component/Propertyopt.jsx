"use client";

import { useState } from "react";

export default function Propertyopt() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Apartment, Builder...");

  const options = [
    "Apartment",
    "Builder Floor",
    "Independent House",
    "Villa",
    "1Rk/Studio House",
  ];

  return (
    <section className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer select-none gap-2 w-full px-4"
      >
        <img src="/home.svg" alt="home" className="w-6 h-6" />
        <p className="text-base text-black">{selected}</p>
        <img
          src="/dropdownblack.svg"
          alt="dropdown"
          className="w-3 h-1.5 mx-3"
        />
      </div>

      {isOpen && (
        <div className="absolute mt-6.5 border-gray-200 border shodow-md rounded-b-md bg-white z-20 w-full">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base text-black"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
