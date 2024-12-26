import { greatVibesFont } from '@/font'
import { Check } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'


function AboutUs() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-black">
        <div className="w-full max-w-[1320px] flex flex-col lg:flex-row gap-12 lg:gap-[98px] justify-between px-4">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-4">
            <h1
              className={`${greatVibesFont.className} text-[32px] leading-[40px] text-orange-500`}
            >
              <span className="text-6xl">a</span>bout us
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-orange-500">We</span> Create the best foody product
            </h1>
            <p className="text-[16px] leading-[24px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex gap-2 items-center">
              <Check color="white" />
              <p className="text-white">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Check color="white" />
              <p className="text-white">
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Check color="white" />
              <p className="text-white">
                Lacus nisi, et ac dapibus sit eu velit in consequat elit.
              </p>
            </div>
            <Link href="/about">
              <Button className="bg-[#FF9F0D] w-[190px] h-[60px] text-white rounded-full px-8 py-4 hover:bg-[#FF9F0D]/90">
                Read More
              </Button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full h-auto col-span-2">
              <Image
                src="/images/eggs.png"
                alt="eggs image"
                width={660}
                height={330}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full h-auto">
              <Image
                src="/images/food1.png"
                alt="kabab"
                width={322}
                height={194}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full h-auto">
              <Image
                src="/images/burger2.png"
                alt="burger"
                width={322}
                height={194}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;


