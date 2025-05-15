"use client";
import React from "react";
import Variantprops from "./Variantprops";

const commercial = [
  {
    title: "Office Space",
    desc: "Tailored workspaces to foster productivity and growth.",
    image: "/OfficeSpace.png",
  },
  {
    title: "Retail Shop",
    desc: "Prime retail spaces to elevate your business presence.",
    image: "/RetailShop.png",
  },
  {
    title: "Warehouse",
    desc: "Strategic storage solutions for your logistical needs.",
    image: "/Warehouse.png",
  },
  {
    title: "Showrooms",
    desc: "Showcase your brand in premium, high-visibility locations.",
    image: "/Showrooms.png",
  },
  {
    title: "Commercial Plots",
    desc: "Versatile plots for your next big venture.",
    image: "/CommercialPlots.png",
  },
];

function CheckoutCommercial() {
  return (
    <section className="hidden sm:flex bg-gray-200 py-13 mb-18">
      <div className="flex px-20 justify-between w-full">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-5xl font-extrabold leading-16">Checkout the Commercial <br/> <span>Offerings</span></p>
          <button className="bg-blue-900 flex flex-row w-fit items-center justify-center py-3.5 px-10 rounded-xl cursor-pointer">
            <p className="text-base text-white font-bold leading-6">Explore Commercial Properties</p>
            <img src="/realarrow.svg" alt="realarrow" className="h-5 w-5 pl-1.5" />
          </button>
        </div>

        <div className="flex flex-row w-full gap-3 justify-end cursor-pointer">
          <div className="w-auto">
            <Variantprops card={commercial[0]} variant="commercialtype"/>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {commercial.slice(1, commercial.length).map((data, index) => (
              <div className=" h-40 w-auto" key={index}>
                <Variantprops card={data} variant="commercialtype" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutCommercial;
