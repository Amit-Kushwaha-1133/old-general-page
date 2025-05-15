import React from "react";
import Image from "next/image";

const ApartmentCard = ({ data, highlights }) => {
  return (
    <div className="border border-gray-300 rounded-2xl w-85 mt-6 cursor-pointer ">
      <div className="relative">
        <Image
          src={data.Images}
          alt={data.apartheading}
          width={340}
          height={192}
          className="object-cover hover:scale-105 transition-transform ease-in-out duration-300"
        />
        <p className="absolute bottom-0 right-0 bg-white rounded-tl-2xl text-black text-sm px-3 py-1.5">
          {data.prices}
        </p>
        <Image
          src={data.bookmarks}
          alt={data.apartheading}
          width={45}
          height={45}
          className="absolute top-3 right-3 text-white text-sm px-2 py-1"
        />
        <p className="flex items-center w-fit font-bold absolute rounded-4xl top-3 left-3 bg-black/60 text-white text-sm px-3 py-1.5">
          {data.apartmenttype}
        </p>
      </div>

      <div className="flex flex-col px-2">
        <p className="text-base font-bold leading-6 pb-1 pt-2">
          {data.apartheading}
        </p>
        <p className="text-base font-semibold text-gray-400 leading-6 pb-2">
          {data.loc}
        </p>

        <div className="w-full flex flex-row overflow-x-auto space-x-2 hide-scrollbar">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="min-w-max font-semibold leading-4 rounded-md px-3 py-1 border border-[#E9ECFA] gap-1.5 text-xs bg-blue-50 mb-3"
            >
              {item.id}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-dashed border-gray-400 pb-3" />

      <div className="flex flex-row justify-between px-2 pb-2.5">
        <div className="flex flex-col">
         {/* <Image /> */}
          <p className="text-xs font-medium text-gray-400">
            Posted By </p>
            <p className="text-sm font-extrabold">{data.posted}</p>
        </div>

        <button className="text-white bg-blue-900 py-3 px-5.5 rounded-lg">
          View Number
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
