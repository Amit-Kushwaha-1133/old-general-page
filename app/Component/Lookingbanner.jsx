"use client";

const para = [
  {
    title: "Download Our App to Post property for FREE",
    image: "/download.svg",
    showOn: "desktop", // sm and up
  },
  {
    title: "Quick & Verified Buyers/Tenants",
    image: "/quick.svg",
    showOn: "all", // show on all
  },
  {
    title: "Pay No Brokerage!",
    image: "/percent.svg",
    showOn: "all", // show on all
  },
];

export default function Lookingbanner() {
  return (
    <section className="w-full">
      <div className="bg-[url('/teenantbannerbg.png')] sm:bg-[url('/Lookingbg.png')] bg-cover w-full bg-center rounded-[20px] h-full sm:h-fit py-4 pl-4 sm:py-6 sm:pl-6 px-4 sm:px-0">
        <p className="text-white text-lg sm:pb-6 sm:text-2xl font-bold sm:font-extrabold">
          Looking for Buyers/Tenants!
        </p>

        <div className="flex flex-col pt-1 sm:pb-6 pb-3 gap-1 w-full">
          {/* Show these only on sm and up (desktop/tablet) */}
          {para
            .filter((item) => item.showOn === "desktop")
            .map((item, index) => (
              <div
                key={`desktop-${index}`}
                className="hidden sm:flex items-center gap-2 text-white text-base font-normal"
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}

          {/* Show these on all (mobile + desktop) */}
          {para
            .filter((item) => item.showOn === "all")
            .map((item, index) => (
              <div
                key={`all-${index}`}
                className="flex  items-center gap-2 text-white text-base font-normal"
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
        </div>

        <button className="flex items-center gap-2 bg-white text-blue-900 text-sm  sm:text-base font-extrabold px-5 sm:px-6 py-2 sm:py-4 rounded-xl">
          Post Property <span className="sm:hidden">Ad</span> <span className="hidden sm:block">for Free</span>
          <img src="/arroww.svg" alt="arrow" className="hidden sm:block"/>
        </button>
      </div>
    </section>
  );
}
