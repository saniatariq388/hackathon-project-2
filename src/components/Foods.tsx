import React from 'react'
import Image from "next/image"
import { greatVibesFont } from '@/font'



function Foods() {
  return (
    <div>
      <div className="w-full mb-[110px] bg-[#050505] flex items-center justify-center px-4">
        <div className="w-full max-w-[1360px] mt-[120px] flex flex-col items-center justify-center">
          {/* Header Section */}
          <div className="flex flex-col text-center">
            <h1
              className={`${greatVibesFont.className} text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] text-orange-500`}
            >
              Food Category
            </h1>
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-extrabold text-white">
              <span className="text-orange-500">Ch</span>oose Food Item
            </h1>
          </div>

          {/* Food Grid */}
          <div className="w-full max-w-[1320px] grid gap-6 md:gap-[32px] grid-cols-2 md:grid-cols-4 mt-[56px] cursor-pointer">
            <div className="relative w-full transform hover:scale-105">
              <Image
                src="/images/salad3.png"
                alt="salad image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute w-[125px] h-[40px] z-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[16px] py-2 leading-[26px] bg-white text-center text-orange-600">
                Save 30%
              </div>
              <div className="absolute w-[206px] h-[46px] z-10 top-[60%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[16px] py-2 leading-[26px] bg-orange-500 text-center text-white">
                Fast Food Dish
              </div>
            </div>
            <div className="relative w-full transform hover:scale-105">
              <Image
                src="/images/burger.png"
                alt="burger image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full transform hover:scale-105">
              <Image
                src="/images/salad.png"
                alt="salad image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full transform hover:scale-105">
              <Image
                src="/images/donuts.png"
                alt="donuts image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Shawarma Section */}
          <div className="w-full max-w-[660px] grid grid-cols-1 md:grid-cols-2 mt-[110px] transform hover:scale-105">
            <Image
              src="/images/shawarma.png"
              alt="shawarma"
              width={370}
              height={370}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foods;


