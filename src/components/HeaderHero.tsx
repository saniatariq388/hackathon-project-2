'use client'

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Search, ShoppingBag, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function HeaderHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full bg">
        <div className="relative min-h-[950px] w-full bg-[#0D0D0D] overflow-hidden">
          {/* Navigation */}
          <nav className="container flex items-center justify-between mx-auto px-4 py-8">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="text-2xl font-bold flex justify-center items-center hover:text-[#FF9F0D] text-[#FF9F0D]"
              >
                Food<span className="text-white">tuck</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/home" className="font-bold text-white hover:text-[#FF9F0D]">
                Home
              </Link>
              {["Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-[#FF9F0D]"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-[80px] left-0 w-full bg-[#0D0D0D] z-50 md:hidden">
              <div className="flex flex-col items-center space-y-6 py-6">
                <Link
                  href="/home"
                  className="font-bold text-white hover:text-[#FF9F0D]"
                  onClick={handleMenuToggle}
                >
                  Home
                </Link>
                {["Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-white hover:text-[#FF9F0D]"
                    onClick={handleMenuToggle}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="container mx-auto px-4 mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="relative mt-[100px] lg:mt-[293px] text-center lg:text-left">
                {/* Social Icons */}
                <div className="absolute left-[-3rem] top-[-360px] hidden lg:block">
                  <div className="h-40 w-px mb-8 bg-white" />
                  <Facebook fill="white" className="h-6 mb-8 ml-[-12px] w-6" />
                  <Twitter fill="orange" className="h-6 mb-8 ml-[-12px] w-6" />
                  <Instagram fill="white" className="h-6 mb-8 ml-[-12px] w-6" />
                  <div className="h-40 w-px bg-white mt-4" />
                </div>
                <div className="space-y-6">
                  <span className="font-['Great_Vibes'] text-2xl sm:text-3xl text-[#FF9F0D]">
                    Its Quick & Amusing!
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
                  </h1>
                  <p className="text-white max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
                  </p>
                  <Link href="/menu">
                    <Button className="bg-[#FF9F0D] mt-6 text-white rounded-full px-8 py-3 md:py-6 hover:bg-[#FF9F0D]/90">
                      See Menu
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content */}
              <div className="mt-[50px] lg:mt-[71px] relative">
                <div className="relative w-full">
                  <Image
                    src="/images/heroMain.png?height=670&width=877"
                    alt="Food plate with rice and eggs"
                    width={600}
                    height={600}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
