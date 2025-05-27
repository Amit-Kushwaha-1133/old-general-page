import React from "react";
import Variantprops from "./Variantprops";

const plotstype = [
    {
      title: "Residential Plots for sale",
      image: "/ResidentialPlots.png",
    },
    {
      title: "Plots with Boundary Wall",
      image: "/PlotsBoundaryWall.png",
    },
    {
      title: "Corner Plots for Sale",
      image: "/CornerPlots.png",
    },
    {
      title: "North- East Facing Plot",
      image: "/North-EastPlot.png",
    },
  ];

function Plot() {
  return (
    <section className=" bg-white sm:bg-slate-200">
      <div className="flex flex-col px-3 sm:px-20 py-3 sm:py-14">
        <p className="text-lg sm:text-2xl text-black font-extrabold pb-3 sm:pb-6">Plots in Noida</p>
        
        <div className="hidden sm:flex flex-row w-full gap-4">
        {plotstype.map((data, index) => (
          <div className="h-45 w-96" key={index}>
            <Variantprops card={data} variant="Plottype"/>
          </div>
        ))}
      </div>
      <div className="flex sm:hidden flex-row overflow-auto justify-between gap-2 pb-3 w-full hide-scrollbar">
          {plotstype.map((data, index) => (
            <div key={index}>
              <Variantprops card={data} variant="ouroffering" />
             
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}

export default Plot;
