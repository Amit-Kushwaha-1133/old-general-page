import React from 'react';
import Image from 'next/image';

const sale = [
  {
    deal: "Hot Deal",
    bookmarks: "/Bookmarks.svg",
    price: "₹ 1.3 Cr",
    plottype: "Residential plot for sale",
    loc: "Sector 142, Noida",
    Images: "/plotbg.png",
  },
  {
    deal: "Hot Deal",
    bookmarks: "/Bookmarks.svg",
    price: "₹ 1.3 Cr",
    plottype: "Residential plot for sale",
    loc: "Sector 142, Noida",
    Images: "/plotbg.png",
  },
  {
    deal: "Hot Deal",
    bookmarks: "/Bookmarks.svg",
    price: "₹ 1.3 Cr",
    plottype: "Residential plot for sale",
    loc: "Sector 142, Noida",
    Images: "/plotbg.png",
  },
  {
    deal: "Hot Deal",
    bookmarks: "/Bookmarks.svg",
    price: "₹ 1.3 Cr",
    plottype: "Residential plot for sale",
    loc: "Sector 142, Noida",
    Images: "/plotbg.png",
  },
  {
    deal: "Hot Deal",
    bookmarks: "/Bookmarks.svg",
    price: "₹ 1.3 Cr",
    plottype: "Residential plot for sale",
    loc: "Sector 142, Noida",
    Images: "/plotbg.png",
  },
  {
    deal: "Hot Deal",
    bookmarks: "/Bookmarks.svg",
    price: "₹ 1.3 Cr",
    plottype: "Residential plot for sale",
    loc: "Sector 142, Noida",
    Images: "/plotbg.png",
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

function Plotprop() {
  return (
    <section className="hidden sm:flex flex-col px-20 bg-white pt-18">
      <p className="text-2xl text-black font-extrabold pb-6">Plots for Sale in Noida</p>
      <div className="flex w-full flex-row overflow-x-auto hide-scrollbar gap-4">
        {sale.map((data, index) => (
          <div className="relative" key={index}>
            <div className='h-fit w-85'>
            <Image
              src={data.Images}
              alt={data.plottype}
              width={350}
              height={320}
              className="h-60 w-85 object-cover rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
            />
            </div>
            <Image
              src={data.bookmarks}
              alt={data.plottype}
              width={45}
              height={45}
              className="absolute top-3 right-3"
            />
            <p className="absolute top-3 left-3 bg-black/60 text-white text-sm font-bold rounded-4xl px-3 py-1.5">
              Plots
            </p>
            <p className="absolute top-3 left-24 bg-red-700 text-white text-sm font-bold rounded-4xl px-3 py-1.5">
              {data.deal}
            </p>

            <div className="absolute bottom-2 left-0 w-full bg-black/80 text-white pl-4 py-4 rounded-b-2xl">
              <p className="font-semibold">{data.price}</p>
              <p className="font-bold text-sm">{data.plottype}</p>
              <p className="text-sm font-semibold text-gray-400">{data.loc}</p>

              
              <div className="mt-3 overflow-x-auto hide-scrollbar">
                <div className="flex space-x-2">
                  {highlight.map((item, idx) => (
                    <div
                      key={idx}
                      className="min-w-max font-semibold leading-4 text-black rounded-md px-3 py-1 border border-[#E9ECFA] text-xs bg-blue-50"
                    >
                      {item.id}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plotprop;
