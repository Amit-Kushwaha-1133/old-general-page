import React from 'react';


const Explorenow = [
    {
        title:"Search for Commercial",
        desc:"Find the Perfect Space to Grow Your Business Today!",
        bgimage:"/explorecommbg.png",
    },
    {
        title:"Search for Commercial",
        desc:"Find the Perfect Space to Grow Your Business Today!",
        bgimage:"/explorecommbg.png",
    },
    {
        title:"Search for Commercial",
        desc:"Find the Perfect Space to Grow Your Business Today!",
        bgimage:"/explorecommbg.png",
    },
    {
        title:"Search for Commercial",
        desc:"Find the Perfect Space to Grow Your Business Today!",
        bgimage:"/explorecommbg.png",
    },
];

function Explorenowcard() {
  return (
    <section className="sm:hidden ">
    <div className='flex flex-row overflow-auto'>
  {Explorenow.map((item, index) => (
    <div className="relative h-64 rounded-lg overflow-hidden" key={index}>
    
      <div
        className="absolute inset-0 bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${item.bgimage})` }} 
      />
      
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white p-6">
        <p className="text-xl font-bold">{item.title}</p>
        <p className="text-sm mb-4">{item.dev}</p>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Explore Now
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default Explorenowcard