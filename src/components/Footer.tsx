import React from "react";
import Link from "next/link";
import Image from 'next/image'

interface FooterProps {
  bgColorFirstDiv?: string;  // Optional prop for first div background color
  bgColorLastDiv?: string; 
  textColor?: string;
}


{}
export default function Footer({ bgColorFirstDiv = 'black', bgColorLastDiv = '#4F4F4F', textColor = 'white' }: FooterProps) {
    return (
     <div>
      <div>
        <div className={`bg-[${bgColorFirstDiv}] text-[#FFF]`}>
          <div className="max-w-[1320px] mx-auto ">
            <div className="max-w-[1170px] mx-auto flex justify-between items-center py-[50px] border-b-[1px] border-b-[#FF9F0D]">
              <div className="flex flex-col">
                <h3 className="font-helvetica text-[32px] font-bold">
                  <span className="text-[#FF9F0D]">St</span>ill You Need Our
                  Support ?
                </h3>
                <p className="m-0 font-inter text-[16px] font-normal">
                  Don not wait make a smart & logical quote here. Its pretty easy.
                </p>
              </div>
  
              <div>
                <form action="" className="font-normal">
                  <input
                    className="p-3 rounded-tl-[4px] rounded-bl-[4px] bg-[#FF9F0D] font-inter text-white placeholder-[#FFF] placeholder-opacity-60"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="submit"
                    className="bg-white p-3 rounded-[4px] text-[#FF9F0D]"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className=" font-bold text-[24px]">
                  About Us.
                </h3>
                <p className="m-0 font-inter font-normal text-[16px]">
                  Corporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#FF9F0D] px-4 py-3 rounded-[4px]">
                   <Image src="/images/Clock.png" alt="clock" width={45} height={45}></Image>
                  </div>
                  <div className="flex flex-col font-inter font-normal">
                    <h4 className="text-[18px]">Opening Houres</h4>
                    <p className="m-0 text-[14px]">Mon - Sat(8.00 - 6.00)</p>
                    <p className="m-0 text-[14px]">Sunday - Closed</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 className="font-bold text-[24px]">
                  Useful Links
                </h3>
                <ul className="flex flex-col gap-[20px] font-inter text-[20px] font-normal">
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Partners</Link>
                  </li>
                  <li>
                    <Link href="#">Team</Link>
                  </li>
                  <li>
                    <Link href="#">Menu</Link>
                  </li>
                  <li>
                    <Link href="#">Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className="font-bold text-[24px]">Help ?</h3>
                <ul className="flex flex-col gap-[20px] font-inter text-[20px] font-normal">
                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#">Term & conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Reporting</Link>
                  </li>
                  <li>
                    <Link href="#">Documentation</Link>
                  </li>
                  <li>
                    <Link href="#">Support Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className="font-bold text-[24px]">
                  Recent Post
                </h3>
  
                <div className="flex flex-col gap-[20px]">
                  <Link href="!" className="flex gap-[20px]">
                    <div className="w-[55px] h-[55px]">
                      <Image
                        src="/images/kabab2.png"
                        className="w-[100%] h-[100%]"
                        alt="image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="font-inter font-normal">
                      <p className="m-0  text-[16px]">20 Feb 2022</p>
                      <p className="text-[18px]">Keep Your Business</p>
                    </div>
                  </Link>
                  <Link href="!" className="flex gap-[20px]">
                    <div className="w-[55px] h-[55px]">
                      <Image
                        src="/images/roast.png"
                        className="w-[100%] h-[100%]"
                        alt="image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="font-inter font-normal">
                      <p className="m-0  text-[16px]">20 Feb 2022</p>
                      <p className="text-[18px]">Keep Your Business</p>
                    </div>
                  </Link>
                  <Link href="!" className="flex gap-[20px]">
                    <div className="w-[55px] h-[55px]">
                      <Image
                        src="/images/roll.png"
                        className="w-[100%] h-[100%]"
                        alt="image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="font-inter font-normal">
                      <p className="m-0  text-[16px]">20 Feb 2022</p>
                      <p className="text-[18px]">Keep Your Business</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-[${bgColorLastDiv}] text-${textColor}`}>
          <div className="max-w-[1320px] h-[100px] mx-auto flex justify-between items-center">
            <p className="m-0 font-normal text-[16px]">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>
            <div className="flex gap-[20px]">
             <div className="bg-white w-[36px] h-[36px] flex justify-center items-center">
               <Link href="#">
               <Image src="/images/facebook.png" alt="pinterest" color="white" width={18} height={12}></Image>
              </Link>
              </div>
              
              <div className="bg-white w-[36px] h-[36px] flex justify-center items-center">
              <Link href="#">
              <Image src="/images/twitter.png" alt="pinterest" color="white" width={24} height={16}></Image>
              </Link>
              </div>

             <div className="bg-white w-[36px] h-[36px] flex justify-center items-center">
             <Link href="#">
             <Image src="/images/insta.png" alt="pinterest" color="white" width={24} height={16}></Image>
              </Link>
             </div>
              <div className="bg-white w-[36px] h-[36px] flex justify-center items-center">
                <Link href="#">
                <Image src="/images/youtube.png" alt="pinterest" color="white" width={24} height={16}></Image>
              </Link>
              </div>
             <div className="bg-white w-[36px] h-[36px] flex justify-center items-center">
             <Link href="#">
             <Image src="/images/pinterest.png" alt="pinterest" color="white" width={24} height={16}></Image>
              </Link>
             </div>
            </div>
          </div>
          </div>
       
        </div>
      </div>
    
    );
  }