'use client'

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Search, ShoppingBag, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"




export default function HeaderHero() {
  return (
   <>
   <div className="w-full bg">
    
   <div className="relative min-h-[950px] w-full bg-[#0D0D0D] overflow-hidden">
      
      {/* Navigation */}
      <nav className="container flex flex-col mx-auto px-4 py-8">
      <div> <Link href="/" className="text-2xl font-bold flex justify-center items-center hover:text-[#FF9F0D] text-[#FF9F0D]">
              Food<span className="text-white">tuck</span>
            </Link></div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
              <Link href="/home" className="font-bold text-white hover:text-[#FF9F0D]">
                Home
              </Link>
              {['Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-[#FF9F0D]">
                  {item}
                </Link>
              ))}
            </div>
      </nav>
  
      {/* Hero Content */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative mt-[293px]">
            <div className="absolute left-[-3rem] top-[-360px] hidden lg:block">
              <div className="h-40 w-px mb-8 bg-white" />
              <div>  <Facebook fill="white" className="h-6 mb-8 ml-[-12px] w-6 "/></div>
              <div> <Twitter fill="orange" className="h-6 mb-8 ml-[-12px] w-6 "/></div>
              <div> <Instagram fill="white" className="h-6 mb-8 ml-[-12px] w-6 "/></div>
              <div className="h-40 w-px bg-white mt-4" />
            </div>
            <div className="mt-[-193px] space-y-6">
              <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">
                Its Quick & Amusing!
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
              </h1>
              <p className="text-white max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
              </p>
             
             <Link href="/menu"> <Button className="bg-[#FF9F0D] mt-6 text-white rounded-full px-8 py-6 hover:bg-[#FF9F0D]/90">
                See Menu
              </Button></Link>
            </div>
          </div>
  
          {/* Right Content */}
          <div className="mt-[71px] relative">
            <div className="relative w-full ">
              <Image
                src="/images/heroMain.png?height=670&width=877"
                alt="Food plate with rice and eggs"
                width={600}
                height={600}
                className=" w-full"
              />
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>

  )
}


