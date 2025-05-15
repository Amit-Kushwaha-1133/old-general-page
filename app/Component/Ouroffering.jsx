"use client";

import Variantprops from "./Variantprops";

const offercards = [
  {
    title: "Residential Properties",
    image: "/ResidentialProperties.png",
  },
  {
    title: "Commercial Properties",
    image: "/CommercialProperties.png",
  },
  {
    title: "Search PG’s",
    image: "/SearchPG.png",
  },
  {
    title: "Plots for sale",
    image: "/Plotsforsale.png",
  },
  {
    title: "Co-Living",
    image: "/Co-Living.png",
  },
];

export default function Ouroffering() {
  return (
    <section className="sm:flex flex-col hidden sm:justify-center px-20 py-16">
      <p className="text-2xl font-extrabold mb-5">Our Offerings</p>

      <div className="flex flex-row gap-3 h-[152px]">
        {offercards.map((card, index) => (
          <Variantprops key={index} card={card} variant="ouroffering" />
        ))}
      </div>
    </section>
  );
}
