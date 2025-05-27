import React from "react";
import Image from "next/image";
const dataa = [
  {
    id: "1",
    image: "/search.svg",
    para: "Find your perfect home, PG, or rental in just a few clicks.",
  },
  {
    id: "2",
    image: "/homewhite.svg",
    para: "Post your property at ₹0 cost and get genuine buyers & tenants fast",
  },
  {
    id: "3",
    image: "/notificationicon.svg",
    para: "Smart alerts & search helps you find homes that fit your budget.",
  },
];

const dataa2 = [
  {
    id: "1",
    image: "/search.svg",
    para: "Find your perfect home.",
  },
  {
    id: "2",
    image: "/homewhite.svg",
    para: "Post your property at ₹0.",
  },
];

function Downloadappbanner() {
  return (
    <section className="flex flex-row bg-white ">
    <div className="relative flex flex-row bg-blue-800 rounded-2xl sm:rounded-4xl text-white mx-3 sm:mx-20 mb-6 sm:mb-18 justify-between"
     style={{
    backgroundImage: `
      linear-gradient(to right, rgba(204, 204, 204, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(204, 204, 204, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: "80px 80px",
  }}
  >
      <div className="flex flex-col py-4 sm:py-11 pl-4 sm:pl-11 ">        
        <h2 className="text-base font-semibold sm:text-3xl sm:font-black pb-2 sm:pb-6">Buy, Sell & Rent Properties – Download HexaHome App Now!</h2>

        <div className="flex flex-col sm:gap-3">
           {/* Show only first 2 items on mobile */}
      <div className="flex flex-col gap-2 sm:hidden">
        {dataa2.map((data, index) => (
          <div
            key={index}
            className="flex flex-row text-2xl font-normal leading-6 items-center gap-3"
          >
            <Image
              src={data.image}
              alt={data.id}
              width={20}
              height={16}
              className="sm:w-5 h-4"
            />
            <p className="flex text-xs font-normal sm:text-2xl sm:leading-8">
              {data.para}
            </p>
          </div>
        ))}
      </div>

      {/* Show all items on screens sm and above */}
      <div className="hidden sm:flex flex-col gap-3">
        {dataa.map((data, index) => (
          <div
            key={index}
            className="flex flex-row text-2xl font-normal leading-6 items-center gap-3"
          >
            <Image
              src={data.image}
              alt={data.id}
              width={20}
              height={16}
              className="w-5 h-4"
            />
            <p className="flex text-2xl font-normal leading-8">
              {data.para}
            </p>
          </div>
        ))}
      </div>

          <div className="flex flex-row sm:gap-6 pt-2 sm:pt-5">
            <div className="hidden sm:block">
              <Image src="/scanner.svg" alt="scanner" width={128} height={128} />
            </div>
            <div className="flex flex-col">
              <p className="hidden sm:block text-2xl font-semibold leading-7 sm:pb-3">Scan to Download our App</p>
              <p className="pb-2 sm:pb-3 text-xs  sm:text-xl font-semibold sm:font-normal">Available on iOS & Android <span className="hidden sm:block">– Download Now!</span></p>
              <div className="flex flex-row gap-1">
                <div>
                  <Image
                    src="/googleplay.svg"
                    alt="googleplay"
                    width={152}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    src="/appstore.svg"
                    alt="appstore"
                    width={152}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
      <Image
                    src="/bannermobile.png"
                    alt="bannermobile"
                    width={425}
                    height={596}
                    className="flex justify-end h-full pt-5 pr-10"
                  />

                  </div>
                  </div>
    </section>
  );
}

export default Downloadappbanner;
