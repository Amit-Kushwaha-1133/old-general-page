'use client'

import Propertyopt from "./Propertyopt";

export default function Searchtab() {
  return (
    <section className="sm:pt-4 sm:pb-20 flex justify-center">
    <div className="hidden sm:flex flex-row bg-white rounded-full py-2 w-fit">
      <div className="flex items-center">
        <div className="flex items-center">
          <Propertyopt />
        </div>

        <div className="w-px h-full rounded bg-gray-400"></div>
      </div>
  
      <div className="flex flex-row items-center gap-2 px-2.5">
      <img
        src="/locationblue.svg"
        alt="location"
        className="w-6 h-6 ml-2"
      />
        <input
          type="text"
          placeholder="Search for City, Locality or Projects"
          className="px-4 py-2 placeholder:text-gray-500 text-base outline-none w-80"
        />
        <button className="bg-blue-900 text-white px-12 py-4 text-xl font-medium rounded-4xl cursor-pointer">
          Search
        </button>
      </div>
    </div>
  </section>
  
  );
}