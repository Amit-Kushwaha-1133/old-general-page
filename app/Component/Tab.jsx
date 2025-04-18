'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const tabswitch = [
  { text: "Rent", imageurl: "/rent.svg" },
  { text: "Buy", imageurl: "/buy.svg" },
  { text: "PG's", imageurl: "/pg.svg" },
  { text: "Land", imageurl: "/land.svg" },
  { text: "Co-living", imageurl: "/rent.svg" },
  { text: "Project", imageurl: "/buy.svg" },
  { text: "Commercial", imageurl: "/land.svg" }
];


export default function Tab() {

    const scrollContainerRef = useRef(null);

    return (
      <section className="w-full sm:hidden overflow-x-auto hide-scrollbar">
      <div
        ref={scrollContainerRef}
        className="flex flex-nowrap gap-2"
      >
        {tabswitch.map((tab, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-row items-center bg-blue-800 border border-gray-300 px-3 py-2 rounded-lg gap-2"
          >
            {tab.imageurl && (
              <Image
                src={tab.imageurl}
                alt={tab.text}
                width={24}
                height={24}
              />
            )}
            <p className="text-sm text-white">{tab.text}</p>
          </div>
        ))}
      </div>
       
      </section>
    );
  }