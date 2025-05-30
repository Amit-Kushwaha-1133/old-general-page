import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <section className="sm:flex flex-col hidden ">
      <div className="w-full flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-[url('/bgfooter.png')] bg-cover bg-center filter blur-xs z-0" />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-10 w-full flex flex-row items-center py-10 px-28 gap-32 justify-between text-white">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">
              Guidance and assistance from start to finish.
            </p>
            <p className="text-base font-normal">
              Talk to a professional and get the right property insights.
            </p>
          </div>

          <div className="flex flex-row items-center justify-between gap-10 h-full">
            <div className="flex flex-col">
              <p className="text-lg font-bold">Help Desk:</p>
              <p className="text-lg font-medium">amitkukushwaha@gmail.com</p>
            </div>

            <div className="h-full w-px bg-gray-400" />

            <div>
              <p className="text-lg font-bold">Contact:</p>
              <p className="text-lg font-medium">+91 8875745191</p>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-row bg-gray-950 text-white justify-between">
        <div className="flex flex-col pl-20 pt-10 border-r pr-3 lg:pr-10 pb-11">
          <div className="flex flex-row items-center gap-1.5">
            <Image
              src="/hexahomelogo.svg"
              alt="hexahomelogo"
              width={45}
              height={40}
            />
            <p className="text-white text-4xl font-extrabold">HexaHome</p>
          </div>
          <p className="text-xs leading-4 pt-3">
            Usage of HexaHome.in uploading content with non-standard area units
            or targeting by religion, community, caste, or race is strictly
            prohibited. Report misuse at [Report Abuse].
          </p>

          <div className="w-full h-px bg-gray-400 my-5" />

          <p className="text-2xl font-extrabold">Contact Inquiries</p>

          <div className="flex flex-col gap-3 pt-3">
            <div className="flex flex-row gap-1">
              <Image
                src="/location.svg"
                alt="location"
                width={20}
                height={20}
              />
              <p className="text-base font-normal leading-8">
                Corporate Park, Tower-A1, Sector 142, Noida, Uttar Pradesh
                201305
              </p>
            </div>
            <div className="flex flex-row gap-1">
              <Image src="/mail.svg" alt="mail" width={20} height={20} />
              <p className="text-base font-normal">
                support@hexadecimalsoftware.com
              </p>
            </div>

            <div className="flex flex-row gap-1">
              <Image
                src="/Callwhite.svg"
                alt="Callwhite"
                width={20}
                height={20}
              />
              <p className="text-base font-normal">+91 8875745191</p>
            </div>
            <div className="flex flex-row gap-4">
              <Image src="/twitter.svg" alt="twitter" width={32} height={32} />
              <Image
                src="/Linkedin.svg"
                alt="Linkedin"
                width={32}
                height={32}
              />
              <Image src="/github.svg" alt="github" width={32} height={32} />
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
              />
            </div>
          </div>

          <div className="w-full h-px bg-gray-400 my-5" />

          <p className="text-xl font-bold leading-6">Connect with Us</p>
          <p className="pt-2 pb-4 text-base font-medium">Get  a free consultation. just leave a request below</p>

          <div className="bg-white h-fit flex flex-row rounded-xl">
            <input
              type="text"
              placeholder="Your Phone Number"
              className="placeholder-blue-950 font-medium flex py-4 pl-3 items-center w-full"
            />
            <button className="bg-blue-900 px-4 m-1 gap-1 rounded-xl justify-center flex flex-row items-center">
              <p>Send</p>
              <Image
                src="/arrowwhiteg.svg"
                alt="arrowwhiteg"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col pl-3 lg:pl-10 pt-10 pr-20 pb-11">
          <div className="w-full flex flex-row pb-20 justify-between">
            <div>
              <p className="text-2xl font-bold border-b">Our Company</p>
              <ul className="list-disc list-inside flex flex-col gap-4 pt-6 text-base font-normal leading-6 text-nowrap">
                <li>About Us</li>
                <li>Feedback</li>   
                <li>Careers With Us</li>
                <li>Support</li>
                <li>Privacy policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div>
              <p className="text-2xl font-bold border-b">Quick Links</p>
              <ul className="list-disc list-inside flex flex-col gap-4 pt-6 text-base font-normal leading-6 text-nowrap">
                <li>Blogs</li>
                <li>Unit Converter</li>
                <li>FAQ’s</li>
                <li>Safety Guide</li>
                <li>Report a Problem</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-bold border-b">Our Branches</p>
              <ul className="list-disc list-inside flex flex-col gap-4 pt-6 text-base font-normal leading-6 text-nowrap">
                <li>Hexadecimal software</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold leading-8 text-nowrap">
                Available on iOS & Android
              </p>

              <div className="flex flex-row gap-3">
                <Image
                  src="/Googleplaywhite.svg"
                  alt="Googleplaywhite"
                  width={182}
                  height={62}
                />
                <Image
                  src="/appstorewhite.svg"
                  alt="appstorewhite"
                  width={182}
                  height={62}
                />
              </div>
            </div>
            <div className="flex flex-row items-center pl-20 justify-between pr-20">
              <Image
                src="/scanner.svg"
                alt="appstorewhite"
                width={104}
                height={104}
              />
              <p className="pl-3 text-2xl font-bold">Scan to Download our App</p>
            </div>
          </div>

          <p className="pt-16 flex justify-center text-xl leading-7">All rights reserved - © 2024 Hexadecimal Software PVT LTD</p>
        </div>
      </div>
      
    </section>
  );
}

export default Footer;
