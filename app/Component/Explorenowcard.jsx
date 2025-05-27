import React from 'react';
import Image from 'next/image';

const Explorenow = [
  {
    title: "Search for Commercial",
    desc: "Find the Perfect Space to Grow Your Business Today!",
    bgimage: "/explorecommbg.png",
  },
  {
    title: "Search for Commercial",
    desc: "Find the Perfect Space to Grow Your Business Today!",
    bgimage: "/explorecommbg.png",
  },
  {
    title: "Search for Commercial",
    desc: "Find the Perfect Space to Grow Your Business Today!",
    bgimage: "/explorecommbg.png",
  },
  {
    title: "Search for Commercial",
    desc: "Find the Perfect Space to Grow Your Business Today!",
    bgimage: "/explorecommbg.png",
  },
];

function Explorenowcard() {
  return (
    <section className="sm:hidden bg-white">
      <div className="flex flex-row overflow-x-auto hide-scrollbar pt-5 gap-3 px-3">
        {Explorenow.map((item, index) => (
          <div
            className="relative min-w-full h-40 rounded-2xl  overflow-hidden shadow-md"
            key={index}
          >
            <div className='absolute'>
            <Image
              src={item.bgimage}
              alt={item.title}
              width={380}
              height={160}
              className="w-full h-40 rounded-2xl object-cover"
            />
            
            <div className="absolute inset-0 bg-black/50" />

           
            <div className="absolute inset-0 z-10 flex flex-col justify-center max-w-2/3 pl-4 py-4 gap-1 text-white pb-4">
              <p className="text-lg text-black font-extrabold">{item.title}</p>
              <p className="text-sm font-medium text-black mb-1 flex flex-wrap">{item.desc}</p>
              <button className="bg-blue-900 w-fit px-4 py-2 flex flex-nowrap text-sm rounded hover:bg-blue-700 transition-colors">
                Explore Now
                <Image
              src="/arrowwhiteano.svg"
              alt="arrowwhiteano"
              width={16}
              height={16}
              
            />
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explorenowcard;
