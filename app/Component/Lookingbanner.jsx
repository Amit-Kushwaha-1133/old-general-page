"use client";

const para = [
  {
    title: "Download Our App to Post property for FREE",
    image: "/download.svg",
  },
  {
    title: "Quick & Verified Buyers/Tenants",
    image: "/quick.svg",
  },
  {
    title: "Pay No Brokerage!",
    image: "/percent.svg",
  },
];

export default function Lookingbanner() {
  return (
    <section className="flex w-full">
      <div className=" bg-[url('/Lookingbg.png')] bg-cover bg-center rounded-[20px] h-fit w-full py-6 pl-6">
        <p className="text-white text-2xl font-extrabold">Looking for Buyers/Tenants!</p>
        <div className="flex flex-col py-6">
          {para.map((item, index) => (
            <div key={index} className="flex flex-row text-white text-base font-normal gap-2 space-y-3">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <button className="flex flex-row bg-white text-blue-900 text-base font-bold px-6 py-4 rounded-xl">Post Property for Free
        <img src="/arroww.svg" alt="arroww" />
        </button>

      </div>
    </section>
  );
}
