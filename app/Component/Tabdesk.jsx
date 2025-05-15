'use client';

import { useState } from "react";


const tabswitch = [
  { text: "Rent"},
  { text: "Buy"},
  { text: "PG's"},
  { text: "Land"},
  { text: "Co-living"},
  { text: "Project"},
  { text: "Commercial"}
];


export default function Tabdesk() {
 
        const[active, setactive] = useState("Rent")
   

    return (
      <section className="hidden sm:flex sm:items-center sm:justify-center sm:w-full sm:pt-6">
      <div className="flex gap-2 bg-black/50 rounded-3xl px-3 py-2">
        {tabswitch.map((tab,index) => (
          <div
          key={index}
          onClick={() => setactive(tab.text)}
          className={`cursor-pointer rounded-3xl px-4 py-1 transition-colors duration-300 ${
              active === tab.text ? "bg-white text-blue-900" : "text-white"
            }`}
          >
            <p className="text-xl">{tab.text}</p>
          </div>
        ))}
      </div>
       
      </section>
    );
  }