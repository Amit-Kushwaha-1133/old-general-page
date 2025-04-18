'use client';

import Navbar from "./Navbar";

export default function Header() {
    return (
      <section className="relative w-full">
        <div className="absolute inset-0 bg-[url('/bg-header.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-950 opacity-90" />
        <div className="relative z-10">
            <Navbar />
        </div>
      </section>
    );
  }