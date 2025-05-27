"use client";

import Tab from "./Tab";

export default function Navbar() {
  return (
    <section className="flex flex-col w-full px-3 gap-4">
      <div className="flex flex-row pt-5 sm:ml-6 justify-between  sm:justify-evenly">
        <div className="flex flex-row gap-2">
        <div className="flex flex-row items-center">
          <img
            src="/hexahomelogo.svg"
            alt="hexahomelogo"
            className="w-8 h-7 p-1 sm:w-10 sm:h-9"
          />
          <p className="font-extrabold text-xl lg:text-2xl xl:text-3xl text-white hidden sm:block">
            Hexahome
          </p>
        </div>

        <div className="flex flex-row gap-1.5 sm:gap-2.5 items-center sm:rounded-3xl sm:py-2 sm:px-3 sm:bg-white/30">
          <p className="text-white flex flex-row text-nowrap">
            <span className="hidden sm:block">Buy in&nbsp;</span>Noida
          </p>
          <div className="flex items-center">
            <img
              src="dropdown.svg"
              alt="dropdown"
              className="w-2 h-1 sm:w-3 sm:h-1.5"
            />
          </div>
        </div>
</div>
        <div className="sm:flex flex-row hidden items-center sm:gap-5 xl:gap-7 text-white text-base">
          <p>For Buyers</p>
          <p>For Tenants</p>
          <p>For Owners</p>
          <p>For Co-living</p>
        </div>

        <div className="sm:flex sm:flex-row items-center gap-1 text-white hidden">
          <div>
            <img
              src="downloadapp.svg"
              alt="downloadapp"
              width={20}
              height={20}
            />
          </div>
          <p>Download App</p>
        </div>

        <div className="sm:flex flex-row sm:bg-white hidden items-center sm:gap-1 sm:flex-nowrap sm:rounded-3xl px-3 p-2.5">
          <p className="text-blue-900 text-sm">Post Property</p>
          <p className="bg-green-700 text-white text-xs px-2 py-1.5 rounded-3xl">
            FREE
          </p>
        </div>

        <div className=" flex flex-row gap-3 sm:hidden">
          <div className="flex flex-row items-center gap-1 sm:hidden border border-white rounded-3xl px-3 py-2">
            <p className="text-white text-sm">Add Listing</p>
            <p className="bg-green-700 text-white text-xs p-1 rounded-3xl">
              FREE
            </p>
          </div>

          <div className="flex items-center sm:hidden">
            <img
              src="notification.svg"
              alt="notification"
              className="sm:w-6 sm:h-6"
            />
          </div>
        </div>

        <div className="sm:flex flex-row items-center hidden gap-2 border border-white rounded-3xl px-3 py-2">
          <div>
            <img src="profile.png" alt="profile" className="sm:w-6 sm:h-6" />
          </div>

          <div className="hidden sm:block">
            <img
              src="hambergmenu.svg"
              alt="hambergmenu"
              className="sm:w-6 sm:h-6"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:hidden bg-white rounded-xl overflow-hidden border border-gray-300">
        <input
          type="text"
          placeholder="Search for city, locality..."
          className="px-3 py-3 text-base placeholder:text-gray-500 flex-grow outline-none"
        />
        <button className="flex flex-row items-center bg-blue-800 text-white px-3 py-3">
          <img src="/search.svg" alt="search" className="w-5 h-5 mr-1" />
          <span>Search</span>
        </button>
      </div>

      <div>
        <Tab/>
      </div>
    </section>
  );
}
