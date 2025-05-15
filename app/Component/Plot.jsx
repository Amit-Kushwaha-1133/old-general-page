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
    <section className=" sm:bg-slate-200 sm:mb-12">
      <div className="hidden sm:flex flex-col px-20 py-14">
        <p className="text-2xl font-extrabold pb-6">Plots in Noida</p>
        
        <div className="flex flex-row w-full gap-4">
        {plotstype.map((data, index) => (
          <div className="h-45 w-96" key={index}>
            <Variantprops card={data} variant="Plottype"/>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Plot;
