'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MicroscopeIcon as MagnifyingGlass, ShoppingBag, User } from 'lucide-react'
import React from 'react'

function HeroHeader() {
  return (
    <div>
       <div className='pl-[0px]'>
       <div className="relative w-full bg-red-500 overflow-hidden">
        
        {/* Hero Images */}
        <div className=" hidden md:block">
          <div className="absolute inset-0 w-full top-0 left-0 h-[1010px] z-100 " />
          
        <Image
            src="/images/bg.png?height=1000&width=2000"
            alt="Delicious Food"
            width={2000}
            height={1000}
            className="object-cover"
          />
        </div>
        
   <div className='absolute top-0 left-0 z-1 bg-transparent w-full'>
        
      {/* Navigation */}
      <nav className="container mx-auto pl-2 px-20 py-12">
        <div className="flex items-center justify-between w-[1320px]">
          <Link href="/" className="text-2xl font-bold text-black">
            Foodtuck
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-bold text-black text-4">
              Home
            </Link>
            {['Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-black hover:text-orange-500">
                {item}
              </Link>
            ))}
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-2">
              <MagnifyingGlass className="w-6 h-6" />
            </button>
            <button aria-label="Shopping bag" className="p-2">
              <ShoppingBag className="w-6 h-6" />
            </button>
            <button aria-label="User account" className="p-2">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto my-16 px-4 grid md:grid-cols-2 gap-8 pt-20">
        <div className="space-y-6">
          {/* Decorative Stars */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#195A00] transform rotate-45"
                />
              ))}
            </div>
            <span className="text-[#195A00] font-miniver text-lg">
              Healthy & Testy Food
            </span>
            <div className="w-6 h-0.5 bg-[#195A00] rounded" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Enjoy Healthy Life & Testy Food.
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-12 py-4 bg-[#195A00] text-white rounded-md font-bold hover:bg-[#143f00] transition-colors">
              Order Now
            </button>
            <button className="px-12 py-4 border-2 border-[#195A00] text-[#195A00] rounded-md font-bold hover:bg-[#195A00] hover:text-white transition-colors">
              Watch Video
            </button>
          </div>
        </div>

      </div>

   </div>
    </div>
       </div>
    </div>
  )
}

export default HeroHeader