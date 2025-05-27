'use client';

import Navbar from "./Navbar";
import Searchtab from "./Searchtab";
import Tabdesk from "./Tabdesk";

export default function Header() {
    return (
      <section className="relative w-full bg-white">
        <div className="absolute inset-0 bg-[url('/bg-header.png')] bg-cover bg-center rounded-b-3xl sm:rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-950 opacity-90 rounded-b-3xl  sm:rounded-none" />
        <div className="relative z-10">
            <Navbar />
        </div>

      <div className="relative hidden sm:flex flex-col sm:pt-16 sm:justify-center sm:items-center sm:gap-3 text-white">
        <p className="text-5xl font-bold ">Ghar Aapka... Khoz hamari</p>
        <p className="text-3xl font-bold text-center">TRUSTED PLACE TO BUY, SELL, OR RENT PROPERTIES IN INDIA</p>
      </div>

      <div className="relative z-10">
            <Tabdesk />
        </div>

        <div className="relative z-10">
            <Searchtab />
        </div>
      </section>
    );
  }