'use client';

const para = [
  {
    title: "Get expert help to sell or rent your property.",
    image: "/call.svg",
  },
  {
    title: "Know market trends & make the right property decisions.",
    image: "/market.svg",
  },
  {
    title: "Sell or rent fast at the best price with HexaHome!",
    image: "/sell.svg",
  },
];

export default function Assistancebanner() {
    return (
      <section className="hidden sm:flex w-full ">
      <div className=" bg-[url('/assistancebg.png')] bg-cover bg-center rounded-[20px] h-fit w-full py-6 pl-6">
        <p className="text-blue-900 text-2xl font-extrabold">Need Assistance to Post Property?</p>
        <div className="flex flex-col py-6">
          {para.map((item, index) => (
            <div key={index} className="flex flex-row text-blue-900 text-base font-normal gap-2 space-y-3">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <button className="flex flex-row bg-blue-900 text-white text-base font-bold px-6 py-4 rounded-xl">Get Free Advice
        <img src="/arrowwhite.svg" alt="arrowwhite" />
        </button>

      </div>
    </section>
    );
  }