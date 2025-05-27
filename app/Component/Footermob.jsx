import React from 'react'
import Image from 'next/image'

const text = [
    {
        para:"Our Company",
        img:"/arrowwhiteano.svg",
    },
    {
        para:"Our Branches",
        img:"/arrowwhiteano.svg",
    },
    {
        para:"Quick Links",
        img:"/arrowwhiteano.svg",
    },

]
 
function Footermob() {
  return (
     <section className=" sm:hidden flex flex-col ">
          
          <div className="flex flex-row bg-gray-950 text-white">
            <div className="flex flex-col py-5 px-3">
              <div className="flex flex-row items-center gap-1.5">
                <Image
                  src="/hexahomelogo.svg"
                  alt="hexahomelogo"
                  width={40}
                  height={36}
                />
                <p className="text-white text-3xl font-extrabold">HexaHome</p>
              </div>
             
    
              <div className="w-full h-px bg-gray-400 my-5" />
    
    <div className='flex flex-col gap-4'>
        {
        text.map((data,index) =>(
            <div key={index} className='cursor-pointer flex flex-row justify-between pb-4 items-center border-b border-gray-400 border-dashed'>
            <p className="text-base font-semibold">{data.para}</p>
            <Image
                  src={data.img}
                  alt="arrow"
                  width={24}
                  height={24}
                />
                
            </div>
            
        ) )}
        
    </div>
              <p className="text-base font-semibold pt-4">Contact Inquiries</p>
    
              <div className="flex flex-col gap-5 pt-3">
                <div className="flex flex-row items-center gap-1">
                  <Image
                    src="/location.svg"
                    alt="location"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm font-normal leading-6">
                    Corporate Park, Tower-A1, Sector 142, Noida, Uttar Pradesh
                    201305
                  </p>
                </div>
                <div className="flex flex-row gap-1">
                  <Image src="/mail.svg" alt="mail" width={20} height={20} />
                  <p className="text-sm font-normal">
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
                  <p className="text-sm font-normal">+91 8875745191 (Mon - Sat, 10Am - 7PM)</p>
                </div>
                <div className="flex flex-row gap-4">
                  <Image src="/twitter.svg" alt="twitter" width={36} height={36} />
                  <Image
                    src="/Linkedin.svg"
                    alt="Linkedin"
                    width={36}
                    height={36}
                  />
                  <Image src="/github.svg" alt="github" width={36} height={36} />
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={36}
                    height={36}
                  />
                </div>
              </div>
    
              <div className="flex flex-col gap-3 pt-4 pb-5">
                            <p className="text-sm font-bold text-nowrap">
                              Download HexaHome App now for Free
                            </p>
              
                            <div className="flex flex-row gap-2">
                              <Image
                                src="/Googleplaywhite.svg"
                                alt="Googleplaywhite"
                                width={126}
                                height={40}
                              />
                              <Image
                                src="/appstorewhite.svg"
                                alt="appstorewhite"
                                width={126}
                                height={40}
                              />
                            </div>
                          </div>
    
              <p className="text-xs font-normal leading-5">Usage of HexaHome.in uploading content with non-standard area units or targeting by religion, community, caste, or race is strictly prohibited. Report misuse at [<span className='border-b'>Report Abuse</span>].</p>
              <p className="flex justify-center pt-8 items-end text-xs font-normal">All rights reserved - © 2025 Hexadecimal Software Pvt Ltd</p>
    
              
            </div>
    
           
          </div>
        </section>
  )
}

export default Footermob
